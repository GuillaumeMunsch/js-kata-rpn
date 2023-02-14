// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import evaluateBinaryOperation, { BinaryOperationInput } from "./evaluateBinaryOperation";
import evaluateUnaryOperation, { UnaryOperationInput } from "./evaluateUnaryOperation";

expect.extend(matchers);

describe("Binary Operation", () => {
  it("Should execute an operation 1 2 +", () => {
    // GIVEN
    const operation: BinaryOperationInput = {
      operands: [1, 2],
      operator: "+",
    };

    // WHEN
    const operationResult = evaluateBinaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(3);
  });

  it("Should execute an operation 3 5 +", () => {
    // GIVEN
    const operation: BinaryOperationInput = {
      operands: [3, 5],
      operator: "+",
    };

    // WHEN
    const operationResult = evaluateBinaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(8);
  });

  it("Should execute an operation 5 3 -", () => {
    // GIVEN
    const operation: BinaryOperationInput = {
      operands: [5, 3],
      operator: "-",
    };

    // WHEN
    const operationResult = evaluateBinaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(2);
  });

  it("Should execute an operation 10 3 -", () => {
    // GIVEN
    const operation: BinaryOperationInput = {
      operands: [10, 3],
      operator: "-",
    };

    // WHEN
    const operationResult = evaluateBinaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(7);
  });

  it("Should execute an operation 2 3 *", () => {
    // GIVEN
    const operation: BinaryOperationInput = {
      operands: [2, 3],
      operator: "*",
    };

    // WHEN
    const operationResult = evaluateBinaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(6);
  });

  it("Should execute an operation 10 2 /", () => {
    // GIVEN
    const operation: BinaryOperationInput = {
      operands: [10, 2],
      operator: "/",
    };

    // WHEN
    const operationResult = evaluateBinaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(5);
  });
});

describe("Unary operation", () => {
  it("Should execute an operation 2 N", () => {
    // GIVEN
    const operation: UnaryOperationInput = {
      operand: 2,
      operator: "N",
    };

    // WHEN
    const operationResult = evaluateUnaryOperation(operation);

    // THEN
    expect(operationResult).toEqual(-2);
  });
});