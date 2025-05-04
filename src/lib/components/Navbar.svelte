<script lang="ts">
	import { goto } from '$app/navigation';

	const leftLinks = [
		{ href: '/browse', label: 'Browse' },
		{ href: '/submit', label: 'Submit' },
		{ href: '/learn', label: 'Learn' }
	];

	const rightLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/help', label: 'Help' }
	];

	function onStart() {
		goto('/signup');
	}
</script>

<nav class="w-full px-4 py-6 md:px-8">
	<div class="mx-auto grid max-w-7xl grid-cols-3 items-center">
		<ul class="hidden items-center space-x-10 font-medium text-gray-900 md:flex">
			{#each leftLinks as { href, label }}
				<li>
					<a {href} class="transition hover:text-gray-700">{label}</a>
				</li>
			{/each}
		</ul>

		<a href="/" class="font-boxing mx-auto text-4xl">AlgArchive</a>

		<div class="flex items-center justify-end space-x-10">
			<ul class="hidden items-center space-x-10 font-medium text-gray-900 md:flex">
				{#each rightLinks as { href, label }}
					<li>
						<a {href} class="transition hover:text-gray-700">{label}</a>
					</li>
				{/each}
			</ul>

			<button
				onclick={onStart}
				class="rounded-full bg-gray-900 px-6 py-2 font-semibold text-white
                       transition hover:bg-gray-700 cursor-pointer"
			>
				Get&nbsp;started
			</button>
		</div>
	</div>
</nav>
