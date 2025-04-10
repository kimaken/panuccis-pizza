import { useState } from 'react';

function Categories() {
	const [activeCategory, setActiveCategory] = useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианские',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className='categories'>
			<ul>
				{categories.map((value, index) => (
					<li
						key={index}
						onClick={() => setActiveCategory(index)}
						className={activeCategory === index ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
