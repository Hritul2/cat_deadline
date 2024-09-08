const CounterBox = ({
  title,
  count,
  onIncrement,
  onDecrement,
}: {
  title: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg text-center shadow-lg w-full max-w-xs">
      <h2 className="text-2xl font-bold text-red-500 mb-6">{title}</h2>
      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={onDecrement}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all text-2xl"
        >
          -
        </button>
        <span className="text-white text-4xl">{count}</span>
        <button
          onClick={onIncrement}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterBox;
