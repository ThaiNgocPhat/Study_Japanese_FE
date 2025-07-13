import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng',
    explanation:
      '🔹「～を問わず」dùng để diễn tả ý nghĩa "bất kể...", "không phân biệt..."\n\n' +
      '📌 Cấu trúc:\n' +
      '[Danh từ] + を問わず\n\n' +
      '📎 Dùng để nhấn mạnh rằng điều gì đó đúng hoặc áp dụng **không phân biệt** tuổi tác, giới tính, quốc tịch, thời gian, địa điểm, kinh nghiệm, v.v.',
  },
  {
    title: '2. Đặc điểm',
    explanation:
      '✅ Là cách nói trang trọng, thường gặp trong văn viết, thông báo, quảng cáo.\n' +
      '✅ Hay đi với các từ như:\n' +
      '　・年齢（ねんれい）、性別（せいべつ）、国籍（こくせき）、経験（けいけん）、昼夜（ちゅうや）\n' +
      '✅ Có thể dùng kèm các cụm từ như:\n' +
      '　・～かどうかを問わず\n' +
      '　・～に関係なく（にかんけいなく） (gần nghĩa nhưng ít trang trọng hơn)',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① この仕事は経験を問わず、誰でも応募（おうぼ）できます。\n→ Công việc này ai cũng có thể ứng tuyển, không phân biệt kinh nghiệm.\n\n' +
      '② 年齢を問わず多くの人が参加しました。\n→ Rất nhiều người đã tham gia, bất kể tuổi tác.\n\n' +
      '③ このイベントは天候（てんこう）を問わず開催（かいさい）されます。\n→ Sự kiện này sẽ được tổ chức bất kể thời tiết.\n\n' +
      '④ 国籍を問わず歓迎します。\n→ Chúng tôi hoan nghênh bất kể quốc tịch.\n\n' +
      '⑤ 時間を問わず、連絡してください。\n→ Hãy liên lạc bất kể lúc nào.',
  },
  {
    title: '4. So sánh với các mẫu khác',
    explanation:
      '🔸「～に関係なく」→ thân mật hơn, dùng trong giao tiếp hàng ngày.\n' +
      '🔸「～を問わず」→ cứng, dùng trong văn viết hoặc ngôn ngữ trang trọng.\n\n' +
      '🧠 Ví dụ:\n' +
      '・年齢に関係なく参加できます。 (thường dùng trong hội thoại)\n' +
      '・年齢を問わず参加できます。 (dùng trong tờ quảng cáo, thông báo)',
  },
]

const GrammarWoTowazuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～を問わず" grammarSections={grammarSections} />
}

export default GrammarWoTowazuScreen
