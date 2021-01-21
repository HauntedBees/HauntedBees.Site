<template>
<div>
    <h1 class="text-center">"Human Sounds"</h1>
    <p class="mx-1">
        <em>"Human Sounds"</em> is a radio show airing on KCSB-FM 91.9 in Santa Barbara and online at <ax href="https://www.kcsb.org/">https://www.kcsb.org/</ax>
        every Thursday from 7pm to 8pm Pacific Time. It features music from around the world with a different theme every week. It is presented by "what humans call a DJ"
        because what good is a radio show if you can't have fun with it and make up an inhuman persona to talk about cool songs, right?
    </p>
    <links :content="links" />
    <div class="pr-8" style="position:absolute; bottom:10px; width:100%">
        <cw class="float-left" :content="cws" />
    </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class HumanSounds extends Vue {
    cws = [{ type: "thumb-up", text: "This radio show is A-OK for \"the kidz\" everywhere!" }]
    links = [
        { url: "https://www.hauntedbees.com/hs/index.html", text: "Check out the website!" },
        { url: "https://spinitron.com/KCSB/dj/152542/What-Humans-Call-A-DJ", text: "Check out the Spinitron DJ Profile!" }
    ]
}
</script>