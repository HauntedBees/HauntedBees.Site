<template>
<div>
    <rimg :bsrc="require('src/assets/banner_sonicshock.png')" :isrc="require('src/assets/ico_sonicshock.png')"
            text="Stock Photography never looked so scary." />
    <p class="mx-1">
        <em>Sonic Shock</em> is a Free stock photo-based immersive sim made for the 
        <ax href="https://itch.io/jam/out-of-stock">Summer 2022 Out of Stock Jam</ax> hosted by Kuno Hoshiko.
        It's a cross between <em>System Shock</em> and <em>Sonic the Hedgehog</em>, in case that's an itch you've needed to be scratched.
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
    cws = [{ type: "knife-military", text: "This game features stock photo blood and violence." }]
    links = [{ url: "https://hauntedbees.itch.io/sonic-shock", text: "Click here to play on itch.io!" }]
    exts = [{ type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Out-of-Stock-Jam" }]
}
</script>