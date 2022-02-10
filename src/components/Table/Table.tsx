type TablePropsType = {
  tableIsOpen: boolean;
  rows: React.ReactElement;
};

export function Table({ tableIsOpen, rows }: TablePropsType) {
  return (
    <div className={`scroll-table ${tableIsOpen ? "" : "closed"}`}>
      <table>
        <thead>
          <tr>
            <th>month</th>
            <th>amount</th>
            <th>capital pay</th>
            <th>interest pay</th>
            <th>pay</th>
          </tr>
        </thead>
      </table>
      <div className="scroll-table-body">
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}
