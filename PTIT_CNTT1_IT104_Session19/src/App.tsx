import "./App.css";
import PTIT_CNTT1_IT104_Session19_Bai01 from "./components/PTIT_CNTT1_IT104_Session19_Bai01";
import PTIT_CNTT1_IT104_Session19_Bai02 from "./components/PTIT_CNTT1_IT104_Session19_Bai02/PTIT_CNTT1_IT104_Session19_Bai02";
import PTIT_CNTT1_IT104_Session19_Bai03 from "./components/PTIT_CNTT1_IT104_Session19_Bai03";
import PTIT_CNTT1_IT104_Session19_Bai04 from "./components/PTIT_CNTT1_IT104_Session19_Bai04";
import PTIT_CNTT1_IT104_Session19_Bai05 from "./components/PTIT_CNTT1_IT104_Session19_Bai05";
import PTIT_CNTT1_IT104_Session19_Bai06 from "./components/PTIT_CNTT1_IT104_Session19_Bai06";
import PTIT_CNTT1_IT104_Session19_Bai07 from "./components/PTIT_CNTT1_IT104_Session19_Bai07";
import PTIT_CNTT1_IT104_Session19_Bai08 from "./components/PTIT_CNTT1_IT104_Session19_Bai08";
import { LanguageProvider } from "./components/PTIT_CNTT1_IT104_Session19_Bai09/LanguageContext";
import PTIT_CNTT1_IT104_Session19_Bai09 from "./components/PTIT_CNTT1_IT104_Session19_Bai09/PTIT_CNTT1_IT104_Session19_Bai09";

function App() {
  return (
    <>
      {/* <PTIT_CNTT1_IT104_Session19_Bai01 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai02 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai03 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai04 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai05 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai06 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai07 /> */}

      {/* <PTIT_CNTT1_IT104_Session19_Bai08 /> */}

      <LanguageProvider>
        <PTIT_CNTT1_IT104_Session19_Bai09 />
      </LanguageProvider>
    </>
  );
}

export default App;
