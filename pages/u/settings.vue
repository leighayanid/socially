
<template>
	<div class="py-10 px-40">
		<div class="flex settings">
			<div class="flex settings-nav py-10 px-4 w-full space-x-3">
				<nuxt-link
					v-for="link in links"
					:key="link.id"
					:to="link.url"
					class="btn rounded-full btn-ghost"
				>
					{{ link.title }}
				</nuxt-link>
			</div>
		</div>
		<div class="settings-info w-full px-10">
			<nuxt-child></nuxt-child>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			links: [
				{
					id: 1,
					title: 'Account',
					url: '/u/settings/account',
				},
				{
					id: 2,
					title: 'Photo',
					url: '/u/settings/photo',
				},
				{
					id: 3,
					title: 'Theme',
					url: '/u/settings/theme',
				},
			],
		}
	},
	beforeCreate() {
		this.$router.push('/u/settings/account')
	},
}
</script>

<style scoped>
.nuxt-link-exact-active, .nuxt-link-active {
  @apply bg-secondary px-4 py-2 text-neutral-content;
}
</style>

