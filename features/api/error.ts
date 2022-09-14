export type ErrorData = {
  errors: Errors | null;
};

export type Errors = {
  [U: string]: string;
};

export type StringArray = {
  [index: number]: string;
};

export type ErrorResponse = {
  code: number;
  error: string;
  data: ErrorData;
};

export type Error = {
  message?: string;
  errors?: Errors;
  codeError?: number;
  getMessageByKey: (key: string) => string;
  getMessages: () => StringArray;
  getMainErrorMessage: () => string | null;
  getFirstMessage: () => string | null;
  getLastMessage: () => string | null;
  getAnyMessage: () => string | null;
  getCommonMessage: () => string | null;
  getCode: () => number | null;
  getData: () => any | null;
};

export default function errorEntity({
  error,
  data,
  code,
}: ErrorResponse): Error {
  const errors = data?.errors || {};
  const arrayErrors = Object.values(errors);
  const codeError = code;
  const params = data;

  return {
    message: error,
    errors: errors,
    getMessageByKey: (key) => errors[key],
    getMessages: () => Object.values(errors),
    getMainErrorMessage: () => error,
    getFirstMessage: () =>
      Array.isArray(arrayErrors) ? arrayErrors[0] : error,
    getLastMessage: () =>
      arrayErrors.length ? arrayErrors[arrayErrors.length - 1] : null,
    getAnyMessage: () =>
      arrayErrors.length ? arrayErrors[0] : error ? error : null,
    getCommonMessage: () => arrayErrors.join("; "),
    getCode: () => codeError,
    getData: () => params,
  };
}
