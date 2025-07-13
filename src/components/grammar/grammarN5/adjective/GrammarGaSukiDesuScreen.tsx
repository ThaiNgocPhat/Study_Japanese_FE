import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarGaSukiDesuScreen = () => {
  const grammarSections = [
    {
      title: '1. Tôi thích cái này 🎈 – Danh từ + がすきです',
      explanation:
        '🧩 Cấu trúc:\n[Danh từ] + が + すきです。\n\n' +
        '📌 Ví dụ:\n・わたしは おんがくが すきです。→ Tôi thích âm nhạc 🎧\n' +
        '・かのじょは テニスが すきです。→ Cô ấy thích tennis 🎾\n' +
        '・やまださんは イタリアのりょうりが すきです。→ Yamada thích món Ý 🍝',
    },
    {
      title: '2. Tôi thích LÀM gì đó 🎤 – Động từ + こと/の + がすきです',
      explanation:
        '🧩 Cấu trúc:\n[Động từ thể từ điển] + こと / の + が + すきです。\n\n' +
        '📌 Ví dụ:\n・たなかさんは えいがを みることが すきです。→ Tanaka thích xem phim 🎬\n' +
        '・わたしは うたうのが すきです。→ Tôi thích hát 🎶\n' +
        '・かれは にほんごを べんきょうするのが すきです。→ Anh ấy thích học tiếng Nhật 🇯🇵',
    },
    {
      title: '3. Phủ định nhẹ nhàng – Không thích lắm 😶‍🌫️',
      explanation:
        '❌ Thể phủ định:\n～すきじゃありません / すきじゃない / すきではありません\n\n' +
        '📌 Ví dụ:\n・わたしは おんがくが すきじゃない。→ Tôi không thích nhạc 😐\n' +
        '・かれは べんきょうするのが すきではありません。→ Anh ấy không thích học 📚\n\n' +
        '🎗 Người Nhật thường dùng 「あまりすきじゃない」 để tránh quá trực tiếp:\n→ わたしは べんきょうが あまりすきじゃないです。',
    },
    {
      title: '4. Ghét luôn!? – ～がきらいです 😖',
      explanation:
        '🚫 Mẫu trái nghĩa với 「すきです」 là 「きらいです」.\n\n' +
        '📌 Ví dụ:\n・やまださんは ピーマンが きらいです。→ Yamada ghét ớt chuông 🌶️\n' +
        '・わたしは にほんごを べんきょうするのが きらいです。→ Tôi ghét học tiếng Nhật (ôi không! 😅)\n\n' +
        '💡 Nhưng nhớ nhé, người Nhật thường *không thích nói ghét*, nên hãy dùng:\n「～が あまりすきじゃない」 → tinh tế hơn!',
    },
    {
      title: '5. Thêm chút cảm xúc – Dùng với よ/ね ❤️',
      explanation:
        '・このアニメ、ほんとうに すきだよ！→ Anime này tớ cực thích đó!\n' +
        '・きのうのライブ、すきだったね～！→ Buổi live hôm qua hay thật nhỉ!\n\n' +
        '📚 Khi trò chuyện, thay 「です」 bằng 「だ」 sẽ thân mật hơn:\n→ すきです → すきだ',
    },
    {
      title: '6. So sánh nhanh với ～がほしいです 💡',
      explanation:
        '🧩 ～がすきです：Tôi thích thứ gì (về cảm xúc)\n🧩 ～がほしいです：Tôi muốn có thứ gì đó (sở hữu)\n\n' +
        '・ケーキがすきです。→ Tôi thích bánh 🍰\n' +
        '・ケーキがほしいです。→ Tôi muốn bánh (mang cho tớ cái đi! 😄)',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～がすきです：Tôi thích gì đó 🎈"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarGaSukiDesuScreen
