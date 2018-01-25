import { utils } from 'componentville-theme';

const ColorScheme = {
	primary: '#E80023',
	secondary: '#0074C3',
	success: '#30BE3C',
	danger: 'rgb(217, 83, 79)',
	warning: '#F9DC06',
	info: '#0074C3',
}

const GenerateFullColorScheme = (scheme) => {
	const fullScheme = {};
	for (const item in scheme) {
		fullScheme[item] = {
			base: scheme[item],
			/** darker: utils.DarkenColor({
				color: scheme[item],
				amount: '10%'
			}),
			lighter: utils.LightenColor({
				color: scheme[item],
				amount: '10%'
			})*/
		};
	}
	return fullScheme;
};

export default GenerateFullColorScheme(ColorScheme);
