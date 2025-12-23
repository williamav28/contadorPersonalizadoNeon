import Contador from "./components/Contador";

function App() {
  return (
    // Fundo escuro total para destacar o Neon
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4">
      <h1 className="text-4xl md:text-5xl font-black mb-10 text-white tracking-tighter">
        <span className="text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,1)]">
          NEON
        </span>{" "}
        CONTADOR
      </h1>

      <Contador />

      <footer className="mt-12 text-slate-500 text-sm font-medium">
        React + Tailwind Cyberpunk Style
      </footer>
    </div>
  );
}

export default App;
