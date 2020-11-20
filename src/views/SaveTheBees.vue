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
        <strong>Disclaimer:</strong> Since this apparently needs to be said, <strong>please do not contact us to share your business's singular blog post about saving bees,
        we are not here to advertise for you or boost your site's SEO.</strong> In the past, several people have reached out to us and said this page was helpful to them, 
        and shared additional links to other helpful resources. While we appreciated those emails and still do, this page is first and foremost a helpful 
        resource for helping bees and educating people about them, so we will gladly promote any bee-related organizations, charities, and educational
        resources, but we will not link to any pages that belong to websites promoting for-profit products or services. Haunted Bees Productions has no relation to
        any of the listed sites above and has not been compensated for their presence here. If you are a representative of any of the organizations or websites listed 
        here and want to be removed from this list, contact us at <a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a>. Likewise, if you are <em>not</em> 
        a representative of any of the above organizations but think they actually do more harm than good, let us know so we can remove them! And, of course, if you are 
        a charitable organization whose primary goal is to help bees, contact us if you want to be listed here.
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