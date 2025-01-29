import { useState } from "react";
const Button = () => {
  const [speed, setSpeed] = useState(0);

  const Accelerator = () => {
    setSpeed((prev) => prev + 10);
  };

  const BreakSpeed = () => {
    setSpeed((prev) => (prev > 0 ? prev - 5 : 0));
  };

  return (
    <div className="formcard1">
      <h3> speed: {speed} </h3>
      <button onClick={Accelerator} style={{ border: "2px solid blue" }}>
        Accelerator
      </button>
      <button
        onClick={BreakSpeed}
        style={{ border: "2px solid red", marginLeft: "15px" }}
      >
        Break
      </button>
    </div>
  );
};

export default Button;
