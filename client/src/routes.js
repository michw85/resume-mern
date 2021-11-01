import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage"
import {HomePage} from "./pages/Home"
import {DetailPage} from "./pages/DetailPage"
import {AuthPage} from "./pages/AuthPage";
import {Experience} from './pages/Experience'
import {Works} from './pages/Works'
import {Contacts} from './pages/Contacts'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="/Links" exact>
                    <LinksPage />
                </Route>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/experience" component={Experience} />
                <Route path="/works" component={Works} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}