<template>
	<FormulateForm
		v-slot="{ isValid }"
		class="space-y-3 p-4"
		name="create"
		@submit="createLink"
	>
		<div class="my-2 flex flex-col space-y-4">
			<FormulateInput
				v-model="linkInfo.link_name"
				name="Link name"
				type="text"
				label="Link name"
				label-class="text-neutral-focus"
				validation="required|min:5"
				input-class="input input-bordered w-full"
				error-class="text-red-500 text-xs mb-1"
			/>

			<FormulateInput
				v-model="linkInfo.description"
				name="Description"
				type="text"
				label="Description"
				label-class="text-neutral-focus"
				validation="required|min:3"
				input-class="input input-bordered w-full"
				error-class="text-red-500 text-xs mb-1"
			/>
			<FormulateInput
				v-model="linkInfo.website_url"
				name="Website URL"
				type="text"
				label="Website URL (must start with http:// or https://)"
				label-class="text-neutral-focus"
				validation="required|min:3"
				input-class="input input-bordered w-full"
				error-class="text-red-500 text-xs mb-1"
			/>
		</div>
		<FormulateInput
			type="submit"
			:label="loading ? 'Adding link...' : 'Add link'"
			:disabled="!isValid || loading"
			input-class="btn btn-block btn-primary mt-5"
		/>
	</FormulateForm>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			linkInfo: {
				link_name: '',
				description: '',
				website_url: '',
			},
		}
	},
	methods: {
		async createLink() {
			await this.$emit('createLink', this.linkInfo)
			this.reset()
		},
		reset() {
			this.$formulate.reset('create')
		},
	},
}
</script>
