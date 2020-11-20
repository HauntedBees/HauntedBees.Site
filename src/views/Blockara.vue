<template>
<div>
    <a href="https://www.hauntedbees.com/Blockara/index.html">
        <rimg :bsrc="require('src/assets/banner_blockara.png')" :isrc="require('src/assets/ico_blockara.png')"
                text="Click here to go to the official website!" />
    </a>
    <p class="mx-1">
        Blockara is a head-to-head action puzzle game where you, one of the best alchemists in the world, must compete in the World Alchemy Tournament for a chance to have
        your wish granted by the September Dragon! Fight your way to the top in Story Mode or hone your skills in the other game modes!
        <a href="https://www.hauntedbees.com/Blockara/index.html">Check out the official site to learn more!</a>
    </p>
    <div class="pr-8" style="position:absolute; bottom:10px; width:100%">
        <cw class="float-left" :content="cws" />
        <ext class="float-right" :content="exts" />
    </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Blockara extends Vue {
    cws = [{ type: "thumb-up", text: "This game is A-OK for 'the kidz' everywhere!" }]
    exts = [
        { type: "youtube", text: "Check out the trailer on YouTube!", link: "https://www.youtube.com/watch?v=YTYN2mgwdAw" },
        { type: "steam", text: "Buy it on Steam!", link: "https://store.steampowered.com/app/652090/Blockara/" },
        { type: "gamepad-variant", text: "Buy it and download the demo on itch.io!", link: "https://hauntedbees.itch.io/blockara" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Blockara" }
    ]
}
</script>