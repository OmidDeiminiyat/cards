import { Outlet } from "react-router-dom"
import { Navigation } from "../components/Navigation/Navigation"
import { Card } from "../components/cart/Cart"


export const MainLayout = () => {
    return (
        <>
        <Navigation/>
        <Card/>
        <Outlet/> 
        </>
    )
}

// What is Outlet? all insite in mainlayout in app.js is in Outlet