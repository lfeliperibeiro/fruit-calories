import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Details from './components/Details'
import Home from './components/Home'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fruit" exact component={Details}  />

      </Switch>
    </BrowserRouter>
    
   
  )
}
export default Routes