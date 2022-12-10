import "./App.css";
import { Iframe } from "./components/Iframe/Iframe";
import { Form } from "./components/Form/Form";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      if (event.data.type !== "submit") return;
      setResult(event.data);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="App">
      <Iframe>
        <Form />
      </Iframe>
      {result?.value?.success && (
        <p
          className="success"
          style={{ color: "green" }}
        >{`Result: ${JSON.stringify(result?.value)}`}</p>
      )}
      {result?.value?.error && (
        <p className="error" style={{ color: "red" }}>{`Error: ${JSON.stringify(
          result?.value
        )}`}</p>
      )}
    </div>
  );
}

export default App;
