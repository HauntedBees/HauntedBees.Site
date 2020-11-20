<template>
<div class="ext">
    <v-tooltip v-for="c in content" :key="c.text" top>
        <template v-slot:activator="{ on, attrs }">
            <a :href="c.link" target="_blank" rel="external nofollow noopener noreferrer">
                <v-icon :color="altColor?'black':'primary'" dark v-bind="attrs" v-on="on">
                    mdi-{{c.type}}
                </v-icon>
            </a>
        </template>
        <span>{{c.text}}</span>
    </v-tooltip>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ExternalIcons extends Vue { @Prop() content?:EI[]; @Prop() altColor?:boolean; }
class EI { type = ""; text = ""; link = ""; }
</script>