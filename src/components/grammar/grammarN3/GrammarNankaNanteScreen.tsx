import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu 「なんか」「なんて」',
    explanation:
      '📌 「なんか」 và 「なんて」 là những từ thường dùng trong **văn nói thân mật**, với nhiều sắc thái khác nhau như:\n' +
      '・Khiêm tốn hoặc phủ định (hạ thấp chính mình hoặc người/vật được nhắc đến)\n' +
      '・Thể hiện cảm xúc ngạc nhiên, bất ngờ, hoặc xem nhẹ\n' +
      '・Dùng để đưa ví dụ, liệt kê (giống như “như là...”, “kiểu như...”)',
  },
  {
    title: '2. 「なんか」 dùng để hạ thấp, xem nhẹ (phủ định/khiêm tốn)',
    explanation:
      '✏️ Dùng khi **xem nhẹ hoặc phủ nhận giá trị** của sự vật/sự việc, hoặc **khiêm tốn nói về bản thân**:\n\n' +
      '📝 Ví dụ:\n' +
      '・私**なんか**にできるわけがない。\n' +
      '→ Chuyện như tôi thì sao mà làm được.\n\n' +
      '・ゲーム**なんか**やってる場合じゃないよ！\n' +
      '→ Không phải lúc chơi game đâu đấy!\n\n' +
      '・彼**なんか**信じられない！\n' +
      '→ Người như anh ta thì không thể tin được!',
  },
  {
    title: '3. 「なんて」 dùng để thể hiện cảm xúc mạnh, ngạc nhiên, xem nhẹ',
    explanation:
      '✏️ Thường đi với các từ cảm thán hoặc diễn đạt sự ngạc nhiên, chán nản, bất ngờ:\n\n' +
      '📝 Ví dụ:\n' +
      '・彼がそんなことを言う**なんて**、信じられない！\n' +
      '→ Không thể tin được là anh ấy lại nói như vậy!\n\n' +
      '・君**なんて**大嫌い！\n' +
      '→ Tớ ghét cậu lắm luôn á!\n\n' +
      '・勉強**なんて**つまらない。\n' +
      '→ Học hành gì chán phèo à.',
  },
  {
    title: '4. Dùng 「なんか」/「なんて」 để đưa ví dụ (như là...)',
    explanation:
      '✏️ Có thể dùng như cách nói “ví dụ như…”, “kiểu như…” – thường để **đưa ví dụ nhẹ nhàng**:\n\n' +
      '📝 Ví dụ:\n' +
      '・寿司**なんか**どう？\n' +
      '→ Ăn sushi chẳng hạn, được không?\n\n' +
      '・犬や猫**なんて**かわいいよね。\n' +
      '→ Chó mèo kiểu như vậy dễ thương ghê ha.\n\n' +
      '・映画**なんか**見に行こうよ。\n' +
      '→ Đi xem phim hay gì đó đi.',
  },
  {
    title: '5. Lưu ý khi dùng 「なんか」「なんて」',
    explanation:
      '⚠️ Đây là những mẫu câu **rất khẩu ngữ**, không nên dùng trong các tình huống trang trọng hoặc văn viết nghiêm túc.\n\n' +
      '✅ Tuy nhiên, nếu sử dụng đúng cách, chúng sẽ giúp lời nói trở nên tự nhiên, giàu cảm xúc và gần gũi hơn trong hội thoại hàng ngày.',
  },
]

const GrammarNankaNanteScreen = () => {
  return <GrammarTemplateScreen screenTitle="～なんか、なんて" grammarSections={grammarSections} />
}

export default GrammarNankaNanteScreen
