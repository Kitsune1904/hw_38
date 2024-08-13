import {NavLink} from "react-router-dom";
import classes from './Navigaton.module.css'

export const Navigation = () => {
    return (
        <nav className={classes.navHolder}>
            <ul>
                <li><NavLink to={"/"}>Main</NavLink></li>
                <li><NavLink to={"/albums"} >Albums</NavLink></li>
                <li><NavLink to={"/about"} >About</NavLink></li>
            </ul>
        </nav>

    )
}

