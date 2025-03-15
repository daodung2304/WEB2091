import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProductAdd from './pages/add';
import ProductList from './pages/list';
import ProductEdit from './pages/edit';
import Layout from './pages/layout';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='book' element={<ProductList />} />
            <Route path='book/add' element={<ProductAdd />} />
            <Route path='book/edit/:id' element={<ProductEdit />} />
          </Route>
        </Routes>
        <Toaster />
      </>
    </Router>
  );
}

export default App;
