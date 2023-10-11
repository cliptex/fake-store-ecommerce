
import NavBar from '../../components/common/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../components/common/Footer'
import Spacer from '../../components/common/spacer'

const MainPage = () => {
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