<template>
	<div class="py-20">
		<div class="md:w-1/2 w-full mx-auto bg-gray-900 p-4 rounded-xl">
			<h1 class="text-neutral-content text-2xl font-bold mb-5">
				Post New Content
			</h1>
			<div class="flex flex-col">
				<FormCreate @createLink="createNewLink($event)"></FormCreate>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'default',

	middleware: ['isAuth'],

	computed: {
		message() {
			return this.$store.getters['link/getMessage']
		},
	},
	methods: {
		createNewLink(event) {
			this.$store.dispatch('link/createNewLink', {
				linkInfo: event,
			})
		},
	},
}
</script>

<style scoped>
.formulate-input-wrapper {
  @apply flex;
}

.vue-simplemde {
  @apply rounded border border-secondary;
}

.formulate-input-element--group{
  @apply flex;
}
</style>
