import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～といえば」được dùng để **nêu ra một đề tài**, sau đó chuyển hướng sang một chủ đề có liên quan hoặc đưa ra một ý kiến/phản hồi liên quan.\n\n' +
      '📌 Ý nghĩa:\n' +
      '- Nếu nói đến… thì…\n' +
      '- Nói mới nhớ… / Nhắc đến… mới nhớ là…\n\n' +
      '📎 Cấu trúc:\n' +
      '[Danh từ / Mệnh đề] + といえば',
  },
  {
    title: '2. Các cách sử dụng chính',
    explanation:
      '✅ Cách dùng 1: Nhắc đến A thì nhớ ra B (liên tưởng từ A sang B)\n' +
      '✅ Cách dùng 2: Xác nhận hoặc làm rõ thông tin từ vế trước\n' +
      '✅ Cách dùng 3: Dùng để chuyển đề tài khéo léo trong giao tiếp',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 夏といえば、海ですね。\n→ Nói đến mùa hè thì phải nhắc đến biển nhỉ.\n\n' +
      '② 京都といえば、修学旅行で行ったことがあります。\n→ Nói đến Kyoto, tôi đã từng đi trong chuyến tham quan trường.\n\n' +
      '③ 日本料理といえば、寿司が有名ですね。\n→ Nhắc đến món Nhật thì sushi nổi tiếng nhỉ.\n\n' +
      '④ 田中さんといえば、元気になったそうですよ。\n→ Nhắc đến anh Tanaka, nghe nói là anh ấy khỏe lại rồi đó.',
  },
  {
    title: '4. Phân biệt với ～というと',
    explanation:
      '🔸「～というと」thường dùng khi muốn xác nhận lại ý đối phương hoặc đưa ra suy nghĩ trực tiếp từ một từ khóa.\n' +
      '🔸「～といえば」dùng để mở rộng hoặc chuyển sang một đề tài liên quan với cảm xúc liên tưởng.\n\n' +
      '🧠 Ví dụ phân biệt:\n' +
      '・日本というと、富士山ですね。\n→ Nói đến Nhật thì nghĩ ngay đến núi Phú Sĩ.\n' +
      '・日本といえば、山田さんからメールが来ました。\n→ Nhắc đến Nhật, nhớ là vừa nhận được email từ anh Yamada.',
  },
]

const GrammarToIeBaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～といえば" grammarSections={grammarSections} />
}

export default GrammarToIeBaScreen
