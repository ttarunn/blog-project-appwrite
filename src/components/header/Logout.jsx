import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';


function Logout() {
    const dispatch = useDispatch();
    const handleLogout = ()=> {
        authService.logout()
        .then(()=> {
            dispatch(logout())
        })
        .catch()
    }
  return <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:text-black font-medium'
    onClick={handleLogout}>Logout</button>;
}

export default Logout