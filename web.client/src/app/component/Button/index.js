import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export const TextButtonWithIcon = (props) => {

    let activeState = props.activeClientID && props.activeClientID === props.id?"active":""
    return (
        <div onClick={props.onclick} className={"textButtonWithIcon "+props.className+ " "+activeState }>
            <span>
                <i className={props.iconClass}></i>
            </span>
            <span>{props.label}</span>
        </div>
    )
};

TextButtonWithIcon.prototype = {
    iconClass: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}



export const  Button = (props) => {
    let buttonType = props.type.length ? `btn-${props.type}` : '';
    let className = `btn ${buttonType}${props.outline ? "-outline" : ""} ${
        props.className
        }`;
    let { onClick, style } = { ...props };
    if (props.type === "disabled") onClick = () => {};

    return (
        <a href={props.href} target={props.target} id={props.id} onClick={onClick} style={style} className={className}>
            {props.value || props.children}
        </a>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    outline: PropTypes.bool,
    type: PropTypes.oneOf(["primary", "secondary", "disabled", "button", ""])
};

Button.defaultProps = {
    className: "",
    value: null,
    outline: false,
    type: ""
};




