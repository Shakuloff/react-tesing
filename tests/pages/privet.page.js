const { $ } = require('@wdio/globals')
const Page = require('./page');

class PrivetPage extends Page {
    get toggleBtn () {
        return $('#toggle');
    }

    get input () {
        return $('#search');
    }

    get title () {
        return $('#privet');
    }

    async toggleTitleWithInput (text) {
        await this.input.setValue(text);
        await this.toggleBtn.click();
    }

    open () {
        return super.open('/privet');
    }
}

module.exports = new PrivetPage();
