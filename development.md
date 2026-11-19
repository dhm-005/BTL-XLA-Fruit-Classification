# FastAPI Project - Development

## Requirements

* Python and [uv](https://docs.astral.sh/uv/).
* [Bun](https://bun.sh/) for the frontend.
* A running PostgreSQL instance.

## Configure the Database

Set `DATABASE_URL` to a PostgreSQL connection URL and set `PROJECT_NAME`. The backend reads these settings from environment variables or the repository-root `.env` file.

## Run the Backend

From the `backend` directory:

```bash
uv sync
uv run bash scripts/prestart.sh
uv run fastapi dev
```

The API and interactive docs are available at <http://localhost:8000> and <http://localhost:8000/docs>.

## Run the Frontend

From the project root:

```bash
bun install
bun run dev
```

The frontend is available at <http://localhost:5173> and uses the backend at <http://localhost:8000>.

To serve the built frontend through FastAPI, run `bun run build` from `frontend`; the output is written to `backend/app/frontend`.

## Tests

With PostgreSQL running and the backend configured:

```bash
cd backend
uv run bash scripts/test.sh
```

For frontend end-to-end tests, start the backend and frontend development server, then run `bunx playwright install chromium` and `bunx playwright test` from `frontend`.

## Pre-commit Hooks and Code Linting

The project uses [prek](https://prek.j178.dev/) for code linting and formatting. Install the Git hook from the project root:

```bash
uv run prek install -f
```
