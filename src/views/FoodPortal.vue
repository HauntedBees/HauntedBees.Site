<template>
<div>
    <rimg :bsrc="require('src/assets/banner_foodportal.png')" :isrc="require('src/assets/ico_foodportal.png')"
            text="Tasty!" />
    <p class="mx-1">
        For some reason I do a lot of food things now, I guess. <em>Areund the World</em> is a trip around the world, trying to cook food and listen to music
        from every country. <em>Spiceapedia</em> is intended to be a one-stop resource for information on spices and herbs and when to use them. <em>AltFood Reviews</em>
        is a collection of vegan and vegetarian food substitute reviews. All three are works in progress, so check 'em out from time to time!
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
export default class FoodPortal extends Vue {
    cws = [{ type: "comment-alert", text: "Some strong language is used in the commentary." }]
    links = [
        { url: "https://www.hauntedbees.com/food/world.html", internal: true, text: "Areund the World" },
        { url: "https://www.hauntedbees.com/food/spice.html", internal: true, text: "Spiceapedia" },
        { url: "https://www.hauntedbees.com/food/vegan.html", internal: true, text: "AltFood Reviews" }
    ]
    exts = [{ type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Food-Portal" }]
}
</script>