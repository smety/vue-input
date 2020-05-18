<template lang="html">
	<div class="container">
		<h2>Small input</h2>
		<vue-input :size="'sm'" :id="'example-1'" :label="'Input small label'" :error-message="'Please fill the input'"
		           :is-required="true"></vue-input>

		<hr>

		<h2>Small input with error</h2>
		<vue-input :size="'sm'" :id="'example-2'" :label="'Input small label'" :is-required="true"></vue-input>

		<hr>

		<h2>Large input with error</h2>
		<vue-input :size="'lg'" :id="'example-3'" :label="'Input large label'"
		           :error-message="'Please fill the input'"></vue-input>

		<hr>

		<h2>Large input with error</h2>
		<vue-input :size="'lg'" :id="'example-4'" :label="'Input large label with error'"></vue-input>

		<h2>Small input dark</h2>
		<div style="padding: 30px; background: #2b3339;">
			<vue-input :size="'sm'" :theme="'dark'" :id="'example-1'" :label="'Input small label'"
			           :is-required="true"></vue-input>
		</div>

		<h2>Large input dark</h2>
		<div style="padding: 30px; background: #2b3339;">
			<vue-input :size="'lg'" :theme="'dark'" :id="'example-5'" :label="'Input small label'"
			           :is-required="true"></vue-input>
		</div>


		<h2>Small dark input with error</h2>
		<div style="padding: 30px; background: #2b3339;">
			<vue-input :size="'sm'" :theme="'dark'" :id="'example-6'" :label="'Input small label'" :error-message="'Dark error message'"></vue-input>
		</div>
	</div>
</template>

<script lang="ts">
    import Vue from "vue";
    import VueInput from "./form/VueInput.vue";

    Vue.component('vue-input', VueInput);

    export default Vue.extend({
        mounted(): void {
        },
    });
</script>
