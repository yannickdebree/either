export class Either<T> {
  constructor(public readonly value: T) {}

  static unit<U>(value: U) {
    return new Either(value);
  }

  bind<B>(modifier: (value: T) => Either<B>) {
    return modifier(this.value);
  }
}
