import counterReducer, { decrement, increment } from "./counterReducer"

describe.skip("Тест redux reducer", () => {
    test("инкремент", async () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })
    test("декремент", async () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})

    })
    test("пустое значение", async () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
    })
})
