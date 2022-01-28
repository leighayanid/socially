<template>
	<div class="div">
		<BaseNav />
		<div class="flex md:flex-row flex-col bg-white py-20">
			<div class="wrapper md:py-5 py-10 md:px-72 w-2/3 my-auto mx-auto">
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
