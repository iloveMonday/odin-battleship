import { hello, goodbye } from "./ship";
// const hello = require('./ship')

test ('hello', () => {
    expect(hello()).toBe("hello")
})