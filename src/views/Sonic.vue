<template>
<div>
    <rimg :bsrc="require('src/assets/banner_sonic.png')" :isrc="require('src/assets/ico_sonic.png')"
            text="Gotta go fast!" />
    <p class="mx-1">
        <em>Sonic</em> is a database of corporate ownership and activity. Many corporations have child companies and brands, but the relationships between them 
        is not always obvious, and is sometimes intentionally hidden; after all, if you're trying to buy from smaller brands, would you buy The Little Guys Brand 
        microwavable spaghetti if you knew they were actually owned by Multibillion Dollar Spaghetti Corporation? If you're trying to buy eco-friendly products, 
        would you buy from Little Greenie's Enviro-Burgers if you knew they were owned by a corporation that has been sued fifty times for violating environmental 
        protection laws? <em>Sonic</em> exists to document which companies own which brands, and what sketchy behaviors those companies might be responsible for, all
        in an easy-to-navigate website. 
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
export default class Sonic extends Vue {
    cws = [
        { type: "knife-military", text: "Some data describes violent activities, usually hidden behind content warnings." },
        { type: "cogs", text: "Some data describes sexual assault and related activities, usually hidden behind content warnings." },
        { type: "cannabis", text: "Some data describes drug usage and companies that deal with drugs." }
    ]
    links = [{ url: "https://www.hauntedbees.com/sonic.html", text: "Start browsing now!" }]
    exts = [
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Sonic" },
        { type: "lock", text: "Read the Privacy Policy!", link: "https://www.hauntedbees.com/sonic.html#/info/privacy" }
    ]
}
</script>