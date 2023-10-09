
import NavBar from '../../components/common/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../components/common/Footer'

const MainPage = () => {
  return (
      <>
          <NavBar />
          <Outlet />
          <Footer />
      </>
  )
}

export default MainPage