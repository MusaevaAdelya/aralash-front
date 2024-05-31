import WorkStep from "./WorkStep";

function HowItWorksSection() {
  return (
    <section className="text-dark-200 mt-16 md:mt-24 flex flex-col items-center">
      <div className="max-w-[630px] text-center">
        <h4 className="font-bold md:text-5xl text-3xl mb-5">
          Как это работает?
        </h4>
        <p className="text-lg max-w-[468px]">
          С нашей интуитивно понятной системой вы можете легко интегрировать
          онлайн-платежи на ваш сайт всего в три простых шага.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-24 gap-10 mt-10 relative">
        <WorkStep
          number={1}
          title="Зарегистрируйтесь"
          text="Пройдите быструю и простую регистрацию на нашей платформе."
          color="#F64B4B"
        />
        <WorkStep
          number={2}
          title="Настройте параметры"
          text="Настройте платежные параметры в соответствии с потребностями."
          color="#68D585"
        />
        <WorkStep
          number={3}
          title="Начните пользоваться!"
          text="Запустите ваш сайт и начните принимать платежи от клиентов."
          color="#473BF0"
        />
      </div>
    </section>
  );
}

export default HowItWorksSection;
