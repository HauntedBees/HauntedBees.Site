<template>
<div>
    <rimg :bsrc="require('src/assets/banner_beegypt.png')" :isrc="require('src/assets/ico_beegypt.png')"
            text="Educational!" />
    <p class="mx-1">
        <em>Beegypt</em> or <em>Help! I'm an Ancient Egyptian Beekeeper!</em> is a Free edutainment browser game made for the 
        <ax href="https://itch.io/jam/ssjedutainment">August 2019 Summer Slow Jam</ax> hosted by PIGSquad.
        It is a video game that can technically teach you things about Ancient Egypt and/or Beekeeping.
    </p>
    <links :content="links" />
    <div class="pr-8" style="position:absolute; bottom:10px; width:100%">
        <cw class="float-left" :content="cws" />
        <ext class="float-right" :content="exts" />
    </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Beegypt extends Vue {
    cws = [{ type: "thumb-up", text: "This game is A-OK for \"the kidz\" everywhere!" }]
    links = [{ url: "https://hauntedbees.itch.io/beegypt", text: "Click here to play on itch.io!" }]
    exts = [{ type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/EdutainmentForBees" }]
}
</script>