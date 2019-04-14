import CategoryFilter from "./CategoryFilter";
import React from "react";
import MaxPriceFilter from "./MaxPriceFilter";
import MinPriceFilter from "./MinPriceFilter";

const ProductFilters = (props) => {
    return (
        <div>
            <div>
                Filters
            </div>
            <div>
                <CategoryFilter categories={props.filters.categories}
                                selectedCategoryId={props.filters.selectedCategoryId}
                                selectCategory={props.selectCategory}/>
            </div>
            <div>
                <MinPriceFilter minPrice={props.filters.minPrice}
                                updateMinPrice={props.updateMinPrice}/>
            </div>
            <div>
                <MaxPriceFilter maxPrice={props.filters.maxPrice}
                                updateMaxPrice={props.updateMaxPrice}/>
            </div>
        </div>
    )
};

export default ProductFilters;