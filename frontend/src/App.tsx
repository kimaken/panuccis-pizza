import './scss/app.scss';

import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { PizzaType } from './lib/types';

function App() {
	const [items, setItems] = React.useState<PizzaType[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchPizzas = async () => {
			try {
				console.log('Effect running');
				const res = await fetch('http://localhost:4000/pizzas');
				if (!res.ok) {
					throw new Error('Ошибка сети');
				}
				const arr: PizzaType[] = await res.json();
				setItems(arr);
			} catch (error) {
				console.error('Ошибка при загрузке пицц:', error);
			} finally {
				setIsLoading(false); // Данные либо загружены, либо ошибка произошла
			}
		};

		fetchPizzas();
	}, []);

	console.log(items);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{isLoading ? (
							<p>Загрузка...</p>
						) : (
							items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
