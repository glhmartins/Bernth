import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
import style from './css/Layout.module.css'

function Layout(){
    return(
        <div className={style.container}>
            <div className={style.layout}>
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;