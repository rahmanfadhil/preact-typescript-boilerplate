import { h } from "preact";
import { Provider } from "preact-redux";
import { Router, Link } from "preact-router";
import store from "./store";
import Counter from "./components/Counter";
import About from "./components/About";

export default () => (
  <Provider store={store}>
    <div>
      <h1>Counter App</h1>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
      <hr />
      <Router>
        <Counter path="/" />
        <About path="/about" />
      </Router>
    </div>
  </Provider>
);
