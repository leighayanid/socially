<template>
	<div>
		<base-card class="md:flex-row flex-col">
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
	</div>
</template>

<script>
export default {
	name: 'LinkListingItem',
	// eslint-disable-next-line vue/require-prop-types
	props: ['link'],

	methods: {
		goto(link) {
			window.open(link)
		},
	},
}
</script>
