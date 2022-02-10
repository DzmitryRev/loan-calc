// types for FIELDS
export type InstallmentsNumberType = "12" | "24" | "36" | "48" | "60";
export type PaymentType = "annuity" | "differentiated";
// types for CALCULTION RESULT
export type ResultInstallmentType = {
  listNumber: number;
  capital: number;
  interest: number;
  installment: number;
  remain: number;
  interestSum: number;
};
export type ResultType = {
  sum: number;
  interestSum: number;
  montlyPay: number;
  installments: ResultInstallmentType[];
};
// type for SELECT OPTIONS
export type OptionsType<T> = { value: T; title: string };
