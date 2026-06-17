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
    exampleChinese: '飞机因天气恶劣而延误。'
  },
  {
    category: '航班',
    chinese: '取消',
    japanese: '欠航',
    kana: 'けっこう',
    example: '今日の便は欠航になりました。',
    exampleChinese: '今天的航班取消了。'
  },
  {
    category: '酒店',
    chinese: '入住手续',
    japanese: 'チェックイン',
    kana: 'ちぇっくいん',
    example: 'チェックインをお願いします。',
    exampleChinese: '请帮我办理入住。'
  },
  {
    category: '酒店',
    chinese: '退房',
    japanese: 'チェックアウト',
    kana: 'ちぇっくあうと',
    example: 'チェックアウトは十一時です。',
    exampleChinese: '退房时间是十一点。'
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
    exampleChinese: '行李在海关接受了检查。'
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
    category: '机场',
    chinese: '免税店',
    japanese: '免税店',
    kana: 'めんぜいてん',
    example: '免税店でお土産を買います。',
    exampleChinese: '在免税店购买伴手礼。'
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
    chinese: '座位',
    japanese: '座席',
    kana: 'ざせき',
    example: '窓側の座席をお願いします。',
    exampleChinese: '请给我靠窗的座位。'
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
    exampleChinese: '需要在首尔转机。'
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
    chinese: '前台',
    japanese: 'フロント',
    kana: 'ふろんと',
    example: 'フロントに鍵を預けます。',
    exampleChinese: '把钥匙寄存在前台。'
  },
  {
    category: '酒店',
    chinese: '单人间',
    japanese: 'シングルルーム',
    kana: 'しんぐるるーむ',
    example: 'シングルルームを一泊予約しました。',
    exampleChinese: '预订了一晚单人间。'
  },
  {
    category: '酒店',
    chinese: '双人间',
    japanese: 'ツインルーム',
    kana: 'ついんるーむ',
    example: 'ツインルームは空いていますか。',
    exampleChinese: '双人间有空房吗？'
  },
  {
    category: '酒店',
    chinese: '房卡',
    japanese: 'カードキー',
    kana: 'かーどきー',
    example: 'カードキーを部屋に忘れました。',
    exampleChinese: '我把房卡忘在房间里了。'
  },
  {
    category: '酒店',
    chinese: '早餐',
    japanese: '朝食',
    kana: 'ちょうしょく',
    example: '朝食は何時からですか。',
    exampleChinese: '早餐几点开始？'
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
    chinese: '有空房',
    japanese: '空室',
    kana: 'くうしつ',
    example: '今夜、空室はありますか。',
    exampleChinese: '今晚有空房吗？'
  },
  {
    category: '酒店',
    chinese: '无线网络',
    japanese: '無線LAN',
    kana: 'むせんらん',
    example: '部屋で無線LANが使えます。',
    exampleChinese: '房间里可以使用无线网络。'
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
    chinese: '毛毯',
    japanese: '毛布',
    kana: 'もうふ',
    example: '毛布を一枚貸してください。',
    exampleChinese: '请借给我一条毛毯。'
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
    chinese: '迷你吧',
    japanese: 'ミニバー',
    kana: 'みにばー',
    example: 'ミニバーの飲み物は有料ですか。',
    exampleChinese: '迷你吧里的饮料收费吗？'
  },
  {
    category: '酒店设施',
    chinese: '空调',
    japanese: 'エアコン',
    kana: 'えあこん',
    example: '部屋のエアコンが動きません。',
    exampleChinese: '房间里的空调不工作。'
  },
  {
    category: '酒店设施',
    chinese: '吹风机',
    japanese: 'ドライヤー',
    kana: 'どらいやー',
    example: 'ドライヤーは部屋にありますか。',
    exampleChinese: '房间里有吹风机吗？'
  },
  {
    category: '酒店设施',
    chinese: '电热水壶',
    japanese: '電気ケトル',
    kana: 'でんき けとる',
    example: '電気ケトルでお湯を沸かします。',
    exampleChinese: '用电热水壶烧水。'
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
    chinese: '健身房',
    japanese: 'フィットネスジム',
    kana: 'ふぃっとねすじむ',
    example: 'フィットネスジムは朝六時から使えます。',
    exampleChinese: '健身房早上六点起可以使用。'
  },
  {
    category: '酒店设施',
    chinese: '游泳池',
    japanese: 'プール',
    kana: 'ぷーる',
    example: 'ホテルのプールは屋内にあります。',
    exampleChinese: '酒店的游泳池在室内。'
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
    chinese: '温泉',
    japanese: '温泉',
    kana: 'おんせん',
    example: 'ホテルの温泉に入ります。',
    exampleChinese: '去泡酒店的温泉。'
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
    chinese: '电梯',
    japanese: 'エレベーター',
    kana: 'えれべーたー',
    example: 'エレベーターはフロントの隣です。',
    exampleChinese: '电梯在前台旁边。'
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
    chinese: '出租车站',
    japanese: 'タクシー乗り場',
    kana: 'たくしー のりば',
    example: 'タクシー乗り場は駅の前です。',
    exampleChinese: '出租车站在车站前面。'
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
    chinese: '请停车',
    japanese: '止めてください',
    kana: 'とめてください',
    example: '次の角で止めてください。',
    exampleChinese: '请在下一个路口停车。'
  },
  {
    category: '打车',
    chinese: '车费',
    japanese: '運賃',
    kana: 'うんちん',
    example: '空港までの運賃はいくらですか。',
    exampleChinese: '去机场的车费是多少？'
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
    exampleChinese: '请在新宿站换乘。'
  },
  {
    category: '交通',
    chinese: '公交车站',
    japanese: 'バス停',
    kana: 'ばすてい',
    example: '空港行きのバス停はどこですか。',
    exampleChinese: '去机场的公交车站在哪里？'
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
    category: '观光',
    chinese: '门票',
    japanese: '入場券',
    kana: 'にゅうじょうけん',
    example: '美術館の入場券を二枚ください。',
    exampleChinese: '请给我两张美术馆门票。'
  },
  {
    category: '观光',
    chinese: '伴手礼',
    japanese: 'お土産',
    kana: 'おみやげ',
    example: '家族にお土産を買いました。',
    exampleChinese: '给家人买了伴手礼。'
  },
  {
    category: '餐饮',
    chinese: '过敏',
    japanese: 'アレルギー',
    kana: 'あれるぎー',
    example: '私はえびのアレルギーがあります。',
    exampleChinese: '我对虾过敏。'
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
    chinese: '新干线',
    japanese: '新幹線',
    kana: 'しんかんせん',
    example: '新幹線で京都へ行きます。',
    exampleChinese: '乘新干线去京都。'
  },
  {
    category: '铁路交通',
    chinese: '指定席',
    japanese: '指定席',
    kana: 'していせき',
    example: '指定席を予約したいです。',
    exampleChinese: '我想预约指定席。'
  },
  {
    category: '铁路交通',
    chinese: '自由席',
    japanese: '自由席',
    kana: 'じゆうせき',
    example: '自由席は何号車ですか。',
    exampleChinese: '自由席在几号车厢？'
  },
  {
    category: '铁路交通',
    chinese: '站台',
    japanese: 'ホーム',
    kana: 'ほーむ',
    example: '東京行きの電車は何番ホームですか。',
    exampleChinese: '去东京的电车在几号站台？'
  },
  {
    category: '铁路交通',
    chinese: '末班车',
    japanese: '終電',
    kana: 'しゅうでん',
    example: '終電は何時ですか。',
    exampleChinese: '末班车是几点？'
  },
  {
    category: '购物',
    chinese: '收银台',
    japanese: 'レジ',
    kana: 'れじ',
    example: 'レジはどこですか。',
    exampleChinese: '收银台在哪里？'
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
    exampleChinese: '可以试穿这个吗？'
  },
  {
    category: '购物',
    chinese: '退货',
    japanese: '返品',
    kana: 'へんぴん',
    example: 'この商品を返品したいです。',
    exampleChinese: '我想退掉这件商品。'
  },
  {
    category: '旅行应急',
    chinese: '警察局',
    japanese: '警察署',
    kana: 'けいさつしょ',
    example: '近くの警察署はどこですか。',
    exampleChinese: '附近的警察局在哪里？'
  },
  {
    category: '旅行应急',
    chinese: '医院',
    japanese: '病院',
    kana: 'びょういん',
    example: '病院へ連れて行ってください。',
    exampleChinese: '请带我去医院。'
  },
  {
    category: '旅行应急',
    chinese: '药店',
    japanese: '薬局',
    kana: 'やっきょく',
    example: '薬局で風邪薬を買います。',
    exampleChinese: '在药店购买感冒药。'
  },
  {
    category: '旅行应急',
    chinese: '遗失物品',
    japanese: '忘れ物',
    kana: 'わすれもの',
    example: '電車に忘れ物をしました。',
    exampleChinese: '我把东西落在电车上了。'
  },
  {
    category: '旅行应急',
    chinese: '迷路',
    japanese: '道に迷う',
    kana: 'みちに まよう',
    example: '道に迷ってしまいました。',
    exampleChinese: '我迷路了。'
  }
]

if (typeof module !== 'undefined') {
  module.exports = words
}

if (typeof window !== 'undefined') {
  window.travelWords = words
}
