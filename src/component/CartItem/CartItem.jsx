import React, { useContext } from "react";
import { AppContext } from "../../context/App.jsx";
import { Btn } from "../index";
import "./CartItem.scss";

export default function CartItem({ data, index }) {
    const appContext = useContext(AppContext);

    const fRemoveToCart = () => {
        appContext?.dispatch({ type: "REMOVE_TO_CART", payload: index });
    };

    return (
        <article className="cartItem">
            <img className="cartItemImg" src={data.img} alt="" />

            <div className="cartItemDetail">
                <p className="cartItemName">{appContext?.name}</p>
                <p className="cartItemPrice">
                    ${appContext?.price} x {data.wantToBuy}{" "}
                    <span className="cartItemTotal">
                        ${parseFloat(appContext?.price) * data.wantToBuy}
                    </span>
                </p>
            </div>

            <Btn
                className="cartItemRemove"
                icon={"/img/icon-delete.svg"}
                onClick={fRemoveToCart}
            />
        </article>
    );
}
