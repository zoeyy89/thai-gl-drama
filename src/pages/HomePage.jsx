import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dramas from "../data/dramas.json";

const trailers = [
  {
    title: "Girl Rules",
    url: "https://www.youtube.com/embed/lDUD3omAlHA",
  },
  {
    title: "Hometown Romance",
    url: "https://www.youtube.com/embed/lPr4rjI52RI",
  },
  {
    title: "The Air 4 Elements",
    url: "https://www.youtube.com/embed/Jo8yWhGpzBw",
  },
];

// 配色方案
const colorSchemes = [
  // 冷色系
  { bg: "#1a1a2e", accent: "#e94560", text: "#ffffff", sub: "#a8a8b3" },
  { bg: "#0a2342", accent: "#4facde", text: "#ffffff", sub: "#8cb8d0" },
  { bg: "#0f2027", accent: "#00d2ff", text: "#ffffff", sub: "#7ecce0" },
  { bg: "#0d2137", accent: "#a998d1", text: "#ffffff", sub: "#9bacc4" },
  { bg: "#0a1628", accent: "#38b6ff", text: "#ffffff", sub: "#7ab8d4" },
  { bg: "#0d1b2a", accent: "#56cfe1", text: "#ffffff", sub: "#8ac8d4" },
  { bg: "#141852", accent: "#7b9cff", text: "#ffffff", sub: "#9aaee0" },
  { bg: "#0e2040", accent: "#00b4d8", text: "#ffffff", sub: "#6ab8cc" },

  // 暖色系
  { bg: "#1a0a00", accent: "#ff9a3c", text: "#ffffff", sub: "#d4956a" },
  { bg: "#1f0a0a", accent: "#ff6b6b", text: "#ffffff", sub: "#c98a8a" },
  { bg: "#2a1a00", accent: "#ffd166", text: "#ffffff", sub: "#d4b870" },
  { bg: "#1e0f00", accent: "#ff8c42", text: "#ffffff", sub: "#c47a50" },
  { bg: "#1a0d00", accent: "#ffba08", text: "#ffffff", sub: "#c49a30" },
  { bg: "#2d1515", accent: "#ff4d6d", text: "#ffffff", sub: "#c47878" },

  // 紫粉系
  { bg: "#1f1035", accent: "#ff6b9d", text: "#ffffff", sub: "#c9a8c0" },
  { bg: "#1a0d2e", accent: "#ff85a1", text: "#ffffff", sub: "#c49bb0" },
  { bg: "#1c1c1c", accent: "#fabba8", text: "#ffffff", sub: "#cccccc" },
  { bg: "#1a0a1e", accent: "#ff99cc", text: "#ffffff", sub: "#c490aa" },
  // 綠色系
  { bg: "#0d1f12", accent: "#a8e063", text: "#ffffff", sub: "#8bbc6e" },
  { bg: "#1a2a1a", accent: "#f9ca24", text: "#ffffff", sub: "#c9b86a" },
  { bg: "#0a2010", accent: "#00e676", text: "#ffffff", sub: "#60c488" },
  { bg: "#0f1e0f", accent: "#69f0ae", text: "#ffffff", sub: "#7ec49a" },

  // 特別款
  { bg: "#1a1a1a", accent: "#ffffff", text: "#ffffff", sub: "#aaaaaa" },
];

// Hero 區影片清單（隨機播放）
const heroVideos = [
  "lDUD3omAlHA", // Girl Rules
  "lPr4rjI52RI", // Hometown Romance
  "Jo8yWhGpzBw", // The Air 4 Elements
  "OXfExloO350", // Her
  "cBq6p5lMxvg", // 冥王星之戀
  "gZt1RphRmW0", // 簪定此生
  "mdOlxH11WnQ", // 地球傾斜23.5度
  "7FVuDuM66iU", // 我們的祕密
  "E2KFC2etiWc", // 我們的愛
  "QNvnpjbNrRg", // Oxytoxin
  "R0ny7lQSr2k", // Love's Echoes
  "j5SrTAx-dHg", // 粉紅理論
  "oH2VIXTNsqg", // 非你默屬
  "WgVWizbGUZM", // 雲霄飛車
  "_s14syADEbA", // 女王互換記
  "0x4DayIIpDM", // 愛情毒藥
  "EtnRGdLsgOU", // 愛情設計
  "YOxVl4F5bf4", // 無法抗拒的愛
  "x6IqPR45ugo", // 危險女王
  "W4FJZx5n6DY", // 無限的愛
  "qrNXPKYGG0s", // 我的避風港
  "z90_qshJFU0", // 獄亂情迷
  "k2KvTabErXk", // 和諧密語
  "Siq8flSnMqo", // 唯有你
  "P2YZ7d1aI6k", // 鯨魚雜貨舖
];

function HomePage() {
  const [activeTrailer, setActiveTrailer] = useState(0);
  const [scheme, setScheme] = useState(colorSchemes[0]);
  const [heroVideo] = useState(() => {
    return heroVideos[Math.floor(Math.random() * heroVideos.length)];
  });

  const upcoming = dramas.filter((d) => d.year === 2026);
  const featured = dramas.filter((d) => d.rating >= 8.5);

  return (
    <div style={{ padding: "32px 0" }}>
      {/* Hero 區 */}
      <div
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          marginBottom: "48px",
          position: "relative",
          background: "#000",
        }}
      >
        {/* YouTube 影片 */}
        <div style={{ position: "relative", paddingTop: "42%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${heroVideo}?autoplay=1&mute=1&loop=1&playlist=${heroVideo}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              border: "none",
              pointerEvents: "none",
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* 文字遮罩層 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "40px 48px",
          }}
        >
          {/* 小標籤 */}
          <div
            style={{
              display: "inline-block",
              border: "1px solid #fabba8",
              borderRadius: "999px",
              padding: "4px 16px",
              fontSize: "12px",
              color: "#fabba8",
              marginBottom: "12px",
              letterSpacing: "2px",
              width: "fit-content",
            }}
          >
            2022 – 2026 泰國 GL 劇集收錄
          </div>

          {/* 主標題 */}
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              fontWeight: "900",
              color: "white",
              margin: "0 0 4px",
              lineHeight: "1.1",
              letterSpacing: "-1px",
            }}
          >
            Thai GL
          </h1>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              fontWeight: "900",
              margin: "0 0 16px",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              color: "#fabba8",
            }}
          >
            Stole My Sleep
          </h1>

          {/* 按鈕 */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              to="/dramas"
              className="btn-hover"
              style={{
                background: "#fabba8",
                color: "#132c56",
                borderRadius: "999px",
                padding: "12px 28px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "15px",
                display: "inline-block",
              }}
            >
              瀏覽劇集列表
            </Link>
            <Link
              to="/cp"
              className="btn-hover"
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid rgba(255,255,255,0.5)",
                borderRadius: "999px",
                padding: "12px 28px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "15px",
                display: "inline-block",
              }}
            >
              認識 CP 🌸
            </Link>
          </div>
        </div>
      </div>

      {/* 左7:右3 主體 */}
      <div
        className="home-layout"
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "flex-start",
        }}
      >
        {/* 左側 7 */}
        <div style={{ flex: 7 }}>
          {/* 2026 即將播出 */}
          <div style={{ marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <h2 style={{ color: "#132c56", margin: "0" }}>
                🆕 2026 即將播出
              </h2>
              <Link
                to="/dramas"
                style={{
                  color: "#326fc3",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                查看全部 →
              </Link>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {upcoming.map((drama) => (
                <div
                  key={drama.id}
                  style={{
                    background: "#f0f4ff",
                    border: "1px solid #326fc3",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <Link
                      to={`/dramas/${drama.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        style={{
                          margin: "0 0 4px",
                          color: "#132c56",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        {drama.fullTitle}
                      </p>
                    </Link>
                    <p style={{ margin: "0", color: "#888", fontSize: "13px" }}>
                      {drama.company || "出品公司待公布"}
                    </p>
                  </div>
                  {drama.cp.length > 0 && (
                    <span
                      style={{
                        background: "white",
                        border: "1px solid #326fc3",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "13px",
                        color: "#326fc3",
                      }}
                    >
                      {drama.cp.map((c) => c.name).join(" · ")}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 精選推薦 */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <h2 style={{ color: "#132c56", margin: "0" }}>⭐ 精選推薦</h2>
              <span style={{ color: "#888", fontSize: "14px" }}>
                評分 8.5 以上
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {featured.map((drama) => (
                <div
                  key={drama.id}
                  style={{
                    background: "#fff5f3",
                    border: "1px solid #fabba8",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <Link
                      to={`/dramas/${drama.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        style={{
                          margin: "0 0 4px",
                          color: "#132c56",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        {drama.fullTitle}
                      </p>
                    </Link>
                    <p style={{ margin: "0", color: "#888", fontSize: "13px" }}>
                      {drama.year} · {drama.tags.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                  <span
                    style={{
                      background: "white",
                      border: "1px solid #fabba8",
                      borderRadius: "20px",
                      padding: "4px 12px",
                      fontSize: "14px",
                      color: "#132c56",
                      fontWeight: "bold",
                    }}
                  >
                    ⭐ {drama.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右側 3 */}
        <div
          className="home-sidebar"
          style={{
            flex: 3,
            position: "sticky",
            top: "24px",
          }}
        >
          <h2 style={{ color: "#132c56", margin: "0 0 16px" }}>🎬 精選預告</h2>

          {/* YouTube iframe */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "12px",
            }}
          >
            <iframe
              width="100%"
              height="320"
              src={trailers[activeTrailer].url}
              title={trailers[activeTrailer].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 切換按鈕 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {trailers.map((trailer, i) => (
              <button
                key={i}
                onClick={() => setActiveTrailer(i)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "10px",
                  border: "1px solid #fabba8",
                  background: activeTrailer === i ? "#fabba8" : "white",
                  color: activeTrailer === i ? "white" : "#132c56",
                  cursor: "pointer",
                  fontSize: "13px",
                  textAlign: "left",
                  fontWeight: activeTrailer === i ? "bold" : "normal",
                }}
              >
                {activeTrailer === i ? "▶ " : "　"}
                {trailer.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spotify 歌單 */}
      <div style={{ marginTop: "48px" }}>
        <h2 style={{ color: "#132c56", margin: "0 0 16px" }}>
          🎵 追劇必聽歌單
        </h2>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/3vvHy61UFTcRLkmMCNzEnS?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default HomePage;
