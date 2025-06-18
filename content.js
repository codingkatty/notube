escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
    createHTML: (to_escape) => to_escape
})

document.querySelector("body").innerHTML = escapeHTMLPolicy.createHTML("")