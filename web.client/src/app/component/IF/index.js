import PropTypes from "prop-types";
const IF = props => (props.condition ? props.children : null);

IF.porpTypes = {
    condition: PropTypes.bool.isRequired
};
export default IF;
