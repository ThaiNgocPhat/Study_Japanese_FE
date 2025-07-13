import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa & Cấu trúc',
    explanation:
      '📘 「～とおりに」 mang nghĩa: **"Làm theo như..."**, "Làm đúng theo..."\n\n' +
      '🧩 Dùng khi thực hiện hành động **dựa theo hướng dẫn, mẫu, lời nói, hành vi có sẵn**.\n\n' +
      '🛠 Cấu trúc:\n' +
      '・[Động từ thể từ điển / thể た] + とおりに\n' +
      '・[Danh từ + の] + とおりに',
  },
  {
    title: '2. Ví dụ với động từ',
    explanation:
      '📝 Ví dụ:\n' +
      '① 私が書いたとおりに、書いてください。\n' +
      '→ Hãy viết đúng như tôi đã viết.\n\n' +
      '② 彼がやるとおりに、やってください。\n' +
      '→ Hãy làm theo như anh ấy làm.\n\n' +
      '③ 見たとおりに、話してください。\n' +
      '→ Hãy kể lại đúng như những gì bạn đã thấy.',
  },
  {
    title: '3. Ví dụ với danh từ + の',
    explanation:
      '📌 Khi dùng với danh từ + の:\n\n' +
      '① この絵のとおりに、描いてください。\n' +
      '→ Hãy vẽ theo bức tranh này.\n\n' +
      '② 線のとおりに、紙を切ってください。\n' +
      '→ Hãy cắt giấy theo đường kẻ.\n\n' +
      '③ 説明書のとおりに、組み立てました。\n' +
      '→ Tôi đã lắp ráp theo sách hướng dẫn.',
  },
  {
    title: '4. Ghi nhớ nhanh',
    explanation:
      '✅ Dễ hiểu nếu bạn nhớ rằng 「とおりに」 giống như nói:\n' +
      '“**Làm theo đúng như…**”\n\n' +
      '🎯 Dùng khi:\n' +
      '・Nghe ai đó hướng dẫn\n' +
      '・Nhìn hình ảnh mẫu\n' +
      '・Đọc sách hướng dẫn (説明書: せつめいしょ)\n\n' +
      '🗂 Có thể thay đổi động từ ở nhiều thì: thể từ điển, thể た.',
  },
]

const GrammarTooriniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～とおりに" grammarSections={grammarSections} />
}

export default GrammarTooriniScreen
