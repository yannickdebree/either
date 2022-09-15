declare type LeftDirection<V> = {
    leftValue: V;
};
declare type RightDirection<V> = {
    rightValue: V;
};
declare type EitherRunner<L, R> = (left: (value: L) => LeftDirection<L>, right: (value: R) => RightDirection<R>) => LeftDirection<L> | RightDirection<R>;
declare class Either<L, R> {
    readonly left: L | null;
    readonly right: R | null;
    constructor(runner: EitherRunner<L, R>);
    isLeft(): boolean;
    onLeft(callback: <V>(value: V) => R): this;
    isRight(): boolean;
    onRight(callback: <V>(value: V) => R): this;
}
export declare function either<L, R>(runner: EitherRunner<L, R>): Either<L, R>;
export {};
