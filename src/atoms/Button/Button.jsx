import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './Button.style';

const Button = ({ children, ...props }) => (
	<ButtonStyle.Button {...props}>
		{children}
	</ButtonStyle.Button>
);

const buttonSizes = ['xs', 'sm', 'md', 'lg'];
Button.sizes = buttonSizes;
Button.style = ButtonStyle;

Button.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	fullWidth: PropTypes.bool,
	size: PropTypes.oneOf(buttonSizes),
};

Button.defaultProps = {
	size: 'sm',
};

export default Button;
