import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Principal from './Components/Principal/Principal'
import Equipe from './Components/Equipe/Equipe' 
import Blog from './Components/Blog/Blog'
import Portfolio from './Components/Portfolio/index'
import Login from './Telas/Painel/RoutesPainel'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/Home-EJCOMP-blog" component={Principal} />
            <Route path="/equipe" component={Equipe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/painel" component={Login} />
            <Route path="*" component={() => <h1>15</h1>} />
            </Switch>
        </BrowserRouter>
    )
}