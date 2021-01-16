<template>
<div>
    <rimg :bsrc="require('src/assets/banner_cropdrop.png')" :isrc="require('src/assets/ico_cropdrop.png')"
            text="Crop 'til you drop!" />
    <p class="mx-1">
        <em>Crop Drop</em> is a Free puzzle game for Android OS. There's also a web-app that may or may not work depending on your browser or operating system.
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
export default class CropDrop extends Vue {
    cws = [{ type: "thumb-up", text: "This game is A-OK for \"the kidz\" everywhere!" }]
    links = [
        { url: "https://www.hauntedbees.com/games/crop/index.html", internal: true, text: "Click here to play the web app version!" },
        { url: "https://github.com/HauntedBees/CropDrop/blob/master/README.md#compatibility", text: "Click here to see if your browser is supported!" }
    ]
    exts = [
        { type: "youtube", text: "Check out the trailer on YouTube!", link: "https://www.youtube.com/watch?v=J7jvaothebo" },
        { type: "google-play", text: "Download it on Google Play!", link: "https://play.google.com/store/apps/details?id=com.hauntedbees.crops" },
        { type: "gamepad-variant", text: "Download it on itch.io!", link: "https://hauntedbees.itch.io/crop-drop" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/CropDrop" },
        { type: "lock", text: "Read the Privacy Policy!", internal: true, link: "/privacypolicy" }
    ]
}
</script>