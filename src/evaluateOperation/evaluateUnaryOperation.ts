import { UnaryOperator, Operand } from ".";
import { createSuccess } from "../utils/result";

export type UnaryOperationInput = {
  operand: Operand;
  operator: UnaryOperator;
};

const evaluateUnaryOperation = ({ operand, operator }: UnaryOperationInput) => {
  switch (operator) {
    case "N":
      return createSuccess(-operand);
  }
};

export default evaluateUnaryOperation;
