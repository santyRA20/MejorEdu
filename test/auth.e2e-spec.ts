import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Auth + Profile (E2E)', () => {
  let app: INestApplication;

  const TRY_BODIES = [
    process.env.E2E_EMAIL && process.env.E2E_PASSWORD
      ? { path: '/auth/login', body: { email: process.env.E2E_EMAIL, password: process.env.E2E_PASSWORD } }
      : null,
    process.env.E2E_USERNAME && process.env.E2E_PASSWORD
      ? { path: '/auth/login', body: { username: process.env.E2E_USERNAME, password: process.env.E2E_PASSWORD } }
      : null,

    { path: '/auth/login', body: { email: 'admin', password: 'admin123' } },
    { path: '/auth/login', body: { username: 'admin', password: 'admin123' } },
    { path: '/auth/login', body: { email: 'admin', password: 'admin' } },
    { path: '/auth/login', body: { username: 'admin', password: 'admin' } },
  ].filter(Boolean) as Array<{ path: string; body: any }>;

  process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret';
  process.env.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

  beforeAll(async () => {
    const mod = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = mod.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Login válido → guarda token y (si existe) valida email/username', async () => {
    let token: string | undefined;
    let matchedBody: any;
    let lastRes: request.Response | undefined;

    for (const attempt of TRY_BODIES) {
      const res = await request(app.getHttpServer()).post(attempt.path).send(attempt.body);
      lastRes = res;

      if ((res.status === 200 || res.status === 201) && res.body?.access_token) {
        token = res.body.access_token;
        matchedBody = attempt.body;

        if (res.body.user?.email && matchedBody.email) {
          expect(res.body.user.email).toBe(matchedBody.email);
        }
        if (res.body.user?.username && matchedBody.username) {
          expect(res.body.user.username).toBe(matchedBody.username);
        }
        break;
      }
    }

    if (!token) {
      console.error('Último intento de login:', {
        status: lastRes?.status,
        body: lastRes?.body,
      });
    }

    expect(token).toBeDefined();
    process.env.E2E_TOKEN = token!;
  });

  it('Profile SIN token → 401', async () => {
    await request(app.getHttpServer())
      .get('/users/profile')
      .expect(401);
  });

  it('Profile CON token → 200 y email/username coincide', async () => {
    const token = process.env.E2E_TOKEN as string;
    expect(token).toBeDefined();

    const res = await request(app.getHttpServer())
      .get('/users/profile')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    const used = TRY_BODIES.find((a) =>
      (a.body.email && res.body.email) || (a.body.username && res.body.username),
    )?.body;

    if (res.body.email && used?.email) {
      expect(res.body.email).toBe(used.email);
    }
    if (res.body.username && used?.username) {
      expect(res.body.username).toBe(used.username);
    }
  });
});
