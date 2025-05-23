<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();

	let email = $state('');
	let password = $state('');
	let confirm = $state('');
	let error = $state('');

	function signUpVerification() {
		if (password.length < 8) {
			error = 'Password must be at least 8 characters.';
			return;
		}
		if (password !== confirm) {
			error = 'Passwords do not match';
			return;
		}
	}
</script>

<section
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4"
>
	<div class="w-full max-w-md space-y-6 rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-md">
		<h2 class="text-center text-2xl font-extrabold text-gray-900">Create your account</h2>

		<!-- Form -->
		<form class="space-y-4" method="POST" action="?/signup" use:enhance={signUpVerification}>
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
				<input
					name="email"
					type="email"
					bind:value={email}
					required
					class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
				/>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
				<input
					name="password"
					type="password"
					bind:value={password}
					required
					class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
				/>
			</div>

			<div>
				<label for="confirm" class="block text-sm font-medium text-gray-700">
					Confirm password
				</label>
				<input
					name="confirm"
					type="password"
					bind:value={confirm}
					required
					class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
				/>
			</div>

			<button
				type="submit"
				class="w-full cursor-pointer rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700"
			>
				Sign Up
			</button>
			{#if form?.message}
				<p class="mt-2 text-center text-sm text-red-500">
					{form.message}
				</p>
			{/if}
		</form>

		<!-- Divider -->
		<div class="flex items-center justify-center space-x-2 text-sm text-gray-400">
			<span class="h-px flex-1 bg-gray-300"></span>
			<span>or</span>
			<span class="h-px flex-1 bg-gray-300"></span>
		</div>

		<!-- Social Signup -->
		<div class="flex flex-col gap-2">
			<div class="flex gap-4">
				<button
					disabled
					class="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
				>
					<i class="fa-brands fa-discord"></i>
					Discord
				</button>
				<button
					disabled
					class="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
				>
					<i class="fa-brands fa-google"></i>
					Google
				</button>
			</div>
			<div>
				<p class="text-red-600 text-center">Sign Up with 3rd parties isn't supported yet.</p>
			</div>
		</div>

		<!-- Footer link -->
		<p class="mt-6 text-center text-sm text-gray-600">
			Already have an account?
			<a href="/login" class="ml-1 text-indigo-600 hover:underline"> Log in </a>
		</p>
	</div>
</section>
