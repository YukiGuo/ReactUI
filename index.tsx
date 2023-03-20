import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router, Routes, Link, Route
} from "react-router-dom";
import IconDemo from './demo/IconDemo';

ReactDOM.render(
    <Router>
        < div >
            <header>头部</header>
            <div>
                <aside>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Routes>
                        <Route path="/icon" Component={IconDemo}></Route>
                    </Routes>
                </main>
            </div>

        </div >
    </Router>
    , document.querySelector('#root'))