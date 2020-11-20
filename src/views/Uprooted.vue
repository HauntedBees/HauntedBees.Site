<template>
<div>
    <rimg :bsrc="require('src/assets/banner_uprooted.png')" :isrc="require('src/assets/ico_uprooted.png')"
            text="Vegetables are a valuable weapon." />
    <p class="mx-1">
        Blockara is a head-to-head action puzzle game where you, one of the best alchemists in the world, must compete in the World Alchemy Tournament for a chance to have
        your wish granted by the September Dragon! Fight your way to the top in Story Mode or hone your skills in the other game modes!
        <a href="https://www.hauntedbees.com/Blockara/index.html">Check out the official site to learn more!</a>
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
export default class Uprooted extends Vue {
    cws = [
        { type: "knife-military", text: "This game contains some pixelated blood." },
        { type: "comment-off", text: "This game contains strong language that can be disabled at any time.", optional: true },
        { type: "cogs", text: "This game contains some innuendo that can be disabled at any time.", optional: true },
        { type: "cannabis", text: "This game contains some drug references that can be disabled at any time.", optional: true }
    ]
    links = [
        { url: "https://twitter.com/hauntedbees", text: "Follow us on Twitter for updates!" },
        { url: "https://hauntedbees.tumblr.com/", text: "Follow us on Tumblr for updates!" },
        { url: "https://discord.gg/nEKhZqK", text: "Join the official Haunted Bees Discord server!" }
    ]
    exts = [
        { type: "google", text: "Download it on Google Play!", link: "https://play.google.com/store/apps/details?id=com.hauntedbees.publicdomains" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Uprooted" }
    ]
}
</script>