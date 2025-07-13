import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu: ～ために vs ～ように',
    explanation:
      '📌 Cả hai mẫu 「～ために」và「～ように」đều dùng để nói **mục đích, lý do**, tạm dịch là: “để …”\n\n' +
      '💡 Tuy nhiên chúng **khác nhau về cách dùng và cấu trúc đi kèm**:\n' +
      '- 「～ために」: dùng với động từ **thể hiện ý chí**, danh từ.\n' +
      '- 「～ように」: dùng với động từ **không thể hiện ý chí** (khả năng, trạng thái, tự nhiên xảy ra).',
  },
  {
    title: '2. Cấu trúc với ～ために',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・[Động từ thể từ điển] + ために\n' +
      '・[Danh từ] + の + ために\n\n' +
      '🎯 Dùng khi chủ thể có **mục đích, ý chí rõ ràng** để đạt được điều gì đó.\n\n' +
      '📝 Ví dụ:\n' +
      '・日本の会社で働く**ために**、日本語を勉強しています。\n' +
      '→ Tôi học tiếng Nhật để làm việc ở công ty Nhật.\n\n' +
      '・健康**のために**、毎日運動しています。\n' +
      '→ Vì sức khỏe / Để tốt cho sức khỏe, tôi tập thể dục mỗi ngày.',
  },
  {
    title: '3. Cấu trúc với ～ように',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・[Động từ thể khả năng / thể bị động / tự động từ] + ように\n\n' +
      '🎯 Dùng khi mục đích là **một trạng thái, khả năng hoặc sự kiện không kiểm soát được trực tiếp**.\n\n' +
      '📝 Ví dụ:\n' +
      '・日本語が話せる**ように**、毎日練習しています。\n' +
      '→ Tôi luyện tập hằng ngày để có thể nói tiếng Nhật.\n\n' +
      '・忘れない**ように**、メモしてください。\n' +
      '→ Hãy ghi chú lại để không quên.',
  },
  {
    title: '4. So sánh: ～ために vs ～ように',
    explanation:
      '📊 Bảng so sánh nhanh:\n' +
      '・～ために: Dùng với động từ có ý chí hoặc danh từ. Mang nghĩa "để làm gì đó" (có mục đích rõ ràng, chủ động).\n' +
      '  Ví dụ: 日本に行くために、勉強しています。→ Tôi học để đi Nhật.\n\n' +
      '・～ように: Dùng với động từ không mang ý chí (chỉ khả năng, trạng thái, thay đổi...). Mang nghĩa "để đạt được trạng thái nào đó".\n' +
      '  Ví dụ: 日本語が話せるように、毎日練習しています。→ Tôi luyện tập mỗi ngày để có thể nói được tiếng Nhật.\n\n' +
      '🔹 Chủ ngữ:\n' +
      '・Với ～ために: Thường là chủ động, cùng chủ ngữ với mệnh đề chính.\n' +
      '・Với ～ように: Chủ ngữ của hai vế có thể khác nhau.',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo ghi nhớ:\n' +
      '・Muốn làm gì (ý chí) → ～ために\n' +
      '・Muốn có thể làm được gì / đạt trạng thái gì → ～ように\n\n',
  },
]

const GrammarTameniYouniScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～ために、～ように" grammarSections={grammarSections} />
  )
}

export default GrammarTameniYouniScreen
