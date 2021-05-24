import './App.css';
import content from './components/pages';
import Sidebar from './components/sidebar-material';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        
        <Grid item xs={10}>
          <Switch>
            <Route path="/dashboard" exact component={content.dashboard} />
            <Route path="/orders" exact component={content.orders} />

            <Route path="/products" exact component={content.products} />
            <Route path="/products/add" exact component={content.addProducts} />
            <Route path="/products/categories" exact component={content.productCategories} />
            <Route path="/products/variations" exact component={content.productVariations} />
            <Route path="/products/collections" exact component={content.productCollections} />
            
            <Route path="/webstore" exact component={content.webstore} />
            <Route path="/settings" exact component={content.setting} />
            <Route path="/modules" exact component={content.modules} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
