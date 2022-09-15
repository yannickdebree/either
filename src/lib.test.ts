import { either } from "./lib";

describe(either.name, () => {
    it('Must return left value', () => {
        const result = either((left, right) => {
            return left("Hello !");
        });
        expect(result.isLeft()).toBe(true);
        expect(result.isRight()).toBe(false);
        expect(result.left).toBe("Hello !");
        expect(result.right).toBeNull();
    });
    it('Must return right value', () => {
        const result = either((left, right) => {
            return right("Goodbye !");
        });
        expect(result.isLeft()).toBe(false);
        expect(result.isRight()).toBe(true);
        expect(result.left).toBeNull();
        expect(result.right).toBe("Goodbye !");
    });
})