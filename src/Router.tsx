import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import Square from './Pages/Square';
import Shape from './Pages/Shape';
import Triangle from './Pages/Triangle';
import Circle from './Pages/Circle';
import Hooks from './Pages/Hooks';


function Router() {
 const router =  createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
    {path: '/profile/:pageNumber', element: <Profile/>},
    {path: '/square', element: <Square/>},
    {path: '/triangle', element: <Triangle/>},
    {path: '/circle', element: <Circle/>},
    {path: '/shape/:shapeId',element:<Shape />},
    {path: '/Hooks', element: <Hooks/>},
    {path: '*', element: <Error/>},
 ]);
  return (
    <RouterProvider router={router} />
  )

}

export default Router