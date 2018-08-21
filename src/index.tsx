import { h, render } from "preact";
import "preact/devtools";
import App from "./App";

const mountNode = document.getElementById("root");
render(<App />, mountNode, mountNode.firstElementChild);

if (module.hot) {
  module.hot.accept();
}
