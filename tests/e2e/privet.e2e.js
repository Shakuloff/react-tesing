const { expect } = require('@wdio/globals')
const PrivetPage = require('../pages/privet.page')

describe('My Privet page', () => {
    it('should toggle', async () => {
        await PrivetPage.open()
        await PrivetPage.toggleTitleWithInput("привет")
        await expect(PrivetPage.title).toBeExisting()
        await PrivetPage.toggleBtn.click()
        await expect(PrivetPage.title).not.toBeExisting()
    })
    it('should not toggle', async () => {
        await PrivetPage.open()
        await PrivetPage.toggleTitleWithInput("пока")
        await expect(PrivetPage.title).not.toBeExisting()
    })
})

