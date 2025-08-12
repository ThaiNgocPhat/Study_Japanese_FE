const grammarN2 = [
  {
    id: 'bekida',
    title: '～べきだ / ～べきではない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～べきだ / ～べきではない',
        explanation:
          '📌 Mẫu ngữ pháp này dùng để thể hiện **ý kiến của người nói về việc nên hoặc không nên làm điều gì đó**.\n' +
          '👉 「～べきだ」= nên làm ~  ／「～べきではない」= không nên làm ~\n' +
          'Thể hiện nhận định mạnh mẽ về mặt đạo đức, lẽ thường, trách nhiệm.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển + べきだ / べきではない\n' +
          '🔸 ※ 例外（ngoại lệ）:\n' +
          '・する → すべきだ（hoặc）するべきだ\n' +
          '・しない → すべきではない（hoặc）するべきではない',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Dùng khi muốn đưa ra lời khuyên, quan điểm cá nhân mang tính đạo lý, đạo đức hoặc lẽ thường.\n' +
          '👉 Không dùng cho hành vi của cấp trên, người có vị thế cao hơn.\n' +
          '👉 「～べきではない」 dùng để nói về điều **không nên làm** vì lý do đạo đức, xã hội.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 学生はもっと勉強すべきだ。\n→ Học sinh nên học nhiều hơn.\n\n' +
          '2. 人をだますようなことをすべきではない。\n→ Không nên làm những việc như lừa gạt người khác.\n\n' +
          '3. 約束は守るべきだと思います。\n→ Tôi nghĩ là nên giữ lời hứa.\n\n' +
          '4. 社会人として時間を守るべきだ。\n→ Là người đi làm thì nên tuân thủ thời gian.\n\n' +
          '5. 無理をすべきではありません。\n→ Không nên cố quá sức.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ So sánh với「～たほうがいい」:\n' +
          '・「～たほうがいい」→ lời khuyên nhẹ nhàng, thân mật\n' +
          '・「～べきだ」→ mang tính đạo lý, nghiêm túc hơn\n\n' +
          '⚠️ Không dùng mẫu này để nói về **hành vi của người bề trên**, hoặc **mang tính ra lệnh** quá mạnh.',
      },
    ],
  },
  {
    id: 'kotoda',
    title: '～ことだ',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ことだ',
        explanation:
          '📌 Mẫu câu này dùng để **đưa ra lời khuyên hoặc gợi ý nên làm gì** trong một tình huống cụ thể.\n' +
          '👉 Thường dùng trong văn viết hoặc khi đưa ra lời khuyên một cách nhẹ nhàng, lịch sự.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển + ことだ\n' +
          '🔹 Động từ thể ない + ことだ\n\n' +
          '※ Không dùng với danh từ hay tính từ.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Diễn tả **việc nên/không nên làm** trong hoàn cảnh nhất định.\n' +
          '👉 Dùng khi người nói muốn nhấn mạnh "điều quan trọng" là nên làm gì hoặc không làm gì.\n' +
          '⚠️ Không dùng để miêu tả bản thân hành động đang xảy ra, mà là lời khuyên mang tính chung.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 風邪をひいたときは、無理をしないことだ。\n→ Khi bị cảm thì đừng nên làm việc quá sức.\n\n' +
          '2. 日本語が上手になりたければ、毎日練習することだ。\n→ Nếu muốn giỏi tiếng Nhật thì nên luyện tập mỗi ngày.\n\n' +
          '3. 太りたくなければ、夜遅く食べないことだ。\n→ Nếu không muốn tăng cân thì đừng ăn khuya.\n\n' +
          '4. 人の話はよく聞くことだ。\n→ Nên lắng nghe người khác nói.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ Đây là cách nói **mang tính khuyên nhủ nhẹ nhàng nhưng chắc chắn**.\n' +
          '✅ Dùng nhiều trong bài viết, sách vở, hoặc khi đưa lời khuyên trực tiếp.\n' +
          '❌ Không dùng để ra lệnh hay thể hiện ý chí mạnh như mệnh lệnh hay sai khiến.',
      },
    ],
  },
  {
    id: 'kotowanai',
    title: '～ことはない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ことはない',
        explanation:
          '📌「～ことはない」là mẫu câu dùng để **khuyên nhủ** hoặc **bày tỏ ý kiến rằng không cần thiết phải làm gì đó**.\n\n' +
          '👉 Thường được dùng để nói với ai đó rằng **không cần phải lo lắng hay làm việc gì đó quá mức**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển + ことはない\n\n' +
          '📝 Chỉ dùng với động từ, không dùng với tính từ hay danh từ.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '🟠 Diễn tả ý: **không cần thiết phải…**, **không việc gì phải…**\n' +
          '🟢 Thường dùng để khuyên ai đó nhẹ nhàng, không bắt buộc, không ra lệnh.\n' +
          '🟡 Dùng trong các tình huống thân mật hoặc cả văn viết, mang tính khích lệ, an ủi.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 心配することはないよ。\n→ Không cần lo đâu.\n\n' +
          '2. 無理に行くことはない。\n→ Không cần phải cố đi đâu.\n\n' +
          '3. 高いものを買うことはない。\n→ Không cần phải mua đồ đắt tiền.\n\n' +
          '4. 君が謝ることはない。\n→ Cậu không cần phải xin lỗi đâu.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ Đây là mẫu câu nhẹ nhàng, khuyên nhủ, không mang tính ép buộc.\n' +
          '✅ Có thể thay thế cho mẫu 「～なくてもいい」 nhưng mang tính **khẳng định mạnh hơn**.\n\n' +
          '📝 So sánh:\n' +
          '-「行くことはない」→ Hoàn toàn không cần đi.\n' +
          '-「行かなくてもいい」→ Không đi cũng được (mang tính lựa chọn hơn).',
      },
    ],
  },
  {
    id: 'monoda',
    title: '～ものだ',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ものだ',
        explanation:
          '📌 「～ものだ」 là mẫu câu đa nghĩa, tùy theo văn cảnh mà có thể biểu thị:\n' +
          '- Lẽ thường, điều hiển nhiên\n' +
          '- Cảm xúc, cảm thán mạnh mẽ\n' +
          '- Hồi tưởng quá khứ\n' +
          '👉 Đây là mẫu ngữ pháp trình độ N2, được dùng khá linh hoạt trong văn viết và nói.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển / thể ない + ものだ\n' +
          '🔹 Động từ thể quá khứ + ものだ\n\n' +
          '※ Không dùng với danh từ hay tính từ.',
      },
      {
        title: '3. Ý nghĩa & cách dùng chính',
        explanation:
          '① 💡 **Lẽ thường, điều hiển nhiên (bản chất tự nhiên, quy luật, đạo lý)**\n' +
          '　例：人間は年をとると忘れっぽくなるものだ。\n' +
          '　→ Con người khi có tuổi thì hay quên là chuyện thường.\n\n' +
          '② 😲 **Cảm thán, cảm xúc mạnh về điều gì đó (ngạc nhiên, khâm phục, xúc động)**\n' +
          '　例：時間が過ぎるのは早いものだ。\n' +
          '　→ Thời gian trôi thật nhanh quá.\n\n' +
          '③ 🕰 **Hồi tưởng lại thói quen, sự việc trong quá khứ**\n' +
          '　例：子どものころは、よく川で遊んだものだ。\n' +
          '　→ Hồi nhỏ tôi thường chơi ở bờ sông.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 若いころはよく夜遅くまで遊んだものだ。\n→ Hồi còn trẻ tôi hay chơi đến khuya.\n\n' +
          '2. 学生時代は毎日図書館で勉強したものだ。\n→ Thời sinh viên ngày nào tôi cũng học ở thư viện.\n\n' +
          '3. 本は人の心を豊かにするものだ。\n→ Sách là thứ làm phong phú tâm hồn con người.\n\n' +
          '4. 彼の努力には感心するものだ。\n→ Thật khâm phục sự nỗ lực của anh ấy.\n\n' +
          '5. 時間というのは、本当に早く過ぎるものですね。\n→ Thời gian trôi qua nhanh thật đấy nhỉ.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ Thường dùng với sắc thái cảm xúc, mang tính chủ quan.\n' +
          '✅ Không nên nhầm với 「ものです」 trong cách nói lịch sự thông thường.\n' +
          '❌ Không dùng để nêu sự thật khách quan đơn thuần.\n\n' +
          '📝 Một số cách nói biến thể:\n' +
          '- ～たものだ: hồi tưởng thói quen trong quá khứ\n' +
          '- ～というものだ: nhấn mạnh quan điểm hoặc phán đoán của người nói',
      },
    ],
  },
  {
    id: 'naimonoka',
    title: '～ないものか / ～ないものだろうか',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ないものか / ～ないものだろうか',
        explanation:
          '📌「～ないものか」hoặc「～ないものだろうか」là mẫu câu thể hiện mong muốn mạnh mẽ của người nói rằng:\n' +
          '“Liệu có thể… được không?”, “Giá mà…”, “Ước gì…”\n\n' +
          '👉 Mẫu này thường mang sắc thái **hy vọng**, **ao ước**, **thỉnh cầu**, thường được dùng trong văn viết hoặc trong lời nói có tính trang trọng.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể ない + ものか / ものだろうか\n\n' +
          '📍 Cả hai mẫu đều giống nhau về nghĩa, tuy nhiên:\n' +
          '-「～ないものだろうか」→ trang trọng hơn, lịch sự hơn\n' +
          '-「～ないものか」→ rút gọn, thường dùng trong khẩu ngữ hoặc văn viết không quá trang trọng',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '🟠 Diễn tả mong muốn, hy vọng rằng điều gì đó có thể xảy ra dù biết rằng không dễ dàng hoặc khó xảy ra.\n\n' +
          '🟢 Thường được dùng để thể hiện sự trăn trở, khát vọng cải thiện điều gì đó.\n' +
          '🟡 Mẫu này mang sắc thái **chủ quan**, thể hiện nội tâm hoặc cảm xúc mạnh của người nói.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 何とかしてこの問題を解決できないものか。\n→ Không cách nào giải quyết được vấn đề này hay sao?\n\n' +
          '2. もっと安くならないものだろうか。\n→ Ước gì nó có thể rẻ hơn một chút nhỉ.\n\n' +
          '3. 世界から戦争がなくならないものか。\n→ Ước gì chiến tranh có thể biến mất khỏi thế giới này.\n\n' +
          '4. 子どもたちが安心して遊べる公園ができないものだろうか。\n→ Ước gì có thể xây dựng công viên để trẻ em chơi an toàn.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ Thường dùng trong các bài phát biểu, viết luận hoặc lời văn trang trọng.\n' +
          '✅ Không dùng để yêu cầu trực tiếp người khác làm gì.\n' +
          '🚫 Không dùng trong các câu giao tiếp thông thường hàng ngày một cách quá suồng sã.\n\n' +
          '📝 So sánh:\n' +
          '-「～ないかな」→ văn nói, nhẹ nhàng hơn, ít trang trọng.\n' +
          '-「～ないものか」→ có phần trang trọng hơn và mang tính hy vọng/phản ánh sâu sắc hơn.',
      },
    ],
  },
  {
    id: 'tamonoda',
    title: '～たものだ',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～たものだ',
        explanation:
          '📌「～たものだ」là mẫu câu dùng để **hồi tưởng lại những việc đã từng làm trong quá khứ**, thể hiện sự **hoài niệm** hoặc **cảm xúc sâu sắc** về kỷ niệm đó.\n\n' +
          '👉 Thường dùng để nói về thói quen trong quá khứ hoặc cảm xúc khi nhớ lại những sự việc đã qua.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể た + ものだ\n\n' +
          '※ Không dùng để nói về hành động chỉ xảy ra một lần mà dùng cho những việc lặp lại hoặc kéo dài trong quá khứ.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '🟠 Diễn đạt một việc **từng làm thường xuyên**, là **thói quen trong quá khứ**.\n' +
          '🟡 Cũng có thể dùng để **thể hiện cảm xúc sâu sắc, cảm thán** về một sự kiện trong quá khứ.\n' +
          '🟢 Mang ý nghĩa hoài niệm, nhẹ nhàng, thường dùng khi kể chuyện.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 子どものころは、よく川で遊んだものだ。\n→ Hồi nhỏ tôi thường chơi ở sông suối lắm.\n\n' +
          '2. 学生時代は毎日遅くまで勉強したものだ。\n→ Hồi còn là sinh viên, ngày nào tôi cũng học đến khuya.\n\n' +
          '3. よく母に叱られたものだ。\n→ Tôi thường hay bị mẹ mắng lắm.\n\n' +
          '4. 昔はこの辺もにぎやかだったものだ。\n→ Ngày xưa khu này cũng náo nhiệt lắm.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅「～たものだ」khác với「～ていた」ở chỗ nhấn mạnh vào **cảm xúc hoài niệm** chứ không đơn thuần mô tả hành động.\n\n' +
          '✅ Còn có thể đi cùng với cảm thán như:\n- よく～たものだ: Ngày xưa thường hay…\n- 本当によく～たものだ: Thật sự là đã từng…',
      },
    ],
  },
  {
    id: 'nishitagatte',
    title: '～に従って',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に従って',
        explanation:
          '📌「～に従って」(にしたがって) là mẫu ngữ pháp diễn tả **sự thay đổi kéo theo một sự thay đổi khác**, thường mang ý nghĩa logic hoặc quy luật.\n' +
          'Nghĩa là: **Càng… thì càng…**, **Theo… thì…**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể từ điển] + に従って\n🔹 [Danh từ] + に従って\n\nVí dụ:\n- 経済の回復に従って (Theo sự phục hồi của kinh tế)\n- 気温が上がるに従って (Nhiệt độ càng tăng thì...)',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '🟠 Dùng khi một sự thay đổi xảy ra sẽ kéo theo một sự thay đổi khác một cách **logic và có quy luật**.\n' +
          '🟡 Vế sau không dùng để ra mệnh lệnh, ý chí hay mong muốn cá nhân.\n' +
          '🟢 Khác với「～につれて」ở chỗ:「～に従って」mạnh về tính quy luật, nguyên tắc hoặc kế hoạch có sẵn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 経済が回復するに従って、失業率も減ってきた。\n→ Khi kinh tế phục hồi thì tỷ lệ thất nghiệp cũng giảm.\n\n' +
          '2. 車が増えるに従って、交通事故も多くなった。\n→ Càng nhiều xe thì tai nạn giao thông cũng tăng.\n\n' +
          '3. 年を取るに従って、記憶力が低下していく。\n→ Càng lớn tuổi thì trí nhớ càng giảm.\n\n' +
          '4. 計画が進むに従って、問題点が明らかになった。\n→ Kế hoạch càng tiến triển thì các vấn đề càng trở nên rõ ràng.',
      },
      {
        title: '5. So sánh với các mẫu tương tự',
        explanation:
          '🔸「～につれて」: Nhấn mạnh vào **sự thay đổi tự nhiên**\n' +
          '🔹「～に従って」: Nhấn mạnh vào **sự thay đổi logic/quy luật hoặc theo tiến trình**\n\n' +
          '⚠️ Không dùng mệnh lệnh hay ý chí cá nhân ở vế sau.',
      },
    ],
  },

  {
    id: 'nitomonatte',
    title: '～に伴って',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に伴って',
        explanation:
          '📌「～に伴って（にともなって）」là mẫu ngữ pháp diễn tả **sự thay đổi kéo theo một sự thay đổi khác**, mang tính trang trọng, thường dùng trong văn viết hoặc các tình huống trang nghiêm.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Danh từ] + に伴って／に伴い\n🔹 [Động từ thể từ điển] + の + に伴って／に伴い\n\n※「に伴い」là dạng văn viết của「に伴って」\n\nVí dụ:\n- 経済の発展に伴って…\n- 人口が増えるのに伴って…',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '🔸 Diễn tả **một sự thay đổi dẫn đến một sự thay đổi khác xảy ra đồng thời**.\n' +
          '🔹 Cả hai vế thường là **sự việc mang tính khách quan, quy luật, tự nhiên**, không mang ý chí hay mệnh lệnh cá nhân.\n' +
          '🔸 Tương tự như「～につれて」và「～に従って」nhưng trang trọng hơn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 経済の発展に伴って、都市の人口も増えてきた。\n→ Cùng với sự phát triển kinh tế, dân số các thành phố cũng tăng lên.\n\n' +
          '2. 時代の変化に伴い、人々の考え方も変わった。\n→ Cùng với sự thay đổi của thời đại, cách nghĩ của con người cũng thay đổi.\n\n' +
          '3. 台風の接近に伴って、警報が出された。\n→ Cùng với việc cơn bão tiến đến gần, cảnh báo đã được phát ra。\n\n' +
          '4. 人口が増加するのに伴って、住宅の需要も高まっている。\n→ Cùng với sự gia tăng dân số, nhu cầu nhà ở cũng tăng cao.',
      },
      {
        title: '5. So sánh với các mẫu tương tự',
        explanation:
          '✅「～につれて」: Tự nhiên hơn, dùng trong cả văn nói.\n' +
          '✅「～に従って」: Nhấn mạnh logic hoặc quy luật.\n' +
          '✅「～に伴って」: Trang trọng hơn, thường dùng trong văn viết, các thông báo chính thức.',
      },
    ],
  },
  {
    id: 'nitsurete',
    title: '～につれて',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～につれて',
        explanation:
          '📌「～につれて」là mẫu ngữ pháp dùng để diễn tả sự **thay đổi song song giữa hai hiện tượng**.\n' +
          'Nghĩa là: **Càng… thì càng…** hoặc **Khi… thì… cũng thay đổi**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể từ điển] + につれて\n🔹 [Danh từ] + につれて\n\nVí dụ:\n- 年を取るにつれて (Càng có tuổi thì…)\n- 時間がたつにつれて (Thời gian trôi qua thì…)',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '🟠 Dùng khi **một sự thay đổi kéo theo sự thay đổi khác**.\n' +
          '🟡 Thường dùng với các động từ thể hiện sự thay đổi như 増える, 減る, 進む, 広がる...\n' +
          '🟢 Vế sau không dùng để ra mệnh lệnh, sai khiến hay ý chí của người nói.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 年を取るにつれて、体の調子が悪くなってきた。\n→ Càng lớn tuổi thì sức khỏe càng yếu đi.\n\n' +
          '2. 経済が発展するにつれて、人々の生活も豊かになってきた。\n→ Kinh tế càng phát triển thì đời sống người dân cũng càng sung túc hơn.\n\n' +
          '3. 時間がたつにつれて、その事件のことを忘れてしまった。\n→ Khi thời gian trôi qua thì tôi cũng quên dần sự việc đó.\n\n' +
          '4. 暗くなるにつれて、気温が下がってきた。\n→ Trời càng tối thì nhiệt độ cũng càng giảm xuống.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ Mẫu câu này gần giống với 「～にしたがって」, nhưng:\n' +
          '-「～につれて」: nhấn mạnh vào **sự thay đổi tự nhiên**.\n' +
          '-「～にしたがって」: nhấn mạnh vào **sự thay đổi có tính logic, hệ quả**.\n\n' +
          '⚠️ Không dùng với mệnh lệnh, sai khiến, hay mong muốn ở vế sau.',
      },
    ],
  },
  {
    id: 'shidaida',
    title: '～次第だ',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～次第だ',
        explanation:
          '📌「～次第だ」được dùng để giải thích lý do, kết quả hoặc nói rằng kết quả phụ thuộc vào điều gì đó. Đây là cách diễn đạt khá trang trọng, thường thấy trong văn viết hoặc các bài phát biểu.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể từ điển] / [Danh từ] + 次第だ\n\n🔸 Các dạng phổ biến:\n- ～というわけで、こうなった次第です。\n- ～によって、～するかどうかが決まる次第だ。\n\nVí dụ:\n- このたび、担当者が退職した次第で、ご連絡いたしました。',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ **① Giải thích lý do, hoàn cảnh (văn viết/lịch sự):**\n→ Dùng ở cuối câu để thể hiện lý do khiến sự việc trở nên như vậy.\n\n' +
          '✅ **② Phụ thuộc vào…:**\n→ Diễn đạt rằng kết quả, hành động trong tương lai phụ thuộc vào điều gì đó. Mang nghĩa "tùy thuộc vào…", gần giống với 「～によって」.\n\n' +
          '⚠️ Không dùng trong hội thoại thân mật hàng ngày.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 急用が入った次第で、今日は欠席させていただきます。\n→ Do có việc gấp phát sinh nên hôm nay tôi xin phép vắng mặt.\n\n' +
          '2. この書類を提出しなかったために、参加できなかった次第です。\n→ Vì không nộp tài liệu nên tôi đã không thể tham gia.\n\n' +
          '3. 成功するかどうかは、君の努力次第だ。\n→ Thành công hay không là phụ thuộc vào sự cố gắng của cậu.\n\n' +
          '4. 天候次第で、旅行を中止するかもしれません。\n→ Có thể hủy chuyến du lịch tùy thuộc vào thời tiết.',
      },
      {
        title: '5. Ghi nhớ',
        explanation:
          '🔹「～次第です」là cách kết câu lịch sự, dùng để giải thích hoặc trình bày lý do trang trọng.\n' +
          '🔸 Không nhầm với「～次第で／次第では」(một mẫu ngữ pháp khác mang nghĩa "tùy theo / tùy vào") sẽ được học riêng.',
      },
    ],
  },
  {
    id: 'totomoni',
    title: '～とともに',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～とともに',
        explanation:
          '📌「～とともに」là mẫu ngữ pháp mang nghĩa: **cùng với, đồng thời với, càng... càng...**.\n' +
          'Tùy vào ngữ cảnh, mẫu này có thể mang nhiều sắc thái khác nhau như: đồng thời, cùng xảy ra, hoặc sự thay đổi kéo theo thay đổi khác.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + とともに\n🔹 Động từ thể từ điển + とともに\n🔹 Biến đổi đi kèm (giống mẫu ～につれて／～に従って）\n\nVí dụ:\n- 家族とともに暮らす。\n- 年を取るとともに、体力が落ちてきた。',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ **Cùng với ai/cái gì**: Biểu thị hành động cùng thực hiện với ai đó.\n' +
          '　Ví dụ: 先生とともに研究を進めている。\n\n' +
          '✅ **Đồng thời xảy ra**: Hai sự việc xảy ra đồng thời.\n' +
          '　Ví dụ: 地震とともに火事が起こった。\n\n' +
          '✅ **Càng… càng…**: Một sự thay đổi kéo theo một sự thay đổi khác.\n' +
          '　Ví dụ: インターネットの普及とともに、情報も簡単に手に入るようになった。',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 技術の進歩とともに、生活が便利になった。\n→ Cùng với sự tiến bộ của công nghệ, cuộc sống trở nên tiện lợi hơn.\n\n' +
          '2. 年齢を重ねるとともに、考え方も変わってきた。\n→ Càng lớn tuổi thì cách suy nghĩ cũng thay đổi.\n\n' +
          '3. 家族とともに日本に移住した。\n→ Tôi đã chuyển đến Nhật sống cùng với gia đình.\n\n' +
          '4. 新製品の発売とともに、売り上げも伸びてきた。\n→ Cùng với việc ra mắt sản phẩm mới, doanh thu cũng tăng lên.',
      },
      {
        title: '5. Ghi nhớ',
        explanation:
          '🔸「～とともに」có thể đi với danh từ, động từ và dùng trong nhiều ngữ cảnh khác nhau: hành động đồng thời, thay đổi kéo theo thay đổi, hay đơn thuần là “cùng với”.\n' +
          '🔹 Đây là mẫu ngữ pháp thường gặp trong văn viết, tin tức, báo chí.',
      },
    ],
  },
  {
    id: 'bahodo',
    title: '～ば～ほど',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ば～ほど',
        explanation:
          '📌 Mẫu câu 「～ば～ほど」 được dùng để diễn tả ý nghĩa: **"Càng... thì càng..."**.\n' +
          '👉 Dùng để chỉ sự thay đổi tương ứng giữa hai vế trong câu.\n\n' +
          '🔄 Vế trước và vế sau thường dùng cùng một động từ, tính từ hoặc cấu trúc tương đồng để thể hiện sự tăng tiến.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ:\n' +
          '・Vれば Vるほど\n' +
          '　例: 見れば見るほど → Càng xem thì càng...\n\n' +
          '🔹 Tính từ -i:\n' +
          '・Aければ Aいほど\n' +
          '　例: 高ければ高いほど → Càng cao thì càng...\n\n' +
          '🔹 Tính từ -na:\n' +
          '・Aなら(ば) Aなほど\n' +
          '　例: 静かなら静かなほど → Càng yên tĩnh thì càng...\n\n' +
          '🔹 Danh từ:\n' +
          '・Nであればあるほど\n' +
          '　例: 学生であればあるほど → Càng là học sinh thì càng...',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. この本は読めば読むほど面白い。\n' +
          '→ Cuốn sách này càng đọc càng thú vị.\n\n' +
          '2. 日本語は勉強すればするほど上手になります。\n' +
          '→ Tiếng Nhật càng học càng giỏi.\n\n' +
          '3. 試験の点数は高ければ高いほどいいです。\n' +
          '→ Điểm thi càng cao càng tốt.\n\n' +
          '4. 静かなら静かなほど勉強に集中できます。\n' +
          '→ Càng yên tĩnh thì càng tập trung học được.\n\n' +
          '5. 学生であればあるほど、お金に困ることが多い。\n' +
          '→ Càng là sinh viên thì càng hay gặp khó khăn về tiền bạc.',
      },
      {
        title: '4. Lưu ý sử dụng',
        explanation:
          '🔎 Trong văn nói, có thể rút gọn lặp lại thành:\n' +
          '・安ければ安いほど → 安いほど\n' +
          '・行けば行くほど → 行くほど\n\n' +
          '📌 Thường dùng trong các câu miêu tả sự so sánh có tính chất liên tục, thay đổi theo mức độ.\n\n' +
          '⚠️ Không dùng cho những điều không có sự thay đổi tăng dần.',
      },
    ],
  },
  {
    id: 'bakarika',
    title: '～ばかりか',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ばかりか',
        explanation:
          '📌 Mẫu câu **～ばかりか** dùng để diễn đạt:\n' +
          '「Không chỉ A mà còn B」 hoặc 「Không những A mà thậm chí cả B」.\n\n' +
          '👉 Vế sau thường mang ý nghĩa cao hơn, vượt ngoài dự đoán, hoặc nằm ngoài phạm vi thông thường.\n\n' +
          '⚠️ Chủ yếu dùng trong văn viết, mang sắc thái trang trọng hơn so với 「～だけでなく」「～ばかりでなく」.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + ばかりか\n' +
          '🔹 Tính từ -i + ばかりか\n' +
          '🔹 Tính từ -na + な + ばかりか\n' +
          '🔹 Danh từ + ばかりか\n\n' +
          '📍 Lưu ý: Vế B thường ở dạng nhấn mạnh, và thể hiện mức độ cao hơn vế A.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. この店は値段が高いばかりか、店員の態度も悪い。\n' +
          '→ Cửa hàng này không chỉ giá cao mà thái độ nhân viên cũng tệ.\n\n' +
          '2. 彼は日本語ばかりか、英語やフランス語も話せる。\n' +
          '→ Anh ấy không chỉ nói được tiếng Nhật mà còn cả tiếng Anh và tiếng Pháp.\n\n' +
          '3. 事故では車ばかりか、家まで壊された。\n' +
          '→ Trong vụ tai nạn đó, không chỉ ô tô mà cả nhà cũng bị phá hỏng.\n\n' +
          '4. この野菜は栄養ばかりか、味もとてもいいです。\n' +
          '→ Rau này không chỉ dinh dưỡng mà vị cũng rất ngon.',
      },
      {
        title: '4. So sánh với các mẫu tương đương',
        explanation:
          '🔁 So với:\n\n' +
          '・～だけでなく／～ばかりでなく：Không chỉ... mà còn...\n' +
          '→ Gần nghĩa với ～ばかりか nhưng **dễ dùng hơn**, ít trang trọng hơn.\n\n' +
          '📌 ～ばかりか thường dùng khi vế sau mang tính **ngoài dự đoán**, **cao hơn**, hoặc **tác động mạnh** hơn vế trước.\n\n' +
          '✔ Ví dụ:\n' +
          '・彼は勉強ができるだけでなく、スポーツも得意です。\n' +
          '→ Bình thường, rõ ràng.\n\n' +
          '・彼は勉強ができるばかりか、先生に教えるほどだ。\n' +
          '→ Không những học giỏi mà còn giỏi đến mức dạy lại giáo viên.',
      },
    ],
  },
  {
    id: 'mononara',
    title: '～ものなら',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ものなら',
        explanation:
          '📌 「～ものなら」 được dùng để diễn tả **giả định khó xảy ra** hoặc gần như không thể xảy ra, với ý nghĩa: "**nếu có thể... thì (muốn/làm/đã làm)...**"\n\n' +
          '👉 Chủ yếu thể hiện nguyện vọng mạnh, ước muốn trong hoàn cảnh khó khăn hoặc không thực tế.\n' +
          '🧠 Dịch là: *Nếu có thể... thì...*',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể khả năng + ものなら\n' +
          '　例: 行けるものなら → Nếu có thể đi được thì...\n\n' +
          '🔹 Hoặc: Vる + ものなら (trong ngữ cảnh ít khả năng xảy ra)\n' +
          '　例: 戻れるものなら → Nếu có thể quay lại được thì...',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 戻れるものなら、10年前の自分に戻りたい。\n' +
          '→ Nếu có thể quay lại thì tôi muốn trở lại bản thân 10 năm trước.\n\n' +
          '2. 行けるものなら、今すぐ日本へ行きたい。\n' +
          '→ Nếu có thể đi thì tôi muốn đến Nhật ngay bây giờ.\n\n' +
          '3. 手伝えるものなら手伝ってあげたいけど、今は時間がない。\n' +
          '→ Nếu có thể giúp thì tôi muốn giúp bạn, nhưng bây giờ không có thời gian.\n\n' +
          '4. 飛べるものなら、空を飛んであなたに会いに行きたい。\n' +
          '→ Nếu có thể bay được thì tôi muốn bay đến gặp bạn.',
      },
      {
        title: '4. Lưu ý sử dụng',
        explanation:
          '⚠️ Thường dùng với những động từ mang tính **khó thực hiện**, **không thực tế**, hoặc **giả định phi thực tế**.\n\n' +
          '💡 Hay dùng trong văn viết, lời nói cảm xúc hoặc trong văn phong giàu biểu cảm.\n\n' +
          '🔁 Có thể đi kèm với các từ như:\n' +
          '・できるものなら (nếu có thể làm được)\n' +
          '・やれるものなら (nếu có thể làm thử)',
      },
    ],
  },
  {
    id: 'monono',
    title: '～ものの',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ものの',
        explanation:
          '📌 Mẫu câu **「～ものの」** dùng để diễn đạt ý nghĩa: **"Tuy... nhưng..."**, thể hiện sự **trái ngược giữa hai vế**.\n\n' +
          '👉 Dù điều gì đó là đúng ở vế đầu, **kết quả/vế sau lại không như mong đợi, không tương xứng**.\n' +
          '🧠 Cùng nghĩa với: "けれども", "のに", nhưng **văn viết và trang trọng hơn**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸 Động từ thể thường + ものの\n' +
          '🔸 Tính từ -i + ものの\n' +
          '🔸 Tính từ -na + な + ものの\n' +
          '🔸 Danh từ + である + ものの\n\n' +
          '📌 Chủ yếu dùng trong **văn viết, bài luận, email lịch sự, báo chí**.',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Dùng để thể hiện rằng **vế 1 là sự thật**, tuy nhiên **kết quả ở vế 2 lại không như kỳ vọng hoặc ngược lại**.\n\n' +
          '🔍 Gần nghĩa với 「～けれども」「～が」「～のに」 nhưng mang sắc thái **lý trí, khách quan** hơn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 日本語は勉強したものの、全然話せません。\n' +
          '→ Tuy đã học tiếng Nhật nhưng hoàn toàn không nói được.\n\n' +
          '2. 給料は高いものの、仕事はとてもきついです。\n' +
          '→ Tuy lương cao nhưng công việc rất vất vả.\n\n' +
          '3. 手術は成功したものの、まだ安心できない。\n' +
          '→ Tuy ca phẫu thuật thành công nhưng vẫn chưa thể yên tâm.\n\n' +
          '4. 彼の話は理解できたものの、納得はできなかった。\n' +
          '→ Dù hiểu câu chuyện của anh ta, nhưng tôi không thể chấp nhận được.',
      },
      {
        title: '5. Mẹo ghi nhớ',
        explanation:
          '💡 "～ものの" giống như "のに", nhưng:\n' +
          '・Trang trọng hơn, thiên về văn viết.\n' +
          '・Thường không dùng với mệnh lệnh hay rủ rê ở vế sau.\n\n' +
          '🎯 Thường thấy trong sách báo, các đoạn viết phân tích, báo cáo.',
      },
    ],
  },
  {
    id: 'nagaramo',
    title: '～ながら（も）',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ながら（も）',
        explanation:
          '📌 Mẫu câu 「～ながら（も）」 dùng để diễn tả **sự trái ngược giữa hai vế câu**, mang nghĩa: "**Tuy... nhưng...**".\n\n' +
          '👉 Vế trước và vế sau có chủ ngữ giống nhau. Dù giữ nguyên một trạng thái nào đó, nhưng lại có một hành động hay trạng thái trái ngược xảy ra.\n' +
          '🔸 Đây là mẫu câu thường dùng trong **văn viết hoặc văn phong trang trọng**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ dạng ます (bỏ ます) + ながら（も）\n' +
          '🔹 Tính từ -i + ながら（も）\n' +
          '🔹 Tính từ -na (bỏ な) + ながら（も）\n' +
          '🔹 Danh từ + であり + ながら（も）\n\n' +
          '📌 Tuy nhiên, thường gặp nhất là với **danh từ** và **tính từ**.',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '✅ Diễn tả sự **đối lập nhẹ nhàng** giữa hai trạng thái.\n' +
          '・Diễn tả sự **nỗ lực, cố gắng vượt qua hạn chế** nào đó\n' +
          '・Mang sắc thái **khen ngợi, đánh giá tích cực** hơn là chỉ trích\n\n' +
          '📌 So với 「～のに」 hay 「～けれど」 thì 「～ながらも」 mang tính **mềm mại, lịch sự** hơn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 子どもながらも、いろいろと気を使っている。\n' +
          '→ Tuy là trẻ con nhưng nó cũng để ý rất nhiều điều.\n\n' +
          '2. 残念ながら、今回は不合格でした。\n' +
          '→ Rất tiếc là lần này đã trượt rồi.\n\n' +
          '3. 彼は学生でありながら、自分の会社を経営している。\n' +
          '→ Tuy là sinh viên nhưng anh ấy lại đang điều hành công ty riêng.\n\n' +
          '4. 忙しいながらも、家族との時間を大切にしている。\n' +
          '→ Tuy bận rộn nhưng vẫn trân trọng thời gian bên gia đình.',
      },
      {
        title: '5. Mẹo ghi nhớ và lưu ý',
        explanation:
          '💡 Một số mẫu cố định thường gặp:\n' +
          '・子どもながら\n' +
          '・残念ながら\n' +
          '・知りながら\n\n' +
          '📌 Không dùng với động từ hành động mạnh (như 行く、飲む) trừ khi muốn diễn tả sự đối lập rõ rệt.\n\n' +
          '⚠️ Đừng nhầm với 「～ながら」 dùng trong mẫu **vừa… vừa…** (ngữ pháp N4).',
      },
    ],
  },
  {
    id: 'naikotoniwa',
    title: '～ないことには',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ないことには',
        explanation:
          '📌 Mẫu câu **「～ないことには」** diễn tả ý nghĩa: **"Nếu không..., thì không thể..."**, "**nếu không có A thì B sẽ không xảy ra / không thể thực hiện được**".\n\n' +
          '👉 Dùng khi muốn nhấn mạnh **điều kiện cần thiết** để điều gì đó xảy ra.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể ない] + ことには\n' +
          '🔹 [Tính từ -い (phủ định: ～くない)] + ことには\n' +
          '🔹 [Tính từ -な (phủ định: ～でない)] + ことには\n' +
          '🔹 [Danh từ + でない] + ことには\n\n' +
          '📌 Chủ yếu dùng với **động từ phủ định**.',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Nhấn mạnh rằng **nếu không có điều kiện A**, thì **kết quả hoặc hành động B là không thể** xảy ra, không thực hiện được, hoặc không biết rõ.\n\n' +
          '❗ Vế sau thường là câu phủ định, biểu hiện **khó khăn, bất khả thi, hoặc không rõ ràng**.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. お金がないことには、この計画は実行できない。\n' +
          '→ Nếu không có tiền thì kế hoạch này không thể thực hiện được.\n\n' +
          '2. 実際に会ってみないことには、どんな人か分からない。\n' +
          '→ Nếu không gặp trực tiếp thì không thể biết là người như thế nào.\n\n' +
          '3. 練習しないことには、上手になりませんよ。\n' +
          '→ Nếu không luyện tập thì không thể giỏi lên được đâu.\n\n' +
          '4. 資格がないことには、この仕事はできない。\n' +
          '→ Nếu không có bằng cấp thì không thể làm công việc này.',
      },
      {
        title: '5. Mẹo ghi nhớ',
        explanation:
          '💡 Ghi nhớ mẫu 「～ないことには」 luôn gắn với **điều kiện phủ định** ở vế đầu và **kết quả tiêu cực** hoặc **không thể** ở vế sau.\n\n' +
          '👉 Là cách nói nhấn mạnh **điều kiện tiên quyết**.\n' +
          '🚫 Không dùng với các hành động có thể xảy ra ngẫu nhiên hoặc không quan trọng.',
      },
    ],
  },
  {
    id: 'nishitewa',
    title: '～にしては',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～にしては',
        explanation:
          '📌 Mẫu câu 「～にしては」 dùng để diễn tả **một điều gì đó khác với điều được dự đoán** dựa trên một thông tin, sự thật, tiêu chuẩn nào đó. \n\n' +
          '👉 Nghĩa tiếng Việt thường là: **“Dù là…, vậy mà…” / “So với…, thì…”**.\n\n' +
          '🔸 Mẫu này thể hiện sự **trái với lẽ thông thường** hoặc trái với **dự đoán logic**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + にしては\n' +
          '🔹 Động từ thể thường + にしては\n\n' +
          '✅ Không dùng với tính từ.\n' +
          '✅ Không đi với các danh từ không thể đo lường hoặc không rõ tiêu chuẩn (ví dụ: 明日、今週...)',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔹 Mẫu này thường dùng để **so sánh với kỳ vọng thông thường** hoặc **những gì người nói tưởng tượng ra** dựa trên thông tin có sẵn.\n\n' +
          '📌 So sánh với:\n' +
          '・「～わりに」: linh hoạt hơn, dùng được cả với tính từ.\n' +
          '・「～にしては」: dùng khi có **tiêu chuẩn rõ ràng** để so sánh (tuổi tác, kinh nghiệm, nghề nghiệp,...)',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 初めてにしては、よくできましたね。\n' +
          '→ Dù là lần đầu nhưng làm tốt đấy nhỉ.\n\n' +
          '2. 外国人にしては日本語が上手ですね。\n' +
          '→ Dù là người nước ngoài nhưng tiếng Nhật giỏi quá.\n\n' +
          '3. 子どもにしては、難しいことをよく知っている。\n' +
          '→ Dù là trẻ con nhưng biết được nhiều điều khó thật.\n\n' +
          '4. たくさん練習したにしては、あまり上手じゃない。\n' +
          '→ Dù luyện tập nhiều mà vẫn chưa giỏi lắm.',
      },
      {
        title: '5. Mẹo ghi nhớ và lưu ý',
        explanation:
          '💡 Những từ thường đi kèm:\n' +
          '・初めてにしては\n' +
          '・子どもにしては\n' +
          '・外国人にしては\n' +
          '・新人にしては\n\n' +
          '⚠️ Không nhầm với「～として」 (với tư cách là) hoặc「～のに」 (mặc dù).\n' +
          '⚠️ Vế sau không nên là mệnh lệnh hoặc yêu cầu trực tiếp.',
      },
    ],
  },
  {
    id: 'tatokorode',
    title: '～たところで',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～たところで',
        explanation:
          '📌 Mẫu câu **「～たところで」** dùng để diễn đạt ý nghĩa: **"Dù có làm A thì cũng vô ích / không thay đổi được gì / không có kết quả tốt"**.\n\n' +
          '👉 Nhấn mạnh sự **tiêu cực**, **bất lực** hoặc **vô nghĩa** của hành động ở vế đầu.\n' +
          '🧊 Tương đương với: "Dù cho...", "Dẫu có...", "Cho dù..." nhưng với sắc thái **bi quan, thất vọng**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể た] + ところで\n\n' +
          '📌 Thường đi với các động từ thể hiện hành động nỗ lực, nhưng **vế sau không theo kỳ vọng**.',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Dùng để nhấn mạnh rằng **kết quả không thay đổi** dù có làm điều gì đó.\n' +
          '❗ Vế sau thường là **phủ định** hoặc mang ý nghĩa **tiêu cực / vô ích**.\n\n' +
          '⛔ Không dùng trong những câu mang nghĩa kỳ vọng, khích lệ.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 今さら謝ったところで、許してもらえないだろう。\n' +
          '→ Dù bây giờ có xin lỗi thì chắc cũng không được tha thứ đâu.\n\n' +
          '2. 一生懸命勉強したところで、合格できるとは限らない。\n' +
          '→ Dù có học hành chăm chỉ thì cũng chưa chắc đã đậu.\n\n' +
          '3. 本当のことを言ったところで、誰も信じてくれない。\n' +
          '→ Dù tôi có nói thật thì cũng không ai tin cả.\n\n' +
          '4. 急いだところで、間に合わないよ。\n' +
          '→ Dù có vội thì cũng không kịp đâu.',
      },
      {
        title: '5. Ghi nhớ nhanh',
        explanation:
          '💡 Hãy nhớ:\n' +
          '・「～たところで」 thường đi với các vế sau mang nghĩa **phủ định, không kết quả**.\n' +
          '・Dùng khi bạn muốn diễn đạt sự **bất lực**, hoặc **mất hy vọng** về điều gì đó.\n\n' +
          '🆘 Tránh dùng trong văn phong tích cực hoặc khuyến khích người khác.',
      },
    ],
  },
  {
    id: 'toittomo',
    title: '～といっても',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～といっても',
        explanation:
          '📌 Mẫu câu 「～といっても」 được dùng để **đính chính**, **nêu ngoại lệ** hoặc **giảm nhẹ ý nghĩa** của điều vừa được nói ra.\n\n' +
          '👉 Dịch nghĩa tiếng Việt thường là: **"Nói là... nhưng mà..." / "Tuy nói là... nhưng..."**.\n\n' +
          '🔸 Thường dùng khi thực tế **khác với những gì người nghe có thể tưởng tượng hoặc kỳ vọng**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Danh từ / Động từ / Tính từ ở thể thường] + といっても\n\n' +
          '✅ Không cần chia đặc biệt, chỉ cần ở dạng thường (ふつうけい).',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔸 Dùng để **giảm nhẹ**, **nói lại thực tế thấp hơn** hoặc **ít đặc biệt hơn** so với kỳ vọng.\n\n' +
          '🔹 Người nói thường đưa ra thông tin A, sau đó dùng ～といっても để điều chỉnh kỳ vọng về A.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 日本に住んでいるといっても、まだ半年だけです。\n' +
          '→ Nói là sống ở Nhật, nhưng thực ra mới chỉ có nửa năm thôi.\n\n' +
          '2. 旅行といっても、近くの温泉に行っただけです。\n' +
          '→ Nói là đi du lịch, nhưng chỉ là đi suối nước nóng gần nhà thôi.\n\n' +
          '3. 忙しいといっても、寝る時間はちゃんとあります。\n' +
          '→ Nói là bận, nhưng vẫn có thời gian ngủ đầy đủ.\n\n' +
          '4. 料理ができるといっても、簡単なものしか作れません。\n' +
          '→ Nói là biết nấu ăn, nhưng chỉ nấu được mấy món đơn giản thôi.',
      },
      {
        title: '5. So sánh và lưu ý',
        explanation:
          '📌 So sánh với 「～けど」「～が」:\n' +
          '・「～といっても」 nhấn mạnh hơn vào **việc thực tế khác với tưởng tượng**.\n\n' +
          '💡 Mẹo nhớ:\n' +
          '・Dùng khi muốn **giảm nhẹ ấn tượng** do câu trước tạo ra.\n\n' +
          '⚠️ Vế sau không nên mang tính đối lập hoàn toàn, mà là điều chỉnh/khiêm tốn nhẹ nhàng.',
      },
    ],
  },
  {
    id: 'to-shitara',
    title: '～としたら / ～とすれば',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～としたら / ～とすれば',
        explanation:
          '📌 「～としたら / ～とすれば」 là mẫu câu diễn tả **giả định**, mang ý nghĩa: "**nếu mà..., giả sử mà...**".\n\n' +
          '👉 Thường dùng để đưa ra suy đoán, đánh giá hoặc kết luận trong một hoàn cảnh giả định.\n\n' +
          '🧠 Dịch là: *Nếu mà..., giả sử mà... thì...*',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Thể thường (普通形)] + としたら / とすれば\n\n' +
          'Ví dụ:\n' +
          '・雨が降るとしたら、試合は中止になるだろう。\n' +
          '→ Nếu mà trời mưa thì trận đấu chắc sẽ bị hủy.\n\n' +
          '・彼が来ないとすれば、私たちだけで始めましょう。\n' +
          '→ Nếu anh ấy không đến thì chúng ta bắt đầu trước nhé.',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Dùng khi người nói muốn đưa ra **giả định không chắc chắn** hoặc **điều kiện giả sử**, để từ đó suy ra kết luận, hành động, đánh giá.\n\n' +
          '🔁 So với 「～たら」 hay 「～ば」 thì 「～としたら / ～とすれば」 **mang tính giả định cao hơn** và thường không xảy ra trong thực tế.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 留学するとしたら、日本に行きたいです。\n' +
          '→ Nếu mà đi du học thì tôi muốn đến Nhật.\n\n' +
          '2. 明日地震が起こるとすれば、どうすればいいですか？\n' +
          '→ Nếu giả sử ngày mai có động đất thì nên làm gì?\n\n' +
          '3. この話が本当だとしたら、彼はすごい人だ。\n' +
          '→ Nếu câu chuyện này là thật thì anh ấy là người giỏi thật đấy.\n\n' +
          '4. 宝くじに当たったとすれば、何を買いますか？\n' +
          '→ Nếu mà trúng xổ số thì bạn sẽ mua gì?',
      },
      {
        title: '5. So sánh ～としたら／～とすれば và ～たら／～なら',
        explanation:
          '🔹 ～としたら / ～とすれば: mang tính **giả định cao**, thiên về **suy đoán** hoặc **điều kiện không chắc có thật**.\n' +
          '🔹 ～たら / ～なら: có thể dùng cho **điều kiện thực tế hoặc sẽ xảy ra** trong tương lai.\n\n' +
          '💡 Ví dụ:\n' +
          '・明日雨が降ったら、試合は中止です。\n' +
          '→ Nếu ngày mai mưa (và có thể mưa), thì trận đấu sẽ bị hủy. (thực tế)\n\n' +
          '・明日雨が降るとしたら、どうしますか？\n' +
          '→ Giả sử ngày mai mưa (chỉ là giả định), thì bạn sẽ làm gì?',
      },
    ],
  },
  {
    id: 'toshitara',
    title: '～としたら / ～とすれば',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～としたら / ～とすれば',
        explanation:
          '📌 「～としたら / ～とすれば」 là mẫu câu diễn tả **giả định**, mang ý nghĩa: "**nếu mà..., giả sử mà...**".\n\n' +
          '👉 Thường dùng để đưa ra suy đoán, đánh giá hoặc kết luận trong một hoàn cảnh giả định.\n\n' +
          '🧠 Dịch là: *Nếu mà..., giả sử mà... thì...*',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Thể thường (普通形)] + としたら / とすれば\n\n' +
          'Ví dụ:\n' +
          '・雨が降るとしたら、試合は中止になるだろう。\n' +
          '→ Nếu mà trời mưa thì trận đấu chắc sẽ bị hủy.\n\n' +
          '・彼が来ないとすれば、私たちだけで始めましょう。\n' +
          '→ Nếu anh ấy không đến thì chúng ta bắt đầu trước nhé.',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Dùng khi người nói muốn đưa ra **giả định không chắc chắn** hoặc **điều kiện giả sử**, để từ đó suy ra kết luận, hành động, đánh giá。\n\n' +
          '🔁 So với 「～たら」 hay 「～ば」 thì 「～としたら / ～とすれば」 **mang tính giả định cao hơn** và thường không xảy ra trong thực tế.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 留学するとしたら、日本に行きたいです。\n' +
          '→ Nếu mà đi du học thì tôi muốn đến Nhật.\n\n' +
          '2. 明日地震が起こるとすれば、どうすればいいですか？\n' +
          '→ Nếu giả sử ngày mai có động đất thì nên làm gì?\n\n' +
          '3. この話が本当だとしたら、彼はすごい人だ。\n' +
          '→ Nếu câu chuyện này là thật thì anh ấy là người giỏi thật đấy.\n\n' +
          '4. 宝くじに当たったとすれば、何を買いますか？\n' +
          '→ Nếu mà trúng xổ số thì bạn sẽ mua gì?',
      },
      {
        title: '5. So sánh ～としたら／～とすれば và ～たら／～なら',
        explanation:
          '🔹 ～としたら / ～とすれば: mang tính **giả định cao**, thiên về **suy đoán** hoặc **điều kiện không chắc có thật**.\n' +
          '🔹 ～たら / ～なら: có thể dùng cho **điều kiện thực tế hoặc sẽ xảy ra** trong tương lai.\n\n' +
          '💡 Ví dụ:\n' +
          '・明日雨が降ったら、試合は中止です。\n' +
          '→ Nếu ngày mai mưa (và có thể mưa), thì trận đấu sẽ bị hủy. (thực tế)\n\n' +
          '・明日雨が降るとしたら、どうしますか？\n' +
          '→ Giả sử ngày mai mưa (chỉ là giả định), thì bạn sẽ làm gì?',
      },
    ],
  },
  {
    id: 'hanmen',
    title: '～反面',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～反面',
        explanation:
          '📌「～反面」dùng để diễn tả **hai mặt trái ngược nhau** của cùng một sự việc, sự vật hoặc hiện tượng.\n\n' +
          '👉 Nghĩa: "mặt khác thì...", "ngược lại thì..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸 [Động từ thể thường / Tính từ -i / Tính từ -na + な / Danh từ + である] + 反面',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Diễn tả **mặt đối lập** của cùng một vấn đề, thường dùng để **đánh giá hai mặt tích cực và tiêu cực**.\n' +
          '✅ Thường dùng trong **văn viết, bài phân tích, nhận xét**.\n' +
          '⚠️ Vế sau không dùng mệnh lệnh, yêu cầu.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. この仕事は給料が高い反面、とても忙しいです。\n' +
          '→ Công việc này lương cao, nhưng mặt khác lại rất bận.\n\n' +
          '2. 一人暮らしは自由な反面、さびしさもあります。\n' +
          '→ Sống một mình thì tự do, nhưng mặt khác cũng cô đơn.\n\n' +
          '3. このパソコンは性能がいい反面、値段も高いです。\n' +
          '→ Máy tính này hiệu năng tốt, nhưng giá cũng cao.\n\n' +
          '4. 日本語を勉強するのは楽しい反面、難しいところもあります。\n' +
          '→ Học tiếng Nhật thì vui, nhưng cũng có chỗ khó.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔹「～一方で」cũng dùng để nêu hai mặt đối lập hoặc song song, nhưng có thể bao hàm cả **sự đồng thời** hoặc **hai tình huống riêng biệt**.\n\n' +
          '📍Ví dụ:\n' +
          '・彼は先生として厳しい反面、生徒にはとても人気がある。\n' +
          '→ Anh ấy nghiêm khắc với tư cách là thầy giáo, nhưng lại rất được học sinh yêu thích。\n\n' +
          '・彼は教師の一方で、作家としても活躍している。\n' +
          '→ Anh ấy vừa là giáo viên, vừa hoạt động với tư cách là nhà văn.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '🔸 Chủ yếu dùng trong phân tích, đánh giá hai mặt của một vấn đề.\n' +
          '🔸 Không dùng để nối hai sự kiện không liên quan.\n' +
          '🔸 Không dùng với mệnh lệnh, ý chí, yêu cầu ở vế sau.',
      },
    ],
  },
  {
    id: 'ippoude',
    title: '～一方で',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～一方で',
        explanation:
          '📌「～一方で」được dùng để thể hiện sự **đối lập, so sánh hai mặt** của một vấn đề, hoặc để **nêu hai tình huống song song** tồn tại.\n\n' +
          '👉 Nghĩa: "mặt khác thì...", "trong khi...", "đồng thời..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸【Động từ thể thường / Tính từ -i / Tính từ -na + な / Danh từ + である】 + 一方で',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Dùng để **so sánh đối lập hai khía cạnh** của cùng một sự việc hoặc hai sự việc khác nhau.\n' +
          '✅ Cũng được dùng để **diễn tả hai hành động, trạng thái song song tồn tại** (không nhất thiết đối lập).\n' +
          '📌 Có thể đứng giữa hoặc đầu câu, nhưng thường dùng ở văn viết hoặc cách nói trang trọng.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 都会の生活は便利な一方で、ストレスも多い。\n' +
          '→ Cuộc sống thành phố tuy tiện lợi, nhưng mặt khác cũng nhiều căng thẳng.\n\n' +
          '2. 父は厳しい一方で、やさしいところもある。\n' +
          '→ Bố tôi nghiêm khắc, nhưng mặt khác cũng có sự dịu dàng.\n\n' +
          '3. 仕事が忙しい一方で、収入も増えている。\n' +
          '→ Trong khi công việc bận rộn, thì thu nhập cũng đang tăng lên.\n\n' +
          '4. この大学では、日本語を教える一方で、日本文化も紹介している。\n' +
          '→ Trường đại học này vừa dạy tiếng Nhật, vừa giới thiệu văn hóa Nhật Bản.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔹「～反面（はんめん）」 cũng mang nghĩa đối lập nhưng thường mang sắc thái **trái chiều rõ rệt** hơn。\n' +
          '🔹「～一方では...、一方では...」 dùng để nêu hai mặt song song một cách cân bằng.\n\n' +
          '📍Ví dụ:\n' +
          '・この薬はよく効く反面、副作用もある。\n' +
          '→ Loại thuốc này có hiệu quả, nhưng ngược lại cũng có tác dụng phụ。\n\n' +
          '・一方では働きたいが、一方ではもっと勉強もしたい。\n' +
          '→ Một mặt tôi muốn đi làm, nhưng mặt khác cũng muốn học thêm.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '🔸 Là cách nói trang trọng, thường dùng trong viết luận, báo chí hoặc trong văn phong học thuật.\n' +
          '🔸 Tránh dùng trong hội thoại thân mật hằng ngày, thay vào đó có thể dùng mẫu như 「けど」 hoặc 「でも」.',
      },
    ],
  },
  {
    id: 'kawarini',
    title: '～かわりに',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～かわりに',
        explanation:
          '📌「～かわりに」dùng để diễn tả:\n' +
          '1. Thay cho một người/vật/hành động khác\n' +
          '2. Đổi lại một mặt tích cực thì có một mặt tiêu cực hoặc ngược lại\n\n' +
          '👉 Nghĩa: "thay vì...", "thay cho...", "bù lại thì...", "đổi lại thì..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển + かわりに\n' +
          '🔹 Danh từ + の + かわりに\n' +
          '🔹 Tính từ -i / Tính từ -na（な）+ かわりに',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Khi muốn nói "làm A thay cho B"\n' +
          '✅ Khi muốn thể hiện "đổi lại, bù lại"\n' +
          '✅ Vế trước và sau thường có sự **bù trừ** hoặc **so sánh đối lập**',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 病気の友だちのかわりに、私がアルバイトに行きました。\n' +
          '→ Tôi đã đi làm thêm thay cho người bạn bị ốm.\n\n' +
          '2. 車で来たので、お酒のかわりにジュースを飲みました。\n' +
          '→ Vì đến bằng ô tô nên tôi đã uống nước hoa quả thay vì uống rượu.\n\n' +
          '3. この仕事は給料が高いかわりに、とてもきついです。\n' +
          '→ Công việc này lương cao, nhưng đổi lại rất vất vả.\n\n' +
          '4. 日本語は話せるかわりに、英語はあまりできません。\n' +
          '→ Tôi nói được tiếng Nhật, nhưng đổi lại tiếng Anh thì không giỏi lắm.\n\n' +
          '5. 父は自由に使える時間が少ないかわりに、収入（しゅうにゅう）は多いです。\n' +
          '→ Bố tôi ít thời gian rảnh, nhưng đổi lại thu nhập cao.',
      },
      {
        title: '5. Lưu ý khi sử dụng',
        explanation:
          '🔸 Phân biệt:\n' +
          '・「～にかわって」: chỉ sự thay thế người/vật cụ thể\n' +
          '・「～かわりに」: ngoài thay thế, còn mang nghĩa bù lại, đối lập\n\n' +
          '🔸 Có thể dùng trong cả văn nói và văn viết, nhưng dùng trong phân tích, so sánh sẽ phù hợp hơn.',
      },
    ],
  },
  {
    id: 'kuseni',
    title: '～くせに',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～くせに',
        explanation:
          '📌「～くせに」dùng để diễn đạt sự **phê phán, chỉ trích, bất mãn** đối với người khác khi họ **làm một việc không phù hợp với hoàn cảnh hay năng lực của mình**.\n\n' +
          '👉 Nghĩa: "mặc dù...", "dù… nhưng lại…" (mang ý coi thường, trách móc)',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + くせに\n' +
          '🔹 Tính từ -i + くせに\n' +
          '🔹 Tính từ -na + な + くせに\n' +
          '🔹 Danh từ + の + くせに\n\n' +
          '📍 *Chủ ngữ ở cả hai vế thường là cùng một người.*',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Diễn tả một **thực tế trái với điều đáng lẽ phải xảy ra**, đi kèm với cảm xúc **khó chịu, bực tức** của người nói.\n' +
          '✅ Không dùng để nói về bản thân một cách khiêm tốn.\n' +
          '✅ Cường độ phê phán mạnh hơn「のに」, mang sắc thái tiêu cực rõ hơn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 知っているくせに、教えてくれなかった。\n' +
          '→ Biết rồi mà lại không nói cho tôi。\n\n' +
          '2. 彼は学生のくせに、全然勉強しない。\n' +
          '→ Dù là học sinh mà chẳng học gì cả。\n\n' +
          '3. 元気なくせに、病気のふりをしている。\n' +
          '→ Dù khỏe mạnh nhưng lại giả vờ bị bệnh。\n\n' +
          '4. よく知らないくせに、あれこれ言わないで。\n' +
          '→ Không biết rõ mà lại cứ nói này nói nọ。\n\n' +
          '5. あの人は自分の失敗のくせに、人のせいにしている。\n' +
          '→ Chính lỗi của anh ta mà lại đổ cho người khác。',
      },
      {
        title: '5. Lưu ý khi sử dụng',
        explanation:
          '🔸「～くせに」mang nghĩa **tiêu cực, chỉ trích**, nên không dùng trong các ngữ cảnh trang trọng hay lịch sự.\n' +
          '🔸 Không dùng để nói về bản thân trong cách khiêm nhường – nếu muốn nhẹ nhàng hơn có thể dùng「のに」.',
      },
    ],
  },
  {
    id: 'nishitemo',
    title: '～にしても / ～にしろ / ～にせよ',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～にしても / ～にしろ / ～にせよ',
        explanation:
          '📌 Đây là các mẫu ngữ pháp dùng để **nêu giả định** hoặc **nêu ví dụ**, với hàm ý: dù là A thì cũng... / cho dù A thì B cũng vậy.\n\n' +
          '👉 Nghĩa: "Dù là...", "Cho dù...", "Ngay cả..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸 Danh từ / Động từ / Tính từ thể thường + にしても / にしろ / にせよ\n\n' +
          '📌 Các mẫu này có thể dùng theo cặp:\n' +
          '・Aにしても、Bにしても...\n' +
          '・Aにしろ、Bにしろ...\n' +
          '・Aにせよ、Bにせよ...\n\n' +
          '🟡 Lưu ý: 「にしても」hay dùng trong văn nói, còn 「にしろ」「にせよ」lịch sự/học thuật.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng khi muốn nói rằng **dù trong hoàn cảnh nào đi nữa, thì kết luận hoặc đánh giá cũng giống nhau**.\n' +
          '✅ Dùng để nêu quan điểm, đánh giá hoặc khuyên bảo mang tính tổng quát.\n' +
          '✅ Có thể liệt kê nhiều khả năng đều dẫn đến cùng một kết luận.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 行くにしても、もう少し早く出発したほうがいい。\n' +
          '→ Dù có đi chăng nữa thì cũng nên xuất phát sớm hơn một chút。\n\n' +
          '2. 留学するにしろ、しないにしろ、よく考えてから決めなさい。\n' +
          '→ Dù là đi du học hay không, thì cũng hãy suy nghĩ kỹ rồi hãy quyết định。\n\n' +
          '3. お金持ちにせよ、そうでないにせよ、人を見下すべきではない。\n' +
          '→ Dù là người giàu hay không thì cũng không nên coi thường người khác。\n\n' +
          '4. 結果がどうであるにせよ、最善を尽くすことが大事だ。\n' +
          '→ Dù kết quả thế nào đi nữa thì việc cố gắng hết sức vẫn là điều quan trọng。',
      },
      {
        title: '5. Lưu ý khi sử dụng',
        explanation:
          '🔹 Thường đi kèm các cặp so sánh như 「～にしても、～にしても」「～にしろ、～にしろ」v.v.\n' +
          '🔹 Vế sau thường là nhận xét, đánh giá, khuyên nhủ — không phải mô tả sự thật khách quan đơn thuần.\n' +
          '🔹 Chọn dạng (にしても / にしろ / にせよ) tùy mức trang trọng và sắc thái.',
      },
    ],
  },
  {
    id: 'toiu-yori',
    title: '～というより',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～というより',
        explanation:
          '📌「～というより」được dùng khi muốn **so sánh** hai cách nói hoặc hai đánh giá, và cho rằng **cách nói sau mới chính xác hơn hoặc phù hợp hơn**.\n\n' +
          '👉 Nghĩa: "nói đúng hơn là...", "phải nói là..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸 [Thể thường (普通形)] + というより\n' +
          '🔸 Tính từ -na / Danh từ + だ + というより\n\n' +
          '📍 Dạng phổ biến nhất: A というより B（B chính xác hơn A）',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng để **chỉnh sửa, điều chỉnh lại cách diễn đạt**, cho rằng cách nói ở vế sau sẽ phù hợp hơn, đúng hơn so với vế trước.\n' +
          '✅ Thường được dùng để **giải thích, nhận xét, hoặc nêu ý kiến** trong hội thoại hay văn viết.\n' +
          '✅ Vế sau thường nhấn mạnh hơn vế trước.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 彼は歌手というより俳優として有名だ。\n' +
          '→ Anh ấy nổi tiếng là một diễn viên hơn là ca sĩ.\n\n' +
          '2. あの店は、安いというよりまずい。\n' +
          '→ Quán đó không hẳn là rẻ mà phải nói là đồ ăn dở.\n\n' +
          '3. 怒っているというより、がっかりしているようだ。\n' +
          '→ Có vẻ như không phải đang tức giận mà là đang thất vọng.\n\n' +
          '4. これは趣味というより仕事みたいになっている。\n' +
          '→ Cái này không còn là sở thích nữa mà giống như công việc rồi.\n\n' +
          '5. あの子はかわいいというより、きれいだね。\n' +
          '→ Đứa bé đó không phải là dễ thương mà đúng hơn là xinh đẹp.',
      },
      {
        title: '5. Lưu ý khi sử dụng',
        explanation:
          '🔹 Cấu trúc này thiên về so sánh, chỉnh sửa lại cách đánh giá.\n' +
          '🔹 Thường dùng trong văn nói, văn viết mang tính cá nhân, bình luận.\n' +
          '🔹 Có thể dùng trong các câu mang sắc thái hài hước, phê bình nhẹ nhàng.',
      },
    ],
  },
  {
    id: 'warini',
    title: '～わりに',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～わりに',
        explanation:
          '📌「～わりに」dùng để so sánh mức độ giữa hai vế. Dù có A nhưng kết quả lại B, thường mang nghĩa **"so với A thì B (không tương xứng)"** hoặc "B không như mong đợi từ A".\n\n' +
          '👉 Nghĩa: "Dù... nhưng...", "so với... thì..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸 Động từ thể thường (普通形) + わりに\n' +
          '🔸 Tính từ -i + わりに\n' +
          '🔸 Tính từ -na (な) + わりに\n' +
          '🔸 Danh từ + の + わりに',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng khi điều được nói đến ở vế sau **không giống như mình tưởng tượng, dự đoán, hay thông thường** dựa trên thông tin ở vế trước.\n' +
          '✅ Mẫu câu này mang sắc thái đánh giá chủ quan của người nói.\n' +
          '✅ Không dùng cho các sự việc hiển nhiên, sự thật khách quan.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. このケーキは安いわりに、おいしいです。\n' +
          '→ Bánh này rẻ nhưng ngon hơn mong đợi.\n\n' +
          '2. 彼は年のわりに若く見える。\n' +
          '→ So với tuổi thì anh ấy trông trẻ.\n\n' +
          '3. 日本語を勉強している期間が短いわりに、彼の会話はとても上手だ。\n' +
          '→ So với thời gian học tiếng Nhật ngắn thì hội thoại của anh ấy rất giỏi.\n\n' +
          '4. 忙しいわりに、よく遊びに行きますね。\n' +
          '→ Dù bận mà bạn vẫn hay đi chơi nhỉ.\n\n' +
          '5. このアパートは駅から遠いわりに家賃が高い。\n' +
          '→ Căn hộ này xa ga mà tiền thuê lại cao.',
      },
      {
        title: '5. Lưu ý khi sử dụng',
        explanation:
          '🔹「～わりに」dùng để nhấn mạnh sự **không cân xứng** giữa hai điều.\n' +
          '🔹 Không dùng khi cả hai vế tương xứng hoặc rõ ràng hợp lý.\n' +
          '🔹 Tương tự mẫu「～にしては」nhưng 「～わりに」mang sắc thái rộng và trung tính hơn.',
      },
    ],
  },
  {
    id: 'bakarika',
    title: '～ばかりか',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ばかりか',
        explanation:
          '📌 「～ばかりか」là mẫu câu dùng để **nhấn mạnh**: không chỉ A mà còn B nữa, trong đó B thường mang ý **còn hơn cả A** hoặc **ngoài sức tưởng tượng**.\n\n' +
          '👉 Nghĩa: “Không chỉ… mà còn…”, “Không những… mà còn…”',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + ばかりか\n' +
          '🔹 Tính từ -i + ばかりか\n' +
          '🔹 Tính từ -na (bỏ な) + な + ばかりか\n' +
          '🔹 Danh từ + ばかりか\n\n' +
          '⚠️ Vế sau thường mang nghĩa **ngoài dự đoán** hoặc **mức độ cao hơn** so với vế trước.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Nhấn mạnh sự **gia tăng mức độ** hoặc **ngoài phạm vi thông thường**.\n' +
          '✅ Hay dùng để khen ngợi, phê bình hoặc đưa ra nhận xét có tính so sánh.\n' +
          '✅ Thường dùng trong văn viết hoặc các ngữ cảnh trang trọng hơn (trong văn nói hay dùng 「だけでなく」「～し、それに」).',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 彼は日本語ばかりか、ベトナム語も話せる。\n' +
          '→ Anh ấy không chỉ nói được tiếng Nhật mà còn cả tiếng Việt nữa.\n\n' +
          '2. この店は味がいいばかりか、値段も安い。\n' +
          '→ Quán này không chỉ ngon mà giá cũng rẻ.\n\n' +
          '3. 彼女はきれいばかりか、頭もいい。\n' +
          '→ Cô ấy không chỉ xinh đẹp mà còn thông minh nữa.\n\n' +
          '4. 最近は大人ばかりか、子供までスマホを持っている。\n' +
          '→ Gần đây không chỉ người lớn mà cả trẻ con cũng có điện thoại.',
      },
      {
        title: '5. Lưu ý khi sử dụng',
        explanation:
          '🔸 Cấu trúc này khác với 「だけでなく」 ở chỗ nó mang cảm xúc **bất ngờ**, **ngoài mong đợi** hoặc nhấn mạnh hơn.\n\n' +
          '🔸 Không nên dùng cho các liệt kê đơn thuần, trung lập.\n\n' +
          '🔸 Vế sau KHÔNG nên là những việc quá bình thường, dễ đoán.\n\n' +
          '❌ Sai: このレストランはおいしいばかりか、ちょっと高い。\n' +
          '✔️ Đúng: このレストランはおいしいばかりか、ミシュランの星をもらった。',
      },
    ],
  },
  {
    id: 'nikagirazu',
    title: '～に限らず',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に限らず',
        explanation:
          '📌「～に限らず」dùng để nói rằng **không chỉ A, mà còn cả B/C…** cũng vậy.\n' +
          '👉 Nghĩa: “không chỉ… mà còn…”, “không riêng gì…”\n' +
          '🔎 Hay dùng để mở rộng phạm vi đối tượng.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + に限らず\n\n' +
          '📌 Theo sau là những từ thể hiện phạm vi rộng hơn, như: みんな、さまざま、いろいろ、誰でも、全国、いつも、etc.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Diễn tả ý nghĩa: không chỉ một đối tượng cụ thể nào đó mà phạm vi còn mở rộng hơn nữa.\n' +
          '✅ Thường dùng trong văn viết hoặc ngôn ngữ trang trọng.\n' +
          '✅ Điểm đặc biệt là nhấn mạnh sự **không giới hạn** phạm vi.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. この番組は若者に限らず、年配の人にも人気がある。\n' +
          '→ Chương trình này không chỉ giới trẻ mà cả người lớn tuổi cũng yêu thích.\n\n' +
          '2. 日本に限らず、アジア全体でこの製品は売れている。\n' +
          '→ Không chỉ ở Nhật Bản, sản phẩm này bán chạy trên toàn châu Á.\n\n' +
          '3. 会員に限らず、誰でも参加できます。\n' +
          '→ Không chỉ hội viên, ai cũng có thể tham gia.\n\n' +
          '4. 雨の日に限らず、毎日ジョギングをしています。\n' +
          '→ Không chỉ ngày mưa, tôi chạy bộ mỗi ngày.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔸 ～だけでなく: cũng mang nghĩa “không chỉ… mà còn”, phổ biến hơn trong hội thoại.\n' +
          '🔸 ～に限らず: thường dùng trong văn viết hoặc mang tính mở rộng phạm vi rõ rệt hơn.\n' +
          '🔸 ～ばかりでなく: gần nghĩa, nhưng nhấn mạnh hơn về mức độ hơn là phạm vi.',
      },
    ],
  },
  {
    id: 'nikakawarazu',
    title: '～にかかわらず',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～にかかわらず',
        explanation:
          '📌「～にかかわらず」(hoặc「～にかかわりなく」) dùng để nói rằng một hành động, sự việc **xảy ra không phụ thuộc vào điều kiện nào đó**.\n' +
          '👉 Nghĩa: “bất kể…”, “không liên quan đến…”, “không quan trọng là…”',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển / thể ない + にかかわらず\n' +
          '🔹 Danh từ + にかかわらず\n' +
          '🔹 Tính từ đuôi い・な + にかかわらず\n\n' +
          '📌 Cũng có thể gặp dạng: AかAでないかにかかわらず（＝Dù là A hay không phải A）',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Diễn tả ý nghĩa: **một hành động/sự việc xảy ra mà không bị ảnh hưởng bởi điều kiện, trạng thái nào đó**.\n' +
          '✅ Thường đi kèm các cặp từ mang tính đối lập như: 有無（うむ）, 行く/行かない, 多い/少ない…\n' +
          '✅ Hay dùng trong văn viết, thông báo, quy định, tin tức.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 天候（てんこう）にかかわらず、試合（しあい）は行われます。\n' +
          '→ Trận đấu sẽ được tổ chức bất kể thời tiết thế nào.\n\n' +
          '2. 経験の有無（うむ）にかかわらず、募集しています。\n' +
          '→ Dù có kinh nghiệm hay không, đều đang tuyển dụng.\n\n' +
          '3. 年齢（ねんれい）にかかわらず、参加できます。\n' +
          '→ Bất kể tuổi tác, đều có thể tham gia.\n\n' +
          '4. 来る来ないにかかわらず、人数を教えてください。\n' +
          '→ Dù đến hay không, xin hãy cho biết số người.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔸 ～に限らず: “không chỉ… mà còn…”, nhấn mạnh phạm vi mở rộng.\n' +
          '🔸 ～にかかわらず: “bất kể…”, không bị ảnh hưởng bởi điều kiện.\n' +
          '🔸 ～を問わず: gần nghĩa, mang tính trang trọng hơn, thường dùng trong thông báo chính thức.',
      },
    ],
  },
  {
    id: 'nishitewa',
    title: '～にしては',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～にしては',
        explanation:
          '📌「～にしては」diễn tả sự việc xảy ra **khác với những gì người nói tưởng tượng** dựa trên một tiêu chuẩn, sự thật, hay thông tin nào đó.\n' +
          '👉 Nghĩa: “Dù là… nhưng…”, “So với… thì không giống…”.\n' +
          '❗ Thể hiện cảm giác bất ngờ, không phù hợp, trái với lẽ thường.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + にしては\n\n' +
          '📌 Không dùng với những sự việc không rõ ràng hoặc mơ hồ (ví dụ: あの人、学生にしては… → KHÔNG rõ ràng nếu không biết chắc người đó là sinh viên).',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Nhấn mạnh sự **khác thường**, không phù hợp với điều được cho là bình thường hoặc dự đoán từ vế trước.\n' +
          '✅ Vế sau thường là nhận xét, đánh giá trái với kỳ vọng.\n' +
          '→ Thường dùng để **so sánh ngầm** với tiêu chuẩn thông thường.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 外国人にしては日本語が上手だ。\n' +
          '→ Dù là người nước ngoài nhưng tiếng Nhật lại giỏi.\n\n' +
          '2. 初めてにしては、よくできましたね。\n' +
          '→ Dù là lần đầu nhưng làm tốt đấy nhỉ.\n\n' +
          '3. 子どもにしては、字がきれいですね。\n' +
          '→ Dù là trẻ con mà chữ đẹp quá ha.\n\n' +
          '4. このかばん、安いにしては丈夫ですね。\n' +
          '→ Cái túi này, dù rẻ nhưng bền ghê.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔸 ～わりに（は）: Cũng dùng để nói điều bất ngờ, nhưng phạm vi rộng hơn (không chỉ với danh từ).\n' +
          '🔸 ～にしては: Chỉ đi với danh từ, nhấn mạnh sự **trái kỳ vọng** so với tiêu chuẩn.\n\n' +
          '📝 Ví dụ so sánh:\n' +
          '学生のわりに、よく知っている。\n' +
          '→ So với một sinh viên thì biết nhiều ghê.\n\n' +
          '学生にしては、よく知っている。\n' +
          '→ Dù là sinh viên mà biết nhiều thật.',
      },
    ],
  },
  {
    id: 'nominarazu',
    title: '～のみならず',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～のみならず',
        explanation:
          '📌 「～のみならず」là mẫu câu dùng để diễn tả ý: **không chỉ A mà B cũng…**\n' +
          'Đây là cách nói trang trọng hơn của 「～だけでなく」, thường dùng trong văn viết hoặc hoàn cảnh lịch sự.\n\n' +
          '👉 Nghĩa: “Không chỉ… mà còn…”, “Không những… mà còn…”',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + のみならず\n' +
          '🔹 Động từ thể thường + のみならず\n' +
          '🔹 Tính từ -i + のみならず\n' +
          '🔹 Tính từ -na (bỏ な) + である + のみならず\n\n' +
          '📌 Vế sau thường là một sự việc mang tính mở rộng hoặc cùng hướng với vế trước.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng khi muốn liệt kê không chỉ một sự việc mà còn những điều tương tự đi kèm.\n' +
          '✅ Hay được dùng trong bài viết, bài thuyết trình, báo chí, văn trang trọng.\n' +
          '✅ Có thể đi kèm với các phó từ như:「ばかりか」「それどころか」「さらには」ở vế sau để tăng mức độ nhấn mạnh.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 彼は英語のみならず、フランス語も話せる。\n' +
          '→ Anh ấy không chỉ nói được tiếng Anh mà còn cả tiếng Pháp nữa.\n\n' +
          '2. この映画は日本のみならず、海外でも高く評価されている。\n' +
          '→ Bộ phim này không chỉ ở Nhật mà cả ở nước ngoài cũng được đánh giá cao.\n\n' +
          '3. 環境問題は一国のみならず、全世界の課題である。\n' +
          '→ Vấn đề môi trường không chỉ là vấn đề của một quốc gia mà là vấn đề của toàn thế giới.\n\n' +
          '4. 彼女は美しいのみならず、心も優しい。\n' +
          '→ Cô ấy không chỉ xinh đẹp mà còn tốt bụng nữa.',
      },
      {
        title: '5. So sánh với các mẫu tương tự',
        explanation:
          '🔸 「～だけでなく」: Thông dụng hơn, dùng cả trong văn nói và viết.\n' +
          '🔸 「～ばかりか」: Dùng khi muốn **nhấn mạnh sự bất ngờ** hoặc mức độ cao hơn.\n' +
          '🔸 「～のみならず」: Dùng trong **ngữ cảnh trang trọng**, có sắc thái văn viết nhiều hơn.',
      },
    ],
  },
  {
    id: 'wamochiron',
    title: '～はもちろん',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～はもちろん',
        explanation:
          '📌 「～はもちろん」dùng để đưa ra một ví dụ **hiển nhiên, đương nhiên**, sau đó nói đến những thứ khác **cũng như vậy** hoặc **còn hơn thế**.\n\n' +
          '👉 Nghĩa: “~ là điều đương nhiên rồi, … (cái khác) cũng…”\n' +
          '👉 Tương đương tiếng Việt: “không chỉ… mà… cũng…”, “A thì là tất nhiên rồi, B cũng…”',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + はもちろん\n\n' +
          '📌 Thường đi kèm với các từ như「も」「まで」「さえ」ở vế sau để nhấn mạnh phạm vi mở rộng.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng để liệt kê, nhấn mạnh rằng điều được nêu ra ở vế trước là điều đương nhiên, nhưng không chỉ dừng ở đó mà còn có thêm những điều khác.\n' +
          '✅ Chủ yếu dùng trong văn viết, hoặc văn nói trang trọng, thuyết trình.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 漢字は日本人はもちろん、外国人にとっても難しい。\n' +
          '→ Kanji thì với người Nhật là đương nhiên rồi, với người nước ngoài lại càng khó.\n\n' +
          '2. このレストランは味はもちろん、サービスもとてもいいです。\n' +
          '→ Nhà hàng này thì hương vị là tất nhiên rồi, dịch vụ cũng rất tốt.\n\n' +
          '3. 子供の教育は家庭はもちろん、学校でも大切にされるべきだ。\n' +
          '→ Giáo dục trẻ em thì gia đình là điều hiển nhiên rồi, nhưng ở trường cũng cần được coi trọng.\n\n' +
          '4. 彼は勉強はもちろん、スポーツも得意です。\n' +
          '→ Anh ấy thì học là điều rõ ràng rồi, thể thao cũng giỏi nữa.',
      },
      {
        title: '5. So sánh với các mẫu tương tự',
        explanation:
          '🔸 「～だけでなく」: Không chỉ… mà còn… (trung lập hơn)\n' +
          '🔸 「～はもちろん」: Nhấn mạnh tính hiển nhiên của vế trước\n' +
          '🔸 「～ばかりか」: Dùng khi muốn thể hiện sự bất ngờ ở vế sau',
      },
    ],
  },
  {
    id: 'hazuganai',
    title: '～はずがない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～はずがない',
        explanation:
          '📌「～はずがない」diễn tả sự **phủ định chắc chắn** dựa trên căn cứ logic, kinh nghiệm, hoặc lẽ thường.\n' +
          '👉 Nghĩa là: "Lẽ nào lại...", "Chắc chắn không...", "Không thể nào...".',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể thường] + はずがない\n' +
          '🔹 [Tính từ -i] + はずがない\n' +
          '🔹 [Tính từ -na] + な + はずがない\n' +
          '🔹 [Danh từ] + の + はずがない',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Dùng khi người nói **tin chắc rằng điều gì đó không thể xảy ra** dựa trên thông tin có sẵn, suy luận logic hoặc hiểu biết cá nhân.\n' +
          '✳️ Cách nói mềm hơn「わけがない」, nhưng vẫn mang sắc thái phủ định chắc chắn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 彼がそんなひどいことをするはずがない。\n' +
          '→ Anh ấy chắc chắn không thể làm điều tệ bạc như vậy.\n\n' +
          '2. この問題は簡単だから、間違えるはずがない。\n' +
          '→ Bài này dễ nên không thể sai được.\n\n' +
          '3. 彼女がパーティーに来るはずがないよ。旅行中だから。\n' +
          '→ Cô ấy chắc chắn không thể đến dự tiệc đâu, vì đang đi du lịch mà.\n\n' +
          '4. この店の料理がまずいはずがない。\n' +
          '→ Món ăn của quán này không thể dở được.\n\n' +
          '5. こんな簡単な漢字、読めないはずがないよ。\n' +
          '→ Chữ Hán đơn giản như thế này thì không thể nào không đọc được.',
      },
      {
        title: '5. So sánh với ～わけがない',
        explanation:
          '🔸 「～わけがない」mang sắc thái phủ định mạnh mẽ, cảm tính hơn.\n' +
          '🔸 「～はずがない」mang tính lý trí, dựa vào suy luận logic, sự thật.\n\n' +
          '📌 Ví dụ:\n' +
          '・そんなバカな話、信じる**わけがない**。\n' +
          '・そんなバカな話、信じる**はずがない**。\n' +
          '→ Cả hai đều đúng, nhưng câu dùng 「わけがない」 mạnh mẽ và cảm tính hơn.',
      },
    ],
  },
  {
    id: 'kanoyouda',
    title: '～かのようだ',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～かのようだ',
        explanation:
          '📌「～かのようだ」dùng để so sánh, ví von, diễn đạt cảm giác “cứ như là…”, “giống như là… (nhưng thực tế không phải vậy)”。\n' +
          '👉 Đây là cách nói thể hiện sự **khác biệt giữa thực tế và cảm giác, ấn tượng** của người nói.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể thường] + かのようだ\n' +
          '🔹 [Động từ thể た] + かのようだ\n\n' +
          '📍 Ngoài ra có thể chia ở dạng:\n' +
          '　・かのように + [Động từ khác]\n' +
          '　・かのような + [Danh từ]',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Dùng để so sánh một hành động, trạng thái với một việc tưởng tượng như thể là nó thực sự đã xảy ra, dù thực tế không phải vậy.\n\n' +
          '🗣 Một số cách hiểu:\n' +
          '　・Cứ như thể là…\n' +
          '　・Giống như là… (thật ra không phải)\n' +
          '　・Như thể…',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 彼はまるで何も知らないかのような顔をしている。\n' +
          '→ Anh ta làm bộ mặt cứ như thể chẳng biết gì.\n\n' +
          '2. 雨が降ったかのように、地面がぬれている。\n' +
          '→ Mặt đất ướt như thể vừa có mưa vậy.\n\n' +
          '3. 彼女はまるで夢の中にいるかのように幸せそうだった。\n' +
          '→ Cô ấy trông hạnh phúc như thể đang sống trong giấc mơ.\n\n' +
          '4. 彼の話し方は、すべてを知っているかのようだ。\n' +
          '→ Cách nói chuyện của anh ấy cứ như thể biết tất cả mọi thứ vậy.\n\n' +
          '5. 彼はまるで自分が正しいかのように主張した。\n' +
          '→ Anh ta đã khẳng định như thể mình đúng hoàn toàn.',
      },
      {
        title: '5. Lưu ý sử dụng',
        explanation:
          '🔸 Thường đi với cụm từ nhấn mạnh sự so sánh như 「まるで」(cứ như là), 「あたかも」(y như là).\n' +
          '🔸 Dùng để nhấn mạnh sự khác biệt giữa ấn tượng và thực tế.\n' +
          '🔸 Không dùng để miêu tả sự thật – mang tính phán đoán cảm tính.\n' +
          '🔸 Cần phân biệt với 「ようだ」 thường vì 「かのようだ」 nhấn mạnh hơn vào sự **giả định sai lệch** với thực tế.',
      },
    ],
  },
  {
    id: 'nichigainai',
    title: '～に違いない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に違いない',
        explanation:
          '📌「～に違いない」dùng để biểu thị **suy đoán mạnh mẽ, chắc chắn của người nói** dựa trên bằng chứng hoặc cảm giác cá nhân.\n' +
          '👉 Nghĩa: “Chắc chắn là…”, “Không thể sai được…”, “Hẳn là…”',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thông thường (普通形) + に違いない\n' +
          '🔹 Tính từ -i / -na + に違いない\n' +
          '🔹 Danh từ + に違いない\n\n' +
          '📍 Tính từ -na và Danh từ KHÔNG thêm 「だ」 trước 「に違いない」',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng khi người nói **rất chắc chắn** về điều mình nói (nhưng không phải là sự thật 100%).\n' +
          '✅ Mang tính **suy luận logic hoặc trực giác**, không phải là sự thật đã được xác nhận.\n' +
          '📝 Gần nghĩa với 「きっと～と思う」 nhưng 「～に違いない」 mạnh mẽ và khách quan hơn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. あのかばんは高かったに違いない。\n' +
          '→ Cái túi đó chắc chắn là đắt tiền rồi.\n\n' +
          '2. かぎが開いている。誰かが入ったに違いない。\n' +
          '→ Cửa mở kìa. Chắc chắn có ai đó đã vào rồi.\n\n' +
          '3. 彼は犯人に違いない。\n' +
          '→ Anh ta chắc chắn là hung thủ.\n\n' +
          '4. この声は山田さんに違いありません。\n' +
          '→ Giọng này chắc chắn là của anh Yamada.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔸 ～はずだ: Cũng mang ý suy đoán nhưng dựa trên logic và có căn cứ rõ ràng hơn.\n' +
          '🔸 ～に違いない: Suy đoán mạnh, dựa vào cảm giác hoặc quan sát của người nói.\n\n' +
          '📍Ví dụ:\n' +
          '電気がついているから、田中さんは家にいるはずだ。\n' +
          '→ Vì đèn đang sáng nên chắc hẳn anh Tanaka đang ở nhà. (dựa vào logic)\n\n' +
          '電気がついている。田中さんは家にいるに違いない。\n' +
          '→ Đèn sáng kìa. Chắc chắn anh Tanaka đang ở nhà. (suy đoán cảm tính)',
      },
    ],
  },
  {
    id: 'nikimatteiru',
    title: '～に決まっている',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に決まっている',
        explanation:
          '📌「～に決まっている」là mẫu câu dùng để **khẳng định mạnh mẽ phán đoán chủ quan** của người nói.\n' +
          '👉 Nghĩa: "Nhất định là...", "Chắc chắn là...", "Rõ ràng là..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thông thường (普通形) + に決まっている\n' +
          '🔹 Tính từ -i / -na + に決まっている\n' +
          '🔹 Danh từ + に決まっている\n\n' +
          '📍 Tính từ -na và danh từ **không thêm「だ」** trước 「に決まっている」。',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng để diễn tả **phán đoán đầy tự tin, chắc chắn** của người nói, thường dựa trên kinh nghiệm hoặc cảm tính.\n' +
          '✅ Sắc thái khá mạnh, đôi khi mang chút cảm xúc chủ quan, thiên về trực giác hơn là lý luận logic.\n' +
          '🗣 Thường dùng trong **văn nói**.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. こんなに難しい問題、彼にできるに決まっている。\n' +
          '→ Bài khó thế này thì chắc chắn anh ấy làm được.\n\n' +
          '2. あの店、高いに決まってるよ。\n' +
          '→ Cái tiệm kia chắc chắn đắt rồi。\n\n' +
          '3. うそに決まっている！\n' +
          '→ Chắc chắn là nói dối rồi!\n\n' +
          '4. あんな下手な歌手が売れるわけない。失敗するに決まっているよ。\n' +
          '→ Ca sĩ dở như vậy sao bán được đĩa, chắc chắn sẽ thất bại thôi。',
      },
      {
        title: '5. So sánh với ～に違いない và ～に相違ない',
        explanation:
          '🔹 ～に違いない：Suy đoán có căn cứ, mang sắc thái trung lập。\n' +
          '🔹 ～に相違ない：Giống ～に違いない nhưng mang tính văn viết, trang trọng。\n' +
          '🔹 ～に決まっている：Mạnh mẽ, thiên về cảm xúc chủ quan, dùng trong văn nói。\n\n' +
          '📍Ví dụ:\n' +
          '彼が犯人に違いない。→ (dựa trên logic, có bằng chứng)\n' +
          '彼が犯人に決まっている。→ (cảm giác, chắc chắn là vậy)',
      },
    ],
  },
  {
    id: 'nisouinai',
    title: '～に相違ない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に相違ない',
        explanation:
          '📌「～に相違ない」là cách diễn đạt trang trọng hơn của「～に違いない」, dùng để thể hiện **suy đoán chắc chắn** của người nói.\n' +
          '👉 Nghĩa: “Chắc chắn là…”, “Không thể sai được…”',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thông thường (普通形) + に相違ない\n' +
          '🔹 Tính từ -i / -na + に相違ない\n' +
          '🔹 Danh từ + に相違ない\n\n' +
          '📍 Tính từ -na và Danh từ KHÔNG thêm 「だ」 trước 「に相違ない」',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Diễn tả sự **suy đoán chắc chắn dựa vào bằng chứng, hoàn cảnh** mà người nói cảm nhận được.\n' +
          '✅ Thường được sử dụng trong **văn viết, các bài báo, văn bản trang trọng**.\n' +
          '📝 Tương đương với「～に違いない」nhưng mang sắc thái **lịch sự, cứng nhắc** hơn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. この絵は彼の最高傑作（さいこうけっさく）に相違ない。\n' +
          '→ Bức tranh này chắc chắn là kiệt tác xuất sắc nhất của anh ấy.\n\n' +
          '2. この事件は計画的に行われたに相違ない。\n' +
          '→ Vụ việc này chắc chắn đã được thực hiện một cách có kế hoạch.\n\n' +
          '3. 彼が犯人に相違ありません。\n' +
          '→ Không nghi ngờ gì nữa, anh ta chính là thủ phạm.',
      },
      {
        title: '5. So sánh với ～に違いない',
        explanation:
          '🔸 ～に違いない：Dùng nhiều trong văn nói và hội thoại hằng ngày.\n' +
          '🔸 ～に相違ない：Mang tính trang trọng, thường dùng trong văn viết hoặc bối cảnh nghiêm túc.\n\n' +
          '📍Ví dụ:\n' +
          'この答えは正しいに違いない。\n' +
          '→ Câu trả lời này chắc chắn đúng. (thân mật)\n\n' +
          'この答えは正しいに相違ない。\n' +
          '→ Câu trả lời này chắc chắn đúng. (trang trọng)',
      },
    ],
  },
  {
    id: 'ppoi',
    title: '～っぽい',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～っぽい',
        explanation:
          '📌「～っぽい」là hậu tố gắn sau danh từ, động từ hoặc tính từ để biểu thị ý:\n' +
          '① Mang tính chất giống như…\n' +
          '② Có xu hướng thường hay…\n' +
          '③ Dễ xảy ra/dễ làm…\n\n' +
          '💡 Có thể hiểu là “trông có vẻ”, “ra dáng”, “giống như”, hoặc “thường hay” tùy theo ngữ cảnh.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + っぽい\n' +
          '🔹 Động từ gốc + っぽい\n' +
          '🔹 Tính từ -i (chỉ một số, ví dụ: 忘れっぽい)\n\n' +
          '📍Chú ý: Đây là một **tính từ -i**, nên có thể chia như: っぽくない、っぽかった…',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '① **Giống như … (về cảm giác, ấn tượng):**\n' +
          '　この服は男っぽいですね。\n' +
          '　→ Bộ đồ này trông giống đồ con trai nhỉ.\n\n' +
          '② **Có xu hướng, thường hay …:**\n' +
          '　彼は怒りっぽい。\n' +
          '　→ Anh ấy dễ nổi giận.\n\n' +
          '③ **Dễ làm gì đó (theo xu hướng):**\n' +
          '　私は忘れっぽいです。\n' +
          '　→ Tôi hay quên lắm.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 子どもっぽい考え方はやめたほうがいい。\n' +
          '→ Cậu nên bỏ cách suy nghĩ trẻ con đi。\n\n' +
          '2. 彼は飽きっぽくて、何をしても続かない。\n' +
          '→ Anh ta hay chán, làm gì cũng không lâu bền。\n\n' +
          '3. 彼女は涙（なみだ）っぽい性格ですね。\n' +
          '→ Cô ấy là người mau nước mắt。\n\n' +
          '4. この料理は油っぽくてちょっと苦手だ。\n' +
          '→ Món này hơi nhiều dầu mỡ, mình không thích lắm。',
      },
      {
        title: '5. So sánh với ～らしい và ～みたい',
        explanation:
          '🔸 ～っぽい: Thiên về **ấn tượng chủ quan**, hoặc **khuynh hướng, xu hướng**, thường dùng trong văn nói。\n' +
          '🔸 ～らしい: Nói về tính chất điển hình, đặc trưng。\n' +
          '🔸 ～みたい: Mang nghĩa so sánh “giống như”, phổ biến trong hội thoại。\n\n' +
          '📍Ví dụ so sánh:\n' +
          '　彼は子どもっぽい。→ Anh ta cư xử trẻ con。\n' +
          '　彼は子どもらしい。→ Anh ta hồn nhiên, đúng kiểu trẻ con。\n' +
          '　彼は子どもみたい。→ Anh ta giống như một đứa trẻ。',
      },
    ],
  },
  {
    id: 'rashii-n2',
    title: '～らしい',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～らしい',
        explanation:
          '📌「～らしい」là mẫu ngữ pháp diễn tả:\n' +
          '① Suy đoán dựa trên thông tin nghe được (giống như 「～そうだ」 dạng truyền đạt).\n' +
          '② Tính chất đặc trưng, “đúng là …”, “ra dáng là …”\n' +
          '③ Cảm giác “giống như là …” (dựa trên ấn tượng, quan sát).',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + らしい\n' +
          '🔹 *Không dùng với động từ hoặc tính từ -i* (trừ khi là danh từ hóa)\n\n' +
          '📌 Chú ý: Khác với 「そうだ」(truyền đạt thông tin), 「らしい」mang tính **suy đoán có cơ sở**, hoặc **nêu đặc trưng**.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '① **Suy đoán/Nghe nói:**\n' +
          '　日本では、子どもでも敬語を使うらしい。\n' +
          '　→ Nghe nói ở Nhật, ngay cả trẻ con cũng dùng kính ngữ。\n\n' +
          '② **Nêu đặc trưng/Đúng chất:**\n' +
          '　彼は本当に男らしいね。\n' +
          '　→ Anh ấy thật đúng là đàn ông (nam tính)。\n\n' +
          '③ **Giống như/Gần giống:**\n' +
          '　春らしい天気ですね。\n' +
          '　→ Thời tiết hôm nay giống như mùa xuân nhỉ。',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. あの人は先生らしい話し方をする。\n' +
          '→ Người đó nói chuyện ra dáng giáo viên。\n\n' +
          '2. この料理は日本らしい味がする。\n' +
          '→ Món này có vị rất Nhật。\n\n' +
          '3. 彼は子どもらしく遊んでいる。\n' +
          '→ Cậu bé chơi đúng kiểu trẻ con。\n\n' +
          '4. 東京は今日、雪が降るらしいよ。\n' +
          '→ Nghe nói hôm nay Tokyo sẽ có tuyết。',
      },
      {
        title: '5. So sánh với ～そうだ và ～っぽい',
        explanation:
          '🔹 ～そうだ（truyền đạt): nghe từ người khác, không phải cảm nhận cá nhân。\n' +
          '🔹 ～らしい（suy đoán hoặc nêu đặc trưng): dựa trên cảm nhận hoặc thông tin có phần chắc chắn。\n' +
          '🔹 ～っぽい: thiên về ấn tượng chủ quan, có thể mang sắc thái tiêu cực。\n\n' +
          '📍Ví dụ:\n' +
          '　あの子は子どもっぽい。→ Cư xử như con nít (chưa chín chắn)\n' +
          '　あの子は子どもらしい。→ Hồn nhiên đúng kiểu trẻ con',
      },
    ],
  },
  {
    id: 'towakagiranai',
    title: '～とは限らない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～とは限らない',
        explanation:
          '📌 Mẫu câu「～とは限らない」diễn tả ý nghĩa: **"Không hẳn là...", "Không nhất thiết là...", "Không phải lúc nào cũng..."**.\n' +
          '👉 Dùng khi muốn **phủ định một điều mà người khác cho là đúng trong mọi trường hợp**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Thể thường (普通形)] + とは限らない\n' +
          '  ・Danh từ / Tính từ-na: dùng nguyên thể hoặc thêm「だ」\n\n' +
          '📍 Lưu ý: cũng có thể gặp dạng ngắn hơn là「～とは限らん」（thân mật）',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Mẫu này thể hiện **một ý kiến phản biện nhẹ nhàng** hoặc một ngoại lệ với suy nghĩ/phán đoán chung.\n' +
          '👉 Thường dùng với các từ chỉ tần suất, sự phổ biến như:\n' +
          '「いつも」「必ずしも」「誰でも」「どこでも」v.v.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 高いものが必ずしもいいとは限らない。\n' +
          '→ Không hẳn đồ đắt là tốt.\n\n' +
          '2. 有名な先生の授業が面白いとは限らない。\n' +
          '→ Không phải lúc nào lớp của giáo viên nổi tiếng cũng thú vị.\n\n' +
          '3. 日本人だからといって、漢字が書けるとは限らない。\n' +
          '→ Không phải là người Nhật thì lúc nào cũng viết được chữ Hán.\n\n' +
          '4. 雨だからといって、試合が中止になるとは限らない。\n' +
          '→ Không hẳn trời mưa thì trận đấu sẽ bị hoãn.\n\n' +
          '5. 新聞に書いてあることがすべて本当とは限らない。\n' +
          '→ Không phải tất cả những gì viết trên báo đều là sự thật.',
      },
      {
        title: '5. Ghi chú bổ sung',
        explanation:
          '✅ Có thể dùng thay bằng:「～わけではない」「～というわけではない」nhưng sắc thái hơi khác:\n' +
          '・「～とは限らない」→ mang nghĩa "không phải luôn đúng", khách quan hơn.\n' +
          '・「～わけではない」→ mang nghĩa "không hẳn là", nhưng có chút chủ quan, cảm xúc cá nhân.',
      },
    ],
  },
  {
    id: 'wakeganai',
    title: '～わけがない',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～わけがない',
        explanation:
          '📌「～わけがない」diễn đạt ý phủ định mạnh mẽ: "lẽ nào lại...", "không thể nào...", "không có lý nào...".\n' +
          '👉 Mẫu này thể hiện **niềm tin chắc chắn của người nói rằng điều đó hoàn toàn không thể xảy ra**.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể thường] + わけがない\n' +
          '🔹 [Tính từ -i] + わけがない\n' +
          '🔹 [Tính từ -na] + な + わけがない\n' +
          '🔹 [Danh từ] + の + わけがない',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Diễn tả sự **phủ định hoàn toàn** một khả năng, sự việc nào đó. Dùng khi người nói tin chắc điều đó **không thể xảy ra**, hoặc **vô lý** nếu xảy ra.\n\n' +
          '🗣 Có thể dịch là:\n' +
          '　・Làm gì có chuyện...\n' +
          '　・Không thể nào...\n' +
          '　・Không lý nào...\n' +
          '　・Chắc chắn không...',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. あの強いチームに勝てるわけがない。\n' +
          '→ Không thể nào thắng được đội mạnh như vậy.\n\n' +
          '2. この問題は小学生には解けるわけがない。\n' +
          '→ Vấn đề này học sinh tiểu học không thể nào giải được.\n\n' +
          '3. あんなに食べたら、太らないわけがないよ。\n' +
          '→ Ăn nhiều như vậy thì không mập mới là lạ đấy.\n\n' +
          '4. まじめな彼がそんなことをするわけがない。\n' +
          '→ Một người nghiêm túc như anh ấy thì không thể làm chuyện như thế.\n\n' +
          '5. このレストラン、美味しくないわけがないよ。いつも満席だもん。\n' +
          '→ Nhà hàng này không thể nào dở được đâu, vì lúc nào cũng kín chỗ mà.',
      },
      {
        title: '5. Lưu ý sử dụng',
        explanation:
          '🔸 Là cách nói thể hiện **chắc chắn về sự phủ định** dựa trên kinh nghiệm, logic hoặc cảm giác của người nói.\n' +
          '🔸 Có thể dùng thay thế với 「～はずがない」, tuy nhiên 「～わけがない」 có **sắc thái phủ định mạnh hơn**.\n' +
          '🔸 Không nên dùng với người lớn hơn trong tình huống trang trọng.',
      },
    ],
  },
  {
    id: 'younakigasure',
    title: '～ような気がする',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ような気がする',
        explanation:
          '📌「～ような気がする」được dùng để diễn đạt cảm giác, linh cảm, hoặc suy nghĩ mơ hồ rằng “hình như là…”, “có cảm giác như…”.\n' +
          '👉 Đây là cách nói mang tính chủ quan, thường được sử dụng khi người nói không chắc chắn hoàn toàn.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Động từ thể thường] + ような気がする\n' +
          '🔹 [Tính từ -i] + ような気がする\n' +
          '🔹 [Tính từ -na (bỏ な)] + なような気がする\n' +
          '🔹 [Danh từ] + のような気がする\n\n' +
          '📍 Có thể chia ở dạng quá khứ, phủ định: ～ような気がしない／～ような気がした…',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '💡 Dùng khi người nói không chắc chắn, chỉ dựa vào cảm giác hoặc trực giác.\n\n' +
          '🗣 Một số cách hiểu:\n' +
          '　・Có cảm giác là…\n' +
          '　・Hình như…\n' +
          '　・Tôi nghĩ là… (nhưng không chắc chắn)',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 彼の話は、どこかで聞いたような気がします。\n' +
          '→ Câu chuyện của anh ấy, tôi cảm thấy như đã nghe ở đâu đó rồi.\n\n' +
          '2. 今日は雨が降りそうな気がする。\n' +
          '→ Hôm nay có cảm giác là trời sẽ mưa.\n\n' +
          '3. この料理、前にも食べたような気がする。\n' +
          '→ Món ăn này, tôi cảm thấy như đã từng ăn rồi.\n\n' +
          '4. 彼は嘘をついているような気がする。\n' +
          '→ Tôi có cảm giác là anh ta đang nói dối.\n\n' +
          '5. あの人とは、前に会ったことがあるような気がします。\n' +
          '→ Tôi có cảm giác là đã từng gặp người đó rồi.',
      },
      {
        title: '5. Lưu ý sử dụng',
        explanation:
          '🔸 Đây là cách diễn đạt mang tính **chủ quan**, thể hiện phán đoán không chắc chắn.\n' +
          '🔸 Không nên dùng trong văn viết trang trọng hay báo cáo mang tính chắc chắn.\n' +
          '🔸 Thường kết hợp với 「ような気がする」「ような気がしない」để thể hiện sự không chắc chắn theo hướng tích cực/tiêu cực.',
      },
    ],
  },
  {
    id: 'dake',
    title: '～だけ / ～だけに / ～だけあって',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp',
        explanation:
          '📌 Các mẫu ngữ pháp với「だけ」liên quan đến giới hạn, xứng đáng, và kỳ vọng:\n' +
          '・～だけ: chỉ, đến mức\n' +
          '・～だけに: chính vì\n' +
          '・～だけあって: quả đúng là, đúng như kỳ vọng\n\n' +
          '👉 Ba mẫu này mang sắc thái khác nhau nhưng cùng liên quan đến mức độ, lý do, và đánh giá.',
      },
      {
        title: '2. ～だけ',
        explanation:
          '🔹 Cách dùng:\n・[Động từ thể khả năng] + だけ + [Động từ]\n→ Làm hết mức có thể, trong giới hạn cho phép.\n\n' +
          '🔸 Ví dụ:\n1. 食べたいだけ食べてください。\n→ Hãy ăn bao nhiêu tùy thích.\n2. 行けるだけ行ってみよう。\n→ Thử đi hết mức có thể.',
      },
      {
        title: '3. ～だけに',
        explanation:
          '🔹 Ý nghĩa: "chính vì… nên…"\n→ Nhấn mạnh mối liên hệ giữa nguyên nhân và kết quả, với cảm xúc mạnh hơn.\n\n' +
          '🔸 Ví dụ:\n1. 彼は努力しただけに、合格して本当にうれしそうだ。\n→ Chính vì đã nỗ lực nên khi đậu, anh ấy thật sự rất vui.\n' +
          '2. 有名なレストランだけに、サービスがすばらしい。\n→ Chính vì là nhà hàng nổi tiếng nên dịch vụ rất tuyệt vời.',
      },
      {
        title: '4. ～だけあって',
        explanation:
          '🔹 Ý nghĩa: "quả đúng là…", "đúng như kỳ vọng"\n→ Dùng để khen ngợi điều gì đó xứng đáng với điều kiện hoặc danh tiếng.\n\n' +
          '🔸 Ví dụ:\n1. 高かっただけあって、このカバンは長持ちします。\n→ Quả đúng là đắt, cái túi này dùng được lâu.\n' +
          '2. 彼はプロだけあって、演奏がすばらしい。\n→ Đúng là dân chuyên, màn trình diễn thật tuyệt vời.',
      },
      {
        title: '5. So sánh và lưu ý',
        explanation:
          '✅「だけ」→ chỉ giới hạn số lượng hoặc mức độ\n✅「だけに」→ nhấn mạnh nguyên nhân, thường mang cảm xúc\n✅「だけあって」→ đánh giá mang tính khen ngợi, kỳ vọng đúng\n\n📝 Cả ba mẫu đều thường dùng trong N2 trở lên, đặc biệt là trong văn viết hoặc khi nói trang trọng.',
      },
    ],
  },
  {
    id: 'nihokanaranai',
    title: '～にほかならない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～にほかならない」có nghĩa là "chính là...", "không gì khác ngoài..."\n' +
          '→ Dùng để khẳng định mạnh mẽ rằng điều gì đó chính là A, không phải B hay C.\n\n' +
          '📌 Cấu trúc:\n・[Danh từ] + にほかならない\n\n' +
          '💡 Mẫu câu mang tính nhấn mạnh và thường dùng trong văn viết, phát biểu, lập luận.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① このプロジェクトの成功は、皆さんの努力の結果にほかならない。\n→ Sự thành công của dự án này chính là kết quả từ nỗ lực của mọi người.\n\n' +
          '② 親が子供を叱るのは、愛情にほかならない。\n→ Việc cha mẹ la mắng con cái chính là vì yêu thương.\n\n' +
          '③ この制度は国民の声にほかならない。\n→ Chế độ này chính là tiếng nói của nhân dân.\n\n' +
          '④ 彼の行動は勇気の証にほかならない。\n→ Hành động của anh ấy chính là minh chứng cho lòng dũng cảm.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Thường đi với những danh từ thể hiện lý do, nguyên nhân, bản chất như: 愛情, 努力, 証, 結果…\n\n' +
          '🔸 Không dùng với các từ mang sắc thái tiêu cực hoặc những điều chưa chắc chắn.\n\n' +
          '🔸 So với「です」thì「にほかならない」mang tính khẳng định mạnh và trang trọng hơn.\n\n' +
          '📌 Là mẫu ngữ pháp thường gặp trong N2 hoặc N1.',
      },
    ],
  },
  {
    id: 'nikagirazu-n2',
    title: '～に限らず',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に限らず',
        explanation:
          '📌「～に限らず」có nghĩa là "không chỉ... mà còn...", dùng để mở rộng phạm vi đối tượng được nói đến. Đây là mẫu câu thường gặp trong văn viết hoặc các bài thi JLPT.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + に限らず\n\n🔸 Có thể đi kèm với những từ mang nghĩa giới hạn như「学生」「日本」「休日」v.v.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Diễn tả rằng một sự việc không chỉ áp dụng cho đối tượng A mà còn áp dụng cho các đối tượng khác tương tự.\n' +
          '→ Mở rộng phạm vi so với điều tưởng như là bị giới hạn.\n\n' +
          '✴ Dịch: "Không chỉ… mà còn… / Không giới hạn ở…".\n\n' +
          '📍 Thường dùng trong văn viết trang trọng, sách vở, bài báo.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. このイベントは学生に限らず、誰でも参加できます。\n→ Sự kiện này không chỉ sinh viên mà ai cũng có thể tham gia.\n\n' +
          '2. 日本に限らず、世界中で環境問題が注目されている。\n→ Không chỉ ở Nhật Bản, vấn đề môi trường đang được quan tâm trên toàn thế giới.\n\n' +
          '3. この番組は子供に限らず、大人にも人気がある。\n→ Chương trình này không chỉ trẻ em mà cả người lớn cũng yêu thích.\n\n' +
          '4. 平日はもちろん、週末に限らずいつでも利用できます。\n→ Không chỉ ngày thường, mà cả cuối tuần cũng có thể sử dụng bất kỳ lúc nào.',
      },
      {
        title: '5. Phân biệt với mẫu tương tự',
        explanation:
          '🔸「～だけでなく」: dùng phổ biến trong văn nói và viết, mang nghĩa gần giống.\n' +
          '🔸「～のみならず」: trang trọng hơn, dùng trong văn viết nhiều hơn.\n\n' +
          '✴ Ví dụ phân biệt:\n- 子供だけでなく、大人も楽しめる。\n- 子供に限らず、大人も楽しめる。\n→ Cả hai đều đúng, nhưng mẫu に限らず trang trọng và văn viết hơn.',
      },
    ],
  },
  {
    id: 'nikagiri',
    title: '～に限り',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に限り',
        explanation:
          '📌「～に限り」dùng để biểu thị sự giới hạn trong một phạm vi cụ thể, mang nghĩa "chỉ riêng...", "chỉ đối với...". Đây là mẫu câu trang trọng, thường dùng trong thông báo, văn bản chính thức.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Danh từ + に限り\n\n🔸 Không dùng với động từ hoặc tính từ.\n🔸 Khác với「だけ」ở chỗ「に限り」mang tính trang trọng và nhấn mạnh phạm vi đối tượng được đề cập.',
      },
      {
        title: '3. Ý nghĩa & cách dùng',
        explanation:
          '✅ Dùng khi muốn nhấn mạnh rằng "chỉ đối với..." một nhóm người, một đối tượng nào đó thì điều gì đó mới xảy ra hoặc áp dụng.\n\n' +
          '⛔ Không dùng trong văn nói thông thường. Thường gặp trong biển báo, nội quy, thông báo công cộng...',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 本日に限り、全商品が半額になります。\n→ Chỉ riêng hôm nay, toàn bộ sản phẩm sẽ giảm giá một nửa.\n\n' +
          '2. 70歳以上の方に限り、入場は無料です。\n→ Chỉ đối với những người trên 70 tuổi, vào cửa sẽ miễn phí.\n\n' +
          '3. このチラシをお持ちのお客様に限り、500円割引いたします。\n→ Chỉ khách hàng có mang tờ rơi này mới được giảm 500 yên.\n\n' +
          '4. 関係者に限り、立ち入りが許可されています。\n→ Chỉ những người có liên quan mới được phép vào khu vực này.',
      },
      {
        title: '5. Phân biệt với mẫu tương tự',
        explanation:
          '🔹「～に限り」khác với:\n- 「～だけ」: dùng phổ biến trong văn nói, ít trang trọng.\n- 「～に限って」: mang nghĩa đặc biệt, trái ngược với thông thường hoặc nói về điều gì không mong muốn xảy ra đúng vào lúc nào đó.\n\n' +
          '✴ Ví dụ phân biệt:\n- 学生だけが入れます。→ Chỉ học sinh được vào. (văn nói)\n- 学生に限り入れます。→ Chỉ học sinh được vào. (trang trọng, dùng trong thông báo).',
      },
    ],
  },
  {
    id: 'nisuginai',
    title: '～にすぎない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～にすぎない」có nghĩa là "chỉ là...", "không quá...", "không hơn..."\n' +
          '→ Dùng để diễn tả sự khiêm tốn hoặc đánh giá thấp về mức độ, quy mô của sự vật, sự việc.\n\n' +
          '📌 Cấu trúc:\n・[Danh từ] + にすぎない\n・[Thể thường (普通形)] + にすぎない\n  ※ Tính từ -na và danh từ: thêm である trước にすぎない\n\n' +
          '💡 Là cách nói trang trọng, hay dùng trong văn viết hoặc trong lập luận.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 彼はただの学生にすぎない。\n→ Anh ta chỉ là một sinh viên bình thường mà thôi.\n\n' +
          '② 私は命令に従ったにすぎません。\n→ Tôi chẳng qua chỉ làm theo mệnh lệnh mà thôi.\n\n' +
          '③ それはうわさにすぎない。\n→ Điều đó chỉ là tin đồn mà thôi.\n\n' +
          '④ この数字は参考にすぎないので、あまり気にしないでください。\n→ Con số này chỉ để tham khảo nên đừng quá lo lắng.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Nhấn mạnh rằng điều gì đó không quan trọng, không vượt quá giới hạn nào đó.\n\n' +
          '🔸 Thường đi với các từ như: ただ, ほんの, 単なる (chỉ là, đơn thuần là)... để tăng cường sắc thái giảm nhẹ.\n\n' +
          '📌 Đây là mẫu ngữ pháp thường gặp trong JLPT N2.',
      },
    ],
  },
  {
    id: 'toiumonoda',
    title: '～というものだ',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～というものだ」được dùng để thể hiện sự đánh giá, cảm xúc mạnh mẽ của người nói về một điều gì đó, thường mang sắc thái “thật là…” hoặc “đúng là…”.\n\n' +
          '📌 Dùng khi người nói muốn nhấn mạnh điều gì đó là đúng theo lẽ thường, cảm xúc thông thường hoặc sự đánh giá khách quan.\n\n' +
          '📌 Cấu trúc:\n・[Thể thường (普通形)] + というものだ\n  ※ Với danh từ, không cần だ\n\n' +
          '💡 Đây là mẫu câu trang trọng, thường gặp trong văn viết hoặc khi muốn bày tỏ sự cảm thán, đánh giá.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 初対面であんなにプライベートなことを聞くのは失礼というものだ。\n→ Việc hỏi chuyện riêng tư như thế ngay lần đầu gặp mặt thì thật là thất lễ.\n\n' +
          '② 毎日2時間もかけて通勤するのは大変というものだ。\n→ Mỗi ngày tốn đến 2 tiếng để đi làm thì thật là vất vả.\n\n' +
          '③ 子どもを叱る時に手をあげるのはやりすぎというものだ。\n→ Khi la mắng trẻ con mà dùng đến bạo lực thì thật là quá đáng.\n\n' +
          '④ 試合に負けて泣くのは悔しいというものだ。\n→ Sau trận thua mà bật khóc thì đúng là nỗi tiếc nuối.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Không dùng trong tình huống cần sự khách quan hoàn toàn, vì mang cảm xúc người nói.\n\n' +
          '🔸 Thường không dùng với những nội dung hoàn toàn trung lập.\n\n' +
          '📌 Đây là mẫu ngữ pháp thường gặp trong đề thi JLPT N2.',
      },
    ],
  },
  {
    id: 'donnanikotoka',
    title: 'どんなに～ことか',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「どんなに～ことか」là mẫu câu dùng để nhấn mạnh mức độ của cảm xúc, suy nghĩ, mong muốn, v.v... thường đi với các động từ, tính từ biểu thị cảm xúc.\n\n' +
          '→ Nghĩa: “...biết bao”, “...biết chừng nào”\n\n' +
          '📌 Cấu trúc:\n・どんなに + [Động từ/Tính từ] + ことか\n\n' +
          '💡 Đây là cách diễn đạt cảm xúc mạnh, thường dùng trong văn viết hoặc lời kể, hồi tưởng.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 国に帰りたかったことか。\n→ Tôi đã muốn về nước biết bao nhiêu.\n\n' +
          '② 子どものころ、弟とけんかして、どんなに泣いたことか。\n→ Hồi nhỏ, sau khi cãi nhau với em trai, tôi đã khóc biết bao nhiêu.\n\n' +
          '③ この日をどんなに待っていたことか。\n→ Tôi đã mong chờ ngày này biết bao nhiêu.\n\n' +
          '④ 両親がどんなに心配したことか。\n→ Bố mẹ đã lo lắng biết bao nhiêu.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Mẫu câu này thường dùng với các từ thể hiện cảm xúc như: 悲しい, 嬉しい, 寂しい, 心配する, ～たい, v.v.\n' +
          '🔸 Cuối câu thường không cần thêm trợ từ, và có thể lược bỏ chủ ngữ nếu đã rõ trong ngữ cảnh.\n\n' +
          '⚠️ Thường dùng trong văn viết, diễn văn, nhật ký, thư từ hoặc lời kể.\n\n' +
          '📌 Đây là mẫu ngữ pháp thường gặp trong đề thi JLPT N2.',
      },
    ],
  },
  {
    id: 'ikuratemo',
    title: 'いくら～ても',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「いくら～ても」là mẫu câu dùng để diễn tả rằng dù có làm gì, ở mức độ nào thì kết quả vẫn không thay đổi, vẫn không đạt được điều mong muốn.\n\n' +
          '→ Nghĩa: “Dù có… bao nhiêu đi nữa thì…”\n\n' +
          '📌 Cấu trúc:\n・いくら + [Động từ/Tính từ] + ても\n・いくら + [Tính từ -na/Danh từ] + でも\n\n' +
          '💡 Dùng để nhấn mạnh mức độ nỗ lực, số lượng, hay cảm xúc, nhưng kết quả vẫn như cũ.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① いくら勉強しても、日本語がうまくならない。\n→ Dù có học bao nhiêu đi nữa thì tiếng Nhật vẫn không giỏi lên.\n\n' +
          '② いくら高くても、それを買います。\n→ Dù đắt bao nhiêu đi nữa, tôi vẫn sẽ mua nó.\n\n' +
          '③ いくら頼んでも、彼はやってくれない。\n→ Dù có nhờ vả bao nhiêu lần đi nữa, anh ấy vẫn không chịu làm.\n\n' +
          '④ いくら好きでも、そんな高い物は買えません。\n→ Dù thích đến mấy, tôi cũng không thể mua món đồ đắt như vậy.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Mẫu câu thường dùng với nghĩa tiêu cực hoặc thể hiện sự bất lực.\n' +
          '🔸 Thường đứng đầu câu để nhấn mạnh mức độ "いくら".\n\n' +
          '⚠️ Không dùng mẫu này cho kết quả có thể thay đổi hay điều chỉnh được.\n\n' +
          '📌 Đây là mẫu câu xuất hiện thường xuyên trong đề thi JLPT N2.',
      },
    ],
  },
  {
    id: 'niseyo-niseyo',
    title: '～にせよ～にせよ',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～にせよ～にせよ」dùng để nêu hai ví dụ đại diện và khẳng định rằng dù là cái nào đi nữa thì kết luận ở vế sau cũng không thay đổi.\n\n' +
          '→ Nghĩa: "Dù là... hay là... thì cũng..."\n\n' +
          '📌 Cấu trúc:\n・[Danh từ / Động từ / Tính từ (thể thường)] + にせよ + [Danh từ / Động từ / Tính từ] + にせよ\n\n' +
          '💡 Mẫu này tương đương với「～にしろ～にしろ」và「～にしても～にしても」về mặt ý nghĩa và cách dùng.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 留学するにせよ就職するにせよ、早く決めたほうがいい。\n→ Dù là đi du học hay đi làm thì cũng nên quyết định sớm.\n\n' +
          '② 行くにせよ行かないにせよ、連絡してください。\n→ Dù đi hay không thì cũng hãy liên lạc.\n\n' +
          '③ 本物にせよ偽物にせよ、そんな高い物は買わない方がいい。\n→ Dù là đồ thật hay đồ giả thì cũng không nên mua đồ đắt như thế.\n\n' +
          '④ 結果が良いにせよ悪いにせよ、最後まで頑張るべきです。\n→ Dù kết quả tốt hay xấu thì cũng nên cố gắng đến cùng.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Có thể dùng với danh từ, động từ hoặc tính từ ở thể thông thường.\n' +
          '🔸 Cách dùng giống với:\n・～にしろ～にしろ\n・～にしても～にしても\n\n' +
          '⚠️ Không dùng với mệnh lệnh hay câu mang ý chí ở vế sau.\n\n' +
          '📌 Đây là mẫu ngữ pháp thường xuất hiện trong kỳ thi JLPT N2.',
      },
    ],
  },
  {
    id: 'nishiro-nishiro',
    title: '～にしろ～にしろ',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～にしろ～にしろ」dùng để đưa ra hai ví dụ đại diện và khẳng định rằng dù là cái nào thì kết luận ở vế sau cũng như nhau.\n\n' +
          '→ Nghĩa: "Dù là... hay là... thì cũng..."\n\n' +
          '📌 Cấu trúc:\n・[Danh từ] + にしろ + [Danh từ] + にしろ\n・[Động từ / Tính từ (thể thường)] + にしろ\n\n' +
          '💡 Có thể dùng thay thế cho ～にしても hoặc ～にせよ với cùng ý nghĩa.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 勉強するにしろ働くにしろ、目標が必要だ。\n→ Dù là học hay là làm việc thì cũng cần có mục tiêu.\n\n' +
          '② 肉にしろ魚にしろ、子どもは好き嫌いが多い。\n→ Dù là thịt hay cá, bọn trẻ thường rất kén ăn.\n\n' +
          '③ 行くにしろ行かないにしろ、早めに決めてください。\n→ Dù đi hay không đi, hãy quyết định sớm.\n\n' +
          '④ 本物にしろ偽物にしろ、値段が高すぎる。\n→ Dù là đồ thật hay đồ giả thì giá vẫn quá cao.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Có thể dùng với danh từ, động từ hoặc tính từ.\n' +
          '🔸 Cách dùng tương đương với:\n・～にしても～にしても\n・～にせよ～にせよ\n\n' +
          '⚠️ Vế sau KHÔNG được là mệnh lệnh hoặc ý chí (hãy, đừng, làm ơn...).\n\n' +
          '📌 Mẫu câu quan trọng cho JLPT N2.',
      },
    ],
  },
  {
    id: 'nishitemo-nishitemo',
    title: '～にしても～にしても',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～にしても～にしても」dùng để nêu ra hai ví dụ tiêu biểu và khẳng định rằng cho dù là cái nào đi nữa thì kết luận ở vế sau vẫn không thay đổi.\n\n' +
          '→ Có thể hiểu là: "Dù là... hay là..., thì cũng..."\n\n' +
          '📌 Cấu trúc:\n・[Danh từ] + にしても + [Danh từ] + にしても\n\n' +
          '💡 Thường đi kèm với các cặp từ có tính đối lập hoặc tương đồng để nhấn mạnh tính phổ quát hoặc không phân biệt.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 野菜にしても肉にしても、材料はすべて国産です。\n→ Dù là rau hay thịt thì nguyên liệu đều là hàng nội địa.\n\n' +
          '② 勉強にしても運動にしても、続けることが大切だ。\n→ Dù là học hay là tập luyện, việc duy trì đều quan trọng.\n\n' +
          '③ 行くにしても行かないにしても、連絡だけはしてください。\n→ Dù đi hay không thì cũng hãy báo cho tôi một tiếng.\n\n' +
          '④ 子どもにしても大人にしても、この映画は楽しめる。\n→ Dù là trẻ em hay người lớn thì bộ phim này đều có thể thưởng thức được.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Mẫu câu này có thể thay bằng:\n・～にしろ～にしろ\n・～にせよ～にせよ\n→ Cả ba mẫu đều có cách dùng tương tự nhau.\n\n' +
          '🔸 Vế sau thường là đánh giá chung, nhận định hoặc điều kiện không thay đổi dù có lựa chọn nào đi nữa.\n\n' +
          '📌 Là mẫu ngữ pháp quan trọng trong JLPT N2.',
      },
    ],
  },
  {
    id: 'toshitemo',
    title: '～としても',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～としても」diễn tả giả định rằng “cho dù là… thì cũng…”, nhấn mạnh rằng ngay cả khi điều đó đúng thì kết quả cũng không thay đổi.\n\n' +
          '→ Nghĩa: "Dù là… thì cũng…", "Giả sử là… thì cũng…"\n\n' +
          '📌 Cấu trúc:\n・[Động từ thể thường / Tính từ / Danh từ] + としても\n\n' +
          '💡 Mẫu câu này thường dùng để thể hiện ý kiến, phán đoán mang tính chủ quan ở vế sau.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 留学するとしても、来年以降だと思います。\n→ Dù có đi du học thì chắc cũng phải từ năm sau trở đi.\n\n' +
          '② 社長としても、社員の気持ちは理解できないかもしれない。\n→ Dù là giám đốc thì cũng chưa chắc hiểu được cảm xúc của nhân viên.\n\n' +
          '③ お金があるとしても、そんな高い車は買わない。\n→ Dù có tiền đi nữa thì tôi cũng không mua chiếc xe đắt như vậy.\n\n' +
          '④ 試験に合格したとしても、自信が持てない。\n→ Dù có đỗ kỳ thi đi nữa thì tôi cũng không cảm thấy tự tin.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸「～としても」thường đi kèm với các phó từ như たとえ (giả sử), もし (nếu), いくら (bao nhiêu đi nữa)...\n' +
          '🔸 So với「～ても」, mẫu này nhấn mạnh vào điều kiện giả định hơn, mang sắc thái lý luận.\n\n' +
          '📌 Đây là mẫu câu phổ biến trong giao tiếp lẫn văn viết, đặc biệt ở trình độ JLPT N2.',
      },
    ],
  },
  {
    id: 'naidewairarenai',
    title: '～ないではいられない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹 Mẫu「～ないではいられない」diễn tả **một cảm xúc, hành động nào đó quá mạnh mẽ, đến mức không thể không làm**.\n\n' +
          '📌 Ý nghĩa: “không thể không…”, “phải…”, “buộc phải…”\n\n' +
          '📎 Cấu trúc:\n' +
          '[Vない] + ではいられない\n' +
          '👉 Trong văn nói thường rút gọn thành: ～ないじゃいられない\n\n' +
          '✅ Thường dùng để thể hiện cảm xúc, hành vi không thể kiềm chế.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 彼の話を聞いて、笑わないではいられなかった。\n→ Nghe chuyện của anh ấy, tôi không thể không bật cười.\n\n' +
          '② あの映画を見ると、泣かないではいられない。\n→ Cứ xem bộ phim đó là tôi lại không thể không khóc.\n\n' +
          '③ 彼女の努力を見ると、応援しないではいられない。\n→ Thấy cô ấy nỗ lực, tôi không thể không cổ vũ.\n\n' +
          '④ この音楽を聞くと、踊らないではいられない。\n→ Nghe bản nhạc này là tôi không thể không nhảy theo.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Mẫu câu này nhấn mạnh tính **tự nhiên, không thể kiểm soát** của hành động hay cảm xúc.\n' +
          '🔸 Thường dùng để thể hiện tâm trạng sâu sắc của người nói.\n' +
          '🔸 Chủ ngữ thường là ngôi thứ nhất hoặc được hiểu ngầm trong ngữ cảnh.\n\n' +
          '📘 Là mẫu ngữ pháp trọng điểm trong JLPT N2.',
      },
    ],
  },
  {
    id: 'rareru',
    title: '～られる（tự発）',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹 Mẫu 「～られる」 ngoài nghĩa là thể bị động, còn có một cách dùng đặc biệt gọi là **tự phát**.\n\n' +
          '📌 Ý nghĩa: Diễn tả **tự nhiên nghĩ/ cảm thấy/ làm điều gì đó** mà **không có chủ ý rõ ràng**.\n' +
          '→ Giống như nói “chợt thấy…”, “tự nhiên nghĩ đến…”, “bỗng dưng muốn…” trong tiếng Việt.\n\n' +
          '📎 Cấu trúc:\n' +
          '[Động từ nhóm II (V2)] られる\n' +
          '[Động từ nhóm I (V1)] chuyển sang thể bị động\n\n' +
          '✅ Thường dùng với các động từ liên quan đến: 思う (nghĩ), 感じる (cảm nhận), 見える (trông thấy), 聞こえる (nghe thấy), v.v.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① この曲を聞くと、学生時代が思い出される。\n→ Nghe bài này, tôi chợt nhớ lại thời học sinh.\n\n' +
          '② 子どもたちの笑顔を見ると、心が温かく感じられる。\n→ Nhìn nụ cười của bọn trẻ, tôi tự nhiên cảm thấy ấm lòng.\n\n' +
          '③ 遠くの山が美しく見られます。\n→ Có thể nhìn thấy ngọn núi ở xa thật đẹp.\n\n' +
          '④ その話を聞いて、涙が出されました。\n→ Nghe chuyện đó, nước mắt tôi bỗng trào ra.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Đây không phải là câu bị động (bị ai đó làm gì), mà là cảm xúc, phản ứng **tự nhiên phát sinh**.\n' +
          '🔸 Thường dùng trong văn viết, văn phong nhẹ nhàng, sâu lắng.\n' +
          '🔸 Cần phân biệt rõ với thể bị động thông thường để tránh hiểu sai nghĩa.\n\n' +
          '📘 Là điểm ngữ pháp trong chương trình JLPT N2.',
      },
    ],
  },
  {
    id: 'saserareru',
    title: '～させられる',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～させられる」là thể **bị động sai khiến** (bị ép buộc làm gì đó).\n' +
          '→ Diễn tả việc bị ai đó bắt buộc làm điều mà bản thân không mong muốn.\n\n' +
          '📌 Nghĩa: “bị bắt làm…”, “bị ép làm…”\n\n' +
          '📎 Cấu trúc:\n' +
          '・Nhóm 1: chuyển sang thể 受け身 (bị động) đặc biệt:\n' +
          '　　例: 書く → 書かせられる、行く → 行かされる\n' +
          '・Nhóm 2: [Vます] + させられる\n' +
          '　　例: 食べる → 食べさせられる\n' +
          '・Nhóm 3:\n' +
          '　　する → させられる\n' +
          '　　くる → こさせられる\n\n' +
          '📝 Dùng khi muốn nhấn mạnh cảm giác bị ép buộc.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 子どものとき、野菜を食べさせられました。\n→ Hồi nhỏ tôi bị bắt ăn rau.\n\n' +
          '② 毎日残業させられて、本当に疲れています。\n→ Ngày nào cũng bị bắt làm thêm, thật sự mệt mỏi.\n\n' +
          '③ 先生に作文を何回も書かされました。\n→ Tôi bị cô giáo bắt viết văn nhiều lần.\n\n' +
          '④ 上司に飲み会に行かされました。\n→ Tôi bị sếp bắt đi nhậu.\n\n' +
          '⑤ 雨の中、走らされて風邪をひいた。\n→ Tôi bị bắt chạy trong mưa rồi bị cảm.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Mẫu「～させられる」thường dùng để than phiền, bày tỏ cảm giác không hài lòng.\n' +
          '🔸 Các động từ nhóm 1 có cách chia đặc biệt, cần lưu ý như:\n' +
          '　・読む → 読まされる（口語）/ 読ませられる（文語）\n' +
          '　・行く → 行かされる（bất quy tắc nhẹ）\n\n' +
          '⚠️ Tránh nhầm với thể bị động đơn thuần (～られる), vì ～させられる có nghĩa “bị ép buộc”, chứ không chỉ “bị”.\n\n' +
          '📘 Đây là cấu trúc phổ biến trong JLPT N2.',
      },
    ],
  },
  {
    id: 'tenaranai',
    title: '～てならない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹 Mẫu ngữ pháp「～てならない」dùng để **diễn tả cảm giác hoặc trạng thái rất mạnh mẽ, không thể ngừng lại, không thể chịu đựng được**.\n\n' +
          '📌 Ý nghĩa: “không thể không…, rất…, không chịu nổi…”\n\n' +
          '📎 Cấu trúc:\n' +
          '[Vて] + ならない\n' +
          '[Aい（くて）] + ならない\n' +
          '[Aな（で）] + ならない\n\n' +
          '✅ Thường dùng để diễn tả cảm giác không thể cưỡng lại, ví dụ như cảm xúc mạnh mẽ, lo lắng, mong muốn, v.v.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 心配でならない。\n→ Lo lắng không chịu nổi.\n\n' +
          '② 彼のことが好きでならない。\n→ Tôi rất thích anh ấy, không thể dừng lại.\n\n' +
          '③ こんなに美しい景色を見て、感動せずにはいられない。\n→ Tôi không thể không cảm động khi nhìn thấy cảnh đẹp như thế này.\n\n' +
          '④ 今夜は寝てならない。\n→ Tối nay tôi phải ngủ, không thể không ngủ.\n\n' +
          '⑤ 勉強しなくてはならない。\n→ Tôi phải học, không thể không học.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 「～てならない」thường được sử dụng trong những tình huống không thể cưỡng lại được cảm xúc, hành động hoặc trạng thái rất mạnh mẽ.\n' +
          '🔸 Mẫu này khác với「～てたまらない」vì「～てたまらない」nhấn mạnh vào cảm xúc mạnh mẽ còn「～てならない」thường mang tính bắt buộc, không thể không làm.\n\n' +
          '📘 Là mẫu ngữ pháp quan trọng trong JLPT N2.',
      },
    ],
  },
  {
    id: 'teshouganai-n2',
    title: '～てしょうがない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹 Mẫu ngữ pháp「～てしょうがない」dùng để **diễn tả cảm xúc, trạng thái mạnh mẽ không thể kiểm soát được**.\n\n' +
          '📌 Ý nghĩa: “rất...”, “...không chịu được”, “...vô cùng”\n\n' +
          '📎 Cấu trúc:\n' +
          '[Vて] + しょうがない / 仕方がない / たまらない\n' +
          '[Aい（くて）] + しょうがない\n' +
          '[Aな（で）] + しょうがない\n\n' +
          '✅ Thường dùng với các từ thể hiện cảm xúc hoặc trạng thái cơ thể như:\n' +
          '　会いたい、欲しい、眠い、痛い、心配だ、うれしい、かなしい…',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① お腹が空いてしょうがない。\n→ Tôi đói không chịu nổi.\n\n' +
          '② 明日の面接が心配で仕方がない。\n→ Tôi lo lắng kinh khủng về buổi phỏng vấn ngày mai.\n\n' +
          '③ 子どもがかわいくてたまらない。\n→ Thấy con dễ thương không chịu nổi.\n\n' +
          '④ 頭が痛くてしょうがないので、今日は早く帰ります。\n→ Vì đau đầu kinh khủng nên hôm nay tôi sẽ về sớm.\n\n' +
          '⑤ この歌を聞くと、彼のことが思い出されてしょうがない。\n→ Cứ nghe bài này là lại nhớ anh ấy vô cùng.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Là cách nói khá cảm xúc, nên **thường dùng trong văn nói hoặc viết thân mật**.\n' +
          '🔸 「～てたまらない」「～て仕方がない」có sắc thái tương tự, nhưng:\n' +
          '　　・たまらない → mạnh nhất, dùng khi cảm xúc quá mức, đôi khi mang hơi tiêu cực\n' +
          '　　・しょうがない → mức độ trung bình\n' +
          '　　・仕方がない → thường trang trọng hơn\n\n' +
          '⚠️ Không dùng với hành động có chủ ý hoặc khách quan như: 勉強してしょうがない ❌\n\n' +
          '📘 Là mẫu ngữ pháp quan trọng trong JLPT N2.',
      },
    ],
  },
  {
    id: 'tetamaranai',
    title: '～てたまらない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹 Mẫu ngữ pháp「～てたまらない」dùng để **diễn tả cảm xúc, trạng thái mạnh mẽ đến mức không thể chịu đựng nổi**.\n\n' +
          '📌 Ý nghĩa: “rất...”, “...không chịu nổi”, “...vô cùng”\n\n' +
          '📎 Cấu trúc:\n' +
          '[Vて] + たまらない\n' +
          '[Aい（くて）] + たまらない\n' +
          '[Aな（で）] + たまらない\n\n' +
          '✅ Thường dùng với từ thể hiện cảm xúc hoặc cảm giác cơ thể (うれしい、会いたい、痛い、眠い、ほしい、など)',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 会いたくてたまらない。\n→ Nhớ đến mức không chịu nổi.\n\n' +
          '② 頭が痛くてたまらない。\n→ Đau đầu khủng khiếp.\n\n' +
          '③ 息子の合格がうれしくてたまらない。\n→ Tôi vui sướng vô cùng khi con trai đỗ.\n\n' +
          '④ この映画は悲しくてたまらなかった。\n→ Bộ phim này buồn không chịu nổi.\n\n' +
          '⑤ 暑くてたまらないので、冷房（れいぼう）をつけた。\n→ Nóng không chịu nổi nên tôi bật điều hòa.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 「～てたまらない」mạnh hơn「～てしょうがない」về cảm xúc, nhấn mạnh cảm xúc quá mức.\n' +
          '🔸 Không dùng cho các hành động có chủ ý như 勉強してたまらない ❌\n' +
          '🔸 Chủ ngữ thường là ngôi thứ nhất (tôi), hoặc ngôi thứ ba với biểu hiện cảm xúc rõ ràng.\n\n' +
          '📘 Là mẫu ngữ pháp trọng điểm trong JLPT N2.',
      },
    ],
  },
  {
    id: 'zuniwairarenai',
    title: '～ずにはいられない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～ずにはいられない」có ý nghĩa giống với「～ないではいられない」, dùng để diễn tả **cảm xúc hoặc hành động không thể kiềm chế được**.\n\n' +
          '📌 Ý nghĩa: “không thể không…”, “buộc phải…”, “phải làm…”\n\n' +
          '📎 Cấu trúc:\n' +
          '[Vない (bỏ ない)] + ずにはいられない\n' +
          '📌 Đặc biệt: 「する」→「せずにはいられない」\n\n' +
          '👉 Mang tính văn viết hơn so với「～ないではいられない」。',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 彼の優しさに感動せずにはいられなかった。\n→ Tôi đã không thể không cảm động trước sự tử tế của anh ấy.\n\n' +
          '② この曲を聞くと、歌わずにはいられない。\n→ Nghe bài hát này là tôi không thể không hát theo.\n\n' +
          '③ あの映画は何度見ても、泣かずにはいられない。\n→ Dù xem bộ phim đó bao nhiêu lần đi nữa, tôi vẫn không thể không khóc.\n\n' +
          '④ 彼の話は面白くて、笑わずにはいられなかった。\n→ Câu chuyện của anh ấy quá hài nên tôi không thể nhịn cười.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Mẫu ngữ pháp này dùng trong văn viết hoặc trong hoàn cảnh trang trọng.\n' +
          '🔸 Chủ ngữ thường là người nói hoặc ngôi thứ nhất, thể hiện cảm xúc cá nhân.\n' +
          '🔸 Tương đương nghĩa với「～ないではいられない」nhưng có sắc thái trang trọng hơn.\n\n' +
          '📘 Là mẫu ngữ pháp quan trọng trong kỳ thi JLPT N2.',
      },
    ],
  },
  {
    id: 'ageku',
    title: '～あげく',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～あげく（に）',
        explanation:
          '📌「～あげく」diễn tả ý nghĩa **sau một quá trình kéo dài với nhiều khó khăn/vất vả, cuối cùng lại nhận kết quả không như mong muốn hoặc tiêu cực**.\n\n' +
          '👉 Nghĩa: "Sau khi... thì rốt cuộc là...", "Cuối cùng thì..." (với kết quả không tốt)',
      },
      {
        title: '2. Cấu trúc',
        explanation: '🔸【動詞た形】 + あげく（に）\n🔸【名詞 + の】 + あげく（に）',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Nhấn mạnh **quá trình dài, nhiều lần lặp lại, vất vả**, nhưng **kết quả lại không như ý**, thậm chí **tiêu cực** hoặc **đáng tiếc**.\n' +
          '✅ Mẫu câu mang cảm xúc thất vọng, nuối tiếc của người nói.\n' +
          '❗ Thường dùng với các từ như: 迷う（まよう）, 喧嘩する（けんかする）, 苦労する（くろうする）, 悩む（なやむ）など。',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. いろいろ悩んだあげく、やっぱり留学をやめることにしました。\n' +
          '→ Sau bao nhiêu trăn trở, cuối cùng tôi đã quyết định từ bỏ việc du học.\n\n' +
          '2. けんかのあげく、二人は別れてしまった。\n' +
          '→ Sau một trận cãi nhau kịch liệt, hai người đã chia tay.\n\n' +
          '3. 長時間の議論のあげく、結論が出なかった。\n' +
          '→ Sau cuộc tranh luận kéo dài, cuối cùng cũng không đưa ra được kết luận.\n\n' +
          '4. 高いお金を払ったあげく、何も得られなかった。\n' +
          '→ Sau khi bỏ ra số tiền lớn, cuối cùng lại chẳng nhận được gì.',
      },
      {
        title: '5. So sánh với ～末に（すえに）',
        explanation:
          '🔹「～末に」: Tập trung vào quá trình lâu dài và kết quả thường **tốt/khách quan**.\n' +
          '🔹「～あげく」: Nhấn mạnh **kết quả tiêu cực hoặc không như ý muốn**.\n\n' +
          '📍Ví dụ:\n' +
          '・悩んだ末に、医者になることを決めた。\n' +
          '→ Sau nhiều trăn trở, tôi đã quyết định làm bác sĩ. (→ kết quả tích cực)\n\n' +
          '・悩んだあげく、どれも買わなかった。\n' +
          '→ Sau khi đắn đo, cuối cùng chẳng mua cái nào. (→ kết quả không như mong muốn)',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '🔸 Mang tính văn viết, thường xuất hiện trong sách, bài luận, văn nói trang trọng.\n' +
          '🔸 Không dùng cho hành động đơn giản, không có quá trình dài hoặc không mang cảm xúc thất vọng.\n' +
          '🔸 Chủ ngữ thường là người (cảm xúc rõ rệt).',
      },
    ],
  },
  {
    id: 'nioujite',
    title: '～に応じて',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に応じて',
        explanation:
          '📌「～に応じて」（におうじて）dùng để diễn đạt sự thay đổi tương ứng hoặc phù hợp với một điều gì đó. Nghĩa là: "ứng với...", "tùy theo...", "phù hợp với...".\n\n' +
          '🔸 Đây là mẫu ngữ pháp thường dùng trong văn viết hoặc các ngữ cảnh trang trọng.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹【名詞】 + に応じて\n' +
          '🔹【名詞】 + に応じ（た／て）+ 名詞\n\n' +
          '📌 Có thể biến đổi linh hoạt tùy theo ngữ cảnh:\n' +
          '・に応じて\n' +
          '・に応じた + 名詞\n' +
          '・に応じた対応（たいおう）: xử lý phù hợp\n',
      },
      {
        title: '3. Ý nghĩa sử dụng',
        explanation:
          '✅ Diễn tả việc thay đổi cho phù hợp, tương ứng với điều gì đó như: mức độ, tình huống, năng lực, nhu cầu,...\n\n' +
          '🔸 Thường dùng trong thông báo, quy định, hoặc các bối cảnh công việc, hành chính.\n' +
          '🔸 Không dùng cho những thay đổi ngẫu nhiên, không kiểm soát được.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 収入（しゅうにゅう）**に応じて**、生活スタイルを変える。\n' +
          '→ Thay đổi lối sống phù hợp với thu nhập.\n\n' +
          '2. 成績**に応じて**、奨学金（しょうがくきん）が支給（しきゅう）される。\n' +
          '→ Học bổng sẽ được cấp tương ứng với thành tích.\n\n' +
          '3. 年齢（ねんれい）**に応じた**運動をすることが大切です。\n' +
          '→ Việc vận động phù hợp với độ tuổi là rất quan trọng.\n\n' +
          '4. お客様のご希望**に応じて**、商品をおすすめします。\n' +
          '→ Chúng tôi sẽ giới thiệu sản phẩm theo nguyện vọng của khách hàng.',
      },
      {
        title: '5. So sánh với các mẫu tương tự',
        explanation:
          '🔹「～に応じて」 nhấn mạnh sự **tương ứng, thích ứng** linh hoạt theo điều gì đó.\n' +
          '🔹「～に従って」 thì nhấn mạnh sự **tuân theo, đi cùng với** một xu hướng, quá trình.\n' +
          '🔹「～によって」 dùng rộng hơn, thường để chỉ **nguyên nhân, phương pháp, tác nhân**.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '📌 Thường đi với các từ chỉ mức độ, điều kiện, nhu cầu như:\n' +
          '・年齢、能力、収入、状況、希望、需要（じゅよう）、場合\n\n' +
          '📌 Không dùng khi kết quả vế sau là điều hoàn toàn ngẫu nhiên hoặc không liên quan logic.',
      },
    ],
  },
  {
    id: 'nisotte',
    title: '～に沿って',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～に沿って',
        explanation:
          '📌「～に沿って」（にそって）dùng để diễn tả sự tuân theo, dựa trên, hoặc bám sát theo một chuẩn mực, quy định, phương châm, quy trình... nào đó.\n\n' +
          '👉 Nghĩa: "theo...", "dựa trên...", "bám sát..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸【名詞】 + に沿って\n' +
          '🔸【名詞】 + に沿った + 【名詞】\n\n' +
          '✔ Dạng biến thể:\n' +
          '・に沿って + V\n' +
          '・に沿った + danh từ\n',
      },
      {
        title: '3. Ý nghĩa sử dụng',
        explanation:
          '✅ Diễn tả hành động, sự việc được thực hiện theo một phương châm, tiêu chuẩn, luật lệ, kế hoạch, v.v.\n\n' +
          '🔹 Thường dùng trong các ngữ cảnh trang trọng, hành chính, học thuật, công việc.\n' +
          '🔹 Nhấn mạnh sự không lệch ra ngoài khuôn khổ đã định sẵn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 計画（けいかく）**に沿って**、プロジェクトを進めましょう。\n' +
          '→ Hãy tiến hành dự án theo đúng kế hoạch.\n\n' +
          '2. 方針（ほうしん）**に沿った**指導（しどう）が行われた。\n' +
          '→ Việc chỉ đạo đã được thực hiện theo đúng phương châm.\n\n' +
          '3. お客様のご希望**に沿って**、商品を提案します。\n' +
          '→ Chúng tôi sẽ đề xuất sản phẩm theo đúng mong muốn của khách hàng.\n\n' +
          '4. 法律（ほうりつ）**に沿って**判断する必要がある。\n' +
          '→ Cần phải phán đoán theo đúng pháp luật.',
      },
      {
        title: '5. So sánh với các mẫu tương tự',
        explanation:
          '🔹「～に従って」: nhấn mạnh việc làm theo một sự thay đổi, xu hướng hay mệnh lệnh.\n' +
          '🔹「～に応じて」: nhấn mạnh sự thay đổi tương ứng tùy theo tình huống.\n' +
          '🔹「～に沿って」: nhấn mạnh sự bám sát theo phương châm, kế hoạch, tiêu chuẩn.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '📌 Không dùng「～に沿って」với các danh từ không mang tính định hướng như “人”, “もの” thông thường.\n\n' +
          '📌 Thường đi kèm với các danh từ như:\n' +
          '・計画、方針、方角、テーマ、法律、ルール、指示、目的、要望（ようぼう）',
      },
    ],
  },
  {
    id: 'niwatatte',
    title: '～にわたって',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～にわたって',
        explanation:
          '📌「～にわたって」dùng để diễn tả sự việc diễn ra **trên một phạm vi rộng lớn**, kéo dài về **không gian** hoặc **thời gian**.\n\n' +
          '👉 Nghĩa: "trong suốt...", "trải suốt...", "trên khắp..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸【名詞】 + にわたって\n' +
          '🔸【名詞】 + にわたる + 【名詞】\n\n' +
          '✔ Dạng thường đi kèm: 時間 (thời gian), 場所 (địa điểm), 範囲 (phạm vi), 分野 (lĩnh vực), 期間 (giai đoạn), etc.',
      },
      {
        title: '3. Ý nghĩa sử dụng',
        explanation:
          '✅ Dùng khi muốn nói rằng điều gì đó kéo dài/trải rộng **liên tục** trong một **khoảng thời gian** hoặc **không gian cụ thể**.\n' +
          '✅ Nhấn mạnh độ **rộng lớn**, **toàn bộ**, hoặc **trải dài liên tục** của phạm vi đó.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 会議は3日間（みっかかん）**にわたって**行われました。\n' +
          '→ Cuộc họp đã được tổ chức suốt trong 3 ngày.\n\n' +
          '2. その台風は九州全域（ぜんいき）**にわたって**被害をもたらした。\n' +
          '→ Cơn bão đó đã gây thiệt hại trên khắp vùng Kyushu.\n\n' +
          '3. 彼は長年（ながねん）**にわたる**研究の成果を発表した。\n' +
          '→ Anh ấy đã công bố kết quả của nghiên cứu kéo dài nhiều năm.\n\n' +
          '4. この博物館には時代（じだい）**にわたる**貴重（きちょう）な資料が展示されている。\n' +
          '→ Bảo tàng này trưng bày những tư liệu quý giá trải qua nhiều thời đại.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔹「～を通じて」: nhấn mạnh quá trình liên tục, xuyên suốt, thường đi với phương tiện (メールを通じて).\n' +
          '🔹「～にわたって」: nhấn mạnh sự trải dài về không gian/thời gian cụ thể.\n' +
          '🔹「～間」: chỉ thời gian nhưng không nhấn mạnh độ bao phủ rộng như 「にわたって」.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '📌 Không dùng với hành động chỉ xảy ra tại **một thời điểm cụ thể**.\n' +
          '📌 Không dùng với các danh từ không mang tính khoảng rộng như「一人」「一回」「一日」.\n\n' +
          '📌 Hay gặp trong các văn bản trang trọng, tin tức, báo chí, báo cáo nghiên cứu.',
      },
    ],
  },
  {
    id: 'sueni',
    title: '～末に',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～末に（すえに）',
        explanation:
          '📌「～末に」diễn tả ý nghĩa **sau một khoảng thời gian dài thực hiện một hành động nào đó**, thì cuối cùng đạt được một kết quả hay đưa ra được một quyết định.\n\n' +
          '👉 Nghĩa: "Sau khi…", "sau một hồi…", "cuối cùng thì…"',
      },
      {
        title: '2. Cấu trúc',
        explanation: '🔸【動詞た形】 + 末に\n' + '🔸【名詞】 + の + 末に',
      },
      {
        title: '3. Ý nghĩa và cách dùng',
        explanation:
          '✅ Mẫu câu này nhấn mạnh quá trình **kéo dài, gian nan, nhiều suy nghĩ, do dự, hoặc nỗ lực**, cuối cùng đưa ra được kết quả.\n' +
          '✅ Thường đi với các động từ như: 悩む（なやむ）, 考える（かんがえる）, 話し合う（はなしあう）, 続ける（つづける）など。\n' +
          '❗ Vế sau thường là kết quả quan trọng, mang tính quyết định hoặc có thay đổi lớn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. いろいろ悩んだ末に、留学することにしました。\n' +
          '→ Sau rất nhiều trăn trở, cuối cùng tôi đã quyết định đi du học.\n\n' +
          '2. 長い議論の末に、やっと契約が結ばれた。\n' +
          '→ Sau một cuộc tranh luận dài, cuối cùng hợp đồng cũng được ký kết.\n\n' +
          '3. 考えた末に、会社を辞めることにした。\n' +
          '→ Sau khi suy nghĩ kỹ, tôi đã quyết định nghỉ việc.\n\n' +
          '4. 激しい練習の末に、彼はチャンピオンになった。\n' +
          '→ Sau những buổi luyện tập khắc nghiệt, cuối cùng anh ấy đã trở thành nhà vô địch.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔹「～た結果（けっか）」: Tập trung vào **kết quả sau hành động** (không nhất thiết phải là quá trình dài hay khó khăn).\n' +
          '🔹「～末に」: Nhấn mạnh **quá trình lâu dài, nhiều nỗ lực/suy nghĩ**.\n\n' +
          '📍Ví dụ:\n' +
          '・調査した結果、原因が分かった。\n' +
          '→ Sau khi điều tra thì biết được nguyên nhân. (→ không nhấn mạnh quá trình dài)\n\n' +
          '・調査を重ねた末に、原因が分かった。\n' +
          '→ Sau quá trình điều tra nhiều lần, cuối cùng mới hiểu nguyên nhân. (→ nhấn mạnh quá trình)',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '🔸 Mẫu câu mang tính văn viết, thường dùng trong báo chí, luận văn, văn trang trọng.\n' +
          '🔸 Không dùng với kết quả mang tính tiêu cực quá mạnh như tai nạn, chết người, thất bại to lớn.\n' +
          '🔸 Không dùng để diễn tả hành động hàng ngày, sự việc diễn ra ngắn hạn.',
      },
    ],
  },
  {
    id: 'tameni',
    title: '～ために',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ために',
        explanation:
          '📌「～ために」 có hai cách dùng chính:\n' +
          '① Diễn tả **mục đích**: "để..."\n' +
          '② Diễn tả **nguyên nhân/lý do**: "vì..."\n\n' +
          '🌱 Trong N2, thường gặp hơn ở nghĩa nguyên nhân/lý do, nhưng có thể phân biệt được theo ngữ cảnh và dạng động từ theo sau.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸【Vる / Danh từ + の】+ ため（に）\n\n' +
          '✅ Khi mang nghĩa **mục đích**:\n' +
          '・Phía sau là động từ mang hành động có chủ ý.\n\n' +
          '✅ Khi mang nghĩa **nguyên nhân/lý do**:\n' +
          '・Phía sau là kết quả, sự việc xảy ra do nguyên nhân ở vế trước.\n' +
          '・Không dùng cho các câu mang cảm xúc/cảm giác cá nhân như うれしい、かなしい、～たい, v.v.',
      },
      {
        title: '3. Ý nghĩa và phân biệt',
        explanation:
          '🔹 Nghĩa 1 – Mục đích:\n' +
          '👉 Để làm gì đó, với mục tiêu đạt được điều gì đó.\n\n' +
          '🔹 Nghĩa 2 – Nguyên nhân:\n' +
          '👉 Vì một lý do nào đó mà dẫn đến kết quả.\n\n' +
          '⚠️ Phân biệt với:\n' +
          '・「～ように」: dùng với động từ không chủ ý (được, có thể, biết v.v.)\n' +
          '・「～ので」「～から」: lý do đơn thuần, không trang trọng bằng 「～ために」',
      },
      {
        title: '4. Ví dụ minh họa (mục đích)',
        explanation:
          '1. 日本で働く**ために**、日本語を勉強しています。\n' +
          '→ Tôi học tiếng Nhật để làm việc tại Nhật.\n\n' +
          '2. 健康(けんこう)の**ために**、毎朝ジョギングをしています。\n' +
          '→ Tôi chạy bộ mỗi sáng vì sức khỏe.\n\n' +
          '3. 家族(かぞく)の**ために**、一生懸命働いています。\n' +
          '→ Tôi làm việc chăm chỉ vì gia đình.',
      },
      {
        title: '5. Ví dụ minh họa (nguyên nhân)',
        explanation:
          '1. 台風(たいふう)の**ために**、飛行機が欠航(けっこう)になりました。\n' +
          '→ Vì bão nên chuyến bay bị hủy.\n\n' +
          '2. 病気(びょうき)の**ために**、仕事を辞めました。\n' +
          '→ Vì bệnh nên tôi nghỉ việc.\n\n' +
          '3. 工事(こうじ)の**ために**、この道は通れません。\n' +
          '→ Vì đang thi công nên không thể đi qua con đường này.',
      },
      {
        title: '6. Lưu ý khi sử dụng',
        explanation:
          '🔸 Có thể thay bằng「～ため」 (bỏ に) trong văn viết.\n' +
          '🔸 Không dùng「～ために」 với các động từ biểu thị cảm xúc khi mang nghĩa nguyên nhân.\n' +
          '🔸 Tránh dùng「～ために」 trong hội thoại thân mật với người quen; nên dùng「～から」「～ので」 thay thế.',
      },
    ],
  },
  {
    id: 'wotsuujite',
    title: '～を通じて／～を通して',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～を通じて／～を通して',
        explanation:
          '📌「～を通じて／～を通して」được dùng để diễn tả:\n' +
          '① Một hành động, trạng thái diễn ra **suốt một khoảng thời gian nào đó**.\n' +
          '② Thực hiện việc gì đó **thông qua một phương tiện, cách thức nào đó**.\n\n' +
          '👉 Nghĩa: "suốt...", "thông qua...", "bằng cách..."',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔸【名詞】 + を通じて（つうじて）\n' +
          '🔸【名詞】 + を通して（とおして）\n\n' +
          '✔ Hai cách dùng này gần như giống nhau, có thể thay thế trong đa số trường hợp.',
      },
      {
        title: '3. Ý nghĩa sử dụng',
        explanation:
          '✅ Diễn tả **thời gian**: Hành động hoặc trạng thái **kéo dài liên tục** trong suốt khoảng thời gian nào đó.\n' +
          '✅ Diễn tả **phương tiện, trung gian**: Thực hiện một việc gì đó **thông qua** một người, vật, tổ chức, phương tiện nào đó.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '1. 一年を通じて、この地方では雨が少ない。\n' +
          '→ Suốt cả năm, khu vực này ít mưa.\n\n' +
          '2. インターネットを通じて、世界の情報を手に入れることができる。\n' +
          '→ Có thể lấy được thông tin thế giới thông qua Internet.\n\n' +
          '3. 子供たちはボランティア活動を通して、多くのことを学んだ。\n' +
          '→ Trẻ em đã học được nhiều điều thông qua hoạt động tình nguyện.\n\n' +
          '4. 彼とは共通の友人を通じて知り合いました。\n' +
          '→ Tôi quen anh ấy thông qua một người bạn chung.',
      },
      {
        title: '5. So sánh với mẫu tương tự',
        explanation:
          '🔹「～にわたって」: nhấn mạnh phạm vi không gian/thời gian rộng kéo dài liên tục.\n' +
          '🔹「～を通じて／通して」: tập trung vào sự **xuyên suốt (trong thời gian)** hoặc **trung gian/cách thức để hành động xảy ra**.\n\n' +
          '🟡 Ví dụ phân biệt:\n' +
          '・10年間にわたって研究した。→ Nhấn mạnh khoảng thời gian nghiên cứu liên tục suốt 10 năm.\n' +
          '・10年間を通じて研究した。→ Nhấn mạnh việc nghiên cứu suốt 10 năm, không bỏ dở giữa chừng.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '📌 「～を通じて」 thường dùng trong văn viết, trang trọng hơn so với 「～を通して」.\n' +
          '📌 Có thể dùng cả hai dạng để diễn tả **sự trung gian** lẫn **thời gian kéo dài**.\n' +
          '📌 Không dùng với các danh từ chỉ thời điểm cụ thể (ví dụ: 一日、一瞬).',
      },
    ],
  },
  {
    id: 'youni',
    title: '～ように',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ように',
        explanation:
          '📌「～ように」 là mẫu câu dùng để:\n' +
          '① Diễn tả mục đích (để mà...)\n' +
          '② Diễn tả kết quả/kỳ vọng (sao cho...)\n' +
          '③ Diễn tả theo như, giống như...',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹【Vる／Vない／Vた】+ ように\n' +
          '🔹【V可能形】+ ように\n' +
          '🔹【名詞の / 普通形】+ ように (dạng diễn tả giống như)\n\n' +
          '⚠️ Chủ yếu dùng với động từ **không chủ ý** (có thể, hiểu, biết, nhìn thấy...).',
      },
      {
        title: '3. Ý nghĩa & phân biệt',
        explanation:
          '✅ Nghĩa 1 – Mục đích:\n' +
          '・Dùng để nói về mục tiêu nhằm đạt được một trạng thái/kết quả nào đó.\n' +
          '・Khác với「～ために」: không dùng với động từ mang ý chí mạnh.\n\n' +
          '✅ Nghĩa 2 – Giống như, theo như:\n' +
          '・Dùng để mô tả sự việc giống như một điều đã biết.\n\n' +
          '📌 Phân biệt:\n' +
          '・「～ように」: dùng với **khả năng, trạng thái**.\n' +
          '・「～ために」: dùng với **hành động có mục đích rõ**.',
      },
      {
        title: '4. Ví dụ minh họa (mục đích)',
        explanation:
          '1. 忘れない**ように**、メモしてください。\n' +
          '→ Hãy ghi chú lại để khỏi quên.\n\n' +
          '2. 子どもが読める**ように**、ふりがなをつけました。\n' +
          '→ Tôi đã thêm furigana để trẻ em có thể đọc.\n\n' +
          '3. 日本語が上手に話せる**ように**、毎日練習しています。\n' +
          '→ Tôi luyện tập mỗi ngày để có thể nói tiếng Nhật giỏi.',
      },
      {
        title: '5. Ví dụ minh họa (theo như, giống như)',
        explanation:
          '1. 先生が言った**ように**、練習すれば大丈夫です。\n' +
          '→ Làm theo lời thầy nói, nếu luyện tập là sẽ ổn thôi.\n\n' +
          '2. 予定通りに、会議は3時に始まりました。\n' +
          '→ Cuộc họp đã bắt đầu lúc 3 giờ như dự định.\n\n' +
          '3. 彼の言う**ように**、これは簡単ではありません。\n' +
          '→ Như anh ấy nói, việc này không đơn giản.',
      },
      {
        title: '6. Lưu ý sử dụng',
        explanation:
          '🔸 Không dùng cho các động từ thể hiện hành động có chủ ý mạnh như「決める」「選ぶ」「努力する」v.v.\n' +
          '🔸 Khi muốn diễn đạt mục đích với động từ mang ý chí mạnh → dùng「～ために」.\n' +
          '🔸 Trong văn nói, có thể rút gọn thành 「ようにね」,「ようにして」',
      },
    ],
  },
  {
    id: 'amari',
    title: '～あまり',
    sections: [
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
          '→ Vì quá vui nên anh ấy đã rơi nước mắt。\n\n' +
          '2. 試験の前の日、緊張のあまり眠れなかった。\n' +
          '→ Vì quá căng thẳng trước kỳ thi nên tôi đã không ngủ được。\n\n' +
          '3. 驚きのあまり、声が出ませんでした。\n' +
          '→ Vì quá ngạc nhiên nên tôi không thốt nên lời。\n\n' +
          '4. 子供を失った悲しみのあまり、彼女は何日も泣いていた。\n' +
          '→ Vì quá đau buồn vì mất con nên cô ấy đã khóc nhiều ngày。',
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
    ],
  },
  {
    id: 'bakarini',
    title: '～ばかりに',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ばかりに',
        explanation:
          '📌「～ばかりに」 dùng để diễn tả **một kết quả tiêu cực xảy ra chỉ vì một lý do nào đó**, dù lý do đó không lớn hoặc không đáng kể.\n' +
          '👉 Dịch: "Chỉ vì… mà…", "Chỉ tại… nên… (kết quả xấu)"',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + ばかりに\n' +
          '🔹 Tính từ -i + ばかりに\n' +
          '🔹 Tính từ -na (な) + ばかりに\n' +
          '🔹 Danh từ + である + ばかりに',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔍 Diễn đạt sự tiếc nuối, bất mãn hoặc hối hận vì một nguyên nhân gây ra hậu quả không mong muốn.\n' +
          '⚠️ Chủ yếu dùng với kết quả tiêu cực, không vui.\n' +
          '📌 Vế sau thường là kết quả không tốt, khó khăn hoặc ngoài ý muốn.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. お金がないばかりに、夢をあきらめなければならなかった。\n' +
          '→ Chỉ vì không có tiền mà tôi đã phải từ bỏ giấc mơ.\n\n' +
          '2. 住所を間違えて書いたばかりに、手紙が届かなかった。\n' +
          '→ Chỉ vì ghi sai địa chỉ mà lá thư đã không đến nơi.\n\n' +
          '3. 私がヘンなことを言ったばかりに、みんながしらけてしまった。\n' +
          '→ Chỉ vì tôi nói điều kỳ cục mà mọi người trở nên mất hứng.\n\n' +
          '4. 有名人であるばかりに、プライバシーがない。\n' +
          '→ Chỉ vì là người nổi tiếng nên không có sự riêng tư.',
      },
      {
        title: '5. So sánh với 「～せいで」 và 「～ために」',
        explanation:
          '🔸「～せいで」 và 「～ために」 cũng dùng để nêu nguyên nhân kết quả xấu, nhưng:\n' +
          '・「～ばかりに」 nhấn mạnh cảm xúc tiếc nuối, và nguyên nhân thường là một **việc nhỏ nhặt**.\n' +
          '📝 Ví dụ:\n' +
          '・遅刻したせいで、先生に怒られた。\n' +
          '→ Vì đến muộn nên bị thầy mắng. (không nhất thiết là điều tiếc nuối)\n\n' +
          '・遅刻したばかりに、大事な話を聞き逃した。\n' +
          '→ Chỉ vì đến muộn mà lỡ mất chuyện quan trọng. (→ tiếc nuối, nhấn mạnh hậu quả)',
      },
    ],
  },
  {
    id: 'dake_ni',
    title: '～だけに',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～だけに',
        explanation:
          '📌「～だけに」 dùng để **nhấn mạnh mối quan hệ giữa nguyên nhân và kết quả**, thể hiện rằng vì một lý do nào đó nên kết quả xảy ra là điều hoàn toàn hợp lý hoặc ngược lại là kết quả không như mong đợi càng gây ấn tượng mạnh.\n' +
          '👉 Dịch: "Chính vì… nên càng…", "Chính vì… nên lại càng…"',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + だけに\n' +
          '🔹 Tính từ -i + だけに\n' +
          '🔹 Tính từ -na (な) + だけに\n' +
          '🔹 Danh từ + である + だけに\n\n' +
          '📌 Có thể đứng giữa câu hoặc đầu câu.',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔍 Diễn tả một kết quả, cảm xúc, ấn tượng mạnh mẽ **do chính nguyên nhân được nêu ra** gây ra.\n' +
          '🔹 Thường là điều gì đó đặc biệt, vượt trội, hoặc ngược lại – gây bất ngờ vì không đúng như mong đợi.\n' +
          '📌 Vế sau thể hiện cảm xúc mạnh, kết quả tương xứng hoặc trái ngược, thường không dùng cho hành động ý chí của người nói.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 頑張って練習しただけに、試合で負けたのはショックだった。\n' +
          '→ Chính vì đã luyện tập chăm chỉ nên việc thua trong trận đấu thật sự là cú sốc.\n\n' +
          '2. 彼は経験者だけに、仕事が早いですね。\n' +
          '→ Chính vì anh ấy là người có kinh nghiệm nên làm việc rất nhanh nhẹn。\n\n' +
          '3. 親が有名人だけに、子どもは自由に行動できないことが多い。\n' +
          '→ Chính vì cha mẹ là người nổi tiếng nên con cái thường không được tự do hành động。\n\n' +
          '4. あの店は人気があるだけに、いつも混んでいる。\n' +
          '→ Chính vì cửa hàng đó nổi tiếng nên lúc nào cũng đông khách。',
      },
      {
        title: '5. Phân biệt với 「～だけあって」',
        explanation:
          '🔹「～だけあって」 cũng có nghĩa là “quả không hổ là…”, nhưng thường đi với đánh giá tích cực và chủ yếu dùng khi **khen ngợi**.\n' +
          '🔹「～だけに」 có thể dùng trong cả hai chiều hướng: tích cực (khen) hoặc tiêu cực (bất ngờ, tiếc nuối).\n\n' +
          '📝 Ví dụ:\n' +
          '・このホテルは高いだけあって、サービスが素晴らしい。\n' +
          '→ Quả đúng là khách sạn đắt, dịch vụ tuyệt vời。\n\n' +
          '・このホテルは高いだけに、期待はずれだったらがっかりする。\n' +
          '→ Chính vì khách sạn đắt, nếu không như mong đợi thì sẽ thất vọng lắm。',
      },
    ],
  },
  {
    id: 'kara_ni_wa_ijou',
    title: '～からには / ～以上は',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～からには / ～以上は',
        explanation:
          '📌「～からには」 và 「～以上は」 đều dùng để diễn đạt ý nghĩa: **"một khi đã... thì đương nhiên..."**.\n' +
          '👉 Mẫu này thể hiện sự quyết tâm, bổn phận, trách nhiệm, hoặc kỳ vọng hiển nhiên dựa trên một sự thật đã biết.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + からには / 以上は\n' +
          '🔹 Tính từ + からには / 以上は\n' +
          '🔹 Danh từ + である + からには / 以上は\n\n' +
          '※ Chủ yếu dùng với mệnh đề sau mang nghĩa: "phải...", "nên...", "đương nhiên...", "muốn..."',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔍 Diễn tả sự **bắt buộc, quyết tâm hoặc nghĩa vụ** khi đã xác định một tình huống, điều kiện nào đó.\n' +
          '💬 Có thể dịch là:\n' +
          '・"Một khi đã... thì..."\n' +
          '・"Đã... thì đương nhiên phải..."\n' +
          '・"Vì đã... nên..."',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 日本に来たからには、日本語をしっかり勉強したい。\n' +
          '→ Một khi đã đến Nhật, tôi muốn học tiếng Nhật nghiêm túc.\n\n' +
          '2. 約束したからには、守らなければなりません。\n' +
          '→ Một khi đã hứa thì phải giữ lời.\n\n' +
          '3. 試合に出る以上は、勝ちたいと思う。\n' +
          '→ Đã tham gia thi đấu thì tôi muốn thắng.\n\n' +
          '4. 学生である以上は、勉強を第一にすべきだ。\n' +
          '→ Đã là học sinh thì nên đặt việc học lên hàng đầu.',
      },
      {
        title: '5. So sánh 「～からには」 và 「～以上は」',
        explanation:
          '🔸 Hai mẫu này rất giống nhau và có thể thay thế cho nhau trong hầu hết trường hợp.\n' +
          '🔹「～からには」 thường dùng trong văn nói hơn, mang tính cảm xúc nhiều hơn.\n' +
          '🔹「～以上は」 thiên về văn viết, trang trọng hơn một chút.\n' +
          '📝 Ví dụ:\n' +
          '・やるからには、最後までやるべきだ。\n' +
          '・やる以上は、最後までやるべきだ。',
      },
    ],
  },
  {
    id: 'koto_dashi',
    title: '～ことだし',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ことだし',
        explanation:
          '📌「～ことだし」 được dùng để **nêu lý do, nguyên nhân chính** trong số nhiều lý do khác để đưa ra quyết định hoặc hành động.\n' +
          '👉 Dịch: "Vì… nên…", "Do… nên…"\n' +
          '✨ Mẫu câu này thường đi kèm với những hành động, quyết định hay đề xuất ở vế sau.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + ことだし\n' +
          '🔹 Tính từ -i + ことだし\n' +
          '🔹 Tính từ -na + な + ことだし\n' +
          '🔹 Danh từ + である + ことだし\n\n' +
          '📌 Dạng rút gọn trong văn nói: ～し (mang ý nghĩa tương tự nhưng đơn giản hơn)',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔎 Diễn tả một lý do chính mà từ đó người nói đưa ra một hành động hay nhận định. Hàm ý còn có các lý do khác nữa nhưng không nhắc đến.\n' +
          '📌 Sử dụng nhiều trong văn nói, lịch sự và tự nhiên.\n' +
          '📌 Vế sau thường là: 「～ましょう」「～たほうがいい」「～よう」「～たらどう」…',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 雨も降っていることだし、今日は家でゆっくりしよう。\n' +
          '→ Vì trời cũng đang mưa nên hôm nay ở nhà nghỉ ngơi thôi.\n\n' +
          '2. 彼は疲れていることだし、早く帰らせてあげたほうがいいよ。\n' +
          '→ Vì anh ấy cũng đang mệt, nên để anh ấy về sớm thì hơn.\n\n' +
          '3. 来週は試験があることだし、今週末は勉強しようと思う。\n' +
          '→ Vì tuần sau có bài kiểm tra, nên cuối tuần này tôi định học.\n\n' +
          '4. 初めてのことだし、うまくいかなくても仕方がないよ。\n' +
          '→ Vì đây là lần đầu, nên dù không suôn sẻ cũng là điều dễ hiểu.',
      },
      {
        title: '5. So sánh với 「～ので」「～から」',
        explanation:
          '🔁 「～から」「～ので」: đưa lý do đơn thuần.\n' +
          '🔁 「～ことだし」: đưa lý do **chính**, hàm ý còn nhiều lý do khác, thường dùng để **đề xuất hành động** hay đưa ra **quyết định** nhẹ nhàng.\n\n' +
          '📝 Ví dụ:\n' +
          '・寒いから、帰りましょう。\n' +
          '→ Vì lạnh nên về thôi. (lý do trực tiếp)\n' +
          '・寒いことだし、帰りましょう。\n' +
          '→ Vì cũng đang lạnh (và có lẽ còn lý do khác nữa) nên về thôi. (nhẹ nhàng, lịch sự hơn)',
      },
    ],
  },
  {
    id: 'mono_dakara',
    title: '～ものだから',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～ものだから',
        explanation:
          '📌「～ものだから」 được dùng để **giải thích lý do, nguyên nhân** một cách nhẹ nhàng, thường là để biện minh cho hành động hoặc thái độ của người nói.\n' +
          '👉 Dịch: "Vì...", "Do..."\n' +
          '✨ Thường được dùng trong văn nói và mang sắc thái cá nhân, thể hiện sự cảm xúc hoặc hoàn cảnh riêng.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể thường + ものだから\n' +
          '🔹 Tính từ -i + ものだから\n' +
          '🔹 Tính từ -na + な + ものだから\n' +
          '🔹 Danh từ + な + ものだから\n\n' +
          '📌 Dạng rút gọn trong hội thoại thân mật: ～もんだから / ～もんで',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔎 Mẫu câu này được dùng để giải thích lý do **mang tính cá nhân**, và thường dùng khi người nói muốn **xin lỗi, biện hộ hoặc làm dịu tình huống**.\n' +
          '❗ Không dùng trong văn viết trang trọng.\n' +
          '❗ Vế sau thường là sự thật, kết quả do vế trước gây ra.',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 道が混んでいたものだから、遅れてしまいました。\n' +
          '→ Vì đường đông nên tôi đã đến trễ.\n\n' +
          '2. 子どもなものだから、よくわからないんです。\n' +
          '→ Vì là trẻ con nên nó không hiểu rõ đâu.\n\n' +
          '3. 疲れていたものだから、早く寝てしまいました。\n' +
          '→ Vì mệt nên tôi đã đi ngủ sớm.\n\n' +
          '4. 初めてなものだから、うまくできませんでした。\n' +
          '→ Vì là lần đầu nên tôi đã không làm tốt.',
      },
      {
        title: '5. So sánh với 「～ので」、「～から」',
        explanation:
          '🔁 「～から」「～ので」: chung chung, trung tính.\n' +
          '🔁 「～ものだから」: thiên về cảm xúc cá nhân, lý do mang tính cá nhân hơn, thường là **biện minh** hoặc **xin lỗi**.\n\n' +
          '📝 Ví dụ:\n' +
          '・遅れたから、すみません。\n' +
          '→ Tôi xin lỗi vì đã đến trễ. (trung lập)\n' +
          '・遅れたものだから、すみません。\n' +
          '→ Tôi xin lỗi, vì lý do bất đắc dĩ nên đã đến trễ. (mềm mỏng, cá nhân hơn)',
      },
    ],
  },
  {
    id: 'okage_de',
    title: '～おかげで',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～おかげで',
        explanation:
          '📌 Mẫu câu 「～おかげで」 được dùng để **diễn tả sự biết ơn hoặc nguyên nhân tích cực** dẫn đến kết quả tốt.\n\n' +
          '👉 Dịch nghĩa tiếng Việt thường là: **"nhờ có...", "nhờ vào..."**.\n' +
          '🔎 Thường dùng khi muốn **cảm ơn, thể hiện sự may mắn, thuận lợi** do một nguyên nhân nào đó mang lại.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Danh từ] + の + おかげで\n' +
          '🔹 [Động từ thể thường] + おかげで\n' +
          '🔹 [Tính từ -i/-na] + おかげで\n\n' +
          '✅ Có thể dùng「おかげだ」「おかげです」ở cuối câu để nhấn mạnh.',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🎯 Mẫu này thường dùng trong văn nói/lịch sự để:\n' +
          '・Biểu thị sự biết ơn đối với một người/sự việc đã giúp đỡ mình.\n' +
          '・Ngụ ý rằng nhờ vào nguyên nhân A mà kết quả B tích cực xảy ra.\n\n' +
          '⚠️ Lưu ý:\n' +
          '・Không dùng để nói về bản thân một cách khoe khoang.\n' +
          '・Trái nghĩa: ～せいで (chỉ nguyên nhân tiêu cực).',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 先生のおかげで、日本語が上手になりました。\n' +
          '→ Nhờ thầy giáo mà tôi đã giỏi tiếng Nhật hơn.\n\n' +
          '2. 両親のおかげで大学に行けました。\n' +
          '→ Nhờ bố mẹ mà tôi có thể vào đại học.\n\n' +
          '3. 薬を飲んだおかげで、風邪がよくなった。\n' +
          '→ Nhờ uống thuốc nên cảm đã đỡ.\n\n' +
          '4. 友達が手伝ってくれたおかげで、早く終わりました。\n' +
          '→ Nhờ bạn giúp nên tôi hoàn thành sớm.',
      },
      {
        title: '5. So sánh với ～せいで',
        explanation:
          '🔁 「～おかげで」 chỉ nguyên nhân tích cực.\n' +
          '🔁 「～せいで」 chỉ nguyên nhân tiêu cực.\n\n' +
          '📝 Ví dụ so sánh:\n' +
          '・雨が降った**おかげで**、涼しくなった。\n' +
          '→ Nhờ trời mưa nên trời mát hơn.\n\n' +
          '・雨が降った**せいで**、試合が中止になった。\n' +
          '→ Do trời mưa nên trận đấu bị hoãn.',
      },
    ],
  },
  {
    id: 'sei_de',
    title: '～せいで',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～せいで',
        explanation:
          '📌 「～せいで」 dùng để **chỉ nguyên nhân dẫn đến kết quả tiêu cực, không mong muốn**.\n' +
          '👉 Dịch nghĩa tiếng Việt: **"tại...", "vì... nên..."** (theo nghĩa trách móc, tiêu cực).\n' +
          '⚠️ Mẫu này mang ý nghĩa trách móc hoặc phàn nàn về nguyên nhân.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 [Danh từ] + の + せいで\n' +
          '🔹 [Động từ thể thường] + せいで\n' +
          '🔹 [Tính từ -i/-na] + せいで\n\n' +
          '❗Có thể dùng dưới dạng 「～せいか」 khi không chắc chắn nguyên nhân.',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔎 Dùng khi muốn nói rằng **do nguyên nhân nào đó mà dẫn đến hậu quả xấu**.\n' +
          '❗Người nói thường cảm thấy không hài lòng với kết quả.\n\n' +
          '💡 Trái nghĩa: ～おかげで (chỉ nguyên nhân tích cực).',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 雨のせいで、試合が中止になった。\n' +
          '→ Tại trời mưa nên trận đấu bị hoãn.\n\n' +
          '2. 疲れたせいで、集中できなかった。\n' +
          '→ Vì mệt nên không thể tập trung được.\n\n' +
          '3. 道が混んでいたせいで、遅刻しました。\n' +
          '→ Vì đường đông nên tôi đã đến muộn.\n\n' +
          '4. あなたのせいで、みんな困っているんですよ！\n' +
          '→ Tại anh mà mọi người đang khổ sở đấy!',
      },
      {
        title: '5. So sánh với ～おかげで',
        explanation:
          '🔁 「～せいで」: nguyên nhân tiêu cực → kết quả xấu.\n' +
          '🔁 「～おかげで」: nguyên nhân tích cực → kết quả tốt.\n\n' +
          '📝 Ví dụ so sánh:\n' +
          '・雨が降った**せいで**、電車が止まった。\n' +
          '→ Vì mưa nên tàu dừng lại. (kết quả tiêu cực)\n\n' +
          '・雨が降った**おかげで**、涼しくなった。\n' +
          '→ Nhờ có mưa mà trời trở nên mát mẻ. (kết quả tích cực)',
      },
    ],
  },
  {
    id: 'ue_wa',
    title: '～上は',
    sections: [
      {
        title: '1. Giới thiệu mẫu ngữ pháp ～上は',
        explanation:
          '📌「～上は」 (うえは) mang nghĩa: **"một khi đã..."**, dùng để biểu thị rằng khi đã quyết định một điều gì đó thì kết quả hoặc hành động tiếp theo là điều đương nhiên.\n' +
          '🟡 Thường đi với các động từ chỉ quyết định, hành động đã rồi, mang sắc thái trách nhiệm hoặc quyết tâm.',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể từ điển + 上は\n' +
          '🔹 Động từ thể quá khứ + 上は\n\n' +
          '※ Chủ yếu đi với các động từ như: やる、行く、決める、受ける、引き受ける、辞める v.v.',
      },
      {
        title: '3. Ý nghĩa và sắc thái',
        explanation:
          '🔍 Ý nghĩa: **"Một khi đã... thì phải..." / "Vì đã... nên đương nhiên..."**\n' +
          '💡 Vế sau thường là:\n' +
          '・Ý chí, nguyện vọng của người nói (～つもりだ、～決心だ)\n' +
          '・Suy luận đương nhiên (～べきだ、～はずだ、～にちがいない)\n' +
          '・Mệnh lệnh, yêu cầu, khuyên bảo (～なさい、～べきだ、～てください)',
      },
      {
        title: '4. Ví dụ minh họa',
        explanation:
          '📝 例文:\n' +
          '1. 約束した上は、守らなければいけない。\n' +
          '→ Một khi đã hứa thì phải giữ lời.\n\n' +
          '2. 引き受けた上は、最後まで責任を持ってやるべきだ。\n' +
          '→ Một khi đã nhận thì phải có trách nhiệm làm đến cùng.\n\n' +
          '3. 日本で働くと決めた上は、しっかり日本語を勉強しようと思う。\n' +
          '→ Một khi đã quyết định làm việc ở Nhật thì tôi sẽ học tiếng Nhật nghiêm túc.\n\n' +
          '4. 試合に出る上は、勝つつもりで頑張ってください。\n' +
          '→ Một khi đã tham gia trận đấu thì hãy cố gắng với quyết tâm chiến thắng.',
      },
      {
        title: '5. So sánh với 「～からには」 và 「～以上は」',
        explanation:
          '🔸「～上は」 gần giống với「～からには」và「～以上は」 về ý nghĩa "một khi đã... thì...".\n' +
          '🔹 Tuy nhiên, 「～上は」 thường dùng trong văn viết hoặc tình huống trang trọng hơn.\n' +
          '🔸「～上は」 tập trung vào hành động hoặc quyết định đã xảy ra, từ đó dẫn đến nghĩa vụ hoặc kết quả hiển nhiên.',
      },
    ],
  },
  {
    id: 'kanenai',
    title: '～かねない',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～かねない」diễn tả khả năng một hành động hoặc kết quả xấu, không mong muốn có thể xảy ra.\n' +
          '👉 Mang nghĩa "có thể dẫn đến", "có thể xảy ra (điều xấu)".\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể masu (bỏ ます)] + かねない\n\n' +
          'Ví dụ: 「彼は失敗しかねない」(Anh ấy có thể thất bại)',
      },
      {
        title: '2. Cách dùng và ý nghĩa',
        explanation:
          '✅ Dùng để diễn tả sự cảnh báo, lo lắng về khả năng xảy ra điều không tốt.\n' +
          '✅ Thường mang ý nghĩa tiêu cực hoặc cảnh báo.\n\n' +
          'Ví dụ:\n' +
          '・そんなことを言うと、誤解を招きかねない。\n' +
          '→ Nếu nói như thế, có thể gây ra hiểu lầm.\n' +
          '・遅刻しかねないので、急いだほうがいい。\n' +
          '→ Vì có thể bị trễ, nên nên nhanh lên.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 無理をすると、体を壊しかねない。\n' +
          '→ Nếu làm quá sức, có thể làm hỏng cơ thể.\n\n' +
          '② 彼の態度は問題を起こしかねない。\n' +
          '→ Thái độ của anh ấy có thể gây ra vấn đề.\n\n' +
          '③ このままだと、失敗しかねない。\n' +
          '→ Nếu cứ thế này, có thể sẽ thất bại.',
      },
    ],
  },
  {
    id: 'kaneru',
    title: '～かねる',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～かねる」diễn tả sự không thể thực hiện một hành động nào đó vì lý do chủ quan hoặc khách quan.\n' +
          '👉 Thường dùng trong các câu lịch sự, trang trọng để từ chối nhẹ nhàng hoặc thể hiện sự do dự.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể masu (bỏ ます)] + かねる\n\n' +
          'Ví dụ: 「承知しかねます」(Tôi không thể chấp nhận/không thể đồng ý)',
      },
      {
        title: '2. Cách dùng và ý nghĩa',
        explanation:
          '✅ Thể hiện sự từ chối hoặc không thể làm điều gì đó một cách nhẹ nhàng, lịch sự.\n' +
          '✅ Thường dùng trong công việc, giao tiếp trang trọng.\n' +
          '✅ Có thể hiểu là “khó có thể làm…”, “không thể…”\n\n' +
          'Ví dụ:\n' +
          '・その提案には賛成しかねます。\n' +
          '→ Tôi khó có thể đồng ý với đề xuất đó.\n' +
          '・お手伝いしかねます。\n' +
          '→ Tôi không thể giúp được.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① ご要望には応じかねます。\n' +
          '→ Tôi không thể đáp ứng yêu cầu của quý vị.\n\n' +
          '② その問題についてはお答えしかねます。\n' +
          '→ Tôi không thể trả lời về vấn đề đó.\n\n' +
          '③ 申し訳ありませんが、その件はお引き受けしかねます。\n' +
          '→ Xin lỗi, tôi không thể nhận vụ đó.',
      },
    ],
  },
  {
    id: 'ni_atatte',
    title: '～にあたって',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～にあたって」diễn tả thời điểm đặc biệt, quan trọng khi bắt đầu một sự việc, hành động.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ] + にあたって\n' +
          '[Động từ thể từ điển] + にあたって\n\n' +
          '📎 Dịch là: "Khi bắt đầu...", "Nhân dịp...", mang tính trang trọng.',
      },
      {
        title: '2. Đặc điểm',
        explanation:
          '✅ Thường dùng trong các văn cảnh trang trọng như thông báo, phát biểu, thư từ chính thức.\n' +
          '✅ Diễn tả thời điểm chuẩn bị hoặc bắt đầu một sự kiện quan trọng.\n' +
          '✅ Có ý nghĩa tích cực, thể hiện sự chuẩn bị kỹ càng hoặc ý thức nghiêm túc.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 新しいプロジェクトを始めるにあたって、計画を立てた。\n' +
          '→ Khi bắt đầu dự án mới, tôi đã lập kế hoạch.\n\n' +
          '② 入学にあたって、保護者説明会が行われる。\n' +
          '→ Nhân dịp nhập học, sẽ có buổi họp phụ huynh.\n\n' +
          '③ 海外赴任にあたって、家族と相談した。\n' +
          '→ Khi chuẩn bị đi công tác nước ngoài, tôi đã bàn bạc với gia đình.',
      },
      {
        title: '4. So sánh với 「～に際して」',
        explanation:
          '🔸「～にあたって」và「～に際して」có nghĩa tương tự nhưng 「～にあたって」thường nhấn mạnh đến **giai đoạn chuẩn bị, bắt đầu** một cách tích cực.\n' +
          '🔸「～に際して」mang tính trang trọng hơn, dùng trong các văn bản, thông báo nghiêm túc.\n' +
          '🔸 Ví dụ:\n' +
          '・就任にあたって、決意を述べた。\n' +
          '・就任に際して、決意を述べた。',
      },
    ],
  },
  {
    id: 'ni_oite',
    title: '～において',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～において」dùng để chỉ **địa điểm**, **thời điểm**, hoặc **bối cảnh** mà một hành động hoặc sự kiện xảy ra.\n\n' +
          '📌 Ý nghĩa: "Tại...", "Ở...", "Trong..."\n\n' +
          '📎 Cấu trúc:\n' +
          '[Danh từ (địa điểm/thời gian)] + において',
      },
      {
        title: '2. Đặc điểm',
        explanation:
          '✅ Là cách diễn đạt mang tính trang trọng, thường dùng trong văn viết, tin tức, phát biểu, báo cáo.\n' +
          '✅ Có thể thay thế bằng「で」trong nhiều trường hợp, nhưng「において」mang sắc thái cứng, trang trọng hơn.\n' +
          '✅ Cũng có thể dùng ở dạng:\n' +
          '　- においては: nhấn mạnh phạm vi\n' +
          '　- における + Danh từ: dạng bổ nghĩa cho danh từ',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 会議は第一会議室において行われます。\n→ Cuộc họp được tổ chức tại phòng họp số 1.\n\n' +
          '② 現代社会において、インターネットは欠かせない存在だ。\n→ Trong xã hội hiện đại, Internet là thứ không thể thiếu.\n\n' +
          '③ オリンピックは東京において開催されました。\n→ Olympic đã được tổ chức tại Tokyo.\n\n' +
          '④ 教育において重要なのは、個人の能力を伸ばすことです。\n→ Trong giáo dục, điều quan trọng là phát triển năng lực cá nhân.\n\n' +
          '⑤ 日本における少子化は深刻な問題です。\n→ Việc tỷ lệ sinh thấp ở Nhật Bản là một vấn đề nghiêm trọng.',
      },
      {
        title: '4. So sánh với 「で」',
        explanation:
          '🔸「で」: dùng trong văn nói hàng ngày, nhẹ nhàng hơn.\n' +
          '🔸「において」: trang trọng, dùng trong văn viết, báo cáo, văn bản hành chính.\n\n' +
          '🧠 Ví dụ:\n' +
          '・会議は東京で行われた。 (bình thường)\n' +
          '・会議は東京において行われた。 (trang trọng)',
      },
    ],
  },
  {
    id: 'ni_saishite',
    title: '～に際して',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～に際して」dùng để diễn tả **thời điểm đặc biệt** khi bắt đầu một điều gì đó quan trọng hoặc có tính trang trọng.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ] + に際して\n' +
          '[Động từ thể từ điển] + に際して\n\n' +
          '📎 Dịch là: “Khi…”, “Vào lúc…”, “Nhân dịp…”, mang tính trang trọng hơn so với「～とき」',
      },
      {
        title: '2. Đặc điểm',
        explanation:
          '✅ Thường dùng trong các văn bản nghi thức, diễn văn, thông báo, bài phát biểu...\n' +
          '✅ Diễn tả thời điểm xảy ra hành động quan trọng như: khai trương, kết hôn, bắt đầu công việc, đăng ký, thi cử…\n' +
          '✅ Không dùng cho những hành động thường ngày hoặc mang tính tự nhiên.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 入学（にゅうがく）に際して、お祝いの言葉を申し上げます。\n→ Nhân dịp nhập học, tôi xin gửi lời chúc mừng.\n\n' +
          '② 契約（けいやく）に際して、注意すべきことを説明します。\n→ Khi ký hợp đồng, tôi sẽ giải thích những điều cần lưu ý.\n\n' +
          '③ 開会（かいかい）に際して、一言（ひとこと）ご挨拶（あいさつ）申し上げます。\n→ Nhân dịp khai mạc, tôi xin có đôi lời phát biểu.\n\n' +
          '④ 海外に出発するに際して、家族にお礼を言った。\n→ Trước khi xuất phát ra nước ngoài, tôi đã cảm ơn gia đình.',
      },
      {
        title: '4. So sánh với các mẫu khác',
        explanation:
          '🔸「～にあたって」có ý nghĩa tương tự, dùng cho thời điểm bắt đầu hành động quan trọng (nhưng thường tích cực hơn).\n' +
          '🔸「～とき」thì trung lập, thân mật, dùng trong nhiều ngữ cảnh hàng ngày hơn.\n\n' +
          '🧠 Ví dụ:\n' +
          '・結婚にあたって、多くの人にお世話になりました。\n→ Trong dịp kết hôn, tôi đã được nhiều người giúp đỡ.\n' +
          '・契約に際して、慎重に内容を確認した。\n→ Khi ký hợp đồng, tôi đã cẩn thận xác nhận nội dung.',
      },
    ],
  },
  {
    id: 'shidai_de',
    title: '～次第で',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～次第で」diễn tả rằng kết quả hoặc tình huống sẽ thay đổi tùy thuộc vào điều kiện hoặc tình trạng trước đó.\n' +
          '👉 Mang nghĩa "tùy vào ~ mà sẽ ...", "phụ thuộc vào ~ mà ..."\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ] + 次第で\n' +
          'hoặc\n' +
          '[Danh từ] + 次第では',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để nói rằng kết quả, tình hình sẽ khác nhau tùy thuộc vào điều kiện hay tình huống đã nêu.\n' +
          '✅ Thường dùng trong văn nói trang trọng hoặc văn viết, trong các câu đưa ra khả năng, lựa chọn hay điều kiện.\n\n' +
          'Ví dụ:\n' +
          '・結果次第で、昇進が決まる。\n' +
          '→ Tùy kết quả mà việc thăng chức sẽ được quyết định.\n' +
          '・天気次第では、試合が中止になるかもしれない。\n' +
          '→ Tùy vào thời tiết mà có thể trận đấu sẽ bị hủy.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① あなたの努力次第で、合格できるかどうかが決まります。\n' +
          '→ Tùy vào nỗ lực của bạn mà việc đỗ hay không sẽ được quyết định.\n\n' +
          '② 会議の結果次第では、計画を変更する可能性があります。\n' +
          '→ Tùy vào kết quả cuộc họp mà có thể thay đổi kế hoạch.\n\n' +
          '③ 状況次第で対応を考えます。\n' +
          '→ Tùy vào tình hình mà tôi sẽ cân nhắc cách xử lý.',
      },
    ],
  },
  {
    id: 'te_irai',
    title: '～て以来',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～て以来」diễn tả từ khi một sự việc xảy ra thì trạng thái hoặc hành động nào đó kéo dài tiếp tục cho đến hiện tại.\n' +
          '👉 Mang nghĩa "kể từ khi...", nhấn mạnh khoảng thời gian kéo dài.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể て] + 以来\n\n' +
          'Ví dụ: 「日本に来て以来、日本語を勉強しています。」(Kể từ khi đến Nhật, tôi đã học tiếng Nhật.)',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để nhấn mạnh thời điểm bắt đầu một trạng thái, hành động và trạng thái đó tiếp tục kéo dài đến hiện tại.\n' +
          '✅ Thường dùng với các trạng từ chỉ thời gian như 「ずっと」, 「今まで」 để nhấn mạnh sự kéo dài.\n\n' +
          'Ví dụ:\n' +
          '・彼とは卒業して以来、会っていない。\n' +
          '→ Kể từ khi tốt nghiệp, tôi chưa gặp anh ấy.\n' +
          '・事故を起こして以来、彼は運転を控えている。\n' +
          '→ Kể từ khi xảy ra tai nạn, anh ấy hạn chế lái xe.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 彼女は結婚して以来、幸せそうだ。\n' +
          '→ Cô ấy trông hạnh phúc kể từ khi kết hôn.\n\n' +
          '② 日本に来て以来、日本語の勉強を続けている。\n' +
          '→ Kể từ khi đến Nhật, tôi vẫn tiếp tục học tiếng Nhật.\n\n' +
          '③ 彼が転勤して以来、連絡が途絶えた。\n' +
          '→ Kể từ khi anh ấy chuyển công tác, liên lạc đã đứt.',
      },
    ],
  },
  {
    id: 'to_ieba',
    title: '～といえば',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～といえば」được dùng để **nêu ra một đề tài**, sau đó chuyển hướng sang một chủ đề có liên quan hoặc đưa ra một ý kiến/phản hồi liên quan.\n\n' +
          '📌 Ý nghĩa:\n' +
          '- Nếu nói đến… thì…\n' +
          '- Nói mới nhớ… / Nhắc đến… mới nhớ là…\n\n' +
          '📎 Cấu trúc:\n' +
          '[Danh từ / Mệnh đề] + といえば',
      },
      {
        title: '2. Các cách sử dụng chính',
        explanation:
          '✅ Cách dùng 1: Nhắc đến A thì nhớ ra B (liên tưởng từ A sang B)\n' +
          '✅ Cách dùng 2: Xác nhận hoặc làm rõ thông tin từ vế trước\n' +
          '✅ Cách dùng 3: Dùng để chuyển đề tài khéo léo trong giao tiếp',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 夏といえば、海ですね。\n→ Nói đến mùa hè thì phải nhắc đến biển nhỉ.\n\n' +
          '② 京都といえば、修学旅行で行ったことがあります。\n→ Nói đến Kyoto, tôi đã từng đi trong chuyến tham quan trường.\n\n' +
          '③ 日本料理といえば、寿司が有名ですね。\n→ Nhắc đến món Nhật thì sushi nổi tiếng nhỉ.\n\n' +
          '④ 田中さんといえば、元気になったそうですよ。\n→ Nhắc đến anh Tanaka, nghe nói là anh ấy khỏe lại rồi đó.',
      },
      {
        title: '4. Phân biệt với ～というと',
        explanation:
          '🔸「～というと」thường dùng khi muốn xác nhận lại ý đối phương hoặc đưa ra suy nghĩ trực tiếp từ một từ khóa.\n' +
          '🔸「～といえば」dùng để mở rộng hoặc chuyển sang một đề tài liên quan với cảm xúc liên tưởng.\n\n' +
          '🧠 Ví dụ phân biệt:\n' +
          '・日本というと、富士山ですね。\n→ Nói đến Nhật thì nghĩ ngay đến núi Phú Sĩ.\n' +
          '・日本といえば、山田さんからメールが来ました。\n→ Nhắc đến Nhật, nhớ là vừa nhận được email từ anh Yamada.',
      },
    ],
  },
  {
    id: 'to_iuto',
    title: '～というと',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～というと」được dùng để **nêu lên một chủ đề** hoặc **liên tưởng đến một điều gì đó khi nghe thấy một từ khóa cụ thể**.\n\n' +
          '📌 Ý nghĩa: “nói đến… thì…”, “nếu nói … thì…”, “nói tới … thì nghĩ ngay đến…”\n\n' +
          '📎 Cấu trúc:\n' +
          '[Danh từ / Mệnh đề] + というと\n\n' +
          '📍 Thường được dùng để dẫn dắt cuộc hội thoại, xác nhận thông tin, hoặc bày tỏ sự liên tưởng.',
      },
      {
        title: '2. Ví dụ minh họa',
        explanation:
          '① 日本のアニメというと、ドラえもんを思い出す。\n→ Nói đến anime Nhật Bản thì tôi nhớ đến Doraemon.\n\n' +
          '② 京都というと、お寺が多いイメージですね。\n→ Nói đến Kyoto thì hình ảnh nhiều ngôi chùa hiện lên.\n\n' +
          '③ 春というと、桜ですね。\n→ Nói tới mùa xuân thì nghĩ ngay đến hoa anh đào.\n\n' +
          '④ IT業界というと、忙しいイメージがありますね。\n→ Nói đến ngành IT thì thường gắn liền với hình ảnh bận rộn.',
      },
      {
        title: '3. Ghi chú và lưu ý',
        explanation:
          '🔸 Có thể thay thế bằng「～といえば」trong nhiều trường hợp tương đương.\n' +
          '🔸 Nếu sử dụng với mục đích xác nhận thông tin, thường đi kèm với 「～のことですか？」\n' +
          '🔸 Mẫu này giúp mở rộng cuộc hội thoại hoặc triển khai nội dung liên quan đến một từ khóa.',
      },
    ],
  },
  {
    id: 'to_iuttara',
    title: '～といったら',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～といったら」dùng để nhấn mạnh sự ngạc nhiên, kinh ngạc, hoặc mức độ cao của một sự việc nào đó khi nhắc đến một chủ đề cụ thể.\n\n' +
          '📌 Ý nghĩa: "Nói đến… thì… (đến mức ngạc nhiên)", "Nếu nói… thì quả thật…"\n\n' +
          '📎 Cấu trúc:\n' +
          '[Danh từ] + といったら',
      },
      {
        title: '2. Đặc điểm',
        explanation:
          '✅ Dùng để nhấn mạnh mức độ bất ngờ, ngạc nhiên, ấn tượng mạnh về chủ đề được đề cập.\n' +
          '✅ Có thể dùng thay thế cho「～というと」hoặc「～といえば」nhưng sắc thái cảm xúc mạnh hơn.\n' +
          '✅ Thường đi kèm các từ cảm thán như 「すごい」「大変」「ひどい」v.v.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 富士山といったら、登るのが本当に大変でした。\n→ Nói đến núi Phú Sĩ thì việc leo lên thật sự rất vất vả.\n\n' +
          '② 夏の暑さといったら、耐えられないほどです。\n→ Cái nóng mùa hè thì đến mức không thể chịu nổi.\n\n' +
          '③ 彼の料理の上手さといったら、プロ並みです。\n→ Nói đến độ giỏi nấu ăn của anh ấy thì ngang tầm đầu bếp chuyên nghiệp.\n\n' +
          '④ 試験の難しさといったら、涙が出るほどだった。\n→ Nói đến độ khó của kỳ thi thì đến mức muốn khóc luôn.',
      },
      {
        title: '4. So sánh với ～というと / ～といえば',
        explanation:
          '🔸「～といったら」: nhấn mạnh mức độ cảm xúc, bất ngờ, kinh ngạc (mạnh hơn)\n' +
          '🔸「～というと / といえば」: thiên về nêu đề tài, liên tưởng, xác nhận thông tin\n\n' +
          '🧠 Ví dụ phân biệt:\n' +
          '・京都というと、神社や寺が多いですね。\n→ Nói đến Kyoto thì có nhiều đền chùa.\n' +
          '・京都といったら、人の多さにびっくりしました。\n→ Nói đến Kyoto thì tôi rất ngạc nhiên vì quá đông người.',
      },
    ],
  },
  {
    id: 'wo_megutte',
    title: '～をめぐって',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～をめぐって」dùng để diễn tả ý nghĩa “xoay quanh vấn đề…”, “liên quan đến…”\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ] + をめぐって\n\n' +
          '📎 Diễn tả các hành động, tranh luận, đối lập… có liên quan đến một chủ đề nào đó. Đây là cách nói trang trọng, thường dùng trong văn viết hoặc ngữ cảnh nghiêm túc.',
      },
      {
        title: '2. Đặc điểm',
        explanation:
          '✅ Danh từ trước 「をめぐって」thường là chủ đề gây tranh cãi, thảo luận, tranh luận (例: 問題, 意見, 契約, 権利...)\n' +
          '✅ Hay đi kèm với các động từ: 議論する、争う、話し合う、対立する、うわさする、意見が分かれる…\n' +
          '❗ Không dùng cho hành động cá nhân trực tiếp như “nghe, nhìn, học”…',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① その問題をめぐって、いろいろな意見が出ている。\n→ Nhiều ý kiến khác nhau được đưa ra xoay quanh vấn đề đó.\n\n' +
          '② 環境保護（かんきょうほご）をめぐって、会議が行われました。\n→ Một cuộc họp đã được tổ chức xoay quanh việc bảo vệ môi trường.\n\n' +
          '③ 新しい法律（ほうりつ）をめぐって、議論（ぎろん）が続いている。\n→ Cuộc tranh luận vẫn đang tiếp tục xoay quanh đạo luật mới.\n\n' +
          '④ 遺産（いさん）をめぐって、家族の間に争いが起きた。\n→ Đã xảy ra tranh chấp trong gia đình xoay quanh tài sản thừa kế.',
      },
      {
        title: '4. So sánh với mẫu khác',
        explanation:
          '🔸「～について」→ trung lập, đơn giản hơn, dùng cả trong hội thoại.\n' +
          '🔸「～をめぐって」→ trang trọng hơn, diễn tả ý kiến trái chiều, tranh cãi, thảo luận.\n\n' +
          '🧠 Ví dụ:\n' +
          '・環境問題について話す。\n→ Nói về vấn đề môi trường.\n' +
          '・環境問題をめぐって議論する。\n→ Tranh luận xoay quanh vấn đề môi trường.',
      },
    ],
  },
  {
    id: 'wo_towazu',
    title: '～を問わず',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～を問わず」dùng để diễn tả ý nghĩa "bất kể...", "không phân biệt..."\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ] + を問わず\n\n' +
          '📎 Dùng để nhấn mạnh rằng điều gì đó đúng hoặc áp dụng **không phân biệt** tuổi tác, giới tính, quốc tịch, thời gian, địa điểm, kinh nghiệm, v.v.',
      },
      {
        title: '2. Đặc điểm',
        explanation:
          '✅ Là cách nói trang trọng, thường gặp trong văn viết, thông báo, quảng cáo.\n' +
          '✅ Hay đi với các từ như:\n' +
          '　・年齢（ねんれい）、性別（せいべつ）、国籍（こくせき）、経験（けいけん）、昼夜（ちゅうや）\n' +
          '✅ Có thể dùng kèm các cụm từ như:\n' +
          '　・～かどうかを問わず\n' +
          '　・～に関係なく（にかんけいなく） (gần nghĩa nhưng ít trang trọng hơn)',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① この仕事は経験を問わず、誰でも応募（おうぼ）できます。\n→ Công việc này ai cũng có thể ứng tuyển, không phân biệt kinh nghiệm.\n\n' +
          '② 年齢を問わず多くの人が参加しました。\n→ Rất nhiều người đã tham gia, bất kể tuổi tác.\n\n' +
          '③ このイベントは天候（てんこう）を問わず開催（かいさい）されます。\n→ Sự kiện này sẽ được tổ chức bất kể thời tiết.\n\n' +
          '④ 国籍を問わず歓迎します。\n→ Chúng tôi hoan nghênh bất kể quốc tịch.\n\n' +
          '⑤ 時間を問わず、連絡してください。\n→ Hãy liên lạc bất kể lúc nào.',
      },
      {
        title: '4. So sánh với các mẫu khác',
        explanation:
          '🔸「～に関係なく」→ thân mật hơn, dùng trong giao tiếp hàng ngày.\n' +
          '🔸「～を問わず」→ cứng, dùng trong văn viết hoặc ngôn ngữ trang trọng.\n\n' +
          '🧠 Ví dụ:\n' +
          '・年齢に関係なく参加できます。 (thường dùng trong hội thoại)\n' +
          '・年齢を問わず参加できます。 (dùng trong tờ quảng cáo, thông báo)',
      },
    ],
  },
  {
    id: 'gachi',
    title: '～がち',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～がち」diễn tả một trạng thái hoặc hành động thường xuyên xảy ra, hay có xu hướng làm điều gì đó, thường mang nghĩa tiêu cực hoặc không tốt lắm.\n' +
          '👉 Nghĩa tiếng Việt: "thường hay...", "có xu hướng...", "hay bị..."\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ hoặc động từ thể masu (bỏ ます)] + がち',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để nói về việc thường xuyên xảy ra điều gì đó, hay có xu hướng xảy ra một việc gì đó không tốt hoặc không mong muốn.\n' +
          '✅ Thường dùng trong văn viết hoặc trang trọng hơn.\n\n' +
          'Ví dụ:\n' +
          '・忘れがち\n' +
          '→ Thường hay quên.\n' +
          '・遅れがち\n' +
          '→ Hay bị trễ.\n' +
          '・病気がち\n' +
          '→ Thường hay ốm.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 最近、疲れがちで、よく眠れない。\n' +
          '→ Gần đây tôi hay mệt mỏi, không ngủ ngon.\n\n' +
          '② この時期は風邪をひきがちですから、気をつけてください。\n' +
          '→ Thời điểm này thường hay bị cảm, nên hãy chú ý nhé.\n\n' +
          '③ 彼はミスがちなので、気をつけたほうがいい。\n' +
          '→ Anh ấy thường hay mắc lỗi, nên cẩn thận hơn.',
      },
    ],
  },
  {
    id: 'kake',
    title: '～かけ',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～かけ」diễn tả một hành động đang trong trạng thái nửa chừng, chưa hoàn thành.\n' +
          '👉 Nghĩa tiếng Việt: "đang làm dở...", "bỏ dở..."\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ -ます (bỏ ます)] + かけ',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để nói về hành động vừa mới bắt đầu hoặc làm dở dang, chưa hoàn tất.\n' +
          '✅ Có thể mang nghĩa tích cực hoặc tiêu cực tùy ngữ cảnh.\n\n' +
          'Ví dụ:\n' +
          '・読みかけの本\n' +
          '→ Quyển sách đang đọc dở.\n' +
          '・話しかける\n' +
          '→ Bắt đầu nói chuyện với ai đó.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 昨日読みかけの本を続けて読みました。\n' +
          '→ Tôi tiếp tục đọc cuốn sách mà hôm qua còn đang đọc dở.\n\n' +
          '② 彼は話しかけても返事をしなかった。\n' +
          '→ Tôi nói chuyện với anh ấy nhưng anh ấy không trả lời.\n\n' +
          '③ 作りかけの料理を冷蔵庫に入れた。\n' +
          '→ Tôi bỏ món ăn đang nấu dở vào trong tủ lạnh.',
      },
    ],
  },
  {
    id: 'kimi',
    title: '～気味',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～気味」diễn tả cảm giác hoặc tình trạng hơi có xu hướng như thế, thường mang nghĩa hơi tiêu cực hoặc không thoải mái.\n' +
          '👉 Nghĩa tiếng Việt: "có vẻ...", "cảm giác...", "hơi có xu hướng..."\n\n' +
          '📌 Cấu trúc:\n' +
          '[Danh từ hoặc Động từ thể masu (bỏ ます)] + 気味',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để nói về trạng thái, cảm giác, tình trạng không hoàn toàn rõ ràng nhưng có dấu hiệu hay cảm giác như vậy.\n' +
          '✅ Thường dùng khi muốn biểu đạt sự lo lắng, mệt mỏi, hoặc triệu chứng nhẹ.\n\n' +
          'Ví dụ:\n' +
          '・疲れ気味\n' +
          '→ Hơi mệt, có cảm giác mệt\n' +
          '・風邪気味\n' +
          '→ Có cảm giác bị cảm, hơi giống bị cảm',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 最近疲れ気味で、よく眠れません。\n' +
          '→ Gần đây tôi hơi mệt và không ngủ ngon.\n\n' +
          '② 朝から風邪気味で、喉が痛いです。\n' +
          '→ Từ sáng tôi có cảm giác bị cảm, đau họng.\n\n' +
          '③ ちょっと顔色が悪い気味ですね。\n' +
          '→ Trông bạn có vẻ hơi xanh xao một chút.',
      },
    ],
  },
  {
    id: 'ppanashi',
    title: '～っぱなし',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～っぱなし」diễn tả một hành động hay trạng thái nào đó được giữ nguyên, kéo dài suốt một khoảng thời gian mà không thay đổi hoặc không dừng lại.\n' +
          '👉 Nghĩa tiếng Việt: "suốt, cứ để nguyên, cứ làm mãi".\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể ます (bỏ ます)] + っぱなし',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để chỉ hành động hoặc trạng thái kéo dài không thay đổi, thường mang nghĩa không tốt hoặc trách móc (ví dụ: để nguyên cửa mở, để máy chạy không tắt).\n' +
          '✅ Có thể dùng với các động từ tự động từ hoặc tha động từ.\n\n' +
          'Ví dụ:\n' +
          '・テレビをつけっぱなしにする。\n' +
          '→ Cứ để nguyên TV bật.\n' +
          '・ドアを開けっぱなしにする。\n' +
          '→ Cứ để nguyên cửa mở.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 窓を開けっぱなしで出かけたら、雨が入ってきた。\n' +
          '→ Tôi đã đi ra ngoài mà để nguyên cửa sổ mở, nên mưa đã lọt vào.\n\n' +
          '② 彼は宿題をやりっぱなしで遊びに行った。\n' +
          '→ Anh ta để nguyên bài tập chưa làm xong mà đi chơi.\n\n' +
          '③ 電気をつけっぱなしにしないでください。\n' +
          '→ Đừng có để nguyên đèn bật suốt như vậy.',
      },
    ],
  },
  {
    id: 'tebakari_iru',
    title: '～てばかりいる',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～てばかりいる」diễn tả hành động nào đó chỉ được thực hiện liên tục, thường mang nghĩa phê phán, chỉ trích ai đó chỉ làm việc đó mà không làm những việc khác.\n' +
          '👉 Nghĩa tiếng Việt: "suốt ngày chỉ...","toàn... suốt" (với hàm ý không tốt).\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể て] + ばかりいる',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để phê phán, than phiền người khác chỉ làm một việc nào đó mà không chịu làm việc khác hoặc không chịu thay đổi.\n' +
          '✅ Thường dùng trong trường hợp không hài lòng hoặc thất vọng về hành động của ai đó.\n\n' +
          'Ví dụ:\n' +
          '・ゲームばかりしている。\n' +
          '→ Suốt ngày chỉ chơi game.\n' +
          '・文句ばかり言っている。\n' +
          '→ Toàn than phiền suốt.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 彼は遊んでばかりいるから、成績が悪くなった。\n' +
          '→ Anh ta suốt ngày chỉ chơi nên thành tích học tập kém đi.\n\n' +
          '② 子供はお菓子を食べてばかりいる。\n' +
          '→ Đứa trẻ suốt ngày chỉ ăn bánh kẹo.\n\n' +
          '③ そんなに文句を言ってばかりいないで、少しは手伝いなさい。\n' +
          '→ Đừng có than phiền suốt như vậy nữa, hãy giúp đỡ một chút đi.',
      },
    ],
  },
  {
    id: 'ka_nai_ka_no_uchi_ni',
    title: '～か～ないかのうちに',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～か～ないかのうちに」diễn tả hai hành động xảy ra gần như đồng thời, vế sau xảy ra ngay khi hoặc ngay sau khi vế trước bắt đầu.\n' +
          '👉 Có thể hiểu là “ngay sau khi A xảy ra thì B cũng xảy ra”.\n' +
          '👉 Mẫu này nhấn mạnh sự đồng thời hoặc gần như đồng thời của hai sự việc.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể thường (thể khả năng hoặc phủ định) + か + Động từ thể phủ định (ない) + かのうちに]',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng để nối hai hành động xảy ra gần như đồng thời, vế sau xảy ra ngay khi hoặc ngay sau khi vế trước bắt đầu.\n' +
          '✅ Thường dùng trong trường hợp hành động diễn ra nhanh, không có thời gian chờ đợi.\n' +
          '✅ Mẫu này thường dùng trong văn nói, văn viết để nhấn mạnh tính tức thời.\n\n' +
          'Ví dụ:\n' +
          '・ベルが鳴るか鳴らないかのうちに、ドアが開いた。\n' +
          '→ Chuông vừa kêu thì cửa đã mở.\n' +
          '・彼が来るか来ないかのうちに、電話がかかってきた。',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 電車が発車するかしないかのうちに、またドアが閉まった。\n' +
          '→ Tàu điện vừa mới sắp chạy thì cửa lại đóng ngay.\n\n' +
          '② 赤ちゃんが泣くか泣かないかのうちに、母親が抱き上げた。\n' +
          '→ Em bé vừa mới khóc thì mẹ đã bế lên ngay.\n\n' +
          '③ 授業が始まるか始まらないかのうちに、先生が教室に入った。',
      },
    ],
  },
  {
    id: 'ka_to_omouto',
    title: '～かと思うと',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～かと思うと」diễn tả “vừa mới nghĩ rằng A thì ngay lập tức xảy ra B”.\n' +
          '👉 Mẫu câu này dùng để diễn tả sự thay đổi nhanh chóng hoặc sự việc xảy ra ngay sau một hành động/thời điểm nào đó.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể thường + かと思うと／かと思ったら]',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Thường dùng để nối hai sự việc xảy ra liên tiếp, có sự đối lập hoặc thay đổi bất ngờ.\n' +
          '✅ Hành động vế sau thường diễn ra ngay sau hoặc gần như đồng thời với hành động vế trước.\n' +
          '✅ Mẫu câu này thường dùng trong văn nói và văn viết để nhấn mạnh sự chuyển biến đột ngột.\n\n' +
          'Ví dụ:\n' +
          '・赤ちゃんが泣いたかと思うと、もう笑っていた。\n' +
          '→ Vừa mới nghĩ là em bé khóc thì ngay lập tức lại cười.\n' +
          '・空が暗くなったかと思ったら、急に雨が降り出した。',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 彼は部屋に入ったかと思うと、すぐに出て行った。\n' +
          '→ Vừa mới nghĩ là anh ấy vào phòng thì ngay lập tức lại đi ra.\n\n' +
          '② テレビをつけたかと思ったら、画面が真っ暗になった。\n' +
          '→ Vừa bật TV lên thì màn hình đã tối đen.\n\n' +
          '③ 友達が電話をかけてきたかと思うと、すぐに話が変わった。',
      },
    ],
  },
  {
    id: 'saichuu_ni-n2',
    title: '～最中に',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～最中に」diễn tả ý nghĩa "đúng vào lúc đang làm gì đó thì có sự việc khác xảy ra".\n' +
          '👉 Thường nhấn mạnh thời điểm hành động đang diễn ra thì bị gián đoạn hoặc có chuyện gì đó xảy ra.\n' +
          '👉 Cách dùng trang trọng hơn 「～とき」.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể ている] + 最中に\n' +
          'Danh từ + の最中に',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng khi muốn nhấn mạnh hành động đang được thực hiện thì một việc khác chen vào.\n' +
          '✅ Thường dùng với các hành động mang tính tiếp diễn (động từ thể ている).\n' +
          '✅ Phía sau thường là những sự việc bất ngờ, không mong muốn xảy ra.\n\n' +
          'Ví dụ:\n' +
          '・会議の最中に電話がかかってきた。\n' +
          '→ Đúng lúc đang họp thì điện thoại reo.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 映画を見ている最中に停電が起こった。\n' +
          '→ Đúng lúc đang xem phim thì mất điện.\n\n' +
          '② ご飯を食べている最中に友達が訪ねてきた。\n' +
          '→ Đúng lúc đang ăn cơm thì bạn đến thăm.\n\n' +
          '③ 勉強している最中に電話が鳴った。\n' +
          '→ Đúng lúc đang học thì điện thoại reo.',
      },
    ],
  },
  {
    id: 'tato_tan',
    title: '～たとたん',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～たとたん」diễn tả “vừa mới làm xong hành động A thì ngay lập tức hành động B xảy ra”.\n' +
          '👉 Mẫu câu nhấn mạnh tính bất ngờ hoặc xảy ra ngay lập tức của hành động ở vế sau sau khi hành động ở vế trước kết thúc.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể た] + とたん（に）',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng khi muốn nói hai hành động xảy ra gần như đồng thời, hành động sau xảy ra ngay khi hành động trước kết thúc.\n' +
          '✅ Hành động sau thường mang tính bất ngờ hoặc không mong đợi.\n' +
          '✅ Không dùng cho những hành động mang tính chủ ý kéo dài.\n\n' +
          'Ví dụ:\n' +
          '・家に入ったとたん、電話が鳴った。\n' +
          '→ Vừa mới vào nhà thì điện thoại reo.\n' +
          '・彼が話し始めたとたん、みんなが黙った。',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① ドアを開けたとたん、猫が飛び出した。\n' +
          '→ Vừa mở cửa thì con mèo lao ra.\n\n' +
          '② 電車が発車したとたん、大雨が降り始めた。\n' +
          '→ Vừa tàu chạy thì trời bắt đầu mưa to.\n\n' +
          '③ 先生が話し終わったとたん、生徒たちは席を立った。\n' +
          '→ Vừa thầy giáo nói xong thì học sinh đứng dậy.',
      },
    ],
  },
  {
    id: 'tokoro_ni',
    title: '～ところに',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～ところに」diễn tả “vào đúng lúc/tại điểm mà một hành động hoặc sự việc nào đó xảy ra hoặc sắp xảy ra”.\n' +
          '👉 Thường nhấn mạnh thời điểm hành động xảy ra là quan trọng hoặc bất ngờ.\n' +
          '👉 Có thể dịch là “đúng lúc”, “vào lúc”, “tại thời điểm”.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể thường] + ところに\n' +
          '[Danh từ + の] + ところに',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng khi muốn nói hành động xảy ra ngay tại thời điểm hoặc vị trí của một hành động khác.\n' +
          '✅ Thường dùng để biểu thị sự việc bất ngờ, không mong đợi.\n' +
          '✅ Hành động ở vế sau thường là sự kiện bất ngờ hoặc xen vào.\n\n' +
          'Ví dụ:\n' +
          '・学校へ行くところに電話がかかってきた。\n' +
          '→ Đúng lúc tôi đang đi đến trường thì có điện thoại gọi đến.\n' +
          '・出かけるところに雨が降り始めた。\n' +
          '→ Đúng lúc tôi sắp đi thì trời bắt đầu mưa.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 彼が家に着くところに友達が来た。\n' +
          '→ Đúng lúc anh ấy đến nhà thì bạn đến.\n\n' +
          '② 今まさに話そうとするところに、電話が鳴った。\n' +
          '→ Đúng lúc tôi chuẩn bị nói thì điện thoại reo.\n\n' +
          '③ 出かけるところに母が来て、話をした。\n' +
          '→ Đúng lúc tôi sắp đi thì mẹ đến và nói chuyện.',
      },
    ],
  },
  {
    id: 'uchi_ni-n2',
    title: '～うちに',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          '🔹「～うちに」diễn tả ý nghĩa “trong lúc đang diễn ra một trạng thái hoặc hành động nào đó thì một sự việc khác xảy ra hoặc có sự thay đổi”.\n' +
          '👉 Có thể là hành động chủ động hoặc sự thay đổi xảy ra tự nhiên.\n' +
          '👉 Thường nhấn mạnh thời điểm giới hạn để hành động thứ hai xảy ra.\n\n' +
          '📌 Cấu trúc:\n' +
          '[Động từ thể thường] + うちに\n' +
          '[い形容詞 thể thường] + うちに\n' +
          '[な形容詞/ Danh từ] + のうちに',
      },
      {
        title: '2. Cách dùng',
        explanation:
          '✅ Dùng khi muốn nói “trong lúc còn đang (điều kiện A), thì (điều kiện B) xảy ra”.\n' +
          '✅ Hành động ở mệnh đề 2 có thể là sự thay đổi hoặc hành động chủ động.\n' +
          '✅ Khác với 「～間に」(khoảng thời gian), 「～うちに」nhấn mạnh việc hành động/thay đổi xảy ra trong khoảng thời gian còn giới hạn.\n\n' +
          'Ví dụ:\n' +
          '・若いうちにたくさん勉強しなさい。\n' +
          '→ Hãy học nhiều trong lúc còn trẻ.\n' +
          '・音楽を聞いているうちに眠くなってしまった。\n' +
          '→ Trong lúc nghe nhạc thì tôi đã buồn ngủ.',
      },
      {
        title: '3. Ví dụ minh họa',
        explanation:
          '① 雨が降らないうちに帰りましょう。\n' +
          '→ Hãy về nhà trước khi trời mưa.\n\n' +
          '② 若いうちに海外旅行したい。\n' +
          '→ Tôi muốn đi du lịch nước ngoài khi còn trẻ.\n\n' +
          '③ テレビを見ているうちに、だんだん眠くなった。\n' +
          '→ Trong lúc xem TV, tôi dần dần cảm thấy buồn ngủ.',
      },
    ],
  },
]

export default grammarN2
