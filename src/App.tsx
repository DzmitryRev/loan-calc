import { useState } from "react";
import { CalculationResult, Input, Select, SettingField, TableSection } from "./components";
import useInput from "./hooks/useInput";
import useLoanCalculator from "./hooks/useLoanCalculator";
import useOfficialRate from "./hooks/useOfficialRate";
import { InstallmentsNumberType, OptionsType, PaymentType } from "./types/types";

// values for INSTALLMENTS NUMBER
const installmentsNumberOptions: OptionsType<InstallmentsNumberType>[] = [
  { value: "12", title: "1 year" },
  { value: "24", title: "2 year" },
  { value: "36", title: "3 year" },
  { value: "48", title: "4 year" },
  { value: "60", title: "5 year" },
];
// values for PAYMENT TYPE
const paymentTypeOptions: OptionsType<PaymentType>[] = [
  { value: "annuity", title: "annuity" },
  { value: "differentiated", title: "differentiated" },
];

function App() {
  // inputs and selects state
  const capitalField = useInput("10000");
  const interestRateField = useInput("0");
  const [installmentsNumber, setInstsallmentsNumber] = useState<InstallmentsNumberType>("12");
  const [paymentType, setPaymentType] = useState<PaymentType>("annuity");

  // calculation result state
  const result = useLoanCalculator(
    capitalField.value,
    installmentsNumber,
    interestRateField.value,
    paymentType
  );

  // get official interest rate
  useOfficialRate(interestRateField.putValue);

  return (
    <div className="app">
      <section className="main_section">
        <div className="settings">
          <SettingField
            title="Loan amount"
            component={
              <Input
                value={capitalField.value}
                callback={capitalField.putValue}
                placeholder="capital"
              />
            }
          />
          <SettingField
            title="Interest rate per year"
            component={
              <Input
                value={interestRateField.value}
                callback={interestRateField.putValue}
                placeholder="interest rate"
              />
            }
          />
          <SettingField
            title="Loan term in years"
            component={
              <Select
                value={installmentsNumber}
                callback={setInstsallmentsNumber}
                options={installmentsNumberOptions}
              />
            }
          />
          <SettingField
            title="Payment type"
            component={
              <Select value={paymentType} callback={setPaymentType} options={paymentTypeOptions} />
            }
          />
        </div>
        <CalculationResult
          monthlyPay={result.montlyPay}
          totalCapitalPay={result.sum}
          totalInterestPay={result.interestSum}
          paymentType={paymentType}
        />
      </section>
      <TableSection tableData={result.installments} capital={capitalField.value} />
    </div>
  );
}

export default App;
