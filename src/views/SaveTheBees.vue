<template>
<div>
    <h1 class="text-center">Save the Bees</h1>
    <p class="mx-1 mb-5">
        We here at Haunted Bees like bees, but as fun as spooky ghost bees are, we'd rather have them alive! Bees are in a bit of a crisis right now,
        and we need to do all we can to save the bees! Below are some links to donation pages for various organizations dedicated to saving the bees, 
        as well as some general educational resources.
    </p>
    <links :content="links" />
    <p class="mx-1">
        <strong>Disclaimer:</strong> Since this apparently needs to be said, <strong>please do not contact us to share your business's
        singular blog post about saving bees, we are not here to advertise for you or boost your site's SEO.</strong> While we will
        gladly promote any bee-related organizations, charities, and educational resources, we will NOT link to websites promoting
        for-profit products or services. Haunted Bees Productions has no relation to any of these sites and has not been compensated
        for their presence here. If you have concerns about these listings, contact us at <a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a>.
    </p>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class SaveTheBees extends Vue {
    links = [
        { url: "https://www.xerces.org/donate", text: "Donate to Xerxes Society for Invertebrate Conservation" },
        { url: "https://www.pollinator.org/donate", text: "Donate to Pollinator Partnership" },
        { url: "https://thebeeconservancy.org/donate/", text: "Donate to The Bee Conservancy" },
        { url: "https://preservationofhoneybees.org/about-us", text: "Foundation for the Preservation of Honey Bees" },
        { url: "https://www.honeybeesanctuary.org/", text: "Save the Honeybee Foundation" },
        { url: "https://savebees.org/how-to-help-revive-a-cold-or-wet-bee/", text: "Save Bees - How to Help Revive a Cold or Wet Bee" },
        { url: "https://www.greenpeace.org/usa/sustainable-agriculture/save-the-bees/", text: "Greenpeace - Save the Bees" }
    ]
}
</script>