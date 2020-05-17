<template lang="html">
	<div class="container">
		<h2>Input size sm</h2>
		<vue-input :size="'sm'" :id="'example-1'" :label="'Input small'" :has-error="true" />
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
