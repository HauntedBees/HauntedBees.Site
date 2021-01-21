<template>
<ax class="text-h6 text-md-h4 v-btn v-btn--tile v-btn--block elevation-2 v-size--x-large secondary external-link" :href="url">
    {{text}}
</ax>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ExternalLinkButton extends Vue {
    @Prop() url?:string;
    @Prop() text?:string;
}
</script>