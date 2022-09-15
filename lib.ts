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

export class Either<L, R> {
  public readonly left: L | null;
  public readonly right: R | null;

  constructor(
    runner: (
      left: (value: L) => LeftDirection<L>,
      right: (value: R) => RightDirection<R>
    ) => LeftDirection<L> | RightDirection<R>
  ) {
    const result = runner(left, right);
    if (result.hasOwnProperty('leftValue')) {
      this.left = (result as LeftDirection<L>).leftValue;
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
