function Result({ scoreData, goHome }) {
  if (!scoreData) return null;

  return (
    <div className="container">
      <style>{`
        .container { max-width:600px; margin:80px auto; padding:45px; background:#fff; border-radius:18px; box-shadow:0 20px 45px rgba(0,0,0,0.18); text-align:center;}
        h2 { font-size:2rem; margin-bottom:30px; color:#1f2937; letter-spacing:0.5px;}
        .score-box { margin-bottom:35px;}
        .score-box p { font-size:1.1rem; margin:12px 0; color:#374151;}
        .score-box p span { font-weight:600;}
        .correct { color:#16a34a;}
        .wrong { color:#dc2626;}
        .total-score { font-size:3rem; font-weight:700; margin:25px 0 10px; color:#16a34a;}
        .home-btn { padding:14px 28px; font-size:1rem; font-weight:600; border-radius:10px; border:none; cursor:pointer; background:linear-gradient(135deg,#0f766e,#14b8a6); color:#fff; transition:all 0.3s ease;}
        .home-btn:hover { box-shadow:0 10px 28px rgba(20,184,166,0.45); transform:translateY(-2px);}
      `}</style>

      <h2>Quiz Result</h2>
      <p style={{fontSize:"1.2rem", marginBottom:"10px"}}>Name: <strong>{scoreData.name}</strong></p>
      <div className="total-score">{scoreData.score}</div>

      <div className="score-box">
        <p>Total Questions: <span>{scoreData.total}</span></p>
        <p className="correct">Correct Answers: <span>{scoreData.score}</span></p>
        <p className="wrong">Wrong Answers: <span>{scoreData.total - scoreData.score}</span></p>
      </div>

      <button className="home-btn" onClick={goHome}>Home</button>
    </div>
  );
}

export default Result;

