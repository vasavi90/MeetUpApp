import './App.css'

import {Switch, Route} from 'react-router-dom'
// These are the lists used in the application. You can move them to any component needed.
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route path="/register" component={RegisterRoute} />
      <Route component={NotFoundRoute} />
    </Switch>
  </>
)

export default App
