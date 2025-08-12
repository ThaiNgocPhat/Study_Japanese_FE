const grammarN5 = [
  {
    id: 'adjective_basic',
    title: 'Tính từ tiếng Nhật',
    sections: [
      {
        title: '1. Tính từ trong tiếng Nhật có mấy loại?',
        explanation:
          '🟢 Có 2 loại tính từ chính:\n\n' +
          '✅ **Tính từ đuôi -い (い形容詞)**: thường kết thúc bằng い.\n' +
          'Ví dụ: たのしい (vui vẻ), やさしい (hiền), たかい (cao/đắt).\n\n' +
          '✅ **Tính từ đuôi -な (な形容詞)**: thường thêm な khi bổ nghĩa cho danh từ.\n' +
          'Ví dụ: しずかな (yên tĩnh), きれいな (đẹp/sạch), ゆうめいな (nổi tiếng).',
      },
      {
        title: '2. Cấu trúc và biến đổi với tính từ -い',
        explanation:
          '🌸 Hiện tại – Khẳng định:\nこのほんは おもしろいです。→ Cuốn sách này thú vị.\n\n' +
          '🌧️ Hiện tại – Phủ định:\nこのほんは おもしろくないです。→ Cuốn sách này không thú vị.\n\n' +
          '☀️ Quá khứ – Khẳng định:\nきのうは あつかったです。→ Hôm qua trời nóng.\n\n' +
          '🌬️ Quá khứ – Phủ định:\nきのうは あつくなかったです。→ Hôm qua trời không nóng.',
      },
      {
        title: '3. Cấu trúc và biến đổi với tính từ -な',
        explanation:
          '💎 Hiện tại – Khẳng định:\nこのへやは きれいです。→ Phòng này sạch.\n\n' +
          '💔 Hiện tại – Phủ định:\nこのへやは きれいじゃありません。→ Phòng này không sạch.\n\n' +
          '⏳ Quá khứ – Khẳng định:\nきのう、ひまでした。→ Hôm qua tôi rảnh.\n\n' +
          '🙅‍♂️ Quá khứ – Phủ định:\nきのう、ひまじゃありませんでした。→ Hôm qua tôi không rảnh.',
      },
      {
        title: '4. Một vài mẹo nhỏ khi dùng tính từ',
        explanation:
          '📌 Khi nói thân mật:\n・「です」→ có thể bỏ\n・「じゃありません」→ thành 「じゃない」\n・「でした」→ thành 「だった」\n・「じゃありませんでした」→ thành 「じゃなかった」\n\n' +
          '🗣️ Ví dụ:\n・このコンピューター、たかいよ。→ Máy tính này đắt đấy.\n・きのう、ひまじゃなかったよ。→ Hôm qua tớ không rảnh đâu.',
      },
      {
        title: '5. Ghi nhớ nhanh 🔖',
        explanation:
          '✨ Tính từ là “gia vị” không thể thiếu khi mô tả bất kỳ điều gì trong tiếng Nhật.\n\n' +
          'Hãy tập biến đổi chúng qua các thì và luyện nói nhiều để quen dần nhé!',
      },
    ],
  },
  {
    id: 'adjective_naru',
    title: 'Tính từ + なる',
    sections: [
      {
        title: '1. Công thức chung 🔧',
        explanation:
          'Cấu trúc 「Tính từ + なる」 dùng để diễn tả sự **thay đổi trạng thái**, như “trở nên cao hơn”, “giỏi hơn”, “xinh hơn”…\n\nThường được chia ở **quá khứ** để miêu tả một sự chuyển biến đã xảy ra.',
      },
      {
        title: '2. Với tính từ -い 🧠',
        explanation:
          '📌 Công thức: Tính từ -い (bỏ い) + くなる\n\n' +
          '・あの子は 大きくなりました。→ Đứa bé đó đã lớn hơn rồi。\n' +
          '・このくるまは 古くなりました。→ Xe này đã trở nên cũ。\n' +
          '・かのじょは 美しくなりました。→ Cô ấy đã trở nên xinh đẹp hơn。\n' +
          '・ちょうしが よくなった。→ Tình trạng đã khá hơn rồi.',
      },
      {
        title: '3. Với tính từ -な ✨',
        explanation:
          '📌 Công thức: Tính từ -な (bỏ な) + になる\n\n' +
          '・あの人は 有名になりました。→ Người đó đã trở nên nổi tiếng。\n' +
          '・彼は 日本語が上手になりました。→ Anh ấy đã giỏi tiếng Nhật hơn。\n' +
          '・マイさんは きれいになりました。→ Mai đã trở nên xinh đẹp hơn.',
      },
      {
        title: '4. Ghi nhớ nhanh 💡',
        explanation:
          '✅ -い tính từ: bỏ い ➜ **くなる**\n' +
          '✅ -な tính từ: bỏ な ➜ **になる**\n\n' +
          '💬 Dạng phổ biến nhất: chia 「なる」 ở thì quá khứ:\n→ なりました (đã trở nên), なった (đã ... rồi)',
      },
    ],
  },
  {
    id: 'adjective_with_noun_verb',
    title: 'Kết hợp Tính từ trong câu',
    sections: [
      {
        title: '1. Tính từ + Danh từ 📝',
        explanation:
          'Tính từ thường được dùng để mô tả danh từ đi sau. Tuỳ theo loại tính từ (đuôi -い hoặc -な), ta có cấu trúc:\n\n' +
          '✅ **Tính từ -い + Danh từ**\n' +
          '・あたらしいシャツ → cái áo sơ mi mới\n' +
          '・おいしいたべもの → món ăn ngon\n' +
          '・おおきいへや → căn phòng lớn\n\n' +
          '✅ **Tính từ -な + Danh từ**\n' +
          '・きれいなひと → người đẹp\n' +
          '・すきなスポーツ → môn thể thao yêu thích\n' +
          '・まじめながくせい → học sinh nghiêm túc',
      },
      {
        title: '2. Tính từ + Động từ (Dùng như trạng từ) 🚀',
        explanation:
          'Muốn miêu tả **cách thức hành động diễn ra**? Hãy biến tính từ thành trạng từ!\n\n' +
          '🔹 **Tính từ -い**: Bỏ い, thêm **く** trước động từ\n' +
          '・こどもたちは たのしく あそびます。→ Trẻ con chơi vui vẻ。\n' +
          '・かれは はやく たべます。→ Anh ta ăn nhanh。\n' +
          '・にくを うすく きってください。→ Hãy cắt thịt mỏng ra。\n\n' +
          '🔸 **Tính từ -な**: Bỏ な, thêm **に** trước động từ\n' +
          '・まじめに かんがえてください。→ Hãy suy nghĩ nghiêm túc。\n' +
          '・かのじょは きれいに じを かきます。→ Cô ấy viết chữ đẹp。\n' +
          '・おじいさんは まいにち げんきに いきています。→ Ông sống khỏe mỗi ngày。',
      },
      {
        title: '3. Mẹo nhớ nhanh 🧠✨',
        explanation:
          '✅ Nếu bổ nghĩa cho **danh từ** → giữ nguyên (い/な) tính từ\n' +
          '✅ Nếu bổ nghĩa cho **động từ** → đổi:\n' +
          '・Tính từ -い → く\n' +
          '・Tính từ -な → に\n\n' +
          '💡 Hãy luyện viết ví dụ riêng của bạn để nhớ lâu hơn nhé!',
      },
    ],
  },
  {
    id: 'ga_hoshii_desu',
    title: '～がほしいです：Tôi muốn cái gì đó 🎈',
    sections: [
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
    ],
  },
  {
    id: 'ga_jouzu_heta_desu',
    title: '～がじょうず / ～がへた：Giỏi – Dở 🧠😅',
    sections: [
      {
        title: '1. Giỏi hay dở một thứ gì đó 🧠🍳',
        explanation:
          '🧩 Cấu trúc:\n[Danh từ] + が + じょうず / へた + です。\n\n' +
          '📌 Ví dụ:\n・わたしは スポーツが じょうずです。→ Tôi giỏi thể thao 🏀\n' +
          '・かのじょは すうがくが へたです。→ Cô ấy học toán dở 😅\n' +
          '・やまださんは えいごが じょうずです。→ Yamada giỏi tiếng Anh 🇬🇧\n' +
          '・かれは りょうりが へたです。→ Anh ấy nấu ăn tệ lắm 🍳😅',
      },
      {
        title: '2. Giỏi/Kém làm việc gì đó 🎤🏊‍♀️',
        explanation:
          '🧩 Cấu trúc:\n[Động từ thể từ điển] + こと / の + が + じょうず / へた + です。\n\n' +
          '✅ Cách nói này để nói về kỹ năng làm một việc cụ thể.\n\n' +
          '📌 Ví dụ:\n・たなかさんは うたうことが じょうずです。→ Tanaka hát rất hay 🎤\n' +
          '・わたしは およぐのが へたです。→ Tôi bơi dở lắm 🐢\n' +
          '・かれは りょうりをするのが じょうずです。→ Anh ấy nấu ăn giỏi 🍲\n' +
          '・やまださんは べんきょうすることが へたです。→ Yamada học hành kém 📚💤',
      },
      {
        title: '3. Cách nói tự nhiên như người Nhật 😌',
        explanation:
          '🗣 Người Nhật thường không chê người khác trực tiếp là "へた", vì nghe hơi… phũ 😅\n' +
          '👉 Có thể nói nhẹ đi như:\n・あまり上手じゃないです。→ Không giỏi lắm…\n・ちょっと苦手なんです。→ Tôi hơi "không quen" việc đó (cách nói lịch sự hơn để chỉ mình làm dở)\n\n' +
          '📌 Ví dụ:\n・わたしは りょうりが ちょっと苦手です。→ Tôi hơi vụng chuyện nấu ăn 😅',
      },
      {
        title: '4. Mẹo nhỏ: じょうず dùng cho người khác, とくい dùng cho bản thân ✨',
        explanation:
          '📍 Khi nói về bản thân, người Nhật thường dùng:\n・とくい（得意）→ Tôi khá/chuyên về...\n・にがて（苦手）→ Tôi không mạnh/không thích...\n\n' +
          '📌 Ví dụ:\n・りょうりは とくいです！→ Nấu ăn là sở trường của tôi 😎\n・にほんごは ちょっと にがてです。→ Tôi hơi yếu tiếng Nhật 😓',
      },
    ],
  },
  {
    id: 'ga_suki_desu',
    title: '～がすきです：Tôi thích gì đó 🎈',
    sections: [
      {
        title: '1. Tôi thích cái này 🎈 – Danh từ + がすきです',
        explanation:
          '🧩 Cấu trúc:\n[Danh từ] + が + すきです。\n\n' +
          '📌 Ví dụ:\n・わたしは おんがくが すきです。→ Tôi thích âm nhạc 🎧\n' +
          '・かのじょは テニスが すきです。→ Cô ấy thích tennis 🎾\n' +
          '・やまださんは イタリアのりょうりが すきです。→ Yamada thích món Ý 🍝',
      },
      {
        title: '2. Tôi thích LÀM gì đó 🎤 – Động từ + こと/の + がすきです',
        explanation:
          '🧩 Cấu trúc:\n[Động từ thể từ điển] + こと / の + が + すきです。\n\n' +
          '📌 Ví dụ:\n・たなかさんは えいがを みることが すきです。→ Tanaka thích xem phim 🎬\n' +
          '・わたしは うたうのが すきです。→ Tôi thích hát 🎶\n' +
          '・かれは にほんごを べんきょうするのが すきです。→ Anh ấy thích học tiếng Nhật 🇯🇵',
      },
      {
        title: '3. Phủ định nhẹ nhàng – Không thích lắm 😶‍🌫️',
        explanation:
          '❌ Thể phủ định:\n～すきじゃありません / すきじゃない / すきではありません\n\n' +
          '📌 Ví dụ:\n・わたしは おんがくが すきじゃない。→ Tôi không thích nhạc 😐\n' +
          '・かれは べんきょうするのが すきではありません。→ Anh ấy không thích học 📚\n\n' +
          '🎗 Người Nhật thường dùng 「あまりすきじゃない」 để tránh quá trực tiếp:\n→ わたしは べんきょうが あまりすきじゃないです。',
      },
      {
        title: '4. Ghét luôn!? – ～がきらいです 😖',
        explanation:
          '🚫 Mẫu trái nghĩa với 「すきです」 là 「きらいです」.\n\n' +
          '📌 Ví dụ:\n・やまださんは ピーマンが きらいです。→ Yamada ghét ớt chuông 🌶️\n' +
          '・わたしは にほんごを べんきょうするのが きらいです。→ Tôi ghét học tiếng Nhật (ôi không! 😅)\n\n' +
          '💡 Nhưng nhớ nhé, người Nhật thường *không thích nói ghét*, nên hãy dùng:\n「～が あまりすきじゃない」 → tinh tế hơn!',
      },
      {
        title: '5. Thêm chút cảm xúc – Dùng với よ/ね ❤️',
        explanation:
          '・このアニメ、ほんとうに すきだよ！→ Anime này tớ cực thích đó!\n' +
          '・きのうのライブ、すきだったね～！→ Buổi live hôm qua hay thật nhỉ!\n\n' +
          '📚 Khi trò chuyện, thay 「です」 bằng 「だ」 sẽ thân mật hơn:\n→ すきです → すきだ',
      },
      {
        title: '6. So sánh nhanh với ～がほしいです 💡',
        explanation:
          '🧩 ～がすきです：Tôi thích thứ gì (về cảm xúc)\n🧩 ～がほしいです：Tôi muốn có thứ gì đó (sở hữu)\n\n' +
          '・ケーキがすきです。→ Tôi thích bánh 🍰\n' +
          '・ケーキがほしいです。→ Tôi muốn bánh (mang cho tớ cái đi! 😄)',
      },
    ],
  },
  {
    id: 'tai_desu',
    title: '～たいです：Muốn làm gì đó',
    sections: [
      {
        title: '1. Khi bạn muốn làm gì đó… 🧠',
        explanation:
          'Muốn ăn, muốn đi chơi, muốn gặp ai đó? Hãy dùng mẫu 「～たいです」 để diễn tả mong muốn của mình nhé!',
      },
      {
        title: '2. Cấu trúc ngữ pháp 🧩',
        explanation:
          '👉 Động từ thể ます (bỏ ます) + 「たいです」\n\n' +
          '📌 Ví dụ:\n' +
          '・たべます → たべたいです → Muốn ăn\n' +
          '・はなします → はなしたいです → Muốn nói chuyện\n' +
          '・あいます → あいたいです → Muốn gặp',
      },
      {
        title: '3. Câu mẫu dễ hiểu 💬',
        explanation:
          '・にほんに いきたいです。→ Tôi muốn đi Nhật.\n' +
          '・ケーキが たべたいです。→ Tôi muốn ăn bánh ngọt.\n' +
          '・かのじょと はなしたいです。→ Tôi muốn nói chuyện với cô ấy.\n' +
          '・せんせいに なりたいです。→ Tôi muốn trở thành giáo viên.',
      },
      {
        title: '4. Trợ từ を hay が? 🤔',
        explanation:
          'Trong mẫu câu 「～たいです」, bạn có thể dùng **が** thay cho **を** để nhấn mạnh ý muốn:\n' +
          '・ケーキ**を**たべたいです。\n' +
          '・ケーキ**が**たべたいです。\n' +
          '👉 Cả hai đều đúng, nhưng dùng **が** thường gặp hơn với ～たい。',
      },
      {
        title: '5. Phủ định: Tôi không muốn… 🙅‍♂️',
        explanation:
          '📌 Cấu trúc: Động từ (bỏ ます) + **たくないです**\n\n' +
          '・いきたくないです。→ Không muốn đi\n' +
          '・たべたくないです。→ Không muốn ăn\n' +
          '・はなしたくないです。→ Không muốn nói chuyện\n\n' +
          '📘 Ví dụ:\n' +
          '・にほんに いきたくないです。→ Tôi không muốn đi Nhật.\n' +
          '・ケーキが たべたくないです。→ Tôi không muốn ăn bánh ngọt.',
      },
    ],
  },
  {
    id: 'counting_people_thing',
    title: 'Cách đếm số người, vật',
    sections: [
      {
        title: '1. Cách đếm người – ～にん',
        explanation:
          '👥 Mẫu: [Số đếm] + にん（人）\n\n' +
          '📌 Dùng khi nói về số lượng người.\n\n' +
          '🔸 Cách đọc đặc biệt:\n' +
          '・1 người → ひとり（一人）\n' +
          '・2 người → ふたり（二人）\n' +
          '・Từ 3 trở lên: さんにん、よにん、…\n\n' +
          '🔹 Ví dụ:\n' +
          '・クラスに がくせいが 30にん います。\n' +
          '・うちには かぞくが 5にん います。',
      },
      {
        title: '2. Đếm vật nhỏ – ～こ（個）',
        explanation:
          '🍎 Mẫu: [Số] + こ（個）\n\n' +
          '📌 Dùng cho đồ vật nhỏ như táo, kẹo, bánh…\n\n' +
          '🔸 Cách đọc đặc biệt:\n' +
          '・1 → いっこ ／ 6 → ろっこ ／ 8 → はっこ ／ 10 → じゅっこ\n\n' +
          '🔹 Ví dụ:\n' +
          '・りんごを にこ たべました。\n' +
          '・ケーキが よっつ あります。',
      },
      {
        title: '3. Đếm vật dài – ～ほん（本）',
        explanation:
          '🖊️ Mẫu: [Số] + ほん（本）\n\n' +
          '📌 Dùng cho vật dài: bút, cây, chai, lon…\n\n' +
          '🔸 Biến âm: 1 → いっぽん ／ 3 → さんぼん ／ 6 → ろっぽん\n\n' +
          '🔹 Ví dụ:\n' +
          '・ペンを さんぼん かいました。\n' +
          '・ビールを ごほん のみました。',
      },
      {
        title: '4. Cách dùng trợ số từ trong câu',
        explanation:
          '🧠 Cấu trúc cơ bản:\n' +
          '👉 [Danh từ] + が / を + [Số] + [助数詞]\n\n' +
          '🔹 Ví dụ:\n' +
          '・せんせいが 3人 います。\n' +
          '・ケーキが 4つ あります。\n' +
          '・ボールペンを 2本 かいました。\n\n' +
          '📌 Trong hội thoại hàng ngày có thể lược bỏ 「が」、「を」:\n' +
          '・肉まん 2個 たべた。→ Ăn 2 cái bánh bao rồi.\n\n' +
          '📌 Với 「つ」 → nếu hơn 10 cái, bỏ luôn trợ từ:\n' +
          '・ボールが 15 あります。\n\n' +
          '❓ Khi không biết rõ loại trợ từ → dùng:\n' +
          '・「どのくらい」: bao nhiêu\n' +
          '・「くらい」 sau số đếm: khoảng\n' +
          '→ A: ハンカチが どのくらい ありますか。\n' +
          '→ B: さんじゅうまい くらい あります。\n\n' +
          '📍 Lưu ý: Danh từ đứng TRƯỚC số đếm và trợ từ!\n' +
          '→ シャツ 3まい（3 cái áo） chứ không phải "3 cái シャツ".',
      },
    ],
  },
  {
    id: 'date_day_month',
    title: 'Cách nói thứ, ngày, tháng',
    sections: [
      {
        title: '1. Cách nói thứ trong tuần（ようび）',
        explanation:
          '📅 Thứ trong tuần trong tiếng Nhật kết thúc bằng 「ようび」（曜日）\n\n' +
          '🔸 Các thứ từ thứ 2 đến CN:\n' +
          '・げつようび（月曜日）: Thứ hai\n' +
          '・かようび（火曜日）: Thứ ba\n' +
          '・すいようび（水曜日）: Thứ tư\n' +
          '・もくようび（木曜日）: Thứ năm\n' +
          '・きんようび（金曜日）: Thứ sáu\n' +
          '・どようび（土曜日）: Thứ bảy\n' +
          '・にちようび（日曜日）: Chủ nhật\n\n' +
          '🔹 Ví dụ:\n' +
          '・きょうは すいようびです。→ Hôm nay là thứ tư.\n' +
          '・あしたは どようびですか。→ Ngày mai là thứ bảy phải không?',
      },
      {
        title: '2. Cách nói tháng trong năm（～がつ）',
        explanation:
          '🗓️ Tháng trong tiếng Nhật = [số đếm] + がつ（月）\n\n' +
          '🔸 Cách đọc:\n' +
          '・1月（いちがつ）: Tháng 1\n' +
          '・4月（しがつ）: Tháng 4 (không đọc よんがつ!)\n' +
          '・7月（しちがつ）: Tháng 7 (không đọc なながつ!)\n' +
          '・9月（くがつ）: Tháng 9 (không đọc きゅうがつ!)\n' +
          '・Các tháng còn lại đọc theo số đếm + がつ\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしのたんじょうびは 9月です。→ Sinh nhật tôi là tháng 9.\n' +
          '・いまは 12月です。→ Bây giờ là tháng 12.',
      },
      {
        title: '3. Cách nói ngày trong tháng（～にち）',
        explanation:
          '📆 Ngày trong tháng thường dùng số + にち（日） nhưng có **nhiều ngày đặc biệt cần thuộc lòng**!\n\n' +
          '🔸 Những ngày đặc biệt:\n' +
          '・1日（ついたち）: Mồng 1\n' +
          '・2日（ふつか）: Mồng 2\n' +
          '・3日（みっか）: Mồng 3\n' +
          '・4日（よっか）: Mồng 4\n' +
          '・5日（いつか）: Mồng 5\n' +
          '・6日（むいか）: Mồng 6\n' +
          '・7日（なのか）: Mồng 7\n' +
          '・8日（ようか）: Mồng 8\n' +
          '・9日（ここのか）: Mồng 9\n' +
          '・10日（とおか）: Mồng 10\n' +
          '・14日（じゅうよっか）: Ngày 14\n' +
          '・20日（はつか）: Ngày 20\n' +
          '・24日（にじゅうよっか）: Ngày 24\n\n' +
          '🔹 Các ngày khác: số đếm bình thường + にち\n' +
          '・11日（じゅういちにち）, 15日（じゅうごにち）, 30日（さんじゅうにち）...\n\n' +
          '🔹 Ví dụ:\n' +
          '・きょうは 5日です。→ Hôm nay là ngày mồng 5.\n' +
          '・テストは 14日です。→ Bài kiểm tra là ngày 14.',
      },
      {
        title: '4. Cách hỏi – trả lời về ngày tháng',
        explanation:
          '❓ Câu hỏi phổ biến:\n\n' +
          '👉 なんようびですか。→ Hôm nay là thứ mấy?\n' +
          '👉 なんがつですか。→ Tháng mấy?\n' +
          '👉 なんにちですか。→ Ngày bao nhiêu?\n' +
          '👉 たんじょうびは いつですか。→ Sinh nhật bạn khi nào?\n\n' +
          '🔹 Trả lời:\n' +
          '・きょうは もくようびです。→ Hôm nay là thứ năm.\n' +
          '・いまは しがつです。→ Bây giờ là tháng 4.\n' +
          '・テストは 20日です。→ Bài kiểm tra vào ngày 20.',
      },
      {
        title: '5. Ghi nhớ nhanh 🎯',
        explanation:
          '📌 Gợi ý để học dễ hơn:\n\n' +
          '🌀 Tập viết lịch tuần & tháng bằng tiếng Nhật mỗi ngày.\n' +
          '📅 Dùng flashcard để luyện thuộc 14 ngày đặc biệt.\n' +
          '🎤 Luyện nói: "きょうは何日ですか？" và tự trả lời bằng ngày thực tế.\n\n' +
          '📘 Tips: Trong tiếng Nhật, người ta thường dùng combo thứ + ngày + tháng như sau:\n' +
          '👉「今日は　げつようび、10月2日　です。」→ Hôm nay là thứ hai, ngày 2 tháng 10.',
      },
    ],
  },
  {
    id: 'noun_basic',
    title: 'Cách sử dụng danh từ trong câu cơ bản',
    sections: [
      {
        title: '1. Câu khẳng định ở hiện tại',
        explanation:
          '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + です / だ\n\n' +
          '📖 Dùng để khẳng định một điều đang là sự thật hoặc bản chất hiện tại.\n\n' +
          '🔸 Ví dụ:\n' +
          '・たなかさんは がくせいだ。→ Anh Tanaka là sinh viên.\n' +
          '・わたしは ベトナムじんです。→ Tôi là người Việt Nam.\n' +
          '・これは 日本語の本です。→ Đây là sách tiếng Nhật.',
      },
      {
        title: '2. Câu phủ định ở hiện tại',
        explanation:
          '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + では / じゃありません\n\n' +
          '📖 Dùng khi muốn nói một điều gì đó không đúng sự thật hiện tại.\n\n' +
          '🔸 Ví dụ:\n' +
          '・たなかさんは がくせいじゃありません。→ Anh Tanaka không phải là sinh viên.\n' +
          '・わたしは 日本じんではありません。→ Tôi không phải là người Nhật.\n' +
          '・これは 日本語の本じゃない。→ Đây không phải là sách tiếng Nhật.',
      },
      {
        title: '3. Câu khẳng định ở quá khứ',
        explanation:
          '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + でした / だった\n\n' +
          '📖 Dùng để diễn tả một sự thật trong quá khứ.\n\n' +
          '🔸 Ví dụ:\n' +
          '・たなかさんは がくせいでした。→ Anh Tanaka từng là sinh viên.\n' +
          '・きのうは かようびだった。→ Hôm qua là thứ ba.',
      },
      {
        title: '4. Câu phủ định ở quá khứ',
        explanation:
          '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + では / じゃありませんでした\n\n' +
          '📖 Dùng để phủ nhận một điều gì đó đã không xảy ra hoặc không đúng trong quá khứ.\n\n' +
          '🔸 Ví dụ:\n' +
          '・たなかさんは がくせいではありませんでした。→ Anh Tanaka không từng là sinh viên.\n' +
          '・きのうは かようびじゃなかった。→ Hôm qua không phải thứ ba.',
      },
    ],
  },
  {
    id: 'verb_modify_noun',
    title: 'Động từ bổ nghĩa cho danh từ',
    sections: [
      {
        title: '1. Khái quát: Động từ bổ nghĩa danh từ là gì?',
        explanation:
          '📌 Trong tiếng Nhật, động từ có thể **đứng trước danh từ** để bổ nghĩa, giống như “mà” trong tiếng Việt: "người mà tôi gặp", "cái bánh tôi ăn",...\n\n' +
          '👉 Cấu trúc: [Mệnh đề động từ] + [Danh từ]\n\n' +
          '🔸 Mệnh đề dùng **thể thường** (thể ngắn), bao gồm cả hiện tại và quá khứ, khẳng định hoặc phủ định.',
      },
      {
        title: '2. Câu với động từ hiện tại khẳng định',
        explanation:
          '👉 [Động từ thể từ điển] + Danh từ\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしが　つくる　ケーキ　→ cái bánh mà tôi làm\n' +
          '・よく　うたう　ひと　→ người hay hát\n' +
          '・べんきょうする　じかん　→ thời gian học\n\n' +
          '・これは　わたしが　よむ　本　です。→ Đây là cuốn sách tôi đọc.',
      },
      {
        title: '3. Câu với động từ phủ định',
        explanation:
          '👉 [Động từ thể ない] + Danh từ\n\n' +
          '🔹 Ví dụ:\n' +
          '・たべない　ひと　→ người không ăn\n' +
          '・いかない　がっこう　→ ngôi trường không đi đến\n\n' +
          '・これは　かのじょが　のまない　くすり　です。→ Đây là thuốc cô ấy không uống.',
      },
      {
        title: '4. Câu với động từ quá khứ',
        explanation:
          '👉 [Động từ thể た/なかった] + Danh từ\n\n' +
          '🔹 Ví dụ:\n' +
          '・あった　ひと　→ người tôi đã gặp\n' +
          '・みた　えいが　→ bộ phim đã xem\n' +
          '・いかなかった　ところ　→ nơi đã không đi\n\n' +
          '・これは　きのう　とった　しゃしん　です。→ Đây là bức ảnh tôi đã chụp hôm qua.',
      },
      {
        title: '5. Chủ ngữ trong mệnh đề động từ',
        explanation:
          '📌 Khi trong mệnh đề có **chủ ngữ khác với câu chính**, thường dùng 「が」hoặc 「の」\n\n' +
          '🔸 Ví dụ:\n' +
          '・これは　ともだちが　つくった　ケーキ　です。→ Đây là bánh bạn tôi làm.\n' +
          '・かのじょの　かいた　え　は　きれいです。→ Bức tranh cô ấy vẽ rất đẹp.',
      },
      {
        title: '6. Ghi nhớ nhanh 🎯',
        explanation:
          '🧠 Mẹo luyện tập:\n\n' +
          '・Bắt đầu từ các mẫu đơn giản như: のむひと、たべるもの、かくほん\n' +
          '・Ghép vào câu: 「これは たなかさんが　かいた　レポート　です。」\n' +
          '・Kết hợp thêm thời và phủ định để luyện phản xạ nhanh hơn 💡',
      },
    ],
  },
  {
    id: 'adverbs_negative',
    title: 'Những phó từ đi với câu phủ định',
    sections: [
      {
        title: '1. ぜんぜん～ない – Hoàn toàn không…',
        explanation:
          '📌 Dùng để nhấn mạnh việc **hoàn toàn không có/không xảy ra điều gì đó**.\n\n' +
          '👉 Cấu trúc: ぜんぜん + Động/Tính từ + ない\n\n' +
          '🔹 Ví dụ:\n' +
          '・お金は ぜんぜん ありません。→ Tôi hoàn toàn không có tiền.\n' +
          '・彼と ぜんぜん 話したくない。→ Tôi hoàn toàn không muốn nói chuyện với anh ta.\n' +
          '・英語が ぜんぜん わかりません。→ Tôi hoàn toàn không hiểu tiếng Anh.',
      },
      {
        title: '2. あまり～ない – Không … lắm / Hầu như không…',
        explanation:
          '📌 Dùng để thể hiện mức độ **không nhiều**, **không đáng kể**.\n\n' +
          '👉 Cấu trúc: あまり + Động/Tính từ + ない\n\n' +
          '🔹 Ví dụ:\n' +
          '・私は すしが あまり すきじゃありません。→ Tôi không thích sushi lắm.\n' +
          '・きょうの天気は あまり 寒くない。→ Thời tiết hôm nay không lạnh lắm.\n' +
          '・かのじょは 肉を あまり たべませんでした。→ Cô ấy hầu như không ăn thịt.',
      },
      {
        title: '3. なかなか～ない – Mãi mà không…',
        explanation:
          '📌 Dùng khi một hành động **không xảy ra như mong đợi**, dù đã đợi lâu.\n\n' +
          '👉 Cấu trúc: なかなか + Động từ + ない\n\n' +
          '🔹 Ví dụ:\n' +
          '・バスが なかなか こない。→ Xe buýt mãi không tới.\n' +
          '・日本語が なかなか 上手に なりません。→ Mãi mà không giỏi tiếng Nhật.\n' +
          '・病気が なかなか 治らない。→ Bệnh mãi không khỏi.',
      },
    ],
  },
  {
    id: 'dake_shika',
    title: '～だけ、しか: Chỉ',
    sections: [
      {
        title: '1. Khái quát về「だけ」và「しか」',
        explanation:
          '👉 Cả hai đều mang nghĩa “chỉ”, nhưng:\n\n' +
          '🔹「だけ」dùng với **thể khẳng định**\n' +
          '🔹「しか」dùng với **thể phủ định**, thể hiện **ý giới hạn mạnh hơn**\n\n' +
          '🧩 Ví dụ:\n' +
          '・千円だけあります。\n　→ Chỉ có 1000 yên.\n\n' +
          '・千円しかありません。\n　→ Ngoài 1000 yên ra thì không có gì khác.',
      },
      {
        title: '2. Vị trí trong câu',
        explanation:
          '👉 「だけ」「しか」thường đứng sau **danh từ**, nhưng「だけ」linh hoạt hơn:\n\n' +
          '🔹「だけ」có thể đi sau:\n' +
          '・Danh từ: かのじょだけしっています。\n　→ Chỉ cô ấy biết.\n' +
          '・Động từ: すこしつかれただけです。\n　→ Chỉ hơi mệt chút thôi.\n' +
          '・Tính từ: 話をきくだけのしごと。\n　→ Công việc chỉ cần nghe chuyện.\n\n' +
          '🔹「しか」chỉ đi sau **danh từ**, và câu phải ở phủ định:\n' +
          '・かのじょしかしりません。\n　→ Ngoài cô ấy ra thì không ai biết.',
      },
      {
        title: '3. Không dùng「を」「が」sau「だけ」「しか」',
        explanation:
          '📌 Khi dùng「だけ」「しか」thì **không dùng**「を」「が」sau đó.\n\n' +
          '🔹 Ví dụ:\n' +
          '❌ ハンバーグしかをたべません。\n✅ ハンバーグしかたべません。\n\n' +
          '❌ たなかさんしかがきませんでした。\n✅ たなかさんしかきませんでした。',
      },
      {
        title: '4. Với các trợ từ như「に」「で」',
        explanation:
          '🔹「だけ」có thể đặt **trước hoặc sau** trợ từ「に」「で」:\n' +
          '・図書館でだけべんきょうします。\n・図書館だけでべんきょうします。\n　→ Tôi chỉ học ở thư viện.\n\n' +
          '🔹「しか」chỉ được đặt **sau** trợ từ:\n' +
          '・図書館でしかべんきょうしません。\n・ここにしかありません。',
      },
      {
        title: '5. Mẹo ghi nhớ nhanh',
        explanation:
          '🧠 Ghi nhớ đơn giản:\n\n' +
          '・「だけ」→ khẳng định\n' +
          '・「しか」→ phủ định + nhấn mạnh hơn\n\n' +
          '⚠️ Nếu không chắc dùng trợ từ gì, hãy tập trung vào **ý nghĩa phủ định mạnh hay không** để chọn đúng giữa「だけ」và「しか」.',
      },
    ],
  },
  {
    id: 'deshou',
    title: '～でしょう',
    sections: [
      {
        title: '1. Diễn tả suy đoán – Chắc là…',
        explanation:
          '👉 Cấu trúc:\n' +
          '・[Động từ thể thường] + でしょう\n' +
          '・[Tính từ -i] + でしょう\n' +
          '・[Tính từ -na/Danh từ] (bỏ な) + でしょう\n\n' +
          '📌 Dùng để **dự đoán một điều gì đó** mà mình **không chắc chắn 100%**, thường dựa vào cảm giác hoặc thông tin có sẵn.\n\n' +
          '🔹 Ví dụ:\n' +
          '・あしたは はれるでしょう。→ Mai chắc là trời sẽ nắng.\n' +
          '・かれは たぶん こないでしょう。→ Anh ấy có lẽ sẽ không đến.\n' +
          '・きのう、Aチームが かったでしょう。→ Hôm qua chắc đội A thắng rồi.',
      },
      {
        title: '2. Xác nhận với người nghe – đúng không?',
        explanation:
          '👉 Dùng「でしょう？」để xác nhận lại suy nghĩ của mình với người khác, hoặc như tự hỏi chính mình.\n\n' +
          '🔹 Ví dụ:\n' +
          '・あしたは 日曜日でしょう？→ Mai là Chủ Nhật phải không?\n' +
          '・あのひとは たなかさんでしょう？→ Người đó là anh Tanaka phải không?\n' +
          '・このもんだいは かんたんでしょう？→ Câu hỏi này dễ nhỉ?',
      },
      {
        title: '3. Dùng để hỏi lịch sự: ～でしょうか',
        explanation:
          '👉「～でしょうか」là cách hỏi lịch sự, nhẹ nhàng hơn「ですか」.\n\n' +
          '🔹 Ví dụ:\n' +
          '・これは いくらでしょうか。→ Cái này bao nhiêu tiền vậy ạ?\n' +
          '・あのひとは だれでしょうか。→ Người kia là ai vậy?',
      },
      {
        title: '4. Cách nói thân mật: ～だろう',
        explanation:
          '👉 Trong hội thoại thân mật hoặc văn nói, người ta dùng「だろう」thay cho「でしょう」.\n\n' +
          '🔹 Ví dụ:\n' +
          '・かれは たぶん こないだろう。→ Chắc anh ấy sẽ không đến.\n' +
          '・あしたは あめが ふるだろう。→ Mai chắc sẽ mưa.\n' +
          '・Aチームが かっただろう。→ Đội A chắc là thắng rồi.',
      },
    ],
  },
  {
    id: 'ichiban_comparison',
    title: '～のなかで、～がいちばん～',
    sections: [
      {
        title: '1. Giới thiệu mẫu câu ～のなかで、～がいちばん～',
        explanation:
          '👉 「いちばん」 nghĩa là **số một / nhất**, dùng để **nói cái gì đó nổi bật nhất trong một nhóm**.\n\n' +
          '📌 Mẫu câu:\n' +
          '🔹 [Danh từ chung] のなかで、[Danh từ cụ thể] が いちばん + tính từ + です。\n' +
          '→ Trong số ..., ... là nhất\n\n' +
          '🔹 Ví dụ:\n' +
          '・魚のなかで サーモンが いちばん おいしいです。\n　→ Trong các loài cá thì cá hồi là ngon nhất.',
      },
      {
        title: '2. Một số ví dụ minh họa',
        explanation:
          '📚 Cùng xem thêm vài ví dụ đa dạng hơn nhé:\n\n' +
          '・かのじょは どうぶつのなかで ねこが いちばん すきです。\n　→ Trong các con vật, cô ấy thích mèo nhất.\n\n' +
          '・わたしは かもくのなかで えいごが いちばん じょうずです。\n　→ Trong các môn học, tôi giỏi tiếng Anh nhất.\n\n' +
          '・日本語のなかで かんじが いちばん むずかしいです。\n　→ Trong tiếng Nhật, kanji là khó nhất.',
      },
      {
        title: '3. Có thể lược bỏ tính từ',
        explanation:
          '📝 Trong hội thoại, đôi khi người Nhật lược bỏ tính từ sau 「いちばん」 khi ngữ cảnh rõ ràng:\n\n' +
          '🔹 Ví dụ:\n' +
          '・あの図書館のなかで この本が いちばん。\n　→ Cuốn sách này là hay nhất trong thư viện (ngầm hiểu là "hay nhất").\n\n' +
          '💡 Ngầm hiểu: 「いちばんいいです」 hoặc 「いちばんおもしろいです」.',
      },
      {
        title: '4. Ghi nhớ nhanh',
        explanation:
          '🧠 Gợi ý ghi nhớ:\n\n' +
          '・「～のなかで」: trong số ...\n' +
          '・「～がいちばん～」: ... là nhất\n' +
          '・Đừng quên kết hợp với **tính từ** để thể hiện mức độ nổi bật!',
      },
    ],
  },
  {
    id: 'ko_so_a_do',
    title: 'Phân biệt こ、そ、あ、ど',
    sections: [
      {
        title: '1. これ / それ / あれ / どれ – Đại từ chỉ vật',
        explanation:
          '👉 Dùng để **chỉ đồ vật** (không đi với danh từ).\n\n' +
          '🔸 これ: cái này (gần người nói)\n' +
          '🔸 それ: cái đó (gần người nghe)\n' +
          '🔸 あれ: cái kia (xa cả 2 người)\n' +
          '🔸 どれ: cái nào?\n\n' +
          '📌 Ví dụ:\n' +
          '・これは わたしの ほんです。→ Đây là sách của tôi.\n' +
          '・それは たなかさんの かばんですか。→ Đó là cặp của anh Tanaka à?\n' +
          '・あれは なんですか。→ Kia là cái gì?\n' +
          '・どれが あなたの ほんですか。→ Cái nào là sách của bạn?',
      },
      {
        title: '2. この / その / あの / どの – Tính từ chỉ định',
        explanation:
          '👉 Dùng để **bổ nghĩa cho danh từ** (phía sau là danh từ).\n\n' +
          '🔸 この: ~ này\n' +
          '🔸 その: ~ đó\n' +
          '🔸 あの: ~ kia\n' +
          '🔸 どの: ~ nào?\n\n' +
          '📌 Ví dụ:\n' +
          '・このほんは おもしろいです。→ Quyển sách này thú vị.\n' +
          '・そのひとは だれですか。→ Người đó là ai vậy?\n' +
          '・あのたてものは なんですか。→ Toà nhà kia là gì vậy?\n' +
          '・どのペンが いいですか。→ Cây bút nào thì tốt?',
      },
      {
        title: '3. ここ / そこ / あそこ / どこ – Chỉ nơi chốn',
        explanation:
          '👉 Dùng để **chỉ vị trí địa điểm**.\n\n' +
          '🔸 ここ: chỗ này (gần người nói)\n' +
          '🔸 そこ: chỗ đó (gần người nghe)\n' +
          '🔸 あそこ: chỗ kia (xa cả 2 người)\n' +
          '🔸 どこ: ở đâu?\n\n' +
          '📌 Ví dụ:\n' +
          '・ここは トイレです。→ Đây là nhà vệ sinh.\n' +
          '・そこに ほんがありますか。→ Có sách ở chỗ đó không?\n' +
          '・あそこは ゆうびんきょくです。→ Kia là bưu điện.\n' +
          '・トイレは どこですか。→ Nhà vệ sinh ở đâu?',
      },
      {
        title: '4. こっち / そっち / あっち / どっち – Cách nói thân mật',
        explanation:
          '👉 Cách nói thân mật của ここ・そこ・あそこ・どこ và dùng để **chỉ phương hướng hoặc người**.\n\n' +
          '🔸 こっち: phía này / bên này\n' +
          '🔸 そっち: phía đó / bên đó\n' +
          '🔸 あっち: phía kia / bên kia\n' +
          '🔸 どっち: phía nào / bên nào?\n\n' +
          '📌 Ví dụ:\n' +
          '・トイレは こっちです。→ Nhà vệ sinh ở hướng này.\n' +
          '・そっちに たなかさんが います。→ Anh Tanaka ở bên đó.\n' +
          '・あっちが わたしの うちです。→ Bên kia là nhà tôi.\n' +
          '・どっちに いきますか。→ Bạn sẽ đi hướng nào?',
      },
      {
        title: '5. こちら / そちら / あちら / どちら – Lịch sự hơn',
        explanation:
          '👉 Cách nói lịch sự của こっち / そっち / あっち / どっち.\n' +
          'Ngoài ra còn được dùng để chỉ người (khiêm nhường / kính ngữ).\n\n' +
          '🔸 こちら: phía này / vị này\n' +
          '🔸 そちら: phía đó / vị đó\n' +
          '🔸 あちら: phía kia / vị kia\n' +
          '🔸 どちら: phía nào / vị nào?\n\n' +
          '📌 Ví dụ:\n' +
          '・トイレは こちらです。→ Nhà vệ sinh ở phía này.\n' +
          '・そちらは どなたですか。→ Vị đó là ai?\n' +
          '・あちらは たなかさんです。→ Kia là anh Tanaka.\n' +
          '・どちらが せんせいですか。→ Ai là thầy/cô giáo?',
      },
    ],
  },
  {
    id: 'mae_ato',
    title: '～まえ/ あと',
    sections: [
      {
        title: '1. Cấu trúc với 「まえ」– Trước khi ...',
        explanation:
          '👉 Dùng để nói **"trước khi làm gì đó"** hoặc **"trước một mốc thời gian cụ thể"**.\n\n' +
          '📌 Mẫu câu:\n' +
          '・[Danh từ]（の）+ まえに\n' +
          '・[Động từ thể từ điển] + まえに\n\n' +
          '🔹 Ví dụ:\n' +
          '・１ヶ月まえに、日本にきました。\n　→ Tôi đến Nhật 1 tháng trước.\n\n' +
          '・たべるまえに、てをあらってください。\n　→ Hãy rửa tay trước khi ăn.\n\n' +
          '・かのじょは ねるまえに ほんを よみます。\n　→ Cô ấy đọc sách trước khi ngủ.',
      },
      {
        title: '2. Cấu trúc với 「あと」– Sau khi ...',
        explanation:
          '👉 Dùng để diễn tả hành động **xảy ra sau một hành động khác** hoặc **sau một mốc sự kiện cụ thể**.\n\n' +
          '📌 Mẫu câu:\n' +
          '・[Danh từ] + の + あとで\n' +
          '・[Động từ thể た] + あとで\n\n' +
          '🔹 Ví dụ:\n' +
          '・たべたあとで、はをみがきます。\n　→ Tôi đánh răng sau khi ăn.\n\n' +
          '・しごとのあとで、のみにいきます。\n　→ Tôi đi nhậu sau giờ làm.\n\n' +
          '・かいぎのあとで、メールをおくります。\n　→ Tôi sẽ gửi mail sau khi họp xong.',
      },
      {
        title: '3. Ghi nhớ nhanh',
        explanation:
          '🧠 Mẹo ghi nhớ:\n\n' +
          '・「まえ」 luôn đi với thể từ điển hoặc danh từ + の\n' +
          '・「あと」 luôn đi với thể た hoặc danh từ + の\n\n' +
          '💡 Khi chia đúng cấu trúc, câu sẽ tự nhiên và dễ hiểu hơn trong giao tiếp hàng ngày!',
      },
    ],
  },
  {
    id: 'node_kara',
    title: '～ので、～から',
    sections: [
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
    ],
  },
  {
    id: 'question_words',
    title: 'Tổng hợp từ nghi vấn – 疑問詞',
    sections: [
      {
        title: '1. 疑問詞 là gì?',
        explanation:
          '🔎 疑問詞（ぎもんし）là **từ nghi vấn**, dùng để hỏi về người, vật, thời gian, địa điểm, số lượng,...\n\n' +
          '📌 Tùy ngữ cảnh, nhiều nghi vấn từ có hình thức **lịch sự hơn** (ví dụ: どなた thay cho だれ)',
      },
      {
        title: '2. Các nhóm nghi vấn từ phổ biến',
        explanation:
          '🧍‍♂️ **Người**:\n' +
          '・だれ (ai), どなた (ai – lịch sự)\n' +
          '・だれの / どなたの: của ai\n' +
          '・だれと / どなたと: với ai\n\n' +
          '📦 **Vật/Đồ vật**:\n' +
          '・なに / なん: cái gì\n' +
          '・どれ / どの + [danh từ]: cái nào / cái … nào\n' +
          '・どちら / どちらの: (lịch sự) cái nào/ của … nào\n\n' +
          '🕰️ **Thời gian**:\n' +
          '・いつ: khi nào\n' +
          '・なんじ: mấy giờ\n' +
          '・なんにち: ngày mấy\n' +
          '・なんようび: thứ mấy\n' +
          '・なんがつ: tháng mấy\n\n' +
          '🧭 **Địa điểm**:\n' +
          '・どこ / どちら: ở đâu / đâu (lịch sự)\n' +
          '・どこで / どちらで: ở đâu (diễn ra hành động)\n' +
          '・どこに / どちらに: ở đâu (tồn tại)\n' +
          '・どこへ / どちらへ: đến đâu (hướng đi)\n\n' +
          '🔢 **Số lượng/Đếm**:\n' +
          '・いくつ: bao nhiêu cái (chung)\n' +
          '・なんにん: bao nhiêu người\n' +
          '・なんこ: mấy cái (vật nhỏ)\n' +
          '・なんぼん / なんほん: mấy cái (dài như bút, chai…)\n' +
          '・なんまい: mấy tờ (mỏng như giấy)\n' +
          '・なんさつ: mấy quyển (sách, vở)\n' +
          '・なんかい / なんど: mấy lần\n' +
          '・なんじかん: mấy tiếng\n' +
          '・なんぷん: mấy phút\n' +
          '・どのくらい / どのぐらい: khoảng bao lâu / bao nhiêu\n\n' +
          '💬 **Hỏi lý do, phương tiện**:\n' +
          '・どうして / なんで / なぜ: tại sao\n' +
          '・なにで / なんで: bằng cách nào (phương tiện đi lại, phương pháp)\n\n' +
          '🌐 **Khác**:\n' +
          '・どこの + danh từ: của nước/công ty nào\n' +
          '・どちらの + danh từ: của ai/của bên nào (lịch sự)',
      },
      {
        title: '3. Ví dụ tổng hợp',
        explanation:
          '🔹 これは なんですか？→ Cái này là cái gì?\n' +
          '🔹 あのひとは だれですか？→ Người kia là ai?\n' +
          '🔹 いま なんじですか？→ Bây giờ là mấy giờ?\n' +
          '🔹 どこで しごとを しますか？→ Bạn làm việc ở đâu?\n' +
          '🔹 なんで がっこうへ いきますか？→ Bạn đến trường bằng gì?\n' +
          '🔹 どのくにの くるまですか？→ Xe này của nước nào?\n' +
          '🔹 きのう なんじかん べんきょうしましたか？→ Hôm qua bạn học mấy tiếng?\n' +
          '🔹 なんまい シャツを かいましたか？→ Bạn đã mua mấy cái áo (mỏng)?',
      },
    ],
  },
  {
    id: 'yori_no_houga',
    title: '～より～のほうが',
    sections: [
      {
        title: '1. Cấu trúc so sánh hơn: ～より～のほうが',
        explanation:
          '👉 Dùng để so sánh giữa **hai người, vật, hoặc sự việc**.\n\n' +
          '📌 Mẫu câu:\n' +
          '🔹 [A] は [B] より + tính từ + です。\n' +
          '→ A thì ... hơn B\n\n' +
          '🔹 Ví dụ:\n' +
          '・くるまは じてんしゃより はやいです。\n　→ Ô tô nhanh hơn xe đạp.\n\n' +
          '・たなかさんは わたしより せがたかいです。\n　→ Tanaka cao hơn tôi.\n\n' +
          '・このパソコンは そのパソコンより べんりです。\n　→ Máy tính này tiện hơn máy kia.\n\n' +
          '・とらは ねこより おおきいです。\n　→ Hổ to hơn mèo.',
      },
      {
        title: '2. Dạng đảo ngược: ～のほうが～より',
        explanation:
          '👉 Chúng ta có thể đảo ngược vị trí để nhấn mạnh đối tượng hơn:\n\n' +
          '📌 Mẫu câu:\n' +
          '🔹 [B] より [A] のほうが + tính từ + です。\n' +
          '→ So với B thì A ... hơn\n\n' +
          '🔹 Ví dụ:\n' +
          '・じてんしゃより くるまのほうが はやいです。\n　→ So với xe đạp thì ô tô nhanh hơn.\n\n' +
          '・わたしより たなかさんのほうが せがたかいです。\n　→ So với tôi thì Tanaka cao hơn.\n\n' +
          '・そのパソコンより このパソコンのほうが べんりです。\n　→ Máy này tiện hơn máy kia.\n\n' +
          '・ねこより とらのほうが おおきいです。\n　→ Hổ to hơn mèo.',
      },
      {
        title: '3. Ghi nhớ nhanh',
        explanation:
          '🧠 Gợi ý học nhanh:\n\n' +
          '🔹 「より」 giống như "so với"\n' +
          '🔹 「のほうが」 dùng để nhấn mạnh chủ thể được so sánh\n' +
          '🔹 Có thể dùng cách nào cũng được, miễn là rõ chủ thể nào "hơn"\n\n' +
          '💬 Cả hai cách đều đúng, chỉ khác nhau ở cách diễn đạt mà thôi!',
      },
    ],
  },
  {
    id: 'ga_kedo',
    title: '～が/ ～けど',
    sections: [
      {
        title: '1. ～が・～けど dùng để nối câu trái ngược nhau',
        explanation:
          '👉 Cả hai đều mang nghĩa “nhưng…”, dùng để **nối hai vế câu có nội dung đối lập** nhau.\n\n' +
          '🔸「が」 là dạng **lịch sự, trang trọng hơn**.\n' +
          '🔹「けど」 là dạng **thân mật, thường dùng trong hội thoại hàng ngày**.\n\n' +
          '▶️ わたしは にほんごが すきです **が**、かんじは むずかしいです。\n→ Tôi thích tiếng Nhật nhưng chữ Hán thì khó.\n\n' +
          '▶️ このレストランは やすい **けど**、あまり おいしくないです。\n→ Quán này rẻ nhưng không ngon lắm.',
      },
      {
        title: '2. Dùng 「けど」 để mở đầu cho lời mời, đề xuất',
        explanation:
          '👉 「けど」 cũng thường được dùng để **mở lời một cách nhẹ nhàng, lịch sự** trước khi đưa ra ý kiến hoặc đề nghị.\n\n' +
          '▶️ すみません、ちょっと ききたいんです **けど**…\n→ Xin lỗi, tôi muốn hỏi một chút…\n\n' +
          '▶️ いま いそがしいんです **けど**、あとで いいですか。\n→ Bây giờ tôi đang bận, để sau được không?',
      },
      {
        title: '3. Khác biệt giữa 「が」 và 「けど」',
        explanation:
          '🔸「が」: Trang trọng hơn, thường dùng trong văn viết hoặc khi nói lịch sự.\n' +
          '🔹「けど」: Tự nhiên, mềm mại hơn, dùng nhiều trong hội thoại thân mật.\n\n' +
          '📌 Trong một số tình huống, cả hai đều dùng được – nhưng chọn từ nào tùy vào **mức độ lịch sự** bạn muốn thể hiện.\n\n' +
          'Ví dụ:\n' +
          '・日本は すてきな くに **ですが**、ぶっかは たかいです。\n→ Nhật là đất nước tuyệt vời nhưng vật giá cao. (trang trọng)\n' +
          '・にほんは いい ところ **けど**、たかいよね。\n→ Nhật tốt thật đấy nhưng đắt quá ha! (hội thoại)',
      },
      {
        title: '4. Ghi nhớ nhanh 💡',
        explanation:
          '🧠 Mẹo học nhanh:\n\n' +
          '・**が** → "nhưng" trong văn nói lịch sự / văn viết\n' +
          '・**けど** → "nhưng" trong văn nói hàng ngày, thân mật\n\n' +
          '👉 Thử luyện tập nối 2 câu bất kỳ bằng が/けど để phản xạ nhanh hơn nhé!\n' +
          'Ví dụ:\n' +
          '・このTシャツは かわいい **けど**、ちょっと たかい。→ Áo này dễ thương nhưng hơi đắt.\n' +
          '・たべたい **けど**、ダイエットちゅうです。→ Muốn ăn đấy nhưng đang ăn kiêng.',
      },
    ],
  },
  {
    id: 'particle_ni_de',
    title: 'Phân biệt 「に」、「で」',
    sections: [
      {
        title: '1. 「に」 – Nơi **đến**, **tồn tại**, **thời điểm**',
        explanation:
          '👉 Dùng trợ từ 「に」 khi nói đến:\n\n' +
          '📌 **Nơi đến:** chỉ địa điểm mà ai đó hướng đến.\n' +
          '・がっこうに いきます。→ Đi đến trường.\n\n' +
          '📌 **Nơi tồn tại:** chỉ nơi có người/vật.\n' +
          '・へやに いぬが います。→ Có con chó trong phòng.\n\n' +
          '📌 **Thời điểm:** chỉ mốc thời gian.\n' +
          '・7じに おきます。→ Thức dậy lúc 7 giờ.',
      },
      {
        title: '2. 「で」 – Nơi **hành động xảy ra**, **phương tiện**, **công cụ**',
        explanation:
          '👉 Dùng trợ từ 「で」 khi nói đến:\n\n' +
          '📌 **Địa điểm hành động:** nơi mà hành động thực sự xảy ra.\n' +
          '・きっさてんで コーヒーを のみます。→ Uống cà phê ở quán.\n\n' +
          '📌 **Phương tiện:** phương tiện di chuyển.\n' +
          '・バスで がっこうへ いきます。→ Đi học bằng xe buýt.\n\n' +
          '📌 **Công cụ:** phương tiện làm hành động.\n' +
          '・はしで たべます。→ Ăn bằng đũa.',
      },
      {
        title: '3. So sánh nhanh: 「に」 vs 「で」',
        explanation:
          '🔎 Cùng xem hai câu dưới đây để phân biệt:\n\n' +
          '▶️ 学校に いきます。→ Đến trường (nơi **đến**)\n' +
          '▶️ 学校で べんきょうします。→ Học ở trường (nơi **diễn ra hành động**)\n\n' +
          '📌 **に**: Trường là đích đến.\n' +
          '📌 **で**: Trường là nơi học diễn ra.',
      },
      {
        title: '4. Ghi nhớ dễ dàng 💡',
        explanation:
          '🧠 Mẹo học nhanh:\n\n' +
          '・**に** → nơi đến, nơi có ai/cái gì, thời gian\n' +
          '・**で** → nơi làm việc gì đó, công cụ, phương tiện\n\n' +
          '👉 Hãy thay đổi ví dụ với từng động từ bạn biết để luyện tập nhé!\n' +
          'Ví dụ:\n' +
          '・スーパーに いきます。→ Tôi đi siêu thị.\n' +
          '・スーパーで パンを かいます。→ Tôi mua bánh ở siêu thị.',
      },
    ],
  },
  {
    id: 'particles_overview',
    title: 'Tổng hợp về trợ từ cơ bản',
    sections: [
      {
        title: '1. Trợ từ は – Chủ đề của câu',
        explanation:
          '👉 [Danh từ] + は + ...\n\n' +
          '📌 Trợ từ 「は」đánh dấu chủ đề trong câu, thường là người/vật đang được nói đến.\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしは がくせいです。→ Tôi là sinh viên.\n' +
          '・これは ほんです。→ Cái này là sách.',
      },
      {
        title: '2. Trợ từ が – Chủ ngữ mới, nhấn mạnh',
        explanation:
          '👉 [Danh từ] + が + ...\n\n' +
          '📌 「が」dùng để giới thiệu thông tin mới, hoặc nhấn mạnh chủ ngữ.\n\n' +
          '🔹 Ví dụ:\n' +
          '・だれが きますか。→ Ai sẽ đến?\n' +
          '・ねこが います。→ Có con mèo (→ nhấn mạnh là "con mèo").',
      },
      {
        title: '3. Trợ từ を – Tân ngữ, đối tượng bị tác động',
        explanation:
          '👉 [Danh từ] + を + [động từ]\n\n' +
          '📌 「を」dùng để chỉ đối tượng bị hành động tác động.\n\n' +
          '🔹 Ví dụ:\n' +
          '・ごはんを たべます。→ Tôi ăn cơm.\n' +
          '・てがみを かきます。→ Viết thư.',
      },
      {
        title: '4. Trợ từ に – Thời điểm, địa điểm, hướng, mục tiêu',
        explanation:
          '👉 [Danh từ] + に + ...\n\n' +
          '📌 「に」có nhiều nghĩa: chỉ nơi đến, thời điểm, nơi tồn tại, mục tiêu,...\n\n' +
          '🔹 Ví dụ:\n' +
          '・7じに おきます。→ Dậy lúc 7 giờ.\n' +
          '・がっこうに いきます。→ Đến trường.\n' +
          '・つくえのうえに ほんが あります。→ Có quyển sách trên bàn.',
      },
      {
        title: '5. Trợ từ で – Địa điểm xảy ra hành động',
        explanation:
          '👉 [Danh từ chỉ nơi chốn/phương tiện] + で + ...\n\n' +
          '📌 Dùng để nói hành động xảy ra ở đâu hoặc bằng phương tiện gì.\n\n' +
          '🔹 Ví dụ:\n' +
          '・うちで べんきょうします。→ Tôi học ở nhà.\n' +
          '・バスで がっこうへ いきます。→ Đi học bằng xe buýt.',
      },
      {
        title: '6. Trợ từ と – Cùng với, liệt kê',
        explanation:
          '👉 [Danh từ] + と + [Danh từ]\n\n' +
          '📌 Dùng để nối các danh từ (và), hoặc để nói "cùng với ai".\n\n' +
          '🔹 Ví dụ:\n' +
          '・ともだちと はなします。→ Nói chuyện với bạn.\n' +
          '・りんごと バナナを かいました。→ Mua táo và chuối.',
      },
      {
        title: '7. Trợ từ も – Cũng',
        explanation:
          '👉 [Danh từ] + も + ...\n\n' +
          '📌 「も」thay cho 「は」để nhấn mạnh nghĩa "cũng là..."\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしも がくせいです。→ Tôi cũng là sinh viên.\n' +
          '・パンも たべました。→ Tôi cũng đã ăn bánh mì.',
      },
      {
        title: '8. Trợ từ から và まで – Từ... đến...',
        explanation:
          '👉 [Thời gian/địa điểm] + から／まで\n\n' +
          '📌 「から」: từ đâu/bao giờ, 「まで」: đến đâu/bao giờ\n\n' +
          '🔹 Ví dụ:\n' +
          '・9じから 5じまで はたらきます。→ Làm việc từ 9h đến 5h.\n' +
          '・とうきょうから おおさかまで いきます。→ Đi từ Tokyo đến Osaka.',
      },
      {
        title: '9. Ghi nhớ nhanh 🎯',
        explanation:
          '🧠 Mẹo học trợ từ cơ bản:\n\n' +
          '・「は」 – Nêu chủ đề\n' +
          '・「が」 – Giới thiệu/chủ ngữ mới\n' +
          '・「を」 – Đối tượng bị tác động\n' +
          '・「に」 – Nơi đến, thời điểm, mục tiêu\n' +
          '・「で」 – Nơi xảy ra hành động\n' +
          '・「と」 – Với/ và\n' +
          '・「も」 – Cũng\n' +
          '・「から / まで」 – Từ / đến\n\n' +
          '👉 Chăm luyện tập qua ví dụ thực tế để nhớ lâu và hiểu sâu nhé!',
      },
    ],
  },
  {
    id: 'ageru_morau_kureru',
    title: 'Phân biệt あげます・もらいます・くれます',
    sections: [
      {
        title: '1. Tổng quan về あげます・もらいます・くれます',
        explanation:
          'Ba động từ này đều diễn tả hành động **cho, nhận** trong tiếng Nhật, nhưng khác nhau ở góc nhìn và vị trí người cho – người nhận:\n\n' +
          '🔸 **あげます**: Tôi cho người khác / Người A cho người B\n' +
          '🔸 **もらいます**: Tôi nhận từ người khác / Người A nhận từ người B\n' +
          '🔸 **くれます**: Người khác cho tôi hoặc người trong nhóm của tôi',
        examples: [],
      },
      {
        title: '2. Cấu trúc với 「あげます」– Cho ai đó',
        explanation:
          '👉 [Người A] は [Người B] に [もの] を あげます。\n\n' +
          '📌 Dùng khi **người cho không phải là tôi** (hoặc tôi cho người khác).\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしは ともだちに プレゼントを あげました。→ Tôi đã tặng quà cho bạn.\n' +
          '・たなかさんは いもうとに おかしを あげました。→ Anh Tanaka tặng bánh kẹo cho em gái.',
        examples: [],
      },
      {
        title: '3. Cấu trúc với 「もらいます」– Nhận từ ai đó',
        explanation:
          '👉 [Người A] は [Người B] に / から [もの] を もらいます。\n\n' +
          '📌 Dùng khi **người nhận là tôi hoặc ai đó nhận từ người khác**.\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしは せんせいに 本を もらいました。→ Tôi đã nhận sách từ thầy giáo.\n' +
          '・ともだちは わたしに プレゼントを もらいました。→ Bạn tôi nhận quà từ tôi.',
        examples: [],
      },
      {
        title: '4. Cấu trúc với 「くれます」– Ai đó cho tôi',
        explanation:
          '👉 [Người khác] は わたし（のグループ）に [もの] を くれます。\n\n' +
          '📌 Dùng khi **người cho là người khác**, và **người nhận là tôi hoặc người trong nhóm tôi**.\n\n' +
          '🔹 Ví dụ:\n' +
          '・せんせいは わたしに しゅくだいを くれました。→ Cô giáo đã đưa bài tập cho tôi.\n' +
          '・おばあさんは わたしのこどもに おもちゃを くれました。→ Bà đã tặng đồ chơi cho con tôi.',
        examples: [],
      },
      {
        title: '5. Ghi nhớ nhanh',
        explanation:
          '🧠 Mẹo ghi nhớ:\n\n' +
          '・**あげる** – cho người khác (từ mình → người khác)\n' +
          '・**もらう** – nhận từ người khác (từ người khác → mình)\n' +
          '・**くれる** – người khác cho mình (người khác → mình)',
        examples: [],
      },
    ],
  },
  {
    id: 'ga_arimasu',
    title: '～があります／～がいます',
    sections: [
      {
        title: '1. Giới thiệu ～があります／～がいます',
        explanation:
          'Cấu trúc này dùng để diễn tả **sự tồn tại** của người, vật hoặc sự vật ở một nơi nào đó:\n\n' +
          '🔸 **あります（ある）**: Dùng với **vật vô tri vô giác** (bàn ghế, cây cối, đồ vật...)\n' +
          '🔹 **います（いる）**: Dùng với **người và động vật** (sinh vật có sự sống)',
        examples: [],
      },
      {
        title: '2. Cấu trúc câu khẳng định',
        explanation:
          '👉 Danh từ (chỉ người / vật) + が + あります／います。\n\n' +
          '🔸 **Vật / đồ vật:**\n' +
          '・つくえのうえに ほんが あります。→ Trên bàn có quyển sách。\n' +
          '・にわに きが あります。→ Trong vườn có cây。\n\n' +
          '🔹 **Người / động vật:**\n' +
          '・こうえんに こどもが います。→ Ở công viên có trẻ em。\n' +
          '・いえに いぬが います。→ Trong nhà có con chó。',
        examples: [],
      },
      {
        title: '3. Cấu trúc phủ định và nghi vấn',
        explanation:
          '🔸 **Phủ định:** ～が **ありません／いません**\n' +
          '・かばんのなかに でんわが ありません。→ Trong cặp không có điện thoại。\n' +
          '・うちに ねこが いません。→ Nhà tôi không có mèo。\n\n' +
          '🔸 **Câu hỏi:** ～が **ありますか／いますか？**\n' +
          '・ここにトイレがありますか？→ Ở đây có nhà vệ sinh không?\n' +
          '・がっこうに せんせいが いますか？→ Trường học có thầy cô không?',
        examples: [],
      },
      {
        title: '4. Lưu ý khi dùng trợ từ「が」',
        explanation:
          'Trợ từ **が** dùng để chỉ đối tượng chính của câu (người/vật tồn tại). Nếu muốn nói **ở đâu có cái gì**, thì dùng:\n\n' +
          '👉「Địa điểm + に + Danh từ + が + あります／います」\n\n' +
          '🔹 Ví dụ:\n' +
          '・へやに テレビが あります。\n' +
          '・こうえんに こどもが います。',
        examples: [],
      },
      {
        title: '5. Ứng dụng thực tế',
        explanation:
          'Bạn có thể dùng mẫu câu này để hỏi đường, miêu tả cảnh vật, hoặc mô tả nơi ở:\n\n' +
          '🗣️ トイレは ありますか？→ Có nhà vệ sinh không?\n' +
          '🏠 わたしのいえに おおきい にわが あります。→ Nhà tôi có một khu vườn lớn。\n' +
          '🐶 いえに いぬが います。→ Trong nhà có chó。',
        examples: [],
      },
    ],
  },
  {
    id: 'masenka_mashou',
    title: '～ませんか、～ましょう、～ましょうか',
    sections: [
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
    ],
  },
  {
    id: 'naide_kudasai',
    title: '～ないでください',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          'Mẫu câu **～ないでください** được dùng để yêu cầu **không làm một hành động nào đó** – mang tính lịch sự, nhẹ nhàng.\n\n👉 Thường gặp trong biển báo, hướng dẫn, hoặc khi muốn nhắc nhở ai đó.',
      },
      {
        title: '2. Cấu trúc ngữ pháp',
        explanation:
          '🔹 **[Động từ thể ない] + でください**\n\nVí dụ chia thể ない:\n・たべる → たべ**ない**\n・あそぶ → あそ**ばない**\n・くる → こ**ない**\n・する → し**ない**',
      },
      {
        title: '3. Ví dụ thường gặp',
        explanation:
          '🔸 **にわで あそばないでください。**\n→ Đừng chơi ở trong vườn.\n\n' +
          '🔸 **ここに はいらないでください。あぶないんです。**\n→ Xin đừng vào đây. Nguy hiểm đấy.\n\n' +
          '🔸 **こたえを コピーしないでください。**\n→ Không được sao chép đáp án.\n\n' +
          '🔸 **かべに かかないでください。**\n→ Đừng vẽ lên tường.\n\n' +
          '🔸 **ここで しゃしんを とらないでください。**\n→ Vui lòng không chụp ảnh tại đây.',
      },
      {
        title: '4. Khi muốn nói nhẹ nhàng, thân mật',
        explanation:
          '✅ Có thể bỏ 「ください」 khi nói chuyện thân mật (với bạn bè, người thân, trẻ em,...)\n\n' +
          '🔹 **わたしに しんぱいしないでね。**\n→ Đừng lo cho tớ nhé.\n\n' +
          '🔹 **キャンディを もうたべないで。**\n→ Đừng ăn thêm kẹo nữa.\n\n' +
          '🔹 **なかないで。だいじょうぶだよ。**\n→ Đừng khóc, không sao đâu!',
      },
      {
        title: '5. Gợi ý học thêm',
        explanation:
          '🔎 Muốn dùng được mẫu này linh hoạt, bạn nên ôn lại **thể ない của động từ** (ない形).\n\n👉 Gợi ý: Tạo bảng động từ thường dùng, học cách chia sang ない để áp dụng tự nhiên hơn!',
      },
    ],
  },
  {
    id: 'nakereba_ikenai',
    title: '～なければいけない / ～なくてはいけない',
    sections: [
      {
        title: '1. Mẫu câu dùng để làm gì?',
        explanation:
          '「～なければいけない」và 「～なくてはいけない」diễn tả một việc **bắt buộc phải làm**, không làm thì không ổn! 😤\n\n📍 Nghĩa: “Không thể không làm → Phải làm thôi!”.',
      },
      {
        title: '2. Cấu trúc & cách chia',
        explanation:
          '🔹 [Động từ thể ない (bỏ ない)] + なければいけない / なくてはいけない\n\n👉 Lịch sự hơn:\n・いけない → いけません\n\n📝 Ví dụ:\n・たべない → たべなければいけない\n・しない → しなければいけない\n・いかない → いかなくてはいけない',
      },
      {
        title: '3. Câu ví dụ dễ hiểu',
        explanation:
          '✅ **わたしは しゅくだいを しなければいけません。**\n→ Tôi phải làm bài tập.\n\n' +
          '✅ **たばこを やめなくてはいけない。**\n→ Phải bỏ thuốc lá thôi.\n\n' +
          '✅ **かのじょは アメリカに いかなくてはいけません。**\n→ Cô ấy phải đi Mỹ.',
      },
      {
        title: '4. So sánh với ～ならない 🆚 ～いけない',
        explanation:
          '🔸 **～ならない** → Trang trọng hơn, dùng trong văn viết, công việc.\n🔸 **～いけない** → Thân mật, dùng nhiều trong hội thoại đời thường.\n\n🧠 Nghĩa gần như giống nhau, nhưng:\n・「ならない」= mang tính **khách quan** (vì trách nhiệm)\n・「いけない」= mang tính **chủ quan** (do bản thân thấy cần)',
      },
      {
        title: '5. Hội thoại thực tế & rút gọn',
        explanation:
          '📌 Trong giao tiếp hàng ngày:\n\n✅ **Rút ngắn** như sau:\n・なければ → なきゃ\n・なくては → なくちゃ\n\n🗣 Ví dụ:\n・もう いかなきゃ！→ Phải đi thôi!\n・べんきょう しなくちゃ！→ Phải học chứ!',
      },
      {
        title: '6. Biến thể phổ biến khác',
        explanation:
          '📚 Ngoài ra, còn có:\n\n✅ **～ないと（いけない）** → Dùng rất phổ biến!\n・もう いかないと → Tôi phải đi rồi\n\n👉 Đây là cách nói tắt siêu quen thuộc của người Nhật! Bạn có thể dùng thoải mái khi trò chuyện thường ngày!',
      },
    ],
  },
  {
    id: 'nakereba_naranai',
    title: '～なければならない / ～なくてはならない',
    sections: [
      {
        title: '1. Ý nghĩa của mẫu câu',
        explanation:
          '「～なければならない」và 「～なくてはならない」được dùng khi bạn **bắt buộc phải làm một việc gì đó**, không thể tránh được.\n\n🧠 Nghĩa gốc: “Nếu không làm thì không được” → **phải làm!**',
      },
      {
        title: '2. Cấu trúc ngữ pháp',
        explanation:
          '🔹 [Động từ thể ない (bỏ ない)] + なければならない / なくてはならない\n\n👉 Dạng lịch sự:\n・ならない → なりません',
      },
      {
        title: '3. Cách chia động từ (ví dụ)',
        explanation:
          '・いく (đi) → いかない → いかなければならない\n・はなす (nói) → はなさない → はなさなくてはならない\n・する (làm) → しない → しなければなりません\n・くる (đến) → こない → こなければなりません',
      },
      {
        title: '4. Ví dụ trong đời sống',
        explanation:
          '🔸 **わたしは しゅくだいを しなければなりません。**\n→ Tôi **phải làm bài tập**.\n\n' +
          '🔸 **かれは あした レポートを ださなくてはならない。**\n→ Ngày mai anh ấy **phải nộp báo cáo**.\n\n' +
          '🔸 **たばこを やめなければならない。からだに わるいんです。**\n→ Phải **bỏ thuốc lá thôi**. Hại sức khỏe lắm!\n\n' +
          '🔸 **かのじょは らいしゅう アメリカに いかなくてはなりません。**\n→ Tuần sau cô ấy **phải đi Mỹ**.',
      },
      {
        title: '5. Mẹo ghi nhớ 🎯',
        explanation:
          '📌 Hãy nghĩ như thế này:\n\n「なければ」= nếu không…\n「ならない」= không được\n👉 Kết hợp lại: Nếu không làm… thì không được → **PHẢI LÀM!**\n\nVí dụ:\n・べんきょう**しなければならない** → Phải học!\n・やすま**なくてはならない** → Phải nghỉ ngơi thôi!',
      },
    ],
  },
  {
    id: 'nakutemo_ii',
    title: '～なくてもいい',
    sections: [
      {
        title: '1. Mẫu câu này dùng để làm gì?',
        explanation:
          'Mẫu câu 「～なくてもいい」dùng để **nói rằng không cần làm một việc gì đó cũng được**, không có vấn đề gì cả. Rất tiện cho lúc muốn "lười chính đáng" 😆',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể ない → bỏ ない, thêm **なくてもいい（です）**\n\nVí dụ:\n・たべない → たべなくてもいい\n・いかない → いかなくてもいい\n・しない → しなくてもいい',
      },
      {
        title: '3. Câu ví dụ thường gặp',
        explanation:
          '✅ **きょうは 学校に いかなくてもいいです。**\n→ Hôm nay không cần đến trường đâu.\n\n' +
          '✅ **この漢字は おぼえなくてもいいです。**\n→ Không cần nhớ chữ kanji này.\n\n' +
          '✅ **すきじゃないものは たべなくてもいいですよ。**\n→ Không thích thì không cần ăn đâu nè.',
      },
      {
        title: '4. Mẫu hội thoại đời thường',
        explanation:
          '👩‍🎓: このしゅくだい、ださなくてもいいですか？\n👨‍🏫: はい、ださなくてもいいですよ。\n→ Em không cần nộp bài tập này đâu.\n\n' +
          '☕: コーヒーにミルクいれる？\n😊: いれなくてもいいよ。ブラックがすきだから。\n→ Không cần cho sữa đâu, mình thích cà phê đen.',
      },
      {
        title: '5. Ghi nhớ nhanh!',
        explanation:
          '🧠 Mẫu câu này cực kỳ hữu ích khi bạn muốn nói **“Không cần thiết đâu”** theo cách nhẹ nhàng và lịch sự.\n\n📌 Hãy dùng khi muốn từ chối một cách tinh tế hoặc khi khuyên ai đó không cần quá lo lắng hay gắng sức.',
      },
    ],
  },
  {
    id: 'ta_koto_ga_aru',
    title: '～たことがある',
    sections: [
      {
        title: '1. ～たことがある (Diễn tả kinh nghiệm đã từng)',
        explanation:
          'Cấu trúc ～たことがある được dùng để **nói về kinh nghiệm bản thân** – những việc mà người nói đã từng trải qua trong quá khứ, dù chỉ một lần.\n\n' +
          '📌 Cấu trúc: [Động từ thể た] + ことがある\n\n' +
          '📝 Ví dụ:\n' +
          '・わたしは にほんへ いったことがある。→ Tôi đã từng đi Nhật rồi。\n' +
          '・すしを たべたことがあります。→ Tôi từng ăn sushi。\n' +
          '・かれに あったことがある。→ Tôi đã gặp người đó trước đây。',
        examples: [],
      },
      {
        title: '2. ～たことがない / ～たことがありません (Phủ định – chưa từng)',
        explanation:
          'Để nói rằng **chưa bao giờ làm điều gì đó**, bạn dùng mẫu phủ định ～たことがない hoặc cách lịch sự hơn là ～たことがありません。\n\n' +
          '📌 Cấu trúc: [Động từ thể た] + ことがない / ことがありません\n\n' +
          '📝 Ví dụ:\n' +
          '・わたしは にほんへ いったことがない。→ Tôi chưa từng đi Nhật。\n' +
          '・すしを たべたことがありません。→ Tôi chưa từng ăn sushi。\n' +
          '・かれに あったことがない。→ Tôi chưa gặp người đó bao giờ。',
        examples: [],
      },
      {
        title: '3. Ghi nhớ nhanh',
        explanation:
          '🔹 **～たことがある** → Đã từng làm gì (ít nhất một lần trong đời)\n' +
          '🔹 **～たことがない / ～たことがありません** → Chưa từng trải nghiệm điều đó\n\n' +
          '💡 Mẫu câu này thường được dùng khi kể chuyện, nói về trải nghiệm du lịch, món ăn, con người hoặc những điều bạn đã làm trong quá khứ。',
        examples: [],
      },
    ],
  },
  {
    id: 'tari_tari_suru',
    title: '～たり、～たりする',
    sections: [
      {
        title: '1. Giới thiệu mẫu câu ～たり、～たりする',
        explanation:
          'Mẫu câu **～たり、～たりする** dùng để **liệt kê một vài hành động tiêu biểu** trong nhiều hành động xảy ra, thường mang ý nghĩa "nào là... rồi nào là...".\n\n' +
          '👉 **Cấu trúc:**\n[Chủ ngữ] は/が + [V-た] り、[V-た] り + します。',
      },
      {
        title: '2. Cách chia động từ',
        explanation:
          'Các động từ trong mẫu này **phải chia về thể た**, sau đó thêm 「り」:\n\n' +
          '・たべる → たべ**た** → たべたり\n' +
          '・ねる → ね**た** → ねたり\n' +
          '・あそぶ → あそ**んだ** → あそんだり',
      },
      {
        title: '3. Ví dụ liệt kê hành động tiêu biểu',
        explanation:
          '🔹 **わたしは なつやすみに テニスをしたり およいだりしました。**\n→ Nghỉ hè tôi nào là chơi tennis, nào là đi bơi v.v\n\n' +
          '🔹 **ともだちと えいがをみたり、プールにいったりします。**\n→ Tôi thường đi xem phim hoặc đi bể bơi với bạn bè.',
      },
      {
        title: '4. Dùng với hành động lặp đi lặp lại, trái nghĩa',
        explanation:
          'Mẫu này cũng được dùng để mô tả trạng thái **hành động đối lập xảy ra luân phiên**, lặp đi lặp lại:\n\n' +
          '🔹 **あめが ふったり、やんだりしています。**\n→ Trời cứ mưa rồi lại tạnh.\n\n' +
          '🔹 **東京と大阪を いったりきたりします。**\n→ Tôi cứ đi đi về về giữa Tokyo và Osaka.\n\n' +
          '🔹 **やすみのひに たべたり、ねたり しています。**\n→ Ngày nghỉ thì tôi cứ ăn rồi ngủ, ăn rồi ngủ.',
      },
      {
        title: '5. Lưu ý nhỏ',
        explanation:
          '✅ Mẫu này thường đi kèm các từ như:\n・ときどき（thỉnh thoảng）\n・よく（thường xuyên）\n・いろいろ（nhiều thứ）\n\n✅ Thường dùng ở **thì quá khứ** hoặc **thì tiếp diễn hiện tại** để mô tả hành động đang/đã diễn ra theo kiểu không đầy đủ.',
      },
    ],
  },
  {
    id: 'te_form',
    title: 'Các cấu trúc sử dụng thể て',
    sections: [
      {
        title: '1. Giới thiệu thể て (て形)',
        explanation:
          'Thể て là một dạng biến đổi đặc biệt của động từ, được dùng trong rất nhiều mẫu câu tiếng Nhật như yêu cầu, nối câu, xin phép, trạng thái tiếp diễn,... Đây là một phần cực kỳ quan trọng khi học tiếng Nhật giao tiếp.',
        examples: [],
      },
      {
        title: '2. Cách chia động từ sang thể て',
        explanation:
          'Cách chia thể て tuỳ thuộc vào từng nhóm động từ:\n\n' +
          '🔹 **Nhóm 1:**\n' +
          '1. Động từ kết thúc bằng **う / つ / る** → chuyển thành **って**\n' +
          'Ví dụ: あう → あって, たつ → たって, とる → とって\n\n' +
          '2. Kết thúc bằng **む / ぶ / ぬ** → chuyển thành **んで**\n' +
          'Ví dụ: よむ → よんで, あそぶ → あそんで, しぬ → しんで\n\n' +
          '3. Kết thúc bằng **く** → chuyển thành **いて**\n' +
          'Ví dụ: かく → かいて\n' +
          '⚠️ Ngoại lệ: いく → いって\n\n' +
          '4. Kết thúc bằng **ぐ** → chuyển thành **いで**\n' +
          'Ví dụ: およぐ → およいで\n\n' +
          '5. Kết thúc bằng **す** → chuyển thành **して**\n' +
          'Ví dụ: はなす → はなして\n\n' +
          '🔹 **Nhóm 2:**\n' +
          '→ Bỏ **る**, thêm **て**\n' +
          'Ví dụ: たべる → たべて, みる → みて\n\n' +
          '🔹 **Nhóm 3 (bất quy tắc):**\n' +
          '・する → して\n' +
          '・くる → きて',
        examples: [],
      },
      {
        title: '3. Các cấu trúc phổ biến sử dụng thể て',
        explanation:
          '✅ **～てください**: Dùng để yêu cầu lịch sự ai đó làm gì.\n' +
          'Ví dụ: ここに名前をかいてください。→ Hãy viết tên vào đây。\n\n' +
          '✅ **～てもいいです**: Dùng để xin phép.\n' +
          'Ví dụ: トイレにいってもいいですか？→ Em có thể đi vệ sinh được không？\n\n' +
          '✅ **～てはいけません**: Cấm đoán, không được phép.\n' +
          'Ví dụ: ここでたばこをすってはいけません。→ Không được hút thuốc ở đây。\n\n' +
          '✅ **～ている**: Diễn tả trạng thái tiếp diễn hoặc thói quen.\n' +
          'Ví dụ: いま、テレビをみています。→ Bây giờ tôi đang xem TV。\n\n' +
          '✅ **～てから**: Sau khi làm gì đó thì...\n' +
          'Ví dụ: ごはんをたべてから、べんきょうします。→ Sau khi ăn cơm, tôi học bài。',
        examples: [],
      },
    ],
  },
  {
    id: 'verb_masu',
    title: 'Động từ thể ます',
    sections: [
      {
        title: '1. Thể ます là gì?',
        explanation:
          'Thể ます (丁寧語 - ていねいご) là cách nói lịch sự trong tiếng Nhật, thường dùng trong giao tiếp hằng ngày, đặc biệt với người lớn tuổi, cấp trên hoặc trong môi trường trang trọng.\n\n' +
          'Đây là nền tảng để học các thể kính ngữ cao cấp hơn trong tương lai.',
        examples: [],
      },
      {
        title: '2. Cách chia động từ sang thể ます',
        explanation:
          '🔹 **Nhóm 1:** Chuyển âm kết thúc ở hàng う → hàng い rồi thêm ます\n' +
          '・あう → あいます\n' +
          '・きく → ききます\n' +
          '・はなす → はなします\n' +
          '・たつ → たちます\n' +
          '・わかる → わかります\n\n' +
          '🔹 **Nhóm 2:** Bỏ る và thêm ます\n' +
          '・たべる → たべます\n' +
          '・みる → みます\n' +
          '・おしえる → おしえます\n\n' +
          '🔹 **Nhóm 3 (bất quy tắc):**\n' +
          '・する → します\n' +
          '・くる → きます',
        examples: [],
      },
      {
        title: '3. Thì hiện tại (khẳng định & phủ định)',
        explanation:
          '🔸 **Khẳng định**: ～ます\n' +
          '・わたしはケーキをたべます。→ Tôi ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなします。→ An nói chuyện với giáo viên\n\n' +
          '🔸 **Phủ định**: ～ません\n' +
          '・わたしはケーキをたべません。→ Tôi không ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなしません。→ An không trò chuyện với giáo viên',
        examples: [],
      },
      {
        title: '4. Thì quá khứ (khẳng định & phủ định)',
        explanation:
          '🔸 **Khẳng định**: ～ました\n' +
          '・わたしはケーキをたべました。→ Tôi đã ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなしました。→ An đã trò chuyện với cô giáo\n\n' +
          '🔸 **Phủ định**: ～ませんでした\n' +
          '・わたしはケーキをたべませんでした。→ Tôi đã không ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなしませんでした。→ An đã không nói chuyện với giáo viên',
        examples: [],
      },
    ],
  },
  {
    id: 'verb_n5',
    title: 'Động từ trong tiếng Nhật',
    sections: [
      {
        title: '1. Thể từ điển (辞書形 - じしょけい)',
        explanation: 'Là dạng nguyên thể của động từ, thường dùng trong từ điển.',
        examples: [],
      },
      {
        title: '2. Phân nhóm động từ',
        explanation:
          'Động từ trong tiếng Nhật được chia thành 3 nhóm chính:\n\n' +
          '🔹 **Nhóm 1 - Động từ đuôi う (u):**\n' +
          'Bao gồm các động từ kết thúc bằng âm う. Đây là nhóm lớn nhất, chiếm khoảng 70% số lượng động từ.\n' +
          'Ví dụ: あう (gặp), はなす (nói chuyện), きく (nghe/hỏi), のむ (uống)\n\n' +
          '🔹 **Nhóm 2 - Động từ đuôi る (ru):**\n' +
          'Bao gồm các động từ kết thúc bằng る. Nhóm này chiếm khoảng 30% số lượng động từ.\n' +
          'Ví dụ: たべる (ăn), みる (xem/nhìn), きる (mặc)\n\n' +
          '🔹 **Nhóm 3 - Động từ bất quy tắc:**\n' +
          'Chỉ có 2 động từ: する (làm) và くる (đến)',
        examples: [],
      },
      {
        title: '3. Một số lưu ý khi phân nhóm',
        explanation:
          'Không phải tất cả động từ kết thúc bằng る đều thuộc nhóm 2. Việc phân loại cần chú ý âm đứng trước:\n\n' +
          '🔸 **Nếu âm trước る là /a/, /u/, /i/ hoặc /o** → thường là **nhóm 1**:\n' +
          'Ví dụ: わかる (hiểu), つくる (chế tạo), しる (biết), のぼる (leo)\n\n' +
          '🔸 **Nếu âm trước る là /e/** → đa số là **nhóm 2**:\n' +
          'Ví dụ: たべる (ăn), あける (mở)\n\n' +
          '🔸 **Một số động từ kết thúc bằng “iru”** nhưng lại thuộc **nhóm 2**:\n' +
          'Ví dụ: おきる (thức dậy), あびる (tắm)\n\n' +
          '⚠️ **Ngoại lệ cần ghi nhớ:**\n' +
          'かえる (trở về) tuy kết thúc bằng "eru" nhưng lại thuộc nhóm 1',
        examples: [],
      },
      {
        title: '4. Thể phủ định (ない形)',
        explanation:
          'Trong tiếng Nhật, thể ない (thể phủ định) được dùng để nói rằng một hành động **không xảy ra**. Cách chia thể này sẽ khác nhau tuỳ theo từng nhóm động từ:\n\n' +
          '🔹 **Nhóm 1 (đuôi う):**\n' +
          '- Với những động từ có đuôi là う, đổi う thành わ rồi thêm ない.\n' +
          '  Ví dụ: あう → あわない (không gặp), いう → いわない (không nói)\n' +
          '- Với các động từ khác, hãy biến âm cuối sang hàng あ tương ứng rồi thêm ない.\n' +
          '  Ví dụ: はなす → はなさない (không trò chuyện), きく → きかない (không nghe)\n\n' +
          '🔹 **Nhóm 2 (đuôi る):**\n' +
          '- Loại bỏ る và thêm ない.\n' +
          '  Ví dụ: たべる → たべない (không ăn), おきる → おきない (không thức dậy)\n\n' +
          '🔹 **Nhóm 3 (bất quy tắc):**\n' +
          '- する → しない (không làm)\n' +
          '- くる → こない (không đến)\n\n' +
          '🔸 **Trường hợp đặc biệt:**\n' +
          '- Động từ ある (có) sẽ chuyển thành ない (không có)',
        examples: [],
      },
    ],
  },
  {
    id: 'verb_ta_form',
    title: 'Động từ thì quá khứ – Thể た',
    sections: [
      {
        title: '1. Giới thiệu thể た (た形)',
        explanation:
          'Thể た được sử dụng để biểu thị hành động hoặc sự việc đã xảy ra trong quá khứ. Đây là một trong những dạng chia cơ bản và thường gặp trong hội thoại tiếng Nhật.\n\n' +
          'Ví dụ:\n' +
          '・きのう、ラーメンをたべた。→ Hôm qua tôi đã ăn mì ramen。\n' +
          '・リンちゃんはこうえんであそんだ。→ Bé Linh đã chơi ở công viên。\n' +
          '・しゅくだいをした。→ Tôi đã làm bài tập。',
        examples: [],
      },
      {
        title: '2. Cách chia thể た',
        explanation:
          'Việc chia động từ sang thể た tùy thuộc vào từng nhóm động từ:\n\n' +
          '🔹 **Nhóm 1 - Động từ đuôi う:**\n' +
          '1. Đuôi **す** → chuyển thành **した**\n' +
          'Ví dụ: はなす → はなした (đã nói chuyện)\n\n' +
          '2. Đuôi **く** → chuyển thành **いた**\n' +
          'Ví dụ: かく → かいた (đã viết)\n' +
          '⚠️ Ngoại lệ: いく → いった (đã đi)\n\n' +
          '3. Đuôi **ぐ** → chuyển thành **いだ**\n' +
          'Ví dụ: およぐ → およいだ (đã bơi)\n\n' +
          '4. Đuôi **む / ぶ / ぬ** → chuyển thành **んだ**\n' +
          'Ví dụ: よむ → よんだ (đã đọc), あそぶ → あそんだ (đã chơi), しぬ → しんだ (đã chết)\n\n' +
          '5. Đuôi **う / つ / る** → chuyển thành **った**\n' +
          'Ví dụ: いう → いった (đã nói), たつ → たった (đã đứng), わかる → わかった (đã hiểu)\n\n' +
          '🔹 **Nhóm 2 - Động từ đuôi る:**\n' +
          '→ Bỏ **る**, thêm **た**\n' +
          'Ví dụ: たべる → たべた (đã ăn), みる → みた (đã xem), おきる → おきた (đã dậy)\n\n' +
          '🔹 **Nhóm 3 - Động từ bất quy tắc:**\n' +
          '・する → した (đã làm)\n' +
          '・くる → きた (đã đến)',
        examples: [],
      },
      {
        title: '3. Thể phủ định quá khứ (なかった形)',
        explanation:
          'Để nói rằng một hành động **đã không** xảy ra, ta sử dụng thể **なかった**.\n\n' +
          '✨ Cách chia thể này giống với chia thể ない, chỉ cần thay **ない** thành **なかった**.\n' +
          'Ví dụ:\n' +
          '・たべない → たべなかった (đã không ăn)\n' +
          '・あそばない → あそばなかった (đã không chơi)\n' +
          '・しない → しなかった (đã không làm)\n\n' +
          '📌 Nếu chưa nắm rõ thể ない, hãy ôn lại phần “Thể phủ định (ない形)”.\n\n' +
          'Ví dụ:\n' +
          '・きのう、ラーメンをたべなかった。→ Hôm qua tôi đã không ăn mì。\n' +
          '・リンちゃんはこうえんであそばなかった。→ Bé Linh đã không chơi ở công viên。\n' +
          '・しゅくだいをしなかった。→ Tôi đã không làm bài tập。',
        examples: [],
      },
    ],
  },
]

export default grammarN5
