import { either } from '.';
import { Either } from './Either';

describe(Either.name, () => {
  it("First monads's law: left composition", () => {
    const eitherA = Either.unit('Hello world');
    const eitherB = eitherA.bind((value) => new Either(value));
    expect(eitherA.value).toBe(eitherB.value);
  });

  it("Second monads's law: right composition", () => {
    const eitherA = Either.unit('Hello world');
    const eitherB = eitherA.bind((value) => new Either(value));
    expect(eitherA.value).toBe(eitherB.value);
  });
});
