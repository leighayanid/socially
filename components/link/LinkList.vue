<template>
	<div>
		<paginate v-if="shown" name="links" :list="links" :per="10">
			<link-listing-item
				v-for="(link, index) in paginated('links')"
				:key="index"
				:link="link"
				@delete="deleteLink(link, index)"
			/>
		</paginate>
		<paginate-links
			for="links"
			:async="true"
			:hide-single-page="true"
			class="mt-5"
		></paginate-links>
	</div>
</template>

<script>
import LinkListingItem from './LinkListingItem.vue'
export default {
	components: { LinkListingItem },
	// eslint-disable-next-line vue/require-prop-types
	props: ['links'],
	data() {
		return {
			paginate: ['links'],
			shown: false,
		}
	},
	mounted() {
		setTimeout(() => {
			this.shown = true
		}, 1000)
	},

	methods: {
		deleteLink(link, index) {
			this.$store.dispatch('link/deleteLink', {
				id: link.id,
				index,
			})
		},
	},
}
</script>

<style>
ul.paginate-links > li.number > a {
  @apply bg-neutral text-sm text-white p-2;

}

ul.paginate-links > li.active > a {
  @apply btn-primary btn-sm text-sm text-neutral p-2;
}
</style>
