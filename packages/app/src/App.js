import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';
import { eventConnect } from '../../eventConnect/lib';

import store from './store';

// CSS
import './app.css';

const event = eventConnect()



const App = () => {

  // MF
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  useEffect(() => {
    event.on('getCount', ({ detail }) => {
      detail(store.getState().counter.value)
    })

    store.subscribe(() => {
      event.emit('returnCount', store.getState().counter.value)
    })
  }, [])

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Provider store={store}>
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            </Provider>
          </Route>
          <Route exact path="/contact">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App;