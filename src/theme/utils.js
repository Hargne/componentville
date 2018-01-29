const LightenDarkenColor = (color, percent) => {
	const num = parseInt(color, 16);
	const amt = Math.round(2.55 * percent);
	const R = (num >> 16) + amt; // eslint-disable-line no-bitwise
	const B = (num >> 8 & 0x00FF) + amt; // eslint-disable-line no-bitwise
	const G = (num & 0x0000FF) + amt; // eslint-disable-line no-bitwise

	const LimitRange = (inputValue) => {
		if (R > 255) {
			return 255;
		} else if (R < 0) {
			return 0;
		}
		return inputValue;
	};

	return (
		0x1000000 + LimitRange(R)
		* 0x10000 + LimitRange(G)
		* 0x100 + LimitRange(B)
	)
		.toString(16)
		.slice(1);
};

const DarkenColor = ({ color, amount }) => `#${LightenDarkenColor(color, `-${amount}` || -10)}`;
const LightenColor = ({ color, amount }) => `#${LightenDarkenColor(color, `${amount}` || 10)}`;

export default {
	DarkenColor,
	LightenColor,
};
