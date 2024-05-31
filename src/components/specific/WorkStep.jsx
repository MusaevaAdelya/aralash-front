function WorkStep({ number, title, text, color }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-white rounded-full h-[73px] w-[73px] flex items-center justify-center font-bold text-4xl mb-10"
        style={{ backgroundColor: color }}
      >
        {number}
      </span>
      <h5 className="font-bold text-xl mb-3">Зарегистрируйтесь</h5>
      <p className="text-lg max-w-[253px] text-center">
        Пройдите быструю и простую регистрацию на нашей платформе.
      </p>
    </div>
  );
}

export default WorkStep;
