import './App.css'
import {  RouterProvider } from 'react-router-dom'
import { route } from './components/common/Router'
import { AuthProvider, } from './context/AuthContext'
import 'antd/dist/reset.css';

const App = () =>{

  return (
    // <AuthProvider>
    //   <div className=""> 
    //     <Navbar />
    //     <Button type="primary">Primary Button</Button>
    //     <div className="">
    //       {/* <RouterProvider router={route} /> */}
    //     </div>
    //     <Footer /> 
    //   </div> 
    // // </AuthProvider>

    <>
      <AuthProvider>
        <RouterProvider router={route} />
     </AuthProvider>
  </>
  )
}

export default App
