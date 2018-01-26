import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './Button.style';

export const buttonSizes = ['xs', 'sm', 'md', 'lg'];

const Button = ({
	children,
	...props
}) => {
	return (
		<ButtonStyle {...props}>
			{children}
		</ButtonStyle>
	);
};

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

export default Button;
