const UsersPage = require("../pages/users.page")

describe("users page", () => {
    // it("load data", async () => {
    //     await UsersPage.loadData()
    // })
    it("delete data", async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    })
})