"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.either = exports.right = exports.left = exports.Either = void 0;
class Either {
    value;
    _left = null;
    _right = null;
    constructor(value) {
        this.value = value;
        if (!!value.left) {
            this._left = value.left;
        }
        if (!!value.right) {
            this._right = value.right;
        }
    }
    get left() {
        return this._left;
    }
    isLeft() {
        return !!this.left;
    }
    get right() {
        return this._right;
    }
    isRight() {
        return !!this.right;
    }
    bind(modifier) {
        return modifier(this.value);
    }
    onLeft(modifier) {
        return modifier(this.left);
    }
    onRight(modifier) {
        return modifier(this.right);
    }
    static unit(value) {
        return new Either(value);
    }
}
exports.Either = Either;
function left(left) {
    return Either.unit({ left });
}
exports.left = left;
function right(right) {
    return Either.unit({ right });
}
exports.right = right;
function either(runner) {
    return runner();
}
exports.either = either;
