import React from "react";

function UppercaseColor(props) {
    return (
        <>
            <p style={{color: props.color}}>{ props.text.toUpperCase() }</p>
        </>
    );
}

UppercaseColor.defaultProps = {
    color: 'blue',
    text: 'Isso é um parágrafo'
}

export default UppercaseColor;