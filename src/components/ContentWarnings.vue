<template>
<div>
    <v-tooltip v-for="c in content" :key="c.text" top color="accent">
        <template v-slot:activator="{ on, attrs }">
            <v-icon :color="altColor?'black':'primary'" dark v-bind="attrs" v-on="on" :style="{'opacity':c.optional?0.5:1}" >
                mdi-{{c.type}}
            </v-icon>
        </template>
        <span style="color:#000000">{{c.text}}</span>
    </v-tooltip>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ContentWarnings extends Vue { @Prop() content?:CW[]; @Prop() altColor?:boolean; }
class CW { type = ""; text = ""; optional = false; }
</script>