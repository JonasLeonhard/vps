<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
