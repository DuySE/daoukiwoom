import { validateInput } from './validateInput'

describe('validate input', () => {
    it('blank', () => {
        expect(validateInput("")).toBeFalsy();
        expect(validateInput(" ")).toBeFalsy();
        expect(validateInput("-1")).toBeTruthy();
        expect(validateInput("aa")).toBeTruthy();
        expect(validateInput("__")).toBeTruthy();
        expect(validateInput("@")).toBeTruthy();
        expect(validateInput(null)).toBeFalsy();
    })
});
