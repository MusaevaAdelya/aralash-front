import React, { useState } from 'react';
import { addbalance } from '../../services/user/addCompany'; // Подключаем функцию addbalance

function Balance() {
  const [amount, setAmount] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { amount};
      const result = await addbalance(data);

      if (result.error) {
        setErrorMessage(result.error);
      } else {
        setMessage('Баланс успешно пополнен.');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
      <>
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900 ">
              Пополните ваш баланс
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="sum" className="block text-sm font-medium leading-6 text-gray-900">
                  Сумма
                </label>
                <div className="mt-2">
                  <input
                      id="sum"
                      name="sum"
                      type="number"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>



              <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-tertiary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                >
                  Пополнить
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}

export default Balance;
