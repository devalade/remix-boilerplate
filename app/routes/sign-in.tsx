import type { MetaFunction, ActionFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Sign in - Your new idea' },
		{ name: 'description', content: 'This is the sign in page for your new page' },
	];
};

export function action({}: ActionFunctionArgs) {
	// add the login logic
}

export default function SignIn() {
	return (
		<div className='h-screen w-full flex items-center justify-center'>
			<Form className='w-[400px] p-6 rounded-md border space-y-4 shadow-sm'>
				<p className=' font-semibold text-2xl'>Sign in</p>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input name='email' />
				</div>
				<div>
					<Label htmlFor='password'>Password</Label>
					<Input name='password' />
				</div>
				<div className='flex items-center justify-between py-4'>
					<div className='flex items-center space-x-2'>
						<Checkbox id='terms2' disabled />
						<label
							htmlFor='terms2'
							className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
							Accept terms and conditions
						</label>
					</div>
					<Button>Sign in</Button>
				</div>
			</Form>
		</div>
	);
}
