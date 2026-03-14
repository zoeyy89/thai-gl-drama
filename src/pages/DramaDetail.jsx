import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import dramas from "../data/dramas.json";

function DramaDetail() {
  const { id } = useParams();
  const drama = dramas.find((d) => d.id === Number(id));

  const savedIds = JSON.parse(localStorage.getItem("favorites") || "[]");
  const [isFav, setIsFav] = useState(savedIds.includes(drama?.id));

  if (!drama) {
    return (
      <div>
        <p>找不到這部劇 😢</p>
        <Link to="/dramas">回劇集列表</Link>
      </div>
    );
  }

  const toggleFavorite = () => {
    const current = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFav) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(current.filter((favId) => favId !== drama.id)),
      );
    } else {
      current.push(drama.id);
      localStorage.setItem("favorites", JSON.stringify(current));
    }
    setIsFav(!isFav);
  };

  return (
    <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "20px 0" }}>
      {/* 回上頁 */}
      <Link
        to="/dramas"
        style={{ color: "#326fc3", textDecoration: "none", fontSize: "14px" }}
      >
        ← 回劇集列表
      </Link>

      {/* 標題區 */}
      <div style={{ margin: "24px 0 16px" }}>
        <h1 style={{ margin: "0 0 4px", color: "#132c56", fontSize: "32px" }}>
          {drama.title}
        </h1>
        <h2
          style={{
            margin: "0",
            color: "#888",
            fontSize: "18px",
            fontWeight: "normal",
          }}
        >
          {drama.englishTitle}
        </h2>
      </div>

      {/* 基本資訊 + 收藏按鈕 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "#666", fontSize: "14px" }}>
          {drama.year} ·{" "}
          {drama.episodes > 0 ? `${drama.episodes}集` : "集數待補"} ·{" "}
          {drama.status}
        </span>
        <span
          style={{
            background: "#f0f4ff",
            color: "#326fc3",
            borderRadius: "20px",
            padding: "2px 12px",
            fontSize: "13px",
          }}
        >
          {drama.type}
        </span>
        <button
          onClick={toggleFavorite}
          style={{
            background: isFav ? "#fabba8" : "white",
            border: "1px solid #fabba8",
            borderRadius: "20px",
            padding: "4px 16px",
            cursor: "pointer",
            fontSize: "14px",
            color: isFav ? "white" : "#fabba8",
          }}
        >
          {isFav ? "❤️ 已收藏" : "🤍 加入收藏"}
        </button>
      </div>

      {/* 評分 */}
      <div
        style={{
          display: "inline-block",
          background: "#fff5f3",
          border: "1px solid #fabba8",
          borderRadius: "12px",
          padding: "8px 20px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{ fontSize: "24px", fontWeight: "bold", color: "#132c56" }}
        >
          ⭐ {drama.rating > 0 ? drama.rating : "—"}
        </span>
        <span style={{ fontSize: "12px", color: "#aaa", marginLeft: "8px" }}>
          來源：MyDramaList
        </span>
      </div>

      {/* 劇情描述 */}
      <p
        style={{
          color: "#444",
          fontSize: "16px",
          lineHeight: "1.8",
          marginBottom: "24px",
          padding: "16px 20px",
          background: "#fafafa",
          borderRadius: "12px",
          borderLeft: "4px solid #fabba8",
        }}
      >
        {drama.description}
      </p>

      {/* 標籤 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {drama.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#f0f4ff",
              color: "#326fc3",
              borderRadius: "20px",
              padding: "4px 12px",
              fontSize: "13px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CP */}
      {drama.cp.length > 0 && (
        <div
          style={{
            background: "#fff5f3",
            border: "1px solid #fabba8",
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{ margin: "0 0 8px", color: "#132c56", fontWeight: "bold" }}
          >
            主演 CP
          </p>
          {drama.cp.map((c, i) => (
            <p key={i} style={{ margin: "0", fontSize: "15px" }}>
              <Link
                to={`/cp/${c.name}`}
                style={{ color: "#326fc3", fontWeight: "bold" }}
              >
                {c.name}
              </Link>
              　{c.actor1} × {c.actor2}
            </p>
          ))}
        </div>
      )}

      {/* 出品公司 & 主題曲 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {drama.company && (
          <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
            🏢 出品公司：{drama.company}
          </p>
        )}
        {drama.ost && (
          <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
            🎵 主題曲：{drama.ost}
          </p>
        )}
      </div>

      {/* 預告片 */}
      {drama.trailer && (
        <a
          href={drama.trailer}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#132c56",
            color: "white",
            borderRadius: "8px",
            padding: "10px 24px",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          🎬 觀看預告片
        </a>
      )}
    </div>
  );
}

export default DramaDetail;
