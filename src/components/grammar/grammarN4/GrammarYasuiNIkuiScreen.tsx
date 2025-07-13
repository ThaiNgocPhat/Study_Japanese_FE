import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ～やすい／～にくい',
    explanation:
      '📌 Mẫu ngữ pháp 「～やすい」dùng để diễn tả **dễ làm gì đó**, còn 「～にくい」dùng để nói **khó làm gì đó**.\n\n' +
      '🔑 Đây là cách nói cảm nhận của người nói về **mức độ dễ/difficult khi thực hiện một hành động** nào đó.\n\n' +
      '🥢 Rất hay dùng trong giao tiếp hằng ngày, đặc biệt khi nói về thực phẩm, hành vi, thói quen, hoặc sự thuận tiện.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🧩 Cấu trúc:\n\n' +
      '- Động từ (bỏ ます) + やすい（易い）→ dễ làm gì\n' +
      '- Động từ (bỏ ます) + にくい（難い）→ khó làm gì\n\n' +
      '📝 Ví dụ:\n' +
      '・飲みます → 飲みやすい／飲みにくい\n' +
      '・使います → 使いやすい／使いにくい\n' +
      '・食べます → 食べやすい／食べにくい\n' +
      '・分かります → 分かりにくい（khó hiểu）\n\n' +
      '📌 Cả hai đều chia theo động từ nhóm II vì bản thân chúng là động từ:',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 Ví dụ:\n\n' +
      '・このペンは書きやすいです。\n' +
      '→ Cây bút này dễ viết.\n\n' +
      '・この肉はかたくて、食べにくいです。\n' +
      '→ Miếng thịt này cứng quá, khó ăn.\n\n' +
      '・日本語の文法は分かりにくい。\n' +
      '→ Ngữ pháp tiếng Nhật khó hiểu.\n\n' +
      '・この椅子は座りやすいです。\n' +
      '→ Cái ghế này dễ ngồi (thoải mái).\n\n' +
      '・あの先生の話は聞きやすいです。\n' +
      '→ Lời giảng của thầy đó dễ nghe.',
  },
  {
    title: '4. Một số cách kết hợp và lưu ý',
    explanation:
      '💡 Có thể chia về thì:\n' +
      '・使いやすい → 使いやすかった／使いやすくない\n' +
      '・食べにくい → 食べにくかった／食べにくくない\n\n' +
      '⚠️ Không dùng với những động từ không mang tính hành động cụ thể như:\n' +
      '・ある、いる、できる\n\n' +
      '✅ Thường dùng trong mô tả sản phẩm, đánh giá:\n' +
      '・このアプリは使いやすい。\n' +
      '・この靴は歩きにくい。',
  },
]

const GrammarYasuiNIkuiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～やすい、～にくい" grammarSections={grammarSections} />
  )
}

export default GrammarYasuiNIkuiScreen
