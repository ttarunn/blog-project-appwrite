import React from 'react'
import { Container, Logo, Logout } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const authStatus = useSelector((store)=> store.authSlice.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-blue-900 text-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 mt-3'>
            <Link to={'/'}>
              <Logo/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=> 
              item.active ? (<li key={item.slug}>
                  <button 
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-medium hover:text-black'
                  >
                    {item.name}
                  </button>
              </li>) : null
            )}
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header