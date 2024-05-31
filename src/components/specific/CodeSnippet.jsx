function CodeSnippet() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 md:mt-[144px] mt-20 items-center justify-center ">
      <div className="text-dark-200 max-w-[469px]  mx-auto lg:mx-0 lg:text-start text-center flex flex-col items-center lg:items-start lg:mb-0 mb-10">
        <h2 className="font-bold md:text-5xl text-3xl mb-6 ">
          Самые мощные и простые в использовании API в мире
        </h2>
        <div className="max-w-[355px] mb-5 ">
          <h3 className="font-bold text-xl mb-2">
            Инструменты для каждого стека
          </h3>
          <p>
            Мы предлагаем клиентские и серверные библиотеки на всех языках - от
            React и PHP до .NET и iOS.
          </p>
        </div>
        <div className="max-w-[355px] mb-5">
          <h3 className="font-bold text-xl mb-2">Готовые интеграции</h3>
          <p>
            Используйте интеграцию с такими системами, как Shopify, WooCommerce,
            NetSuite и другими.
          </p>
        </div>
      </div>
      <img src="/images/code-card.png" alt="code snippet" className="mx-auto" />
    </section>
  );
}

export default CodeSnippet;
