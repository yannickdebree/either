import { Either } from './lib';

describe(Either.name, () => {
  function increment(n: number) {
    return Either.unit(n + 1);
  }

  function decrement(n: number) {
    return Either.unit(n - 1);
  }

  function compare<T>(eitherA: Either<T>) {
    return {
      to(eitherB: Either<T>) {
        expect(eitherA.left).toBe(eitherB.left);
      }
    }
  }

  describe('Monad\'s laws', () => {
    it("Left idendity", () => {
      const eitherA = Either.unit(1).bind(increment);
      const eitherB = increment(1);
      compare(eitherA).to(eitherB);
    });

    it("Right identity", () => {
      const eitherA = Either.unit(1);
      const eitherB = eitherA.bind(Either.unit);
      compare(eitherA).to(eitherB);
    });

    it("Associativity", () => {
      const eitherA = Either.unit(1);
      const eitherB = eitherA.bind(increment).bind(decrement);
      const eitherC = eitherA.bind(n => increment(n).bind(decrement));
      compare(eitherB).to(eitherC);
    });
  });

  // it('Must return left value', () => {
  //   const callback = jest.fn();
  //   const result = either((left, right) => {
  //     return left('Hello !');
  //   }).onLeft(callback);
  //   expect(result.isLeft()).toBe(true);
  //   expect(result.isRight()).toBe(false);
  //   expect(result.left).toBe('Hello !');
  //   expect(result.right).toBeNull();
  //   expect(callback).toBeCalledTimes(1);
  // });
  // it('Must return right value', () => {
  //   const callback = jest.fn();
  //   const result = either((left, right) => {
  //     return right('Goodbye !');
  //   }).onRight(callback);
  //   expect(result.isLeft()).toBe(false);
  //   expect(result.isRight()).toBe(true);
  //   expect(result.left).toBeNull();
  //   expect(result.right).toBe('Goodbye !');
  //   expect(callback).toBeCalledTimes(1);
  // });
});
