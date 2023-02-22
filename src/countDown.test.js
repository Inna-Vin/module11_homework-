import {countDown}  from "./countDown";

describe('test', () => {
	it('The function should return the join numbers', () => {
		const result = countDown(3)
		expect(result).toBe("321")
	})
})