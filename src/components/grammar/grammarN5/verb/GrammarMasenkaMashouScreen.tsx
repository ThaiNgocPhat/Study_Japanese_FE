import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const grammarSections = [
  {
    title: '1. ～ませんか (Rủ rê, mời gọi)',
    explanation:
      'Mẫu câu ～ませんか được dùng khi bạn muốn **mời người khác cùng làm điều gì đó một cách lịch sự**. Nó thường mang sắc thái nhẹ nhàng, thể hiện sự quan tâm hoặc đề xuất một ý tưởng.\n\n' +
      '📌 Cấu trúc: Động từ thể ます (bỏ ます) + ませんか\n\n' +
      '📝 Ví dụ:\n' +
      '・ケーキをたべませんか。→ Bạn có muốn ăn bánh không?\n' +
      '・こんばん、えいがをみにいきませんか。→ Tối nay cùng đi xem phim nhé?\n' +
      '・おちゃをのみませんか。→ Mời bạn dùng một chút trà nhé?',
    examples: [],
  },
  {
    title: '2. ～ましょう (Cùng nhau làm gì)',
    explanation:
      'Mẫu ～ましょう được sử dụng để **đề nghị cùng làm một việc gì đó**, thể hiện sự chủ động và khuyến khích hành động tập thể. Thường được dùng để lên tinh thần hoặc khơi gợi sự hợp tác.\n\n' +
      '📌 Cấu trúc: Động từ thể ます (bỏ ます) + ましょう\n\n' +
      '📝 Ví dụ:\n' +
      '・にほんごをべんきょうしましょう。→ Cùng học tiếng Nhật nhé!\n' +
      '・ごはんをいっしょにたべましょう。→ Hãy ăn cơm cùng nhau nào!\n' +
      '・おたがいにがんばりましょう。→ Cùng nhau cố gắng nhé!',
    examples: [],
  },
  {
    title: '3. ～ましょうか (Đề nghị giúp đỡ ai đó)',
    explanation:
      'Mẫu ～ましょうか dùng để **đưa ra lời đề nghị giúp đỡ người khác** một cách chủ động và lịch sự. Người nói thể hiện ý định làm điều gì đó để hỗ trợ người nghe.\n\n' +
      '📌 Cấu trúc: Động từ thể ます (bỏ ます) + ましょうか\n\n' +
      '📝 Ví dụ:\n' +
      '・クラスのあとで、としょかんにいきましょうか。→ Tan học xong, mình cùng đến thư viện nhé?\n' +
      '・てつだいましょうか。→ Tôi giúp một tay nhé?\n' +
      '・かばんをもちましょうか。→ Để tôi xách cặp giúp bạn nhé.',
    examples: [],
  },
]

const GrammarMasenkaMashouScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ませんか、～ましょう、～ましょうか"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarMasenkaMashouScreen
