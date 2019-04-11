import React from 'react';
import GoodItem from "./GoodItem";
import s from "./GoodList.module.css";

let GoodList = (props) => {
    props.fetchGoods();

    let goods = props.goods
        .map(good => <GoodItem id={good.id}
                               name={good.name}
                               photo={good.photo}
                               price={good.price}/>);

    return (
        <div>
            <textarea className={`${s.searchProduct}`}
                      placeholder={'Enter a product name'}
                      maxLength={20}
            />

            <div className={`${s.goodGrid}`}>
                {goods}
            </div>

            <div className={`${s.goodFilterPanel}`}>
                Тут будут фильтры
                <br/>
                Тут
                <br/>
                Будут
                <br/>
                фильтры
                <br/>
                фильтры
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );

};

export default GoodList;