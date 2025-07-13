import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarGaHoshiiDesuScreen = () => {
  const grammarSections = [
    {
      title: '1. ～がほしいです – Tôi muốn (có) gì đó',
      explanation:
        '👉 Cấu trúc: [Danh từ] + が + ほしいです。\n\n' +
        '📌 Dùng để diễn đạt **mong muốn sở hữu một đồ vật, người, điều gì đó.**\n\n' +
        '🔹 Ví dụ:\n' +
        '・くるまが ほしいです。→ Tôi muốn có xe hơi.\n' +
        '・あたらしいかばんが ほしいです。→ Tôi muốn một cái cặp mới.\n' +
        '・かわいいペットが ほしいです。→ Tôi muốn có một con thú cưng dễ thương.',
    },
    {
      title: '2. Thể phủ định: ～はほしくないです',
      explanation:
        '👉 Cấu trúc: [Danh từ] + は + ほしくないです。\n\n' +
        '📌 Dùng để diễn đạt **không muốn có cái gì đó**.\n\n' +
        '🔹 Ví dụ:\n' +
        '・くるまは ほしくないです。→ Tôi không muốn có xe hơi.\n' +
        '・おかねは ほしくないです。→ Tôi không cần tiền đâu!\n\n' +
        '💡 Lưu ý: Trong thể phủ định, 「が」 thường được thay bằng 「は」.',
    },
    {
      title: '3. Hỏi người khác có muốn gì không',
      explanation:
        '👉 Dùng mẫu câu: [Danh từ] + が + ほしいですか。\n\n' +
        '🔹 Ví dụ:\n' +
        '・プレゼントが ほしいですか。→ Bạn có muốn quà không?\n' +
        '・たんじょうびに なにが ほしいですか。→ Bạn muốn gì vào ngày sinh nhật?\n\n' +
        '🔸 Trả lời:\n' +
        '・はい、ほしいです。→ Vâng, tôi muốn.\n' +
        '・いいえ、ほしくないです。→ Không, tôi không muốn.',
    },
    {
      title: '4. Cách dùng lịch sự hơn: ～がほしいんですが',
      explanation:
        '👉 Dùng khi muốn **thể hiện mong muốn một cách lịch sự hơn**, thường là khi yêu cầu hoặc nhờ ai đó đưa cho mình thứ gì đó.\n\n' +
        '🔹 Ví dụ:\n' +
        '・すみません、あかいペンが ほしいんですが…\n→ Xin lỗi, tôi muốn xin một cây bút đỏ…\n' +
        '・しろいかみが ほしいんですが、ありますか。\n→ Tôi muốn có giấy trắng, anh/chị có không?',
    },
    {
      title: '5. Không dùng ほしいです cho mong muốn của người khác!',
      explanation:
        '⚠️ Không dùng 「ほしいです」 để nói về **mong muốn của người khác** nếu không thân thiết.\n\n' +
        '❌ Ví dụ sai:\n' +
        '・やまださんは くるまが ほしいです。\n→ (Không nên nói như vậy)\n\n' +
        '✅ Cách nói gián tiếp:\n' +
        '・やまださんは くるまを ほしがっています。\n→ Yamada (có vẻ) muốn có xe hơi.',
    },
    {
      title: '6. Ghi nhớ nhanh 🧠',
      explanation:
        '・「がほしいです」 → Tôi muốn gì đó\n' +
        '・「はほしくないです」 → Tôi không muốn gì đó\n' +
        '・「がほしいですか」 → Bạn có muốn không?\n\n' +
        '💬 Ví dụ thân mật:\n' +
        '・チョコレート、ほしい？→ Muốn ăn socola không?\n' +
        '・ううん、べつに…。→ Không hẳn đâu~',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～がほしいです：Tôi muốn cái gì đó 🎈"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarGaHoshiiDesuScreen
