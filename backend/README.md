# FastAPI Project - Backend

## Requirements

* [uv](https://docs.astral.sh/uv/) for Python package and environment management.
* PostgreSQL.

## Local Development

Configure `DATABASE_URL` to point to a running PostgreSQL instance and set `PROJECT_NAME`. From `./backend/`, install dependencies, apply database migrations, and start the development server:

```console
$ uv sync
$ uv run bash scripts/prestart.sh
$ uv run fastapi dev
```

The API is available at `http://localhost:8000`, with automatic interactive docs at `http://localhost:8000/docs`.

## General Workflow

Run backend commands from `./backend/` with `uv run`. Modify SQLModel models in `./backend/app/models.py`, API endpoints in `./backend/app/api/`, and CRUD utilities in `./backend/app/crud.py`.

## Backend Tests

With PostgreSQL running and `DATABASE_URL` configured, run:

```console
$ uv run bash scripts/test.sh
```

The tests run with Pytest. Modify or add tests in `./backend/tests/`.

## Migrations

Create a new Alembic revision after changing a model, then apply it to the database:

```console
$ uv run alembic revision --autogenerate -m "Describe the schema change"
$ uv run alembic upgrade head
```

The authentication-removal migration drops the `user` table and `item.owner_id`; item records are preserved, but account records and ownership mappings are deleted.
