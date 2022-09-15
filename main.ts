class Either<L = null, R = null> {
  constructor(public readonly left: L, public readonly right: R) {}

  isLeft() {
    return !!this.left;
  }

  isRight() {
    return !this.isLeft();
  }
}

// function left<L>(value: NonNullable<L>) {
//   return new Either<L, null>(value, null);
// }

// function right<R>(value: NonNullable<R>) {
//   return new Either<null, R>(null, value);
// }

type LeftOrRight<L, R> = {
  left: boolean;
  value: L | R;
};

function either<L, R>(callback: () => LeftOrRight<L, R>): Either<L, R> {
  const { left, value } = callback();
  if (left) {
    return new Either(value as L, null);
  }
  return new Either(null, value as R);
}

function left<L>(value: NonNullable<L>) {
  return {
    left: true,
    value,
  };
}

function right<R>(value: NonNullable<R>) {
  return {
    left: false,
    value,
  };
}

////////

function doSomething(input: number) {
  return either<boolean, string>(() => {
    if (input === 0) {
      return right('Error !!!!');
    }
    return left(true);
  });
}

function runSomething(input: number) {
  const eitherResult = doSomething(input);
  const { left: result, right: errorMessage } = eitherResult;
  if (eitherResult.isRight()) {
    console.log(errorMessage);
    return;
  }
  console.log('The result is : ', result);
}

export function main() {
  runSomething(1);
  runSomething(0);
}
