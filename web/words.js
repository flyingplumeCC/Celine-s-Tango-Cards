const words = [
  {
    category: '机场',
    chinese: '登机口',
    japanese: '搭乗口',
    kana: 'とうじょうぐち',
    example: '搭乗口はどこですか。',
    exampleChinese: '登机口在哪里？'
  },
  {
    category: '机场',
    chinese: '安检',
    japanese: '保安検査',
    kana: 'ほあんけんさ',
    example: '保安検査を受けます。',
    exampleChinese: '接受安检。'
  },
  {
    category: '航班',
    chinese: '延误',
    japanese: '遅延',
    kana: 'ちえん',
    example: '悪天候で飛行機が遅延しています。',
    exampleChinese: '飞机因天气恶劣而延误。',
    accent: '0'
  },
  {
    category: '航班',
    chinese: '取消',
    japanese: '欠航',
    kana: 'けっこう',
    example: '今日の便は欠航になりました。',
    exampleChinese: '今天的航班取消了。',
    accent: '0'
  },
  {
    category: '日常会话',
    chinese: '请再说一遍',
    japanese: 'もう一度お願いします',
    kana: 'もういちど おねがいします',
    example: 'すみません、もう一度お願いします。',
    exampleChinese: '不好意思，请再说一遍。'
  },
  {
    category: '机场',
    chinese: '国际航站楼',
    japanese: '国際線ターミナル',
    kana: 'こくさいせん たーみなる',
    example: '国際線ターミナルへ行ってください。',
    exampleChinese: '请去国际航站楼。'
  },
  {
    category: '机场',
    chinese: '值机柜台',
    japanese: 'チェックインカウンター',
    kana: 'ちぇっくいん かうんたー',
    example: 'チェックインカウンターは二階にあります。',
    exampleChinese: '值机柜台在二楼。'
  },
  {
    category: '机场',
    chinese: '托运行李',
    japanese: '預け荷物',
    kana: 'あずけにもつ',
    example: '預け荷物は一つです。',
    exampleChinese: '我有一件托运行李。'
  },
  {
    category: '机场',
    chinese: '随身行李',
    japanese: '機内持ち込み手荷物',
    kana: 'きないもちこみ てにもつ',
    example: 'これは機内持ち込み手荷物です。',
    exampleChinese: '这是随身行李。'
  },
  {
    category: '机场',
    chinese: '行李领取处',
    japanese: '手荷物受取所',
    kana: 'てにもつ うけとりじょ',
    example: '手荷物受取所はどこですか。',
    exampleChinese: '行李领取处在哪里？'
  },
  {
    category: '机场',
    chinese: '海关',
    japanese: '税関',
    kana: 'ぜいかん',
    example: '税関で荷物を確認されました。',
    exampleChinese: '行李在海关接受了检查。',
    accent: '0'
  },
  {
    category: '机场',
    chinese: '入境审查',
    japanese: '入国審査',
    kana: 'にゅうこくしんさ',
    example: '入国審査に時間がかかりました。',
    exampleChinese: '入境审查花了一些时间。'
  },
  {
    category: '航班',
    chinese: '登机牌',
    japanese: '搭乗券',
    kana: 'とうじょうけん',
    example: '搭乗券をなくさないでください。',
    exampleChinese: '请不要弄丢登机牌。'
  },
  {
    category: '航班',
    chinese: '靠过道座位',
    japanese: '通路側の席',
    kana: 'つうろがわの せき',
    example: '通路側の席は空いていますか。',
    exampleChinese: '靠过道的座位空着吗？'
  },
  {
    category: '航班',
    chinese: '转机',
    japanese: '乗り継ぎ',
    kana: 'のりつぎ',
    example: 'ソウルで乗り継ぎがあります。',
    exampleChinese: '需要在首尔转机。',
    accent: '0'
  },
  {
    category: '航班',
    chinese: '直飞',
    japanese: '直行便',
    kana: 'ちょっこうびん',
    example: '東京までの直行便を探しています。',
    exampleChinese: '我在找直飞东京的航班。'
  },
  {
    category: '航班',
    chinese: '空乘人员',
    japanese: '客室乗務員',
    kana: 'きゃくしつ じょうむいん',
    example: '客室乗務員に毛布をお願いしました。',
    exampleChinese: '我向空乘人员要了一条毯子。'
  },
  {
    category: '酒店',
    chinese: '行李寄存',
    japanese: '荷物預かり',
    kana: 'にもつ あずかり',
    example: 'チェックアウト後に荷物預かりをお願いします。',
    exampleChinese: '退房后请帮我寄存行李。'
  },
  {
    category: '酒店',
    chinese: '延迟退房',
    japanese: 'レイトチェックアウト',
    kana: 'れいとちぇっくあうと',
    example: 'レイトチェックアウトはできますか。',
    exampleChinese: '可以延迟退房吗？'
  },
  {
    category: '酒店',
    chinese: '客房清扫',
    japanese: '客室清掃',
    kana: 'きゃくしつ せいそう',
    example: '客室清掃をお願いします。',
    exampleChinese: '请打扫客房。'
  },
  {
    category: '酒店',
    chinese: '更换毛巾',
    japanese: 'タオル交換',
    kana: 'たおる こうかん',
    example: 'タオル交換をお願いします。',
    exampleChinese: '请更换毛巾。'
  },
  {
    category: '酒店',
    chinese: '追加枕头',
    japanese: '追加の枕',
    kana: 'ついかの まくら',
    example: '追加の枕を一つお願いします。',
    exampleChinese: '请再给我一个枕头。'
  },
  {
    category: '酒店',
    chinese: '客房服务',
    japanese: 'ルームサービス',
    kana: 'るーむさーびす',
    example: 'ルームサービスを注文したいです。',
    exampleChinese: '我想点客房服务。'
  },
  {
    category: '酒店',
    chinese: '洗衣服务',
    japanese: 'ランドリーサービス',
    kana: 'らんどりーさーびす',
    example: 'ランドリーサービスはありますか。',
    exampleChinese: '有洗衣服务吗？'
  },
  {
    category: '酒店',
    chinese: '叫醒服务',
    japanese: 'モーニングコール',
    kana: 'もーにんぐこーる',
    example: '七時にモーニングコールをお願いします。',
    exampleChinese: '请在七点提供叫醒服务。'
  },
  {
    category: '酒店设施',
    chinese: '保险箱',
    japanese: 'セーフティーボックス',
    kana: 'せーふてぃーぼっくす',
    example: '貴重品をセーフティーボックスに入れます。',
    exampleChinese: '把贵重物品放进保险箱。'
  },
  {
    category: '酒店设施',
    chinese: '自助洗衣房',
    japanese: 'コインランドリー',
    kana: 'こいんらんどりー',
    example: 'コインランドリーは何階ですか。',
    exampleChinese: '自助洗衣房在几楼？'
  },
  {
    category: '酒店设施',
    chinese: '大浴场',
    japanese: '大浴場',
    kana: 'だいよくじょう',
    example: '大浴場は最上階にあります。',
    exampleChinese: '大浴场在顶层。'
  },
  {
    category: '酒店设施',
    chinese: '自动售货机',
    japanese: '自動販売機',
    kana: 'じどう はんばいき',
    example: '自動販売機は廊下にあります。',
    exampleChinese: '自动售货机在走廊里。'
  },
  {
    category: '酒店设施',
    chinese: '制冰机',
    japanese: '製氷機',
    kana: 'せいひょうき',
    example: '製氷機は三階にあります。',
    exampleChinese: '制冰机在三楼。'
  },
  {
    category: '酒店设施',
    chinese: '紧急出口',
    japanese: '非常口',
    kana: 'ひじょうぐち',
    example: '非常口の場所を確認してください。',
    exampleChinese: '请确认紧急出口的位置。'
  },
  {
    category: '酒店设施',
    chinese: '吸烟区',
    japanese: '喫煙所',
    kana: 'きつえんじょ',
    example: '喫煙所は一階にあります。',
    exampleChinese: '吸烟区在一楼。'
  },
  {
    category: '打车',
    chinese: '请去这里',
    japanese: 'ここまでお願いします',
    kana: 'ここまで おねがいします',
    example: 'この地図の場所までお願いします。',
    exampleChinese: '请去地图上的这个地方。'
  },
  {
    category: '打车',
    chinese: '请开慢一点',
    japanese: 'ゆっくり走ってください',
    kana: 'ゆっくり はしってください',
    example: 'すみません、ゆっくり走ってください。',
    exampleChinese: '不好意思，请开慢一点。'
  },
  {
    category: '打车',
    chinese: '计价器',
    japanese: 'メーター',
    kana: 'めーたー',
    example: 'メーターを使ってください。',
    exampleChinese: '请使用计价器。'
  },
  {
    category: '打车',
    chinese: '可以刷卡吗',
    japanese: 'カードで払えますか',
    kana: 'かーどで はらえますか',
    example: 'タクシーでカードで払えますか。',
    exampleChinese: '出租车可以刷卡吗？'
  },
  {
    category: '交通',
    chinese: '换乘',
    japanese: '乗り換え',
    kana: 'のりかえ',
    example: '新宿駅で乗り換えてください。',
    exampleChinese: '请在新宿站换乘。',
    accent: '0'
  },
  {
    category: '观光',
    chinese: '旅游服务中心',
    japanese: '観光案内所',
    kana: 'かんこう あんないじょ',
    example: '観光案内所で地図をもらいました。',
    exampleChinese: '在旅游服务中心拿到了地图。'
  },
  {
    category: '餐饮',
    chinese: '过敏',
    japanese: 'アレルギー',
    kana: 'あれるぎー',
    example: '私はえびのアレルギーがあります。',
    exampleChinese: '我对虾过敏。',
    accent: '2'
  },
  {
    category: '餐饮',
    chinese: '不加辣',
    japanese: '辛くしないでください',
    kana: 'からく しないでください',
    example: 'この料理は辛くしないでください。',
    exampleChinese: '这道菜请不要做辣。'
  },
  {
    category: '铁路交通',
    chinese: '指定席',
    japanese: '指定席',
    kana: 'していせき',
    example: '指定席を予約したいです。',
    exampleChinese: '我想预约指定席。',
    accent: '2'
  },
  {
    category: '铁路交通',
    chinese: '自由席',
    japanese: '自由席',
    kana: 'じゆうせき',
    example: '自由席は何号車ですか。',
    exampleChinese: '自由席在几号车厢？',
    accent: '2'
  },
  {
    category: '铁路交通',
    chinese: '末班车',
    japanese: '終電',
    kana: 'しゅうでん',
    example: '終電は何時ですか。',
    exampleChinese: '末班车是几点？',
    accent: '0'
  },
  {
    category: '购物',
    chinese: '退税',
    japanese: '免税手続き',
    kana: 'めんぜい てつづき',
    example: '免税手続きはどこでできますか。',
    exampleChinese: '在哪里可以办理退税？'
  },
  {
    category: '购物',
    chinese: '试穿',
    japanese: '試着',
    kana: 'しちゃく',
    example: 'これを試着してもいいですか。',
    exampleChinese: '可以试穿这个吗？',
    accent: '0'
  },
  {
    category: '购物',
    chinese: '退货',
    japanese: '返品',
    kana: 'へんぴん',
    example: 'この商品を返品したいです。',
    exampleChinese: '我想退掉这件商品。',
    accent: '0'
  },
  {
    category: '旅行应急',
    chinese: '遗失物品',
    japanese: '忘れ物',
    kana: 'わすれもの',
    example: '電車に忘れ物をしました。',
    exampleChinese: '我把东西落在电车上了。',
    accent: '0'
  },
  {
    category: '旅行应急',
    chinese: '迷路',
    japanese: '道に迷う',
    kana: 'みちに まよう',
    example: '道に迷ってしまいました。',
    exampleChinese: '我迷路了。'
  },
  {
    category: '机场',
    chinese: '超重行李',
    japanese: '重量超過',
    kana: 'じゅうりょう ちょうか',
    example: '荷物が重量超過になりました。',
    exampleChinese: '行李超重了。'
  },
  {
    category: '机场',
    chinese: '行李损坏',
    japanese: '荷物の破損',
    kana: 'にもつの はそん',
    example: '荷物の破損を申告したいです。',
    exampleChinese: '我想申报行李损坏。'
  },
  {
    category: '机场',
    chinese: '遗失行李',
    japanese: 'ロストバゲージ',
    kana: 'ろすとばげーじ',
    example: 'ロストバゲージの手続きをお願いします。',
    exampleChinese: '请帮我办理遗失行李手续。'
  },
  {
    category: '航班',
    chinese: '候补名单',
    japanese: 'キャンセル待ち',
    kana: 'きゃんせるまち',
    example: '早い便のキャンセル待ちはできますか。',
    exampleChinese: '可以候补较早的航班吗？'
  },
  {
    category: '航班',
    chinese: '改签',
    japanese: '便の変更',
    kana: 'びんの へんこう',
    example: '便の変更をしたいです。',
    exampleChinese: '我想改签航班。'
  },
  {
    category: '航班',
    chinese: '登机开始',
    japanese: '搭乗開始',
    kana: 'とうじょう かいし',
    example: '搭乗開始の時間を確認します。',
    exampleChinese: '确认登机开始时间。'
  },
  {
    category: '酒店',
    chinese: '提前入住',
    japanese: 'アーリーチェックイン',
    kana: 'あーりーちぇっくいん',
    example: 'アーリーチェックインは可能ですか。',
    exampleChinese: '可以提前入住吗？'
  },
  {
    category: '酒店',
    chinese: '押金',
    japanese: 'デポジット',
    kana: 'でぽじっと',
    example: 'チェックイン時にデポジットが必要です。',
    exampleChinese: '入住时需要押金。'
  },
  {
    category: '酒店',
    chinese: '房间升级',
    japanese: '部屋のアップグレード',
    kana: 'へやの あっぷぐれーど',
    example: '部屋のアップグレードはできますか。',
    exampleChinese: '可以升级房间吗？'
  },
  {
    category: '酒店',
    chinese: '隔音',
    japanese: '防音',
    kana: 'ぼうおん',
    example: '防音の部屋を希望します。',
    exampleChinese: '希望要隔音的房间。'
  },
  {
    category: '酒店',
    chinese: '维修',
    japanese: '修理',
    kana: 'しゅうり',
    example: 'エアコンの修理をお願いします。',
    exampleChinese: '请维修空调。'
  },
  {
    category: '酒店',
    chinese: '空房等待',
    japanese: '空室待ち',
    kana: 'くうしつまち',
    example: '空室待ちのリストに入れてください。',
    exampleChinese: '请把我加入空房等待名单。'
  },
  {
    category: '交通',
    chinese: '临时停运',
    japanese: '運休',
    kana: 'うんきゅう',
    example: '台風の影響で電車が運休しています。',
    exampleChinese: '受台风影响，电车临时停运。',
    accent: '0'
  },
  {
    category: '交通',
    chinese: '绕行',
    japanese: '迂回',
    kana: 'うかい',
    example: '事故のため、迂回してください。',
    exampleChinese: '因事故，请绕行。',
    accent: '0'
  },
  {
    category: '交通',
    chinese: '单程',
    japanese: '片道',
    kana: 'かたみち',
    example: '大阪まで片道でお願いします。',
    exampleChinese: '请给我到大阪的单程票。',
    accent: '0'
  },
  {
    category: '交通',
    chinese: '往返',
    japanese: '往復',
    kana: 'おうふく',
    example: '往復切符を買いました。',
    exampleChinese: '买了往返票。',
    accent: '0'
  },
  {
    category: '交通',
    chinese: '检票口',
    japanese: '改札口',
    kana: 'かいさつぐち',
    example: '中央改札口で待ち合わせましょう。',
    exampleChinese: '在中央检票口碰头吧。',
    accent: '0'
  },
  {
    category: '交通',
    chinese: '时刻表',
    japanese: '時刻表',
    kana: 'じこくひょう',
    example: '時刻表で終電を確認します。',
    exampleChinese: '用时刻表确认末班车。',
    accent: '0'
  },
  {
    category: '餐饮',
    chinese: '预约座位',
    japanese: '席の予約',
    kana: 'せきの よやく',
    example: '二人分の席の予約をお願いします。',
    exampleChinese: '请预约两个人的座位。'
  },
  {
    category: '餐饮',
    chinese: '少放盐',
    japanese: '塩分控えめ',
    kana: 'えんぶん ひかえめ',
    example: '塩分控えめでお願いします。',
    exampleChinese: '请少放盐。'
  },
  {
    category: '餐饮',
    chinese: '分开付款',
    japanese: '別々に払う',
    kana: 'べつべつに はらう',
    example: '別々に払ってもいいですか。',
    exampleChinese: '可以分开付款吗？'
  },
  {
    category: '餐饮',
    chinese: '打包',
    japanese: '持ち帰り',
    kana: 'もちかえり',
    example: '残りを持ち帰りできますか。',
    exampleChinese: '剩下的可以打包吗？'
  },
  {
    category: '购物',
    chinese: '缺货',
    japanese: '品切れ',
    kana: 'しなぎれ',
    example: 'このサイズは品切れですか。',
    exampleChinese: '这个尺码缺货了吗？',
    accent: '0'
  },
  {
    category: '购物',
    chinese: '库存确认',
    japanese: '在庫確認',
    kana: 'ざいこ かくにん',
    example: '他の店舗の在庫確認をお願いします。',
    exampleChinese: '请帮我确认其他店的库存。'
  },
  {
    category: '购物',
    chinese: '瑕疵品',
    japanese: '不良品',
    kana: 'ふりょうひん',
    example: 'これは不良品かもしれません。',
    exampleChinese: '这个可能是瑕疵品。',
    accent: '0'
  },
  {
    category: '观光',
    chinese: '预约制',
    japanese: '予約制',
    kana: 'よやくせい',
    example: 'この施設は予約制です。',
    exampleChinese: '这个设施是预约制。',
    accent: '0'
  },
  {
    category: '观光',
    chinese: '导览',
    japanese: 'ガイドツアー',
    kana: 'がいどつあー',
    example: '英語のガイドツアーに参加します。',
    exampleChinese: '参加英语导览。'
  },
  {
    category: '观光',
    chinese: '临时休馆',
    japanese: '臨時休館',
    kana: 'りんじ きゅうかん',
    example: '美術館は今日、臨時休館です。',
    exampleChinese: '美术馆今天临时休馆。'
  },
  {
    category: '旅行应急',
    chinese: '身体不舒服',
    japanese: '体調が悪い',
    kana: 'たいちょうが わるい',
    example: '体調が悪いので、病院に行きたいです。',
    exampleChinese: '身体不舒服，想去医院。'
  },
  {
    category: '旅行应急',
    chinese: '被偷',
    japanese: '盗まれる',
    kana: 'ぬすまれる',
    example: '財布を盗まれました。',
    exampleChinese: '钱包被偷了。',
    accent: '0'
  }
]

if (typeof module !== 'undefined') {
  module.exports = words
}

if (typeof window !== 'undefined') {
  window.travelWords = words
}
