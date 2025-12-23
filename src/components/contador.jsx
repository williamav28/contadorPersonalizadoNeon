import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`O valor definido é: ${count}`);
  };

  const [incrementar, setIncrementar] = useState(() => 1);

  const incrementarCount = () => setCount((prev) => prev + incrementar);

  // const incrementar = () => setCount((prev) => prev + 1);

  return (
    // A BOX NEON
    <div
      className="bg-slate-900 p-8 rounded-3xl border-2 border-indigo-500 
                    shadow-[0_0_20px_rgba(99,102,241,0.6),_inset_0_0_15px_rgba(99,102,241,0.3)] 
                    w-full max-w-md transition-all duration-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.8)]"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="text-indigo-300 font-semibold text-sm uppercase tracking-widest ml-1">
          Valor do Contador
        </label>

        <input
          type="number"
          className="bg-slate-800 border-2 border-indigo-800 rounded-xl p-3 text-white text-2xl font-bold
                     focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 outline-none 
                     transition-all shadow-inner"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-black py-3 rounded-xl 
                     shadow-[0_4px_15px_rgba(99,102,241,0.4)] active:scale-95 transition-all uppercase"
        >
          Definir Valor
        </button>
        <input
          type="number"
          className="bg-slate-800 border-2 border-indigo-800 rounded-xl p-3 text-white text-2xl font-bold
                     focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 outline-none 
                     transition-all shadow-inner"
          value={incrementar}
          onChange={(e) => setIncrementar(Number(e.target.value))}
          required
        />
        <button
          type="button"
          onClick={incrementarCount}
          className="w-full bg-transparent border-2 border-emerald-500 text-emerald-400 
                     hover:bg-emerald-500 hover:text-white font-bold py-3 rounded-xl 
                     transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]
                     hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
        >
          Incrementar por Valor
        </button>
      </form>

      <div className="h-[1px] bg-indigo-900/50 my-8 shadow-[0_0_10px_rgba(99,102,241,0.2)]"></div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          {count}
        </h2>

        {/* <button
          onClick={incrementar}
          className="w-full bg-transparent border-2 border-emerald-500 text-emerald-400 
                     hover:bg-emerald-500 hover:text-white font-bold py-3 rounded-xl 
                     transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]
                     hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
        >
          Incrementar +
        </button> */}
      </div>
    </div>
  );
}

export default Contador;
