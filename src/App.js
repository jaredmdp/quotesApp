import { Switch, Route, Redirect } from 'react-router-dom';

import QuoteAll from './pages/QuoteAll';
import QuoteDetails from './pages/QuoteDetails';
import QuoteNew from './pages/QuoteNew';
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <QuoteAll />
        </Route>
        <Route path='/quotes/:quoteID'>
          <QuoteDetails />
        </Route>
        <Route path='/quotes-new'>
          <QuoteNew />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
