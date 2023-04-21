import { createRoot } from "react-dom/client";
import { App } from "./App";
import "@/styles/global.css";

function main() {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw Error("[初期化エラー] #rootが存在しません");
  }

  createRoot(rootElement).render(<App />);
}

main();
