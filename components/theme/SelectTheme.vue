<template>
	<div>
		<select
			v-model="storedTheme"
			data-choose-theme
			class="select select-bordered select-sm"
		>
			<option v-for="(theme, index) in themes" :key="index" class="mr-5">
				{{ theme }}
			</option>
		</select>
	</div>
</template>

<script>
import { themeChange } from 'theme-change'
export default {
	data() {
		return {
			themes: ['corporate', 'light', 'luxury', 'black'],
			storedTheme: '',
		}
	},
	mounted() {
		themeChange(false)
		this.getTheme()
	},
	methods: {
		getTheme() {
			this.storedTheme = localStorage.getItem('theme')
			return this.storedTheme
		},
	},
}
</script>
