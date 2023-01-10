import React, { useState } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

const App=()=> {
  return (
    <BrowserRouter>
      <Container maxWidth="lg" className="App">
        {/* <Navbar /> */}
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} /> */}
          {/* <Route path="/mezmur" exact component={AllMezmurs} />
          <Route path="/mezmur/addmezmur" exact component={Add_new_mezmur} />
          <Route path="/mezmur/list" exact component={MezmurList}></Route>
          <Route path="/mezmur/:id" exact component={SingleMezmur}></Route> */}
        {/* </Switch> */}
        <p>Under construction</p>
      </Container>
    </BrowserRouter>
  );
};

export default App;
