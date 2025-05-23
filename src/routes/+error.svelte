<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-white px-4">
	<h1 class="mb-4 text-6xl font-extrabold text-gray-900">{page.status}</h1>
	<p class="mb-6 text-lg text-gray-700">
		{page.error?.message}
	</p>
	<div class="flex space-x-4 items-center">
		<a href="/" class="rounded-full bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">
			Go Home
		</a>
		<a
			href="https://discord.gg/NYPG43xe9t"
			target="_blank"
			rel="noopener"
			class="rounded-full border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
		>
			Join Discord
		</a>
	</div>
</div>
