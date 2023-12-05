import { Poppins, Quicksand, Roboto } from 'next/font/google';

export const quicksand = Quicksand({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin', 'latin-ext', 'vietnamese'],
});

export const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	subsets: ['devanagari', 'latin', 'latin-ext'],
});

export const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: [
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'latin',
		'latin-ext',
		'vietnamese',
	],
});
