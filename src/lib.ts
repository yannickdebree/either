type LeftDirection<V> = {
  leftValue: V;
};

type RightDirection<V> = {
  rightValue: V;
};

function left<V>(leftValue: V): LeftDirection<V> {
  return {
    leftValue,
  };
}

function right<V>(rightValue: V): RightDirection<V> {
  return {
    rightValue,
  };
}

type EitherRunner<L, R> = (
  left: (value: L) => LeftDirection<L>,
  right: (value: R) => RightDirection<R>
) => LeftDirection<L> | RightDirection<R>

class Either<L, R> {
  public readonly left: L | null = null;
  public readonly right: R | null = null;

  constructor(runner: EitherRunner<L, R>) {
    const result = runner(left, right);
    if (result.hasOwnProperty('leftValue')) {
      this.left = (result as LeftDirection<L>).leftValue;
      return;
    }
    this.right = (result as RightDirection<R>).rightValue;
  }

  isLeft() {
    return !!this.left;
  }

  isRight() {
    return !!this.right;
  }
}

export function either<L, R>(runner: EitherRunner<L, R>) {
  return new Either(runner)
}