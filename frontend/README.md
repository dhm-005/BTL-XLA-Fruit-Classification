# FastAPI Project - Frontend

The frontend is built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [TanStack Query](https://tanstack.com/query), [TanStack Router](https://tanstack.com/router), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

## Requirements

- [Bun](https://bun.sh/)

## Quick Start

From the project root, install the dependencies and start the frontend development server:

```bash
bun install
bun run dev
```

Then open <http://localhost:5173/> in your browser.

Run `uv run bash scripts/prestart.sh` and `uv run fastapi dev` from the `backend` directory, with PostgreSQL available. See [../development.md](../development.md) for the complete setup.

To serve the frontend with FastAPI, run `bun run build` from the `frontend` directory and open `http://localhost:8000`.

Check `frontend/package.json` to see the other available commands.

## Removing the Frontend

If you are developing an API-only app and want to remove the frontend, you can do it easily:

- Remove the `./frontend` directory.

- In the `backend/app/main.py` file, remove the `app.frontend()` call.

Done, you now have an API-only app. 🤓

## Generate Client

### Automatically

- From the project root, run the script:

```bash
bash ./scripts/generate-client.sh
```

- Commit the changes.

### Manually

- Make sure the backend is running.

- Download the OpenAPI JSON file from `http://localhost:8000/api/v1/openapi.json` and copy it to a new file `openapi.json` at the root of the `frontend` directory.

- To generate the frontend client, run:

```bash
bun run generate-client
```

- Commit the changes.

Regenerate the client whenever backend changes affect the OpenAPI schema.

## Using a Remote API

By default, the built frontend uses the same origin as the FastAPI app. If you want to use a remote API while running the Vite development server, you can set the environment variable `VITE_API_URL` to the URL of the remote API. For example, you can set it in the `frontend/.env` file:

```env
VITE_API_URL=https://my-domain.example.com
```

Then, when you run the frontend, it will use that URL as the base URL for the API.

## Code Structure

The frontend code is structured as follows:

- `frontend/src` - The main frontend code.
- `frontend/public` - Static assets.
- `frontend/src/client` - The generated OpenAPI client.
- `frontend/src/components` - The components of the frontend, including the shadcn/ui components in `frontend/src/components/ui`.
- `frontend/src/hooks` - Custom hooks.
- `frontend/src/lib` - Shared frontend utilities.
- `frontend/src/routes` - The frontend routes and pages.

## End-to-End Testing with Playwright

The frontend includes end-to-end tests using Playwright. Start PostgreSQL and run the backend and frontend development server, then install Playwright's browser:

```bash
bunx playwright install chromium
```

Run the tests from the project root:

```bash
bun run --filter frontend test
```

You can also run your tests in UI mode to see the browser and interact with it running:

```bash
bunx playwright test --ui
```

To update the tests, navigate to the tests directory and modify the existing test files or add new ones as needed.

For more information on writing and running Playwright tests, refer to the official [Playwright documentation](https://playwright.dev/docs/intro).
