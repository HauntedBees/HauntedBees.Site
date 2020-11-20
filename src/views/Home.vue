<template>
<div>
  <rimg :bsrc="require('src/assets/banner_main.png')" :isrc="require('src/assets/ico_main.png')"
        text="Welcome to Haunted Bees Productions - Home of the best Vegetation-in-Square Games!" />
  <p class="mx-1">
    Welcome to Haunted Bees Productions, home of wonderful games like <router-link to="/blockara">Blockara</router-link>, everyone's favorite head-to-head action-puzzler, 
    and <router-link to="/cropdrop">Crop Drop</router-link>, the best farming-themed mobile puzzle game since 'Vegetable Tetris!' There's plenty of other Haunted Bees content,
    too, so click around! You might find something you like! If you want to know more, you can contact us at <a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a>!
    Enjoy your stay!
  </p>
  <div class="text-right">
    <img :src="require('src/assets/woowoo.jpg')" title="Woo Woo! Award WINNER for having A VERY COOL WEB SITE!" />
  </div>
</div>
</template>