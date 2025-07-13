import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ばかりか',
    explanation:
      '📌 「～ばかりか」là mẫu câu dùng để **nhấn mạnh**: không chỉ A mà còn B nữa, trong đó B thường mang ý **còn hơn cả A** hoặc **ngoài sức tưởng tượng**.\n\n' +
      '👉 Nghĩa: “Không chỉ… mà còn…”, “Không những… mà còn…”',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + ばかりか\n' +
      '🔹 Tính từ -i + ばかりか\n' +
      '🔹 Tính từ -na (bỏ な) + な + ばかりか\n' +
      '🔹 Danh từ + ばかりか\n\n' +
      '⚠️ Vế sau thường mang nghĩa **ngoài dự đoán** hoặc **mức độ cao hơn** so với vế trước.',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Nhấn mạnh sự **gia tăng mức độ** hoặc **ngoài phạm vi thông thường**.\n' +
      '✅ Hay dùng để khen ngợi, phê bình hoặc đưa ra nhận xét có tính so sánh.\n' +
      '✅ Thường dùng trong văn viết hoặc các ngữ cảnh trang trọng hơn (trong văn nói hay dùng 「だけでなく」「～し、それに」).',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 彼は日本語ばかりか、ベトナム語も話せる。\n' +
      '→ Anh ấy không chỉ nói được tiếng Nhật mà còn cả tiếng Việt nữa.\n\n' +
      '2. この店は味がいいばかりか、値段も安い。\n' +
      '→ Quán này không chỉ ngon mà giá cũng rẻ.\n\n' +
      '3. 彼女はきれいばかりか、頭もいい。\n' +
      '→ Cô ấy không chỉ xinh đẹp mà còn thông minh nữa.\n\n' +
      '4. 最近は大人ばかりか、子供までスマホを持っている。\n' +
      '→ Gần đây không chỉ người lớn mà cả trẻ con cũng có điện thoại.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔸 Cấu trúc này khác với 「だけでなく」 ở chỗ nó mang cảm xúc **bất ngờ**, **ngoài mong đợi** hoặc nhấn mạnh hơn.\n\n' +
      '🔸 Không nên dùng cho các liệt kê đơn thuần, trung lập.\n\n' +
      '🔸 Vế sau KHÔNG nên là những việc quá bình thường, dễ đoán.\n\n' +
      '❌ Sai: このレストランはおいしいばかりか、ちょっと高い。\n' +
      '✔️ Đúng: このレストランはおいしいばかりか、ミシュランの星をもらった。',
  },
]

const GrammarBakarikaN2Screen = () => {
  return <GrammarTemplateScreen screenTitle="～ばかりか" grammarSections={grammarSections} />
}

export default GrammarBakarikaN2Screen
