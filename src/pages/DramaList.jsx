import { useState } from "react";
import { Link } from "react-router-dom";
import dramas from "../data/dramas.json";

function DramaList() {
  const [filterYear, setFilterYear] = useState("");
  const [filterTags, setFilterTags] = useState([]); // 改成陣列，支援多選

  const allYears = [...new Set(dramas.map((d) => d.year))].sort(
    (a, b) => b - a,
  );
  const allTags = [...new Set(dramas.flatMap((d) => d.tags))].sort();

  // 切換標籤選取狀態
  const toggleTag = (tag) => {
    if (filterTags.includes(tag)) {
      setFilterTags(filterTags.filter((t) => t !== tag)); // 已選 → 取消
    } else {
      setFilterTags([...filterTags, tag]); // 未選 → 加入
    }
  };

  // 套用篩選
  const filteredDramas = dramas.filter((drama) => {
    if (filterYear && drama.year !== Number(filterYear)) return false;
    if (
      filterTags.length > 0 &&
      !filterTags.every((tag) => drama.tags.includes(tag))
    )
      return false;
    return true;
  });

  const groupedByYear = filteredDramas.reduce((acc, drama) => {
    const year = drama.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(drama);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <div style={{ maxWidth: "1020px", margin: "0 auto", padding: "20px 0" }}>
      <h1>劇集列表</h1>

      {/* 年份下拉 */}
      <div style={{ margin: "16px 0" }}>
        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="">全部年份</option>
          {allYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* 標籤按鈕多選 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          margin: "16px 0",
        }}
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            style={{
              padding: "4px 12px",
              borderRadius: "20px",
              border: "1px solid #326fc3",
              backgroundColor: filterTags.includes(tag) ? "#326fc3" : "white",
              color: filterTags.includes(tag) ? "white" : "#326fc3",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 重置按鈕 */}
      <button
        onClick={() => {
          setFilterYear("");
          setFilterTags([]);
        }}
      >
        重置篩選
      </button>

      <p>共 {filteredDramas.length} 部劇</p>

      {/* 年份錨點 */}
      <div style={{ display: "flex", gap: "12px", margin: "16px 0" }}>
        {sortedYears.map((year) => (
          <a
            key={year}
            href={`#year-${year}`}
            style={{
              color: "#326fc3",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {year}
          </a>
        ))}
      </div>

      {/* 劇集列表 */}
      {sortedYears.length === 0 ? (
        <p>沒有符合條件的劇集，換個口味搜尋吧~</p>
      ) : (
        sortedYears.map((year) => (
          <div key={year} id={`year-${year}`}>
            <h2>── {year} ──</h2>
            {groupedByYear[year].map((drama) => (
              <div
                key={drama.id}
                style={{
                  background: "#fff5f3",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  marginBottom: "16px",
                  border: "1px solid #fabba8",
                }}
              >
                <Link
                  to={`/dramas/${drama.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3
                    style={{
                      margin: "0 0 8px 0",
                      color: "#132c56",
                      fontSize: "18px",
                    }}
                  >
                    {drama.fullTitle}
                  </h3>
                </Link>
                <p
                  style={{
                    margin: "0 0 6px 0",
                    color: "#888",
                    fontSize: "14px",
                  }}
                >
                  {drama.year} |{" "}
                  {drama.episodes > 0 ? `${drama.episodes}集` : "集數待補"} |{" "}
                  {drama.status}
                </p>
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "#444",
                    fontSize: "15px",
                  }}
                >
                  {drama.description}
                </p>
                <p style={{ margin: "0 0 6px 0", fontSize: "14px" }}>
                  ⭐ {drama.rating > 0 ? drama.rating : "暫無評分"}
                </p>
                <p
                  style={{
                    margin: "0 0 6px 0",
                    fontSize: "13px",
                    color: "#326fc3",
                  }}
                >
                  {drama.tags.join(" · ")}
                </p>
                {drama.cp.length > 0 && (
                  <p style={{ margin: "0", fontSize: "13px", color: "#888" }}>
                    👥{" "}
                    {drama.cp.map((c, i) => (
                      <span key={i}>
                        <Link to={`/cp/${c.name}`} style={{ color: "#326fc3" }}>
                          {c.name}
                        </Link>
                        （{c.actor1} × {c.actor2}）
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default DramaList;
