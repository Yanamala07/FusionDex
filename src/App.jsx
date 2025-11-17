import FusionLab from "./components/FusionLab";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <header className="text-black py-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex items-center justify-between"
        >
          <h1 className="text-3xl font-bold text-white">FusionDex</h1>
          {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img
              src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg"
              alt="Pokeball"
              className="w-10 h-10"
            />
          </motion.div> */}
        </motion.div>
      </header>
      <main className="container mx-auto">
        <FusionLab />
      </main>
      <footer className="bg-indigo-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 FusionDex. All rights reserved.</p>
          <p>Made by <a href="https://github.com/rajanarahul93" target="_blank"><span className="font-semibold underline">Rahul</span>💜</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
