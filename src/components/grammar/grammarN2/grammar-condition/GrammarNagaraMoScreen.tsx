import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ながら（も）',
    explanation:
      '📌 Mẫu câu 「～ながら（も）」 dùng để diễn tả **sự trái ngược giữa hai vế câu**, mang nghĩa: "**Tuy... nhưng...**".\n\n' +
      '👉 Vế trước và vế sau có chủ ngữ giống nhau. Dù giữ nguyên một trạng thái nào đó, nhưng lại có một hành động hay trạng thái trái ngược xảy ra.\n' +
      '🔸 Đây là mẫu câu thường dùng trong **văn viết hoặc văn phong trang trọng**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ dạng ます (bỏ ます) + ながら（も）\n' +
      '🔹 Tính từ -i + ながら（も）\n' +
      '🔹 Tính từ -na (bỏ な) + ながら（も）\n' +
      '🔹 Danh từ + であり + ながら（も）\n\n' +
      '📌 Tuy nhiên, thường gặp nhất là với **danh từ** và **tính từ**.',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '✅ Diễn tả sự **đối lập nhẹ nhàng** giữa hai trạng thái.\n' +
      '・Diễn tả sự **nỗ lực, cố gắng vượt qua hạn chế** nào đó\n' +
      '・Mang sắc thái **khen ngợi, đánh giá tích cực** hơn là chỉ trích\n\n' +
      '📌 So với 「～のに」 hay 「～けれど」 thì 「～ながらも」 mang tính **mềm mại, lịch sự** hơn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 子どもながらも、いろいろと気を使っている。\n' +
      '→ Tuy là trẻ con nhưng nó cũng để ý rất nhiều điều.\n\n' +
      '2. 残念ながら、今回は不合格でした。\n' +
      '→ Rất tiếc là lần này đã trượt rồi.\n\n' +
      '3. 彼は学生でありながら、自分の会社を経営している。\n' +
      '→ Tuy là sinh viên nhưng anh ấy lại đang điều hành công ty riêng.\n\n' +
      '4. 忙しいながらも、家族との時間を大切にしている。\n' +
      '→ Tuy bận rộn nhưng vẫn trân trọng thời gian bên gia đình.',
  },
  {
    title: '5. Mẹo ghi nhớ và lưu ý',
    explanation:
      '💡 Một số mẫu cố định thường gặp:\n' +
      '・子どもながら\n' +
      '・残念ながら\n' +
      '・知りながら\n\n' +
      '📌 Không dùng với động từ hành động mạnh (như 行く、飲む) trừ khi muốn diễn tả sự đối lập rõ rệt.\n\n' +
      '⚠️ Đừng nhầm với 「～ながら」 dùng trong mẫu **vừa… vừa…** (ngữ pháp N4).',
  },
]

const GrammarNagaraMoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ながら（も）" grammarSections={grammarSections} />
}

export default GrammarNagaraMoScreen
