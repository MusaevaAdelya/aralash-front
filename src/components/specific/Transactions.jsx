const transactions = [
  {
    amount:"100000",
    currency:"KGS",
    description:"Описание транзакции",
    status:"success",
    created_at:"01.06.2024"
  },
];

function Transactions() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {transactions.map((transaction, idx) => (
        <li
          key={idx}
          className="flex items-center justify-between py-5 gap-x-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <i class="bi bi-coin flex items-center text-amber-400 text-3xl"></i>
            <div className="flex-auto min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {transaction.amount} {transaction.currency}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                {transaction.description}
              </p>
            </div>
          </div>
          <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-base leading-6 text-gray-900">
              {transaction.status}
            </p>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              {transaction.created_at}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Transactions;
