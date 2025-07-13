import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～ようとする／～ようとしない」',
    explanation:
      '📌 Mẫu câu 「～ようとする」 dùng để diễn tả **ý định sắp làm gì đó** hoặc **cố gắng làm gì đó ngay lúc đó**.\n' +
      '📌 「～ようとしない」 lại mang nghĩa **không hề có ý định làm gì**, hoặc **không chịu làm**.\n\n' +
      '🧠 Đây là mẫu ngữ pháp trung cấp, thường thấy trong giao tiếp tự nhiên và văn viết.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Động từ thể ý chí] + とする\n' +
      '🔹 [Động từ thể ý chí] + としない\n\n' +
      '📌 Động từ thể ý chí:\n' +
      '・Nhóm 1: 行く → 行こう\n' +
      '・Nhóm 2: 食べる → 食べよう\n' +
      '・Nhóm 3: する → しよう、来る → 来よう\n\n' +
      '📝 Ví dụ:\n' +
      '・出かけようとしたとき、雨が降ってきました。\n' +
      '→ Vừa định ra ngoài thì trời đổ mưa.\n\n' +
      '・彼は自分の間違いを認めようとしない。\n' +
      '→ Anh ấy không chịu thừa nhận lỗi của mình.',
  },
  {
    title: '3. Cách dùng 「～ようとする」',
    explanation:
      '🔸 Diễn tả **ý định sắp làm hành động gì đó**, thường dùng cho hành động ngắn, ngay trước khi xảy ra.\n' +
      '🔸 Có thể dùng ở quá khứ (～ようとした) để nói về điều định làm nhưng không làm được.\n\n' +
      '📝 Ví dụ:\n' +
      '・電車に乗ろうとしたら、ドアが閉まってしまった。\n' +
      '→ Vừa định lên tàu thì cửa đóng mất rồi.\n\n' +
      '・話しかけようとしたが、彼女はどこかへ行ってしまった。\n' +
      '→ Tôi định bắt chuyện nhưng cô ấy đã đi mất.',
  },
  {
    title: '4. Cách dùng 「～ようとしない」',
    explanation:
      '🔸 Diễn tả **sự phủ định về mặt ý chí** – tức là **không có ý định**, hoặc **không chịu làm gì đó**.\n' +
      '🔸 Thường dùng để chỉ trích hoặc nhận xét người khác.\n\n' +
      '📝 Ví dụ:\n' +
      '・息子は全然勉強しようとしない。\n' +
      '→ Con trai tôi chẳng chịu học hành gì cả.\n\n' +
      '・彼は謝ろうとしなかった。\n' +
      '→ Anh ta không hề có ý định xin lỗi.',
  },
]

const GrammarYouToSuruScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ようとする/ ようとしない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarYouToSuruScreen
