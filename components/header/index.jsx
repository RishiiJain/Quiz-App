import React, { useNavigate } from 'react-router-dom';
import Head from './style';
import logout from './logout.png'

const Header = () => {
  const navigator = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigator('/');
  };

  return (
    <Head>
        QUIZ APP
        <button className='Button' onClick={ handleLogout }>
          <img src = {logout} alt ="logout" className='logout-icon'/>
        </button>
    </Head>
  )
}

export default Header
