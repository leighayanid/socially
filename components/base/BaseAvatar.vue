<template>
	<div class="avatar">
		<div class="w-32 h-32 p-2">
			<img :src="imgSrc" class="rounded-full" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgSrc: {
			type: String,
			required: true,
		},
	},
}
</script>
