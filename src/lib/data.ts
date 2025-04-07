import { PizzaType } from './types';

export const pizzas: PizzaType[] = [
	{
		id: 1,
		title: 'Чизбургер-пицца',
		price: 395,
		imageUrl:
			'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
		types: ['тонкое', 'традиционное'],
		sizes: [26, 30, 40, 50],
	},
	{
		id: 2,
		title: 'Маргарита',
		price: 450,
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/d35c86a62a1b4a2b8f.png',
		types: ['тонкое', 'традиционное'],
		sizes: [26, 30, 40],
	},
	{
		id: 3,
		title: 'Пепперони',
		price: 550,
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/04e45f4db09846fdad.png',
		types: ['тонкое', 'традиционное'],
		sizes: [30, 40, 50],
	},
];
