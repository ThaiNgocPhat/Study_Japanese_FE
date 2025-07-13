import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về ～てあげます、～てくれます、～てもらいます',
    explanation:
      '📌 Các mẫu câu này dùng để diễn tả hành động **làm giúp ai**, hoặc **được ai đó làm giúp việc gì**. Đây là mẫu ngữ pháp thể hiện **sự cho, nhận hành động** giữa người với người.\n\n' +
      '🔁 Dạng động từ sử dụng: **[Vて]** (thể て).',
  },
  {
    title: '2. ～てあげます：Làm gì đó cho ai (một cách chủ động)',
    explanation:
      '✏️ Ý nghĩa: **Tôi làm gì đó cho ai** (người dưới, ngang hàng hoặc người ngoài).\n\n' +
      '📌 Cấu trúc:\n' +
      '【Người cho】は【Người nhận】に Vてあげます。\n\n' +
      '📝 Ví dụ:\n' +
      '・私は友だちに日本語を教えてあげました。\n' +
      '→ Tôi đã dạy tiếng Nhật cho bạn.\n\n' +
      '・母は弟にケーキを作ってあげました。\n' +
      '→ Mẹ làm bánh cho em trai.',
  },
  {
    title: '3. ～てくれます：Ai đó làm gì đó cho tôi / người thân tôi',
    explanation:
      '✏️ Ý nghĩa: **Người khác làm gì đó cho mình** (mình được nhận hành động).\n\n' +
      '📌 Cấu trúc:\n' +
      '【Người cho】が【Người nhận (tôi)】に Vてくれます。\n\n' +
      '📝 Ví dụ:\n' +
      '・友だちが私に英語を教えてくれました。\n' +
      '→ Bạn đã dạy tiếng Anh cho tôi.\n\n' +
      '・彼は荷物を持ってくれました。\n' +
      '→ Anh ấy đã mang hành lý giúp tôi.',
  },
  {
    title: '4. ～てもらいます：Tôi được ai đó làm cho việc gì',
    explanation:
      '✏️ Ý nghĩa: **Tôi nhận được hành động từ ai đó**, hoặc **nhờ ai đó làm gì giúp**.\n\n' +
      '📌 Cấu trúc:\n' +
      '【Người nhận】は【Người cho】に Vて もらいます。\n\n' +
      '📝 Ví dụ:\n' +
      '・私は友だちに宿題を手伝ってもらいました。\n' +
      '→ Tôi đã được bạn giúp làm bài tập về nhà.\n\n' +
      '・母に料理を作ってもらいました。\n' +
      '→ Tôi được mẹ nấu ăn cho.',
  },
  {
    title: '5. So sánh nhanh 3 mẫu câu',
    explanation:
      '🔁 **～てあげます**：Mình là người giúp\n' +
      '🔁 **～てくれます**：Mình được người khác giúp (mang ơn)\n' +
      '🔁 **～てもらいます**：Mình nhận hành động từ ai đó (có chủ ý nhờ vả)\n\n' +
      '📖 Ví dụ so sánh:\n' +
      '・私は妹に宿題を手伝ってあげました。\n' +
      '→ Tôi giúp em gái làm bài tập.\n\n' +
      '・姉が私に宿題を手伝ってくれました。\n' +
      '→ Chị gái giúp tôi làm bài tập.\n\n' +
      '・私は姉に宿題を手伝ってもらいました。\n' +
      '→ Tôi được chị gái giúp làm bài tập.',
  },
  {
    title: '6. Lưu ý khi sử dụng',
    explanation:
      '✅ Không dùng ～てあげます với người trên (thầy cô, sếp...) vì dễ bị coi là bất lịch sự.\n\n' +
      '✅ Với người trên, hãy dùng cách nói khiêm nhường hơn hoặc gián tiếp như:\n' +
      '・～させていただきます (cho phép tôi được làm…)\n\n' +
      '✅ ～てくれる／～てもらう thường mang cảm giác biết ơn, thân mật.\n\n' +
      '✅ Có thể kết hợp với ありがとう để cảm ơn:「～てくれてありがとう」',
  },
]

const GrammarTeAgeruKureruMorauScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～てあげます、～てくれます、～てもらいます"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarTeAgeruKureruMorauScreen
