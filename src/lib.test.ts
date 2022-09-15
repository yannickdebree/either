import { either } from "./lib";

describe(either.name, () => {
    it('Must return left value', () => {
        const callback = jest.fn();
        const result = either((left, right) => {
            return left("Hello !");
        }).onLeft(callback);
        expect(result.isLeft()).toBe(true);
        expect(result.isRight()).toBe(false);
        expect(result.left).toBe("Hello !");
        expect(result.right).toBeNull();
        expect(callback).toBeCalledTimes(1);
    });
    it('Must return right value', () => {
        const callback = jest.fn();
        const result = either((left, right) => {
            return right("Goodbye !");
        }).onRight(callback);
        expect(result.isLeft()).toBe(false);
        expect(result.isRight()).toBe(true);
        expect(result.left).toBeNull();
        expect(result.right).toBe("Goodbye !");
        expect(callback).toBeCalledTimes(1);
    });
})