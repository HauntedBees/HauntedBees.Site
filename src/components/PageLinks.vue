<template>
<div class="text-center pb-8">
    <div v-for="link in content" :key="link.text">
        <a v-if="!link.internal" :href="link.url" target="_blank" rel="external nofollow noopener noreferrer">{{link.text}}</a>
        <router-link v-if="link.internal" :to="link.url">{{link.text}}</router-link>
    </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PageLinks extends Vue { @Prop() content?:PL[]; }
class PL { url = ""; text = ""; internal = false; }
</script>