import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

import "./app.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CodePack Editor - Drag & Drop Website Builder</h1>
      <div className="card">
        <p>
          <code>Something cool is cooking</code>
        </p>
      </div>
    </>
  );
}

export default App;
