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
    <div className="container">
      <Mynavbar />
      <div className="card">
        <Card />
      </div>
      <div className="data">
        <GetData />
        <Button />
      </div>
      <Form />
      <Apptimer />
      <Myfooter />
    </div>
  );
}

export default App;
