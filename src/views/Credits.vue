<template>
<div>
    <h1 class="text-center">Legal Deets and Such</h1>
    <p class="mx-1">
        This site is © 2012-{{(new Date()).getFullYear()}} <a href="mailto:fench@hauntedbees.com">Sean Finch</a> and <a href="https://www.hauntedbees.com/">Haunted Bees Productions</a>.
        All source code is licensed under the <ax href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU AGPLv3 license</ax>. All images and text are my own (unless otherwise specified)
        and are licensed under the <ax href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license.</ax> The full site source containing all code, text, and images, is
        available <ax href="https://github.com/HauntedBees/HauntedBees.Site">on GitHub</ax>. 
    </p>
    <p class="mx-1">
        We use a self-hosted <ax href="https://awstats.sourceforge.io/">AWStats</ax> installation for webpage analytics. Your data will never leave Haunted Bees'
        servers or be shared with anybody else. We just want to know where people are coming from in the event this page gets popular or something, you know what
        I mean? Like, do we thank some blogger? A Facebook post? Reddit? Only one way to find out and that's analytics, baby! If you're really worried about your 
        data and such, check out <router-link to="/privacypolicy">our full privacy policy</router-link> for more information.
    </p>
    <h2 class="text-center">Credits</h2>
    <p class="mx-1">Additional code used in this project is licensed as follows:</p>
    <ul class="mx-1">
        <li>
            <ax href="https://github.com/zloirock/core-js#readme">core-js</ax> is licensed under the <ax href="https://github.com/zloirock/core-js/blob/master/LICENSE">MIT License.</ax>
        </li>
        <li>
            <ax href="https://vuejs.org/">Vue.js</ax> is licensed under the <ax href="https://github.com/vuejs/vue/blob/dev/LICENSE">MIT License.</ax>
        </li>
        <li>
            <ax href="https://vuetifyjs.com/en/">Vuetify</ax> is licensed under the <ax href="https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md">MIT License.</ax>
        </li>
    </ul>
</div>
</template>