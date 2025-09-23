import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SelectLanguage from "./components/SelectLanguage";
import SideBar from "./components/SideBar";
import Themes from "./components/Themes";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import ViewMode from "./components/ViewMode";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Random /> */}
      {/* <Themes /> */}
      {/* <ViewMode /> */}
      {/* <SideBar /> */}
      {/* <SelectLanguage /> */}
      {/* <User /> */}

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
