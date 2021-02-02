const puppeteer = require("puppeteer");

const message = "GG";

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    /* Persona */
    await page.waitForSelector("span [title='Leandro']");
    const target = await page.$("span [title='Leandro']");

    /* Grupo */
    //await page.waitForSelector("div [title='Team Lag Mental']");
    //const target = await page.$("div [title='Team Lag Mental']");

    await target.click();

    for(let i = 0; i < 5; i++){
        await page.keyboard.type(message);
        await page.keyboard.press("Enter");
    }
}

scrape("https://web.whatsapp.com");