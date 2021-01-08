import {Switch, Route} from 'react-router-dom';

// LAYOUTS
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout'

// PAGES
import Homepage from './pages/Homepage';
import Registration from './pages/Registration'

import './default.scss';


function App() {
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
