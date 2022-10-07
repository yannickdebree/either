import { bind, unit } from './Either';

describe('Monad', () => {
  const increment = (n: number) => unit(n + 1);
  it("First monad's law: left composition", () => {
    expect(bind(unit(1))(increment).value).toBe(increment(1).value);
  });

  it("Second monad's law: right composition", () => {
    const monad = unit(1);
    expect(bind(monad)(unit).value).toBe(monad.value);
  });

  it("Third monad's law", () => {
    const monad = unit(1);
    const decrement = (n: number) => unit(n - 1);
    expect(bind(bind(monad)(increment))(decrement).value).toBe(
      bind(monad)((n) => bind(increment(n))(decrement)).value
    );
  });
});
