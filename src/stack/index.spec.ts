// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import Stack from ".";

expect.extend(matchers);

describe("Stack", () => {
  it("Should get elements from stack", () => {
    // GIVEN
    const stack = new Stack<number>([3]);

    // WHEN
    const elements = stack.get();

    // THEN
    expect(elements).toEqual([3]);
  });

  it("Should get elements from stack", () => {
    // GIVEN
    const stack = new Stack<string>(["+", "-"]);

    // WHEN
    const elements = stack.get();

    // THEN
    expect(elements).toEqual(["+", "-"]);
  });

  it("Should push element into stack", () => {
    // GIVEN
    const stack = new Stack<number>([3]);

    // WHEN
    const newStack = stack.push(5);
    const elements = newStack.get();

    // THEN
    expect(elements).toEqual([3, 5]);
  });

  it("Should get last element from stack, and rest stack", () => {
    // GIVEN
    const initialStack = new Stack<number>([3, 5]);

    // WHEN
    const { stack, elements } = initialStack.pop();
    const stackElements = stack.get();
    const initialElements = initialStack.get();

    // THEN
    expect(stackElements).toEqual([3]);
    expect(elements).toEqual([5]);
    expect(initialElements).toEqual([3, 5]);
  });

  it("Should get last 3 element from stack, and rest stack", () => {
    // GIVEN
    const initialStack = new Stack<number>([0, 1, 3, 5]);

    // WHEN
    const { stack, elements } = initialStack.pop(3);
    const stackElements = stack.get();
    const initialElements = initialStack.get();

    // THEN
    expect(elements).toEqual([1, 3, 5]);
    expect(stackElements).toEqual([0]);
    expect(initialElements).toEqual([0, 1, 3, 5]);
  });
  
});
