import CommentBlock from "./CommentBlock";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function ReviewSection() {
  return (
    <section>
      <img
        src="/images/wave-upper.svg"
        alt="wave"
        className="w-full bg-dark-300 lg:-mt-[326px] -mt-[200px]"
      />
      <div className=" pt-[320px] bg-dark-300 pb-12">
        <div className="mx-auto container max-w-[1335px] lg:px-0 px-5 flex flex-col justify-center items-center">
          <h5 className="mb-16 text-2xl font-bold text-center text-white md:text-3xl">
            +1,749 команд поделились своим опытом
            <br /> использования нашего сервиса!
          </h5>
          <CommentBlock
            image="/images/comment-avatar-1.jpg"
            name="Алексей Смирнов"
            text="Невероятно! Не могу поверить, что настройка нашего интернет-магазина заняла всего несколько минут. Все было просто и понятно."
            opacity={1}
          />
          <CommentBlock
            image="/images/comment-avatar-2.jpg"
            name="Михаил Иванов"
            text="Это лучший сервис для приема онлайн-платежей. Подходит как для начинающих, так и для опытных пользователей, стремящихся к успеху."
            opacity={0.7}
          />
          <CommentBlock
            image="/images/comment-avatar-3.jpg"
            name="Ирина Петрова"
            text="Обязательный инструмент для любого бизнеса, который хочет принимать платежи онлайн быстро и безопасно."
            opacity={0.5}
          />
          <Link to="/" className="flex gap-3 mt-12 text-lg font-bold text-tertiary hover:underline">Все отзывы<ArrowRightIcon className="w-6"/></Link>
        </div>
      </div>
      <img
        src="/images/wave-lower.svg"
        alt="wave"
        className="w-full bg-dark-300"
      />
    </section>
  );
}

export default ReviewSection;
