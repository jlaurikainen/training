import { mount } from "svelte";
import App from "./App.svelte";
import "./global.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found!");
}

export default mount(App, { target: root });
