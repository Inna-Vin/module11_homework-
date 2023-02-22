import {getPercents} from "./getPercents";

describe ('test', () => {
    it ('get percentage of the number', () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60)
    })
}) 
