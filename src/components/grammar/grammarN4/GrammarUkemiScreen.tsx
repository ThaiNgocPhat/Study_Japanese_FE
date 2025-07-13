import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu thể bị động (受身形)',
    explanation:
      '📌 Thể bị động (受け身・うけみ) dùng để diễn tả **hành động mà chủ ngữ là người nhận hành động**, tức là **bị**, **được** làm gì đó bởi người khác.\n\n' +
      '🔑 Dùng trong các tình huống như:\n' +
      '- Khi người nói bị ảnh hưởng bởi hành động người khác\n' +
      '- Khi không cần nêu rõ chủ thể hành động\n' +
      '- Khi muốn diễn đạt một cách khách quan, lịch sự hơn\n\n' +
      '💡 Có 2 loại chính:\n' +
      '1. Bị động trực tiếp: Tân ngữ bị tác động trực tiếp bởi chủ thể\n' +
      '2. Bị động gián tiếp: Chủ ngữ bị ảnh hưởng (dù không bị tác động trực tiếp)',
  },
  {
    title: '2. Cách chia thể bị động',
    explanation:
      '✏️ Nhóm 1 (五段動詞):\n' +
      'Chuyển hàng u → a + れる\n' +
      '・書く → 書かれる（bị viết）\n' +
      '・読む → 読まれる（bị đọc）\n' +
      '・話す → 話される（bị nói）\n' +
      '・持つ → 持たれる（bị cầm）\n\n' +
      '✏️ Nhóm 2 (一段動詞):\n' +
      'Bỏ る → られる\n' +
      '・食べる → 食べられる（bị ăn）\n' +
      '・見る → 見られる（bị nhìn）\n\n' +
      '✏️ Nhóm 3 (bất quy tắc):\n' +
      '・する → される\n' +
      '・来る（くる）→ 来られる（こられる）',
  },
  {
    title: '3. Cấu trúc sử dụng',
    explanation:
      '🔸 Cấu trúc thông thường:\n' +
      '**Người bị ảnh hưởng** + は + **chủ thể hành động** + に + **động từ thể bị động**\n\n' +
      '📝 Ví dụ:\n' +
      '・私は先生にほめられました。\n' +
      '→ Tôi được thầy giáo khen.\n\n' +
      '・弟は犬に手をかまれた。\n' +
      '→ Em trai tôi bị chó cắn vào tay.\n\n' +
      '・田中さんは先生にしかられました。\n' +
      '→ Tanaka bị thầy mắng.',
  },
  {
    title: '4. Bị động gián tiếp (間接受身)',
    explanation:
      '📌 Diễn tả cảm xúc bị ảnh hưởng gián tiếp bởi hành động của người khác:\n' +
      '・私は友だちにケーキを食べられた。\n' +
      '→ Tôi bị bạn ăn mất bánh (tôi buồn bực vì điều đó).\n\n' +
      '📌 Chủ ngữ thường là người **chịu tổn thất, phiền phức**.\n\n' +
      '📖 Một số ví dụ:\n' +
      '・母は弟に部屋を散らかされた。\n' +
      '→ Mẹ tôi bị em trai làm bừa bộn phòng.\n\n' +
      '・私は妹にパソコンをこわされました。\n' +
      '→ Tôi bị em gái làm hỏng máy tính.',
  },
  {
    title: '5. Một số lưu ý quan trọng',
    explanation:
      '✅ Trong thể bị động, **trợ từ を thường chuyển thành に**:\n' +
      '・先生が私をほめました。\n' +
      '→ 私は先生にほめられました。\n\n' +
      '✅ Có thể lược bỏ chủ thể hành động nếu không quan trọng hoặc không biết:\n' +
      '・この歌は多くの人に歌われています。\n' +
      '→ Bài hát này được nhiều người hát.\n\n' +
      '✅ Thường dùng trong tin tức, báo chí, hoặc phong cách trang trọng:\n' +
      '・新しい商品が発売されました。\n' +
      '→ Sản phẩm mới đã được phát hành.',
  },
]

const GrammarUkemiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Thể bị động (受身形)" grammarSections={grammarSections} />
  )
}

export default GrammarUkemiScreen
