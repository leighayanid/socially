<template>
	<div class="py-20">
		<div
			class="
				md:w-1/2
				w-full
				mx-auto
				border border-gray-900 border-dashed
				bg-gray-200
				px-8
				py-10
				rounded-xl
			"
		>
			<h1 class="text-neutral text-2xl font-bold mb-5">Add new link</h1>
			<div class="flex flex-col">
				<FormCreate
					:loading="loading"
					@createLink="createNewLink($event)"
				></FormCreate>
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
		loading() {
			return this.$store.state.link.loading
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
