import { useEffect, useState } from "react";
import { ResultType } from "../types/types";
import Loan from "../utils/calculator";

function useLoanCalculator(
  capital: string,
  installmentsNumber: string,
  interestRate: string,
  paymentType: "annuity" | "differentiated"
) {
  const [result, setResult] = useState<ResultType>({
    sum: 0,
    interestSum: 0,
    montlyPay: 0,
    installments: [
      {
        listNumber: 0,
        capital: 0,
        interest: 0,
        installment: 0,
        remain: 0,
        interestSum: 0,
      },
    ],
  });

  useEffect(() => {
    setResult(Loan(+capital, +installmentsNumber, +interestRate, paymentType));
  }, [capital, installmentsNumber, interestRate, paymentType]);

  return result;
}

export default useLoanCalculator;
