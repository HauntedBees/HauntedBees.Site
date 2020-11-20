<template><a :href="href" target="_blank" rel="external nofollow noopener noreferrer"><slot/></a></template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ExternalAnchor extends Vue { @Prop() href?:string; }
</script>