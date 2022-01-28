<template>
	<div class="md:px-40 px-4 md:py-10 py-4">
		<div>
			<p v-if="$fetchState.pending" class="flex flex-col">
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
			</p>
			<p v-else-if="$fetchState.error">Error while fetching links</p>
			<div v-else>
				<div v-if="user" class="flex flex-col items-center mb-5">
					<base-avatar v-if="user.avatar_url" :img-src="user.avatar_url" />
					<h1 class="text-2xl capitalize mt-2 text-base-900">
						{{ user.first_name }} {{ user.last_name }}
					</h1>
				</div>
				<link-list :links="links"></link-list>
				<empty-list v-if="!userInfo"></empty-list>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import LinkList from '@/components/link/LinkList.vue'
import LinkSkeleton from '@/components/skeleton/LinkSkeleton.vue'
import BaseAvatar from '@/components/base/BaseAvatar.vue'
import EmptyList from '~/components/error/EmptyList.vue'

export default {
	components: {
		LinkList,
		LinkSkeleton,
		BaseAvatar,
		EmptyList,
	},

	layout: 'none',

	data() {
		return {
			links: [],
			user: [],
			username: '',
		}
	},

	async fetch() {
		// eslint-disable-next-line no-console
		this.username = await this.$route.params.username
		await this.$store.dispatch('user/getUserProfileByUsername', {
			username: this.username,
		})
		await this.$store.dispatch('link/fetchUserLinks', {
			username: this.username,
		})
		this.links = this.userLinks
		this.user = this.userInfo
	},

	activated() {
		this.$fetch()
	},
	// eslint-disable-next-line vue/order-in-components
	computed: {
		...mapState({
			userLinks: (state) => state.link.userLinks,
			userInfo: (state) => state.user.user,
			isSearching: (state) => state.link.searching,
		}),
	},
}
</script>
