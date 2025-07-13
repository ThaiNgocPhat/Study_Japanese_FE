import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu 「～に加えて」',
    explanation:
      '📌 「～に加えて」 có nghĩa là **“thêm vào…, không chỉ…, mà còn…”**.\n' +
      '👉 Dùng khi muốn bổ sung thêm một yếu tố **cùng chiều (tốt hoặc xấu)** với yếu tố đã nêu trước đó.\n' +
      '👉 Là cách diễn đạt trang trọng, thường dùng trong văn viết hoặc bài phát biểu.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 Danh từ + に加えて（にくわえて）\n\n' +
      '🔸 Danh từ 1 に加えて Danh từ 2\n' +
      '→ Nghĩa: Không chỉ Danh từ 1 mà còn Danh từ 2',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 Ví dụ 1:\n' +
      '台風に**加えて**、大雨も降ってきた。\n' +
      '→ Không chỉ bão mà còn mưa lớn nữa.\n\n' +
      '📝 Ví dụ 2:\n' +
      '彼は英語に**加えて**、中国語も話せます。\n' +
      '→ Anh ấy không chỉ nói được tiếng Anh mà còn cả tiếng Trung.\n\n' +
      '📝 Ví dụ 3:\n' +
      '最近は仕事に**加えて**、家事も手伝っています。\n' +
      '→ Gần đây tôi không chỉ làm việc mà còn phụ giúp việc nhà nữa.\n\n' +
      '📝 Ví dụ 4:\n' +
      'この映画は面白いに**加えて**、感動的でもあります。\n' +
      '→ Bộ phim này không chỉ thú vị mà còn cảm động nữa.',
  },
  {
    title: '4. So sánh với mẫu tương tự',
    explanation:
      '🔁 「～に加えて」:\n' +
      '・Nhấn mạnh sự bổ sung thêm yếu tố **có tính tương đồng** (tốt-tốt hoặc xấu-xấu).\n\n' +
      '🔁 「～だけでなく、～も」:\n' +
      '・Phổ biến hơn, không cần hai yếu tố cùng chiều.\n' +
      '・Ví dụ: 彼は日本語**だけでなく**、英語も話せる。\n\n' +
      '🔁 「～ばかりでなく」:\n' +
      '・Trang trọng hơn, dùng được trong văn viết và văn nói.\n' +
      '・Ví dụ: この料理は味**ばかりでなく**、見た目もきれいです。',
  },
]

const GrammarNiKuwaeteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～に加えて" grammarSections={grammarSections} />
}

export default GrammarNiKuwaeteScreen
