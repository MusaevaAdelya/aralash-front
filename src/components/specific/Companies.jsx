import React from "react";

const people = [
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
      {people.map((person) => (
        <li
          key={person.email}
          className="flex items-center justify-between py-5 gap-x-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <i class="bi bi-building-check flex items-center text-primary text-3xl"></i>
            <div className="flex-auto min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name} • {person.business_type}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                {person.address}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                {person.registration_number}
              </p>
            </div>
          </div>
          <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-base leading-6 text-gray-900">
              {person.subscription}
            </p>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              {person.requests_made_this_month} запросов
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Companies;
