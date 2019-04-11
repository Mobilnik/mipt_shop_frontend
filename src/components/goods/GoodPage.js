import React from 'react';
import Good from "./item/Good";
import s from "./GoodPage.module.css";


let GoodPage = (props) => {
    props.fetchGoods();

    let goods = props.goods
        .map(good => <Good id={good.id}
                           name={good.name}
                           photo={good.photo}
                           price={good.price}/>);

    return (
        <div className={`${s.goodPageWrapper}`}>
            <textarea className={`${s.goodPageSearch}`}
                      placeholder={'Enter a product name'}
                      maxLength={20}
            />

            <div className={`${s.goodPageGrid}`}>
                {goods}
            </div>
        </div>
    );

};

export default GoodPage;