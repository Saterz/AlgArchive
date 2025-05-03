<script lang="ts">
	import { goto } from '$app/navigation';

	function getStarted() {
		goto('/browse');
	}
	function submitAlg() {
		goto('/submit');
	}
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24 pb-32">
	<div class="absolute inset-x-0 -top-40 -z-10 opacity-30 blur-3xl">
		<div
			class="aspect-square w-full rotate-45 rounded-3xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400"
		></div>
	</div>

	<div class="mx-auto max-w-6xl px-4 text-center">
		<h1 class="text-5xl font-extrabold tracking-tight md:text-7xl">
			The <span class="text-indigo-600">open archive</span><br />
			for cube algorithms
		</h1>

		<p class="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
			Browse community-vetted algs across every puzzle shape. Share your&nbsp;PB-crushing secrets,
			tag them with your&nbsp;average-of-5, and help others learn faster.
		</p>

		<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
			<button
				on:click={getStarted}
				class="rounded-full bg-gray-900 px-8 py-3 font-semibold text-white
                       transition hover:bg-gray-700"
			>
				Browse Algs
			</button>
			<button
				on:click={submitAlg}
				class="rounded-full bg-white px-8 py-3 font-semibold text-gray-900
                       ring-1 ring-gray-300 transition hover:bg-gray-50"
			>
				Submit an Alg
			</button>
		</div>
	</div>
</section>

<section class="bg-white py-20">
	<div class="mx-auto grid max-w-6xl gap-12 px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
		<div>
			<p class="text-4xl font-extrabold text-gray-900">1 500+</p>
			<p class="mt-2 text-sm text-gray-600">Algorithms shared</p>
		</div>
		<div>
			<p class="text-4xl font-extrabold text-gray-900">36</p>
			<p class="mt-2 text-sm text-gray-600">Cube types covered</p>
		</div>
		<div>
			<p class="text-4xl font-extrabold text-gray-900">4.7 ★</p>
			<p class="mt-2 text-sm text-gray-600">Avg. learnability score</p>
		</div>
		<div>
			<p class="text-4xl font-extrabold text-gray-900">9 k</p>
			<p class="mt-2 text-sm text-gray-600">Discord members</p>
		</div>
	</div>
</section>

<section class="bg-gray-50 py-24">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">Why AlgArchive?</h2>

		<div class="grid gap-16 lg:grid-cols-3">
			<div class="px-6 text-center">
				<div
					class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full
                            bg-indigo-600 text-white"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 7l9-4 9 4m-9 4l-9-4m9 4l9-4m-9 4v9"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Crowd-rated Difficulty</h3>
				<p class="text-gray-600">
					See at a glance which algs are beginner-friendly—and which ones demand finger-trick
					mastery.
				</p>
			</div>

			<div class="px-6 text-center">
				<div
					class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full
                            bg-sky-500 text-white"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 8v4l3 3M12 3v3m6.364 1.636l2.121-2.121M4.515 4.515L6.636 6.64M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Real ao5 Benchmarks</h3>
				<p class="text-gray-600">
					Every submission is tagged with average-of-5 times so you can judge effectiveness, not
					theory.
				</p>
			</div>

			<div class="px-6 text-center">
				<div
					class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full
                            bg-emerald-500 text-white"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 12v.01M4 12a8 8 0 018-8m0 0h.01M12 4l0 .01M12 4a8 8 0 018 8m0 0v.01M20 12a8 8 0 01-8 8m0 0h-.01M12 20l0-.01M12 20a8 8 0 01-8-8"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Instant Sharing</h3>
				<p class="text-gray-600">
					One-click copy or Discord embed—spread that new ZBLL discovery before tomorrow’s comp.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-indigo-600 py-24">
	<div class="mx-auto max-w-5xl px-4 text-center text-white">
		<h2 class="text-4xl font-extrabold md:text-5xl">Ready to level up your solve?</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
			Join thousands of cubers discovering faster, friendlier algs every day.
		</p>
		<button
			on:click={getStarted}
			class="mt-10 inline-flex items-center justify-center rounded-full
                   bg-white px-10 py-4 text-lg font-semibold text-indigo-700
                   transition hover:bg-indigo-50"
		>
			Get started
		</button>
	</div>
</section>
