<template>
  <v-app>
    <v-app-bar class="heading-bar" app dark color="accent" :height="80">
      <div class="mx-auto">
        <img :src="require('src/assets/logo.png')" />
      </div>
    </v-app-bar>
    <v-main dark :class="'mx-auto main-' + $vuetify.breakpoint.name">
      <v-row class="hidden-md-and-down">
        <v-col cols="4" sm="2" class="pa-1" v-for="link in externallinks" :key="link.text">
          <ExternalLink :url="link.url" :text="link.text" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="px-1">
          <v-sheet class="pb-4 beebg">
            <v-container class="pa-0" v-for="(section, idx) in internallinks" :key="idx">
              <v-list class="my-0 pb-0">
                <v-list-item class="internal-list-header">
                  <h3 class="mx-auto">{{section.name}}</h3>
                </v-list-item>
                <v-list-item class="internal-list-item" v-for="link in section.values" :key="link.name">
                  <InternalLink :url="link.url" :text="link.name" />
                </v-list-item>
              </v-list>
              <v-divider class="mt-4" v-if="(internallinks.length - 1) !== idx" />
            </v-container>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="10" class="px-1">
          <v-sheet class="beebg main-content">
            <router-view class="px-5 py-2" :key="$route.fullPath" /><!--
            <span :class="'mx-4 test-' + $vuetify.breakpoint.name">goku</span>-->
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="hidden-lg-and-up px-3">
        <v-col cols="4" sm="2" class="pa-1" v-for="link in externallinks" :key="link.text">
          <ExternalLink :url="link.url" :text="link.text" />
        </v-col>
      </v-row>
    </v-main>
		<v-footer class="heading-bar">
			&copy; 2012-{{(new Date()).getFullYear()}} Haunted Bees Productions
		</v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import ExternalLink from 'src/components/ExternalLink.vue';
import InternalLink from 'src/components/InternalLink.vue';
import 'src/assets/style.scss';
export default Vue.extend({
  name: 'App',
  components: { ExternalLink, InternalLink },
  data: () => ({
    internallinks: [
      {
        name: "Games",
        values: [
          { url: "/uprooted", name: "Uprooted" },
          { url: "/cropdrop", name: "Crop Drop" },
          { url: "/blockara", name: "Blockara" },
          { url: "/beegypt", name: "Beegypt" },
          { url: "/miscgames", name: "Smaller Projects" }
        ]
      }, {
        name: "Not-Games",
        values: [
          { url: "/", name: "Abeut" },
          { url: "/databee", name: "DataBee" },
          { url: "/beequestions", name: "Bee Questions!" },
          { url: "/sonic", name: "Sonic" },
          { url: "/foodportal", name: "Food Portal" },
          { url: "/savethebees", name: "Save the Bees" }
        ]
      }
    ],
    externallinks: [
      { url: "https://twitter.com/hauntedbees", text: "Twitter" },
      { url: "https://hauntedbees.itch.io/", text: "itch.io" },
      { url: "https://hauntedbees.tumblr.com/", text: "Tumblr" },
      { url: "https://www.facebook.com/HauntedBees", text: "Facebook" },
      { url: "https://github.com/HauntedBees", text: "GitHub" },
      { url: "https://discord.gg/nEKhZqK", text: "Discord" }
    ]
  }),
});
</script>