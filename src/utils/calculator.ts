import { ResultInstallmentType, ResultType } from "../types/types";

function rnd(num: number): number {
  return Math.round(num * 100) / 100;
}

function isInteger(num: number): number {
  if (Number.isInteger(num)) {
    return num;
  }
  return Number(num.toFixed(2));
}

function getNextInstalment(
  listNumber: number,
  amount: number,
  installmentsNumber: number,
  interestRate: number,
  paymentType: "annuity" | "differentiated",
  capitalSum: number,
  interestSum: number
): ResultInstallmentType {
  let capital = 0;
  let interest = 0;
  let installment = 0;
  let irmPow = 0;
  const interestRateMonth = interestRate / 1200;

  if (paymentType === "annuity") {
    irmPow = Math.pow(1 + interestRateMonth, installmentsNumber);
    installment =
      interestRate === 0
        ? rnd(amount / installmentsNumber)
        : rnd(amount * ((interestRateMonth * irmPow) / (irmPow - 1)));
    interest = rnd((amount - capitalSum) * interestRateMonth);
    capital = installment - interest;
  } else {
    capital = rnd(amount / installmentsNumber);
    interest = rnd((amount - capitalSum) * interestRateMonth);
    installment = capital + interest;
  }

  return {
    listNumber,
    capital: isInteger(capital),
    interest: isInteger(interest),
    installment: isInteger(installment),
    remain: isInteger(amount - capitalSum - capital),
    interestSum: isInteger(interestSum + interest),
  };
}

function Loan(
  amount: number = 0,
  installmentsNumber: number = 0,
  interestRate: number = 0,
  paymentType: "annuity" | "differentiated" = "annuity"
): ResultType {
  if (isNaN(amount) || isNaN(installmentsNumber) || isNaN(interestRate) || !paymentType) {
    return {
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
    };
  }

  const installments = [];
  let interestSum = 0;
  let capitalSum = 0;
  let sum = 0;
  let montlyPay = 0;

  for (let i = 0; i < installmentsNumber; i++) {
    const inst = getNextInstalment(
      i + 1,
      amount,
      installmentsNumber,
      interestRate,
      paymentType,
      capitalSum,
      interestSum
    );

    sum += inst.installment;
    capitalSum += inst.capital;
    interestSum += inst.interest;

    if (i === installmentsNumber - 1) {
      capitalSum += inst.remain;
      sum += inst.remain;
      inst.remain = 0;
    }

    installments.push(inst);
  }

  if (installments.length !== 0) {
    montlyPay =
      (installments[0].installment + installments[installments.length - 1].installment) / 2;
  }
  return {
    installments: installments,
    interestSum: isInteger(rnd(interestSum)),
    sum: isInteger(rnd(sum)),
    montlyPay: isInteger(rnd(montlyPay)),
  };
}

export default Loan;
