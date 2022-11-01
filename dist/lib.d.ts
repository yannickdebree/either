declare type EitherValue<L, R> = {
    left?: L;
    right?: R;
};
export declare class Either<L, R> {
    private value;
    private _left;
    private _right;
    private constructor();
    get left(): L;
    isLeft(): boolean;
    get right(): R;
    isRight(): boolean;
    bind<LN, RN>(modifier: (value: EitherValue<L, R>) => Either<LN, RN>): Either<LN, RN>;
    onLeft<LN, RN>(modifier: (value: L) => Either<LN, RN>): Either<LN, RN>;
    onRight<LN, RN>(modifier: (value: R) => Either<LN, RN>): Either<LN, RN>;
    static unit<LN, RN>(value: EitherValue<LN, RN>): Either<LN, RN>;
}
export declare function left<L>(left: L): Either<L, unknown>;
export declare function right<R>(right: R): Either<unknown, R>;
export declare function either<L, R>(runner: () => Either<L, unknown> | Either<unknown, R>): Either<L, R>;
export {};
