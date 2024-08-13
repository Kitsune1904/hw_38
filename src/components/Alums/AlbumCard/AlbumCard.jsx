import classes from "./AlbumCard.module.css"
import {NavLink} from "react-router-dom";

export const AlbumCard = (props) => {
    return (
        <div>
            <NavLink to={`/albums/${props.card.id}`} className={classes.card}>
                <h2>Card {props.card.id}</h2>
                <p>{props.card.title}</p>
            </NavLink>
        </div>
    );
};

