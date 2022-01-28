<template>
	<div class="avatar">
		<div class="rounded-full w-32 h-32 p-2">
			<img :src="imgSrc" />
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
