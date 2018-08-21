import { h } from "preact";
import { connect } from "preact-redux";

interface IProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const Counter = (props: IProps) => (
  <div>
    <h1>{props.counter}</h1>
    <button onClick={props.increment}>INCREMENT</button>
    <button onClick={props.decrement}>DECREMENT</button>
  </div>
);

export default connect(
  ({ counter }) => ({ counter }),
  dispatch => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  })
)(Counter);
