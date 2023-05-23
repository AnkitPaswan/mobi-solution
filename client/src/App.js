import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import SuccessPage from './components/SuccessPage/SuccessPage';
import Singleproduct from './components/SingleProduct/SingleProduct';
import Appcontext from './utils/context';
import Login from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Appcontext>
          {/* <Header name={userName} /> */}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/singleproduct/:id' element={<Singleproduct />} />
            <Route path='/successPage' element={<SuccessPage />} />
          </Routes>
          <ToastContainer />
          {/* <Newsletter /> */}
          {/* <Footer /> */}
        </Appcontext>
      </BrowserRouter>
    </div>
  );
}


export default App;
