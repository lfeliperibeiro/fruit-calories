import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FruitPage from './components/FruitPage'
import Home from './components/Home'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={FruitPage}  />

      </Switch>
    </BrowserRouter>  
  )
}
export default Routes