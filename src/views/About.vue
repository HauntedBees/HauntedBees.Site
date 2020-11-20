<template>
<div>
  <h1 class="text-center">Haunted Bees Productions</h1>
  <v-row>
    <v-col cols="12" sm="6">
      <p class="mx-1">
        <em>Haunted Bees Productions</em> is a video game and media studio founded in 2012 by Sean Finch. Our first game,
        <em><router-link to="/blockara">Blockara</router-link></em>, was released on April 21, 2016, for computers and Wii U, getting a Steam release
        a year later. Since then, we've released a few mobile games and apps on Google Play such as <em><router-link to="/cropdrop">Crop Drop</router-link></em>,
        several smaller projects for game jams and holidays, and are hard at work on our next flagship game, <em><router-link to="/uprooted">Uprooted</router-link></em>.
      </p>
      <p class="mx-1">
        We've also developed several non-videos games; interactive web apps like <em><router-link to="/beequestions">Bee Questions</router-link></em> and mobile 
        apps like <em><router-link to="/databee">DataBee</router-link></em>. Outside of development, there is also an 
        <ax href="https://www.instagram.com/hauntedbees/">official Instagram account</ax> where art is shared (usually in the form of comics or photos of international foods).
      </p>
    </v-col>
    <v-col class="text-center" cols="12" sm="6">
      <img style="max-width:100%" alt="Screenshot of Blockara" title="Blockara was Haunted Bees' first video game release" :src="require('src/assets/about_1.png')"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="text-center" cols="12" sm="6" order="2" order-sm="1">
      <img style="max-width:100%" alt="Screenshot of Uprooted" title="Uprooted is coming soon to a computer near you!" :src="require('src/assets/about_2.png')"/>
    </v-col>
    <v-col cols="12" sm="6" order="1" order-sm="2">
      <p class="mx-1">
        Haunted Bees is a very small team, composed mostly of head developer Sean Finch, accessibility mistress Kelly Marine, and whoever else Sean can rope 
        into a given project. If you would like to help out, know someone who would, or just have any general questions or comments, feel free to contact us 
        <a href="mailto:fench@hauntedbees.com">via email</a> or through any of the social media platforms we're on.
      </p>
      <p class="mx-1">
        In addition to <router-link to="/savethebees">caring about bees</router-link>, Haunted Bees is very committed to user privacy, so when playing our  
        games or browsing our sites, you can be certain that your data isn't being sold to an advertising company. We also believe that sharing is caring, so 
        nearly everything we make is licensed with a Free or Open Content license, and can be found <ax href="https://github.com/HauntedBees/">on our GitHub</ax>.
      </p>
    </v-col>
  </v-row>
</div>
</template>