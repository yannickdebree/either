"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.either = void 0;
function left(leftValue) {
    return {
        leftValue,
    };
}
function right(rightValue) {
    return {
        rightValue,
    };
}
class Either {
    left = null;
    right = null;
    constructor(runner) {
        const result = runner(left, right);
        if (result.hasOwnProperty('leftValue')) {
            this.left = result.leftValue;
            return;
        }
        this.right = result.rightValue;
    }
    isLeft() {
        return !!this.left;
    }
    onLeft(callback) {
        if (this.isLeft()) {
            callback(this.left);
        }
        return this;
    }
    isRight() {
        return !!this.right;
    }
    onRight(callback) {
        if (this.isRight()) {
            callback(this.right);
        }
        return this;
    }
}
function either(runner) {
    return new Either(runner);
}
exports.either = either;
