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

    let hour = 18;
    let minutes = 44;

    await driver.get('https://shopee.co.id/Torenda-Soulmate-Confession-Pendant-Baby-Pink-Kalung-Wanita-i.94326370.4708168474');

    const check = async() => {
        while (true) {
            if (new Date().getHours() == hour && new Date().getMinutes() >= minutes) {
                await driver.sleep(500)
                await driver.wait(until.elementLocated(By.xpath("(//button[@type='button'])[3]")));
                await driver.findElement(By.xpath("(//button[@type='button'])[3]")).click();
                await driver.sleep(3000)
                await driver.wait(until.elementLocated(By.xpath("//div[5]/button")));
                await driver.findElement(By.xpath("//div[5]/button")).click();
                break;
            }
            await driver.sleep(1000)
            console.log(colors.green('receiving data from https://shopee.co.id/'))
        }

    }

    try {


        check()
    } catch (er) {
        console.log(er)
        check()
    }
}

example()