import { NavLink } from "react-router-dom"
import style from "./Navigation.module.scss";


export const Navigation = () => {
    return (
        <nav className={style.myNavbar} >
            <div></div>
            <NavLink to="/"> <h1>Sunshine Coffe</h1></NavLink>
            <ul>
                <li>
                   Europa
                </li>
                <li>
                    <NavLink to="/">🛒</NavLink>
                </li>
                <li>
                    <NavLink to="/products">👩🏻‍⚕️</NavLink>
                </li>
            </ul>
        </nav>
    )
}