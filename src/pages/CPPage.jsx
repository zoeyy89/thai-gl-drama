import { Link } from "react-router-dom";
import dramas from "../data/dramas.json";
import { getYoutubeThumbnail } from "../utils";

function CPPage() {
  const cpMap = {};

  dramas.forEach((drama) => {
    drama.cp.forEach((cp) => {
      if (!cpMap[cp.name]) {
        cpMap[cp.name] = {
          name: cp.name,
          actor1: cp.actor1,
          actor2: cp.actor2,
          dramas: [],
        };
      }
      cpMap[cp.name].dramas.push(drama);
    });
  });

  const cpList = Object.values(cpMap).sort(
    (a, b) => b.dramas.length - a.dramas.length,
  );

  return (
    <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "20px 0" }}>
      <h1 style={{ color: "#132c56", marginBottom: "4px" }}>CP 介紹</h1>
      <p style={{ color: "#888", marginBottom: "20px" }}>泰百一家親 🌸</p>

      {/* 3欄網格 */}
      <div
        className="cp-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {cpList.map((cp) => {
          // 找第一部有預告片的劇當封面
          const coverDrama = cp.dramas.find((d) => d.trailer);
          const cpInfo = cpData.find((c) => c.name === cp.name);
          const coverImage = cpInfo?.photo1
            ? cpInfo.photo1
            : coverDrama
              ? getYoutubeThumbnail(coverDrama.trailer)
              : null;

          return (
            <Link
              key={cp.name}
              to={`/cp/${cp.name}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "white",
                  border: "1px solid #fabba8",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(19,44,86,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* 封面圖片 */}
                {/* 封面圖片 */}
                <div
                  style={{
                    width: "100%",
                    height: "220px", // ← 從 160px 改成 220px
                    background: coverImage
                      ? `url(${coverImage}) center/cover no-repeat`
                      : "linear-gradient(135deg, #132c56, #326fc3)",
                    position: "relative",
                    backgroundPosition: "top center", // ← 加這行，從上方開始裁切
                  }}
                >
                  {/* 出演部數角標 */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "#fabba8",
                      color: "white",
                      borderRadius: "999px",
                      padding: "2px 10px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cp.dramas.length} 部
                  </div>
                </div>

                {/* 卡片內容 */}
                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      margin: "0 0 4px",
                      color: "#132c56",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {cp.name}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 12px",
                      color: "#888",
                      fontSize: "13px",
                    }}
                  >
                    {cp.actor1} × {cp.actor2}
                  </p>

                  {/* 作品標籤 */}
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {cp.dramas.slice(0, 3).map((drama) => (
                      <span
                        key={drama.id}
                        style={{
                          background: "#fff5f3",
                          border: "1px solid #fabba8",
                          borderRadius: "999px",
                          padding: "2px 10px",
                          fontSize: "11px",
                          color: "#132c56",
                        }}
                      >
                        {drama.title}（{drama.year}）
                      </span>
                    ))}
                    {cp.dramas.length > 3 && (
                      <span
                        style={{
                          background: "#f0f4ff",
                          border: "1px solid #326fc3",
                          borderRadius: "999px",
                          padding: "2px 10px",
                          fontSize: "11px",
                          color: "#326fc3",
                        }}
                      >
                        +{cp.dramas.length - 3} 部
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CPPage;
