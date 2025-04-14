import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const Skeleton: React.FC<IContentLoaderProps> = props => (
	<ContentLoader
		speed={2}
		width={280}
		height={466}
		viewBox='0 0 280 466'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='130' cy='130' r='130' />
		<rect x='0' y='275' rx='10' ry='10' width='260' height='25' />
		<rect x='0' y='315' rx='10' ry='10' width='260' height='80' />
		<rect x='0' y='420' rx='10' ry='10' width='90' height='30' />
		<rect x='110' y='408' rx='30' ry='30' width='150' height='50' />
	</ContentLoader>
);

export default Skeleton;
