import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [page, setPage] = useState("home");
  const [topic, setTopic] = useState("");
  const [playerName, setPlayerName] = useState(""); // store name
  const [scoreData, setScoreData] = useState(null);

  const startQuiz = (skill, name) => {
    if (!name) {
      alert("Please enter your name first");
      return;
    }
    setTopic(skill);
    setPlayerName(name); // store name
    setPage("quiz");
  };

  const submitQuiz = (score) => {
    setScoreData({ ...score, name: playerName }); // attach name to score data
    setPage("result");
  };

  return (
    <>
      {page === "home" && <Home startQuiz={startQuiz} />}
      {page === "quiz" && <Quiz topic={topic} name={playerName} onSubmit={submitQuiz} />}
      {page === "result" && (
        <Result
          scoreData={scoreData}
          goHome={() => setPage("home")}
        />
      )}
    </>
  );
}

export default App;
