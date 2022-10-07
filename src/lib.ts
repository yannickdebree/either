type EitherValue<L, R> = {
  left?: L;
  right?: R;
}

export class Either<L, R> {
  private _left: L | null = null;
  private _right: R | null = null;

  private constructor(private value: EitherValue<L, R>) {
    if (!!value.left) {
      this._left = value.left;
    }
    if (!!value.right) {
      this._right = value.right;
    }
  }

  get left() {
    return this._left;
  }

  isLeft() {
    return !!this.left
  }

  get right() {
    return this._right;
  }

  isRight() {
    return !!this.right;
  }

  bind<LN, RN>(modifier: (value: EitherValue<L, R>) => Either<LN, RN>) {
    return modifier(this.value);
  }

  onLeft<LN, RN>(modifier: (value: L) => Either<LN, RN>) {
    return modifier(this.left);
  }

  onRight<LN, RN>(modifier: (value: R) => Either<LN, RN>) {
    return modifier(this.right);
  }

  static unit<LN, RN>(value: EitherValue<LN, RN>) {
    return new Either(value);
  }
}

export function left<L>(left: L) {
  return Either.unit({ left });
}

export function right<R>(right: R) {
  return Either.unit({ right });
}

export function either<L, R>(runner: () => Either<L, any> | Either<any, R>): Either<L, R> {
  return runner() as Either<L, R>
}
