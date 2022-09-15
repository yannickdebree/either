class EitherResult<L = null, R = null> {
  constructor(public readonly left: L, public readonly right: R) {}

  isLeft() {
    return !!this.left;
  }

  isRight() {
    return !!this.right;
  }
}

type LeftDirection<V> = {
  leftValue: V;
};

type RightDirection<V> = {
  rightValue: V;
};

export function either<L, R>(
  runner: () => LeftDirection<L> | RightDirection<R>
): EitherResult<L, R> {
  const result = runner();
  if (result.hasOwnProperty('leftValue')) {
    return new EitherResult((result as LeftDirection<L>).leftValue, null);
  }
  return new EitherResult(null, (result as RightDirection<R>).rightValue);
}

export function left<V>(leftValue: V): LeftDirection<V> {
  return {
    leftValue,
  };
}

export function right<V>(rightValue: V): RightDirection<V> {
  return {
    rightValue,
  };
}
