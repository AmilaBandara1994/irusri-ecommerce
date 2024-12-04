
import { createBrowserRouter } from 'react-router-dom'
import Register from '../../pages/Register';
import Contact from '../../pages/Contact';
import Faq from '../../pages/Faq';
import About from '../../pages/About';
import NotFound from './NotFound';
import AppLayout from './AppLayout';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import Login from '../../pages/Login';

export  const route = createBrowserRouter([
    {   path: '/',  element: <AppLayout />,
            children: [
                {   path: '/home',  element: <Home /> } ,
                {   path: '/faq',  element: <Faq /> } ,
                {   path: '/contact',  element: <Contact />} ,
                {   path: '/about',  element: <About />} ,
                {   path: '/products',  element: <Products />} ,
                {   path: '/cart',  element: <Cart />} ,
      ],
        errorElement : <NotFound />} ,
    {   path: '/login',  element: <Login /> } ,
    {   path: '/register',  element: <Register /> } , 

  ]);