import logo from "./logo.svg";
import "./App.css";
import { Iframe } from "./components/Iframe/Iframe";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Iframe>
        <Form />
      </Iframe>
    </div>
  );
}

export default App;
