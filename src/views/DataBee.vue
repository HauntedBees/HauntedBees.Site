<template>
<div>
    <rimg :bsrc="require('src/assets/banner_databee.png')" :isrc="require('src/assets/ico_databee.png')"
            text="Checklist app? Check!" />
    <p class="mx-1">
        <em>DataBee</em> is a checklist, note-taking, and recipe managing app. I made it because the checklist app I was using before kept bugging
        me to <em>register an account</em> and <em>sync my data with the cloud</em> and I had absolutely no intention of doing that, but there was
        no way to turn off the notifications. Thus, I shamelessly ripped that app off, but then feature-creep led to it becoming a bit more robust.
        Great if you want something slightly more advanced than whatever note-taking app is built into your phone, but not something super beefy.
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
export default class DataBee extends Vue {
    cws = [{ type: "thumb-up", text: "This app is A-OK for \"the kidz\" everywhere!" }]
    links = [
        { url: "https://www.hauntedbees.com/databee/app.html", text: "Use the Web App version!" },
        { url: "https://play.google.com/store/apps/details?id=com.hauntedbees.databee", text: "Get it on Google Play!" }
    ]
    exts = [
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/DataBee" },
        { type: "google-play", text: "Download it on Google Play!", link: "https://play.google.com/store/apps/details?id=com.hauntedbees.databee" },
        { type: "lock", text: "Read the Privacy Policy!", internal: true, link: "/privacypolicy" }
    ]
}
</script>