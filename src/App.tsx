import { useState } from "react";
import CustomInputField from "./components/CustomInputField/CustomInputField";
import "./App.css";
import PinnedMessage from "./components/PinnedMessage/PinnedMessage";

function App() {
  const [showPinned, setShowPinned] = useState(false);
  const [pinnedMsg, setPinnedMsg] = useState("");

  return (
    <>
      {showPinned && <PinnedMessage msg={pinnedMsg} />}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>@-mentions in X/Twitter</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <CustomInputField
          setShowPinned={setShowPinned}
          setPinnedMsg={setPinnedMsg}
        />
        <div>{/* <p>{search}</p> */}</div>
      </div>
    </>
  );
}

export default App;
