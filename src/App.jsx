import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "./table";

function App() {
  const [showData, setShowData] = useState(false);
  const [type, setType] = useState(false)
  return (
    <div className="App">
      <div>
        <h1 className="heading">ELIXER HACKTOBER COMMENTS</h1>
        <button onClick={() => setType("all")} className="button">
          Get all comments
        </button>
        <button onClick={() => setType("cllg")} className="button ml-5">
          Get college comments
        </button>
        <p id="showData"></p>
        {type && (
          <Table type={type} />
        )}
      </div>
    </div>
  );
}

export default App;
