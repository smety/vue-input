<template lang="html">
	<div class="container">
		<h2>Small input</h2>
		<vue-input :size="'sm'" :id="'example-1'" :label="'Input small'" :has-error="true"></vue-input>

		<h2>Large input</h2>
		<vue-input :size="'lg'" :id="'example-2'" :label="'Input large'" :has-error="false"></vue-input>
	</div>
</template>

<script lang="ts">
    import Vue from "vue";
    import VueInput from "./form/VueInput.vue";

    Vue.component('vue-input',VueInput);

    export default Vue.extend({
        mounted(): void {
        },
    });
</script>
