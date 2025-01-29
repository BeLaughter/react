import React, { useState } from "react";

const GetData = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState("");
  const change = (e) => {
    setVal(e.target.value);
  };
  const click = () => {
    setData(val);
    setVal("");
  };

  return (
    <div className="formcard1">
      <h2>{data}</h2>
      <input type="text" value={val} onChange={change} />
      <button onClick={click}>click</button>
    </div>
  );
};

export default GetData;
