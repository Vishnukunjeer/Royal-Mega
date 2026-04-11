import Footer from '@/layouts/Footer'
import MobileFooter from '@/layouts/Mobile'
import Header from '@/layouts/Header'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const[isMobile,setIsMobile] = useState(false)
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <=768 )
        }
        checkScreen()
        window.addEventListener("resize",checkScreen);
        return () => window.removeEventListener("resize",checkScreen)
    })
    return (
        <>
            <Header className='hidden sm:block'/>
            <Outlet />
            {isMobile ?<MobileFooter/> : <Footer />}
        </>
    )
}

export default Layout