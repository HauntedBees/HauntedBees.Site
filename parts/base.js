function onClick(e) {
	e.preventDefault();
	const path = e.currentTarget.attributes["href"].value;
	NavigateTo(path);
	history.pushState({}, "", path);
}
function NavigateTo(path) {
	const page = pages.find(p => p.url === path) || pages.find(p => p.url === "404.html");
	document.querySelector("title").innerHTML = page.url === "index.html" ? "Haunted Bees Productions" : `${page.name} - Haunted Bees Productions`;
	const currentSelection = document.querySelector("nav .active");
	if (currentSelection) { currentSelection.classList.remove("active"); }
	const buttons = document.querySelectorAll("nav li.block");
	for (let i = 0; i < buttons.length; i++) {
		const pageUrl = buttons[i].querySelector("a").attributes["href"].value;
		if (pageUrl === path) {
			buttons[i].classList.add("active");
			break;
		}
	}
	document.getElementById("main").innerHTML = GetInnerHTML(page);
	tippy("[data-tippy-content]");
	setTimeout(() => window.scrollTo(0, 0), 1);
}

document.querySelectorAll("nav li a").forEach(e => {
	e.addEventListener("click", onClick);
});
document.querySelector("header a").addEventListener("click", onClick);
document.querySelector("#currentYear").innerHTML = (new Date()).getFullYear();
document.addEventListener("DOMContentLoaded", () => tippy("[data-tippy-content]"));
window.addEventListener("popstate", _ => {
	const path = location.href.replace(/.*\/([a-z.]*)/g, "$1") || "index.html";
	NavigateTo(path);
});