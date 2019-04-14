import React from "react";

const MaxPriceFilter = (props) => {
    const onMaxPriceChange = (event) => {
        props.updateMaxPrice(event.target.value);
    };

    return (
        <div>
            Max price
            <div>
                <input type={'number'}
                       onChange={onMaxPriceChange}
                       value={props.maxPrice}
                >
                </input>
            </div>
        </div>
    )

};

export default MaxPriceFilter;