<template>
	<div
		class="
			bg-gray-50
			min-h-screen
			flex
			items-center
			justify-center
			px-16
			animate
		"
	>
		<div class="relative w-full max-w-lg">
			<div
				class="
					absolute
					top-0
					-left-20
					w-96
					h-96
					bg-purple-400
					rounded-full
					mix-blend-multiply
					filter
					blur-xl
					opacity-30
					animate-blob
				"
			></div>

			<div
				class="
					absolute
					top-0
					-right-14
					w-96
					h-80
					bg-yellow-500
					rounded-full
					mix-blend-multiply
					filter
					blur-xl
					opacity-30
					animate-blob
					animation-delay-2s
				"
			></div>

			<div
				class="
					absolute
					-bottom-10
					left-10
					w-96
					h-80
					bg-pink-500
					rounded-full
					mix-blend-multiply
					filter
					blur-xl
					opacity-30
					animate-blob
					animation-delay-4s
				"
			></div>

			<div class="m-8 relative space-y-4">
				<div class="">
					<div class="flex flex-col mb-10">
						<h1 class="text-5xl font-bold text-center">
							{{
								!user
									? 'Your social links in 	one place'
									: `Hello, ` + user.first_name + `👋`
							}}
						</h1>
						<button
							v-if="user"
							class="btn btn-link flex items-center"
							@click="goto(user.username)"
						>
							{{ `https://localhost:3000/` + user.username }}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</button>
					</div>

					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-14 w-14 mr-5 text-secondary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p class="mb-5 text-xl">
							Curate all your social network accounts, music and payment links,
							blogs all in one place.
						</p>
					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-14 w-14 mr-5 text-secondary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<p class="mb-5 text-xl">
							Let your audience grow and share your content with them.
						</p>
					</div>

					<div class="mx-auto w-full flex items-center">
						<nuxt-link
							v-if="!$store.state.user.user"
							to="/register"
							class="btn btn-secondary mx-auto text-focus rounded-full mt-5"
						>
							Get started for free</nuxt-link
						>
						<div v-else class="flex space-x-5 mx-auto">
							<nuxt-link
								to="/u/new"
								class="btn btn-secondary mx-auto text-focus rounded-full mt-5"
							>
								Add links now</nuxt-link
							>
							<nuxt-link
								to="/u/settings/account"
								class="
									btn btn-outline
									mx-auto
									border-content-focus
									rounded-full
									text-slate-800
									mt-5
								"
							>
								Update profile</nuxt-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Array,
			default: () => {
				return [
					{
						id: 1,
						first_name: '',
						last_name: '',
						username: '',
					},
				]
			},
		},
	},

	methods: {
		goto(username) {
			window.open(`http://localhost:3000/${username}`)
		},
	},
}
</script>

<style scoped>
[v-cloak] { display: none }
</style>
