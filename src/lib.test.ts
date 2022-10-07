import { Either, left, right } from './lib';

describe(Either.name, () => {
  function increment(n: number) {
    return left(n + 1);
  }

  function decrement(n: number) {
    return left(n - 1);
  }

  function compare<L, R>(eitherA: Either<L, R>) {
    return {
      to(eitherB: Either<L, R>) {
        expect(eitherA.left).toBe(eitherB.left);
        expect(eitherA.right).toBe(eitherB.right);
      }
    }
  }

  describe('Left', () => {
    describe('Monad\'s laws', () => {
      it("Left idendity", () => {
        const eitherLeftA = left(0).onLeft(increment);
        const eitherLeftB = increment(0);
        compare(eitherLeftA).to(eitherLeftB);
      });

      it("Right identity", () => {
        const eitherA = left(0);
        const eitherB = eitherA.bind(Either.unit);
        compare(eitherA).to(eitherB);
      });

      it("Associativity", () => {
        const eitherLeftA = left(0);
        const eitherLeftB = eitherLeftA.onLeft(increment).onLeft(decrement);
        const eitherLeftC = eitherLeftA.onLeft(n => increment(n).onLeft(decrement));
        compare(eitherLeftB).to(eitherLeftC);
      });
    });

    it('Must return left value', () => {
      const callback = jest.fn();
      const eitherLeft = left('Hello !');
      expect(eitherLeft.isLeft()).toBe(true);
      expect(eitherLeft.isRight()).toBe(false);
      expect(eitherLeft.left).toBe('Hello !');
      expect(eitherLeft.right).toBeNull();

      eitherLeft.onLeft(callback);
      expect(callback).toBeCalledTimes(1);
    });
  });

  describe('Right', () => {
    describe('Monad\'s laws', () => {
      it("Left idendity", () => {
        const eitherRightA = right(0).onRight(increment);
        const eitherRightB = increment(0);
        compare(eitherRightA).to(eitherRightB);
      });

      it("Right identity", () => {
        const eitherA = left(0);
        const eitherB = eitherA.bind(Either.unit);
        compare(eitherA).to(eitherB);
      });

      it("Associativity", () => {
        const eitherRightA = left(0);
        const eitherRightB = eitherRightA.onLeft(increment).onLeft(decrement);
        const eitherRightC = eitherRightA.onLeft(n => increment(n).onLeft(decrement));
        compare(eitherRightB).to(eitherRightC);
      });

      it('Must return right value', () => {
        const callback = jest.fn();
        const eitherRight = right('Goodbye !');
        expect(eitherRight.isLeft()).toBe(false);
        expect(eitherRight.isRight()).toBe(true);
        expect(eitherRight.left).toBeNull();
        expect(eitherRight.right).toBe('Goodbye !');

        eitherRight.onRight(callback);
        expect(callback).toBeCalledTimes(1);
      });
    });
  });
});
