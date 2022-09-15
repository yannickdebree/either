import { either, left, right } from './lib';

function doSomething(input: number) {
  return either(() => {
    if (input === 0) {
      return right('This is an error !');
    }
    return left(input);
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
