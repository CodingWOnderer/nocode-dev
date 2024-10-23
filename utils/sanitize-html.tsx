import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export const sanitizeHtml = (html: string) => {
    if (typeof window !== "undefined") {
        return DOMPurify.sanitize(html);
    } else {
        const { JSDOM } = require("jsdom");
        const window = new JSDOM("").window as unknown as Window;

        const domPurify = DOMPurify(window);
        return domPurify.sanitize(html);
    }
};
