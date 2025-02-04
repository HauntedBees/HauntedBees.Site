"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPage = void 0;
exports.GetInnerHTML = GetInnerHTML;
var isPage = function (p) { return p.image !== undefined; };
exports.isPage = isPage;
function GetInnerHTML(page) {
    var formatHtml = function (html) { return (html || "").replace(/\[a=([^\]]*)\]/g, "<a href=\"$1\" target=\"_blank\" rel=\"external nofollow noopener noreferrer\">").replace(/\[\/a\]/g, "</a>"); };
    var sanitize = function (s) { return s.replace(/"/g, "&quot;"); };
    var c = page.content;
    var html = c.title || c.miniOnly ? ["\n\t\t\t<div class=\"title\">".concat(c.title, "</div>\n\t\t\t<div id=\"main-text\">").concat(formatHtml(c.html), "</div>\n\t\t")] : ["\n\t\t\t<img src=\"img/content-banners/".concat(c.image, "\" alt=\"").concat(page.name, "\" class=\"hide-mobile\">\n\t\t\t<img src=\"img/content-icons/").concat(c.image, "\" alt=\"").concat(page.name, "\" class=\"hide-desktop\">\n\t\t\t<div id=\"main-text\">").concat(formatHtml(c.html), "</div>")];
    if (c.links) {
        html.push(c.links.map(function (l) { return "<a class=\"ext-link\" target=\"_blank\" href=\"".concat(l.url, "\">").concat(l.text, "</a>"); }).join("\n"));
    }
    if (c.screenshots) {
        html.push("<div class=\"screenshots\">".concat(c.screenshots.map(function (s) { return "<img src=\"img/screenshots/".concat(s, "\" alt=\"").concat(page.name, " screenshot\" />"); }).join("\n"), "</div>"));
    }
    if (c.entries) {
        html.push("<div class=\"items\">");
        for (var i = 0; i < c.entries.length; i++) {
            var e = c.entries[i];
            if (i % 2 == 0) {
                html.push("<div class=\"item-row\">");
            }
            html.push("\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"title\">".concat(e.title, "</div>\n\t\t\t\t\t<div class=\"main-text\">").concat(formatHtml(e.html), "</div>\n\t\t\t\t"));
            if (e.links) {
                html.push(e.links.map(function (l) { return "<a class=\"ext-link\" target=\"_blank\" href=\"".concat(l.url, "\">").concat(l.text, "</a>"); }).join("\n"));
            }
            html.push("<div class=\"extra\">");
            if (e.ratings) {
                html.push("<div class=\"ratings\">");
                html.push(e.ratings.map(function (r) { return "\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tclass=\"icon".concat(r.optional ? " optional" : "", "\"\n\t\t\t\t\t\t\tdata-tippy-content=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\t\talt=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\t\tsrc=\"img/icon/").concat(r.type, ".svg\">"); }).join("\n"));
                html.push("</div>");
            }
            if (e.externalLinks) {
                html.push("<div class=\"links\">");
                html.push(e.externalLinks.map(function (r) { return "\n\t\t\t\t\t\t<a target=\"_blank\" href=\"".concat(r.url, "\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tclass=\"icon\"\n\t\t\t\t\t\t\t\tdata-tippy-content=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\t\t\talt=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\t\t\tsrc=\"img/icon/").concat(r.type, ".svg\">\n\t\t\t\t\t\t</a>"); }).join("\n"));
                html.push("</div></div>");
            }
            html.push("</div>");
            if (i % 2 != 0 || i == (c.entries.length - 1)) {
                html.push("</div>");
            }
        }
        html.push("</div></div>");
    }
    else {
        html.push("<div class=\"extra\">");
        if (c.ratings) {
            html.push("<div class=\"ratings\">");
            html.push(c.ratings.map(function (r) { return "\n\t\t\t\t\t<img\n\t\t\t\t\t\tclass=\"icon".concat(r.optional ? " optional" : "", "\"\n\t\t\t\t\t\tdata-tippy-content=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\talt=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\tsrc=\"img/icon/").concat(r.type, ".svg\">"); }).join("\n"));
            html.push("</div>");
        }
        if (c.externalLinks) {
            html.push("<div class=\"links\">");
            html.push(c.externalLinks.map(function (r) { return "\n\t\t\t\t\t<a target=\"_blank\" href=\"".concat(r.url, "\">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tclass=\"icon\"\n\t\t\t\t\t\t\tdata-tippy-content=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\t\talt=\"").concat(sanitize(r.text), "\"\n\t\t\t\t\t\t\tsrc=\"img/icon/").concat(r.type, ".svg\">\n\t\t\t\t\t</a>"); }).join("\n"));
            html.push("</div>");
        }
        html.push("</div>");
    }
    return html.join("\n");
}
