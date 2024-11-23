function StrengthMeter() {
  return (
    <div className="bg-very-dark-gray px-4 py-3.5 flex items-center justify-between w-full mt-8">
      <p className="text-base uppercase text-gray font-bold md:text-lg">
        Strength
      </p>
      <div className="flex items-center gap-4">
        <p className="text-lg text-almost-white uppercase font-bold md:text-2xl">
          Too Weak
        </p>
        <div className="flex items-center gap-2">
          {[1,2,3,4].map((level) => (
            <span key={level} className="w-2.5 h-7 bg-very-dark-gray border-2 border-almost-white"></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrengthMeter;
