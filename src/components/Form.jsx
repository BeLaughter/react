import { useState } from "react";

const Form = () => {
  const [displaycard, setDisplaycard] = useState(false);
  const [displaycard2, setDisplaycard2] = useState(true);

  const [val, setVal] = useState("");
  const [data, setData] = useState("");

  const [val1, setVal1] = useState("");
  const [data1, setData1] = useState("");

  const [val2, setVal2] = useState("");
  const [data2, setData2] = useState("");

  const [val3, setVal3] = useState("");
  const [data3, setData3] = useState("");

  const change = (e) => {
    setVal(e.target.value);
  };
  const change1 = (e) => {
    setVal1(e.target.value);
  };
  const change2 = (e) => {
    setVal2(e.target.value);
  };
  const change3 = (e) => {
    setVal3(e.target.value);
  };

  const click = () => {
    setData(val);
    setVal("");

    setData1(val1);
    setVal1("");

    setData2(val2);
    setVal2("");

    setData3(val3);
    setVal3("");
    setDisplaycard(true);
    setDisplaycard2(false);
  };

  return (
    <div className="form">
      {displaycard && (
        <div className="formcard">
          <h2>NAME: {data}</h2>
          <h3>OCCUPATION: {data1}</h3>
          <h4>EMAIL: {data2}</h4>
          <h5>PHONE NO: {data3}</h5>
          <p> Form submission success </p>
        </div>
      )}

      {displaycard2 && (
        <div className="forminput">
          <h2>FILL & SUBMIT FORM</h2>
          <input
            type="text"
            value={val}
            onChange={change}
            placeholder=" Name"
          />
          <input
            type="text"
            value={val1}
            onChange={change1}
            placeholder=" Occupation"
          />
          <input
            type="text"
            value={val2}
            onChange={change2}
            placeholder=" Email"
          />
          <input
            type="text"
            value={val3}
            onChange={change3}
            placeholder=" Phone No"
          />
          <button onClick={click} className="ancor">
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
