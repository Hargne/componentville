import styled from 'react-emotion'
import { colors, layout, typography } from 'componentville-theme';

export const ButtonStyle = styled('button')`
	${props => StyleBySize(props.size)}
	background-color: ${colors.primary.base};
	text-transform: none;
	cursor: pointer;
	border: 0;
	color: #fff;
	margin: 0;
	white-space: normal;
	word-wrap: break-word;
	outline: 0;
	${props => props.fullWidth && `
		width: 100%;
		display: block;
	`}
`

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
