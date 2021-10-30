import { Main } from './pages/Main';
import { Register } from './pages/Register';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/register" exact={true} component={Register} />
    </BrowserRouter>
    
  );
}

export default App;
