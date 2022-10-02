import { Button, Space } from "antd";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => setCount((c) => c + 1);

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
