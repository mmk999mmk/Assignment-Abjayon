import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
