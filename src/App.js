import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import View from "./ContextFile/View";
import ViewHeader from "./ContextFile/ViewHeader";
import ViewFeed from "./ContextFile/ViewFeed";
import GlobalContext from "./ContextFile/GlobalContext";
import GlobalState from "./ContextFile/GlobalState";
import HomeScreen from "./ContextWork/HomeScreen";
import EditScreen from "./ContextWork/EditScreen";
import AddScreen from "./ContextWork/AddScreen";
import HomeDesign from "./GameChange/HomeDesign";
import EditDesign from "./GameChange/EditDesign";
import AddUsers from "./GameChange/AddUser";
import { GlobalProvider } from "./GameChange/ContextDesign/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <GlobalState>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={View} />
              <Route exact path="/home_design" component={HomeDesign} />
              <Route exact path="/add_user" component={AddUsers} />
              <Route exact path="/edit/:id" component={EditDesign} />
              <Route exact path="/home" component={HomeScreen} />

              <Route exact path="/add" component={AddScreen} />
              <Route exact path="/feed" component={ViewFeed} />
            </Switch>
          </Router>
        </div>
      </GlobalState>
    </GlobalProvider>
  );
}

export default App;
