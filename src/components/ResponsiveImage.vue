<template>
<div class="text-center mb-1">
    <img style="max-width:100%" :title="text" class="hidden-sm-and-down" :src="bsrc"/>
    <img style="max-width:100%" :title="text" class="hidden-md-and-up" :src="isrc"/>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ResponsiveImage extends Vue {
    @Prop() bsrc?:string;
    @Prop() isrc?:string;
    @Prop() text?:string;
}
</script>