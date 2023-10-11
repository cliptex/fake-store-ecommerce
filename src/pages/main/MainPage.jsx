
import NavBar from '../../components/common/NavBar'
import { Outlet, useLocation } from 'react-router'
import Footer from '../../components/common/Footer'
import Spacer from '../../components/common/spacer'
import { useEffect } from 'react';


const MainPage = () => {
  const { pathname } = useLocation();

useEffect(() => {
  window.document.documentElement.scrollTo({ top: 0 });
}, [pathname]);

  return (
      <>
      <NavBar />
      <Spacer />
          <Outlet />
          <Footer />
      </>
  )
}

export default MainPage