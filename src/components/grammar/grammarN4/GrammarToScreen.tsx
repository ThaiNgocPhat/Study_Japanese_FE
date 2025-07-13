import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～と',
    explanation:
      '📌 Mẫu câu điều kiện「～と」dùng để diễn tả **khi vế A xảy ra thì vế B sẽ xảy ra ngay sau đó** – mang tính **tất yếu, tự nhiên hoặc lặp lại**.\n\n' +
      '👉 Thường dùng để mô tả **thói quen, hiện tượng tự nhiên, quy luật, cơ chế máy móc**.\n\n' +
      '📝 Ví dụ:\n' +
      '・このボタンを押すと、ドアが開きます。\n' +
      '→ Cứ bấm nút này là cửa sẽ mở.',
  },
  {
    title: '2. Cấu trúc sử dụng',
    explanation:
      '🧩 Cấu trúc chung:\n' +
      '[Mệnh đề điều kiện (thì hiện tại)] + と + [kết quả/tình huống xảy ra]\n\n' +
      '📌 Vế trước thường ở **thì hiện tại**.\n' +
      '⚠️ Không dùng thì quá khứ **trước と**.\n\n' +
      '✅ Dùng cho các tình huống:\n' +
      '- Hiện tượng tự nhiên\n' +
      '- Quy luật, nguyên lý máy móc\n' +
      '- Thói quen lặp đi lặp lại\n' +
      '- Kết quả tất yếu nếu A xảy ra',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📘 Một số ví dụ thực tế:\n\n' +
      '① このボタンを押すと、ドアが開きます。\n' +
      '→ Bấm nút này thì cửa sẽ mở.\n\n' +
      '② 勉強しないと、日本語が上手にならないよ。\n' +
      '→ Nếu không học thì không giỏi tiếng Nhật đâu.\n\n' +
      '③ 部屋が静かだと、よく勉強できる。\n' +
      '→ Phòng mà yên tĩnh thì học dễ vào.\n\n' +
      '④ 父は毎朝起きると、新聞を読みます。\n' +
      '→ Bố tôi cứ mỗi sáng dậy là lại đọc báo.\n\n' +
      '⑤ 最初の角を右にまがると、銀行が見えます。\n' +
      '→ Rẽ phải ở góc đầu tiên sẽ thấy ngân hàng.',
  },
  {
    title: '4. Lưu ý quan trọng',
    explanation:
      '⚠️ **Không dùng động từ ở thể quá khứ** trước 「～と」.\n' +
      '→ ❌ 行ったと、雨が降りました。\n' +
      '→ ✅ 行くと、雨が降ります。\n\n' +
      '📌 Không dùng với ý chí, mệnh lệnh, rủ rê ở vế sau.\n' +
      '→ ❌ 家に帰ると、テレビを見ましょう。\n' +
      '→ ✅ 家に帰ると、テレビを見ます。\n\n' +
      '✅ Vế sau là kết quả tự nhiên, logic – không do người nói điều khiển.',
  },
  {
    title: '5. Mẹo ghi nhớ và ứng dụng',
    explanation:
      '💡 Gợi ý học nhanh:\n' +
      '・Nghĩ theo dạng **"hễ A thì B"**.\n' +
      '・Áp dụng khi mô tả quy luật, thói quen, hướng dẫn máy móc.\n\n' +
      '🔁 So sánh nhanh:\n' +
      '・～と: tính quy luật, kết quả đương nhiên\n' +
      '・～ば／～たら: mang tính giả định, linh hoạt, cá nhân hơn\n\n' +
      '🧠 Học bằng cách đặt câu mô tả hành động thường ngày:\n' +
      '「Aすると、B」→ dễ nhớ và thực tế!',
  },
]

const GrammarToScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="Câu điều kiện ～と" grammarSections={grammarSections} />
  )
}

export default GrammarToScreen
