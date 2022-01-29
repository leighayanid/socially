<template>
	<div class="flex flex-row items-center space-x-2">
		<base-card class="md:flex-row flex-col flex-1">
			<button
				class="flex btn-primary btn-ghost btn-block"
				@click="goto(link.website_url)"
			>
				<div class="flex">
					<div class="flex flex-row">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
						<p class="flex flex-row items-center">
							{{ link.description }}
						</p>
					</div>
				</div>
			</button>
		</base-card>
		<button
			v-if="
				$supabase.auth.session() &&
				$supabase.auth.session().user.id === link.user_id
			"
			:class="
				isDeleting
					? `btn btn-sm btn-danger`
					: `btn btn-sm btn-danger disabled  `
			"
			@click="deleteItem(link)"
		>
			Delete
		</button>
	</div>
</template>

<script>
export default {
	name: 'LinkListingItem',
	// eslint-disable-next-line vue/require-prop-types
	props: ['link'],

	computed: {
		isDeleting() {
			return this.$store.state.link.loading
		},
	},

	methods: {
		goto(link) {
			window.open(link)
		},
		deleteItem(link) {
			// emit delete
			this.$emit('delete', link)
		},
	},
}
</script>
