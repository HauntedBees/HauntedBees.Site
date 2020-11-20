<template>
<div>
    <h2 class="text-center">Smaller Projects</h2>
    <p class="mx-1">
        This is the home to all of Haunted Bees' smaller game jam entries, very old games, joke games, and unfinished-but-playable games!
    </p>
    <v-row class="pt-1">
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Zenn Halsey Basesol '93</h3>
                <p class="mx-3">
                    <em>Zenn Halsey Basesol '93</em> is a game we stole from the future with our Reach Into The Future And Grab Video Games From It Machine. 
                    Or it's a browser game made for the <ax href="https://itch.io/jam/sports-2">April 2020 Sports 2 Jam</ax>
                    hosted by Jon Terp. It's like baseball in space with floaty hands and constellations.
                </p>
                <links :content="zenn_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="general_cws" />
                    <ext class="float-right" :altColor="true" :content="zenn_exts" />
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Public Domains: Gacha Game</h3>
                <p class="mx-3">A mobile RPG that is mostly just a parody of mobile gacha games; but instead of getting animé girls, you get public domain art.
                    Made for April Fools 2019.</p>
                <links :content="pd_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="pd_cws" />
                    <ext class="float-right" :altColor="true" :content="pd_exts" />
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="pt-1">
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Funeral Procession in Space</h3>
                <p class="mx-3">
                    A morbid space adventure made for the <ax href="https://itch.io/jam/pizzajam2019">March 2019 Pizza Jam</ax>. It's exactly what the name says it is.
                </p>
                <links :content="fp_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="fp_cws" />
                    <ext class="float-right" :altColor="true" :content="fp_exts" />
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Undercooked</h3>
                <p class="mx-3">A text-based co-op cooking game that runs in a Discord server. Made for <ax href="https://itch.io/jam/demake-jam">the August 2018 Demake Jam</ax>.</p>
                <links :content="uc_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="general_cws" />
                    <ext class="float-right" :altColor="true" :content="uc_exts" />
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="pt-1">
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Wheel of Slime</h3>
                <p class="mx-3">
                    Compete with your friends for fantastic prizes which are also slime. Another #classic 'randomly generated people and text-to-speech can be funny' game.
                    Made for <ax href="https://itch.io/jam/slime-studio-jam">the April 2018 Slime Jam</ax>.
                </p>
                <links :content="ws_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="ws_cws" />
                    <ext class="float-right" :altColor="true" :content="ws_exts" />
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Epic Retro Zombiecraft Royaleguelike - but also there's farming</h3>
                <p class="mx-3">A turn-based battle royale humans vs zombies crafting game, with farming. A humor joke for April Fool's Day 2018..</p>
                <links :content="erzr_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="erzr_cws" />
                    <ext class="float-right" :altColor="true" :content="erzr_exts" />
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="pt-1">
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Amicom</h3>
                <p class="mx-3">An unfinished virtual pet. Raise a baby animal. Play with it. You know how these work.</p>
                <links :content="ac_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="general_cws   " />
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card color="secondary" light shaped elevation="3">
                <h3 class="text-center">Whack-a-Craft</h3>
                <p class="mx-3">Whack-a-Mole with RPG elements. The kids love it because it's also a Minecraft fan-game. Fun for a few minutes, even
                if you're like me and haven't played Minecraft in 10 years. Unfortunately, it is a Flash game.</p>
                <links :content="wc_links" />
                <div class="px-3" style="position:absolute; bottom:5px; width:100%">
                    <cw class="float-left" :altColor="true" :content="general_cws" />
                </div>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class CropDrop extends Vue {
    general_cws = [{ type: "thumb-up", text: "This game is A-OK for 'the kidz' everywhere!" }]
    
    zenn_links = [{ url: "https://hauntedbees.itch.io/basesol", text: "Click here to play on itch.io!" }]
    zenn_exts = [
        { type: "youtube", text: "Check out the trailer on YouTube!", link: "https://www.youtube.com/watch?v=HZndmD8TyJo" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Sports-2-Jam" }
    ]
    pd_cws = [{ type: "cogs", text: "This game contains a couple innuendos." }]
    pd_links = [{ url: "https://hauntedbees.itch.io/public-domains", text: "Play it now in your browser or on Android!" }]
    pd_exts = [
        { type: "youtube", text: "Check out the trailer on YouTube!", link: "https://www.youtube.com/watch?v=HZndmD8TyJo" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Public-Domains" },
        { type: "lock", text: "Read the Privacy Policy!", internal: true, link: "/privacypolicy" }
    ]
    fp_cws = [{ type: "comment-off", text: "This game contains some explicit language." }]
    fp_links = [{ url: "https://hauntedbees.itch.io/funeral-procession-in-space", text: "Play it now in your browser!" }]
    fp_exts = [{ type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Funeral-Procession-in-Space" }]
    uc_links = [
        { url: "https://discord.gg/zXfrTJR", text: "Join the official Undercooked Discord Server!" },
        { url: "https://discordapp.com/oauth2/authorize?client_id=478730013286465547&scope=bot&permissions=0", text: "Invite the Official Undercooked Bot to your own server!" }
    ]
    uc_exts = [
        { type: "gamepad-variant", text: "Check it out on itch.io!", link: "https://hauntedbees.itch.io/undercooked" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Undercooked" }
    ]
    ws_cws = [{ type: "comment-off", text: "This game contains optional explicit language.", optional: true }]
    ws_links = [{ url: "https://www.hauntedbees.com/games/slime/index.html", text: "Play it now in your browser (Firefox recommended)!" }]
    ws_exts = [
        { type: "gamepad-variant", text: "Check it out on itch.io!", link: "https://hauntedbees.itch.io/wheel-of-slime" },
        { type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/Wheel-of-Slime" }
    ]
    erzr_cws = [{ type: "comment-off", text: "This game contains explicit language." }]
    erzr_links = [
        { url: "https://www.hauntedbees.com/erzcr/index.html", text: "See the fake crowdfunding page!" },
        { url: "https://www.hauntedbees.com/erzcr/epic.html", text: "Play it (if the server's up (which it isn't))!" }
    ]
    erzr_exts = [{ type: "github", text: "See the source code on GitHub!", link: "https://github.com/HauntedBees/EpicRetroZombiecraftRoyaleguelike" }]
    ac_links = [{ url: "https://www.hauntedbees.com/games/pet/pet.html", text: "Play it now in your browser (works best on mobile)!" }]
    wc_links = [{ url: "https://www.deviantart.com/psychopop/art/Whack-a-Craft-173782034", text: "Play it now on deviantArt!" }]
}
</script>