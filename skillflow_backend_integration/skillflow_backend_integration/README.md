# SkillFlow Backend Integration

This package adds a Node/Express + PostgreSQL backend and frontend API client to the existing SkillFlow React/Vite website.

## 1. Backend setup

Open a terminal in `backend`:

```bash
npm install
```

Create `.env` from `.env.example` and set your PostgreSQL connection:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/skillflow
JWT_SECRET=use-a-long-random-secret
FRONTEND_URL=http://localhost:5173
```

Create a PostgreSQL database named `skillflow`, then run `sql/schema.sql` against it.

Then:

```bash
npm run dev
```

Health check:

`http://localhost:5000/api/health`

## 2. Frontend setup

Copy `frontend/src/api.js` into your existing project's `src/api.js`.

Create `.env` in the existing frontend project:

```env
VITE_API_URL=http://localhost:5000/api
```

Restart Vite after changing `.env`.

## 3. Important integration note

The API client is ready, but your existing `main.jsx` needs to call these functions from its UI handlers.

Recommended first connection:
- Login/Register -> `authApi.login()` / `authApi.register()`
- Profile save -> `profileApi.update()`
- Assessment submit -> `assessmentApi.submit()`
- Roadmap checkbox/button -> `roadmapApi.update()`
- Jobs -> `jobsApi.get()`
- Progress -> `progressApi.get()`
- Settings -> `settingsApi.update()`

The current uploaded website code is a dashboard-only UI and does not contain a login screen yet, so a login/register UI must be added to `main.jsx`.

## Production

Frontend:
`VITE_API_URL=https://YOUR-BACKEND.onrender.com/api`

Backend:
`FRONTEND_URL=https://YOUR-FRONTEND.vercel.app`

Do not commit `.env` files.
