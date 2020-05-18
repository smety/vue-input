<template lang="html">
	<div class="input-group">
		<label :id="id" :class="[isInputActive ? 'active' : '', errorMessage ? 'error' : '', labelClass, 'label']">
			{{ label }}
		</label>
		<input :class="[ inputClass, 'input' ]" :id="id" @focus="setInputActive()">

		<span class="input-error" v-if="errorMessage">
			{{ errorMessage }}
		</span>

		<span :class="[requireClass, 'field-not-require']" v-if="isRequired">
				nepovinné
			</span>
	</div>
</template>


<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: 'VueInput',
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

            errorMessage: {
                type: String,
                required: false,
            },

            isRequired: {
                type: Boolean,
                required: false,
            },

            theme: {
                type: String,
                required: false,
                default: 'light'
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
                return this.errorMessage || this.isActive
            },

            inputClass: function () {
                return `input-${this.size} input-theme-${this.theme}`
            },

            labelClass: function () {
                return `label-${this.size} label-theme-${this.theme}`
            },

            requireClass: function () {
                return `field-not-require-${this.size} field-not-require-theme-${this.theme}`
            }
        }
    });
</script>
