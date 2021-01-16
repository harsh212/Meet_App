import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";

function App() { 
  return (
    <BrowserRouter basename={window.location.pathname||''}>
      <Switch>
        <Route path="/" exact component={CreateRoom} />
        <Route path="/room" component={Room} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
