import { createStore, Action, applyMiddleware, Middleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

// Root reducers
const reducers = (state = { counter: 1 }, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// List all middlewares
const middlewares: Middleware[] = [
  process.env.NODE_ENV === "development" ? logger : null,
  thunk
].filter(Boolean);

// Create store
const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

export default store;
