<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="bg-white py-20">
	<div class="mx-auto max-w-4xl px-4">
		<h1 class="mb-6 text-4xl font-bold">About AlgArchive</h1>

		<p class="mb-6 text-lg text-gray-700">
			AlgArchive is a community-driven platform where cubers can submit and discover algorithms for
			a wide variety of twisty puzzles. From classic 3x3 to OH, 2x2, and niche methods, we aim to be
			the fastest, easiest way to find usable algs—and rate how effective they are in the real
			world.
		</p>

		<p class="mb-6 text-lg text-gray-700">
			Every submission includes an <strong>average of 5 (ao5)</strong> so others can see how fast
			the alg is in practice, plus a <strong>difficulty rating</strong> from 1 to 5 to help learners
			prioritize. You can browse, filter, and sort algorithms by cube type, speed, or ease of memorization.
		</p>

		<p class="mb-6 text-lg text-gray-700">
			Whether you're looking to improve your PLL recognition or want to share your latest ZBLL find
			with the world, AlgArchive is your place to connect with thousands of cubers who value
			clarity, speed, and sharing knowledge.
		</p>

		<p class="mb-6 text-lg text-gray-700">
			Join our growing community on
			<a
				href="https://discord.gg/your-discord"
				class="text-indigo-600 hover:underline"
				target="_blank">Discord</a
			>, submit your algs, and help us build the future of cubing together.
		</p>

		<p class="mt-12 text-sm text-gray-400">
			© {new Date().getFullYear()} AlgArchive. Built with love for speedcubers.
		</p>
	</div>
</section>
