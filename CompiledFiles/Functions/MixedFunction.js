"use strict";
//Write a function that:
// Requires a title parameter.
// Optionally accepts a subtitle.
// Defaults the author parameter to "Anonymous".
// Accepts an arbitrary number of tags using rest parameters.
// The function should return a formatted string based on the input.
function createArticle(title, subtitle, author = "Sparsh Yadav", ...tags) {
    return `
        Title: ${title}
        Subtitle: ${subtitle || "None"}
        Author: ${author}
        Tags: ${tags.length ? tags.join(", ") : "No Tags"};
    `;
}
console.log(createArticle("Understanding TypeScript", undefined, "Sparsh", "TypeScript", "Programming"));
console.log(createArticle("Exploring JavaScript", "Advanced Topics"));
