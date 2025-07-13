import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarGaJouzuHetaDesuScreen = () => {
  const grammarSections = [
    {
      title: '1. Giỏi hay dở một thứ gì đó 🧠🍳',
      explanation:
        '🧩 Cấu trúc:\n[Danh từ] + が + じょうず / へた + です。\n\n' +
        '📌 Ví dụ:\n・わたしは スポーツが じょうずです。→ Tôi giỏi thể thao 🏀\n' +
        '・かのじょは すうがくが へたです。→ Cô ấy học toán dở 😅\n' +
        '・やまださんは えいごが じょうずです。→ Yamada giỏi tiếng Anh 🇬🇧\n' +
        '・かれは りょうりが へたです。→ Anh ấy nấu ăn tệ lắm 🍳😅',
    },
    {
      title: '2. Giỏi/Kém làm việc gì đó 🎤🏊‍♀️',
      explanation:
        '🧩 Cấu trúc:\n[Động từ thể từ điển] + こと / の + が + じょうず / へた + です。\n\n' +
        '✅ Cách nói này để nói về kỹ năng làm một việc cụ thể.\n\n' +
        '📌 Ví dụ:\n・たなかさんは うたうことが じょうずです。→ Tanaka hát rất hay 🎤\n' +
        '・わたしは およぐのが へたです。→ Tôi bơi dở lắm 🐢\n' +
        '・かれは りょうりをするのが じょうずです。→ Anh ấy nấu ăn giỏi 🍲\n' +
        '・やまださんは べんきょうすることが へたです。→ Yamada học hành kém 📚💤',
    },
    {
      title: '3. Cách nói tự nhiên như người Nhật 😌',
      explanation:
        '🗣 Người Nhật thường không chê người khác trực tiếp là "へた", vì nghe hơi… phũ 😅\n' +
        '👉 Có thể nói nhẹ đi như:\n・あまり上手じゃないです。→ Không giỏi lắm…\n・ちょっと苦手なんです。→ Tôi hơi "không quen" việc đó (cách nói lịch sự hơn để chỉ mình làm dở)\n\n' +
        '📌 Ví dụ:\n・わたしは りょうりが ちょっと苦手です。→ Tôi hơi vụng chuyện nấu ăn 😅',
    },
    {
      title: '4. Mẹo nhỏ: じょうず dùng cho người khác, とくい dùng cho bản thân ✨',
      explanation:
        '📍 Khi nói về bản thân, người Nhật thường dùng:\n・とくい（得意）→ Tôi khá/chuyên về...\n・にがて（苦手）→ Tôi không mạnh/không thích...\n\n' +
        '📌 Ví dụ:\n・りょうりは とくいです！→ Nấu ăn là sở trường của tôi 😎\n・にほんごは ちょっと にがてです。→ Tôi hơi yếu tiếng Nhật 😓',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～がじょうず / ～がへた：Giỏi – Dở 🧠😅"
      grammarSections={grammarSections}
    />
  )
}
export default GrammarGaJouzuHetaDesuScreen
