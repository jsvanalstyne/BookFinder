import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Route, Switch} from "react-router"
function App() {
  return (
    <Router>
    <div>
      
      {/* <Books /> */}
    
    <Nav />
    <Switch>
      <Route exact path="/">
        <Books/>
        </Route>
      <Route exact path="/books">
        <Books/>
        </Route>
        <Route exact path="/books/:id" component={Detail}>
          
        </Route>
      <Route>
        <NoMatch/>
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
