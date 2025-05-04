<script lang="ts">
	// Example static algs (replace with real DB query later)
	const algorithms = [
		{
			id: 1,
			cubeType: '3x3',
			alg: "R U R' U' R U R' U' R U R'",
			ao5: 6.42,
			difficulty: 2
		},
		{
			id: 2,
			cubeType: '2x2',
			alg: "F R U' R' U' R U R' F'",
			ao5: 3.87,
			difficulty: 1
		},
		{
			id: 3,
			cubeType: 'OH 3x3',
			alg: "x' R U' R D R' U R D' x",
			ao5: 9.23,
			difficulty: 4
		}
	];
</script>

<section class="bg-white py-20">
	<div class="mx-auto max-w-6xl px-4">
		<h1 class="mb-10 text-4xl font-bold">Browse Algorithms</h1>

		<!-- Filters (static for now) -->
		<div class="mb-8 flex flex-wrap gap-4">
			<button class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
				All Types
			</button>
			<button class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
				3x3
			</button>
			<button class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
				2x2
			</button>
			<button class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
				OH
			</button>
		</div>

		<!-- Algs Grid -->
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each algorithms as alg}
				<div class="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
					<div class="mb-2 text-sm text-gray-500">{alg.cubeType}</div>
					<pre class="font-mono text-lg whitespace-pre-wrap text-gray-900">{alg.alg}</pre>
					<div class="mt-4 flex justify-between text-sm text-gray-600">
						<span>ao5: <strong>{alg.ao5}</strong>s</span>
						<span>★ {alg.difficulty}/5</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
