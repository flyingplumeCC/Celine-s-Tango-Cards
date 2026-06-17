const businessWords = [
  {
    category: '职位',
    chinese: '代表取缔役',
    japanese: '代表取締役',
    kana: 'だいひょう とりしまりやく',
    example: '代表取締役が会議に出席します。',
    exampleChinese: '代表董事将出席会议。'
  },
  {
    category: '职位',
    chinese: '社长',
    japanese: '社長',
    kana: 'しゃちょう',
    example: '社長に報告しました。',
    exampleChinese: '已经向社长汇报了。'
  },
  {
    category: '职位',
    chinese: '部长',
    japanese: '部長',
    kana: 'ぶちょう',
    example: '部長の承認が必要です。',
    exampleChinese: '需要部长批准。'
  },
  {
    category: '职位',
    chinese: '课长',
    japanese: '課長',
    kana: 'かちょう',
    example: '課長に相談してください。',
    exampleChinese: '请和课长商量。'
  },
  {
    category: '职位',
    chinese: '员工',
    japanese: '社員',
    kana: 'しゃいん',
    example: '社員は百人います。',
    exampleChinese: '公司有一百名员工。'
  },
  {
    category: '商务往来',
    chinese: '客户',
    japanese: '顧客',
    kana: 'こきゃく',
    example: '顧客の要望を確認します。',
    exampleChinese: '确认客户的需求。'
  },
  {
    category: '商务往来',
    chinese: '合作方',
    japanese: '取引先',
    kana: 'とりひきさき',
    example: '取引先を訪問します。',
    exampleChinese: '拜访合作方。'
  },
  {
    category: '商务往来',
    chinese: '负责人',
    japanese: '担当者',
    kana: 'たんとうしゃ',
    example: '担当者に連絡します。',
    exampleChinese: '联系负责人。'
  },
  {
    category: '会议',
    chinese: '会议',
    japanese: '会議',
    kana: 'かいぎ',
    example: '午後三時から会議があります。',
    exampleChinese: '下午三点开始有会议。'
  },
  {
    category: '会议',
    chinese: '议题',
    japanese: '議題',
    kana: 'ぎだい',
    example: '今日の議題を確認しましょう。',
    exampleChinese: '确认一下今天的议题吧。'
  },
  {
    category: '会议',
    chinese: '资料',
    japanese: '資料',
    kana: 'しりょう',
    example: '会議の資料を準備します。',
    exampleChinese: '准备会议资料。'
  },
  {
    category: '会议',
    chinese: '演示',
    japanese: 'プレゼンテーション',
    kana: 'ぷれぜんてーしょん',
    example: '新商品のプレゼンテーションを行います。',
    exampleChinese: '进行新产品演示。'
  },
  {
    category: '文件',
    chinese: '报价单',
    japanese: '見積書',
    kana: 'みつもりしょ',
    example: '見積書をメールで送ります。',
    exampleChinese: '通过邮件发送报价单。'
  },
  {
    category: '文件',
    chinese: '账单',
    japanese: '請求書',
    kana: 'せいきゅうしょ',
    example: '請求書を発行してください。',
    exampleChinese: '请开具账单。'
  },
  {
    category: '文件',
    chinese: '合同',
    japanese: '契約書',
    kana: 'けいやくしょ',
    example: '契約書に署名します。',
    exampleChinese: '在合同上签字。'
  },
  {
    category: '交易',
    chinese: '下单',
    japanese: '発注',
    kana: 'はっちゅう',
    example: '商品を百個発注しました。',
    exampleChinese: '下单了一百件商品。'
  },
  {
    category: '交易',
    chinese: '接单',
    japanese: '受注',
    kana: 'じゅちゅう',
    example: '大きな案件を受注しました。',
    exampleChinese: '接到了一个大项目。'
  },
  {
    category: '财务',
    chinese: '流水',
    japanese: '売上',
    kana: 'うりあげ',
    example: '今月の売上を確認します。',
    exampleChinese: '确认本月流水。'
  },
  {
    category: '财务',
    chinese: '入金',
    japanese: '入金',
    kana: 'にゅうきん',
    example: '入金を確認しました。',
    exampleChinese: '已经确认入金。'
  },
  {
    category: '财务',
    chinese: '汇款',
    japanese: '送金',
    kana: 'そうきん',
    example: '今日中に送金します。',
    exampleChinese: '今天之内汇款。'
  },
  {
    category: '财务',
    chinese: '付款',
    japanese: '支払い',
    kana: 'しはらい',
    example: '支払い期限は月末です。',
    exampleChinese: '付款期限是月底。'
  },
  {
    category: '财务',
    chinese: '经费',
    japanese: '経費',
    kana: 'けいひ',
    example: '出張の経費を精算します。',
    exampleChinese: '报销出差经费。'
  },
  {
    category: '财务',
    chinese: '预算',
    japanese: '予算',
    kana: 'よさん',
    example: '来年度の予算を作成します。',
    exampleChinese: '编制下一年度的预算。'
  },
  {
    category: '财务',
    chinese: '利润',
    japanese: '利益',
    kana: 'りえき',
    example: '利益が増えました。',
    exampleChinese: '利润增加了。'
  },
  {
    category: '财务',
    chinese: '亏损',
    japanese: '損失',
    kana: 'そんしつ',
    example: '損失を最小限に抑えます。',
    exampleChinese: '将亏损控制在最低限度。'
  },
  {
    category: '商品管理',
    chinese: '交货',
    japanese: '納品',
    kana: 'のうひん',
    example: '商品を明日納品します。',
    exampleChinese: '明天交货。'
  },
  {
    category: '商品管理',
    chinese: '交货期',
    japanese: '納期',
    kana: 'のうき',
    example: '納期を一週間延ばしてください。',
    exampleChinese: '请把交货期延长一周。'
  },
  {
    category: '商品管理',
    chinese: '库存',
    japanese: '在庫',
    kana: 'ざいこ',
    example: '在庫を確認してください。',
    exampleChinese: '请确认库存。'
  },
  {
    category: '商品管理',
    chinese: '商品',
    japanese: '商品',
    kana: 'しょうひん',
    example: '新商品を紹介します。',
    exampleChinese: '介绍新商品。'
  },
  {
    category: '办公',
    chinese: '出差',
    japanese: '出張',
    kana: 'しゅっちょう',
    example: '来週、大阪へ出張します。',
    exampleChinese: '下周去大阪出差。'
  },
  {
    category: '办公',
    chinese: '预约会面',
    japanese: 'アポイント',
    kana: 'あぽいんと',
    example: '顧客とのアポイントを取りました。',
    exampleChinese: '预约了与客户会面。'
  },
  {
    category: '办公',
    chinese: '截止日期',
    japanese: '締め切り',
    kana: 'しめきり',
    example: '締め切りは今週の金曜日です。',
    exampleChinese: '截止日期是本周五。'
  },
  {
    category: '办公',
    chinese: '批准',
    japanese: '承認',
    kana: 'しょうにん',
    example: '上司の承認を得ました。',
    exampleChinese: '获得了上司批准。'
  },
  {
    category: '办公',
    chinese: '汇报',
    japanese: '報告',
    kana: 'ほうこく',
    example: '進捗を報告します。',
    exampleChinese: '汇报进展。'
  },
  {
    category: '办公',
    chinese: '商量',
    japanese: '相談',
    kana: 'そうだん',
    example: 'この件について相談したいです。',
    exampleChinese: '想商量一下这件事。'
  },
  {
    category: '办公',
    chinese: '确认',
    japanese: '確認',
    kana: 'かくにん',
    example: '内容をもう一度確認します。',
    exampleChinese: '再次确认内容。'
  },
  {
    category: '联络',
    chinese: '电子邮件',
    japanese: '電子メール',
    kana: 'でんしめーる',
    example: '電子メールでご連絡します。',
    exampleChinese: '通过电子邮件联系。'
  },
  {
    category: '联络',
    chinese: '电话',
    japanese: '電話',
    kana: 'でんわ',
    example: '後ほど電話をかけます。',
    exampleChinese: '稍后打电话。'
  },
  {
    category: '商务往来',
    chinese: '名片',
    japanese: '名刺',
    kana: 'めいし',
    example: '名刺を交換しましょう。',
    exampleChinese: '交换名片吧。'
  },
  {
    category: '办公',
    chinese: '接待处',
    japanese: '受付',
    kana: 'うけつけ',
    example: '受付でお名前をお伝えください。',
    exampleChinese: '请在接待处告知姓名。'
  },
  {
    category: '商务敬语',
    chinese: '承蒙关照',
    japanese: 'お世話になっております',
    kana: 'おせわに なっております',
    example: 'いつも大変お世話になっております。',
    exampleChinese: '一直以来承蒙您的关照。'
  },
  {
    category: '商务敬语',
    chinese: '请多关照',
    japanese: 'よろしくお願いいたします',
    kana: 'よろしく おねがいいたします',
    example: '今後ともよろしくお願いいたします。',
    exampleChinese: '今后也请多多关照。'
  },
  {
    category: '商务敬语',
    chinese: '劳驾您',
    japanese: '恐れ入ります',
    kana: 'おそれいります',
    example: '恐れ入りますが、ご確認ください。',
    exampleChinese: '劳驾您确认一下。'
  },
  {
    category: '商务敬语',
    chinese: '非常抱歉',
    japanese: '申し訳ございません',
    kana: 'もうしわけ ございません',
    example: 'ご連絡が遅くなり、申し訳ございません。',
    exampleChinese: '很抱歉联系晚了。'
  },
  {
    category: '商务敬语',
    chinese: '明白了',
    japanese: '承知いたしました',
    kana: 'しょうち いたしました',
    example: '変更内容について承知いたしました。',
    exampleChinese: '已了解变更内容。'
  },
  {
    category: '商务敬语',
    chinese: '已阅悉',
    japanese: '拝見しました',
    kana: 'はいけん しました',
    example: 'お送りいただいた資料を拝見しました。',
    exampleChinese: '已经拜读您发送的资料。'
  },
  {
    category: '商务敬语',
    chinese: '请稍候',
    japanese: '少々お待ちください',
    kana: 'しょうしょう おまちください',
    example: '確認いたしますので、少々お待ちください。',
    exampleChinese: '正在确认，请稍候。'
  },
  {
    category: '商务敬语',
    chinese: '请查收',
    japanese: 'ご査収ください',
    kana: 'ごさしゅう ください',
    example: '請求書を添付しましたので、ご査収ください。',
    exampleChinese: '已附上账单，请查收。'
  },
  {
    category: '商务敬语',
    chinese: '请谅解',
    japanese: 'ご了承ください',
    kana: 'ごりょうしょう ください',
    example: '納期が変更となりますので、ご了承ください。',
    exampleChinese: '交货期将发生变化，敬请谅解。'
  },
  {
    category: '商务敬语',
    chinese: '拜访',
    japanese: '伺う',
    kana: 'うかがう',
    example: '明日の午後、御社に伺います。',
    exampleChinese: '明天下午拜访贵公司。'
  },
  {
    category: '财务税务',
    chinese: '会计',
    japanese: '会計',
    kana: 'かいけい',
    example: '会計処理を確認します。',
    exampleChinese: '确认会计处理。'
  },
  {
    category: '财务税务',
    chinese: '决算',
    japanese: '決算',
    kana: 'けっさん',
    example: '年度末の決算を行います。',
    exampleChinese: '进行年末决算。'
  },
  {
    category: '财务税务',
    chinese: '资产负债表',
    japanese: '貸借対照表',
    kana: 'たいしゃく たいしょうひょう',
    example: '貸借対照表を確認してください。',
    exampleChinese: '请确认资产负债表。'
  },
  {
    category: '财务税务',
    chinese: '损益表',
    japanese: '損益計算書',
    kana: 'そんえき けいさんしょ',
    example: '損益計算書を作成します。',
    exampleChinese: '制作损益表。'
  },
  {
    category: '财务税务',
    chinese: '应收账款',
    japanese: '売掛金',
    kana: 'うりかけきん',
    example: '売掛金の残高を確認します。',
    exampleChinese: '确认应收账款余额。'
  },
  {
    category: '财务税务',
    chinese: '应付账款',
    japanese: '買掛金',
    kana: 'かいかけきん',
    example: '買掛金を期日までに支払います。',
    exampleChinese: '在期限前支付应付账款。'
  },
  {
    category: '财务税务',
    chinese: '现金流',
    japanese: 'キャッシュフロー',
    kana: 'きゃっしゅふろー',
    example: 'キャッシュフローを改善します。',
    exampleChinese: '改善现金流。'
  },
  {
    category: '财务税务',
    chinese: '消费税',
    japanese: '消費税',
    kana: 'しょうひぜい',
    example: '価格には消費税が含まれています。',
    exampleChinese: '价格中包含消费税。'
  },
  {
    category: '财务税务',
    chinese: '法人税',
    japanese: '法人税',
    kana: 'ほうじんぜい',
    example: '法人税を期限内に納付します。',
    exampleChinese: '在期限内缴纳法人税。'
  },
  {
    category: '财务税务',
    chinese: '预扣税',
    japanese: '源泉徴収税',
    kana: 'げんせん ちょうしゅうぜい',
    example: '源泉徴収税を計算します。',
    exampleChinese: '计算预扣税。'
  },
  {
    category: '财务税务',
    chinese: '报税',
    japanese: '税務申告',
    kana: 'ぜいむ しんこく',
    example: '税務申告の準備を進めます。',
    exampleChinese: '推进报税准备工作。'
  },
  {
    category: '财务税务',
    chinese: '免税',
    japanese: '免税',
    kana: 'めんぜい',
    example: 'この取引は免税の対象です。',
    exampleChinese: '这笔交易属于免税对象。'
  },
  {
    category: '跨境贸易',
    chinese: '进口',
    japanese: '輸入',
    kana: 'ゆにゅう',
    example: '海外から原材料を輸入します。',
    exampleChinese: '从海外进口原材料。'
  },
  {
    category: '跨境贸易',
    chinese: '出口',
    japanese: '輸出',
    kana: 'ゆしゅつ',
    example: '日本の商品を海外へ輸出します。',
    exampleChinese: '将日本商品出口到海外。'
  },
  {
    category: '跨境贸易',
    chinese: '报关',
    japanese: '通関',
    kana: 'つうかん',
    example: '貨物の通関手続きを行います。',
    exampleChinese: '办理货物报关手续。'
  },
  {
    category: '跨境贸易',
    chinese: '关税',
    japanese: '関税',
    kana: 'かんぜい',
    example: '輸入品には関税がかかります。',
    exampleChinese: '进口商品需要缴纳关税。'
  },
  {
    category: '跨境贸易',
    chinese: '发票',
    japanese: 'インボイス',
    kana: 'いんぼいす',
    example: '通関用のインボイスを作成します。',
    exampleChinese: '制作报关用发票。'
  },
  {
    category: '跨境贸易',
    chinese: '装箱单',
    japanese: '梱包明細書',
    kana: 'こんぽう めいさいしょ',
    example: '梱包明細書を貨物に添付します。',
    exampleChinese: '将装箱单附在货物上。'
  },
  {
    category: '跨境贸易',
    chinese: '提单',
    japanese: '船荷証券',
    kana: 'ふなに しょうけん',
    example: '船荷証券の原本を送付します。',
    exampleChinese: '寄送提单原件。'
  },
  {
    category: '跨境贸易',
    chinese: '货物',
    japanese: '貨物',
    kana: 'かもつ',
    example: '貨物は明日港に到着します。',
    exampleChinese: '货物明天抵达港口。'
  },
  {
    category: '跨境贸易',
    chinese: '国际运输',
    japanese: '国際輸送',
    kana: 'こくさい ゆそう',
    example: '国際輸送の費用を確認します。',
    exampleChinese: '确认国际运输费用。'
  },
  {
    category: '跨境贸易',
    chinese: '外汇',
    japanese: '外国為替',
    kana: 'がいこく かわせ',
    example: '外国為替の変動に注意します。',
    exampleChinese: '注意外汇波动。'
  },
  {
    category: '跨境贸易',
    chinese: '汇率',
    japanese: '為替レート',
    kana: 'かわせ れーと',
    example: '今日の為替レートを確認します。',
    exampleChinese: '确认今天的汇率。'
  },
  {
    category: '跨境贸易',
    chinese: '信用证',
    japanese: '信用状',
    kana: 'しんようじょう',
    example: '銀行が信用状を発行しました。',
    exampleChinese: '银行开具了信用证。'
  },
  {
    category: '合同委托',
    chinese: '委托',
    japanese: '委託',
    kana: 'いたく',
    example: '業務の一部を外部に委託します。',
    exampleChinese: '将部分业务委托给外部公司。'
  },
  {
    category: '合同委托',
    chinese: '受托',
    japanese: '受託',
    kana: 'じゅたく',
    example: 'システム開発を受託しました。',
    exampleChinese: '承接了系统开发委托。'
  },
  {
    category: '合同委托',
    chinese: '委托方',
    japanese: '委託者',
    kana: 'いたくしゃ',
    example: '委託者と条件を確認します。',
    exampleChinese: '与委托方确认条件。'
  },
  {
    category: '合同委托',
    chinese: '受托方',
    japanese: '受託者',
    kana: 'じゅたくしゃ',
    example: '受託者は進捗を報告します。',
    exampleChinese: '受托方汇报进展。'
  },
  {
    category: '合同委托',
    chinese: '保密协议',
    japanese: '秘密保持契約',
    kana: 'ひみつ ほじ けいやく',
    example: '秘密保持契約を締結します。',
    exampleChinese: '签订保密协议。'
  },
  {
    category: '合同委托',
    chinese: '手续费',
    japanese: '手数料',
    kana: 'てすうりょう',
    example: '海外送金には手数料がかかります。',
    exampleChinese: '海外汇款需要手续费。'
  }
]

if (typeof module !== 'undefined') {
  module.exports = businessWords
}

if (typeof window !== 'undefined') {
  window.businessWords = businessWords
}
