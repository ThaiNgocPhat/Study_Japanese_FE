import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu 「～ことがある / ～こともある」',
    explanation:
      '📌 「～ことがある」 dùng để diễn tả việc **thỉnh thoảng**, **đôi khi** có một hành động hoặc hiện tượng xảy ra.\n' +
      '📌 「～こともある」 nhấn mạnh rằng **“cũng có khi”**, cho thấy đó là điều **không thường xuyên nhưng vẫn có thể xảy ra**.\n' +
      '👉 Thường dùng để nói về thói quen, khả năng, hoặc một kinh nghiệm trong quá khứ.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 Động từ thể từ điển + ことがある\n' +
      '🔸 Động từ thể た + ことがある（diễn tả kinh nghiệm đã từng）\n\n' +
      '🔸 Động từ thể từ điển + こともある\n\n' +
      '📌 Phân biệt:\n' +
      '・～たことがある → Đã từng (kinh nghiệm trong quá khứ)\n' +
      '・～ることがある / ～ることもある → Thỉnh thoảng / đôi khi (thói quen, khả năng)',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 Ví dụ 1:\n' +
      '朝ごはんを食べない**ことがある**。\n' +
      '→ Thỉnh thoảng tôi không ăn sáng.\n\n' +
      '📝 Ví dụ 2:\n' +
      '彼は遅刻する**こともある**。\n' +
      '→ Anh ấy cũng có khi đi trễ.\n\n' +
      '📝 Ví dụ 3:\n' +
      '日本料理を作った**ことがあります**。\n' +
      '→ Tôi đã từng nấu món ăn Nhật.\n\n' +
      '📝 Ví dụ 4:\n' +
      '天気によっては、雪が降る**こともあります**。\n' +
      '→ Cũng có khi trời sẽ có tuyết tùy vào thời tiết.',
  },
  {
    title: '4. Ghi chú và mở rộng',
    explanation:
      '📖 「～ことがある」 thường đi kèm với:\n' +
      '・たまに (thỉnh thoảng)、ときどき (đôi khi)、まれに (hiếm khi)\n\n' +
      '📌 Không dùng mẫu này cho những điều không thể xảy ra hoặc những việc chắc chắn.\n\n' +
      '⚠️ 「～ことがある」 không dùng với hành động chỉ xảy ra đúng một lần trong đời nếu không muốn diễn tả kinh nghiệm:\n' +
      '❌ 昨日ピザを食べたことがある → sai (nên nói: 昨日ピザを食べました)',
  },
]

const GrammarKotoGaAruScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ことがある/ こともある"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarKotoGaAruScreen
