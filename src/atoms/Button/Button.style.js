import styled from 'react-emotion';
import { colorScheme, layout, typography } from 'componentville-theme';

const StyleByScheme = (scheme) => `
	background-color: ${colorScheme[scheme].base || '#555'};
	color: ${colorScheme[scheme].getTextColor()};
	&:hover {
		color: ${colorScheme[scheme].getTextColor(colorScheme[scheme].lighter)};
		background-color: ${colorScheme[scheme].lighter || '#777'};
	}
`;

const StyleBySize = (size) => {
	switch (size) {
		case 'lg':
			return `
				padding: ${layout.padding.md} ${layout.padding.xlg};
				font-size: ${typography.sizes.text.lg};
			`;
		case 'md':
			return `
				padding: ${layout.padding.sm} ${layout.padding.lg};
				font-size: ${typography.sizes.text.md};
			`;
		case 'sm':
			return `
				padding: ${layout.padding.sm} ${layout.padding.md};
				font-size: ${typography.sizes.text.sm};
			`;
		case 'xs':
		default:
			return `
				padding: ${layout.padding.xs} ${layout.padding.sm};
				font-size: ${typography.sizes.text.xs};
			`;
	}
};

const Button = styled('button')`
	text-transform: none;
	cursor: pointer;
	border: 0;
	margin: 0;
	white-space: normal;
	word-wrap: break-word;
	outline: 0;
	${props => StyleBySize(props.size)}
	${props => StyleByScheme(props.scheme)}
	${props => props.fullWidth && `
		width: 100%;
		display: block;
	`}
	${props => props.disabled && `
		opacity: 0.5;
		cursor: not-allowed; 
	`}
`;

export default {
	Button,
};
