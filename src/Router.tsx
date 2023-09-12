import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';

function Router() {
 const router =  createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
 ]);
  return (
    <RouterProvider router={router} />
  )

}

export default Router