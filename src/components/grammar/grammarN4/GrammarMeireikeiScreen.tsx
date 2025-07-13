import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu thể mệnh lệnh (命令形)',
    explanation:
      '📌 Thể mệnh lệnh (命令形・めいれいけい) dùng để **ra lệnh, yêu cầu trực tiếp ai đó làm gì**. Thường mang sắc thái mạnh, dùng trong hoàn cảnh đặc biệt như quân đội, thể thao, hoặc khi cấp trên nói với cấp dưới.\n\n' +
      '⚠️ Trong giao tiếp hàng ngày, ít dùng thể này vì dễ gây cảm giác **cục cằn, thô lỗ**.\n\n' +
      '👉 Tuy nhiên, có thể gặp trong biển báo, hướng dẫn sử dụng, hoặc khi bố mẹ/huấn luyện viên nghiêm khắc.',
  },
  {
    title: '2. Cách chia thể mệnh lệnh',
    explanation:
      '✏️ Nhóm 1 (五段動詞): Chuyển đuôi う → え\n' +
      '・書く → 書け（Hãy viết）\n' +
      '・話す → 話せ（Hãy nói）\n' +
      '・待つ → 待て（Hãy chờ）\n' +
      '・死ぬ → 死ね（Hãy chết）\n\n' +
      '✏️ Nhóm 2 (一段動詞): Bỏ る + ろ（hoặc dùng よ trong văn nói）\n' +
      '・食べる → 食べろ（Hãy ăn）\n' +
      '・見る → 見ろ（Hãy xem）\n\n' +
      '✏️ Nhóm 3 (bất quy tắc):\n' +
      '・する → しろ\n' +
      '・来る（くる）→ 来い（こい）',
  },
  {
    title: '3. Cấu trúc sử dụng',
    explanation:
      '🔸 Câu mệnh lệnh có thể đứng độc lập hoặc gắn với ngữ cảnh:\n\n' +
      '📝 Ví dụ:\n' +
      '・急げ！→ Nhanh lên!\n' +
      '・立て！→ Đứng dậy!\n' +
      '・宿題を出せ！→ Nộp bài tập đi!\n\n' +
      '🔔 Thường dùng trong:\n' +
      '・Thể thao: 「走れ！」(Chạy đi!)\n' +
      '・Hướng dẫn: 「入れ！」(Vào đi!)\n' +
      '・Biển báo: 「止まれ！」(Dừng lại!)',
  },
  {
    title: '4. Một số cách diễn đạt nhẹ nhàng hơn',
    explanation:
      '❗ Vì thể mệnh lệnh quá mạnh nên trong đời sống hàng ngày người Nhật thường dùng các cách nói **mềm mại, lịch sự** hơn:\n\n' +
      '✅ ～てください：Làm ơn hãy...\n' +
      '　・窓を開けてください。\n\n' +
      '✅ ～なさい：Ra lệnh nhẹ nhàng (dùng cho người dưới hoặc trẻ nhỏ)\n' +
      '　・早く寝なさい。\n\n' +
      '✅ ～てもらえますか？：Bạn có thể… cho tôi được không?\n' +
      '　・これを見てもらえますか？\n\n' +
      '✅ ～ように言う：Nói/ra lệnh một cách gián tiếp\n' +
      '　・先生は学生に静かにするように言いました。',
  },
  {
    title: '5. Lưu ý khi dùng thể mệnh lệnh',
    explanation:
      '📍 Không dùng với người trên, cấp trên hoặc trong tình huống lịch sự.\n\n' +
      '📍 Có thể gây khó chịu nếu không phù hợp hoàn cảnh, nên thay bằng thể ～てください hoặc ～なさい khi cần.\n\n' +
      '📍 Một số từ dạng mệnh lệnh phổ biến:\n' +
      '・気をつけろ！→ Hãy cẩn thận!\n' +
      '・黙れ！→ Im lặng đi!\n' +
      '・行け！→ Đi đi!',
  },
]

const GrammarMeireikeiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Thể mệnh lệnh (命令形)" grammarSections={grammarSections} />
  )
}

export default GrammarMeireikeiScreen
