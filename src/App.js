import "./App.css";
import Top from "./Components/Dashboard/Top";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Sidemenu from "./Components/Sidemenu/Sidemenu";
import Earning from "./Components/Dashboard/Earning";
import Session from "./Components/Dashboard/Session";
import Chart from "./Components/Dashboard/Chart";
import User from "./Components/Dashboard/User";
import Mystudents from "./Components/Dashboard/Mystudents";
function App() {
  return (
    <div className="App">
      <Sidemenu />
      <div className="middle-container">
        <div className="first1-container">
          <Top name="Courses" icon={<LocalLibraryIcon />} number="2" />
          <Top name="Class taken" icon={<LocalLibraryIcon />} number="2" />
          <Top name="Verified courses" icon={<LocalLibraryIcon />} number="2" />
          <Top
            name="Non-Verified courses"
            icon={<LocalLibraryIcon />}
            number="2"
          />
        </div>
        <div className="second-container">
          <Earning amount="$1000" pending="$60" />
          <Session scheduled="1" upcoming="2" cancled="0" />
          <Mystudents />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
      <User />
    </div>
  );
}

export default App;
