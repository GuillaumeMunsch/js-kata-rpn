export type Success<T> = {
  payload: T;
  type: "SUCCESS";
  map: <U>(callback: (param: T) => Result<U>) => Result<U>;
};

export const createSuccess = <T>(payload: T): Success<T> => ({
  payload,
  type: "SUCCESS",
  map: (fn) => fn(payload),
});

export type Error<T> = {
  message: string;
  type: "ERROR";
  map: <U>(callback: (param: T) => Result<U>) => Result<U>;
};

export const createError = <T>(message: string): Error<T> => ({
  message,
  type: "ERROR",
  map: () => createError(message),
});

export const isError = <T>(result: Result<T>): result is Error<T> => result.type === "ERROR";

export type Result<T> = Success<T> | Error<T>;

export const getSuccess = <T>(result: Result<T>): T => (result as Success<T>).payload;
