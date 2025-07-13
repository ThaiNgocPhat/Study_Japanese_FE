import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu ～よう／～みたい',
    explanation:
      '📌「～よう」và「～みたい」đều được dùng để **so sánh, ví von hoặc diễn đạt sự suy đoán**.\n\n' +
      '👉 Cả hai mẫu này đều có nghĩa giống với “giống như là…”, “hình như là…”, nhưng khác nhau về **mức độ trang trọng và tình huống sử dụng**.',
  },
  {
    title: '2. Cấu trúc và cách sử dụng ～よう',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・[Danh từ] + のよう\n' +
      '・[Động từ / Tính từ] + よう\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は先生のようです。\n' +
      '→ Anh ấy giống như giáo viên.\n\n' +
      '・雪が降るようです。\n' +
      '→ Hình như tuyết sắp rơi.\n\n' +
      '・彼は何か言いたいようだ。\n' +
      '→ Có vẻ như anh ấy muốn nói gì đó.\n\n' +
      '📌「ようだ」dùng trong văn nói/trang trọng, thường mang ý **suy đoán khách quan**.',
  },
  {
    title: '3. Cấu trúc và cách sử dụng ～みたい',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・[Danh từ / Động từ / Tính từ] + みたい\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は赤ちゃんみたいに寝ている。\n' +
      '→ Anh ấy ngủ như em bé vậy.\n\n' +
      '・雨が降ったみたいですね。\n' +
      '→ Hình như vừa mưa nhỉ.\n\n' +
      '・このケーキ、アイスクリームみたい！\n' +
      '→ Cái bánh này giống kem quá!\n\n' +
      '📌「みたい」thân mật, tự nhiên hơn, thường dùng trong **hội thoại hàng ngày**.',
  },
  {
    title: '4. So sánh nhanh ～よう vs ～みたい',
    explanation:
      '🔁 Cả hai đều có nghĩa **"giống như là", "có vẻ như"**, nhưng:\n\n' +
      '🧑‍🏫「～よう」:\n' +
      '・Trang trọng hơn\n' +
      '・Dùng trong văn viết hoặc hoàn cảnh lịch sự\n\n' +
      '🗣「～みたい」:\n' +
      '・Thân mật, thường dùng trong hội thoại\n' +
      '・Có thể dùng linh hoạt như một tính từ (VD: みたいな人／みたいに走る)\n\n' +
      '📌 Cả hai mẫu đều có thể mang nghĩa **suy đoán** hoặc **ví von**.',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo nhớ nhanh:\n' +
      '・よう = lịch sự, như giáo viên nói\n' +
      '・みたい = tự nhiên, như bạn bè nói\n\n' +
      '📖 Học kèm ví dụ:\n' +
      '・あの人は猫みたいだ。→ Người kia giống mèo thật.\n' +
      '・この音は爆発のようだ。→ Âm thanh này giống như tiếng nổ.\n\n',
  },
]

const GrammarYouMitaiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～よう、～みたい" grammarSections={grammarSections} />
}

export default GrammarYouMitaiScreen
