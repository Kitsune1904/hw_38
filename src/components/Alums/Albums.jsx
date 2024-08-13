import classes from "./Albums.module.css"
import {AlbumCard} from "./AlbumCard/AlbumCard.jsx";

const Albums = (props) => {
    return (
        <div className={classes.albumHolder}>
            {props.data && props.data.map((el, index) => <AlbumCard card={el} key={index}></AlbumCard>)}
        </div>
    );
};

export default Albums;
