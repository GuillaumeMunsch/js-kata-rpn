import { Operand } from "../evaluateOperation";

export type Success<T> = {
  payload: T;
  type: "SUCCESS";
};

export const createSuccess = <T>(payload: T): Success<T> => ({
  payload,
  type: "SUCCESS",
});

export type Error = {
  message: string;
  type: "ERROR";
};

export const createError = (message: string): Error => ({
  message,
  type: "ERROR",
});

export const isError = <T>(result: Result<T>): result is Error => result.type === "ERROR";

export type Result<T> = Success<T> | Error;

export const getSuccess = <T>(result: Result<T>): T => (result as Success<T>).payload;
