class Either<T> {
  constructor(public readonly value: T) {}
}

export function unit<U>(value: U) {
  return new Either(value);
}

export function bind<A>(monad: Either<A>) {
  return function <B>(modifier: (value: A) => Either<B>) {
    return modifier(monad.value);
  };
}
