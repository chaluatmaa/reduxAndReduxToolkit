import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const incrementHandler5 = () => {
		dispatch(
			counterActions.increaseby5({
				payload: 15,
			})
		);
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Play with Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			{showCounter && (
				<div>
					<button onClick={incrementHandler}>Increment</button>
					<button onClick={incrementHandler5}>Increase by 15</button>
					<button onClick={decrementHandler}>Decrement</button>
				</div>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
