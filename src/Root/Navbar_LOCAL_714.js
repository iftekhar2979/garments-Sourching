<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from '../components/contextApi/UserContext';
import { useLogoutMutation } from '../Redux/Features/api/Users/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { removeCredentials } from '../Redux/Features/api/Users/userSlice';
const Navbar = () => {
  // const state=useContext(AuthContextProvider)
  const { user, signOutUser, setUser } = useContext(AuthContext)
  const [logout] = useLogoutMutation()
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch()


  // console.log(userInfo)
  const hanldeLogOut = () => {
    signOutUser().then((result) => {
      logout().then(res => {
        dispatch(removeCredentials())
     
      }).catch(error=>{
     
      })
      setUser('');
    })
  }
let routesOfUser
  if(userInfo){
    routesOfUser=<>
    <li>
              <NavLink to='/dashboard/companies'>Company List</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/addProduct'>Product</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/employes'>Employee</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/ViewOrders'>View Orders</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/Chalans'>Chalans</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/tbLists'>TB LIST</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/piList'>PI LIST</NavLink>
            </li>
    </> 
  }
  return (
    <div className='navbar bg-wholebg shadow-md'>
=======
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-md'>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52'
          >
            <li>
<<<<<<< HEAD
            <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard'>DASHBOARD</NavLink>
            </li>
           {
            routesOfUser
           }
         
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>ABC SOURCING</a>
        {/* <a className='btn btn-ghost normal-case text-xl'>XYZ SOURCING</a> */}
=======
              <a className='justify-between'>HOME</a>
            </li>
            <li>
              <NavLink to=''>DASHBOARD</NavLink>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>ERP-SOLUTIONS</a>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li tabIndex={0}>
<<<<<<< HEAD
            <NavLink
=======
          <NavLink
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
              to='/'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active bg-indigo-400 text-base-100' : ''
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active bg-indigo-400 text-base-100' : ''
              }
            >
              DASHBOARD
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
<<<<<<< HEAD
        {userInfo && <h2 className='mx-4 text-xl font-bold'>{userInfo.data.name}</h2>} 
        {!userInfo && <Link className='btn btn-primary ' to="/login">Log In</Link>}
        {userInfo && <Link className='btn  btn-secondary btn-sm' onClick={hanldeLogOut} tooltip>Log Out</Link>}
=======
        <Link className='btn' to="/login">Log In</Link>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
      </div>
    </div>
  );
};

export default Navbar;
