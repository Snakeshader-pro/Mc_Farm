import type {Component} from 'solid-js';
import {Route, Routes} from "solid-app-router";
import Home from "./pages/Home";
import Bulding from "./pages/Bulding";

const App: Component = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bulding' element={<Bulding/>}/>
            </Routes>
        </div>
    );
};

export default App;
