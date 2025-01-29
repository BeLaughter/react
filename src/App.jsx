import "./App.css";
import Mynavbar from "./components/Mynavbar";
import Myfooter from "./components/Myfooter";
import Card from "./components/Card";
import GetData from "./components/Getdata";
import Button from "./components/Button";
import Apptimer from "./components/Apptimer";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Mynavbar />
      <div className="card">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="data">
        <GetData />
        <Button />
      </div>
      <Form />
      <Apptimer />
      <Myfooter />
    </>
  );
}

export default App;
