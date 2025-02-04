type Link = { text: string, url: string, type?: string };
type Rating = { type: string, text: string, optional?: boolean };
type BasicPage = {
	title?: string;
	image?: string;
	miniOnly?: boolean;
	mobileImage?: string,
	screenshots?: string[],
	html: string,
	links?: Link[],
	ratings?: Rating[],
	externalLinks?: Link[],
	entries?: BasicPage[]
};
export type Page = { name: string, url: string, hideFromMenu?: boolean, content: BasicPage };
export const isPage = (p: any): p is BasicPage => p.image !== undefined;
export function GetInnerHTML(page: Page) {
	const formatHtml = (html: string) => (html || "").replace(/\[a=([^\]]*)\]/g, `<a href="$1" target="_blank" rel="external nofollow noopener noreferrer">`).replace(/\[\/a\]/g, `</a>`);
	const sanitize = (s: string) => s.replace(/"/g, "&quot;");
	const c = page.content;
	const html = c.title || c.miniOnly ? [`
			<div class="title">${c.title}</div>
			<div id="main-text">${formatHtml(c.html)}</div>
		`] : [`
			<img src="img/content-banners/${c.image}" alt="${page.name}" class="hide-mobile">
			<img src="img/content-icons/${c.image}" alt="${page.name}" class="hide-desktop">
			<div id="main-text">${formatHtml(c.html)}</div>`];
	if (c.links) {
		html.push(c.links.map(l => `<a class="ext-link" target="_blank" href="${l.url}">${l.text}</a>`).join("\n"));
	}
	if (c.screenshots) {
		html.push(`<div class="screenshots">${c.screenshots.map(s => `<img src="img/screenshots/${s}" alt="${page.name} screenshot" />`).join("\n")}</div>`);
	}
	if (c.entries) {
		html.push(`<div class="items">`);
		for (let i = 0; i < c.entries.length; i++) {
			const e = c.entries[i];
			if (i % 2 == 0) {
				html.push(`<div class="item-row">`);
			}
			html.push(`
				<div class="item">
					<div class="title">${e.title}</div>
					<div class="main-text">${formatHtml(e.html)}</div>
				`);
			if (e.links) {
				html.push(e.links.map(l => `<a class="ext-link" target="_blank" href="${l.url}">${l.text}</a>`).join("\n"));
			}
			html.push(`<div class="extra">`);
			if (e.ratings) {
				html.push(`<div class="ratings">`);
				html.push(e.ratings.map(r => `
						<img
							class="icon${r.optional ? " optional" : ""}"
							data-tippy-content="${sanitize(r.text)}"
							alt="${sanitize(r.text)}"
							src="img/icon/${r.type}.svg">`).join("\n"));
				html.push(`</div>`);
			}
			if (e.externalLinks) {
				html.push(`<div class="links">`);
				html.push(e.externalLinks.map(r => `
						<a target="_blank" href="${r.url}">
							<img
								class="icon"
								data-tippy-content="${sanitize(r.text)}"
								alt="${sanitize(r.text)}"
								src="img/icon/${r.type}.svg">
						</a>`).join("\n"));
				html.push(`</div></div>`);
			}
			html.push(`</div>`);
			if (i % 2 != 0 || i == (c.entries.length - 1)) {
				html.push(`</div>`);
			}
		}
		html.push(`</div></div>`);
	} else {
		html.push(`<div class="extra">`);
		if (c.ratings) {
			html.push(`<div class="ratings">`);
			html.push(c.ratings.map(r => `
					<img
						class="icon${r.optional ? " optional" : ""}"
						data-tippy-content="${sanitize(r.text)}"
						alt="${sanitize(r.text)}"
						src="img/icon/${r.type}.svg">`).join("\n"));
			html.push(`</div>`);
		}
		if (c.externalLinks) {
			html.push(`<div class="links">`);
			html.push(c.externalLinks.map(r => `
					<a target="_blank" href="${r.url}">
						<img
							class="icon"
							data-tippy-content="${sanitize(r.text)}"
							alt="${sanitize(r.text)}"
							src="img/icon/${r.type}.svg">
					</a>`).join("\n"));
			html.push(`</div>`);
		}
		html.push(`</div>`);
	}
	return html.join("\n");
}