"use strict";

const DAN_DATA = {
  "0": { num: 4, note: [0, 0, 0, 0], lnote: [0, 0, 0, 0], song: ["曲", "名", "是", "啥"] },

  // Malody 4K Dan v2 (v1.5 / v1.75)
  "m2_1": { num: 4, note: [831, 955, 907, 654], song: ["かめりあ - Glitch Nerds [Eemia]", "ginkiha - Borealis [Potassium]", "Qrispy Joybox - Niflheimr [Tofu1222]", "Iru Feat.月ノ美兎 - MOON!! [XingRen]"] },
  "m2_2": { num: 4, note: [1152, 850, 950, 969], song: ["HHHxMMxST - Follow Tomorrow [Emiria]", "Amberry - Bronze Coffin [Potassium]", "polysha - 炯眼の絶対零度 [Critical_Star]", "Ryu* - Sakura Mirage [Spy]"] },
  "m2_3": { num: 4, note: [1169, 1143, 974, 1347], song: ["Feryquitous - Quon [Ashley]", "2th - 原曲を切り刻む- [Ashley]", "wa. remixed celas - 銀の風 [Marirose]", "JurokuNeta. - Adjudicatorz-断罪- [teradora]"] },
  "m2_4": { num: 4, note: [1400, 1402, 1685, 1599], song: ["Cuvelia - 天空の夜明け [ZZHBOY]", "削除 - VALLISTA [liaoxingyao]", "秋山 澪 - 水晶世界 ～Fracture～ [ExNeko]", "姉ヶ崎寧々 - ZENITHALIZE [Alwaysover]"] },
  "m2_5": { num: 4, note: [1953, 2250, 2166, 1667], song: ["埋葬Y.J - 万吨匿名信 (1.05x) [imoe]", "削除 - Chips of notes [XingRen]", "猫叉master - Despair of ELFERIA [Potassium]", "黒皇帝 - Chronostasis (1.1x) [HXJ_Crafter]"] },
  "m2_6": { num: 4, note: [1487, 1424, 1381, 1587], song: ["堀江由衣 - Sweet & Sweet CHERRY X [Golgo13]", "wa. vs. ETIA. - Akasagarbha [gemboyong]", "Polymath9 - HELLO! EveryOne! [[Crz]Derrick]", "Lunatic Sounds - DAN_DATAErr0r [Eedow]"] },
  "m2_7": { num: 4, note: [1909, 1814, 1777, 2681], song: ["Y - fairy stage [AkagiPh]", "BlackY vs. Yooh - XROSS INFECTION [Vish]", "niki feat. YURiCa - WAVE [Skwid]", "xi - Blue Zeinth (Cut) [|zenX|]"] },
  "m2_8": { num: 4, note: [1962, 1067, 2388, 1772], song: ["哀愁マニア - The Lost Dedicated (1.05x) [DDMythical]", "高橋菜々 - The party we have never seen [XingRen]", "Silentroom - Finixe [Asherz007]", "Star* vs. Cryo - Myosotis Ultimate Dream [AZVW_2]"] },
  "m2_9": { num: 4, note: [1799, 2023, 2281, 1787], song: ["Tobu - Dusk [MintApril_]", "梅干茶漬け - Panic! Pop'n! Picnic! [XingRen]", "t+pazolite - Kick-ass Kong-Fu Carnival (xi remix) [Potassium]", "幽閉サテライト - 约束の君 (Cut) [XingRen]"] },
  "m2_10": { num: 4, note: [2659, 2188, 2194, 2187], song: ["平沢進 - 追う者 [Wh1teh]", "Goreshit - Loli Fantasy [XingRen]", "The Ghost Of 3.13 - Daydream [Potassium]", "shiraishi - Moon Gate [[Crz]Derrick]"] },
  "m2_e1": { num: 4, note: [2164, 1952, 1823, 3249], song: ["ZUN - 幽雅に咲かせ、墨染の桜 ～Border of Life [XingRen]", "Litmus* - Scorpion Dance [XingRen]", "anubasu-anubasu / alt - The Island of Albatross [DELAY] [AkagiPh]", "Goreshit - Beautiful Loli Thing (1.1x) [XingRen]"] },
  "m2_e2_v15": { num: 4, note: [2457, 2239, 2024, 2561], song: ["Junk / 発汗BMS - Qualia [長距離走] [XingRen]", "R300k - Rusty Sky [CUWAN]", "Camellia vs Expander - 紫陽花 -AZISAI- [AZVW_2]", "Nightcore - Take my hand (BPM*1.2) [XingRen]"] },
  "m2_e2_v175": { num: 4, note: [1944, 2024, 2561, 3089], song: ["Goreshit - chiyopop? [XingRen]", "Camellia vs Expander - 紫陽花 -AZISAI- [AZVW_2]", "Nightcore - Take my hand (BPM*1.2) [XingRen]", "dj TAKA feat. flare - message (Cut) [Linger]"] },
  "m2_e2": { num: 4, note: [2871, 2024, 1871, 2452], song: ["Masa - Kitsune no youmeiri (BPM*1.1) [Xingyue-]", "Camellia vs Expander - 紫陽花 -AZISAI- [AZVW_2]", "BACO - Love & Justice (BPM*1.15) [XingRen]", "dj TAKA feat. flare - message (Cut) [Linger]"] },
  "m2_e3": { num: 4, note: [2327, 1593, 2166, 2200], song: ["INNOCENT NOIZE - Jumble Rumble [Peachhh]", "Cres / air - End Time [TechnoBreak] (1.1x) [MintApril_]", "Cardboard Box - ++ [Vish]", "m108 - *Crow Solace* [[Crz]Derrick]"] },
  "m2_e4": { num: 4, note: [2731, 2653, 2033, 2796], song: ["かめりあfeat.ななひろ - イーディーエム・ジャンパーズ(Cut) [Rachel]", "nitro - [line-epsilon] [XingRen]", "t+pazolite - Contrapasso -paradiso- [Peachhh]", "DI Genki vs かめりあ feat. Moimoi - YELL! (Cut) [Rachel]"] },
  "m2_e5": { num: 4, note: [3229, 2731, 2561, 2109], song: ["Goreshit - Satori de Pon! [MintApril_]", "remixed celas - Legend of Seeker [Ycloki]", "秋山 澪 - 水晶世界 ～Fracture～ [MintApril_]", "ZUN remixed by LeaF - Wizdomiot [Satori]"] },
  "m2_e6_v175": { num: 4, note: [2504, 2027, 2444, 3526], song: ["洪流之源 - 鼠鼠生风 (BPM*1.15) [drunkenstein]", "SP-# - corneal (BPM*1.15) [AkagiPh]", "Dubmood - Sucker For Arpeggios [XingRen]", "DJ Sharpnel - Tactical railroad (cut) (BPM*1.3) [MintApril_]"] },
  "m2_e6": { num: 4, note: [1766, 1861, 3171, 1680], song: ["SHIKI - Sepia (1.15x) [XingRen]", "Liet. - Nopea [MintApril_]", "さわわ - Satori Trisis (1.35x) [XingRen]", "LunaticSounds - 臨終 [teradora vs XingRen]"] },
  "m2_e7_v175": { num: 4, note: [2725, 2166, 2545, 3691], song: ["美里 with Na+ - CG901B (BPM*1.1) [Rachel]", "o.s.gate - リジットXXXパラダイス [Satori]", "Goreshit - toromi hearts 2 [Rachel]", "さわわ - Tokamak Sol Cannon (BPM*1.4) [XingRen]"] },
  "m2_e7": { num: 4, note: [2339, 2461, 2511, 2177], song: ["梅里 - Paranoia (Cut) (1.25x) [MintApril_]", "Nightmare - Boulafacet [XingRen]", "LeaF - Paraclete -Miracle- [AkagiPh]", "Aoi - 夢見の少年 (1.15x) [AkagiPh]"] },
  "m2_e8": { num: 4, note: [1929, 2380, 2710, 4675], song: ["Royal Hunt - Martial Arts (1.4x) [XingRen]", "Camellia - Gene Disruption (1.1x) [teradora]", "15 - paradigm shift [D-CSC] (1.15x) [AkagiPh]", "mabinogi - Death Melody (Cut) (1.25x) [XingRen]"] },
  "m2_e9_v175": { num: 4, note: [4427, 3660, 4323, 3044], song: ["Ryu* Feat. 森永真由美 - Din Don Dan (BPM*1.3) [XingRen]", "Silentroom - 驟雨の狹間 (BPM*1.15) [teradora vs. Karuta]", "▼8Ы$Ŧ∆8Ќ∆_ ĜР∑χØ฿▼ - $ØRRY (BPM*1.4) [teradora]", "Silvia - VERTEX GAMMA [XingRen vs. teradora]"] },
  "m2_e9": { num: 4, note: [3987, 1874, 4363, 3843], song: ["Luze - Fragmentation (1.05x) [teradora]", "Octopodes remixed DSZ - Nostos2021 (1.05x) [XingRen]", "Dark PHOEiNX - Green-eyed Jealousy (Cut) [teradora]", "Falcom Sound Team jdk - SILENT DESERT (Cut) (BPM*1.2) [teradora vs. XingRen]"] },
  "m2_ef": { num: 4, note: [3468, 3335, 3698, 5061], song: ["fripside - Only my railgun (BPM*1.33) [XingRen]", "Incinerate - -purgatorium- (BPM*1.14) [tera vs. Cyrillic]", "xi - Blue Zenith (BPM*1.15) [MintApril]", "Yoko Kanno - Inner Universe (BPM*1.45) [tera]"] },

  // Malody 4K Extra Dan v2 (Sample)
  "m2s_e1": { num: 4, note: [1952, 2316, 2098, 2048], song: ["Litmus* - Scorpion Dance [Xing_Ren]", "Luo Tianyi - Luoshui Tianyi (BPM*1.03) [Xing_Ren & SnowPh]", "Freestylo - Dope Monkeys (Hardstyle Remix) (BPM*1.02) [Xingyue]", "ETIA. feat. Jenga - Say A Vengeance (BPM*1.216) [Xingyue]"] },
  "m2s_e2": { num: 4, note: [2158, 1953, 2196, 3160], song: ["mozell - banbado - piano version [Czego]", "Camellia - Towards the horizon [Surya]", "Sakanaction - Shin Takarajima [Luyzi]", "Ayo - Hanjuuryoku no Machi (BPM*1.275) [teradora]"] },
  "m2s_e3": { num: 4, note: [2299, 2378, 2677, 2640], song: ["WANIMA - Tomo ni (BPM*1.12) [Xing_Ren]", "YOASOBI - Yoru ni kakeru (BPM*1.25) (Cut) [teradora]", "xi - Akasha (BPM*0.88) (Cut) [GwiCL x SnowPh]", "Gold6324 - Laser rain (remix) (BPM*1.25) [Xing_Ren]"] },
  "m2s_e4": { num: 4, note: [1738, 1876, 2079, 2008], song: ["Horie Yui - The World's End (BPM*1.15) [teradora]", "Neru Feat. Kogeinu Akatin - Law-evading Rock (BPM*1.05) [Xing_Ren]", "onoken - P8107 (BPM*0.95) [Rita-]", "Frums - We Want to Run (BPM*1.01) [tera]"] },
  "m2s_e5": { num: 4, note: [2731, 2109, 2365, 2691], song: ["M2U - Legend of Seeker (BPM*0.95) [Ycloki]", "LeaF – Wizdomiot [Satori]", "Dead Ball P Feat. Hatsune Miku & Kagami Rin – Sonesaki Shinju (BPM*0.925) [Cyrillic]", "DJ Genki vs. Camellia - Ragnarok (Cut) [teradora]"] },
  "m2s_e6": { num: 4, note: [1766, 2525, 2167, 3214], song: ["shiki - Sepia (BPM*1.15) [Xing_Ren]", "Kobaryo - Bookmaker (Cut) [teradora]", "xi - Ascension to Heaven (BPM*0.975) (Cut) [MintApril_]", "syatten remixed by celas - Bird Sprite -Hikari no kakusei- (BPM*1.4) (Cut) [Cyrillic]"] },
  "m2s_e7": { num: 4, note: [2339, 2461, 2142, 3167], song: ["Umezato - Paranoia (Cut) (BPM*1.3) [MintApril_]", "Nightmare – Boulafacet [Xing_Ren]", "ZOMiG - Lalala.Refrain (BPM*1.1) [SnowPh]", "katagiri - Strong 280 [teradora]"] },
  "m2s_e8": { num: 4, note: [2647, 3253, 3204, 4046], song: ["Est - Angelic Snow (BPM*1.1) [zino]", "SOOOO – iiillluuuvvvUUU (BPM*1.122) (Cut) [Literia]", "ROKINA - Kimi to bokueno sousouka [apse_]", "Sun3 - Perfect Cherry Storm (BPM*1.45) [teradora]"] },
  "m2s_e9": { num: 4, note: [2828, 3663, 2865, 2777], song: ["SKAN - Give It to Dem (feat. Highdiwaan & Drama B) (Edited) (BPM*1.14) [thoAltum]", "Silentroom - Shuu no hazama (BPM*1.12) (Cut) [teradora]", "Liet. - Shut your yap (BPM*1.133) [-Reot-]", "sak + wellow - #curtaincall (BPM*1.332) [Remeslo]"] },

  // Malody 4K Dan v3
  "m3_0": { num: 4, note: [492, 529, 595, 681], song: ["生きとし生けるもの (Ikitoshi Ikerumono) // Promiii", "Rambling Pleat // boomushroom", "一梦千霄 (Yi Meng Qian Xiao) // DongShaoZhou", "White Eternity // tkdkendo"] },
  "m3_1": { num: 4, note: [695, 621, 718, 1279], song: ["尘世闲游 (Rex Incognito) // YuzukiY", "恋せよ乙女！ (Koiseyo Otome!) // tkdkendo", "Break // XingRen", "KING // DongShaoZhou"] },
  "m3_2": { num: 4, note: [1397, 1090, 805, 1212], song: ["Stargazer // Mipha-", "Seyana. (何でも言うことを聞いてくれアカネチャン) // boomushroom", "Love Emotion! // Yashiro-", "Mermaid Girl // Ts27"] },
  "m3_3": { num: 4, note: [1055, 1489, 1288, 1789], song: ["恋ひ恋ふ縁 (Koi Kou Enishi) // DongShaoZhou", "お願い！コンコンお稲荷さま (Onegai! Kon on Oinari-sama) // Endermeng", "The Last Page // Oekakizuki vs. Hylotl", "星が降らない街 (Hoshi ga Furanai Machi) // Hylotl"] },
  "m3_4": { num: 4, note: [1865, 1434, 1284, 1839], song: ["ウミユリ海底譚 (Umiyuri Kaiteitan) // MACKEREL", "Fire in the sky // XingRen", "Icyxis // tyrcs", "绯红帝国 (The Crimson Empire) (1.1x) // Oekakizuki"] },
  "m3_5": { num: 4, note: [1282, 1706, 1473, 1939], song: ["白金デスコ (Platinum Disco) // mas3", "キュートなカノジョ (Cute na Kanojo) // tyrcs", "Reimei Sketchbook // Benson_", "Joker // HarKIn"] },
  "m3_6": { num: 4, note: [1694, 1636, 1803, 2115], song: ["チョコレイト・ディスコ (Chocolate Disco) // Oekakizuki", "Call Me, Beep Me (If You Wanna Reap Me) // DongShaoZhou", "DIE IN THE SEA // XingRen", "unhappy century // tera"] },
  "m3_7": { num: 4, note: [1701, 1799, 2132, 1899], song: ["Don't Stop The Music // 7912", "Six Acid Strings // Mipha-", "∀rkadia [Illusion] (1.05x) // Oekakizuki", "Valkyrie Revolutia // OxalicAcid vs. Hylotl"] },
  "m3_8": { num: 4, note: [2237, 2081, 2280, 2000], song: ["Don’t let you down // OxalicAcid vs. crazyImmortals", "夜に駆ける (Yoru ni Kakeru) (1.05x) // tera", "Snow Veil -少女と獣の森- // MACKEREL", "ポジティブ☆ダンスタイム (Positive Dance Time) // Hinaka_Yuki"] },
  "m3_9": { num: 4, note: [2374, 1889, 2142, 1810], song: ["機械少女幻想 (Kikai Shoujo Gensou) // Hylotl", "cold planet // Hinaka_Yuki", "stray star // Sorakaru_", "Unleashed World // Amekaze"] },
  "m3_10": { num: 4, note: [2034, 1740, 2270, 2166], song: ["飛燕草 (Hiensou) // Hinaka_Yuki", "Rocky Buinne // teradora", "月哀·月夜 (Yue Ai Yue Ye) // YuzakiNASB", "Spin Eternally // Oekakizuki"] },
  "m3_e1": { num: 4, note: [1952, 2013, 1953, 2111], song: ["Scorpion Dance // XingRen", "大輪の魂 (Tailin no Soul) (1.2x) // Oekakizuki", "永夜のパレード (Eiya no Parade) (1.05x) // Houraisan Kaguya", "音速宇宙旅行 (Onsoku Uchuu Ryokou) // tera"] },
  "m3_e2": { num: 4, note: [2107, 1953, 2386, 2674], song: ["Moments // Amekaze", "Towards the Horizon // Hinaka_Yuki", "トリカゴ (Torikago) // Hylotl vs. OxalicAcid", "フロンティア↑↑エクスプローラー (Frontier Explorer) (1.15x) // tera"] },
  "m3_e3": { num: 4, note: [2518, 2636, 2326, 2511], song: ["Edison (1.15x) // Hinaka_Yuki", "INTERNET OVERDOSE (1.05x) // Hylotl", "Euthanasia (1.05x) // tera", "Fin.ArcDeaR // Amekaze"] },
  "m3_e4": { num: 4, note: [2634, 2212, 2336, 2602], song: ["ZENITHALIZE // Hinaka_Yuki", "Asymmetrical Grooves // tera", "Pure Ruby // Hylotl", "EVERLASTING HAPPiNESS↑ // crazyImmortals"] },
  "m3_e5": { num: 4, note: [2734, 2417, 3089, 2974], song: ["Bring Our Ignition Back (1.1x) // Oekakizuki", "雲散霧消 // hinako1804", "えれくとりっく・えんじぇぅ (Electric Angel) (1.2x) // Sorakaru_ vs. Hinaka_Yuki", "穢れなき薔薇十字 (Kegare Naki Bara Juuji) // MintApril_"] },
  "m3_e6": { num: 4, note: [2483, 2276, 2921, 3194], song: ["Defeat awaken battle ship // Hylotl", "Extraction // Oekakizuki", "Pastel Subliminal // OxalicAcid", "Synthesized Fortress // tera"] },
  "m3_e7": { num: 4, note: [2846, 2260, 2333, 3347], song: ["LiFE Garden (1.05x) // YuzakiNASB", "Alpha // Zetsfy", "Stay Alive (Zekk Remix) (1.25x) // Hylotl", "Heaven's Fall (1.4x) // tera"] },
  "m3_e8": { num: 4, note: [3789, 3663, 2424, 3255], song: ["はやぶさ (Hayabusa) // Hylotl", "驟雨の狹間 (Shuu no Hazama) // tera", "アマツカミ (Amatsukami) (1.15x) // Hinaka_Yuki", "CRIMSON FIGHTER (1.15x) // OxalicAcid"] },
  "m3_e9": { num: 4, note: [3888, 3030, 3581, 3700], song: ["crazy_tek (DJ Noriken Remix) // tera", "Nhelv // tera", "終点 // Hinaka_Yuki", "Deadly force - Put an end // Sorakaru_ vs. Hinaka_Yuki"] },
  "m3_ef": { num: 4, note: [2828, 3362, 3393, 5100], song: ["Infinity Heaven // tera", "NEURO-CLOUD-9 // tera", "キズアト (Kizuato) (1.3x) // tera", "Runengon // tera"] },

  // osu!mania 4K Dan ~ REFORM (DDMythical)
  "rf_1": { num: 4, note: [878, 696, 954, 1167], song: ["ULTRA-PRISM - Miracle Chance (Golgo13/Sensationer) [SMOC 8TH] DD EDIT", "marshmello - WaNt U 2 (erlinadewi-) [HYPER]", "Porter Robinson & Madeon - Shelter (Dellvangel) [Loneliness]", "t+pazolite - Tommorow Perfume (tpz Despair Mix) (Critical_Star) [ADVANCED Lv. 9]"] },
  "rf_2": { num: 4, note: [1107, 905, 955, 1487], song: ["Dollscythe - Flashes (ZZHBOY) [CS’ Hyper]", "Remo-con - Vermillion (HOBIT) [SMOC 8TH] DD EDIT", "Yooh - Snow Storm -euphoria- (raediaufar) [ADVANCED] DD EDIT", "Colorful Sounds Port - Eternal Drain (Wh1teh) [Hyper]"] },
  "rf_3": { num: 4, note: [1008, 797, 1047, 1259], song: ["9nine - Cross Over (Golgo13/Sensationer) [SMOC 8TH]", "The Flashbulb - Kirlian Shores (James May) [James May 1] {cut}", "Rche - Entelecheia (Starry-) [Hyper]", "SHIKI - Endless Dream (hi19hi19) [hi19hi19 Pack 3 - Popcorn Blast JS Buttery Snack Filez]"] },
  "rf_4": { num: 4, note: [905, 1499, 1283, 2071], song: ["Andrew W.K - It's Time To Party!! (IcyWorld) [Rebound Dump Collection Megapack]", "hyi - Ephemera (rCaliberGX/Fullerene-) [Yolomania 3]", "w_tre - Shannon’s Theorem (hi19hi19) [hi19hi19 4 - Modern Keyboardsmash]", "Alex c. feat. Yasmin K. - Angel of Darkness (Leo137) [Yolomania 3]"] },
  "rf_5": { num: 4, note: [1293, 1722, 1632, 1903], song: ["r300k - Energy Flower 3007 (Shoegazer) [6236]", "The Ghost Of 3.13 - Last Star in the Universe (Wiosna) [Yolomania 3]", "DJ'TEKINA//SOMETHING - Palette GAMMA (Cadmium-113) [Abstract]", "DJ Noriken - Elektric U-Phoria (IcyWorld) [Yolomania 4]"] },
  "rf_6": { num: 4, note: [1487, 1266, 1378, 2186], song: ["Dekatora - Sweet & Sweet Cherry X (Golgo13/Sensationer) [SMOC 8TH]", "Terminal11 - The Bird’s Midair Heatstroke (samurai7654) [Rebound Dump Collection Megapack I] {cut}", "t+pazolite - Luv * Lab * Poison 22ate! (CBR x Choof) [Nuclear Blast 5] {cut}", "Musical Masterpiece - M-A (IcyWorld) [Nuclear Blast 4]"] },
  "rf_7": { num: 4, note: [2114, 1777, 1081, 2734], song: ["Last Chance (Golgo13/Sensationer) [SMOC 8TH]", "Niki - WAVE (Skwid) [Dump Parade]", "Cardboard Box vs. STereochan - We eat at FIVE FIVE FIVE GUYS (hi19hi19) [hi19hi19 3 - Popcorn Blast]", "Tina Cousins - Hymn (Leo137) [Yolomania 3]"] },
  "rf_8": { num: 4, note: [2177, 1309, 1608, 1589], song: ["C-Clays - To The Limit (Wh1teh) [Fennec Fantasy] {1.1x // cut}", "Terminal11 - Reluctantly Accepting Temporary Overexhaustion (ceteka) [HSMP6]", "Yu_Ashina - Trickstarz {1.15x} (hi19hi19) [hi19hi19 5 - Streams and Memes]", "DJ Myosuke - Anguish (Shoegazer) [Cherry Blossoms and Broken Streams] {cut}"] },
  "rf_9": { num: 4, note: [2114, 2070, 1674, 2272], song: ["Jessica Jay - Can’t take my eyes off you (Golgo13/Sensationer) [SMOC 8TH]", "Igorrr - Cicadidae (Minty) [Minty Fresh Pack 1]", "DJ Banzai - Disconnected Trance (Gammablaster) [HSMP12]", "ueotan - Firmament Castle “Velier” (hi19hi19) [hi19hi19 3 - Popcorn Blast] {1.05x}"] },
  "rf_10": { num: 4, note: [1906, 1460, 1723, 2392], song: ["yst - The Lost Dedicated. (Zyph/Jumpstream Japan) [OLD EASY VERSION]", "DEV/NULL - Rave 7 (hi19hi19) [hi19hi19 2 - Dumps and Hard stuff] {1.1x}", "YMCK - Oh Curry! (kaiten123) [kaiten dumbstream 2] {0.9x // cut // A.K.A. Kare Dayo! v. Dumbstreamz}", "Sia - Chandelier ~aoredit~ (_underjoy) [Yolomania 4]"] },
  "rf_a": { num: 4, note: [2265, 1528, 2300, 3334], song: ["SAMBA MASTER -SATOH- - Dark Sambaland (Seiryuu) [Jack Dumps]", "U2 Akiyama - Odoru Mizushibuki (Shoegazer) [Macabre] {1.1x}", "Jea - Makiba (ilikexd) [Fullerene Shift]", "Vaenus - LazorBeamz (Evening) [CHALLENGE 006]"] },
  "rf_b": { num: 4, note: [2274, 2308, 1740, 2301], song: ["MoriMori Atsushi - Paradigm Shift (Hydria) [MDx2v5]", "Camellia - Blue Planet (Shoegazer) [Terra]", "The Queenstons - Amber Starlight, Don't Fall (IcyWorld) [NBJS5] {cut}", "Jeff Williams - Time To say Goodbye (feat. Casey Lee Williams) (Halogen-) [Farewell] {cut}"] },
  "rf_g": { num: 4, note: [1973, 1980, 1429, 3979], song: ["The Quick Brown Fox - Break (beary605) [Smash] {1.1x}", "Camellia - Fastest Crash (Shoegazer) [Paroxysm] {cut}", "Hige Driver - Reflec Streamz (ATTang) [ATTang’s Dumpmix]", "DJ Sharpnel - We Luv Lama (IcyWorld) [Nuclear Blast 4] {1.2x // cut}"] },
  "rf_d": { num: 4, note: [2018, 2711, 3268, 2629], song: ["CROOVE - Aquaris (snoverpk) [Wanderer] {1.3x}", "Studio EIM - Crescent Moon Island Boss Battle (Shoegazer) [Kuro] {1.05x}", "DETRO - Volcanic (ATTang) [ATTang’s Bad Files]", "DJ Sharpnel - Future Dominators (IcyWorld) [NBJS4] {1.3x // cut}"] },
  "rf_e": { num: 4, note: [2128, 2552, 2194, 2829], song: ["SHIKI - Rose Quartz (EGG) [Singles] {1.3x}", "The Ghost of 3.13 - Forgotten (Shoegazer x Zyph) [Yolomania 2] {1.4x}", "ueotan - Mario Paint (Time Progression for BMS) [D-ANOTHER] {DELAYMASTER}", "plastic feat. Sakito - Hitsugi To Futago (snoverpk) [PHANTASM] {1.25x}"] },

  // osu!mania 4K LN Dan Courses v2
  "4ln2_1": { num: 4, note: [717, 336, 176, 613], lnote: [176, 176, 106, 401], song: ["ClariS - Hitorigoto -TV MIX- (Tofu1222) [Emiria's Hard]", "Chata - Dango Daikazoku (TheToaphster) [Peace]", "Jeremy Soule - Nerevar Rising (Morrowind Theme) (Yyorshire) [Freedom]", "Lite Show Magic - TRICKL4SH 220 (eyes) [4K ALISCEA'S NOVICE]"] },
  "4ln2_2": { num: 4, note: [805, 805, 377, 805], lnote: [379, 609, 328, 805], song: ["[UJ buff] Team Salvato - Doki Doki Literature Club! (Main Theme) (arcwinolivirus) [?Harem?]", "[UJ nerf] Anamanaguchi - SPF 420 (juankristal) [Introduction]", "[UJ edit] RAMM feat.Iwai Yuki - Heartbeats (nonka) [LN]", "Beltaine - Rockhill (Ryu Sei) [Hard]"] },
  "4ln2_3": { num: 4, note: [836, 921, 612, 1157], lnote: [469, 421, 268, 538], song: ["Expander - aura (AlisceaSparku) [4K ADVANCED]", "[UJ buff] Eguchi Takahiro - silver temple (Kamikaze) [Stage 3: Tranquility]", "DIVERSA - i use raw expectation to unlock placebo. the placebo is the next thing i do. (Parachor) [Stage 3: Obfuscation]", "[UJ nerf] P*Light feat. mow*2 - OVERDRIVERS (inteliser) [EXTREME [LN]]"] },
  "4ln2_4": { num: 4, note: [907, 1053, 413, 1067], lnote: [562, 552, 368, 1066], song: ["kurenainagi tabibito - Otenba Koimusume (inteliser) [HD]", "[Cut] Girls' Generation - Gee (Couil) [Easy LNs]", "fripSide - future gazer (TV Size) (FrenzyLi) [LNNM]", "[UJ nerf] uno(IOSYS) - #FairyJoke #SDVX_Edit (PiraTom) [LNFINITE]"] },
  "4ln2_5": { num: 4, note: [1904, 887, 1380, 1220], lnote: [1052, 726, 533, 661], song: ["[UJ buff] S.I.D Sound - Pink Gold (gemboyong) [12]", "[UJ nerf] Morimori Atsushi - MilK (Raveille) [MiLN]", "M2U - Promise (gemboyong) [13]", "s-don as Iriss - Blacksphere(Exhaust Effect) (PiraTom)"] },
  "4ln2_6": { num: 4, note: [1365, 745, 1219, 1534], lnote: [959, 667, 672, 887], song: ["senya - Koborezu no Negaigoto (souzirou1000) [LN]", "[UJ buff] Darren Loveday & Stephen Loveday - Power To Progress (Benzopirene) [Improvement]", "Hanazawa Kana - Mousou Express (Remix) (FrenzyLi) [LNHD]", "Freezer feat. Kiichigo - Berry Go!! (PiraTom) [BERRY HARD]"] },
  "4ln2_7": { num: 4, note: [1394, 1119, 832, 1666], lnote: [682, 852, 832, 720], song: ["[UJ buff] Hommarju - Rock It (Mage) [aLNother]", "C-Show - On the FM (Raspberriel) [107.1 MHz]", "Moe Shop - <3 (Todestrieb) [I need your love]", "[UJ edit] LiSA - Tsumibito (Ceker_Ayam) [Hard]"] },
  "4ln2_8": { num: 4, note: [1445, 1318, 1258, 1694], lnote: [1249, 1106, 1228, 866], song: ["[UJ nerf] rider - Missing Banquet (mach_jp) [SHD]", "[UJ buff] Blue Stahli - Shotgun Senorita (juankristal) [Machine Gun]", "[UJ edit] aaaa + yadorigi - Sakase natsuzora, koi no hana. (scissorsf) [flnowers] ", "[UJ buff] Umeboshi Chazuke - Owari to Hajimari no Oto (Jungdongjin) [Hajimari no LN]"] },
  "4ln2_9": { num: 4, note: [2500, 1461, 1321, 2307], lnote: [1569, 1132, 1104, 1392], song: ["[UJ edit] Amane - Dodger's Gadget (UNMIXED) (inteliser) [Catastrophy (LN)]", "Sound Horizon - Raijin no Hidariude (Kamikaze) [Tempest w/ _underjoy]", "[UJ buff] knot - cold planet (Kamikaze) [Everybody Dance!]", "[UJ nerf] Nakamura Meiko - Ordinary World (gemboyong) [17]"] },
  "4ln2_10": { num: 4, note: [2377, 1656, 1689, 2185], lnote: [1548, 1464, 1677, 1470], song: ["[UJ edit] butaotome - towa no maigo (Jungdongjin) [1.1x]", "U1 overground - Dopamine (juankristal) [Polyethylene Oxide]", "[Cut][UJ edit] Aika - Sakura Trip (gemboyong) [Well done 1.15x]", "[Cut][UJ edit] Nekomata Master feat. Shimotsuki Haruka - Element of SPADA (Yururu) [Element of LN 1.10x]"] },
  "4ln2_11": { num: 4, note: [1864, 1493, 2338, 2529], lnote: [1643, 1019, 2092, 1996], song: ["Toromaru - Enigma (TheToaphster) [Maestro 1.1x]", "Nekomata Master - Avalon no oka (Niro-) [LN Deluge]", "Helblinde - Love is War (RemFangirl) [Lust.]", "[UJ nerf] Co shu Nie - asphyxia (MisterLuka) [eZmmR's 4K anesthesia 1.05x]"] },
  "4ln2_12": { num: 4, note: [1798, 2633, 1822, 2449], lnote: [1188, 2178, 1730, 1941], song: ["ck - Carnation (ck remix) (Gekido-) [LN Master 1.05x]", "[Cut] Helix6 - No. 6 ([Crz]Crysarlene) [X]", "Fallen Shepherd ft. RabbiTon Strings - ENDYMION (Gekido-) [LN Master]", "[Cut] fripSide - infinite synthesis (_underjoy) [LN UNIVERSE -edit-]"] },
  "4ln2_13": { num: 4, note: [2570, 2452, 2123, 2818], lnote: [2155, 1751, 1528, 2243], song: ["LeaF - Kyouki Ranmai (_underjoy) [Schizoid 1.05x]", "S.S.H. - Intersect Thunderbolt (ELPIS)", "[Cut] [UJ edit] Camellia - Literal Crystal In The Cyphisonia (LovelySerenade) [Il[L]umin[N]ize 1.15x]", "[UJ buff] Camellia - NEURO-CLOUD-9 (eZmmR) [:thinking:-+]"] },
  "4ln2_14": { num: 4, note: [2319, 2408, 2483, 2158], lnote: [2096, 1912, 1835, 1789], song: ["Kagura - Mare Nectaris ([Crz]Crysarlene) [Fracastorius (Yami buff)]", "Silentroom - Nhelv (LovelySerenade) [Zen (Yami buff) x1.05]", "Hotaru - Indomitable Spirit [Hommarju Remix] (AuraahDono) [[L]u[N]atic (Yami buff) x1.5]", "ABE3 - The lost (_underjoy) [in the dark]"] },
  "4ln2_15": { num: 4, note: [3216, 3209, 3278, 3149], lnote: [2937, 2452, 2626, 2814], song: ["Himeringo - Kodoku no Kakurenbo (eZmmR/upan) [FINAL DESPAIR 1.15 (Yume remap&cut)]", "Kairiki Bear - Inaiinai isonshou (feat. GUMI, Kagamine Rin) (juankristal) [timing hell [NSV] 1.25 (Yume edit)]", "DJKurara - White Hair Little Swords Girl (_underjoy) [Youmu's Dream 1.025]", "Camellia - NUCLEAR-STAR ([Crz]Crysarlene) [Polaris(Yume edit)]"] },
};

function getDanChoice() {
  let choices = document.getElementsByName("dan");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked == true) {
      return choices[i].value;
    }
  }
  return false;
}

function getFunctionChoice() {
  let choices = document.getElementsByName("function");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked == true) {
      return choices[i].value;
    }
  }
  return false;
}

function isSV2() {
  return document.getElementsByName("sv2")[0].checked;
}

function showInput() {
  let danChoice = getDanChoice(), functionChoice = getFunctionChoice();
  if (danChoice === false || !(danChoice in DAN_DATA)) {
    document.getElementById("info").innerHTML = "";
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "还未选择任何段位！( `д´)9 / 该段位没有数据！作者咕了 (`ε´ )";
    return;
  }
  let info = "曲目信息：<br><pre>";
  for (let i = 0; i < DAN_DATA[danChoice].num; i++) {
    info += `\n${DAN_DATA[danChoice].song[i]}`;
  }
  info += "</pre>";
  let input = "请输入（无需百分号）：<br>";
  for (let j = 1; j <= DAN_DATA[danChoice].num; j++) {
    if (functionChoice == "normal") {
      input += `<input class="card" type="text" id="input_${j}" placeholder="第 ${j} 首歌结束时的 ACC">\n`;
    } else {
      input += `<input class="card" type="text" id="input_${j}" placeholder="第 ${j} 首歌的单曲 ACC">\n`;
    }
  }
  input += `<br><button class="btn primary" onclick="calc()">确定并复制结果到剪贴板</button>`;
  document.getElementById("info").innerHTML = info;
  document.getElementById("input").innerHTML = input;
  document.getElementById("result").innerHTML = "";
}

function calc() {
  let danChoice = getDanChoice(), functionChoice = getFunctionChoice(), noteNum = [0], preNoteNum = [0]; // 物量的前缀和
  for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
    noteNum[i] = DAN_DATA[danChoice].note[i - 1];
  }
  // 如果数据中有 LN 物量并且选中 Score v2
  if ("lnote" in DAN_DATA[danChoice] && isSV2()) {
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
      noteNum[i] += DAN_DATA[danChoice].lnote[i - 1];
    }
  }
  for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
    preNoteNum[i] = preNoteNum[i - 1] + noteNum[i];
  }
  let inputAcc = [0];
  for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
    inputAcc[i] = Number(document.getElementById(`input_${i}`).value).toFixed(2);
  }
  let result = "(none)";
  if (functionChoice == "normal") { // 由段位 ACC 变化计算单曲 ACC
    result = `${inputAcc[1]}`;
    for (let i = 2; i <= DAN_DATA[danChoice].num; i++) {
      result += `-${inputAcc[i]}`;
    }
    // 如果数据中有 LN 物量并且选中 Score v2
    if ("lnote" in DAN_DATA[danChoice] && isSV2()) {
      result += ' (Score v2)';
    }
    result += '\n单曲';
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
      let acc = (inputAcc[i] * preNoteNum[i] - inputAcc[i - 1] * preNoteNum[i - 1]) / noteNum[i];
      result += ` ${acc.toFixed(3)}`;
    }
  } else { // 由单曲 ACC 推算段位 ACC 变化
    result = "单曲";
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
      result += ` ${inputAcc[i]}`;
    }
    // 如果数据中有 LN 物量并且选中 Score v2
    if ("lnote" in DAN_DATA[danChoice] && isSV2()) {
      result += ' (Score v2)';
    }
    result += `\n推算 ${inputAcc[1]}0`;
    let deduceAcc = [0], sum = 0;
    for (let i = 1; i <= DAN_DATA[danChoice].num; i++) {
      sum += inputAcc[i] * noteNum[i];
      deduceAcc[i] = (sum / preNoteNum[i]);
    }
    for (let i = 2; i <= DAN_DATA[danChoice].num; i++) {
      result += `-${deduceAcc[i].toFixed(3)}`;
    }
  }
  document.getElementById("result").innerHTML = result;
  navigator.clipboard.writeText(result);
}
