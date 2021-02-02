const puppeteer = require("puppeteer");

const Message = 'Wenas noshes x10';
const ChatType = ''; // 'Group'
const ChatName = 'Leandro'; // 'Lolcito izi'
const RepeatNumber = 10;

const WspScrape = async (chatType, chatName, message, repeatNumber) => {
    console.log("Scrape started...");
    const URL = "https://web.whatsapp.com";
    const Browser = await puppeteer.launch({ headless: false, userDataDir: './data' });
    const Page = await Browser.newPage();
    await Page.goto(URL);
    const Content = chatType === 'Group' ? `div [title='${chatName}']` : `span [title='${chatName}']`;
    await Page.waitForSelector(Content);
    const Target = await Page.$(Content);
    await Target.click().then(() => {
        setTimeout(async () => {
            for(let i = 0; i < repeatNumber; i++){
                await Page.keyboard.type(message);
                await Page.keyboard.press("Enter");
            };
        }, 5000);
    });
};

WspScrape(ChatType, ChatName, Message, RepeatNumber).then(() => {
    console.log('Scrape finished.');
});