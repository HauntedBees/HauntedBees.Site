import * as fs from 'fs';
import * as path from 'path';
import { GetInnerHTML, Page } from './parts/templateGen';
import { parse } from 'node-html-parser';
import * as uglify from 'uglify-js';
import { minify } from 'minify';
import ts from 'typescript';
import 'dotenv/config';

const file = (filename: string): string => fs.readFileSync(path.join(__dirname, filename), { encoding: "utf8" });
const exportPath = process.env.BUILD_OUTPUT_PATH || "/build";
const comment = `/**
 * @source: /bees.js
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2025 Sean Finch
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Affero
 * General Public License (GNU AGPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU AGPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU AGPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 */
`;

function GeneratePage(templateString: string, pages: Page[], currentPath: string) {
	const template = parse(templateString);
	const nav = template.querySelector("nav > ul");
	if (!nav) { return; }
	const html: string[] = [];
	let currentPage!: Page;
	pages.forEach(element => {
		if (element.url === currentPath) {
			currentPage = element;
			template.querySelector("title")!.innerHTML = currentPage.url === "index.html" ? "Haunted Bees Productions" : `${currentPage.name} - Haunted Bees Productions`;
		}
		if (element.hideFromMenu) { return; }
		html.push(`
			<li class="block small${currentPage === element ? " active" : ""}">
				<a href="${element.url}">
					${(element.content.image ? `<span class="mini-icon"><img src="img/content-minis/${element.content.image}" alt="${element.name} icon"></span>` : ``)}
					<span>${element.name}</span>
				</a>
			</li>`);
	});
	if (currentPage) {
		const main = template.querySelector("#main");
		if (main) {
			main.innerHTML = GetInnerHTML(currentPage);
		}
	}
	nav.innerHTML = html.join("\n");
	fs.writeFileSync(path.join(__dirname, exportPath, currentPath), template.toString());
}

function GenerateJavascriptFile() {
	const built = ts.createProgram({ rootNames: ["parts/templateGen.ts"], options: {} });
	built.emit();
	const json = file("parts/pages.json");
	const template = file("parts/templateGen.js");
	const main = file("parts/base.js");
	const str = [
		`const pages = ${json};`,
		template
			.replace(/exports\.[A-Za-z=.0\s]+;\n/g, "")
			.replace(/\(0, exports\.([A-Za-z]+)\)/g, "$1")
			.split("\n").
			slice(2)
			.join("\n"),
		main
	];
	const code = str.join("\n");
	fs.writeFileSync(path.join(__dirname, exportPath, "bees.js"), code);
	const minified = uglify.minify(code);
	fs.writeFileSync(path.join(__dirname, exportPath, "bees.min.js"), comment + minified.code);
}
function GenerateCSSFile() {
	const raw = file("parts/styles.css");
	const originalPath = path.join(__dirname, exportPath, "styles.css");
	fs.writeFileSync(originalPath, raw);
	minify(originalPath).then(minified => fs.writeFileSync(path.join(__dirname, exportPath, "styles.min.css"), minified));
}



const templateString = file("parts/base.html");
const pages: Page[] = JSON.parse(file("parts/pages.json"));
pages.forEach(page => {
	GeneratePage(templateString, pages, page.url);
});
GenerateJavascriptFile();
GenerateCSSFile();