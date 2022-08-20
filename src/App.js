import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
