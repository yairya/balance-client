import React from 'react'
import Login from './views/Login'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ProductContext from './components/ProductContext/ProductContext'

const Main = () => {
    return (
        <BrowserRouter>
          <ProductContext.Provider value={{}}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
          </ProductContext.Provider>
        </BrowserRouter>
      );
}

export default Main