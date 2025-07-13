import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarNdesuScreen = () => {
  const grammarSections = [
    {
      title: '1. Cấu trúc 「～んです」 là gì?',
      explanation:
        '📌 「～んです」 dùng để **giải thích nguyên nhân**, **hỏi lý do**, hoặc **nhấn mạnh thông tin**.\n\n' +
        'Cấu trúc:\n' +
        '・[Động từ thể thường] + んです\n' +
        '・[Tính từ -i] + んです\n' +
        '・[Tính từ -na / Danh từ] + なんです\n\n' +
        '📝 Ví dụ chia thể:\n' +
        '・いく → いくんです\n' +
        '・あつい → あついんです\n' +
        '・すきだ → すきなんです\n' +
        '・がくせいだ → がくせいなんです',
    },
    {
      title: '2. Hỏi lý do, nguyên nhân',
      explanation:
        '👉 Dùng để hỏi hoặc trả lời lý do tại sao điều gì đó xảy ra.\n\n' +
        '🔹 どうしたんですか。→ Bạn bị sao vậy?\n' +
        '🔹 あたまが いたいんです。→ Tôi bị đau đầu.\n' +
        '🔹 どうして おくれるんですか。→ Sao bạn đến muộn thế?\n' +
        '🔹 バスが なかなか こなかったんです。→ Xe buýt mãi không đến.',
    },
    {
      title: '3. Bổ sung, giải thích thêm',
      explanation:
        '👉 Dùng để **bổ sung lý do** hoặc **giải thích tình huống**.\n\n' +
        '🔹 きのう がっこうを やすみました。ねつが あったんです。\n' +
        '🔹 きもちが わるいんです。はやく かえっても いいですか。\n' +
        '🔹 ねこが 3ぴきも いるんですか？→ Bạn có tận 3 con mèo à?\n' +
        '🔹 そうです。だいすきなんです。→ Vâng, vì tôi rất thích mèo.',
    },
    {
      title: '4. Mở đầu câu chuyện, xin phép lịch sự',
      explanation:
        '👉 Dùng 「～んですが」 để mở đầu khi muốn nhờ vả, xin phép,…\n\n' +
        '🔹 すみません、おねがいが あるんですが…\n' +
        '→ Xin lỗi, tôi có chuyện muốn nhờ ạ...',
    },
    {
      title: '5. Lưu ý khi dùng',
      explanation:
        '⚠️ Không nên dùng 「～んですか」 để hỏi những điều **người đối diện không có trách nhiệm phải biết**.\n\n' +
        '❌ せんせい、マイクさんは まだこないんですか。\n' +
        '✅ せんせい、マイクさんは まだきていませんか。\n\n' +
        '💬 「～んです」 mang ý giải thích, nên thể hiện sự quan tâm hoặc chính đáng về ngữ cảnh.',
    },
    {
      title: '6. Cách nói thân mật (casual)',
      explanation:
        '👉 Dạng thân mật thường bỏ 「ん」 hoặc chuyển thành 「の」:\n\n' +
        '🔹 どうしたの？\n' +
        '🔹 あついの？\n' +
        '🔹 いかないの？',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～んです" grammarSections={grammarSections} />
}

export default GrammarNdesuScreen
