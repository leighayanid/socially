<template>
	<div>
		<BaseHero v-if="$route.name == 'index'">
			<div class="form-group z-10"></div>
		</BaseHero>
		<div class="grid place-items-center">
			<img
				src="./../assets/images/1.png"
				alt=""
				class="mt-14 rounded-t-2xl shadow-2xl"
			/>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'default',
}
</script>
