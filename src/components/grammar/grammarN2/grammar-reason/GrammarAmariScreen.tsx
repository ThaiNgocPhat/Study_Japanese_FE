import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～あまり',
    explanation:
      '📌「～あまり」 diễn tả ý nghĩa “**vì quá… nên…**”, nhấn mạnh sự **quá mức** dẫn đến kết quả không tốt (thường tiêu cực).\n' +
      '👉 Dịch nghĩa: “Vì quá…”, “Đến mức mà…”.\n' +
      '⚠️ Kết quả thường là điều không mong muốn, tiêu cực hoặc bất ngờ.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Danh từ] + の + あまり\n' +
      '🔹 [Động từ thể từ điển] + あまり\n' +
      '🔹 [Tính từ -i / -na] + あまり\n\n' +
      '❗「～のあまり」 dùng khi đứng sau danh từ (thường là danh từ chỉ cảm xúc).',
  },
  {
    title: '3. Ý nghĩa và sắc thái',
    explanation:
      '🔎 Mẫu câu nhấn mạnh rằng một trạng thái hoặc cảm xúc vượt quá mức bình thường dẫn đến một kết quả.\n' +
      '🟡 Thường dùng với các từ chỉ cảm xúc, trạng thái như: 悲しみ（かなしみ）、緊張（きんちょう）、うれしさ、驚き（おどろき）…\n' +
      '❗ Không dùng cho những hành động thường ngày hay kết quả tích cực.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 彼はうれしさのあまり、涙を流しました。\n' +
      '→ Vì quá vui nên anh ấy đã rơi nước mắt.\n\n' +
      '2. 試験の前の日、緊張のあまり眠れなかった。\n' +
      '→ Vì quá căng thẳng trước kỳ thi nên tôi đã không ngủ được.\n\n' +
      '3. 驚きのあまり、声が出ませんでした。\n' +
      '→ Vì quá ngạc nhiên nên tôi không thốt nên lời.\n\n' +
      '4. 子供を失った悲しみのあまり、彼女は何日も泣いていた。\n' +
      '→ Vì quá đau buồn vì mất con nên cô ấy đã khóc nhiều ngày.',
  },
  {
    title: '5. So sánh với 「～すぎる」',
    explanation:
      '🔁 「～あまり」: nhấn mạnh nguyên nhân về cảm xúc quá mức → kết quả tiêu cực.\n' +
      '🔁 「～すぎる」: dùng để diễn tả hành động hoặc trạng thái vượt quá mức, không nhất thiết mang tính cảm xúc.\n\n' +
      '📝 Ví dụ:\n' +
      '・うれしさのあまり泣いた。\n' +
      '→ Vì quá vui nên đã khóc. (mạnh về cảm xúc)\n\n' +
      '・うれしすぎて泣いた。\n' +
      '→ Vui quá mức nên đã khóc. (trung tính hơn)',
  },
]

const GrammarAmariScreen = () => {
  return <GrammarTemplateScreen screenTitle="～あまり" grammarSections={grammarSections} />
}

export default GrammarAmariScreen
