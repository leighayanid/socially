<template>
	<FormulateForm
		v-slot="{ isValid }"
		class="space-y-3 p-4"
		@submit="createLink"
	>
		<div class="my-2 flex flex-col space-y-4">
			<FormulateInput
				v-model="linkInfo.link_name"
				name="Link name"
				type="text"
				label="Link name"
				label-class="text-neutral-content"
				validation="required|min:5"
				input-class="input input-bordered w-full"
				error-class="text-red-500 text-xs mb-1"
			/>

			<FormulateInput
				v-model="linkInfo.description"
				name="Description"
				type="text"
				label="Description"
				label-class="text-neutral-content"
				validation="required|min:3"
				input-class="input input-bordered w-full"
				error-class="text-red-500 text-xs mb-1"
			/>
			<FormulateInput
				v-model="linkInfo.website_url"
				name="Website URL"
				type="text"
				label="URL"
				label-class="text-neutral-content"
				validation="required|min:3"
				input-class="input input-bordered w-full"
				error-class="text-red-500 text-xs mb-1"
			/>
		</div>
		<FormulateInput
			type="submit"
			label="Submit"
			:disabled="!isValid"
			input-class="btn btn-block btn-primary mt-5"
		/>
	</FormulateForm>
</template>

<script>
export default {
	data() {
		return {
			linkInfo: {
				link_name: '',
				description: '',
				website_url: '',
			},
			loading: false,
		}
	},

	methods: {
		createLink() {
			this.$emit('createLink', this.linkInfo)
		},
	},
}
</script>
