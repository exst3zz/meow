import transactionData from "../../db/transaction.json";
import css from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  return (
    <table>
      <thead className={css.topTable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionData.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.elTransaction} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
