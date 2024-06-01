import React from "react";
import Dropdown from "./Dropdown";

const companies = [
  {
    name: "INAI",
    business_type: "Business type",
    registration_number: "123",
    address: "Timiryareza 74",
    subscription: "Продвинутый",
    requests_made_this_month: "100",
  },
  {
    name: "INAI",
    business_type: "Business type",
    registration_number: "123",
    address: "Timiryareza 74",
    subscription: "Продвинутый",
    requests_made_this_month: "100",
  },
  {
    name: "INAI",
    business_type: "Business type",
    registration_number: "123",
    address: "Timiryareza 74",
    subscription: "Продвинутый",
    requests_made_this_month: "100",
  },
  {
    name: "INAI",
    business_type: "Business type",
    registration_number: "123",
    address: "Timiryareza 74",
    subscription: "Продвинутый",
    requests_made_this_month: "100",
  },
];

function Companies() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {companies.map((company) => (
        <li
          key={company.registration_number}
          className="flex items-center justify-between py-5 gap-x-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <i class="bi bi-building-check flex items-center text-blue-400 text-3xl"></i>
            <div className="flex-auto min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {company.name} • {company.business_type}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                {company.address}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                {company.registration_number}
              </p>
            </div>
          </div>
          <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
            <Dropdown/>
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
