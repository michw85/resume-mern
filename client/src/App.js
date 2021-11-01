import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"
import {Navbar} from "./components/Navbar"
import {Loader} from "./components/Loader";
import Footer from './components/Footer'
import 'materialize-css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    // get data from hook auth.hook.js
    const {token, login, logout, userId, ready} = useAuth()
    // Load token if isAuthenticated or not
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    // give time to process the request
    if (!ready) {
        return <Loader />
    }
  return (
      <AuthContext.Provider value={{
          token, login, logout, userId, isAuthenticated
      }}>
          <Router>
              { isAuthenticated && <Navbar />}
              <div className="container">
                  {routes}
              </div>
          </Router>
          <Footer />
      </AuthContext.Provider>
  )
}

export default App
