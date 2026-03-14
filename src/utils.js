// 從 YouTube 網址抓出影片 ID
export function getYoutubeThumbnail(url) {
  if (!url) return null;

  // 支援以下格式：
  // https://www.youtube.com/watch?v=xxxxx
  // https://youtu.be/xxxxx
  // https://www.youtube.com/embed/xxxxx
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
  );
  return match
    ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
    : null;
}
