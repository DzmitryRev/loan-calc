import { useState } from "react";

import { Table } from "./Table";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResultInstallmentType } from "../../types/types";

type TableSectionType = {
  tableData: ResultInstallmentType[];
  capital: string;
};

export function TableSection({ tableData, capital }: TableSectionType) {
  const [tableIsOpen, setTableIsOpen] = useState<boolean>(false);

  return (
    <section className="table_section">
      <button className="show-table-btn" onClick={() => setTableIsOpen(!tableIsOpen)}>
        <span>Show table</span>
        <span className={`show-table-btn_icon ${tableIsOpen ? "rotated-icon" : ""}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <Table
        tableIsOpen={tableIsOpen}
        rows={
          capital === "0" ? (
            <></>
          ) : (
            <>
              {tableData.map((item) => (
                <tr key={item.listNumber}>
                  <td>{item.listNumber}</td>
                  <td>{item.remain}</td>
                  <td>{item.capital}</td>
                  <td>{item.interest}</td>
                  <td>{item.installment}</td>
                </tr>
              ))}
            </>
          )
        }
      />
    </section>
  );
}
