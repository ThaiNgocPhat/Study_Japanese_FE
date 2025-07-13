import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const GrammarNodeKaraScreen = () => {
  const grammarSections = [
    {
      title: '1. Cấu trúc với「～ので」– Vì... nên (khách quan, lịch sự)',
      explanation:
        '👉 [Động từ/Tính từ/Danh từ] + ので\n\n' +
        '📌 Dùng khi **giải thích lý do một cách khách quan**, lịch sự hơn「から」.\n\n' +
        '🔹 Ví dụ:\n' +
        '・ねつがあったので、がっこうをやすみました。\n　→ Vì bị sốt nên tôi nghỉ học.\n' +
        '・このカメラはべんりなので、これをかいました。\n　→ Vì máy ảnh tiện nên tôi mua nó.\n' +
        '・しゃちょうですので、まいにちいそがしいです。\n　→ Vì là giám đốc nên ngày nào cũng bận rộn.',
    },
    {
      title: '2. Cấu trúc với「～から」– Vì... nên (cảm xúc, thân mật)',
      explanation:
        '👉 [Động từ/Tính từ/Danh từ] + から\n\n' +
        '📌 Dùng khi **giải thích lý do gắn với cảm xúc**, thường dùng trong hội thoại thân mật, yêu cầu/nhờ vả.\n\n' +
        '🔹 Ví dụ:\n' +
        '・あしたはじゅぎょうがないから、いきません。\n　→ Mai không có tiết học nên tôi không đi.\n' +
        '・かのじょはきれいだから、にんきがあります。\n　→ Cô ấy đẹp nên rất được yêu thích.\n' +
        '・くすりをのみましたから、もうだいじょうぶです。\n　→ Vì tôi đã uống thuốc nên không sao nữa.',
    },
    {
      title: '3. Phân biệt「～ので」và「～から」',
      explanation:
        '📌 Điểm khác biệt:\n\n' +
        '🔹「ので」: Mang tính **trung lập**, dùng khi nói chuyện lịch sự, văn viết, hoặc khi chỉ nêu lý do.\n' +
        '🔹「から」: Mang tính **chủ quan**, thường đi với yêu cầu, đề nghị, hoặc dùng trong hội thoại thân mật.\n\n' +
        '🔸 Ví dụ đối chiếu:\n' +
        '・ねつがあるので、やすみます。\n　→ Tôi bị sốt nên nghỉ học (chỉ nêu sự thật).\n' +
        '・ねつがありますから、やすんでもいいですか。\n　→ Vì em bị sốt, em có thể nghỉ học không ạ? (đề nghị).',
    },
    {
      title: '4. Dạng rút gọn「～んで」',
      explanation:
        '👉 Đây là cách nói **thân mật, rút gọn** của「～ので」trong hội thoại.\n\n' +
        '🔹 Cấu trúc: Thể thường + んで\n\n' +
        '🔸 Ví dụ:\n' +
        '・ねつがあったんで、やすみました。\n・とてもあついんで、でかけません。',
    },
    {
      title: '5. Hỏi – Đáp về lý do: 「どうして～か」「～からです」',
      explanation:
        '👉 Dùng khi muốn hỏi “tại sao?” và trả lời bằng「～からです」\n\n' +
        '🔸 Ví dụ:\n' +
        'A: どうしてがっこうをやすみましたか。\n　→ Sao cậu nghỉ học?\n' +
        'B: ねつがあったからです。\n　→ Vì tớ bị sốt.\n\n' +
        'A: どうしてわかりましたか。\n　→ Sao bạn biết vậy?\n' +
        'B: きむらさんにきいたからです。\n　→ Vì mình đã hỏi anh Kimura.',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～ので、～から" grammarSections={grammarSections} />
}

export default GrammarNodeKaraScreen
