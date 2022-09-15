function wrap<L, R>(cb: () => { leftValue: L } | { rightValue: R }) {
  const a = cb();
  if()
}

function doSomething(input: number) {
  return wrap(() => {
    if (input === 0) {
      return {
        leftValue: 'Error !',
      };
    }
    return {
      rightValue: true,
    };
  });
}

function runSomething(input: number) {
  const result = doSomething(input);
}

export function main() {
  runSomething(0);
  runSomething(1);
}
