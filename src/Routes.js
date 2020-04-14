import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom'
=======
import { HashRouter, Route, Switch } from 'react-router-dom'
>>>>>>> e5b65403309b0075a0fa798a0f03a473c1c9f946
import Principal from './Components/Principal/Principal'
import Equipe from './Components/Equipe/Equipe' 
import Blog from './Components/Blog/Blog'
import Portfolio from './Components/Portfolio/index'
<<<<<<< HEAD

export default function Routes() {
    return (
        <BrowserRouter>
=======
import Login from './Telas/Painel/RoutesPainel'

export default function Routes() {
    return (
        <HashRouter>
>>>>>>> e5b65403309b0075a0fa798a0f03a473c1c9f946
            <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/equipe" component={Equipe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={Blog} />
<<<<<<< HEAD
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
=======
            <Route exact path="/painel" component={Login} />
            <Route path="*" component={() => <h1>15</h1>} />
            </Switch>
        </HashRouter>
>>>>>>> e5b65403309b0075a0fa798a0f03a473c1c9f946
    )
}