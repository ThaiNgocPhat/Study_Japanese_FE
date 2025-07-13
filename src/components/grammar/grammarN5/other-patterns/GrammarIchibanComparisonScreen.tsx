import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const GrammarIchibanComparisonScreen = () => {
  const grammarSections = [
    {
      title: '1. Giới thiệu mẫu câu ～のなかで、～がいちばん～',
      explanation:
        '👉 「いちばん」 nghĩa là **số một / nhất**, dùng để **nói cái gì đó nổi bật nhất trong một nhóm**.\n\n' +
        '📌 Mẫu câu:\n' +
        '🔹 [Danh từ chung] のなかで、[Danh từ cụ thể] が いちばん + tính từ + です。\n' +
        '→ Trong số ..., ... là nhất\n\n' +
        '🔹 Ví dụ:\n' +
        '・魚のなかで サーモンが いちばん おいしいです。\n　→ Trong các loài cá thì cá hồi là ngon nhất.',
    },
    {
      title: '2. Một số ví dụ minh họa',
      explanation:
        '📚 Cùng xem thêm vài ví dụ đa dạng hơn nhé:\n\n' +
        '・かのじょは どうぶつのなかで ねこが いちばん すきです。\n　→ Trong các con vật, cô ấy thích mèo nhất.\n\n' +
        '・わたしは かもくのなかで えいごが いちばん じょうずです。\n　→ Trong các môn học, tôi giỏi tiếng Anh nhất.\n\n' +
        '・日本語のなかで かんじが いちばん むずかしいです。\n　→ Trong tiếng Nhật, kanji là khó nhất.',
    },
    {
      title: '3. Có thể lược bỏ tính từ',
      explanation:
        '📝 Trong hội thoại, đôi khi người Nhật lược bỏ tính từ sau 「いちばん」 khi ngữ cảnh rõ ràng:\n\n' +
        '🔹 Ví dụ:\n' +
        '・あの図書館のなかで この本が いちばん。\n　→ Cuốn sách này là hay nhất trong thư viện (ngầm hiểu là "hay nhất").\n\n' +
        '💡 Ngầm hiểu: 「いちばんいいです」 hoặc 「いちばんおもしろいです」.',
    },
    {
      title: '4. Ghi nhớ nhanh',
      explanation:
        '🧠 Gợi ý ghi nhớ:\n\n' +
        '・「～のなかで」: trong số ...\n' +
        '・「～がいちばん～」: ... là nhất\n' +
        '・Đừng quên kết hợp với **tính từ** để thể hiện mức độ nổi bật!',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～のなかで、～がいちばん～"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarIchibanComparisonScreen
