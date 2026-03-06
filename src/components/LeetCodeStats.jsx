import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeetCodeStats = ({ username }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
      fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, [username]);

  if (!stats) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>LeetCode Stats</h2>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", marginTop: "20px" }}>
        
        <div style={{ width: 120 }}>
          <CircularProgressbar
            value={stats.easySolved}
            maxValue={stats.totalEasy}
            text={`${stats.easySolved}`}
          />
          <p>Easy</p>
        </div>

        <div style={{ width: 120 }}>
          <CircularProgressbar
            value={stats.mediumSolved}
            maxValue={stats.totalMedium}
            text={`${stats.mediumSolved}`}
          />
          <p>Medium</p>
        </div>

        <div style={{ width: 120 }}>
          <CircularProgressbar
            value={stats.hardSolved}
            maxValue={stats.totalHard}
            text={`${stats.hardSolved}`}
          />
          <p>Hard</p>
        </div>

      </div>

      <p style={{ marginTop: "20px" }}>
        Total Solved: <b>{stats.totalSolved}</b>
      </p>

      <a
        href={`https://leetcode.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  );
};

export default LeetCodeStats;