import React from "react"
import './Admin.css'
import Sidebar from "../../Comp/Sidebar/Sidebar"
import {Routes, Route} from 'react-router-dom'
import AddProduct from "../../Comp/AddProduct/AddProduct"
import ListProduct from "../../Comp/ListProduct/ListProduct"
import ClientList from "../../Comp/ClientOrders/ClientOrder"

const Admin=()=> {

  return (
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/orders' element={<ClientList/>}/>
      </Routes>

    </div>
  )
}

export default Admin
