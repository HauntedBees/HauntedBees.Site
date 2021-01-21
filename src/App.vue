<template>
  <v-app id="app">
    <v-app-bar class="heading-bar" app dark color="accent" :height="80">
      <div class="mx-auto">
        <router-link to="/">
          <img style="max-width:100%" :src="require('src/assets/logo.png')" />
        </router-link>
      </div>
    </v-app-bar>
    <v-main dark :class="'mx-auto mt-4 main-' + $vuetify.breakpoint.name">
      <v-row class="hidden-md-and-down">
        <v-col cols="4" sm="2" class="pa-1" v-for="link in externallinks" :key="link.text">
          <ExternalLinkButton :url="link.url" :text="link.text" />
        </v-col>
      </v-row>
      <v-row class="hidden-lg-and-up mx-2"> <!-- mobile dropdown -->
        <v-menu offset-y v-for="(section, idx) in internallinks" :key="idx">
          <template v-slot:activator="{ on, attrs }">
            <v-col>
              <v-btn v-bind="attrs" block color="secondary" tile v-on="on" style="color:#000000">{{section.name}}</v-btn>
            </v-col>
          </template>
          <v-list class="my-0 pb-0">
            <v-list-item class="internal-list-item" v-for="link in section.values" :key="link.name">
              <InternalLinkButton :url="link.url" :text="link.name" />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" class="px-1 hidden-md-and-down">
          <v-sheet class="pb-4 beebg">
            <v-container class="pa-0" v-for="(section, idx) in internallinks" :key="idx">
              <v-list class="my-0 pb-0">
                <v-list-item class="internal-list-header">
                  <h3 class="mx-auto">{{section.name}}</h3>
                </v-list-item>
                <v-list-item class="internal-list-item" v-for="link in section.values" :key="link.name">
                  <InternalLinkButton :url="link.url" :text="link.name" />
                </v-list-item>
              </v-list>
              <v-divider class="mt-4" v-if="(internallinks.length - 1) !== idx" />
            </v-container>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="10" class="px-1">
          <v-sheet class="beebg main-content">
            <router-view class="px-5 py-2" :key="$route.fullPath" />
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="hidden-lg-and-up px-3">
        <v-col cols="4" sm="2" class="pa-1" v-for="link in externallinks" :key="link.text">
          <ExternalLinkButton :url="link.url" :text="link.text" />
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
import ExternalLinkButton from 'src/components/ExternalLinkButton.vue';
import InternalLinkButton from 'src/components/InternalLinkButton.vue';
import 'src/assets/style.scss';
export default Vue.extend({
  name: 'App',
  components: { ExternalLinkButton, InternalLinkButton },
  data: () => ({
    internallinks: [
      {
        name: "Games",
        values: [
          { url: "/uprooted", name: "Uprooted" },
          { url: "/cropdrop", name: "Crop Drop" },
          { url: "/blockara", name: "Blockara" },
          { url: "/beegypt", name: "Beegypt" },
          { url: "/miscgames", name: "Small Projects" }
        ]
      }, {
        name: "Not-Games",
        values: [
          { url: "/abeut", name: "Abeut" },
          { url: "/databee", name: "DataBee" },
          { url: "/beequestions", name: "Bee Questions!" },
          { url: "/sonic", name: "Sonic" },
          { url: "/foodportal", name: "Food Portal" },
          { url: "/humansounds", name: "\"Human Sounds\"" },
          { url: "/savethebees", name: "Save the Bees" }
        ]
      }
    ],
    externallinks: [
      { url: "https://twitter.com/hauntedbees", text: "Twitter" },
      { url: "https://hauntedbees.itch.io/", text: "itch.io" },
      { url: "https://hauntedbees.tumblr.com/", text: "Tumblr" },
      { url: "https://www.instagram.com/hauntedbees/", text: "Instagram" },
      { url: "https://github.com/HauntedBees", text: "GitHub" },
      { url: "https://discord.gg/nEKhZqK", text: "Discord" }
    ]
  }),
});
</script>