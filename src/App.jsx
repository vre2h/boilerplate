import { Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  selectCount,
} from "./libs/redux/slices/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleInc = () => dispatch(increment());

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <Space>
        <Button onClick={handleInc} type="primary">
          +
        </Button>
      </Space>
    </div>
  );
}

export default App;
