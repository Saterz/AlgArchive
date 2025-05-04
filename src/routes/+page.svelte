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
			Browse community-vetted algorithms across every puzzle type. Share your PB-crushing secrets,
			tag them with your average-of-5, and help others learn faster.
		</p>

		<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
			<button
				onclick={getStarted}
				class="rounded-full bg-gray-900 px-8 py-3 cursor-pointer font-semibold text-white
                       transition hover:bg-gray-700"
			>
				Browse Algorithms
			</button>
			<button
				onclick={submitAlg}
				class="rounded-full bg-white px-8 py-3 cursor-pointer font-semibold text-gray-900
                       ring-1 ring-gray-300 transition hover:bg-gray-50"
			>
				Submit an Algorithm
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
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
                            bg-indigo-600 text-white"
				>
					<i class="fa-solid fa-cube fa-2x"></i>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Crowd-rated Difficulty</h3>
				<p class="text-gray-600">
					See at a glance which algorithms are beginner-friendly — and which ones demand finger-trick
					mastery.
				</p>
			</div>

			<div class="px-6 text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
                            bg-sky-500 text-white"
				>
					<i class="fa-solid fa-stopwatch fa-2x"></i>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Real ao5 Benchmarks</h3>
				<p class="text-gray-600">
					Every submission is tagged with average-of-5 times so you can judge effectiveness, not
					theory.
				</p>
			</div>

			<div class="px-6 text-center">
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
                            bg-emerald-500 text-white"
				>
					<i class="fa-solid fa-share fa-2x"></i>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Instant Sharing</h3>
				<p class="text-gray-600">
					One-click copy or Discord embed—spread that new ZBLL discovery before tomorrow's comp.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-indigo-600 py-24">
	<div class="mx-auto max-w-5xl px-4 text-center text-white">
		<h2 class="text-4xl font-extrabold md:text-5xl">Ready to level up your solve?</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
			Join thousands of cubers discovering faster, friendlier algorithms every day.
		</p>
		<button
			onclick={getStarted}
			class="mt-10 inline-flex items-center justify-center rounded-full
                   bg-white px-10 py-4 text-lg cursor-pointer font-semibold text-indigo-700
                   transition hover:bg-indigo-50"
		>
			Get started
		</button>
	</div>
</section>
