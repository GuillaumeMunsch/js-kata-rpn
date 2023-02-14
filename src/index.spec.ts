// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import evaluateRPN, { EvaluateRPNProps } from "./evaluateRPN";
import { getSuccess } from "./utils/result";

expect.extend(matchers);

describe("RPN", () => {
  it("Should execute a 1 2 + RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [1, 2, "+"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(getSuccess(rpnResult)).toEqual(3);
  });

  it("Should execute a 1 5 + RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [1, 5, "+"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(rpnResult).toEqual(6);
  });

  it("Should execute a 2 5 * RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [2, 5, "*"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(rpnResult).toEqual(10);
  });

  it("Should execute a 2 5 + 2 * RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [2, 5, "+", 2, "*"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(rpnResult).toEqual(14);
  });

  it("Should execute a 2 5 + 2 * 4 - 2 / RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [2, 5, "+", 2, "*", 4, "-", 2, "/"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(rpnResult).toEqual(5);
  });

  it("Should execute a 2 N RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [2, "N"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(rpnResult).toEqual(-2);
  });

  it("Should execute a 2 5 + 2 * 4 - 2 / N RPN", () => {
    // GIVEN
    const rpnInput: EvaluateRPNProps = [2, 5, "+", 2, "*", 4, "-", 2, "/", "N"];

    // WHEN
    const rpnResult = evaluateRPN(rpnInput);

    // THEN
    expect(rpnResult).toEqual(-5);
  });
});

/* 
  Pas assez d'operands
  Operands restants dans la stack à la fin de l'évaluation
  Division par 0
*/