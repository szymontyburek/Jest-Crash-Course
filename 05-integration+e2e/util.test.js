const { checkAndGenerate, generateText } = require("./util");
const puppeteer = require("puppeteer");

test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should output blank name and age", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("check text of newly created div", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/05-integration+e2e/index.html"); //must be running LiveServer for domain to work
  await page.click("input#name");
  await page.type("input#name", "Anna");
  await page.click("input#age");
  await page.type("input#age", "20");
  await page.click("button#btnAddUser");
  const text = await page.$eval(".user-item", (el) => el.textContent);
  expect(text).toBe("Anna (20 years old)");
}, 30000);
