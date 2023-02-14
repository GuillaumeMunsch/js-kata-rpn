export const unaryOperators = ["N"] as const;
export const binaryOperators = ["+", "-", "*", "/"] as const;
export const allOperators = [...binaryOperators, ...unaryOperators] as const;

export type UnaryOperator = (typeof unaryOperators)[number];
export type BinaryOperator = (typeof binaryOperators)[number];
export type Operator = (typeof allOperators)[number];
export type Operand = number;
