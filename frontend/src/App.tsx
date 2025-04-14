import './scss/app.scss';

import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import { PizzaType } from './lib/types';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
	const [items, setItems] = React.useState<PizzaType[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchPizzas = async () => {
			try {
				console.log('Effect running');
				const res = await fetch('http://localhost:4000/pizzas');
				if (!res.ok) {
					throw new Error('Ошибка при получении данных');
				}
				const arr: PizzaType[] = await res.json();
				console.log('Данные с бэка:', arr);
				await new Promise(resolve => setTimeout(resolve, 3000)); // 💤 показать скелетон
				setItems(arr);
			} catch (error) {
				console.error('Ошибка при загрузке пицц:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPizzas();
	}, []);

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
						{isLoading
							? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
							: items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
