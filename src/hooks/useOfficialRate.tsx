import { useEffect } from "react";
import getTodaysDate from "../utils/getTodaysDate";

function useOfficialRate(setInterestRate: (val: string) => void): void {
  const getOfficialInterestRate = async () => {
    try {
      const response = await fetch(
        "https://www.nbrb.by/api/refinancingrate/?onDate=" + getTodaysDate()
      );
      const result = await response.json();
      if (!result.length) {
        throw new Error("error");
      }
      setInterestRate(result[0].Value);
    } catch (error) {
      console.log(error);
      setInterestRate("0");
    }
  };
  useEffect(() => {
    getOfficialInterestRate();
  }, []);
}

export default useOfficialRate;
