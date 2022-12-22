import "./App.css";
import { Calculator } from "./component/Calculator/Calculator";

function App() {
    return (
        <div className="App">
            <h1>My calculator</h1>
            <h3>Create by: David Vergara</h3>
            <hr></hr>
            <Calculator />
        </div>
    );
}

export default App;
