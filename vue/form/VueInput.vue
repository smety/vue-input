<template lang="html">
	<label :id="id">
		<div class="input-label">{{ label }}</div>
		<input :class="[ sizeClass, 'input' ]" :id="id">
		<span class="input-error" v-if="hasError">
			ads
		</span>
	</label>
</template>


<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: {
            id: {
                type: String,
                required: true,
            },

            size: {
                type: String,
                required: true,
            },

            label: {
                type: String,
                required: true,
            },

            hasError: {
                type: Boolean,
                required: true,
            },
        },

        computed: {
            sizeClass: function () {
                return `input-${this.size}`
            }
        }
    });
</script>
