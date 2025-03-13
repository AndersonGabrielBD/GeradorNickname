import { useState } from "react";
import "../App.css";

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const generateNicknames = (keyword) => {
  const base = keyword.split("");
  const shuffled = shuffleArray([...base]);
  const extras = ["_2025", "_X", "69", "Pro", "Master", "__", "Noob", "Gamer"];
  const reversed = keyword.split("").reverse().join("");

  return [
    keyword,
    reversed,
    shuffled.join(""),
    keyword + extras[Math.floor(Math.random() * extras.length)],
    shuffled.join("") + extras[Math.floor(Math.random() * extras.length)],
  ];
};

export default function NicknameGenerator() {
  const [keyword, setKeyword] = useState("");
  const [nicknames, setNicknames] = useState([]);

  const handleGenerate = () => {
    if (keyword.trim()) {
      setNicknames(generateNicknames(keyword));
    }
  };

  return (
    <div className="container">
      <div className="generator-box">
        <h1 className="title">Gerador de Nicknames</h1>
        <h2 className="subtitle">Com o método de Knuth (F-Y)</h2>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Digite uma palavra-chave"
          className="input-field"
        />
        <button onClick={handleGenerate} className="generate-button">
          Gerar
        </button>

        {nicknames.length > 0 && (
          <div className="nickname-list">
            <h2 className="list-title">Nicknames sugeridos:</h2>
            <ul>
              {nicknames.map((nick, index) => (
                <li key={index} className="nickname-item">
                  {nick}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
