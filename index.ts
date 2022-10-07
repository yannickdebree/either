// Used in Stackblitz

import { either, left, right } from "./src";

class Account {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) { }
}

function login(pseudo: string, password: string) {
  return either<Account, string[]>(() => {
    const user = {
      pseudo: "joe",
      password: "$ThisIsAStrongPassword",
      account: new Account("Joe", "Dalton")
    };

    const errors = new Array<string>();

    if (pseudo !== user.pseudo) {
      errors.push("wrong pseudo");
    }

    if (password !== user.password) {
      errors.push("wrong password");
    }

    if (!!errors.length) {
      return right(errors);
    }

    return left(user.account);
  });
}

function run(pseudo: string, password: string) {
  const { onLeft, onRight } = login(pseudo, password);
  onLeft(({ firstName, lastName }) => {
    console.log(`Connected as ${firstName} ${lastName} !`);
    return left(null);
  });
  onRight(errors => {
    console.log(`Errors during loging: ${errors.join(', ')}`);
    return left(null);
  })
}

function main() {
  run("bob", "wrongPassword");
  run("joe", "wrongPassword");
  run("joe", "$ThisIsAStrongPassword");
}

main();
