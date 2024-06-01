import React, {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import {mycomp} from "../../services/user/addCompany";
import ApiKeyManager from "./ApiKeyManager";




function Companies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await mycomp();
        if (response) {
          setCompanies(response);
        }
      } catch (error) {
        console.error("Ошибка при загрузке компаний:", error);
      }
    };

    fetchCompanies();
  }, []);


  return (
      <ul role="list" className="divide-y divide-gray-100">
        {companies.map((company) => (
            <li
                key={company.registration_number}
                className="flex items-center justify-between py-5 gap-x-6"
            >
              <div className="flex min-w-0 gap-x-4">
                <i className="bi bi-building-check flex items-center text-blue-400 text-3xl"></i>
                <div className="flex-auto min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {company.name} • {company.business_type.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                    {company.address}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                    {company.registration_number}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                    Подписка: {company.subscription.name} • Запросы в месяц: {company.subscription.max_requests_per_month} • Цена: {company.subscription.price}
                  </p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <Dropdown />
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {company.requests_made_this_month} запросов
                </p>
              </div>


            </li>
        ))}
      </ul>
  );
}

export default Companies;