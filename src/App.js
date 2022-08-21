import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './components/main/Main';
import './App.css';
import Provider from './components/context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
