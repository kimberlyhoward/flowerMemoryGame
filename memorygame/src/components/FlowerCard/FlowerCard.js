import React from "react";
import "./FlowerCard.css";

const FlowerCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectFlower(props.bloom)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.bloom} src={props.image} />
            </a>
        </div>
    </div>
);

export default FlowerCard;