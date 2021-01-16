<template>
<div>
    <h1 class="text-center">404 Error - That's Not a Page Here!</h1>
    <p class="mx-1 mb-5">
        Hey sorry, that URL you have up there doesn't link to a page we have! Maybe it used to at some point, but we did a website redesign not so long ago (or a 
        very long time ago, depending on when you're reading this) so that content may be somewhere else now. Browse areund some of the menus here or something!
        Even if you can't find what you were looking for, you'll probably find <em>something</em> you like!
    </p>
    <p class="mx-1 mb-5">
        Perhaps I can interest you in... 
        <a v-if="!randomThing.internal" :href="randomThing.url">{{randomThing.desc}}</a><router-link v-if="randomThing.internal" :to="randomThing.url">{{randomThing.desc}}</router-link>?
        Or maybe 
        <a v-if="!randomThing2.internal" :href="randomThing2.url">{{randomThing2.desc}}</a><router-link v-if="randomThing2.internal" :to="randomThing2.url">{{randomThing2.desc}}</router-link>?
        If not, you can always <router-link to="/savethebees">save the bees</router-link>! If none of that works you might <em>actually</em> be on the wrong site, so, uh,
        I'm not sure how you got here. Sorry.
    </p>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Sonic extends Vue {
    randomThings = [
        { desc: "a head-to-head action puzzle video game", url: "/blockara", internal: true },
        { desc: "an RPG about throwing vegetables at tech billionaires", url: "/uprooted", internal: true },
        { desc: "a tile-matching farm puzzler", url: "/cropdrop", internal: true },
        { desc: "an educational game about keeping bees in ancient Egypt", url: "/beegypt", internal: true },
        { desc: "a database of companies and their often-hard-to-identify owners, along with their sketchy business practices", url: "https://www.hauntedbees.com/sonic.html", internal: false },
        { desc: "a digital tour of music and food from around the world", url: "https://www.hauntedbees.com/food/world", internal: false },
        { desc: "a spice and herb database with information about what spices go best with each other", url: "https://www.hauntedbees.com/food/spice", internal: false },
        { desc: "a radio show about world music", url: "/humansounds", internal: true },
        { desc: "a Question & Answer website... but in reverse", url: "https://www.hauntedbees.com/bq/index.html", internal: false },
        { desc: "a bunch of small games made for Game Jams and such", url: "/miscgames", internal: true }
    ];
    randomThing = this.randomThings[0];
    randomThing2 = this.randomThings[1];
    created() {
        this.randomThing = this.randomThings.splice(Math.floor(Math.random() * this.randomThings.length), 1)[0];
        this.randomThing2 = this.randomThings.splice(Math.floor(Math.random() * this.randomThings.length), 1)[0];
    }
}
</script>