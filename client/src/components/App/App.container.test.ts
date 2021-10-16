import * as App_container from "./App.container"
// @ponicode
describe("App_container.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            App_container.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
