import React from "react";

function SetOfProducts() {
  return (
    <section className=" relative">
      <div className=" text-dark-200 lg:w-1/2 w-full ml-auto flex justify-center lg:justify-start text-center lg:text-start lg:h-[467px]">
        <div className="max-w-[438px] space-y-6 mt-10 ml-10 ">
          <h2 className="font-bold lg:text-3xl text-2xl">
            Полностью интегрированный набор платежных продуктов
          </h2>
          <p className="">
            Мы объединяем все, что требуется для создания веб-сайтов и
            приложений, которые принимают платежи и отправляют выплаты по всему
            миру. Продукты Stripe позволяют осуществлять платежи онлайн и лично
            розничным продавцам, компаниям, занимающимся подпиской, программным
            платформам и маркетплейсам, а также всему, что находится между ними.
          </p>
        </div>
      </div>
      <img src="/images/setofproducts-image.png" alt="payment products" className="lg:absolute lg:right-1/2 lg:top-0 lg:h-[467px] lg:w-auto w-full mt-10 lg:mt-0" />
    </section>
  );
}

export default SetOfProducts;
