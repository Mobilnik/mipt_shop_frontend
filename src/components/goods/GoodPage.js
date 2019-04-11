import React from 'react';
import Good from "./item/Good";
import s from "./GoodPage.module.css";
import globalS from "../.././MiptShopApp.module.css";


let GoodPage = (props) => {
    props.fetchGoods();

    let goods = props.goods
        .map(good => <Good id={good.id}
                           name={good.name}
                           photo={good.photo}
                           price={good.price}/>);

    return (
        <div>
            <div className={`${globalS.appWrapperContent}`}>
            <textarea className={`${s.searchProduct}`}
                      placeholder={'Enter a product name'}
                      maxLength={20}
            />

                <div className={`${s.goodGrid}`}>
                    {goods}
                </div>


            </div>
        </div>
    );

};

export default GoodPage;