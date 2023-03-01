<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { Theme } from '$lib/types/index';

	// TODO: what is the correct type here?
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onThemeChange = (event: any) => {
		event.target.parentElement.submit();
	};
</script>

<form method="POST" action="/?/setTheme" use:enhance>
	<input name="theme" type="checkbox" class="rounded-sm" />
</form>
