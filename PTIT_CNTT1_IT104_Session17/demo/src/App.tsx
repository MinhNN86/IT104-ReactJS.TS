import { useState } from "react";
import "./App.css";
import DemoUseState from "./components/demoUseState";
import FunctionalComponent from "./components/FunctionalComponent";
import DemoUseEffect from "./components/DemoUseEffect";
import DemoCleanupFuntion from "./components/DemoCleanupFuntion";
import DemoUseRef from "./components/DemoUseRef";

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      {/* <FunctionalComponent name="Demo" age={18} /> */}

      {/* <DemoUseState /> */}

      {/* Demo useEffect */}
      {/* <button onClick={() => setIsShow(!isShow)} style={{ marginBottom: 20 }}>
        Toggle
      </button>

      {isShow && <DemoUseEffect />} */}

      {/* DemoCleanupFuntion */}
      {/* <button onClick={() => setIsShow(!isShow)} style={{ marginBottom: 20 }}>
        Toggle
      </button>

      {isShow && <DemoCleanupFuntion />} */}

      {/* DemoUseRef */}
      <button onClick={() => setIsShow(!isShow)} style={{ marginBottom: 20 }}>
        Toggle
      </button>

      {isShow && <DemoUseRef />}
    </>
  );
}

export default App;
