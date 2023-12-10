import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'Your new idea' }, { name: 'description', content: 'This is a boilerplate' }];
};

export default function Index() {
	return (
		<div className='bg-slate-950 h-screen flex items-center justify-center text-white p-4'>
			<h1 className='text-6xl font-bold'>Build Your MVP in a week-end</h1>
			<p className='text-center'></p>
		</div>
	);
}
