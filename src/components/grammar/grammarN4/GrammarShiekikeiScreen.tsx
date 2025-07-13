import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu thể sai khiến (使役形)',
    explanation:
      '📌 Thể sai khiến dùng để diễn tả việc **bắt buộc ai đó làm gì**, hoặc **cho phép ai đó làm gì**.\n\n' +
      '🔑 Ý nghĩa:\n' +
      '・Khi người trên ra lệnh, ép buộc người dưới làm việc gì đó.\n' +
      '・Khi ai đó cho phép người khác làm hành động gì.\n\n' +
      '💡 Trong tiếng Việt tương đương với: “bắt/cho ai làm gì”.',
  },
  {
    title: '2. Cách chia thể sai khiến',
    explanation:
      '✏️ Nhóm 1 (五段動詞):\n' +
      'Chuyển đuôi う → あ hàng + せる\n' +
      '・書く → 書かせる（bắt viết）\n' +
      '・話す → 話させる（bắt nói）\n' +
      '・飲む → 飲ませる（bắt uống）\n\n' +
      '✏️ Nhóm 2 (一段動詞):\n' +
      'Bỏ る → させる\n' +
      '・食べる → 食べさせる（bắt ăn）\n' +
      '・見る → 見させる（cho xem）\n\n' +
      '✏️ Nhóm 3 (bất quy tắc):\n' +
      '・する → させる\n' +
      '・来る（くる）→ 来させる（こさせる）',
  },
  {
    title: '3. Cấu trúc sử dụng',
    explanation:
      '🔸 Cấu trúc:\n' +
      '**Người sai khiến** は / が + **Người bị sai khiến** に + **động từ thể sai khiến**\n\n' +
      '📝 Ví dụ:\n' +
      '・先生は学生に宿題をやらせました。\n' +
      '→ Thầy giáo bắt học sinh làm bài tập.\n\n' +
      '・母は私に野菜を食べさせた。\n' +
      '→ Mẹ bắt tôi ăn rau.\n\n' +
      '・部長は田中さんに出張へ行かせました。\n' +
      '→ Trưởng phòng cho anh Tanaka đi công tác.',
  },
  {
    title: '4. Thể sai khiến tự phát (使役受け身)',
    explanation:
      '📌 Khi người nói bị **ép buộc phải làm gì**, ta dùng thể **bị động + sai khiến**:\n\n' +
      '**Chủ thể** は + **Người sai khiến** に + **động từ thể sai khiến – bị động**\n\n' +
      '📝 Ví dụ:\n' +
      '・私は母に野菜を食べさせられた。\n' +
      '→ Tôi bị mẹ bắt ăn rau.\n\n' +
      '・彼は先生に漢字をたくさん書かせられた。\n' +
      '→ Anh ấy bị thầy bắt viết nhiều chữ Hán.\n\n' +
      '📌 Cảm giác ở đây là **không tự nguyện**, bị ép buộc.',
  },
  {
    title: '5. Một số lưu ý khi dùng',
    explanation:
      '✅ Nếu người bị sai khiến **tự thực hiện hành động**:\n' +
      '→ dùng trợ từ を\n' +
      '　・先生は学生を立たせた。（bắt đứng lên）\n\n' +
      '✅ Nếu người bị sai khiến **làm hành động với đối tượng khác**:\n' +
      '→ dùng trợ từ に\n' +
      '　・先生は学生に本を読ませた。（bắt đọc sách）\n\n' +
      '📌 Có thể dùng để **thể hiện sự cho phép** một cách nhẹ nhàng:\n' +
      '　・子供に遊ばせてあげます。\n' +
      '　→ Cho bọn trẻ chơi một chút.',
  },
]

const GrammarShiekikeiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Thể sai khiến (使役形)" grammarSections={grammarSections} />
  )
}

export default GrammarShiekikeiScreen
