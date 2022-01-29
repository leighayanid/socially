<template>
	<div class="md:px-40 px-4 py-10">
		<div class="md:w-1/2 mx-auto">
			<div v-if="$fetchState.pending" class="flex flex-col">
				<div class="items-center">
					<avatar-skeleton></avatar-skeleton>
				</div>
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
				<link-skeleton></link-skeleton>
			</div>
			<p v-else-if="$fetchState.error">Error while fetching jobs</p>
			<div v-else>
				<div class="flex flex-col mb-5">
					<base-avatar :img-src="user.avatar_url" />
					<h1 class="text-2xl capitalize mt-2">
						{{ user.first_name }} {{ user.last_name }}
					</h1>
				</div>
				<link-list :links="links"></link-list>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import LinkList from '@/components/link/LinkList.vue'
import LinkSkeleton from '@/components/skeleton/LinkSkeleton.vue'
import AvatarSkeleton from '@/components/skeleton/AvatarSkeleton.vue'
import BaseAvatar from '@/components/base/BaseAvatar.vue'

export default {
	components: {
		LinkList,
		LinkSkeleton,
		AvatarSkeleton,
		BaseAvatar,
	},

	layout: 'default',

	middleware: 'isAuth',

	data() {
		return {
			links: null,
			user: {},
			username: '',
		}
	},

	async fetch() {
		this.username = await this.$route.params.username
		await this.$store.dispatch('user/getUserProfileById', {
			id: this.$supabase.auth.user().id,
		})
		await this.$store.dispatch('link/fetchUserLinksById', {
			id: this.$supabase.auth.user().id,
		})
		this.links = this.userLinks
		this.user = this.userInfo
	},

	activated() {
		// eslint-disable-next-line no-console
		console.log(this.$store.state.link.userLinks)
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
