// Used in Stackblitz

console.log('Hello world !');

async function main() {
  const a = await either(async () => {});
  const a1 = a.onLeft();
  const a11 = a1.onLeft();
  const a12 = a1.onRight();
}

main();
