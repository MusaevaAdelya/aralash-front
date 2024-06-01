import React, { useState } from "react";

const subscriptions = ["Базовый", "Продвинутый", "Профессиональный"];

function Dropdown() {
  const [isListHidden, setIsListHidden] = useState(true);
  const [currentSubscription, setCurrentSubscription] = useState(
    subscriptions[0]
  );

  const handleSubscriptionClick = (sub) => {
    setCurrentSubscription(sub);
    setIsListHidden(true);
  };

  return (
    <div className="relative ">
      <p
        className="text-base leading-6 text-gray-900 cursor-pointer hover:text-primary"
        onClick={() => setIsListHidden((val) => !val)}
      >
        {currentSubscription}
        <i className="ml-2 bi bi-arrow-right-short"></i>
      </p>
      <div
        className={`absolute min-w-[100px] p-2 bg-white border divide-y divide-gray-100 rounded-md top-1/2 right-28 -translate-y-1/2 ${
          isListHidden ? "hidden" : ""
        }`}
      >
        {subscriptions.map((sub) => (
          <p
            key={sub}
            className="z-10 py-1 text-sm cursor-pointer hover:bg-gray-50"
            onClick={() => handleSubscriptionClick(sub)}
          >
            {sub}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
