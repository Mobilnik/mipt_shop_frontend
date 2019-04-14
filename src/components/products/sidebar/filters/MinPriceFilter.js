import React from "react";

const MinPriceFilter = (props) => {
    const onMinPriceChange = (event) => {
        props.updateMinPrice(event.target.value);
    };

    return (
        <div>
            Min price
            <div>
                <input type={'number'}
                       onChange={onMinPriceChange}
                       value={props.minPrice}
                >
                </input>
            </div>
        </div>
    )
};

export default MinPriceFilter;