import React from "react";
import s from "./CancelOrderButton.module.css";

const CancelOrderButton = (props) => {
    return (
        //fixme deleting first elem?

        <div className={`${s.orderCancelButton}`}
             hidden={props.status !== 1}>
            <img src="/images/red_cross.png" onClick={() => props.deleteUnprocessedOrder(props.index)}/>
        </div>
    )
};
export default CancelOrderButton;