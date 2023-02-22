import {matchStr} from "./match-str"

describe ('test', () => {
    it ('string identity true', ()=> {
        expect(matchStr('hEllO', 'HELLo')).toBe(true);
    }),
    it ('string identity false', () => {
        expect (matchStr('hello', 'bye')).toBe(false)
    })
})