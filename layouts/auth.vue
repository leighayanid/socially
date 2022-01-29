<template>
	<div class="div">
		<BaseNav />
		<div class="flex md:flex-row flex-col bg-white py-20">
			<div
				class="
					wrapper
					py-10
					md:w-1/3
					px-10
					w-2/3
					my-auto
					mx-auto
					bg-gray-300
					border-gray-500
					rounded-lg
				"
			>
				<BaseLogo />
				<Nuxt />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '~/components/base/Footer.vue'
export default { components: { Footer } }
</script>
