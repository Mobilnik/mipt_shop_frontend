import React from "react";

const CategoryFilter = (props) => {

    const onCategorySelect = (event) => {
        props.selectCategory(event.target.value);
    };

    let categories = [
        <option value={null} selected={true}/>
    ];

    props.categories.forEach(c => {
        let isSelected = (props.selectedCategoryId === c.categoryId);

        categories.push(
            <option value={c.categoryId}
                    selected={isSelected}>
                {c.categoryName}
            </option>
        );
    });

    return (
        <div>
            Select a category:

            <div>
                <select onChange={onCategorySelect}>
                    {categories}
                </select>
            </div>
        </div>
    );
};

export default CategoryFilter;