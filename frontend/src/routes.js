import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Detail from './pages/Detail';
import Devs from './pages/Devs';
import Login from './pages/Login';
import Submit from './pages/Submit';

import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from './styles/GlobalStyles'

function Routes() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Header />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/challenges" component={Challenges} />
                    <Route path="/challenges/frontend" component={Challenges} />
                    <Route path="/challenges/backend" component={Challenges} />
                    <Route path="/challenges/mobile" component={Challenges} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/devs" component={Devs} />
                    <Route path="/login" component={Login} />
                    <Route path="/submit" component={Submit} />
                </Switch>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
