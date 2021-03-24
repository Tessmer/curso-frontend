import React from "react";

const Button = ({ handleClick, text }) => { // definindo um componente que recebe 2 props
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}
export default Button;
