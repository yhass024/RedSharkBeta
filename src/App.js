import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarSelectPage from "./components/CarSelectPage";
import { CarProvider } from "./components/CarContext";
import { DetailsProvider } from "./components/DetailsContext";
import Reservation from "./components/Confirmation";
import { ClassDetailsProvider } from "./components/ClassDetailsContext";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CarProvider>
          <DetailsProvider>
            <ClassDetailsProvider>
              <Switch>
                <Route path="/" exact component={MainContent} />
                <Route path="/carSelect" component={CarSelectPage} />
                <Route path="/confirmation" component={Reservation} />
              </Switch>
            </ClassDetailsProvider>
          </DetailsProvider>
        </CarProvider>
      </div>
    </Router>
  );
}

export default App;
