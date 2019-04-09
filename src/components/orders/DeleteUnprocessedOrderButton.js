import React from "react";

const DeleteUnprocessedOrderButton = (props) => {
    if (props.status === 0) {
        return (
            //fixme deleting first elem?
            <button onClick={() => props.deleteUnprocessedOrder(props.index)}>
                Delete
            </button>
        )
    } else {
        return null;
    }
};
export default DeleteUnprocessedOrderButton;