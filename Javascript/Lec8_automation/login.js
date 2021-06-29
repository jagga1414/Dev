const puppeteer = require("puppeteer");

//
//

let browserOpenPromise = puppeteer.launch({headless: false});
console.log(browserOpenPromise);

browserOpenPromise.then(function(browser){
    console.log("browser open");
    return browser.pages();
})
.then(function(pages){
    let tab = pages[0];
    return tab.goto("https://www.google.com");
})
.then(function(){
    console.log("on google homepage !!");
})
