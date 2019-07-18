import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Header from './Header';
import history from '../history';
import ConfigurationList from "./ConfigurationList";
import ConfigurationShow from "./ConfigurationShow";
import ConfigurationEdit from "./ConfigurationEdit";
import Logs from "./Logs";

const App = () => (
    <div className="ui container">
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path='/' exact component={ConfigurationList}/>
                    <Route path='/configuration/edit' exact component={ConfigurationEdit}/>
                    <Route path='/configuration' exact component={ConfigurationShow}/>
                    <Route path='/logs' exact component={Logs}/>
                </Switch>
            </div>
        </Router>
    </div>
);

export default App;