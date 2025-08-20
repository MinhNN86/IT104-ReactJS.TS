import "./App.css";
import BetweenComponent from "./components/betweenComponent";
import Button from "./components/Button";
import DataStatus from "./components/DataStatus";
import DemoEvent from "./components/DemoEvent";
import DemoState from "./components/DemoState";
import DemoTowWayBinding from "./components/DemoTowWayBinding";
import Greeting from "./components/Greeting";
import ParentComponent from "./components/ParentComponent";
import UserDashboard from "./components/UserDashboard";
import UserRole from "./components/UserRole";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <>
       {/*<h1>App Component</h1>*/}
      {/*<ParentComponent /> */}

      {/* <Button content="Click me"> */}
      {/* Phạm vi định nghĩa children prop */}
      {/* ➡️ <span>Next</span> */}
      {/* </Button> */}

      {/* <DemoEvent /> */}

      {/* <DemoState /> */}

      {/* <DemoTowWayBinding /> */}

      {/* <BetweenComponent /> */}

      {/* <UserDashboard /> */}
      {/* <DataStatus /> */}
      {/* <UserRole /> */}
      {/* <WelcomeBanner /> */}
      <Greeting />
    </>
  );
}

export default App;
