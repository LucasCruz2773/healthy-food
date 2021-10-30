import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/" exact={true} component={Recipes} />
    </BrowserRouter>
    
  );
}

export default App;
