import { allOperators, BinaryOperator, binaryOperators, Operand, Operator, UnaryOperator } from "./evaluateOperation";
import evaluateBinaryOperation from "./evaluateOperation/evaluateBinaryOperation";
import evaluateUnaryOperation from "./evaluateOperation/evaluateUnaryOperation";
import Stack from "./stack";
import { createSuccess, Result } from "./utils/result";

export type Token = Operand | Operator;

export type EvaluateRPNProps = Token[];

const isOperator = (token: Token): token is Operator => allOperators.includes(token as Operator);
const isBinaryOperator = (operator: Operator): operator is BinaryOperator =>
  binaryOperators.includes(operator as BinaryOperator);

const computeNewBinaryOperationStack = ({ stack, token }: { token: BinaryOperator; stack: Stack<Operand> }) =>
  evaluateBinaryOperation({ operator: token, operands: stack.pop(2).elements })
    // Map on success only
    .map((payload) => createSuccess(stack.push(payload)));

const computeNewUnaryOperationStack = ({ stack, token }: { token: UnaryOperator; stack: Stack<Operand> }) =>
  createSuccess(
    stack.push(
      evaluateUnaryOperation({
        operand: stack.pop(1).elements[0],
        operator: token,
      }).payload
    )
  );

const computeNewStackFromToken = ({ stack, token }: { token: Token; stack: Stack<Operand> }) => {
  if (!isOperator(token)) {
    return createSuccess(stack.push(token));
  }
  if (isBinaryOperator(token)) {
    return computeNewBinaryOperationStack({ stack, token });
  }
  return computeNewUnaryOperationStack({ token, stack });
};

const recursivelyEvaluateRPN = ({
  stack,
  tokens,
}: {
  tokens: Token[];
  stack: Stack<Operand>;
}): Result<{ stack: Stack<Operand>; tokens: Token[] }> => {
  if (tokens.length === 0) return createSuccess({ tokens, stack });

  const [token, ...remainingTokens] = tokens;

  return (
    computeNewStackFromToken({ stack, token })
      // Map on success only
      .map((payload) =>
        recursivelyEvaluateRPN({
          tokens: remainingTokens,
          stack: payload,
        })
      )
  );
};

const evaluateRPN = (tokens: EvaluateRPNProps): Result<Operand> =>
  recursivelyEvaluateRPN({
    tokens,
    stack: new Stack<Operand>(),
  })
    // Map on success only
    .map((payload) => createSuccess(payload.stack.pop().elements[0]));
;

export default evaluateRPN;
