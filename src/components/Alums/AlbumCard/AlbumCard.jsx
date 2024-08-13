import classes from "./AlbumCard.module.css"
import {NavLink} from "react-router-dom";

export const AlbumCard = (props) => {
    return (
        <div>
            <NavLink to={`/albums/${props.card.id}`} className={classes.card}>
                <h2>Info</h2>
                <p>{props.card.title}</p>
            </NavLink>
        </div>
    );
};

