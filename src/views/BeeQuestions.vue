<template>
<div>
    <rimg :bsrc="require('src/assets/banner_bq.png')" :isrc="require('src/assets/ico_bq.png')"
            text="Answer that!" />
    <p class="mx-1">
        <em>Bee Questions!</em> is an online A&amp;Q site - instead of asking questions and getting answers, you give the answer and then others must come
        up with questions for it! Join in and have some fun! Who knows, maybe you'll learn something!* 
    </p>
    <p>* You won't.</p>
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
export default class BeeQuestions extends Vue {
    cws = [
        { type: "account-multiple", text: "This game contains user-generated content." },
        { type: "comment-off", text: "This game may contain strong language." },
        { type: "knife-military", text: "This game may contain descriptions of violence." },
        { type: "cogs", text: "This game may contain posts of a sexual nature." },
        { type: "cannabis", text: "This game may contain drug references." }
    ]
    exts = [
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/BeeQuestions.Site" },
        { type: "lock", text: "Read the Privacy Policy!", link: "https://www.hauntedbees.com/bq/privacypolicy" }
    ]
}
</script>