<script lang="ts"></script>

<section
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4"
>
	<div class="w-full max-w-md space-y-6 rounded-2xl bg-white/70 p-8 shadow-xl backdrop-blur-md">
		<h2 class="text-center text-2xl font-extrabold text-gray-900">Sign in to your account</h2>

		<!-- Form -->
		<form class="space-y-4">
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
				<input
					id="email"
					type="email"
					required
					class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
				/>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
				<input
					id="password"
					type="password"
					required
					class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
				/>
			</div>

			<div class="flex items-center justify-between text-sm">
				<p class="text-neutral-700">Forgot password?</p>
			</div>

			<button
				disabled
				type="submit"
				class="w-full cursor-pointer rounded-full bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
			>
				Sign In (Isn't supported yet)
			</button>
		</form>

		<!-- Divider -->
		<div class="flex items-center justify-center space-x-2 text-sm text-gray-400">
			<span class="h-px flex-1 bg-gray-300"></span>
			<span>or</span>
			<span class="h-px flex-1 bg-gray-300"></span>
		</div>

		<!-- Social Login -->
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
				<p class="text-center text-red-600">Sign In with 3rd parties isn't supported yet.</p>
			</div>
		</div>
	</div>
</section>
