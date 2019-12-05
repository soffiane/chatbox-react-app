import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Connexion from './components/Connexion';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound';

//react router doit englober toute l'application
//on va donc creer un component que l'on va rendre ici
//Route = URL on link une route avec un component dans Switch
//exact path pour l'URL EXACTE 
//path pour URL avec des variables :nomvariable dans l'URL
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion}/>
            <Route path='/pseudo/:pseudo' component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

//index.js est le premier composant appelé par l'application React
//on peut modifier la balise <App/> par defaut pour la balise correspondant au
//component Connexion
ReactDOM.render(<Routes />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
