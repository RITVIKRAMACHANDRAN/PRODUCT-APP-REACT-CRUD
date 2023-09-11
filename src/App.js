import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Product Listing App</h1>
        <Route path="/" exact component={ProductList} />
        <Route path="/add" component={AddProduct} />
        <Route path="/edit/:id" component={EditProduct} />
      </div>
    </Router>
  );
}

export default App;
