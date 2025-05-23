<script lang="ts">
	import { goto } from '$app/navigation';

	let isOpen = $state(false);

	const leftLinks = [
		{ href: '/browse', label: 'Browse' },
		{ href: 'https://tally.so/r/wQyqEA', label: 'Submit' },
		{ href: '/learn', label: 'Learn' }
	];

	const rightLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/help', label: 'Help' }
	];
</script>

<nav class="w-full bg-white px-4 py-6 shadow-md md:px-8">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<!-- Left Links (Desktop) -->
		<div class="hidden lg:flex items-center space-x-6">
			{#each leftLinks as { href, label }}
				<a {href} class="text-gray-700 transition hover:text-indigo-600">{label}</a>
			{/each}
		</div>

		<!-- Logo -->
		<a href="/" class="flex items-center space-x-2">
			<div class="hidden lg:flex">
				<img src="/AlgArchive.png" alt="AlgArchive logo" class="h-28 w-28" />
			</div>
			<span class="font-boxing text-4xl font-bold"
				><span class="text-indigo-600">Alg</span>Archive</span
			>
		</a>

		<!-- Right Links (Desktop) -->
		<div class="hidden lg:flex items-center space-x-6">
			{#each rightLinks as { href, label }}
				<a {href} class="text-gray-700 transition hover:text-indigo-600">{label}</a>
			{/each}
			<a
				href="/signup"
				class="ml-4 rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
			>
				Get Started
			</a>
		</div>

		<!-- Mobile Hamburger -->
		<div class="lg:hidden">
			<button
				onclick={() => {
					isOpen = !isOpen;
				}}
				aria-label="Toggle menu"
			>
				{#if isOpen}
					<i class="fa-solid fa-xmark fa-2x"></i>
				{:else}
					<i class="fa-solid fa-bars fa-2x"></i>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<div class="mt-4 space-y-2 px-4 md:hidden">
			{#each leftLinks as { href, label }}
				<a {href} class="block text-gray-700 transition hover:text-indigo-600">{label}</a>
			{/each}
			{#each rightLinks as { href, label }}
				<a {href} class="block text-gray-700 transition hover:text-indigo-600">{label}</a>
			{/each}
			<a
				href="/signup"
				class="mt-2 w-full rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
			>
				Get Started
			</a>
		</div>
	{/if}
</nav>
