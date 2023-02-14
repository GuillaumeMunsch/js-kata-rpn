import { BinaryOperator, Operand } from ".";
import { createError, createSuccess, Result } from "../utils/result";

export type BinaryOperationInput = {
  operands: Operand[];
  operator: BinaryOperator;
};

const evaluateBinaryOperation = ({ operands, operator }: BinaryOperationInput): Result<Operand> => {
  const [operandA, operandB] = operands;
  switch (operator) {
    case "+":
      return createSuccess(operandA + operandB);
    case "-":
      return createSuccess(operandA - operandB);
    case "*":
      return createSuccess(operandA * operandB);
    case "/":
      return operandB === 0 ? createError("Division by 0 impossible") : createSuccess(operandA / operandB);
  }
};

export default evaluateBinaryOperation;
