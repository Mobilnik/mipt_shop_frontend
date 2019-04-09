import {deleteUnprocessedOrderActionCreator} from "../../redux/ordersReducer";
import React from "react";

const DeleteUnprocessedOrderButton = (props) => {
    if (props.status === 0) {
        return (
            <button onClick={() => props.deleteUnprocessedOrder(props.index)}>
                Delete
            </button>
        )
    } else {
        return null;
    }
};
export default DeleteUnprocessedOrderButton;