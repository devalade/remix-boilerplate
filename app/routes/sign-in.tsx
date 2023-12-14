import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { AuthorizationError } from 'remix-auth';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { authenticator } from '~/services/auth.server';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Sign in - Your new idea' },
		{ name: 'description', content: 'This is the sign in page for your new page' },
	];
};

export async function loader({ request }: LoaderFunctionArgs) {
	return await authenticator.isAuthenticated(request, {
		successRedirect: '/',
	});
}

export async function action({ request }: ActionFunctionArgs) {
	console.log({ request });
	try {
		return authenticator.authenticate('user-pass', request, {
			successRedirect: '/',
			throwOnError: true,
		});
	} catch (error) {
		// Because redirects work by throwing a Response, you need to check if the
		// caught error is a response and return it or throw it again
		console.log(error);
		if (error instanceof Response) return error;
		if (error instanceof AuthorizationError) {
			// here the error is related to the authentication process
		}
		// here the error is a generic error that another reason may throw
	}
}

export default function SignIn() {
	return (
		<div className='h-screen w-full flex items-center justify-center'>
			<Form method='post' className='w-[400px] p-6 rounded-md border space-y-4 shadow-sm'>
				<p className=' font-semibold text-2xl'>Sign in</p>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input name='email' />
				</div>
				<div>
					<Label htmlFor='password'>Password</Label>
					<Input name='password' type='password' />
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
					<Button type='submit'>Sign in</Button>
				</div>
			</Form>
		</div>
	);
}
