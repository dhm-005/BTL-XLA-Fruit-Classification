import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "Dashboard - FastAPI Template",
      },
    ],
  }),
})

function Dashboard() {
  return (
    <div>
      <div>
        <h1 className="text-2xl truncate max-w-sm">
          Fruit Classification
        </h1>
        <p className="text-muted-foreground">
          Welcome to the fruit classification dashboard.
        </p>
      </div>
    </div>
  )
}
