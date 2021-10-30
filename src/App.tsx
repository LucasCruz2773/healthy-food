import { Main } from './pages/Main';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Main} />
    </BrowserRouter>
    
  );
}

export default App;
