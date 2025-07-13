import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarVerbModifyNounScreen = () => {
  const grammarSections = [
    {
      title: '1. Khái quát: Động từ bổ nghĩa danh từ là gì?',
      explanation:
        '📌 Trong tiếng Nhật, động từ có thể **đứng trước danh từ** để bổ nghĩa, giống như “mà” trong tiếng Việt: "người mà tôi gặp", "cái bánh tôi ăn",...\n\n' +
        '👉 Cấu trúc: [Mệnh đề động từ] + [Danh từ]\n\n' +
        '🔸 Mệnh đề dùng **thể thường** (thể ngắn), bao gồm cả hiện tại và quá khứ, khẳng định hoặc phủ định.',
    },
    {
      title: '2. Câu với động từ hiện tại khẳng định',
      explanation:
        '👉 [Động từ thể từ điển] + Danh từ\n\n' +
        '🔹 Ví dụ:\n' +
        '・わたしが　つくる　ケーキ　→ cái bánh mà tôi làm\n' +
        '・よく　うたう　ひと　→ người hay hát\n' +
        '・べんきょうする　じかん　→ thời gian học\n\n' +
        '・これは　わたしが　よむ　本　です。→ Đây là cuốn sách tôi đọc.',
    },
    {
      title: '3. Câu với động từ phủ định',
      explanation:
        '👉 [Động từ thể ない] + Danh từ\n\n' +
        '🔹 Ví dụ:\n' +
        '・たべない　ひと　→ người không ăn\n' +
        '・いかない　がっこう　→ ngôi trường không đi đến\n\n' +
        '・これは　かのじょが　のまない　くすり　です。→ Đây là thuốc cô ấy không uống.',
    },
    {
      title: '4. Câu với động từ quá khứ',
      explanation:
        '👉 [Động từ thể た/なかった] + Danh từ\n\n' +
        '🔹 Ví dụ:\n' +
        '・あった　ひと　→ người tôi đã gặp\n' +
        '・みた　えいが　→ bộ phim đã xem\n' +
        '・いかなかった　ところ　→ nơi đã không đi\n\n' +
        '・これは　きのう　とった　しゃしん　です。→ Đây là bức ảnh tôi đã chụp hôm qua.',
    },
    {
      title: '5. Chủ ngữ trong mệnh đề động từ',
      explanation:
        '📌 Khi trong mệnh đề có **chủ ngữ khác với câu chính**, thường dùng 「が」hoặc 「の」\n\n' +
        '🔸 Ví dụ:\n' +
        '・これは　ともだちが　つくった　ケーキ　です。→ Đây là bánh bạn tôi làm.\n' +
        '・かのじょの　かいた　え　は　きれいです。→ Bức tranh cô ấy vẽ rất đẹp.',
    },
    {
      title: '6. Ghi nhớ nhanh 🎯',
      explanation:
        '🧠 Mẹo luyện tập:\n\n' +
        '・Bắt đầu từ các mẫu đơn giản như: のむひと、たべるもの、かくほん\n' +
        '・Ghép vào câu: 「これは たなかさんが　かいた　レポート　です。」\n' +
        '・Kết hợp thêm thời và phủ định để luyện phản xạ nhanh hơn 💡',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Động từ bổ nghĩa cho danh từ"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarVerbModifyNounScreen
