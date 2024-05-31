import Button from "../common/Button";

function HeroSection() {
  return (
    <>
      <img src="/images/gradient-circle.png" alt="gradient decoration" className="absolute top-0 left-0 -z-10" />
      <section className="mt-24  relative   lg:h-[627px]">
        <div className="lg:w-1/2 w-full  text-dark-100 space-y-9 relative  ">
          <h1 className="font-extrabold md:text-6xl text-4xl uppercase  leading-tight">
            Легкие
            <br /> и безопасные <br />
            <span className="text-primary">онлайн-платежи</span>
          </h1>
          <p className="font-bold leading-7 max-w-[500px]">
            Миллионы компаний всех размеров используют Наш сервис онлайн и лично
            для приема платежей, отправки выплат, автоматизации финансовых
            процессов и увеличения доходов.
          </p>
          <Button className="text-white bg-primary shadow-[0_4px_41px_0_rgba(112,10,160,0.4)] py-4 px-12 font-bold md:text-2xl text-xl rounded-2xl ">
            Начать сейчас
          </Button>
          <img
            src="/images/hero-decor-1.png"
            alt=""
            className="absolute md:-bottom-24 -bottom-25 right-0 lg:w-auto md:w-[150px] w-[100px]"
          />
        </div>
        <img
          src="/images/hero-image.png"
          alt="app"
          className="lg:h-[627px] h-auto w-full lg:w-auto  lg:absolute lg:left-1/2 lg:-top-10 lg:mt-0 md:mt-20 mt-36"
        />
      </section>
    </>
  );
}

export default HeroSection;
