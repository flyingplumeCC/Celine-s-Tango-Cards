const customWords = [
  {
    category: '社会',
    chinese: '宣传',
    japanese: '広報',
    kana: 'こうほう',
    example: '会社の広報を担当しています。',
    exampleChinese: '我负责公司的宣传。',
    accent: '0'
  },
  {
    category: '动词',
    chinese: '完成；实现',
    japanese: '果たす',
    kana: 'はたす',
    example: '彼は大切な役割を果たしました。',
    exampleChinese: '他完成了重要的职责。',
    accent: '2'
  },
  {
    category: '动词',
    chinese: '拒绝',
    japanese: '拒否',
    kana: 'きょひ',
    example: '彼はその提案を拒否しました。',
    exampleChinese: '他拒绝了那个提案。',
    accent: '1'
  },
  {
    category: '社会',
    chinese: '背景',
    japanese: '背景',
    kana: 'はいけい',
    example: '問題の背景を詳しく説明します。',
    exampleChinese: '详细说明问题的背景。',
    accent: '0'
  },
  {
    category: '身体',
    chinese: '身心',
    japanese: '心身',
    kana: 'しんしん',
    example: '心身の健康を大切にしています。',
    exampleChinese: '重视身心健康。',
    accent: '1'
  },
  {
    category: '生活',
    chinese: '密码',
    japanese: '暗証番号',
    kana: 'あんしょう ばんごう',
    example: '暗証番号を入力してください。',
    exampleChinese: '请输入密码。'
  },
  {
    category: '生活',
    chinese: '垃圾分类',
    japanese: 'ゴミの分別',
    kana: 'ごみの ぶんべつ',
    example: '日本ではゴミの分別が大切です。',
    exampleChinese: '在日本垃圾分类很重要。'
  },
  {
    category: '葡萄酒',
    chinese: '品鉴',
    japanese: 'テイスティング',
    kana: 'ていすてぃんぐ',
    example: 'ワインのテイスティングに参加しました。',
    exampleChinese: '参加了葡萄酒品鉴。'
  },
  {
    category: '葡萄酒',
    chinese: '酸味',
    japanese: '酸味',
    kana: 'さんみ',
    example: 'このワインは酸味がはっきりしています。',
    exampleChinese: '这款葡萄酒酸味很明显。'
  },
  {
    category: '葡萄酒',
    chinese: '单宁',
    japanese: 'タンニン',
    kana: 'たんにん',
    example: 'タンニンが強く、しっかりした味わいです。',
    exampleChinese: '单宁强，口感扎实。'
  },
  {
    category: '葡萄酒',
    chinese: '酒体',
    japanese: 'ボディ',
    kana: 'ぼでぃ',
    example: 'この赤ワインはボディが重めです。',
    exampleChinese: '这款红酒酒体偏重。'
  },
  {
    category: '葡萄酒',
    chinese: '余味',
    japanese: '余韻',
    kana: 'よいん',
    example: '長い余韻が楽しめます。',
    exampleChinese: '可以享受悠长的余味。'
  },
  {
    category: '葡萄酒',
    chinese: '橡木桶',
    japanese: 'オーク樽',
    kana: 'おーくだる',
    example: 'オーク樽で熟成したワインです。',
    exampleChinese: '这是用橡木桶熟成的葡萄酒。'
  },
  {
    category: '葡萄酒',
    chinese: '熟成',
    japanese: '熟成',
    kana: 'じゅくせい',
    example: 'このチーズは半年間熟成されています。',
    exampleChinese: '这种奶酪熟成了半年。',
    accent: '0'
  },
  {
    category: '葡萄酒',
    chinese: '矿物感',
    japanese: 'ミネラル感',
    kana: 'みねらるかん',
    example: 'この白ワインにはミネラル感があります。',
    exampleChinese: '这款白葡萄酒有矿物感。'
  },
  {
    category: '表达',
    chinese: '越来越',
    japanese: 'ますます',
    kana: 'ますます',
    example: '日本語の勉強がますます楽しくなりました。',
    exampleChinese: '日语学习变得越来越有趣了。'
  },
  {
    category: '表达',
    chinese: '无论多么……也',
    japanese: 'いくら〜ても',
    kana: 'いくら ても',
    example: 'いくら説明しても、彼は納得しません。',
    exampleChinese: '无论怎么解释，他也不接受。'
  },
  {
    category: '表达',
    chinese: '虽说如此',
    japanese: 'とはいえ',
    kana: 'とはいえ',
    example: '忙しいとはいえ、休む時間も必要です。',
    exampleChinese: '虽说很忙，休息时间也是必要的。'
  },
  {
    category: '表达',
    chinese: '徒然；白白地',
    japanese: 'いたずらに',
    kana: 'いたずらに',
    example: 'いたずらに時間を過ごしてはいけません。',
    exampleChinese: '不能白白浪费时间。'
  },
  {
    category: '表达',
    chinese: '总会有办法',
    japanese: '何とかなる',
    kana: 'なんとかなる',
    example: '心配しすぎなくても、何とかなるでしょう。',
    exampleChinese: '不用太担心，总会有办法的。'
  },
  {
    category: '动词',
    chinese: '送达；传递',
    japanese: '届ける',
    kana: 'とどける',
    example: '荷物を明日までに届けます。',
    exampleChinese: '明天之前把包裹送到。'
  },
  {
    category: '表达',
    chinese: '比较；相对',
    japanese: '割と',
    kana: 'わりと',
    example: 'この店は割と静かです。',
    exampleChinese: '这家店比较安静。'
  },
  {
    category: '表达',
    chinese: '大多；通常',
    japanese: 'たいてい',
    kana: 'たいてい',
    example: '週末はたいてい家で勉強します。',
    exampleChinese: '周末通常在家学习。'
  },
  {
    category: '社会',
    chinese: '物价',
    japanese: '物価',
    kana: 'ぶっか',
    example: '最近、物価が上がっています。',
    exampleChinese: '最近物价在上涨。',
    accent: '0'
  },
  {
    category: '动词',
    chinese: '发挥',
    japanese: '発揮',
    kana: 'はっき',
    example: '彼は会議で能力を発揮しました。',
    exampleChinese: '他在会议中发挥了能力。',
    accent: '0'
  },
  {
    category: '生活',
    chinese: '输入',
    japanese: '入力',
    kana: 'にゅうりょく',
    example: '名前と住所を入力してください。',
    exampleChinese: '请输入姓名和地址。',
    accent: '0'
  },
  {
    category: '社会',
    chinese: '殖民地',
    japanese: '植民地',
    kana: 'しょくみんち',
    example: 'この地域は昔、植民地でした。',
    exampleChinese: '这个地区过去曾是殖民地。'
  },
  {
    category: '形容',
    chinese: '平稳；温和',
    japanese: '穏やか',
    kana: 'おだやか',
    example: '今日は風が穏やかです。',
    exampleChinese: '今天风很平静。'
  },
  {
    category: '动词',
    chinese: '商量；咨询',
    japanese: '相談',
    kana: 'そうだん',
    example: '困った時は先生に相談します。',
    exampleChinese: '遇到困难时向老师咨询。',
    accent: '0'
  },
  {
    category: '手续',
    chinese: '解除；取消',
    japanese: '解除',
    kana: 'かいじょ',
    example: '契約の解除について確認します。',
    exampleChinese: '确认合同解除相关事项。'
  },
  {
    category: '手续',
    chinese: '账户自动扣款',
    japanese: '口座振替',
    kana: 'こうざ ふりかえ',
    example: '家賃は口座振替で支払います。',
    exampleChinese: '房租通过账户自动扣款支付。'
  },
  {
    category: '手续',
    chinese: '开通',
    japanese: '開通',
    kana: 'かいつう',
    example: 'インターネットは明日開通します。',
    exampleChinese: '网络明天开通。'
  },
  {
    category: '生活',
    chinese: '送货上门',
    japanese: '宅配',
    kana: 'たくはい',
    example: '宅配で荷物を受け取りました。',
    exampleChinese: '通过送货上门收到了包裹。',
    accent: '0'
  },
  {
    category: '生活',
    chinese: '邮政；邮件',
    japanese: '郵便',
    kana: 'ゆうびん',
    example: '郵便で書類を送りました。',
    exampleChinese: '通过邮寄发送了文件。',
    accent: '0'
  },
  {
    category: '办公',
    chinese: '备品',
    japanese: '備品',
    kana: 'びひん',
    example: '会議室の備品を確認します。',
    exampleChinese: '确认会议室的备品。',
    accent: '0'
  },
  {
    category: '生活',
    chinese: '设施',
    japanese: '施設',
    kana: 'しせつ',
    example: 'この施設は誰でも利用できます。',
    exampleChinese: '这个设施任何人都可以使用。',
    accent: '1'
  },
  {
    category: '手续',
    chinese: '申请',
    japanese: '申請',
    kana: 'しんせい',
    example: 'ビザの申請をしました。',
    exampleChinese: '申请了签证。',
    accent: '0'
  },
  {
    category: '手续',
    chinese: '许可审批',
    japanese: '許認可',
    kana: 'きょにんか',
    example: '事業を始めるには許認可が必要です。',
    exampleChinese: '开展业务需要许可审批。'
  },
  {
    category: '抽象',
    chinese: '视野',
    japanese: '視野',
    kana: 'しや',
    example: '海外経験で視野が広がりました。',
    exampleChinese: '海外经历开阔了视野。',
    accent: '1'
  },
  {
    category: '身体',
    chinese: '疲劳',
    japanese: '疲労',
    kana: 'ひろう',
    example: '長時間の作業で疲労がたまりました。',
    exampleChinese: '长时间工作积累了疲劳。',
    accent: '0'
  },
  {
    category: '工作',
    chinese: '工钱；加工费',
    japanese: '工賃',
    kana: 'こうちん',
    example: '修理の工賃はいくらですか。',
    exampleChinese: '维修工钱是多少？',
    accent: '0'
  },
  {
    category: '工作',
    chinese: '作业所；工作场所',
    japanese: '作業所',
    kana: 'さぎょうしょ',
    example: '作業所で備品を管理しています。',
    exampleChinese: '在作业所管理备品。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '想办法；设法',
    japanese: 'なんとか',
    kana: 'なんとか',
    example: '締め切りまでになんとか終わらせます。',
    exampleChinese: '我会想办法在截止日期前完成。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '契机；机会',
    japanese: 'きっかけ',
    kana: 'きっかけ',
    example: '旅行が日本語を始めるきっかけでした。',
    exampleChinese: '旅行是我开始学日语的契机。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '迟早；早晚',
    japanese: 'いずれ',
    kana: 'いずれ',
    example: 'いずれ日本で働きたいです。',
    exampleChinese: '早晚想在日本工作。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '难得；特意',
    japanese: 'せっかく',
    kana: 'せっかく',
    example: 'せっかく来たので、少し見学しましょう。',
    exampleChinese: '难得来了，就稍微参观一下吧。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '也就是说',
    japanese: 'つまり',
    kana: 'つまり',
    example: 'つまり、計画を変更する必要があります。',
    exampleChinese: '也就是说，需要改变计划。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '即使',
    japanese: 'たとえ',
    kana: 'たとえ',
    example: 'たとえ忙しくても、連絡してください。',
    exampleChinese: '即使很忙，也请联系我。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '尽管；虽然',
    japanese: 'にもかかわらず',
    kana: 'にもかかわらず',
    example: '雨にもかかわらず、多くの人が来ました。',
    exampleChinese: '尽管下雨，还是来了很多人。'
  },
  {
    category: '表达',
    chinese: '不论；无论',
    japanese: 'に関わらず',
    kana: 'にかかわらず',
    example: '年齢に関わらず、誰でも参加できます。',
    exampleChinese: '不论年龄，谁都可以参加。'
  },
  {
    category: '表达',
    chinese: '重新；再次郑重地',
    japanese: 'あらためて',
    kana: 'あらためて',
    example: 'あらためてご連絡いたします。',
    exampleChinese: '我会再次正式联系您。'
  },
  {
    category: '表达',
    chinese: '暂且；一旦',
    japanese: 'いったん',
    kana: 'いったん',
    example: 'いったん家に帰ってから出かけます。',
    exampleChinese: '先回一趟家再出门。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '不如说；反而',
    japanese: 'むしろ',
    kana: 'むしろ',
    example: 'これは問題ではなく、むしろチャンスです。',
    exampleChinese: '这不是问题，反而是机会。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '看样子；似乎',
    japanese: 'どうやら',
    kana: 'どうやら',
    example: 'どうやら電車が遅れているようです。',
    exampleChinese: '看样子电车好像晚点了。'
  },
  {
    category: '表达',
    chinese: '恐怕；大概',
    japanese: 'おそらく',
    kana: 'おそらく',
    example: 'おそらく明日は雨でしょう。',
    exampleChinese: '明天恐怕会下雨吧。',
    accent: '2'
  },
  {
    category: '表达',
    chinese: '特意；专程',
    japanese: 'わざわざ',
    kana: 'わざわざ',
    example: 'わざわざ来てくれてありがとうございます。',
    exampleChinese: '谢谢你特意过来。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '敢于；特意',
    japanese: 'あえて',
    kana: 'あえて',
    example: 'あえて難しい道を選びました。',
    exampleChinese: '我特意选择了困难的道路。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '不愧是',
    japanese: 'さすが',
    kana: 'さすが',
    example: 'さすがプロですね。',
    exampleChinese: '不愧是专业人士。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '不小心',
    japanese: 'うっかり',
    kana: 'うっかり',
    example: 'うっかり財布を忘れました。',
    exampleChinese: '不小心忘带钱包了。',
    accent: '3'
  },
  {
    category: '表达',
    chinese: '不由得；一不小心',
    japanese: 'つい',
    kana: 'つい',
    example: 'おいしくて、つい食べ過ぎました。',
    exampleChinese: '太好吃了，不由得吃多了。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '终于；好不容易',
    japanese: 'ようやく',
    kana: 'ようやく',
    example: 'ようやく問題が解決しました。',
    exampleChinese: '问题终于解决了。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '始终；到底',
    japanese: 'あくまで',
    kana: 'あくまで',
    example: 'これはあくまで私の意見です。',
    exampleChinese: '这始终只是我的意见。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '所谓的',
    japanese: 'いわゆる',
    kana: 'いわゆる',
    example: 'これはいわゆる成功例です。',
    exampleChinese: '这就是所谓的成功案例。',
    accent: '3'
  },
  {
    category: '表达',
    chinese: '相当；怎么也不',
    japanese: 'なかなか',
    kana: 'なかなか',
    example: 'この問題はなかなか難しいです。',
    exampleChinese: '这个问题相当难。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '逐渐',
    japanese: '次第に',
    kana: 'しだいに',
    example: '次第に日本語に慣れてきました。',
    exampleChinese: '渐渐习惯日语了。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '反过来',
    japanese: '逆に',
    kana: 'ぎゃくに',
    example: '逆に質問してもいいですか。',
    exampleChinese: '我可以反过来问个问题吗？',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '结果上',
    japanese: '結果的に',
    kana: 'けっかてきに',
    example: '結果的に計画は成功しました。',
    exampleChinese: '结果上计划成功了。'
  },
  {
    category: '表达',
    chinese: '原本；本来',
    japanese: '本来',
    kana: 'ほんらい',
    example: '本来なら今日は休みです。',
    exampleChinese: '按理说今天本来是休息日。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '面向；适合',
    japanese: '向け',
    kana: 'むけ',
    example: 'これは初心者向けの教材です。',
    exampleChinese: '这是面向初学者的教材。'
  },
  {
    category: '动词',
    chinese: '相关；涉及',
    japanese: '関わる',
    kana: 'かかわる',
    example: '多くの人がこの計画に関わっています。',
    exampleChinese: '很多人参与了这个计划。'
  },
  {
    category: '动词',
    chinese: '继续',
    japanese: '続ける',
    kana: 'つづける',
    example: '毎日少しずつ勉強を続けます。',
    exampleChinese: '每天一点点继续学习。'
  },
  {
    category: '形容',
    chinese: '复杂；麻烦',
    japanese: 'ややこしい',
    kana: 'ややこしい',
    example: 'この手続きは少しややこしいです。',
    exampleChinese: '这个手续有点复杂。'
  },
  {
    category: '表达',
    chinese: '轻松地；随意地',
    japanese: '気軽に',
    kana: 'きがるに',
    example: '分からないことがあれば、気軽に聞いてください。',
    exampleChinese: '有不懂的地方，请随时问。'
  },
  {
    category: '気表达',
    chinese: '注意到；察觉',
    japanese: '気づく',
    kana: 'きづく',
    example: '間違いに気づいて、すぐ直しました。',
    exampleChinese: '注意到错误后，马上改正了。',
    accent: '2'
  },
  {
    category: '気表达',
    chinese: '在意；感兴趣',
    japanese: '気になる',
    kana: 'きになる',
    example: '新しい店が少し気になります。',
    exampleChinese: '有点在意那家新店。'
  },
  {
    category: '気表达',
    chinese: '喜欢；中意',
    japanese: '気に入る',
    kana: 'きにいる',
    example: 'このデザインがとても気に入りました。',
    exampleChinese: '我很喜欢这个设计。'
  },
  {
    category: '気表达',
    chinese: '觉得；感觉',
    japanese: '気がする',
    kana: 'きがする',
    example: '今日はいいことがありそうな気がします。',
    exampleChinese: '感觉今天会有好事发生。'
  },
  {
    category: '気表达',
    chinese: '注意；小心',
    japanese: '気をつける',
    kana: 'きをつける',
    example: '帰り道は車に気をつけてください。',
    exampleChinese: '回去路上请注意车辆。'
  },
  {
    category: '気表达',
    chinese: '介意；放在心上',
    japanese: '気にする',
    kana: 'きにする',
    example: '小さな失敗をあまり気にしないでください。',
    exampleChinese: '不要太介意小小的失败。'
  },
  {
    category: '気表达',
    chinese: '干劲；气势',
    japanese: '気合い',
    kana: 'きあい',
    example: '試験の前に気合いを入れました。',
    exampleChinese: '考试前鼓足了干劲。',
    accent: '0'
  },
  {
    category: '动词',
    chinese: '被包含；包含在内',
    japanese: '含まれ',
    kana: 'ふくまれ',
    example: '料金には朝食代が含まれています。',
    exampleChinese: '费用里包含早餐费。'
  },
  {
    category: '商务',
    chinese: '发送；寄送',
    japanese: '送付します',
    kana: 'そうふします',
    example: '資料をメールで送付します。',
    exampleChinese: '我会通过邮件发送资料。'
  },
  {
    category: '商务',
    chinese: '进行结算',
    japanese: '決算を行います',
    kana: 'けっさんを おこないます',
    example: '年度末に決算を行います。',
    exampleChinese: '年末进行结算。'
  },
  {
    category: '动词',
    chinese: '得到；获得',
    japanese: '得る',
    kana: 'える',
    example: '経験から多くの知識を得ました。',
    exampleChinese: '从经验中获得了很多知识。',
    accent: '1'
  },
  {
    category: '心理',
    chinese: '挫折',
    japanese: '挫折',
    kana: 'ざせつ',
    example: '一度の挫折で諦めないでください。',
    exampleChinese: '不要因为一次挫折就放弃。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '一朝一夕；短时间内',
    japanese: '一朝一夕',
    kana: 'いっちょういっせき',
    example: '語学力は一朝一夕には身につきません。',
    exampleChinese: '语言能力不是一朝一夕就能掌握的。'
  },
  {
    category: '学校',
    chinese: '放学后',
    japanese: '放課後',
    kana: 'ほうかご',
    example: '放課後に図書館で勉強します。',
    exampleChinese: '放学后在图书馆学习。',
    accent: '0'
  },
  {
    category: '学校',
    chinese: '放学后留校',
    japanese: '居残り',
    kana: 'いのこり',
    example: '宿題が終わらず、居残りになりました。',
    exampleChinese: '作业没完成，所以被留下来了。',
    accent: '0'
  },
  {
    category: '感觉',
    chinese: '迹象；气息；感觉',
    japanese: '気配',
    kana: 'けはい',
    example: '部屋の外に人の気配がしました。',
    exampleChinese: '感觉房间外有人。',
    accent: '1'
  },
  {
    category: '学习',
    chinese: '掌握；习得',
    japanese: '習得',
    kana: 'しゅうとく',
    example: '自然な表現を習得したいです。',
    exampleChinese: '想掌握自然的表达。',
    accent: '0'
  },
  {
    category: '关系',
    chinese: '相性；合不合',
    japanese: '相性',
    kana: 'あいしょう',
    example: 'この勉強法は私と相性がいいです。',
    exampleChinese: '这个学习方法和我很合。',
    accent: '3'
  },
  {
    category: '学习',
    chinese: '效率',
    japanese: '効率',
    kana: 'こうりつ',
    example: '効率よく単語を覚えたいです。',
    exampleChinese: '想高效率地背单词。',
    accent: '0'
  },
  {
    category: '形容',
    chinese: '高贵',
    japanese: '高貴',
    kana: 'こうき',
    example: '高貴な雰囲気のある人です。',
    exampleChinese: '是一个有高贵气质的人。',
    accent: '1'
  },
  {
    category: '形容',
    chinese: '优雅；高级',
    japanese: '上品',
    kana: 'じょうひん',
    example: '上品なデザインのバッグです。',
    exampleChinese: '这是设计很优雅的包。',
    accent: '3'
  },
  {
    category: '形容',
    chinese: '气质；品格',
    japanese: '気品',
    kana: 'きひん',
    example: '彼女の話し方には気品があります。',
    exampleChinese: '她的说话方式很有气质。',
    accent: '0'
  },
  {
    category: '动词',
    chinese: '能描绘；能画出',
    japanese: '描ける',
    kana: 'えがける',
    example: '頭の中で完成図を描けます。',
    exampleChinese: '能在脑海里描绘出完成图。',
    accent: '2'
  },
  {
    category: '学习',
    chinese: '记忆',
    japanese: '記憶',
    kana: 'きおく',
    example: '新しい単語を記憶に残したいです。',
    exampleChinese: '想把新单词留在记忆里。',
    accent: '0'
  },
  {
    category: '学习',
    chinese: '系统；体系',
    japanese: '系統',
    kana: 'けいとう',
    example: '単語を系統ごとに整理します。',
    exampleChinese: '按系统分类整理单词。',
    accent: '0'
  },
  {
    category: '语言',
    chinese: '方言',
    japanese: '方言',
    kana: 'ほうげん',
    example: '地域によって方言が違います。',
    exampleChinese: '不同地区方言不同。',
    accent: '3'
  },
  {
    category: '生活',
    chinese: '负担',
    japanese: '負担',
    kana: 'ふたん',
    example: '費用の負担が少し大きいです。',
    exampleChinese: '费用负担有点大。',
    accent: '0'
  },
  {
    category: '学习',
    chinese: '语言能力；词汇能力',
    japanese: '語力',
    kana: 'ごりょく',
    example: '毎日の練習で語力を伸ばします。',
    exampleChinese: '通过每天练习提升语言能力。',
    accent: '1'
  },
  {
    category: '表达',
    chinese: '乍一看；初看',
    japanese: '一見',
    kana: 'いっけん',
    example: '一見簡単そうですが、実は難しいです。',
    exampleChinese: '乍一看好像简单，其实很难。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '不得已；无可奈何',
    japanese: 'やむを得ない',
    kana: 'やむをえない',
    example: 'やむを得ない事情で予定を変更しました。',
    exampleChinese: '因为不得已的原因更改了计划。'
  },
  {
    category: '表达',
    chinese: '每……；按……',
    japanese: 'ごとに',
    kana: 'ごとに',
    example: '章ごとに内容を整理します。',
    exampleChinese: '按章节整理内容。'
  },
  {
    category: '思考',
    chinese: '当成自己的事',
    japanese: '自分事',
    kana: 'じぶんごと',
    example: 'この問題を自分事として考えます。',
    exampleChinese: '把这个问题当成自己的事来思考。'
  },
  {
    category: '商务',
    chinese: '反映；体现',
    japanese: '反映',
    kana: 'はんえい',
    example: 'お客様の意見を資料に反映しました。',
    exampleChinese: '把客户意见反映到了资料里。',
    accent: '0'
  },
  {
    category: '系统',
    chinese: '故障；问题；异常',
    japanese: '不具合',
    kana: 'ふぐあい',
    example: 'システムに不具合が発生しました。',
    exampleChinese: '系统发生了异常。',
    accent: '2'
  },
  {
    category: '敬语',
    chinese: '没关系；可以',
    japanese: '構いません',
    kana: 'かまいません',
    example: '明日のご提出でも構いません。',
    exampleChinese: '明天提交也没关系。'
  },
  {
    category: '动词',
    chinese: '进展顺利；效率高',
    japanese: '捗る',
    kana: 'はかどる',
    example: '静かな場所だと仕事が捗ります。',
    exampleChinese: '在安静的地方工作更顺利。',
    accent: '3'
  },
  {
    category: '形容',
    chinese: '不成熟；不熟练',
    japanese: '未熟',
    kana: 'みじゅく',
    example: 'まだ未熟ですが、少しずつ成長したいです。',
    exampleChinese: '虽然还不成熟，但想一点点成长。',
    accent: '0'
  },
  {
    category: '动词',
    chinese: '构建；建立',
    japanese: '構築',
    kana: 'こうちく',
    example: '新しい仕組みを構築しています。',
    exampleChinese: '正在构建新的机制。',
    accent: '0'
  },
  {
    category: '商务',
    chinese: '处理',
    japanese: '処理',
    kana: 'しょり',
    example: '本日中に申請を処理します。',
    exampleChinese: '今天之内处理申请。',
    accent: '1'
  },
  {
    category: '思考',
    chinese: '抽象',
    japanese: '抽象',
    kana: 'ちゅうしょう',
    example: '抽象的な考えを具体例で説明します。',
    exampleChinese: '用具体例子说明抽象的想法。',
    accent: '0'
  },
  {
    category: '思考',
    chinese: '思考',
    japanese: '思考',
    kana: 'しこう',
    example: '論理的な思考を身につけたいです。',
    exampleChinese: '想掌握逻辑思考能力。',
    accent: '0'
  },
  {
    category: '时间',
    chinese: '过去',
    japanese: '過去',
    kana: 'かこ',
    example: '過去の経験から学びました。',
    exampleChinese: '从过去的经验中学习了。',
    accent: '1'
  },
  {
    category: '学习',
    chinese: '教训',
    japanese: '教訓',
    kana: 'きょうくん',
    example: '今回の失敗を教訓にします。',
    exampleChinese: '把这次失败作为教训。',
    accent: '0'
  },
  {
    category: '动词',
    chinese: '看漏；错过',
    japanese: '見逃す',
    kana: 'みのがす',
    example: '大事なポイントを見逃さないようにします。',
    exampleChinese: '注意不要漏掉重要点。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '正是；确实',
    japanese: 'まさに',
    kana: 'まさに',
    example: 'これはまさに私が探していた資料です。',
    exampleChinese: '这正是我一直在找的资料。',
    accent: '1'
  },
  {
    category: '动词',
    chinese: '形成',
    japanese: '形成',
    kana: 'けいせい',
    example: '良い習慣を形成することが大切です。',
    exampleChinese: '形成好习惯很重要。',
    accent: '0'
  },
  {
    category: '形容',
    chinese: '无限',
    japanese: '無限',
    kana: 'むげん',
    example: '可能性は無限にあります。',
    exampleChinese: '可能性是无限的。',
    accent: '0'
  },
  {
    category: '名词',
    chinese: '网',
    japanese: '網',
    kana: 'あみ',
    example: '魚を捕るために網を使います。',
    exampleChinese: '用网捕鱼。',
    accent: '2'
  },
  {
    category: '名词',
    chinese: '蜘蛛网',
    japanese: '蜘蛛の巣',
    kana: 'くものす',
    example: '窓の近くに蜘蛛の巣がありました。',
    exampleChinese: '窗户附近有蜘蛛网。'
  },
  {
    category: '学习',
    chinese: '分析',
    japanese: '分析',
    kana: 'ぶんせき',
    example: 'データを分析して原因を調べます。',
    exampleChinese: '分析数据来调查原因。',
    accent: '0'
  },
  {
    category: '表达',
    chinese: '强行；勉强地',
    japanese: '無理やり',
    kana: 'むりやり',
    example: '無理やり予定を入れないほうがいいです。',
    exampleChinese: '最好不要强行安排计划。'
  },
  {
    category: '动词',
    chinese: '被盯上；成为目标',
    japanese: '狙われる',
    kana: 'ねらわれる',
    example: '人気商品は転売業者に狙われやすいです。',
    exampleChinese: '热门商品容易被转卖商盯上。'
  }
]

if (typeof module !== 'undefined') {
  module.exports = customWords
}

if (typeof window !== 'undefined') {
  window.customWords = customWords
}
