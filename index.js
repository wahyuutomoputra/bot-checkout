const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const fkill = require('fkill');
const colors = require('colors/safe');

async function example() {

    try {
        await fkill('firefox.exe');
    } catch (error) {
        console.log('no firefox found')
    }

    let options = new firefox.Options();
    options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');
    options.setProfile('C:/Users/wahyu/AppData/Roaming/Mozilla/Firefox/Profiles/gsiq15dk.default-release')
    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

    let hour = 6;
    let minutes = 31;

    try {
        await driver.get('https://shopee.co.id/Ponds-Age-Miracle-Facial-Foam-Sabun-Muka-Pembersih-Wajah-Youthful-Glow-100G-i.14318452.6417907186');

        while (true) {
            if (new Date().getHours() == hour && new Date().getMinutes() >= minutes) {
                //await driver.sleep(3000)
                await driver.findElement(By.xpath("(//button[@type='button'])[3]")).click();
                await driver.sleep(3000)
                await driver.wait(until.elementLocated(By.xpath("//div[5]/button")));
                await driver.findElement(By.xpath("//div[5]/button")).click();
                break;
            }
            console.log(colors.green('receiving data from https://shopee.co.id/'))
        }
        await driver.sleep(1000)
    } catch (er) {
        console.log(er)
        await driver.quit();
    }
}



example()
