import React from "react";
import Header from "./Header";
import Section from "./Section";
import Loader from "./Loader";
import About from "Route/About";
import Random from "Route/Random";
import Contact from "Route/Contact";

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const Container = ({loading}) => loading ? <Loader/> : 
(
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/aboutme" component={About} />
                <Route path="/random" component={Random} />
                <Route path="/contact" component={Contact} />
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </>
    </Router>
);

export default Container;