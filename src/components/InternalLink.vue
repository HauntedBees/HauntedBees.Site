<template>
<router-link
    :class="'text-h6 v-btn v-btn--tile v-btn--block elevation-2 v-size--small internal-link ' + ($route.path === url ? 'primary' : 'secondary')"
    :to="url">
    {{text}}
</router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class InternalLink extends Vue {
    @Prop() url?:string;
    @Prop() text?:string;
}
</script>