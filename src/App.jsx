import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom';
import Nav from './componant/nav';
import Add from "./componant/Add";
import Fashion from "./componant/Fashion";
import Electronics from "./componant/electronics";
import Furnitures from "./componant/Furnitures";
import appstyles from "../src/App.module.css"

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <nav className={appstyles.nav}>
          <Link to="/items" className={appstyles.link}>HOME</Link>
          <Link to="/items/add" className={appstyles.link}>ADD ITEMS</Link>
          <Link to="/items/furnitures" className={appstyles.link}>FURNITURES</Link>
          <Link to="/items/electronics" className={appstyles.link}>ELECTRONICS</Link>
          <Link to="/items/fashion" className={appstyles.link}>FASHION</Link>
        </nav>
        <Routes>
          <Route index path="/" element={<Nav />} />
          <Route path="items">
            <Route index element={<Nav />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="furnitures" element={<Furnitures />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="add" element={<Add />} />
          </Route>

          <Route path="/404" element={<h5>Page Not Found</h5>} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
export default App
