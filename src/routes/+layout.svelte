<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';

	let { data, children } = $props();

	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics();

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { session, supabase } = $derived(data);
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

<Disclaimer />

<Navbar />

{@render children()}

<Footer />
