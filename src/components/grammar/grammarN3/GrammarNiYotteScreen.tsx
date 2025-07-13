import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～によって',
    explanation:
      '📌「～によって」 là mẫu ngữ pháp thường dùng trong văn viết và trang trọng, mang nhiều ý nghĩa khác nhau tùy vào ngữ cảnh:\n' +
      '① **Bởi (ai đó)** – chỉ chủ thể của hành động (bị động)\n' +
      '② **Tùy vào / tùy theo** – thay đổi tùy từng trường hợp\n' +
      '③ **Do / Bởi vì** – nguyên nhân\n' +
      '④ **Bằng cách / thông qua** – phương pháp, phương tiện',
  },
  {
    title: '2. Cấu trúc và ý nghĩa chi tiết',
    explanation:
      '🔹 ① Chủ thể hành động (trong câu bị động):\n' +
      '[Danh từ] + によって\n\n' +
      '📝 例: この絵はピカソ**によって**描かれました。\n' +
      '→ Bức tranh này được vẽ bởi Picasso.\n\n' +
      '🔹 ② Tùy vào, phụ thuộc vào:\n' +
      '[Danh từ] + によって／によっては\n\n' +
      '📝 例: 人**によって**考え方が違います。\n' +
      '→ Tùy vào mỗi người mà cách suy nghĩ khác nhau.\n\n' +
      '🔹 ③ Do, vì (nguyên nhân):\n' +
      '[Danh từ] + によって\n\n' +
      '📝 例: 地震**によって**ビルが壊れた。\n' +
      '→ Tòa nhà bị sập do động đất.\n\n' +
      '🔹 ④ Bằng cách, thông qua:\n' +
      '[Danh từ] + によって\n\n' +
      '📝 例: インターネット**によって**、世界中とつながることができます。\n' +
      '→ Nhờ internet, có thể kết nối với khắp nơi trên thế giới.',
  },
  {
    title: '3. Một số dạng mở rộng',
    explanation:
      '🔸 ～によっては：trong một số trường hợp thì…\n' +
      '📝 例: 国**によっては**、法律が違います。\n' +
      '→ Tùy vào quốc gia mà pháp luật có thể khác nhau.\n\n' +
      '🔸 ～により（＝によって）：dạng trang trọng hơn, thường dùng trong văn viết.\n' +
      '📝 例: 台風**により**電車が止まりました。\n' +
      '→ Do bão mà tàu điện đã dừng lại.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ Không dùng ～によって để nói về những hành động của bản thân hay người quen một cách thông thường (nên dùng ～が hoặc ～は).\n\n' +
      '❌ わたし**によって**この本を書きました。\n' +
      '✔️ わたしがこの本を書きました。\n\n' +
      '📖 「～によって」 phù hợp hơn với phong cách trang trọng, báo chí, thông báo.',
  },
]

const GrammarNiYotteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～によって" grammarSections={grammarSections} />
}

export default GrammarNiYotteScreen
