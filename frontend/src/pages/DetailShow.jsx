import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
 export default function 
() {
  return (
   <Container>
     <div className='flex flex-row my-20' style={{backgroundColor: "F3F4F6"}}>
        <div className='basis-1/3 bg-white px-10 py-10'>
            <NavLink to="/detail" style={({isActive})=>{ return isActive? {color: "#FE7200"} : {color: "black"}}} >
            <p className='py-10 border-dashed border-b-1 border-gray-800 back'>ТЭЭВЭР</p>
            </NavLink>
            <NavLink to="/trade" style={({isActive})=>{ return isActive? {color: "#FE7200"} : {color: "black"}}} >
            <p className='py-10 border-dashed border-b-1 border-gray-800 back' >ХУДАЛДАА</p>
            </NavLink>
            <NavLink to="/mine" style={({isActive})=>{ return isActive? {color: "#FE7200"} : {color: "black"}}} >
            <p className='py-10 back'>УУЛ УУРХАЙ</p>
            </NavLink>
        </div>
        <div className='basis-2/3'>
            <Outlet/>
        </div>
    </div>
   </Container>
  )
}
