import styled from 'react-emotion'
import { colors, layout, typography } from 'componentville-theme';
import { getColorSchemeColor } from 'componentville-theme/colors';

export const ButtonStyle = styled('button')`
	${props => StyleBySize(props.size)}
	${props => StyleByScheme(props.scheme)}
	${props => props.fullWidth && `
		width: 100%;
		display: block;
	`}
	text-transform: none;
	cursor: pointer;
	border: 0;
	margin: 0;
	white-space: normal;
	word-wrap: break-word;
	outline: 0;
`

const StyleByScheme = (scheme) => {
	const color = getColorSchemeColor(scheme);
	return `
		background-color: ${colors[scheme].base || '#555'};
		color: ${colors[scheme].getTextColor()};
		&:hover {
			color: ${colors[scheme].getTextColor(colors[scheme].lighter)};
			background-color: ${colors[scheme].lighter || '#777'};
		}
	`;
};

const StyleBySize = (size) => {
	switch(size) {
		case 'lg':
			return `
				padding: ${layout.padding.md} ${layout.padding.xlg};
				font-size: ${typography.sizes.text.lg};
			`;
			break;
		case 'md':
			return `
				padding: ${layout.padding.sm} ${layout.padding.lg};
				font-size: ${typography.sizes.text.md};
			`;
			break;
		case 'sm':
			return `
				padding: ${layout.padding.sm} ${layout.padding.md};
				font-size: ${typography.sizes.text.sm};
			`;
			break;
		case 'xs':
		default:
			return `
				padding: ${layout.padding.xs} ${layout.padding.sm};
				font-size: ${typography.sizes.text.xs};
			`;
	}
};
