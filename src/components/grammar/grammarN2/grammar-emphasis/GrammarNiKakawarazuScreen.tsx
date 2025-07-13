import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～にかかわらず',
    explanation:
      '📌「～にかかわらず」(hoặc「～にかかわりなく」) dùng để nói rằng một hành động, sự việc **xảy ra không phụ thuộc vào điều kiện nào đó**.\n' +
      '👉 Nghĩa: “bất kể…”, “không liên quan đến…”, “không quan trọng là…”',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể từ điển / thể ない + にかかわらず\n' +
      '🔹 Danh từ + にかかわらず\n' +
      '🔹 Tính từ đuôi い・な + にかかわらず\n\n' +
      '📌 Cũng có thể gặp dạng: AかAでないかにかかわらず（＝Dù là A hay không phải A）',
  },
  {
    title: '3. Ý nghĩa & cách dùng',
    explanation:
      '✅ Diễn tả ý nghĩa: **một hành động/sự việc xảy ra mà không bị ảnh hưởng bởi điều kiện, trạng thái nào đó**.\n' +
      '✅ Thường đi kèm các cặp từ mang tính đối lập như: 有無（うむ）, 行く/行かない, 多い/少ない…\n' +
      '✅ Hay dùng trong văn viết, thông báo, quy định, tin tức.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '1. 天候（てんこう）にかかわらず、試合（しあい）は行われます。\n' +
      '→ Trận đấu sẽ được tổ chức bất kể thời tiết thế nào.\n\n' +
      '2. 経験の有無（うむ）にかかわらず、募集しています。\n' +
      '→ Dù có kinh nghiệm hay không, đều đang tuyển dụng.\n\n' +
      '3. 年齢（ねんれい）にかかわらず、参加できます。\n' +
      '→ Bất kể tuổi tác, đều có thể tham gia.\n\n' +
      '4. 来る来ないにかかわらず、人数を教えてください。\n' +
      '→ Dù đến hay không, xin hãy cho biết số người.',
  },
  {
    title: '5. So sánh với mẫu tương tự',
    explanation:
      '🔸 ～に限らず: “không chỉ… mà còn…”, nhấn mạnh phạm vi mở rộng.\n' +
      '🔸 ～にかかわらず: “bất kể…”, không bị ảnh hưởng bởi điều kiện.\n' +
      '🔸 ～を問わず: gần nghĩa, mang tính trang trọng hơn, thường dùng trong thông báo chính thức.',
  },
]

const GrammarNiKakawarazuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～にかかわらず" grammarSections={grammarSections} />
}

export default GrammarNiKakawarazuScreen
