<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{console.log('pageData', data)}
blog page... {data.lang.code}
