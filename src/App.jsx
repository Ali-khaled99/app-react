import './App.css'
import Footer from './Components/Footer/Footer'
import Info from './Components/Info/Info'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Protfolio from './Components/Portfolio/Protfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'


function App() {

  let router = createBrowserRouter([
    {path: '' , element: <Layout /> ,children: [
      {index: true, element: <Header />},
      {path: 'about' , element: <About />},
      {path: 'Portfolio' , element: <Protfolio />},
      {path: 'contact' , element: <Contact />},
      {path: '*' , element: <NotFound />}
    ]}
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
