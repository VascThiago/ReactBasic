import React from "react";

function Button(props) {
    return (
        <>
            <button onClick={() => alert(`A label deste botão é ${props.label}`)}>{props.label}</button>
        </>
    );
}

Button.defaultProps = {
    label: 'Label padrão'
}

export default Button