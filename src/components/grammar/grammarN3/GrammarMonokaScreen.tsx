import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ～ものか / ～もんか',
    explanation:
      '📌「～ものか」 hay dạng thân mật hơn là「～もんか」 dùng để thể hiện **sự phủ định mạnh mẽ** hoặc **thái độ phản bác** lại điều gì đó. Mang sắc thái như: "Không đời nào", "Làm gì có chuyện đó", "Tuyệt đối không…"\n\n' +
      '🗣 Thường được dùng trong hội thoại, mang sắc thái cảm xúc rõ rệt.\n' +
      '👉 Dùng bởi cả nam và nữ, nhưng 「～もんか」 nghe mềm mại hơn và thông dụng trong văn nói.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '✏️ Động từ thể thường + ものか / もんか\n' +
      '✏️ Tính từ -i + ものか / もんか\n' +
      '✏️ Tính từ -na + な + ものか / もんか\n' +
      '✏️ Danh từ + な + ものか / もんか\n\n' +
      '📌 Lưu ý: thường dùng ở thể ngắn (thể thường).',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① あんな店、二度と行く**ものか**。\n' +
      '→ Cái tiệm như vậy, không đời nào tôi đi lần thứ hai.\n\n' +
      '② 彼がそんなことをする**もんか**。\n' +
      '→ Làm gì có chuyện anh ta làm điều đó!\n\n' +
      '③ うれしい**もんか**。困っているんだよ。\n' +
      '→ Vui cái gì chứ! Tôi đang gặp rắc rối đấy.\n\n' +
      '④ あんなやつに負けてた**まるもんか**。\n' +
      '→ Làm gì có chuyện tôi chịu thua thằng đó!\n\n' +
      '⑤ 優しい**もんか**。いつも怒ってばかりいるくせに。\n' +
      '→ Hiền gì mà hiền. Toàn là nổi giận không à.',
  },
  {
    title: '4. Ghi nhớ nhanh',
    explanation:
      '💡「～ものか / ～もんか」 thường đi kèm với những câu cảm thán hoặc thái độ phản đối mạnh.\n' +
      '💬 Dùng cẩn thận trong giao tiếp vì mang sắc thái mạnh, có thể gây hiểu nhầm nếu dùng với người không thân thiết.',
  },
]

const GrammarMonokaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ものか/ もんか" grammarSections={grammarSections} />
}

export default GrammarMonokaScreen
