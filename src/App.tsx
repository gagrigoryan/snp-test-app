import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/book/:id">
                    <BookPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
