import { Either } from './lib';

function doSomething(input: number) {
  console.log('Running for ', input, '...');
  const either = new Either((left, right) => {
    if (input === 0) {
      return right('This is an error !');
    }
    return left(input);
  });
  if (either.isRight()) {
    console.log(either.right);
    return;
  }
  console.log('The result is : ', either.right);
}

export function main() {
  doSomething(1);
  doSomething(0);
}
