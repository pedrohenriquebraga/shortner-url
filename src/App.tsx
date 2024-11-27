import React, { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`The url you entered was: ${url}`);
  };

  return (
    <div className="App">
      <main id="shortner-container">
        <h1>Encurte seus links!</h1>
        <p>
          Transforme links grandes e suspeitos em links mais amigáveis e de
          fácil leitura.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Cole o link aqui..."
            id="url-input"
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            id="shortner-button"
            disabled={!url}
          >
            Encurtar agora!
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
