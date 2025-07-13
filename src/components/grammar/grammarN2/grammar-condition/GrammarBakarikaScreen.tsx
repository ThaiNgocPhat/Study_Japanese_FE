import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ばかりか',
    explanation:
      '📌 Mẫu câu **～ばかりか** dùng để diễn đạt:\n' +
      '「Không chỉ A mà còn B」 hoặc 「Không những A mà thậm chí cả B」.\n\n' +
      '👉 Vế sau thường mang ý nghĩa cao hơn, vượt ngoài dự đoán, hoặc nằm ngoài phạm vi thông thường.\n\n' +
      '⚠️ Chủ yếu dùng trong văn viết, mang sắc thái trang trọng hơn so với 「～だけでなく」「～ばかりでなく」.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể thường + ばかりか\n' +
      '🔹 Tính từ -i + ばかりか\n' +
      '🔹 Tính từ -na + な + ばかりか\n' +
      '🔹 Danh từ + ばかりか\n\n' +
      '📍 Lưu ý: Vế B thường ở dạng nhấn mạnh, và thể hiện mức độ cao hơn vế A.',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. この店は値段が高いばかりか、店員の態度も悪い。\n' +
      '→ Cửa hàng này không chỉ giá cao mà thái độ nhân viên cũng tệ.\n\n' +
      '2. 彼は日本語ばかりか、英語やフランス語も話せる。\n' +
      '→ Anh ấy không chỉ nói được tiếng Nhật mà còn cả tiếng Anh và tiếng Pháp.\n\n' +
      '3. 事故では車ばかりか、家まで壊された。\n' +
      '→ Trong vụ tai nạn đó, không chỉ ô tô mà cả nhà cũng bị phá hỏng.\n\n' +
      '4. この野菜は栄養ばかりか、味もとてもいいです。\n' +
      '→ Rau này không chỉ dinh dưỡng mà vị cũng rất ngon.',
  },
  {
    title: '4. So sánh với các mẫu tương đương',
    explanation:
      '🔁 So với:\n\n' +
      '・～だけでなく／～ばかりでなく：Không chỉ... mà còn...\n' +
      '→ Gần nghĩa với ～ばかりか nhưng **dễ dùng hơn**, ít trang trọng hơn.\n\n' +
      '📌 ～ばかりか thường dùng khi vế sau mang tính **ngoài dự đoán**, **cao hơn**, hoặc **tác động mạnh** hơn vế trước.\n\n' +
      '✔ Ví dụ:\n' +
      '・彼は勉強ができるだけでなく、スポーツも得意です。\n' +
      '→ Bình thường, rõ ràng.\n\n' +
      '・彼は勉強ができるばかりか、先生に教えるほどだ。\n' +
      '→ Không những học giỏi mà còn giỏi đến mức dạy lại giáo viên.',
  },
]

const GrammarBakarikaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ばかりか" grammarSections={grammarSections} />
}

export default GrammarBakarikaScreen
