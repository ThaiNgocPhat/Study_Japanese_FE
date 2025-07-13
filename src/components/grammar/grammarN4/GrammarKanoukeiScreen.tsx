import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu thể khả năng (可能形)',
    explanation:
      '📌 Thể khả năng dùng để diễn tả **khả năng làm được gì đó**.\n' +
      '👉 Chúng ta đã biết mẫu câu: ～ことができる\n' +
      '🔎 Hôm nay, chúng ta học cách **chia động từ sang thể khả năng** (可能形).',
  },
  {
    title: '2. Cách chia động từ thể khả năng',
    explanation:
      '✏️ Nhóm 1: Động từ đuôi う → える\n' +
      '・書く → 書ける（viết được）\n' +
      '・話す → 話せる（nói được）\n' +
      '・会う → 会える（gặp được）\n\n' +
      '✏️ Nhóm 2: Bỏ る → られる（hoặc dùng ngắn: れる）\n' +
      '・食べる → 食べられる / 食べれる\n' +
      '・見る → 見られる / 見れる\n' +
      '・借りる → 借りられる / 借りれる\n\n' +
      '✏️ Nhóm 3 (bất quy tắc):\n' +
      '・する → できる\n' +
      '・来る（くる）→ 来られる（こられる）\n\n' +
      '📌 Lưu ý:\n' +
      'Không dùng thể khả năng cho:\n' +
      '・分かる（わかる: hiểu）\n' +
      '・知る（しる: biết）\n' +
      '→ vì chính bản thân nó đã mang nghĩa khả năng.',
  },
  {
    title: '3. Cấu trúc sử dụng',
    explanation:
      '[Danh từ] + が + Động từ thể khả năng\n\n' +
      '📌 Khi chuyển sang thể khả năng, **trợ từ を sẽ đổi thành が**.\n\n' +
      '📝 Ví dụ:\n' +
      '・私は漢字が書けます。\n' +
      '→ Tôi có thể viết được chữ Hán.\n\n' +
      '・彼はさしみが食べられます。\n' +
      '→ Anh ấy ăn được sashimi.\n\n' +
      '・英語が話せません。\n' +
      '→ Tôi không thể nói tiếng Anh.\n\n' +
      '・今日のパーティーに来られない。\n' +
      '→ Tôi không thể đến buổi tiệc hôm nay.\n\n' +
      '・1時まで勉強できます。\n' +
      '→ Tôi có thể học đến 1 giờ.',
  },
  {
    title: '4. So sánh nhanh: ～ことができる vs 可能形',
    explanation:
      '🆚 ～ことができる:\n' +
      '・Trang trọng, lịch sự hơn.\n' +
      '・Dùng với tất cả các động từ (với mẫu ～する rất phổ biến)\n\n' +
      '🆚 可能形:\n' +
      '・Ngắn gọn, tự nhiên hơn trong văn nói\n' +
      '・Phải học cách chia theo nhóm động từ\n\n' +
      '🔁 Ví dụ so sánh:\n' +
      '・ピアノをひくことができます。\n' +
      '→ ピアノがひけます。 (Tôi có thể chơi piano)',
  },
  {
    title: '5. Mẹo học nhanh',
    explanation:
      '💡 Nhìn đuôi động từ để xác định nhóm:\n' +
      '・Nếu là る và trước đó là nguyên âm e/i → nhóm 2 (90%)\n' +
      '・Các động từ đặc biệt: 見る, 食べる, 借りる, 起きる, 着る…\n\n' +
      '✅ Nhớ quy tắc chuyển:\n' +
      '・Nhóm 1: う → える\n' +
      '・Nhóm 2: る → られる\n' +
      '・Nhóm 3: する → できる, 来る → 来られる\n\n' +
      '📖 Học kèm ví dụ, luyện nói để dễ nhớ hơn!',
  },
]

const GrammarKanoukeiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Động từ thể khả năng (可能形)"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarKanoukeiScreen
