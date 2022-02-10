type CalculationResultPropsType = {
  monthlyPay: number;
  totalCapitalPay: number;
  totalInterestPay: number;
  paymentType: string;
};

export function CalculationResult({
  monthlyPay,
  totalCapitalPay,
  totalInterestPay,
  paymentType,
}: CalculationResultPropsType) {
  return (
    <div className="result">
      <div className="mountly-payments_container">
        <p className="mountly-payments_title">Monthly Payments</p>
        <p className="mountly-payments_value">
          {paymentType === "annuity" ? monthlyPay : "~" + monthlyPay}
          <span>BYN</span>
        </p>
      </div>
      <div className="total-paid_container">
        <span>Total Paid</span>
        <span>
          {totalCapitalPay.toLocaleString()} <span>BYN</span>
        </span>
      </div>
      <div className="total-paid_container">
        <span>Total Interest Paid</span>
        <span>
          {totalInterestPay.toLocaleString()} <span>BYN</span>
        </span>
      </div>
    </div>
  );
}
