import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { counterSelector } from "../redux/counterSelector";

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const counterValue = useSelector(counterSelector);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate(-1)}>Get back</button>
      <p>{counterValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByAmount(5)}>
        Increment By Amount
      </button>
    </>
  );
};
export default About;
