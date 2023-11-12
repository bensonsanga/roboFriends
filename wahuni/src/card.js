import React from "react";

const Card = ({ name }) => {
    return(
        <div className=" w-100 ">
            <img alt='ben' src='https://avatars.githubusercontent.com/u/35920122?v=4'/>
            <div>
                <h2 className=" f1 ">{name}</h2>
            </div>
        </div>
    )
}
export default Card;