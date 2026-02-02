import { useState } from "react";

const skills = ["JavaScript", "React", "HTML", "CSS"];

function Home({ startQuiz }) {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <style>{`
        .container {
          max-width: 1200px;
          margin: 70px auto;
          text-align: center;
        }

        .container h1 {
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #1f2937;
          letter-spacing: 1px;
        }

        .card-grid {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 40px;
        }

        .card {
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 600;
          color: #ffffff;
          border-radius: 16px;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
          transition: all 0.3s ease;
          user-select: none;
        }

        .card:nth-child(1) { background: linear-gradient(135deg, #16a34a, #22c55e); }
        .card:nth-child(2) { background: linear-gradient(135deg, #9333ea, #d946ef); }
        .card:nth-child(3) { background: linear-gradient(135deg, #ea580c, #f97316); }
        .card:nth-child(4) { background: linear-gradient(135deg, #0f766e, #14b8a6); }

        .card:hover { transform: translateY(-10px) scale(1.05); box-shadow: 0 22px 45px rgba(0,0,0,0.28); }
        .card:active { transform: scale(0.96); }

        .name-section { margin-top: 30px; }
        .name-section input {
          width: 320px;
          padding: 14px 16px;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          outline: none;
        }
        .name-section input:focus {
          border-color: #16a34a;
          box-shadow: 0 0 0 2px rgba(34,197,94,0.2);
        }

        @media (max-width: 900px) {
          .card-grid { flex-wrap: wrap; }
        }
      `}</style>

      <h1>SMART QUIZ APPLICATION</h1>

      <div className="name-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br /><br />

      <div className="card-grid">
        {skills.map((skill) => (
          <div
            key={skill}
            className="card"
            onClick={() => startQuiz(skill, name)}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
