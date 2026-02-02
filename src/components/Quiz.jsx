import { useEffect, useState } from "react";
import { questions } from "../data/questions";

function Quiz({ topic, name, onSubmit }) {
  const quiz = questions[topic];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time === 0) nextQuestion();
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const nextQuestion = () => {
    // calculate new score
    const newScore = selected === quiz[index].answer ? score + 1 : score;
    setScore(newScore);

    setSelected("");
    setTime(10);

    if (index === quiz.length - 1) {
      // final submission
      onSubmit({
        total: quiz.length,
        score: newScore,
        wrong: quiz.length - newScore,
        name, // pass player name
      });
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">
      <style>{`
        .container { max-width:700px; margin:60px auto; padding:40px; background:#fff; border-radius:16px; box-shadow:0 18px 40px rgba(0,0,0,0.15); text-align:center;}
        h2 { font-size:1.9rem; margin-bottom:10px; color:#1f2937;}
        .timer { font-size:1rem; font-weight:600; color:#dc2626; margin-bottom:25px;}
        h3 { font-size:1.3rem; margin-bottom:30px; color:#111827; line-height:1.5;}
        .option { width:100%; padding:16px 18px; margin-bottom:15px; font-size:1rem; text-align:left; border-radius:10px; border:1px solid #e5e7eb; background:#f9fafb; cursor:pointer; transition:all 0.25s ease;}
        .option:hover { background:#f3f4f6; border-color:#9ca3af;}
        .option.selected { background:#16a34a; color:#fff; border-color:#16a34a; box-shadow:0 6px 18px rgba(22,163,74,0.4);}
        .next-btn { margin-top:25px; padding:14px 28px; font-size:1rem; font-weight:600; color:#fff; background:linear-gradient(135deg,#ea580c,#f97316); border:none; border-radius:10px; cursor:pointer; transition:all 0.3s ease;}
        .next-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 10px 25px rgba(249,115,22,0.45);}
        .next-btn:disabled { opacity:0.5; cursor:not-allowed;}
      `}</style>

      <h2>{topic} Quiz</h2>
      <p className="timer">Time Left: {time}s</p>
      <h3>{quiz[index].question}</h3>

      {quiz[index].options.map((opt) => (
        <button
          key={opt}
          className={`option ${selected === opt ? "selected" : ""}`}
          onClick={() => setSelected(opt)}
        >
          {opt}
        </button>
      ))}

      <button className="next-btn" disabled={!selected} onClick={nextQuestion}>
        {index === quiz.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
