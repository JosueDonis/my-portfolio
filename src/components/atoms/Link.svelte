<script lang="ts">
	export let name: string;
	export let href: string = '';
</script>

<a {href} class="m-0 box-border text-sm w-full link">
	{name ?? ''}
</a>
