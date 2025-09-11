import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";

async function setupMocks() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  await worker.start();
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

setupMocks().finally(() => {
  root.render(<App />);
});


