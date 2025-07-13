import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về động từ ghép (複合動詞)',
    explanation:
      '📌 **複合動詞（ふくごうどうし）** là động từ được tạo thành bằng cách **ghép hai động từ lại với nhau**, trong đó:\n' +
      '・Động từ thứ nhất thường mang nghĩa hành động chính\n' +
      '・Động từ thứ hai giúp bổ sung ý nghĩa về **trạng thái, kết quả, hướng di chuyển, mức độ…**\n\n' +
      '🧠 Việc hiểu động từ ghép sẽ giúp bạn **đoán nghĩa** khi gặp từ mới và nâng cao khả năng đọc hiểu tiếng Nhật.',
  },
  {
    title: '2. Một số nhóm động từ ghép thường gặp',
    explanation:
      '🔹 **～始める（はじめる）** – bắt đầu làm gì đó\n' +
      '・勉強し始める（べんきょうしはじめる）→ Bắt đầu học\n\n' +
      '🔹 **～終わる（おわる）** – kết thúc việc gì đó\n' +
      '・読み終わる（よみおわる）→ Đọc xong\n\n' +
      '🔹 **～続ける（つづける）** – tiếp tục làm gì đó\n' +
      '・食べ続ける（たべつづける）→ Tiếp tục ăn\n\n' +
      '🔹 **～出す（だす）** – bắt đầu đột ngột (tự nhiên xảy ra)\n' +
      '・泣き出す（なきだす）→ Bật khóc, òa lên khóc\n' +
      '・笑い出す（わらいだす）→ Bật cười\n\n' +
      '🔹 **～込む（こむ）** – vào bên trong, sâu vào / kỹ hơn\n' +
      '・読み込む（よみこむ）→ Đọc kỹ, đọc sâu\n' +
      '・書き込む（かきこむ）→ Ghi vào, viết vào\n\n' +
      '🔹 **～返す（かえす）** – làm lại từ đầu (lặp lại)\n' +
      '・読み返す（よみかえす）→ Đọc lại\n' +
      '・言い返す（いいかえす）→ Đáp trả, nói lại',
  },
  {
    title: '3. Một số cặp động từ ghép mang nghĩa đặc biệt',
    explanation:
      '✅ Không thể dịch đơn thuần từng phần, mà cần hiểu như một cụm có nghĩa riêng:\n\n' +
      '・思いつく（おもいつく）→ Nghĩ ra\n' +
      '・聞き取る（ききとる）→ Nghe hiểu được\n' +
      '・見直す（みなおす）→ Xem lại, đánh giá lại\n' +
      '・言い出す（いいだす）→ Nói ra, bắt đầu lên tiếng\n' +
      '・駆け込む（かけこむ）→ Lao vào, chạy vào gấp gáp\n' +
      '・飛び出す（とびだす）→ Lao ra, bay ra khỏi đâu đó',
  },
  {
    title: '4. Phân tích ví dụ',
    explanation:
      '📝 Ví dụ phân tích:\n' +
      '・先生が教室に入ってくる。\n' +
      '→ Thầy giáo đi vào lớp học. (入る + くる: đi vào hướng về phía người nói)\n\n' +
      '・子供が急に泣き出しました。\n' +
      '→ Đứa trẻ đột nhiên bật khóc. (泣く + 出す: đột ngột khóc)\n\n' +
      '・この本を読み終えました。\n' +
      '→ Tôi đã đọc xong quyển sách này. (読む + 終える)',
  },
  {
    title: '5. Mẹo học66',
    explanation:
      '💡 Mẹo:\n' +
      '・Học theo **động từ gốc** và các động từ ghép phổ biến đi kèm\n' +
      '・Tập nhận diện nghĩa của phần sau (出す, 始める, 続ける...)\n\n',
  },
]

const GrammarFukugouDoushiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Động từ ghép (複合動詞)"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarFukugouDoushiScreen
