<template lang="html">
	<div>
		<label :id="id">
			<div class="input-label">{{ label }}</div>
			<input :class="[ sizeClass, 'input' ]" :id="id" @focus="setInputActive()">

			<span class="input-error" v-if="hasError">
				Field is required
			</span>
		</label>
	</div>
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

        data(): object {
            return {
                isActive: false
            }
        },

        methods: {
            setInputActive(): any {
                this.isActive = true
            }
        },

        computed: {
            isInputActive: function () {
                return this.hasError || this.isActive
            },

            sizeClass: function () {
                return `input-${this.size}`
            }
        }
    });
</script>
