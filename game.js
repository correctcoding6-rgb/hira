// ===================================
// VOCABULARY DATABASE
// ===================================
console.log('🎮 GAME.JS LOADED');

const vocabularyDatabase = {
    'あ': [
        { jp: 'あい', romanji: 'ai', translation: 'love', breakdown: ['あ(a)', 'い(i)'] },
        { jp: 'あお', romanji: 'ao', translation: 'blue', breakdown: ['あ(a)', 'お(o)'] },
        { jp: 'あか', romanji: 'aka', translation: 'red', breakdown: ['あ(a)', 'か(ka)'] }
    ],
    'い': [
        { jp: 'いぬ', romanji: 'inu', translation: 'dog', breakdown: ['い(i)', 'ぬ(nu)'] },
        { jp: 'いえ', romanji: 'ie', translation: 'house', breakdown: ['い(i)', 'え(e)'] },
        { jp: 'いい', romanji: 'ii', translation: 'good', breakdown: ['い(i)', 'い(i)'] }
    ],
    'う': [
        { jp: 'うみ', romanji: 'umi', translation: 'sea', breakdown: ['う(u)', 'み(mi)'] },
        { jp: 'うえ', romanji: 'ue', translation: 'above', breakdown: ['う(u)', 'え(e)'] },
        { jp: 'うた', romanji: 'uta', translation: 'song', breakdown: ['う(u)', 'た(ta)'] }
    ],
    'え': [
        { jp: 'えき', romanji: 'eki', translation: 'station', breakdown: ['え(e)', 'き(ki)'] },
        { jp: 'えん', romanji: 'en', translation: 'yen', breakdown: ['え(e)', 'ん(n)'] },
        { jp: 'えび', romanji: 'ebi', translation: 'shrimp', breakdown: ['え(e)', 'び(bi)'] }
    ],
    'お': [
        { jp: 'おと', romanji: 'oto', translation: 'sound', breakdown: ['お(o)', 'と(to)'] },
        { jp: 'おかね', romanji: 'okane', translation: 'money', breakdown: ['お(o)', 'か(ka)', 'ね(ne)'] },
        { jp: 'おんな', romanji: 'onna', translation: 'woman', breakdown: ['お(o)', 'ん(n)', 'な(na)'] }
    ],
    'か': [
        { jp: 'かお', romanji: 'kao', translation: 'face', breakdown: ['か(ka)', 'お(o)'] },
        { jp: 'かみ', romanji: 'kami', translation: 'hair/paper', breakdown: ['か(ka)', 'み(mi)'] },
        { jp: 'かさ', romanji: 'kasa', translation: 'umbrella', breakdown: ['か(ka)', 'さ(sa)'] }
    ],
    'き': [
        { jp: 'きた', romanji: 'kita', translation: 'north', breakdown: ['き(ki)', 'た(ta)'] },
        { jp: 'きのう', romanji: 'kinou', translation: 'yesterday', breakdown: ['き(ki)', 'の(no)', 'う(u)'] },
        { jp: 'きれい', romanji: 'kirei', translation: 'beautiful', breakdown: ['き(ki)', 'れ(re)', 'い(i)'] }
    ],
    'く': [
        { jp: 'くち', romanji: 'kuchi', translation: 'mouth', breakdown: ['く(ku)', 'ち(chi)'] },
        { jp: 'くつ', romanji: 'kutsu', translation: 'shoes', breakdown: ['く(ku)', 'つ(tsu)'] },
        { jp: 'くに', romanji: 'kuni', translation: 'country', breakdown: ['く(ku)', 'に(ni)'] }
    ],
    'け': [
        { jp: 'けさ', romanji: 'kesa', translation: 'this morning', breakdown: ['け(ke)', 'さ(sa)'] },
        { jp: 'けいき', romanji: 'keiki', translation: 'economy', breakdown: ['け(ke)', 'い(i)', 'き(ki)'] }
    ],
    'こ': [
        { jp: 'こえ', romanji: 'koe', translation: 'voice', breakdown: ['こ(ko)', 'え(e)'] },
        { jp: 'ここ', romanji: 'koko', translation: 'here', breakdown: ['こ(ko)', 'こ(ko)'] },
        { jp: 'こども', romanji: 'kodomo', translation: 'child', breakdown: ['こ(ko)', 'ど(do)', 'も(mo)'] }
    ],
    'さ': [
        { jp: 'さけ', romanji: 'sake', translation: 'alcohol', breakdown: ['さ(sa)', 'け(ke)'] },
        { jp: 'さくら', romanji: 'sakura', translation: 'cherry blossom', breakdown: ['さ(sa)', 'く(ku)', 'ら(ra)'] },
        { jp: 'さかな', romanji: 'sakana', translation: 'fish', breakdown: ['さ(sa)', 'か(ka)', 'な(na)'] }
    ],
    'し': [
        { jp: 'しお', romanji: 'shio', translation: 'salt', breakdown: ['し(shi)', 'お(o)'] },
        { jp: 'した', romanji: 'shita', translation: 'below/tongue', breakdown: ['し(shi)', 'た(ta)'] },
        { jp: 'しろ', romanji: 'shiro', translation: 'white', breakdown: ['し(shi)', 'ろ(ro)'] }
    ],
    'す': [
        { jp: 'すし', romanji: 'sushi', translation: 'sushi', breakdown: ['す(su)', 'し(shi)'] },
        { jp: 'すき', romanji: 'suki', translation: 'like', breakdown: ['す(su)', 'き(ki)'] },
        { jp: 'すな', romanji: 'suna', translation: 'sand', breakdown: ['す(su)', 'な(na)'] }
    ],
    'せ': [
        { jp: 'せかい', romanji: 'sekai', translation: 'world', breakdown: ['せ(se)', 'か(ka)', 'い(i)'] },
        { jp: 'せなか', romanji: 'senaka', translation: 'back', breakdown: ['せ(se)', 'な(na)', 'か(ka)'] }
    ],
    'そ': [
        { jp: 'そこ', romanji: 'soko', translation: 'there', breakdown: ['そ(so)', 'こ(ko)'] },
        { jp: 'そら', romanji: 'sora', translation: 'sky', breakdown: ['そ(so)', 'ら(ra)'] },
        { jp: 'そと', romanji: 'soto', translation: 'outside', breakdown: ['そ(so)', 'と(to)'] }
    ],
    'た': [
        { jp: 'たべる', romanji: 'taberu', translation: 'to eat', breakdown: ['た(ta)', 'べ(be)', 'る(ru)'] },
        { jp: 'たかい', romanji: 'takai', translation: 'expensive/tall', breakdown: ['た(ta)', 'か(ka)', 'い(i)'] },
        { jp: 'たまご', romanji: 'tamago', translation: 'egg', breakdown: ['た(ta)', 'ま(ma)', 'ご(go)'] }
    ],
    'ち': [
        { jp: 'ちいさい', romanji: 'chiisai', translation: 'small', breakdown: ['ち(chi)', 'い(i)', 'さ(sa)', 'い(i)'] },
        { jp: 'ちず', romanji: 'chizu', translation: 'map', breakdown: ['ち(chi)', 'ず(zu)'] },
        { jp: 'ちから', romanji: 'chikara', translation: 'power', breakdown: ['ち(chi)', 'か(ka)', 'ら(ra)'] }
    ],
    'つ': [
        { jp: 'つき', romanji: 'tsuki', translation: 'moon', breakdown: ['つ(tsu)', 'き(ki)'] },
        { jp: 'つくえ', romanji: 'tsukue', translation: 'desk', breakdown: ['つ(tsu)', 'く(ku)', 'え(e)'] },
        { jp: 'つめたい', romanji: 'tsumetai', translation: 'cold', breakdown: ['つ(tsu)', 'め(me)', 'た(ta)', 'い(i)'] }
    ],
    'て': [
        { jp: 'て', romanji: 'te', translation: 'hand', breakdown: ['て(te)'] },
        { jp: 'てんき', romanji: 'tenki', translation: 'weather', breakdown: ['て(te)', 'ん(n)', 'き(ki)'] },
        { jp: 'てがみ', romanji: 'tegami', translation: 'letter', breakdown: ['て(te)', 'が(ga)', 'み(mi)'] }
    ],
    'と': [
        { jp: 'とり', romanji: 'tori', translation: 'bird', breakdown: ['と(to)', 'り(ri)'] },
        { jp: 'とけい', romanji: 'tokei', translation: 'clock', breakdown: ['と(to)', 'け(ke)', 'い(i)'] },
        { jp: 'ともだち', romanji: 'tomodachi', translation: 'friend', breakdown: ['と(to)', 'も(mo)', 'だ(da)', 'ち(chi)'] }
    ],
    'な': [
        { jp: 'なまえ', romanji: 'namae', translation: 'name', breakdown: ['な(na)', 'ま(ma)', 'え(e)'] },
        { jp: 'なつ', romanji: 'natsu', translation: 'summer', breakdown: ['な(na)', 'つ(tsu)'] },
        { jp: 'なに', romanji: 'nani', translation: 'what', breakdown: ['な(na)', 'に(ni)'] }
    ],
    'に': [
        { jp: 'にく', romanji: 'niku', translation: 'meat', breakdown: ['に(ni)', 'く(ku)'] },
        { jp: 'にほん', romanji: 'nihon', translation: 'Japan', breakdown: ['に(ni)', 'ほ(ho)', 'ん(n)'] },
        { jp: 'にわ', romanji: 'niwa', translation: 'garden', breakdown: ['に(ni)', 'わ(wa)'] }
    ],
    'ぬ': [
        { jp: 'ぬの', romanji: 'nuno', translation: 'cloth', breakdown: ['ぬ(nu)', 'の(no)'] },
        { jp: 'ぬく', romanji: 'nuku', translation: 'to pull out', breakdown: ['ぬ(nu)', 'く(ku)'] }
    ],
    'ね': [
        { jp: 'ねこ', romanji: 'neko', translation: 'cat', breakdown: ['ね(ne)', 'こ(ko)'] },
        { jp: 'ねる', romanji: 'neru', translation: 'to sleep', breakdown: ['ね(ne)', 'る(ru)'] },
        { jp: 'ねつ', romanji: 'netsu', translation: 'fever', breakdown: ['ね(ne)', 'つ(tsu)'] }
    ],
    'の': [
        { jp: 'のむ', romanji: 'nomu', translation: 'to drink', breakdown: ['の(no)', 'む(mu)'] },
        { jp: 'のる', romanji: 'noru', translation: 'to ride', breakdown: ['の(no)', 'る(ru)'] }
    ],
    'は': [
        { jp: 'はな', romanji: 'hana', translation: 'flower/nose', breakdown: ['は(ha)', 'な(na)'] },
        { jp: 'はる', romanji: 'haru', translation: 'spring', breakdown: ['は(ha)', 'る(ru)'] },
        { jp: 'はし', romanji: 'hashi', translation: 'chopsticks/bridge', breakdown: ['は(ha)', 'し(shi)'] }
    ],
    'ひ': [
        { jp: 'ひ', romanji: 'hi', translation: 'day/sun/fire', breakdown: ['ひ(hi)'] },
        { jp: 'ひと', romanji: 'hito', translation: 'person', breakdown: ['ひ(hi)', 'と(to)'] },
        { jp: 'ひだり', romanji: 'hidari', translation: 'left', breakdown: ['ひ(hi)', 'だ(da)', 'り(ri)'] }
    ],
    'ふ': [
        { jp: 'ふね', romanji: 'fune', translation: 'boat', breakdown: ['ふ(fu)', 'ね(ne)'] },
        { jp: 'ふゆ', romanji: 'fuyu', translation: 'winter', breakdown: ['ふ(fu)', 'ゆ(yu)'] },
        { jp: 'ふく', romanji: 'fuku', translation: 'clothes', breakdown: ['ふ(fu)', 'く(ku)'] }
    ],
    'へ': [
        { jp: 'へや', romanji: 'heya', translation: 'room', breakdown: ['へ(he)', 'や(ya)'] }
    ],
    'ほ': [
        { jp: 'ほん', romanji: 'hon', translation: 'book', breakdown: ['ほ(ho)', 'ん(n)'] },
        { jp: 'ほし', romanji: 'hoshi', translation: 'star', breakdown: ['ほ(ho)', 'し(shi)'] }
    ],
    'ま': [
        { jp: 'まち', romanji: 'machi', translation: 'town', breakdown: ['ま(ma)', 'ち(chi)'] },
        { jp: 'まど', romanji: 'mado', translation: 'window', breakdown: ['ま(ma)', 'ど(do)'] },
        { jp: 'まえ', romanji: 'mae', translation: 'front', breakdown: ['ま(ma)', 'え(e)'] }
    ],
    'み': [
        { jp: 'みず', romanji: 'mizu', translation: 'water', breakdown: ['み(mi)', 'ず(zu)'] },
        { jp: 'みち', romanji: 'michi', translation: 'road', breakdown: ['み(mi)', 'ち(chi)'] },
        { jp: 'みぎ', romanji: 'migi', translation: 'right', breakdown: ['み(mi)', 'ぎ(gi)'] }
    ],
    'む': [
        { jp: 'むし', romanji: 'mushi', translation: 'insect', breakdown: ['む(mu)', 'し(shi)'] },
        { jp: 'むね', romanji: 'mune', translation: 'chest', breakdown: ['む(mu)', 'ね(ne)'] }
    ],
    'め': [
        { jp: 'め', romanji: 'me', translation: 'eye', breakdown: ['め(me)'] },
        { jp: 'めし', romanji: 'meshi', translation: 'meal', breakdown: ['め(me)', 'し(shi)'] }
    ],
    'も': [
        { jp: 'もの', romanji: 'mono', translation: 'thing', breakdown: ['も(mo)', 'の(no)'] },
        { jp: 'もり', romanji: 'mori', translation: 'forest', breakdown: ['も(mo)', 'り(ri)'] }
    ],
    'や': [
        { jp: 'やま', romanji: 'yama', translation: 'mountain', breakdown: ['や(ya)', 'ま(ma)'] },
        { jp: 'やさい', romanji: 'yasai', translation: 'vegetable', breakdown: ['や(ya)', 'さ(sa)', 'い(i)'] }
    ],
    'ゆ': [
        { jp: 'ゆき', romanji: 'yuki', translation: 'snow', breakdown: ['ゆ(yu)', 'き(ki)'] },
        { jp: 'ゆめ', romanji: 'yume', translation: 'dream', breakdown: ['ゆ(yu)', 'め(me)'] }
    ],
    'よ': [
        { jp: 'よる', romanji: 'yoru', translation: 'night', breakdown: ['よ(yo)', 'る(ru)'] },
        { jp: 'よむ', romanji: 'yomu', translation: 'to read', breakdown: ['よ(yo)', 'む(mu)'] }
    ],
    'ら': [
        { jp: 'らいねん', romanji: 'rainen', translation: 'next year', breakdown: ['ら(ra)', 'い(i)', 'ね(ne)', 'ん(n)'] }
    ],
    'り': [
        { jp: 'りんご', romanji: 'ringo', translation: 'apple', breakdown: ['り(ri)', 'ん(n)', 'ご(go)'] },
        { jp: 'りょうり', romanji: 'ryouri', translation: 'cooking', breakdown: ['り(ri)', 'ょ(yo)', 'う(u)', 'り(ri)'] }
    ],
    'る': [
        { jp: 'るす', romanji: 'rusu', translation: 'absence', breakdown: ['る(ru)', 'す(su)'] }
    ],
    'れ': [
        { jp: 'れい', romanji: 'rei', translation: 'zero/example', breakdown: ['れ(re)', 'い(i)'] },
        { jp: 'れきし', romanji: 'rekishi', translation: 'history', breakdown: ['れ(re)', 'き(ki)', 'し(shi)'] }
    ],
    'ろ': [
        { jp: 'ろく', romanji: 'roku', translation: 'six', breakdown: ['ろ(ro)', 'く(ku)'] }
    ],
    'わ': [
        { jp: 'わたし', romanji: 'watashi', translation: 'I/me', breakdown: ['わ(wa)', 'た(ta)', 'し(shi)'] }
    ],
    'を': [
        { jp: 'を', romanji: 'wo', translation: '(object marker)', breakdown: ['を(wo)'] }
    ],
    'ん': [
        { jp: 'ほん', romanji: 'hon', translation: 'book', breakdown: ['ほ(ho)', 'ん(n)'] },
        { jp: 'せんせい', romanji: 'sensei', translation: 'teacher', breakdown: ['せ(se)', 'ん(n)', 'せ(se)', 'い(i)'] }
    ]
};

// ===================================
// PALACE/CHAPTER DEFINITIONS
// ===================================
const palaces = [
    {
        id: 0,
        name: "🥋 TRAINING DOJO",
        icon: "🥋",
        characters: [], // ALL learned characters
        intro: "Train with ALL characters you've learned! Face them all to master your skills.",
        unlocked: true,
        ruler: "Training Master",
        isTrainingDojo: true
    },
    {
        id: 1,
        name: "Castle of Vowels",
        icon: "🏰",
        characters: ['あ', 'い', 'う', 'え', 'お'],
        intro: "The foundation of all Japanese writing lies within this castle. Master the five vowel sounds to unlock the power of the Phantom Thieves!",
        unlocked: true,
        ruler: "Vowel King"
    },
    {
        id: 2,
        name: "K-Fortress",
        icon: "⚔️",
        characters: ['か', 'き', 'く', 'け', 'こ'],
        intro: "The K-Fortress stands tall with its five guardians. Combine K with vowels to forge new sounds!",
        unlocked: false,
        ruler: "Commander Ka"
    },
    {
        id: 3,
        name: "S-Sanctuary",
        icon: "⛩️",
        characters: ['さ', 'し', 'す', 'せ', 'そ'],
        intro: "A sacred sanctuary protected by S-sounds. Beware of 'shi' - it breaks the pattern!",
        unlocked: false,
        ruler: "High Priestess Sa"
    },
    {
        id: 4,
        name: "T-Tower",
        icon: "🗼",
        characters: ['た', 'ち', 'つ', 'て', 'と'],
        intro: "The T-Tower reaches the clouds. Watch for 'chi' and 'tsu' - they follow their own rules!",
        unlocked: false,
        ruler: "Tower Master Ta"
    },
    {
        id: 5,
        name: "N-Nexus",
        icon: "🌀",
        characters: ['な', 'に', 'ぬ', 'ね', 'の'],
        intro: "The N-Nexus connects all realms. Navigate its straightforward paths!",
        unlocked: false,
        ruler: "Nexus Guardian Na"
    },
    {
        id: 6,
        name: "H-Harbor",
        icon: "⚓",
        characters: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
        intro: "Ships arrive at the H-Harbor. Notice how 'fu' sounds different from what you'd expect!",
        unlocked: false,
        ruler: "Admiral Ha"
    },
    {
        id: 7,
        name: "M-Museum",
        icon: "🏛️",
        characters: ['ま', 'み', 'む', 'め', 'も'],
        intro: "Ancient artifacts fill the M-Museum. These sounds are consistent and easy to remember!",
        unlocked: false,
        ruler: "Curator Ma"
    },
    {
        id: 8,
        name: "Y-Yokai Domain",
        icon: "👹",
        characters: ['や', 'ゆ', 'よ'],
        intro: "Yokai spirits guard this mysterious domain. Only three sounds dwell here!",
        unlocked: false,
        ruler: "Yokai Chief"
    },
    {
        id: 9,
        name: "R-Ruins",
        icon: "🏚️",
        characters: ['ら', 'り', 'る', 'れ', 'ろ'],
        intro: "Ancient ruins hold the R-sounds. In Japanese, R sounds like a mix between L and R!",
        unlocked: false,
        ruler: "Ruin Keeper Ra"
    },
    {
        id: 10,
        name: "Final Palace",
        icon: "👑",
        characters: ['わ', 'を', 'ん'],
        intro: "The final confrontation! Three legendary characters await: wa, wo (the object marker), and n (the only consonant that stands alone)!",
        unlocked: false,
        ruler: "The Eternal Shadow"
    }
];

// Hiragana reference
const hiraganaData = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n'
};

// Character usage information
const characterUsage = {
    'あ': { common: 'あい (love), あか (red), あさ (morning)', tip: 'First vowel sound, appears at start of many words' },
    'い': { common: 'いぬ (dog), いえ (house), いい (good)', tip: 'Used in adjectives and common words' },
    'う': { common: 'うみ (sea), うた (song), うえ (above)', tip: 'Often appears in verb endings' },
    'え': { common: 'えき (station), えび (shrimp), え (picture)', tip: 'Common in nouns and place names' },
    'お': { common: 'おと (sound), おかね (money), おんな (woman)', tip: 'Polite prefix for words, very common' },
    'か': { common: 'かお (face), かみ (hair), かさ (umbrella)', tip: 'Question particle か, starts many words' },
    'き': { common: 'きた (north), きのう (yesterday), き (tree)', tip: 'Appears in adjectives like きれい (beautiful)' },
    'く': { common: 'くち (mouth), くつ (shoes), くに (country)', tip: 'Common in verb stems' },
    'け': { common: 'けさ (this morning), けいき (economy)', tip: 'Less common but important particle' },
    'こ': { common: 'ここ (here), こえ (voice), こども (child)', tip: 'Demonstrative "this", very common prefix' },
    'さ': { common: 'さけ (alcohol), さくら (cherry blossom), さかな (fish)', tip: 'Starts many nouns' },
    'し': { common: 'しお (salt), した (below), しろ (white)', tip: 'Verb ending for "to do"' },
    'す': { common: 'すし (sushi), すき (like), すな (sand)', tip: 'Polite verb ending ます' },
    'せ': { common: 'せかい (world), せなか (back)', tip: 'Appears in formal speech' },
    'そ': { common: 'そこ (there), そら (sky), そと (outside)', tip: 'Demonstrative "that", common particle' },
    'た': { common: 'たべる (to eat), たかい (expensive), たまご (egg)', tip: 'Past tense marker for verbs' },
    'ち': { common: 'ちいさい (small), ちず (map), ちから (power)', tip: 'Common in adjectives' },
    'つ': { common: 'つき (moon), つくえ (desk), つめたい (cold)', tip: 'Counter for objects' },
    'て': { common: 'て (hand), てんき (weather), てがみ (letter)', tip: 'Verb connector て-form' },
    'と': { common: 'とり (bird), とけい (clock), ともだち (friend)', tip: 'Particle meaning "and/with"' },
    'な': { common: 'なまえ (name), なに (what), なつ (summer)', tip: 'な-adjective ending' },
    'に': { common: 'にく (meat), にほん (Japan), にし (west)', tip: 'Location particle "at/to"' },
    'ぬ': { common: 'いぬ (dog), ぬの (cloth)', tip: 'Less common but appears in key words' },
    'ね': { common: 'ねこ (cat), ねる (to sleep)', tip: 'Sentence-ending particle ね' },
    'の': { common: 'のむ (to drink), この (this)', tip: 'Possessive particle, extremely common' },
    'は': { common: 'はな (flower), はは (mother), はる (spring)', tip: 'Topic marker particle は (pronounced "wa")' },
    'ひ': { common: 'ひと (person), ひ (sun), ひだり (left)', tip: 'Common in time words' },
    'ふ': { common: 'ふゆ (winter), ふね (ship)', tip: 'Less common sound' },
    'へ': { common: 'へや (room)', tip: 'Direction particle へ (to/towards)' },
    'ほ': { common: 'ほん (book), ほし (star)', tip: 'Common in everyday words' },
    'ま': { common: 'まち (town), まえ (front), まど (window)', tip: 'Appears in polite verb forms' },
    'み': { common: 'みず (water), みち (road), みせ (store)', tip: 'Common in nouns' },
    'む': { common: 'むし (insect), むら (village)', tip: 'Verb ending for negative form' },
    'め': { common: 'め (eye), めし (meal)', tip: 'Less common but important' },
    'も': { common: 'もの (thing), もも (peach)', tip: 'Particle meaning "also/too"' },
    'や': { common: 'やま (mountain), やさい (vegetable)', tip: 'Choice particle や' },
    'ゆ': { common: 'ゆき (snow), ゆび (finger)', tip: 'Less common vowel' },
    'よ': { common: 'よる (night), よむ (to read)', tip: 'Emphasis particle よ' },
    'ら': { common: 'さくら (cherry blossom), から (from)', tip: 'Common in verb forms' },
    'り': { common: 'とり (bird), りょうり (cooking)', tip: 'Appears frequently in nouns' },
    'る': { common: 'いる (to be), みる (to see)', tip: 'Verb ending for う-verbs' },
    'れ': { common: 'きれい (beautiful), これ (this)', tip: 'Common in demonstratives' },
    'ろ': { common: 'しろ (white), ころ (time period)', tip: 'Less common but important' },
    'わ': { common: 'わたし (I/me), わかる (to understand)', tip: 'First-person pronouns' },
    'を': { common: 'を (object marker)', tip: 'Direct object particle, pronounced "o"' },
    'ん': { common: 'ほん (book), さん (Mr./Ms.)', tip: 'Only consonant, appears at word end' }
};

// ===================================
// GAME STATE VARIABLES
// ===================================
let gameMode = 'palace_select';
let currentPalace = null;
let currentCharIndex = 0;
let currentBattleChars = [];
let currentChar = null;
let currentVocab = null;
let hintUsed = false;
let choicesShown = false;
let gameDay = 1;
let usedVocabThisBattle = {}; // Track used vocab per character to avoid repetition
let globalUsedVocab = []; // Track ALL used vocab words globally in this battle

// User Management
let currentUser = 'default';
let allUsers = {};
let codeName = 'JOKER';

// Player Stats
let playerLevel = 1;
let playerXp = 0;
let playerMaxXp = 100;
let playerHp = 100;
let playerMaxHp = 100;
let playerSp = 50;
let playerMaxSp = 50;
let money = 0;

// Progress Tracking
let confidants = {};
let completedPalaces = [];
let sessionCorrect = 0;
let allLearnedChars = [];
let strugglingChars = []; // Characters the player is struggling with
let encounteredVocab = []; // All vocabulary words encountered

// Initialize confidants
Object.keys(hiraganaData).forEach(char => {
    confidants[char] = { 
        rank: 0, 
        maxRank: 10,
        points: 0,
        pointsToNext: 100,
        attempts: 0, 
        correct: 0,
        recentMistakes: 0 // Track recent mistakes for struggle detection
    };
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Levenshtein distance for partial scoring
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Calculate similarity percentage
function calculateSimilarity(answer, correct) {
    const distance = levenshteinDistance(answer.toLowerCase(), correct.toLowerCase());
    const maxLength = Math.max(answer.length, correct.length);
    const similarity = ((maxLength - distance) / maxLength) * 100;
    return similarity;
}

// Extract unique hiragana characters from a vocab word
function extractHiraganaChars(vocabWord) {
    const chars = [];
    for (let char of vocabWord.jp) {
        if (hiraganaData[char] && !chars.includes(char)) {
            chars.push(char);
        }
    }
    return chars;
}

// ===================================
// STRUGGLE DETECTION SYSTEM
// ===================================

function updateStruggleTracking(char, wasCorrect) {
    const data = confidants[char];
    
    if (!wasCorrect) {
        data.recentMistakes++;
    } else {
        // Reduce recent mistakes on success
        data.recentMistakes = Math.max(0, data.recentMistakes - 1);
    }
    
    // Update struggling chars list
    updateStrugglingChars();
}

function updateStrugglingChars() {
    strugglingChars = [];
    
    Object.keys(hiraganaData).forEach(char => {
        const data = confidants[char];
        
        // Character is considered struggling if:
        // 1. Has been attempted at least 3 times
        // 2. Success rate is below 50% OR has 2+ recent mistakes
        if (data.attempts >= 3) {
            const successRate = data.attempts > 0 ? (data.correct / data.attempts) : 0;
            
            if (successRate < 0.5 || data.recentMistakes >= 2) {
                strugglingChars.push(char);
            }
        }
    });
}

function getStrugglingCharactersMessage() {
    if (strugglingChars.length === 0) return '';
    
    const charList = strugglingChars.slice(0, 5).map(c => 
        `${c}(${hiraganaData[c]})`
    ).join(', ');
    
    return `
        <div style="background: rgba(255, 153, 0, 0.2); border: 2px solid #ff9900; padding: 12px; margin: 15px 0; border-radius: 4px;">
            <div style="color: #ff9900; font-family: 'Orbitron'; font-size: 14px; margin-bottom: 8px;">
                ⚠️ STRUGGLING CHARACTERS DETECTED
            </div>
            <div style="font-size: 13px; color: #ffcc66;">
                You're having trouble with: <strong>${charList}</strong>
                ${strugglingChars.length > 5 ? ` and ${strugglingChars.length - 5} more` : ''}
            </div>
            <div style="font-size: 12px; color: #888; margin-top: 8px;">
                Extra practice will be added to your next battles!
            </div>
        </div>
    `;
}

// ===================================
// SAVE/LOAD SYSTEM
// ===================================

function loadAllUsers() {
    const saved = localStorage.getItem('hiraganaPhantomThieves');
    if (saved) {
        allUsers = JSON.parse(saved);
    }
    
    if (!allUsers['default']) {
        allUsers['default'] = createNewUserData('JOKER');
    }
    
    const lastUser = localStorage.getItem('hptCurrentUser') || 'default';
    loadUser(lastUser);
}

function createNewUserData(name) {
    const userData = {
        codeName: name,
        playerLevel: 1,
        playerXp: 0,
        playerMaxXp: 100,
        playerSp: 50,
        playerMaxSp: 50,
        money: 0,
        confidants: {},
        completedPalaces: [],
        allLearnedChars: [],
        strugglingChars: [],
        encounteredVocab: [],
        gameDay: 1,
        createdAt: new Date().toISOString()
    };
    
    Object.keys(hiraganaData).forEach(char => {
        userData.confidants[char] = { 
            rank: 0, 
            maxRank: 10,
            points: 0,
            pointsToNext: 100,
            attempts: 0, 
            correct: 0,
            recentMistakes: 0
        };
    });
    
    return userData;
}

function loadUser(userId) {
    currentUser = userId;
    const data = allUsers[userId];
    
    if (!data) return;
    
    codeName = data.codeName || 'JOKER';
    playerLevel = data.playerLevel || 1;
    playerXp = data.playerXp || 0;
    playerMaxXp = data.playerMaxXp || 100;
    playerSp = data.playerSp || 50;
    playerMaxSp = data.playerMaxSp || 50;
    money = data.money || 0;
    confidants = data.confidants || {};
    completedPalaces = data.completedPalaces || [];
    allLearnedChars = data.allLearnedChars || [];
    strugglingChars = data.strugglingChars || [];
    encounteredVocab = data.encounteredVocab || [];
    gameDay = data.gameDay || 1;
    
    // Initialize missing data
    Object.keys(hiraganaData).forEach(char => {
        if (!confidants[char]) {
            confidants[char] = { 
                rank: 0, 
                maxRank: 10,
                points: 0,
                pointsToNext: 100,
                attempts: 0, 
                correct: 0,
                recentMistakes: 0
            };
        } else if (confidants[char].recentMistakes === undefined) {
            confidants[char].recentMistakes = 0;
        }
    });
    
    // Update struggle detection
    updateStrugglingChars();
    
    // Unlock palaces
    palaces.forEach(palace => {
        palace.unlocked = palace.id === 1 || completedPalaces.includes(palace.id - 1);
    });
    
    localStorage.setItem('hptCurrentUser', userId);
    updatePlayerStats();
    updateConfidentList();
    document.getElementById('codeName').textContent = codeName;
    document.getElementById('gameDate').textContent = `DAY ${String(gameDay).padStart(3, '0')}`;
}

function saveGame() {
    allUsers[currentUser] = {
        codeName,
        playerLevel,
        playerXp,
        playerMaxXp,
        playerSp,
        playerMaxSp,
        money,
        confidants,
        completedPalaces,
        allLearnedChars,
        strugglingChars,
        encounteredVocab,
        gameDay,
        lastPlayed: new Date().toISOString()
    };
    
    localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));
}

// ===================================
// UI UPDATE FUNCTIONS
// ===================================

function updatePlayerStats() {
    playerHp = playerMaxHp;
    
    document.getElementById('playerLevel').textContent = playerLevel;
    document.getElementById('currentHp').textContent = playerHp;
    document.getElementById('maxHp').textContent = playerMaxHp;
    document.getElementById('currentSp').textContent = playerSp;
    document.getElementById('maxSp').textContent = playerMaxSp;
    document.getElementById('currentXp').textContent = playerXp;
    document.getElementById('maxXp').textContent = playerMaxXp;
    document.getElementById('moneyAmount').textContent = `¥${money}`;
    
    const xpPercent = (playerXp / playerMaxXp) * 100;
    document.getElementById('xpBar').style.width = xpPercent + '%';
    
    const hpPercent = (playerHp / playerMaxHp) * 100;
    document.getElementById('hpBar').style.width = hpPercent + '%';
    
    const spPercent = (playerSp / playerMaxSp) * 100;
    document.getElementById('spBar').style.width = spPercent + '%';
}

function updateConfidentList() {
    const list = document.getElementById('confidantList');
    list.innerHTML = '';
    
    Object.keys(hiraganaData).forEach(char => {
        const data = confidants[char];
        const romanji = hiraganaData[char];
        const progressPercent = (data.points / data.pointsToNext) * 100;
        const isStruggling = strugglingChars.includes(char);
        
        const vocab = vocabularyDatabase[char] || [];
        const vocabHTML = vocab.slice(0, 3).map(v => 
            `<span class="vocab-word">${v.jp} (${v.translation})</span>`
        ).join(' ');
        
        // Build struggle indicator
        const struggleIndicator = isStruggling ? 
            '<span style="color: #ff9900; font-size: 16px; margin-left: 8px;" title="Struggling - needs practice">⚠️</span>' : '';
        
        const item = document.createElement('div');
        item.className = 'confidant-item' + (data.rank >= 10 ? ' mastered' : '') + (isStruggling ? ' struggling' : '');
        if (isStruggling) {
            item.style.borderLeftColor = '#ff9900';
            item.style.background = 'rgba(255, 153, 0, 0.05)';
        }
        
        item.innerHTML = `
            <div class="confidant-header">
                <div>
                    <span class="confidant-char">${char}</span>
                    <span class="confidant-romanji">${romanji}</span>
                    ${struggleIndicator}
                </div>
                <span class="confidant-rank">⭐${data.rank}/${data.maxRank}</span>
            </div>
            <div class="confidant-progress">
                <div class="confidant-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            ${vocabHTML ? `<div class="vocab-examples">Used in: ${vocabHTML}</div>` : ''}
            ${isStruggling ? `<div style="font-size: 11px; color: #ff9900; margin-top: 5px;">Success rate: ${Math.round((data.correct / data.attempts) * 100)}% (${data.attempts} attempts)</div>` : ''}
        `;
        list.appendChild(item);
    });
}

function updateBattleCheatsheet(characters) {
    const cheatsheet = document.getElementById('battleCheatsheet');
    const content = document.getElementById('cheatsheetContent');

    if (!characters || characters.length === 0) {
        cheatsheet.style.display = 'none';
        return;
    }

    cheatsheet.style.display = 'block';

    // Only update content, preserve visibility state
    const currentDisplay = content.style.display;
    content.innerHTML = characters.map(char => `
        <div class="cheatsheet-item">
            <span class="cheatsheet-char">${char}</span>
            <span class="cheatsheet-romanji">${hiraganaData[char]}</span>
        </div>
    `).join('');

    // Restore the visibility state that was set by toggle
    if (currentDisplay === 'none') {
        content.style.display = 'none';
    }
}

function toggleCheatsheet() {
    const content = document.getElementById('cheatsheetContent');
    const toggleBtn = document.getElementById('cheatsheetToggle');
    const isVisible = content.style.display !== 'none';

    if (isVisible) {
        content.style.display = 'none';
        toggleBtn.textContent = '👁️‍🗨️';
    } else {
        content.style.display = 'block';
        toggleBtn.textContent = '👁️';
    }
}

function addXP(amount) {
    playerXp += amount;
    if (playerXp >= playerMaxXp) {
        levelUp();
    }
    updatePlayerStats();
}

function addConfidantPoints(char, points) {
    const data = confidants[char];
    if (!data) {
        console.error(`No confidant data for character: ${char}`);
        return;
    }

    const oldRank = data.rank;
    data.points += points;

    while (data.points >= data.pointsToNext && data.rank < data.maxRank) {
        data.rank++;
        data.points -= data.pointsToNext;
        data.pointsToNext = Math.floor(data.pointsToNext * 1.2);

        if (data.rank >= 10 && !allLearnedChars.includes(char)) {
            allLearnedChars.push(char);
        }
    }

    if (data.rank > oldRank) {
        console.log(`${char} ranked up! ${oldRank} → ${data.rank} (⭐)`);
    }

    updateConfidentList();
}

function levelUp() {
    playerLevel++;
    playerXp = playerXp - playerMaxXp;
    playerMaxXp = Math.floor(playerMaxXp * 1.5);
    playerMaxHp += 20;
    playerMaxSp += 10;
    playerHp = playerMaxHp;
    playerSp = playerMaxSp;
    
    showLevelUp();
}

function showLevelUp() {
    // Show level up as a chat message instead of full-screen overlay
    const messageEl = document.getElementById('battleMessage');
    if (messageEl) {
        const levelUpMsg = `
            <div style="background: linear-gradient(135deg, #ffff00, #ffaa00); color: #000; padding: 12px; margin: 8px 0; border-radius: 4px; font-family: 'Orbitron'; text-align: center; animation: levelUpPulse 1s ease-in-out 2;">
                <div style="font-size: 18px; font-weight: 700; margin-bottom: 5px;">⭐ LEVEL UP! ⭐</div>
                <div style="font-size: 16px; font-weight: 700;">Level ${playerLevel}</div>
                <div style="font-size: 12px; margin-top: 8px;">HP +20 | SP +10 | MAX EXP INCREASED</div>
            </div>
        `;
        messageEl.innerHTML = levelUpMsg + messageEl.innerHTML;
    }
    updatePlayerStats();
}

// ===================================
// PALACE SELECTION
// ===================================

function showPalaceSelect() {
    gameMode = 'palace_select';
    document.getElementById('panelTitle').textContent = '📍 THIEVES\' DEN';
    updateBattleCheatsheet([]);
    
    const palacesHTML = palaces.map(palace => {
        // Training Dojo is ALWAYS unlocked and available
        if (palace.isTrainingDojo) {
            return `
                <div class="palace-card" onclick="startPalace(${palace.id})">
                    <div class="palace-icon">${palace.icon}</div>
                    <div class="palace-name">${palace.name}</div>
                    <div class="palace-progress">ALL 46 Characters</div>
                    <div class="palace-status">🎯 AVAILABLE</div>
                </div>
            `;
        }

        const isCompleted = completedPalaces.includes(palace.id);
        const statusClass = !palace.unlocked ? 'locked' : (isCompleted ? 'completed' : '');
        const statusText = !palace.unlocked ? '🔒 LOCKED' : (isCompleted ? '✅ INFILTRATED' : '🎯 AVAILABLE');

        const learnedCount = palace.characters.filter(c => allLearnedChars.includes(c)).length;

        return `
            <div class="palace-card ${statusClass}" onclick="${palace.unlocked ? `startPalace(${palace.id})` : ''}">
                <div class="palace-icon">${palace.icon}</div>
                <div class="palace-name">${palace.name}</div>
                <div class="palace-progress">${learnedCount}/${palace.characters.length} Confidants</div>
                <div class="palace-status">${statusText}</div>
            </div>
        `;
    }).join('');
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box">
            Welcome to the Metaverse, Phantom Thief! Choose a Palace to infiltrate and master its confidants. Each character you master strengthens your bond and unlocks new vocabulary!
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
            ${allLearnedChars.length >= 5 ? `
            <button class="persona-btn btn-skill" onclick="startVocabTraining()" style="width: 100%;">
                📚 VOCAB TRAINING
            </button>
            ` : `
            <button class="persona-btn btn-skill" onclick="alert('Learn 5+ characters first!')" style="width: 100%; opacity: 0.5; cursor: not-allowed;">
                📚 VOCAB TRAINING
            </button>
            `}
            <button class="persona-btn btn-magic" onclick="showBattleRoyaleMenu()" style="width: 100%; background: linear-gradient(135deg, #ff9900, #ff6600); border-color: #cc5500; box-shadow: 0 4px 0 #994400;">
                ⚔️ BATTLE ROYALE
            </button>
            <button class="persona-btn btn-item" onclick="showWordInventory()" style="width: 100%; background: linear-gradient(135deg, #9900ff, #6600cc); border-color: #7700dd; box-shadow: 0 4px 0 #4400aa;">
                📖 WORD INVENTORY (${encounteredVocab.length})
            </button>
        </div>
        
        <div class="palace-grid">
            ${palacesHTML}
        </div>
    `;
}

// ===================================
// PALACE INFILTRATION
// ===================================

function startPalace(palaceId) {
    currentPalace = palaces.find(p => p.id === palaceId);

    // If Training Dojo, select 3-7 random characters for focused training
    if (currentPalace.isTrainingDojo) {
        const allHiragana = Object.keys(hiraganaData);
        const count = Math.floor(Math.random() * 5) + 3; // 3-7 characters
        const shuffled = [...allHiragana].sort(() => Math.random() - 0.5);
        const selectedChars = shuffled.slice(0, count);

        currentPalace.characters = selectedChars;
        currentPalace.intro = `Today's training: ${count} characters (${selectedChars.join(' ')})! Learn them, then face 20 varied challenges including vocabulary and combos.`;
        currentPalace.trainingMode = true; // Flag for special question generation
    }

    currentCharIndex = 0;
    sessionCorrect = 0;
    gameDay++;
    document.getElementById('gameDate').textContent = `DAY ${String(gameDay).padStart(3, '0')}`;

    showPalaceIntro();
}

function showPalaceIntro() {
    gameMode = 'palace_intro';
    document.getElementById('panelTitle').textContent = `🎯 ${currentPalace.name.toUpperCase()}`;
    updateBattleCheatsheet([]);
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box">
            <div style="font-size: 20px; color: #ff0000; margin-bottom: 15px; font-family: 'Orbitron', sans-serif;">
                ${currentPalace.name}
            </div>
            ${currentPalace.intro}
            <div style="margin-top: 20px; color: #ffff00;">
                Ruler: <strong>${currentPalace.ruler}</strong><br>
                Targets: <strong>${currentPalace.characters.length} Shadows</strong>
            </div>
        </div>
        <button class="persona-btn btn-attack" onclick="learnCharacters()" style="width: 100%; margin-top: 20px;">
            ⚔️ BEGIN INFILTRATION
        </button>
    `;
}

// ===================================
// LEARNING PHASE
// ===================================

function learnCharacters() {
    if (currentCharIndex >= currentPalace.characters.length) {
        startBattle();
        return;
    }
    
    gameMode = 'learning';
    const char = currentPalace.characters[currentCharIndex];
    const romanji = hiraganaData[char];
    const vocab = vocabularyDatabase[char] || [];
    
    document.getElementById('panelTitle').textContent = '📖 ANALYSIS PHASE';
    updateBattleCheatsheet([char]);
    
    const vocabExamplesHTML = vocab.slice(0, 3).map(v => `
        <div class="vocab-example-item">
            <span class="vocab-example-jp">${v.jp}</span>
            <span class="vocab-example-romanji">${v.romanji}</span>
            <span class="vocab-example-translation">- ${v.translation}</span>
        </div>
    `).join('');
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box">
            Analyzing Shadow ${currentCharIndex + 1} of ${currentPalace.characters.length}...
        </div>

        <div class="metaverse-scene">
            <div style="background: #ff0000; color: white; padding: 5px 12px; font-size: 11px; display: inline-block; margin-bottom: 10px; font-family: Orbitron; font-weight: 700;">
                ✨ NEW LETTER
            </div>
            <div class="shadow-enemy">
                <div class="shadow-char">${char}</div>
                <div class="shadow-name">"${romanji}"</div>
                <div class="shadow-weakness">
                    WEAKNESS: Type the correct romanji to exploit!
                </div>
            </div>
        </div>

        ${vocab.length > 0 ? `
        <div class="vocab-example-list">
            <div class="vocab-example-title">🔍 COMMONLY USED IN:</div>
            ${vocabExamplesHTML}
        </div>
        ` : ''}

        <button class="persona-btn btn-attack" onclick="nextCharacter()" style="width: 100%; margin-top: 20px;" id="nextCharBtn">
            ${currentCharIndex < currentPalace.characters.length - 1 ? '⏭️ NEXT SHADOW (Press Enter)' : '⚔️ COMMENCE BATTLE! (Press Enter)'}
        </button>
    `;

    // Add Enter key support for navigation
    document.addEventListener('keypress', function handleLearningEnter(e) {
        if (e.key === 'Enter') {
            document.removeEventListener('keypress', handleLearningEnter);
            nextCharacter();
        }
    });
}

function nextCharacter() {
    currentCharIndex++;
    learnCharacters();
}


// ===================================
// BATTLE PHASE
// ===================================

function startBattle() {
    gameMode = 'battle';
    document.getElementById('panelTitle').textContent = '⚔️ BATTLE PHASE';

    // Reset vocab tracking for this battle to ensure variety
    usedVocabThisBattle = {};
    globalUsedVocab = [];

    // TRAINING DOJO MODE: Generate 20 varied questions
    if (currentPalace.trainingMode) {
        const dojoQuestions = generateDojoQuestions(currentPalace.characters);
        // Convert to battle plan format
        const battlePlan = dojoQuestions.map(q => ({
            char: q.char || q.vocab.jp[0], // Use first char as reference
            vocab: q.vocab || null,
            dojoQuestion: q // Store full question data
        }));

        window.battlePlan = battlePlan;
        currentBattleChars = battlePlan.map(q => q.char);
        currentCharIndex = 0;
        showBattle();
        return;
    }

    // STRUCTURED BATTLE: Each character gets exactly 3 questions
    // 1. Single character
    // 2. Vocab word 1
    // 3. Vocab word 2
    const battlePlan = []; // Store full question data including vocab

    // Build structured questions for each new character
    currentPalace.characters.forEach(char => {
        const vocab = vocabularyDatabase[char] || [];
        const availableChars = [...allLearnedChars, ...currentPalace.characters];

        console.log(`Character: ${char}, Available chars:`, availableChars, `Vocab count: ${vocab.length}`);

        // Filter vocab to only use words with characters we know
        let learnableVocab = vocab.filter(v => {
            const chars = extractHiraganaChars(v);
            const canLearn = chars.every(c => availableChars.includes(c));
            console.log(`  Checking ${v.jp} (${v.romanji}): chars=[${chars}], canLearn=${canLearn}`);
            return canLearn;
        });

        console.log(`  Learnable vocab for ${char}:`, learnableVocab.map(v => v.jp));

        // If not enough learnable vocab using only known chars,
        // allow vocab with mixed chars for variety
        if (learnableVocab.length < 2 && vocab.length >= 2) {
            console.log(`  Not enough strict vocab, using mixed vocab`);
            learnableVocab = vocab.slice(0, 2); // Use first 2 vocab words regardless
        }

        // Filter to get unique vocab words (not yet used globally)
        const uniqueVocab = learnableVocab.filter(v => !globalUsedVocab.includes(v.jp));

        // Plan: 1 single char + 2 vocab words
        battlePlan.push({ char: char, vocab: null }); // Single character question

        if (uniqueVocab.length >= 2) {
            // Add 2 different vocab words
            battlePlan.push({ char: char, vocab: uniqueVocab[0] });
            globalUsedVocab.push(uniqueVocab[0].jp);
            battlePlan.push({ char: char, vocab: uniqueVocab[1] });
            globalUsedVocab.push(uniqueVocab[1].jp);
        } else if (uniqueVocab.length === 1) {
            // Only 1 vocab available
            battlePlan.push({ char: char, vocab: uniqueVocab[0] });
            globalUsedVocab.push(uniqueVocab[0].jp);
            battlePlan.push({ char: char, vocab: null }); // Repeat single char
        } else {
            // No vocab available, repeat the character
            console.log(`  WARNING: No vocab for ${char}, using single char only`);
            battlePlan.push({ char: char, vocab: null });
            battlePlan.push({ char: char, vocab: null });
        }
    });

    // Add review questions with variety
    const previouslyLearned = allLearnedChars.filter(c =>
        !currentPalace.characters.includes(c)
    );

    if (previouslyLearned.length > 0) {
        const reviewCount = Math.min(
            Math.ceil(currentPalace.characters.length * 0.4),
            previouslyLearned.length
        );

        for (let i = 0; i < reviewCount; i++) {
            const randomChar = previouslyLearned[Math.floor(Math.random() * previouslyLearned.length)];
            const vocab = vocabularyDatabase[randomChar] || [];
            const availableChars = [...allLearnedChars, ...currentPalace.characters];
            const learnableVocab = vocab.filter(v => {
                const chars = extractHiraganaChars(v);
                return chars.every(c => availableChars.includes(c)) && !globalUsedVocab.includes(v.jp);
            });

            battlePlan.push({ char: randomChar, vocab: null }); // Single char
            if (learnableVocab.length > 0) {
                const vocabWord = learnableVocab[Math.floor(Math.random() * learnableVocab.length)];
                battlePlan.push({ char: randomChar, vocab: vocabWord });
                globalUsedVocab.push(vocabWord.jp);
            }
        }
    }

    // SHUFFLE the battle plan for variety - no more 3x same character in a row!
    shuffleArray(battlePlan);

    // Store battle plan globally
    window.battlePlan = battlePlan;
    currentBattleChars = battlePlan.map(q => q.char); // For compatibility with existing code
    currentCharIndex = 0;

    // Debug: Log battle plan
    console.log('Battle Plan (Shuffled):', battlePlan.map((q, i) => ({
        index: i,
        char: q.char,
        vocabWord: q.vocab ? q.vocab.jp : 'NONE',
        vocabRomanji: q.vocab ? q.vocab.romanji : 'single char'
    })));

    showBattle();
}

function showDojoQuestionInBattle(question) {
    const progress = currentCharIndex + 1;
    const total = currentBattleChars.length;

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 10px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #00ff88; font-family: 'Orbitron'; font-size: 14px;">📊 QUESTION ${progress}/${total}</span>
                <span style="color: #ffff00; font-family: 'Orbitron'; font-size: 14px;">✓ ${sessionCorrect} CORRECT</span>
            </div>
        </div>

        <div class="metaverse-scene" style="padding: 20px; margin: 10px 0;">
            <div class="shadow-enemy">
                <div class="shadow-char" style="font-size: 60px;">${question.display}</div>
                ${question.translation ? `<div class="shadow-name" style="color: #00ff88;">${question.translation}</div>` : ''}
            </div>
        </div>

        <div class="dialogue-box" style="padding: 10px; margin: 10px 0; font-size: 13px;">
            ${question.prompt}
        </div>

        ${isMobile ? createCustomKeyboard('checkTrainingAnswer') : `
            <input type="text" class="persona-input" id="battleInput" placeholder="Type romanji..." autocomplete="off" style="margin: 8px 0;">
        `}

        <div class="action-grid" style="gap: 8px; margin: 8px 0;">
            ${!isMobile ? `<button class="persona-btn btn-attack" onclick="checkTrainingAnswer()" style="padding: 10px; font-size: 13px;">⚔️ ATTACK</button>` : ''}
        </div>

        <div class="battle-message" id="battleMessage" style="min-height: 30px; margin: 8px 0;"></div>
    `;

    if (!isMobile) {
        const input = document.getElementById('battleInput');
        if (input) {
            input.focus();
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') checkTrainingAnswer();
            });
        }
    }
}

function checkTrainingAnswer() {
    const question = window.battlePlan[currentCharIndex].dojoQuestion;
    let userAnswer;

    if (isMobile) {
        userAnswer = getCustomAnswer();
    } else {
        const input = document.getElementById('battleInput');
        userAnswer = input ? input.value.trim().toLowerCase() : '';
    }

    const correctAnswer = question.answer.toLowerCase();
    const messageEl = document.getElementById('battleMessage');

    if (userAnswer === correctAnswer) {
        sessionCorrect++;
        messageEl.innerHTML = `<span class="damage-text">✓ CORRECT!</span>`;
        addXP(15);
        money += 50;
        updatePlayerStats();
    } else {
        messageEl.innerHTML = `<span class="damage-text">✗ WRONG! Answer: "${correctAnswer}"</span>`;
    }

    setTimeout(() => {
        clearCustomAnswer();
        currentCharIndex++;
        showBattle();
    }, 1500);
}

function showBattle() {
    if (currentCharIndex >= currentBattleChars.length) {
        completePalace();
        return;
    }

    // TRAINING DOJO MODE: Use dojo question format
    if (currentPalace.trainingMode && window.battlePlan[currentCharIndex].dojoQuestion) {
        showDojoQuestionInBattle(window.battlePlan[currentCharIndex].dojoQuestion);
        return;
    }

    currentChar = currentBattleChars[currentCharIndex];
    currentVocab = null;
    hintUsed = false;
    choicesShown = false;

    const isReview = !currentPalace.characters.includes(currentChar);
    const isStruggling = strugglingChars.includes(currentChar);

    let badgeHTML = '';
    if (isStruggling) {
        badgeHTML = '<div style="background: #ff9900; color: #000; padding: 5px 12px; font-size: 11px; display: inline-block; margin-bottom: 10px; font-family: Orbitron; font-weight: 700;">⚠️ STRUGGLING</div>';
    } else if (isReview) {
        badgeHTML = '<div style="background: #0066ff; color: white; padding: 5px 12px; font-size: 11px; display: inline-block; margin-bottom: 10px; font-family: Orbitron;">📚 REVIEW</div>';
    } else {
        badgeHTML = '<div style="background: #ff0000; color: white; padding: 5px 12px; font-size: 11px; display: inline-block; margin-bottom: 10px; font-family: Orbitron;">⭐ NEW</div>';
    }

    // USE BATTLE PLAN: Get pre-determined vocab for this question
    if (window.battlePlan && window.battlePlan[currentCharIndex]) {
        currentVocab = window.battlePlan[currentCharIndex].vocab;

        // Track encountered vocab for inventory
        if (currentVocab && !encounteredVocab.includes(currentVocab.jp)) {
            encounteredVocab.push(currentVocab.jp);
        }
    }
    
    // Update cheatsheet with current battle characters
    const cheatChars = currentVocab ? extractHiraganaChars(currentVocab) : [currentChar];
    updateBattleCheatsheet(cheatChars);

    // Build unified display with highlighted new characters
    let displayContent = '';
    if (currentVocab) {
        // Highlight new characters in the vocab word
        const vocabChars = currentVocab.jp.split('');
        const highlightedWord = vocabChars.map(char => {
            if (currentPalace.characters.includes(char)) {
                // New character - highlight with red glow
                return `<span style="color: #ff0000; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000; font-weight: 700;">${char}</span>`;
            } else {
                return char;
            }
        }).join('');

        displayContent = `
            <div class="shadow-char" style="font-size: 42px; margin-bottom: 8px;">${highlightedWord}</div>
            <div class="shadow-weakness" style="margin-top: 8px; color: #ffff00; font-size: 16px;">
                ${currentVocab.translation}
            </div>
        `;
    } else {
        // Single character display
        displayContent = `
            <div class="shadow-char" style="font-size: 56px;">${currentChar}</div>
        `;
    }

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="metaverse-scene" style="margin-bottom: 10px;">
            ${badgeHTML}
            <div class="shadow-enemy" style="padding: 15px;">
                ${displayContent}
                <div class="shadow-name" style="margin-top: 8px;">SHADOW ${currentCharIndex + 1}/${currentBattleChars.length}</div>
            </div>
        </div>

        <div class="dialogue-box" style="padding: 10px; margin: 10px 0; font-size: 13px;">
            ${currentVocab ?
                `Type the romanji for this word to perform an All-Out Attack!` :
                `What sound does this Shadow make? Type the romanji to attack!`}
        </div>

        ${isMobile ? createCustomKeyboard('performAttack') : `
            <input type="text" class="persona-input" id="battleInput" placeholder="Type romanji..." autocomplete="off" style="margin: 8px 0;">
        `}

        <div class="action-grid" style="gap: 8px; margin: 8px 0;">
            ${!isMobile ? `<button class="persona-btn btn-attack" onclick="performAttack()" style="padding: 10px; font-size: 13px;">⚔️ ATTACK (Enter)</button>` : ''}
            <button class="persona-btn btn-skill" id="choiceBtn" onclick="showChoices()" style="padding: 10px; font-size: 13px;">🎲 ANALYZE (-5 SP)</button>
            <button class="persona-btn btn-item" id="hintBtn" onclick="useHint()" style="padding: 10px; font-size: 13px;">💡 REVEAL (-10 SP)</button>
            <button class="persona-btn btn-guard" onclick="skipShadow()" style="padding: 10px; font-size: 13px;">⏭️ RETREAT</button>
        </div>

        <div id="choiceArea" style="display: none; margin: 10px 0;">
            <div style="text-align: center; font-family: 'Orbitron'; color: #00ff00; margin-bottom: 8px; font-size: 12px;">
                SELECT THE CORRECT ANSWER:
            </div>
            <div id="choiceButtons" class="action-grid" style="gap: 8px;"></div>
        </div>

        <div class="battle-message" id="battleMessage" style="min-height: 30px; margin: 8px 0;"></div>
    `;
    
    // Only focus on input if not mobile (mobile uses custom keyboard)
    if (!isMobile) {
        const battleInput = document.getElementById('battleInput');
        if (battleInput) {
            battleInput.focus();
            battleInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performAttack();
            });
        }
    }
    
    updateHintButtons();
}

function updateHintButtons() {
    const choiceBtn = document.getElementById('choiceBtn');
    const hintBtn = document.getElementById('hintBtn');
    
    if (playerSp < 5) {
        choiceBtn.disabled = true;
        choiceBtn.classList.add('btn-disabled');
    }
    if (playerSp < 10) {
        hintBtn.disabled = true;
        hintBtn.classList.add('btn-disabled');
    }
}

function performAttack() {
    const messageEl = document.getElementById('battleMessage');

    // Get answer from custom keyboard (mobile) or input field (desktop)
    let userAnswer;
    if (isMobile) {
        userAnswer = getCustomAnswer();
    } else {
        const input = document.getElementById('battleInput');
        userAnswer = input ? input.value.trim().toLowerCase() : '';
    }

    // Validate input
    if (!userAnswer) {
        messageEl.innerHTML = `<span class="damage-text">⚠️ Please enter an answer!</span>`;
        if (!isMobile) {
            const input = document.getElementById('battleInput');
            if (input) input.focus();
        }
        return;
    }

    const correctAnswer = currentVocab ?
        currentVocab.romanji.toLowerCase() :
        hiraganaData[currentChar].toLowerCase();

    confidants[currentChar].attempts++;
    
    // Calculate similarity
    const similarity = calculateSimilarity(userAnswer, correctAnswer);
    
    let wasCorrect = false;
    
    if (userAnswer === correctAnswer) {
        wasCorrect = true;
        // Perfect answer
        let pointsGained = 50;
        let xpGained = 20;
        let moneyGained = 100;
        
        if (hintUsed) {
            pointsGained = 20;
            xpGained = 10;
            moneyGained = 50;
        } else if (choicesShown) {
            pointsGained = 35;
            xpGained = 15;
            moneyGained = 75;
        }
        
        if (currentVocab) {
            // Bonus for vocab questions
            pointsGained += 20;
            xpGained += 10;
            moneyGained += 50;
            messageEl.innerHTML = `<span class="crit-text">⚡ ALL-OUT ATTACK! +${xpGained} XP, ¥${moneyGained} ⚡</span>`;
            showAllOutAttack();
        } else {
            messageEl.innerHTML = `<span class="damage-text">✓ CRITICAL HIT! +${xpGained} XP, ¥${moneyGained}</span>`;
        }
        
        confidants[currentChar].correct++;
        addConfidantPoints(currentChar, pointsGained);
        sessionCorrect++;
        addXP(xpGained);
        money += moneyGained;
    } else if (similarity >= 60 && !hintUsed) {
        wasCorrect = true; // Partial credit counts as success
        // Partial credit - close but not perfect
        const partialPoints = Math.floor(30 * (similarity / 100));
        const partialXP = Math.floor(10 * (similarity / 100));
        const partialMoney = Math.floor(50 * (similarity / 100));
        
        confidants[currentChar].correct += 0.5; // Half credit
        addConfidantPoints(currentChar, partialPoints);
        sessionCorrect += 0.5;
        addXP(partialXP);
        money += partialMoney;
        
        messageEl.innerHTML = `<span class="partial-text">~ PARTIAL HIT! Close! Answer: "${correctAnswer}" (+${partialXP} XP, ¥${partialMoney})</span>`;
    } else {
        wasCorrect = false;
        // Wrong answer
        messageEl.innerHTML = `<span class="damage-text">✗ MISS! Correct answer: "${correctAnswer}"</span>`;
        playerSp = Math.max(0, playerSp - 5);
        updatePlayerStats();
    }
    
    // Update struggle tracking
    updateStruggleTracking(currentChar, wasCorrect);

    // Disable input and buttons
    if (!isMobile) {
        const input = document.getElementById('battleInput');
        if (input) input.disabled = true;
    }
    const choiceBtn = document.getElementById('choiceBtn');
    const hintBtn = document.getElementById('hintBtn');
    const skipBtn = document.querySelector('.btn-guard');
    if (choiceBtn) choiceBtn.disabled = true;
    if (hintBtn) hintBtn.disabled = true;
    if (skipBtn) skipBtn.disabled = true;

    // AUTO-CONTINUE: Show message for 2 seconds, then continue
    // Keep the last activity message visible
    setTimeout(() => {
        clearCustomAnswer(); // Clear keyboard for next question
        continueToNextBattle();
    }, 2000);

    saveGame();
}

function continueToNextBattle() {
    currentCharIndex++;
    showBattle();
}

function showChoices() {
    if (playerSp < 5 || choicesShown) return;
    
    playerSp -= 5;
    updatePlayerStats();
    choicesShown = true;
    
    const correctAnswer = currentVocab ? 
        currentVocab.romanji : 
        hiraganaData[currentChar];
    
    const allAnswers = currentVocab ? 
        Object.values(vocabularyDatabase).flat().map(v => v.romanji) :
        Object.values(hiraganaData);
    
    const wrongAnswers = allAnswers.filter(a => a !== correctAnswer);
    shuffleArray(wrongAnswers);
    const choices = [correctAnswer, ...wrongAnswers.slice(0, 3)];
    shuffleArray(choices);
    
    const choiceArea = document.getElementById('choiceArea');
    const choiceButtons = document.getElementById('choiceButtons');
    
    choiceButtons.innerHTML = choices.map(choice => 
        `<button class="persona-btn btn-skill" onclick="selectChoice('${choice}')">
            ${choice}
        </button>`
    ).join('');
    
    choiceArea.style.display = 'block';
    document.getElementById('choiceBtn').disabled = true;
    
    const messageEl = document.getElementById('battleMessage');
    messageEl.innerHTML = `<span class="heal-text">ANALYSIS COMPLETE! -5 SP</span>`;
}

function selectChoice(choice) {
    const input = document.getElementById('battleInput');
    input.value = choice;
    input.focus();
}

function useHint() {
    if (playerSp < 10 || hintUsed) return;
    
    playerSp -= 10;
    updatePlayerStats();
    hintUsed = true;
    
    const correctAnswer = currentVocab ? 
        currentVocab.romanji : 
        hiraganaData[currentChar];
    
    const messageEl = document.getElementById('battleMessage');
    messageEl.innerHTML = `<span class="heal-text">💡 ANSWER REVEALED: ${correctAnswer} (-10 SP)</span>`;
    document.getElementById('hintBtn').disabled = true;
    
    const input = document.getElementById('battleInput');
    input.value = correctAnswer;
    input.focus();
}

function skipShadow() {
    const messageEl = document.getElementById('battleMessage');
    messageEl.innerHTML = `<span style="color: #888;">Retreated from battle...</span>`;
    
    setTimeout(() => {
        currentCharIndex++;
        showBattle();
    }, 1000);
}

function showAllOutAttack() {
    // Removed flash animation - just show message inline
    return;
}

function completePalace() {
    if (!completedPalaces.includes(currentPalace.id)) {
        completedPalaces.push(currentPalace.id);
        
        if (currentPalace.id < palaces.length) {
            palaces[currentPalace.id].unlocked = true;
        }
    }
    
    playerSp = playerMaxSp; // Restore SP
    const accuracy = Math.round((sessionCorrect / currentBattleChars.length) * 100);
    const reward = currentPalace.characters.length * 500;
    money += reward;

    // Calculate practiced characters from all completed palaces
    const practicedChars = new Set();
    completedPalaces.forEach(palaceId => {
        const palace = palaces.find(p => p.id === palaceId);
        if (palace) {
            palace.characters.forEach(c => practicedChars.add(c));
        }
    });

    // Show new confidant ranks for current palace characters
    const newRanks = currentPalace.characters.map(char => {
        const rank = confidants[char].rank;
        return `${char}(⭐${rank})`;
    }).join(' ');

    saveGame();

    document.getElementById('panelTitle').textContent = '🎉 INFILTRATION COMPLETE';
    updateBattleCheatsheet([]);

    const strugglingMessage = getStrugglingCharactersMessage();

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="text-align: center; padding: 40px;">
            <div style="font-size: 36px; color: #ff0000; margin-bottom: 20px; font-family: 'Orbitron';">
                🎉 TREASURE SECURED! 🎉
            </div>
            <div style="font-size: 20px; color: #ffff00; margin: 20px 0;">
                ${currentPalace.name} Infiltrated!
            </div>
            <div style="font-size: 16px; color: #888; margin: 30px 0; line-height: 2;">
                Battles Won: ${sessionCorrect.toFixed(1)}/${currentBattleChars.length}<br>
                Accuracy: ${accuracy}%<br>
                <span style="color: #ffff00; font-size: 20px;">Reward: ¥${reward}</span><br>
                <span style="color: #00ff00;">Characters Practiced: ${practicedChars.size}/46</span><br>
                <span style="color: #888; font-size: 13px;">New Ranks: ${newRanks}</span>
            </div>
        </div>
        ${strugglingMessage}
        <button class="persona-btn btn-attack" onclick="showPalaceSelect()" style="width: 100%; margin-top: 20px;">
            ← RETURN TO THIEVES' DEN
        </button>
    `;
}


// ===================================
// VOCABULARY TRAINING MODE
// ===================================

function startVocabTraining() {
    gameMode = 'vocab_training';
    document.getElementById('panelTitle').textContent = '📚 VOCABULARY TRAINING';
    
    // Collect all available vocab
    const availableVocab = [];
    allLearnedChars.forEach(char => {
        const vocab = vocabularyDatabase[char] || [];
        availableVocab.push(...vocab);
    });
    
    if (availableVocab.length === 0) {
        alert('Learn more characters first!');
        showPalaceSelect();
        return;
    }
    
    shuffleArray(availableVocab);
    currentBattleChars = availableVocab.slice(0, Math.min(10, availableVocab.length));
    currentCharIndex = 0;
    sessionCorrect = 0;
    
    showVocabBattle();
}

function showVocabBattle() {
    if (currentCharIndex >= currentBattleChars.length) {
        completeVocabTraining();
        return;
    }
    
    currentVocab = currentBattleChars[currentCharIndex];
    hintUsed = false;
    choicesShown = false;
    
    // Update cheatsheet with characters from current vocab
    const cheatChars = extractHiraganaChars(currentVocab);
    updateBattleCheatsheet(cheatChars);
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box">
            Vocabulary Training: Question ${currentCharIndex + 1}/${currentBattleChars.length}
        </div>
        
        <div class="vocab-display">
            <div class="vocab-main">
                <div class="vocab-jp">${currentVocab.jp}</div>
                <div class="vocab-translation">${currentVocab.translation}</div>
            </div>
            <div class="vocab-breakdown">
                <div class="vocab-breakdown-title">CHARACTER BREAKDOWN:</div>
                <div class="vocab-char-breakdown">
                    ${currentVocab.breakdown.map(b => 
                        `<div class="vocab-char-item"><span class="char">${b.split('(')[0]}</span>${b.split('(')[1].replace(')', '')}</div>`
                    ).join('')}
                </div>
            </div>
        </div>
        
        <div class="dialogue-box">
            Type the complete romanji for this word!
        </div>
        
        <input type="text" class="persona-input" id="battleInput" placeholder="Type romanji..." autocomplete="off">
        
        <div class="action-grid">
            <button class="persona-btn btn-attack" onclick="performVocabAttack()">⚔️ SUBMIT</button>
            <button class="persona-btn btn-item" id="hintBtn" onclick="useVocabHint()">💡 REVEAL (-5 SP)</button>
        </div>
        
        <div class="battle-message" id="battleMessage"></div>
    `;
    
    // Only focus on input if not mobile (mobile uses custom keyboard)
    if (!isMobile) {
        const battleInput = document.getElementById('battleInput');
        if (battleInput) {
            battleInput.focus();
            battleInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performVocabAttack();
            });
        }
    }
}

function performVocabAttack() {
    const input = document.getElementById('battleInput');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = currentVocab.romanji.toLowerCase();
    const messageEl = document.getElementById('battleMessage');
    
    // Calculate similarity
    const similarity = calculateSimilarity(userAnswer, correctAnswer);
    
    if (userAnswer === correctAnswer) {
        // Perfect answer
        const xpGained = hintUsed ? 15 : 25;
        const moneyGained = hintUsed ? 100 : 200;
        
        sessionCorrect++;
        addXP(xpGained);
        money += moneyGained;
        
        messageEl.innerHTML = `<span class="damage-text">✓ PERFECT! +${xpGained} EXP, ¥${moneyGained}</span>`;
    } else if (similarity >= 70 && !hintUsed) {
        // Partial credit for vocabulary
        const partialXP = Math.floor(15 * (similarity / 100));
        const partialMoney = Math.floor(100 * (similarity / 100));
        
        sessionCorrect += 0.6;
        addXP(partialXP);
        money += partialMoney;
        
        messageEl.innerHTML = `<span class="partial-text">~ CLOSE! Answer: "${correctAnswer}" (+${partialXP} XP, ¥${partialMoney})</span>`;
    } else {
        // Wrong answer
        messageEl.innerHTML = `<span class="damage-text">✗ INCORRECT! Answer: "${correctAnswer}"</span>`;
    }
    
    // Clear input and prepare for next question
    input.value = '';
    input.placeholder = 'Press Enter to continue...';
    input.disabled = false;
    input.focus();
    
    // Disable hint button
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) hintBtn.disabled = true;
    
    // Add Enter key listener for continuing
    input.onkeypress = (e) => {
        if (e.key === 'Enter') {
            continueVocabTraining();
        }
    };
    
    saveGame();
}

function continueVocabTraining() {
    currentCharIndex++;
    showVocabBattle();
}

function useVocabHint() {
    if (playerSp < 5 || hintUsed) return;
    
    playerSp -= 5;
    updatePlayerStats();
    hintUsed = true;
    
    const messageEl = document.getElementById('battleMessage');
    messageEl.innerHTML = `<span class="heal-text">💡 ${currentVocab.romanji} (-5 SP)</span>`;
    document.getElementById('hintBtn').disabled = true;
    
    const input = document.getElementById('battleInput');
    input.value = currentVocab.romanji;
    input.focus();
}

function completeVocabTraining() {
    playerSp = playerMaxSp;
    const accuracy = Math.round((sessionCorrect / currentBattleChars.length) * 100);
    const reward = Math.floor(sessionCorrect * 150);
    money += reward;
    
    saveGame();
    
    updateBattleCheatsheet([]);
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="text-align: center; padding: 40px;">
            <div style="font-size: 36px; color: #00ff00; margin-bottom: 20px; font-family: 'Orbitron';">
                📚 TRAINING COMPLETE! 📚
            </div>
            <div style="font-size: 16px; color: #888; margin: 30px 0; line-height: 2;">
                Correct: ${sessionCorrect.toFixed(1)}/${currentBattleChars.length}<br>
                Accuracy: ${accuracy}%<br>
                <span style="color: #ffff00; font-size: 20px;">Reward: ¥${reward}</span>
            </div>
        </div>
        <button class="persona-btn btn-attack" onclick="showPalaceSelect()" style="width: 100%; margin-top: 20px;">
            ← RETURN TO THIEVES' DEN
        </button>
        <button class="persona-btn btn-skill" onclick="startVocabTraining()" style="width: 100%; margin-top: 10px;">
            🔄 TRAIN AGAIN
        </button>
    `;
}

// ===================================
// USER MANAGEMENT
// ===================================

function showUserMenu() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.onclick = (e) => {
        if (e.target === overlay) closeUserMenu();
    };
    
    const userListHTML = Object.keys(allUsers).map(userId => {
        const user = allUsers[userId];
        const isActive = userId === currentUser;
        return `
            <div class="user-item ${isActive ? 'active' : ''}" onclick="event.stopPropagation();">
                <div class="user-info" onclick="switchUser('${userId}')">
                    <div class="user-name">${user.codeName}</div>
                    <div class="user-stats">
                        LVL ${user.playerLevel} | 
                        Day ${user.gameDay || 1} | 
                        ${user.allLearnedChars?.length || 0}/46 mastered
                    </div>
                </div>
                <div class="user-actions">
                    <button class="btn-small btn-export" onclick="copyShareCode('${userId}')" title="Copy Share Code">📋</button>
                    <button class="btn-small btn-export" onclick="exportUser('${userId}')" title="Download File">💾</button>
                    ${userId !== 'default' ? `<button class="btn-small btn-delete" onclick="deleteUser('${userId}')" title="Delete">🗑️</button>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    overlay.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation();">
            <div class="modal-header">👤 PHANTOM THIEF ROSTER</div>
            <div class="modal-body">
                <div class="section-title">CREATE NEW THIEF</div>
                <input type="text" class="persona-input" id="newUserName" placeholder="Enter codename..." maxlength="20" style="margin: 10px 0;">
                <button class="persona-btn btn-attack" onclick="createNewUser()" style="width: 100%;">
                    ⚔️ RECRUIT THIEF
                </button>
                
                <div class="section-title" style="margin-top: 30px;">📲 CROSS-DEVICE SYNC</div>
                <button class="persona-btn btn-skill" onclick="showShareCodeInput()" style="width: 100%; margin-bottom: 10px;">
                    📋 LOAD FROM SHARE CODE
                </button>

                <div class="section-title" style="margin-top: 20px;">IMPORT SAVE DATA</div>
                <input type="file" id="importFile" accept=".json" onchange="importUser(event)">
                <label for="importFile" class="file-upload-label">
                    📂 IMPORT FROM FILE
                </label>
                
                <div class="section-title">YOUR PHANTOM THIEVES</div>
                <div class="user-list">
                    ${userListHTML}
                </div>
                
                <button class="persona-btn btn-attack" onclick="closeUserMenu()" style="width: 100%; margin-top: 20px;">
                    ← BACK TO METAVERSE
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

function closeUserMenu() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.remove();
}

function createNewUser() {
    const input = document.getElementById('newUserName');
    const name = input.value.trim();
    
    if (!name) {
        alert('Please enter a codename!');
        return;
    }
    
    const userId = 'user_' + Date.now();
    allUsers[userId] = createNewUserData(name);
    localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));
    
    switchUser(userId);
    closeUserMenu();
}

function switchUser(userId) {
    if (userId === currentUser) {
        closeUserMenu();
        return;
    }
    
    loadUser(userId);
    showPalaceSelect();
    closeUserMenu();
}

function deleteUser(userId) {
    if (userId === 'default') {
        alert('Cannot delete default user!');
        return;
    }
    
    if (!confirm(`Delete "${allUsers[userId].codeName}"?`)) {
        return;
    }
    
    delete allUsers[userId];
    localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));
    
    if (currentUser === userId) {
        loadUser('default');
        showPalaceSelect();
    }
    
    closeUserMenu();
    showUserMenu();
}

function exportUser(userId) {
    const userData = allUsers[userId];
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `phantom-thief-${userData.codeName}-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(link.href);
}

function importUser(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const userData = JSON.parse(e.target.result);
            
            if (!userData.codeName || !userData.confidants) {
                alert('Invalid save file!');
                return;
            }
            
            const userId = 'user_' + Date.now();
            allUsers[userId] = userData;
            localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));
            
            alert(`"${userData.codeName}" recruited successfully!`);
            closeUserMenu();
            showUserMenu();
        } catch (error) {
            alert('Error reading save file: ' + error.message);
        }
    };
    
    reader.readAsText(file);
}

// ===================================
// CROSS-DEVICE SYNC - SHARE CODES
// ===================================

// Helper: Encode string to base64 (UTF-8 safe)
function stringToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');
    return btoa(binString);
}

// Helper: Decode base64 to string (UTF-8 safe)
function base64ToString(base64) {
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (char) => char.codePointAt(0));
    return new TextDecoder().decode(bytes);
}

function generateShareCode(userId) {
    const userData = allUsers[userId];
    const dataStr = JSON.stringify(userData);
    return stringToBase64(dataStr);
}

function copyShareCode(userId) {
    const code = generateShareCode(userId);

    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
        alert(`✓ Share code copied to clipboard!\n\nUse this code on another device to sync your progress.\n\nCode length: ${code.length} characters`);
    }).catch(() => {
        // Fallback: show in prompt
        prompt('Copy this code to sync your progress on another device:', code);
    });
}

function showShareCodeInput() {
    const code = prompt('Paste your share code here to load your progress from another device:');

    if (!code) return;

    try {
        // Decode the share code
        const dataStr = base64ToString(code.trim());
        const userData = JSON.parse(dataStr);

        if (!userData.codeName || !userData.confidants) {
            alert('❌ Invalid share code! Please check and try again.');
            return;
        }

        const userId = 'user_' + Date.now();
        allUsers[userId] = userData;
        localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));

        alert(`✓ "${userData.codeName}" synced successfully from share code!`);
        closeUserMenu();
        showUserMenu();
    } catch (error) {
        alert('❌ Error reading share code: ' + error.message);
    }
}

// URL-based auto-sync (optional: load from URL parameter)
function checkURLSync() {
    const urlParams = new URLSearchParams(window.location.search);
    const syncCode = urlParams.get('sync');

    if (syncCode) {
        try {
            const dataStr = base64ToString(syncCode);
            const userData = JSON.parse(dataStr);

            if (userData.codeName && userData.confidants) {
                const userId = 'user_' + Date.now();
                allUsers[userId] = userData;
                localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));

                alert(`✓ Progress auto-synced from URL!\nWelcome back, ${userData.codeName}!`);

                // Clean URL
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        } catch (error) {
            console.error('Failed to sync from URL:', error);
        }
    }
}

function getShareableURL(userId) {
    const code = generateShareCode(userId);
    const baseURL = window.location.origin + window.location.pathname;
    const shareURL = `${baseURL}?sync=${encodeURIComponent(code)}`;

    navigator.clipboard.writeText(shareURL).then(() => {
        alert(`✓ Shareable URL copied to clipboard!\n\nOpen this URL on another device to auto-sync your progress.\n\nNote: The URL is very long. For shorter codes, use the "Copy Share Code" option instead.`);
    }).catch(() => {
        prompt('Copy this URL to auto-sync on another device:', shareURL);
    });
}

// ===================================
// INITIALIZE GAME
// ===================================

loadAllUsers();
checkURLSync(); // Check for URL-based sync
showPalaceSelect();

// ===================================
// MOBILE KEYBOARD FIX
// ===================================

// Prevent page scrolling when keyboard appears on mobile
document.addEventListener('focusin', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        // Prevent default scroll behavior
        e.preventDefault();

        // Small timeout to ensure keyboard is shown
        setTimeout(() => {
            // Scroll to top to prevent any unwanted scrolling
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
        }, 100);
    }
});

// Prevent body scroll when input is focused
document.addEventListener('touchmove', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.stopPropagation();
    }
}, { passive: false });

// Keep viewport locked on iOS when keyboard appears
window.addEventListener('resize', function() {
    // Prevent viewport changes from causing scroll
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
});

// Visual Viewport API - better keyboard handling on iOS
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        // Keep page locked when keyboard appears
        const viewport = window.visualViewport;
        document.documentElement.style.setProperty('--viewport-height', `${viewport.height}px`);

        // Prevent scroll
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    window.visualViewport.addEventListener('scroll', (e) => {
        // Prevent visual viewport scroll
        e.preventDefault();
        window.scrollTo(0, 0);
    });
}

// Blur input when scrolling starts (extra safety)
let scrollTimeout;
document.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
            // Keep position locked
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
        }
    }, 10);
}, { passive: false });

// ===================================
// CUSTOM MOBILE KEYBOARD
// ===================================

let customKeyboardAnswer = '';

// Improved mobile detection
function detectMobile() {
    // Check for ?mobile=true in URL for testing
    const urlParams = new URLSearchParams(window.location.search);
    const forceMobile = urlParams.get('mobile') === 'true';

    const isMobileWidth = window.innerWidth <= 768;
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isMobileDevice = forceMobile || isMobileWidth || isMobileUA;

    console.log('🔍 Mobile Detection:', {
        width: window.innerWidth,
        forceMobile: forceMobile,
        isMobileWidth,
        isMobileUA,
        result: isMobileDevice
    });

    if (forceMobile) {
        console.log('⚠️ MOBILE MODE FORCED VIA URL PARAMETER');
        // Inject CSS to force mobile layout
        const style = document.createElement('style');
        style.textContent = `
            /* Force mobile styles for testing */
            .game-header { display: none !important; }
            .persona-input { display: none !important; }
            .custom-keyboard { display: block !important; }
            .custom-answer-display { display: block !important; }
            .action-grid .btn-attack { display: none !important; } /* Only hide attack button in battles */
            html { max-width: 768px; margin: 0 auto; }
        `;
        document.head.appendChild(style);
    }

    return isMobileDevice;
}

const isMobile = detectMobile();

// QWERTY keyboard layout
const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

function createCustomKeyboard(targetFunction) {
    console.log('⌨️ Creating custom keyboard, isMobile:', isMobile);
    if (!isMobile) {
        console.log('❌ Not mobile, skipping keyboard');
        return '';
    }

    console.log('✅ Rendering custom keyboard for:', targetFunction);
    const keyboardHTML = `
        <div class="custom-answer-display" id="customAnswerDisplay">
            ${customKeyboardAnswer || '(tap keys to type)'}
        </div>
        <div class="custom-keyboard">
            ${keyboardLayout.map((row, idx) => `
                <div class="keyboard-row">
                    ${row.map(key => `
                        <button class="keyboard-key ${idx === 0 ? 'keyboard-key-large' : ''}" onclick="addToCustomAnswer('${key}')">${key}</button>
                    `).join('')}
                    ${idx === keyboardLayout.length - 1 ? `
                        <button class="keyboard-key backspace" onclick="backspaceCustomAnswer()">⌫</button>
                        <button class="keyboard-key special" onclick="${targetFunction}()">✓ OK</button>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;

    return keyboardHTML;
}

function addToCustomAnswer(char) {
    console.log('➕ Adding to answer:', char);
    customKeyboardAnswer += char;
    console.log('📝 Current answer:', customKeyboardAnswer);
    updateCustomAnswerDisplay();
}

function backspaceCustomAnswer() {
    customKeyboardAnswer = customKeyboardAnswer.slice(0, -1);
    updateCustomAnswerDisplay();
}

function clearCustomAnswer() {
    customKeyboardAnswer = '';
    updateCustomAnswerDisplay();
}

function getCustomAnswer() {
    return customKeyboardAnswer.trim().toLowerCase();
}

function updateCustomAnswerDisplay() {
    const display = document.getElementById('customAnswerDisplay');
    if (display) {
        display.textContent = customKeyboardAnswer || '(tap keys to type)';
    }
}


// ===================================
// BATTLE ROYALE MODE
// ===================================

let royaleMode = 'easy'; // 'easy' or 'hard'
let royaleLives = 5;
let royaleScore = 0;
let royaleStreak = 0;
let royaleBestStreak = 0;

function showBattleRoyaleMenu() {
    gameMode = 'battle_royale_menu';
    document.getElementById('panelTitle').textContent = '⚔️ BATTLE ROYALE';
    updateBattleCheatsheet([]);

    // Check if user has completed at least one palace
    if (completedPalaces.length === 0) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="dialogue-box" style="text-align: center; padding: 40px;">
                <div style="font-size: 24px; color: #ff9900; margin-bottom: 20px; font-family: 'Orbitron';">
                    ⚔️ BATTLE ROYALE LOCKED
                </div>
                <div style="font-size: 14px; color: #888;">
                    Complete your first palace to unlock Battle Royale!<br>
                    Finish the Castle of Vowels, then return for the ultimate challenge.
                </div>
            </div>
            <button class="persona-btn btn-attack" onclick="showPalaceSelect()" style="width: 100%; margin-top: 20px;">
                ← BACK TO THIEVES' DEN
            </button>
        `;
        return;
    }

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="text-align: center;">
            <div style="font-size: 24px; color: #ff9900; margin-bottom: 15px; font-family: 'Orbitron';">
                ⚔️ BATTLE ROYALE ⚔️
            </div>
            <div style="font-size: 14px; line-height: 1.8;">
                Face an endless gauntlet of random shadows!<br>
                Each mistake costs a life. Lose all 5 lives and it's game over!<br>
                How long can you survive?
            </div>
        </div>
        
        <div class="story-box" style="margin: 20px 0;">
            <div style="color: #00ff00; font-size: 16px; margin-bottom: 15px; font-family: 'Orbitron';">
                📊 YOUR BEST RUNS
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.8;">
                Easy Mode Best Streak: <span style="color: #ffff00;">${localStorage.getItem('royaleBestEasy') || 0}</span><br>
                Hard Mode Best Streak: <span style="color: #ff0000;">${localStorage.getItem('royaleBestHard') || 0}</span>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
            <div class="palace-card" onclick="startBattleRoyale('easy')" style="cursor: pointer;">
                <div class="palace-icon">🛡️</div>
                <div class="palace-name" style="font-size: 16px;">EASY MODE</div>
                <div style="font-size: 13px; color: #888; margin-top: 10px; line-height: 1.6;">
                    Single characters only<br>
                    5 lives<br>
                    Perfect for practice
                </div>
            </div>
            
            <div class="palace-card" onclick="startBattleRoyale('hard')" style="cursor: pointer; border-color: #ff0000;">
                <div class="palace-icon">⚡</div>
                <div class="palace-name" style="font-size: 16px; color: #ff0000;">HARD MODE</div>
                <div style="font-size: 13px; color: #888; margin-top: 10px; line-height: 1.6;">
                    Vocabulary words!<br>
                    5 lives<br>
                    Ultimate challenge
                </div>
            </div>
        </div>
        
        <button class="persona-btn btn-guard" onclick="showPalaceSelect()" style="width: 100%; margin-top: 20px;">
            ← BACK TO THIEVES' DEN
        </button>
    `;
}

function startBattleRoyale(mode) {
    royaleMode = mode;
    royaleLives = 5;
    royaleScore = 0;
    royaleStreak = 0;
    royaleBestStreak = 0;
    gameMode = 'battle_royale';
    
    document.getElementById('panelTitle').textContent = `⚔️ BATTLE ROYALE - ${mode.toUpperCase()}`;
    
    showRoyaleBattle();
}

function showRoyaleBattle() {
    if (royaleLives <= 0) {
        endBattleRoyale();
        return;
    }

    // Get all characters from completed palaces (not just rank 10)
    const practicedChars = [];
    completedPalaces.forEach(palaceId => {
        const palace = palaces.find(p => p.id === palaceId);
        if (palace) {
            practicedChars.push(...palace.characters);
        }
    });

    if (practicedChars.length === 0) {
        alert('Complete a palace first!');
        showBattleRoyaleMenu();
        return;
    }

    // Generate random question
    let questionChar = null;
    let questionVocab = null;
    let correctAnswer = '';
    let displayText = '';
    let translationText = '';

    if (royaleMode === 'easy') {
        // Single character only
        questionChar = practicedChars[Math.floor(Math.random() * practicedChars.length)];
        correctAnswer = hiraganaData[questionChar];
        displayText = questionChar;
        translationText = `(${correctAnswer} sound)`;

        // Update cheatsheet
        updateBattleCheatsheet([questionChar]);
    } else {
        // Hard mode - vocabulary from practiced characters
        const allVocab = [];
        practicedChars.forEach(char => {
            const vocab = vocabularyDatabase[char] || [];
            allVocab.push(...vocab);
        });

        if (allVocab.length === 0) {
            alert('No vocabulary available yet!');
            showBattleRoyaleMenu();
            return;
        }

        questionVocab = allVocab[Math.floor(Math.random() * allVocab.length)];
        correctAnswer = questionVocab.romanji;
        displayText = questionVocab.jp;
        translationText = questionVocab.translation;

        // Update cheatsheet with all chars in the word
        const cheatChars = extractHiraganaChars(questionVocab);
        updateBattleCheatsheet(cheatChars);
    }
    
    // Store for checking answer
    window.currentRoyaleAnswer = correctAnswer;
    window.currentRoyaleChar = questionChar;
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.8); padding: 12px; margin-bottom: 15px; border: 2px solid #ff9900;">
            <div>
                <span style="color: #ff0000; font-family: 'Orbitron'; font-size: 16px;">❤️ LIVES: ${royaleLives}/5</span>
            </div>
            <div>
                <span style="color: #ffff00; font-family: 'Orbitron'; font-size: 16px;">⭐ STREAK: ${royaleStreak}</span>
            </div>
            <div>
                <span style="color: #00ff00; font-family: 'Orbitron'; font-size: 16px;">💯 SCORE: ${royaleScore}</span>
            </div>
        </div>
        
        <div class="metaverse-scene">
            <div style="background: #ff9900; color: #000; padding: 8px 15px; font-size: 12px; display: inline-block; margin-bottom: 15px; font-family: Orbitron; font-weight: 700;">
                ${royaleMode.toUpperCase()} MODE - QUESTION ${royaleScore + 1}
            </div>
            <div class="shadow-enemy">
                <div class="shadow-char">${displayText}</div>
                <div class="shadow-name" style="color: #ff9900;">${translationText}</div>
            </div>
        </div>
        
        <div class="dialogue-box">
            Type the romanji to survive! One mistake = one life lost!
        </div>
        
        <input type="text" class="persona-input" id="battleInput" placeholder="Type romanji..." autocomplete="off">
        
        <div class="action-grid">
            <button class="persona-btn btn-attack" onclick="checkRoyaleAnswer()">⚔️ ATTACK</button>
            <button class="persona-btn btn-guard" onclick="forfeitRoyale()">🏳️ FORFEIT</button>
        </div>
        
        <div class="battle-message" id="battleMessage"></div>
    `;
    
    // Only focus on input if not mobile (mobile uses custom keyboard)
    if (!isMobile) {
        const battleInput = document.getElementById('battleInput');
        if (battleInput) {
            battleInput.focus();
            battleInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') checkRoyaleAnswer();
            }, { once: true });
        }
    }
}

function checkRoyaleAnswer() {
    const input = document.getElementById('battleInput');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = window.currentRoyaleAnswer.toLowerCase();
    const messageEl = document.getElementById('battleMessage');
    const char = window.currentRoyaleChar;
    
    // Track stats for character
    if (char && confidants[char]) {
        confidants[char].attempts++;
    }
    
    if (userAnswer === correctAnswer) {
        // Correct!
        royaleScore++;
        royaleStreak++;
        royaleBestStreak = Math.max(royaleBestStreak, royaleStreak);
        
        if (char && confidants[char]) {
            confidants[char].correct++;
            updateStruggleTracking(char, true);
            addConfidantPoints(char, 10);
        }
        
        const points = 100 + (royaleStreak * 10); // Streak bonus
        messageEl.innerHTML = `<span class="damage-text">✓ CORRECT! +${points} pts (Streak: ${royaleStreak})</span>`;
        
        // Auto advance after short delay
        input.value = '';
        input.placeholder = 'Press Enter to continue...';
        input.disabled = false;
        input.focus();

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showRoyaleBattle();
            }
        }, { once: true });
    } else {
        // Wrong!
        royaleLives--;
        royaleStreak = 0;
        
        if (char && confidants[char]) {
            updateStruggleTracking(char, false);
        }
        
        messageEl.innerHTML = `<span class="damage-text">✗ WRONG! Answer: "${correctAnswer}" (-1 LIFE)</span>`;
        
        if (royaleLives > 0) {
            input.value = '';
            input.placeholder = 'Press Enter to continue...';
            input.disabled = false;
            input.focus();

            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    showRoyaleBattle();
                }
            }, { once: true });
        } else {
            input.disabled = true;
            setTimeout(() => {
                endBattleRoyale();
            }, 2000);
        }
    }
    
    saveGame();
}

function forfeitRoyale() {
    if (!confirm('Forfeit this Battle Royale run?')) {
        return;
    }
    endBattleRoyale();
}

function endBattleRoyale() {
    gameMode = 'battle_royale_end';
    
    // Save best streak
    const bestKey = royaleMode === 'easy' ? 'royaleBestEasy' : 'royaleBestHard';
    const currentBest = parseInt(localStorage.getItem(bestKey) || 0);
    if (royaleBestStreak > currentBest) {
        localStorage.setItem(bestKey, royaleBestStreak);
    }
    
    document.getElementById('panelTitle').textContent = '💀 GAME OVER';
    updateBattleCheatsheet([]);
    
    const isNewRecord = royaleBestStreak > currentBest;
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="text-align: center; padding: 40px;">
            <div style="font-size: 36px; color: ${royaleLives <= 0 ? '#ff0000' : '#ff9900'}; margin-bottom: 20px; font-family: 'Orbitron';">
                ${royaleLives <= 0 ? '💀 DEFEATED! 💀' : '🏳️ FORFEITED 🏳️'}
            </div>
            ${isNewRecord ? `
            <div style="font-size: 20px; color: #ffff00; margin: 20px 0; animation: levelUpPulse 1s ease-in-out infinite;">
                🏆 NEW RECORD! 🏆
            </div>
            ` : ''}
            <div style="font-size: 16px; color: #888; margin: 30px 0; line-height: 2;">
                Mode: <span style="color: #ff9900;">${royaleMode.toUpperCase()}</span><br>
                Final Score: <span style="color: #00ff00; font-size: 24px;">${royaleScore}</span><br>
                Best Streak: <span style="color: #ffff00; font-size: 24px;">${royaleBestStreak}</span><br>
                ${isNewRecord ? `<span style="color: #ffff00;">Previous Record: ${currentBest}</span>` : `<span style="color: #888;">Your Record: ${currentBest}</span>`}
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button class="persona-btn btn-attack" onclick="startBattleRoyale('${royaleMode}')" style="width: 100%;">
                🔄 TRY AGAIN
            </button>
            <button class="persona-btn btn-skill" onclick="showBattleRoyaleMenu()" style="width: 100%;">
                📊 MODE SELECT
            </button>
        </div>
        <button class="persona-btn btn-guard" onclick="showPalaceSelect()" style="width: 100%; margin-top: 10px;">
            ← BACK TO THIEVES' DEN
        </button>
    `;
}

// ===================================
// WORD INVENTORY SYSTEM
// ===================================

function showWordInventory(filterChar = 'all', sortBy = 'character') {
    gameMode = 'word_inventory';
    document.getElementById('panelTitle').textContent = '📖 WORD INVENTORY';
    updateBattleCheatsheet([]);

    if (encounteredVocab.length === 0) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="dialogue-box" style="text-align: center; padding: 40px;">
                <div style="font-size: 24px; color: #ff9900; margin-bottom: 20px; font-family: 'Orbitron';">
                    📖 WORD INVENTORY EMPTY
                </div>
                <div style="font-size: 14px; color: #888;">
                    You haven't encountered any vocabulary words yet!<br>
                    Complete palace battles to discover new words.
                </div>
            </div>
            <button class="persona-btn btn-attack" onclick="showPalaceSelect()" style="width: 100%; margin-top: 20px;">
                ← BACK TO THIEVES' DEN
            </button>
        `;
        return;
    }

    // Build complete vocab data from encountered words
    const vocabData = [];
    Object.keys(vocabularyDatabase).forEach(char => {
        const words = vocabularyDatabase[char] || [];
        words.forEach(word => {
            if (encounteredVocab.includes(word.jp)) {
                vocabData.push({
                    ...word,
                    primaryChar: char
                });
            }
        });
    });

    // Filter vocab
    let filteredVocab = vocabData;
    if (filterChar !== 'all') {
        filteredVocab = vocabData.filter(v => {
            const chars = extractHiraganaChars(v);
            return chars.includes(filterChar);
        });
    }

    // Sort vocab
    if (sortBy === 'character') {
        filteredVocab.sort((a, b) => a.primaryChar.localeCompare(b.primaryChar));
    } else if (sortBy === 'alphabetical') {
        filteredVocab.sort((a, b) => a.romanji.localeCompare(b.romanji));
    } else if (sortBy === 'length') {
        filteredVocab.sort((a, b) => a.jp.length - b.jp.length);
    }

    // Build filter buttons for learned characters
    const filterButtons = ['all', ...allLearnedChars].map(char => {
        const isActive = char === filterChar;
        const label = char === 'all' ? 'ALL' : char;
        const count = char === 'all' ? vocabData.length : vocabData.filter(v => extractHiraganaChars(v).includes(char)).length;

        return `
            <button class="persona-btn ${isActive ? 'btn-attack' : 'btn-skill'}"
                    onclick="showWordInventory('${char}', '${sortBy}')"
                    style="padding: 8px; font-size: 12px;">
                ${label} (${count})
            </button>
        `;
    }).join('');

    // Build vocab word cards
    const vocabHTML = filteredVocab.map(word => {
        const charDisplay = word.jp.split('').map(char => {
            const isLearned = allLearnedChars.includes(char);
            return `<span style="color: ${isLearned ? '#ffffff' : '#888'};">${char}</span>`;
        }).join('');

        return `
            <div class="vocab-card" style="background: rgba(0, 0, 0, 0.6); border: 2px solid #333; padding: 12px; margin: 8px 0; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-size: 24px; font-weight: 700; margin-bottom: 5px;">
                            ${charDisplay}
                        </div>
                        <div style="color: #00ff00; font-size: 14px; font-family: 'Orbitron';">
                            ${word.romanji}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="color: #ffff00; font-size: 16px;">
                            ${word.translation}
                        </div>
                        <div style="color: #666; font-size: 11px; margin-top: 5px;">
                            ${word.breakdown.join(' ')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="padding: 12px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-family: 'Orbitron'; color: #ff9900; font-size: 14px;">
                    ${filteredVocab.length} / ${vocabData.length} WORDS
                </div>
                <div>
                    <select onchange="showWordInventory('${filterChar}', this.value)"
                            style="background: #000; color: #fff; border: 1px solid #ff0000; padding: 5px; font-family: 'Orbitron'; font-size: 11px;">
                        <option value="character" ${sortBy === 'character' ? 'selected' : ''}>Sort by Character</option>
                        <option value="alphabetical" ${sortBy === 'alphabetical' ? 'selected' : ''}>Sort A-Z</option>
                        <option value="length" ${sortBy === 'length' ? 'selected' : ''}>Sort by Length</option>
                    </select>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 10px;">
            <div style="color: #888; font-size: 11px; margin-bottom: 8px; font-family: 'Orbitron';">
                FILTER BY CHARACTER:
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap: 5px; max-height: 150px; overflow-y: auto;">
                ${filterButtons}
            </div>
        </div>

        <div style="max-height: 400px; overflow-y: auto; margin-bottom: 10px;">
            ${vocabHTML || '<div style="text-align: center; color: #888; padding: 20px;">No words match this filter</div>'}
        </div>

        <button class="persona-btn btn-guard" onclick="showPalaceSelect()" style="width: 100%;">
            ← BACK TO THIEVES' DEN
        </button>
    `;
}

// ===================================
// TRAINING DOJO SYSTEM
// ===================================

let dojoSession = {
    characters: [],
    questions: [],
    currentQuestion: 0,
    correct: 0,
    sessionVocab: [],
    currentLearningChar: 0,
    learningPhase: true
};

function startTrainingDojo() {
    gameMode = 'training_dojo';
    document.getElementById('panelTitle').textContent = '🥋 TRAINING DOJO';
    updateBattleCheatsheet([]);

    // Smart character selection based on confidant mastery
    const selectedChars = selectTrainingCharacters();

    if (selectedChars.length === 0) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="dialogue-box" style="text-align: center; padding: 40px;">
                <div style="font-size: 24px; color: #00ff88; margin-bottom: 20px; font-family: 'Orbitron';">
                    🥋 TRAINING DOJO
                </div>
                <div style="font-size: 14px; line-height: 1.8; color: #ccc;">
                    Master more characters first!<br>
                    Complete palaces to unlock training.
                </div>
            </div>
            <button class="persona-btn btn-attack" onclick="showPalaceSelect()" style="width: 100%; margin-top: 20px;">
                ← BACK TO THIEVES' DEN
            </button>
        `;
        return;
    }

    // Initialize session
    dojoSession.characters = selectedChars;
    dojoSession.questions = generateDojoQuestions(selectedChars);
    dojoSession.currentQuestion = 0;
    dojoSession.correct = 0;
    dojoSession.currentLearningChar = 0;
    dojoSession.learningPhase = true;

    // Show introduction
    const charList = selectedChars.join(' ');
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="text-align: center;">
            <div style="font-size: 24px; color: #00ff88; margin-bottom: 15px; font-family: 'Orbitron';">
                🥋 TRAINING DOJO SESSION 🥋
            </div>
            <div style="font-size: 14px; line-height: 1.8;">
                Today's training focuses on <strong>${selectedChars.length}</strong> characters!<br>
                <div style="font-size: 28px; margin: 20px 0; letter-spacing: 10px; color: #00ff88;">
                    ${charList}
                </div>
                First, review each character with usage examples.<br>
                Then face <strong>20 varied questions</strong> testing your mastery!<br>
                <span style="color: #888; font-size: 12px;">Questions include: character reading, vocabulary, and fill-in-the-blank</span>
            </div>
        </div>

        <button class="persona-btn btn-attack" onclick="showDojoLearning()" style="width: 100%; margin-top: 20px;">
            📖 START LEARNING
        </button>
        <button class="persona-btn btn-guard" onclick="showPalaceSelect()" style="width: 100%; margin-top: 10px;">
            ← BACK TO THIEVES' DEN
        </button>
    `;
}

function selectTrainingCharacters() {
    // Get all learned characters with their mastery data
    const charData = [];

    Object.keys(confidants).forEach(char => {
        const data = confidants[char];
        const accuracy = data.attempts > 0 ? (data.correct / data.attempts) * 100 : 50;
        charData.push({
            char: char,
            rank: data.rank,
            accuracy: accuracy,
            attempts: data.attempts,
            mastery: (data.rank * 10) + accuracy // Combined score
        });
    });

    if (charData.length === 0) return [];

    // Sort by mastery (lower = needs more practice)
    charData.sort((a, b) => a.mastery - b.mastery);

    // Select 3-7 characters intelligently
    const targetCount = Math.min(7, Math.max(3, Math.floor(charData.length / 2)));

    // Take weakest characters (60%) + some random (40%) for variety
    const weakCount = Math.ceil(targetCount * 0.6);
    const randomCount = targetCount - weakCount;

    const selected = [];

    // Add weakest characters
    for (let i = 0; i < weakCount && i < charData.length; i++) {
        selected.push(charData[i].char);
    }

    // Add some random characters for variety
    const remaining = charData.slice(weakCount);
    for (let i = 0; i < randomCount && remaining.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * remaining.length);
        selected.push(remaining[randomIndex].char);
        remaining.splice(randomIndex, 1);
    }

    return selected;
}

function generateDojoQuestions(characters) {
    const questions = [];

    // Collect all available vocabulary for these characters
    const availableVocab = [];
    characters.forEach(char => {
        const vocab = vocabularyDatabase[char] || [];
        vocab.forEach(word => {
            // Check if we know all characters in this word
            const wordChars = word.jp.split('');
            const allKnown = wordChars.every(c => Object.keys(confidants).includes(c));
            if (allKnown) {
                availableVocab.push({ ...word, primaryChar: char });
            }
        });
    });

    // Question type distribution for 20 questions:
    // - 6-8 single character questions
    // - 6-8 vocabulary questions
    // - 4-6 fill-in-the-blank questions

    const charQuestions = Math.floor(Math.random() * 3) + 6; // 6-8
    const vocabQuestions = Math.floor(Math.random() * 3) + 6; // 6-8
    const fillQuestions = 20 - charQuestions - vocabQuestions; // remaining

    // Type 1: Single character questions
    for (let i = 0; i < charQuestions; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        questions.push({
            type: 'character',
            char: char,
            answer: hiraganaData[char],
            display: char,
            prompt: `What sound does this character make?`
        });
    }

    // Type 2: Vocabulary questions
    if (availableVocab.length > 0) {
        for (let i = 0; i < vocabQuestions; i++) {
            const vocab = availableVocab[Math.floor(Math.random() * availableVocab.length)];
            questions.push({
                type: 'vocabulary',
                vocab: vocab,
                answer: vocab.romanji,
                display: vocab.jp,
                prompt: `Type the romanji for: ${vocab.translation}`,
                translation: vocab.translation
            });
        }
    } else {
        // If no vocab available, add more character questions
        for (let i = 0; i < vocabQuestions; i++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            questions.push({
                type: 'character',
                char: char,
                answer: hiraganaData[char],
                display: char,
                prompt: `What sound does this character make?`
            });
        }
    }

    // Type 3: Fill-in-the-blank questions
    if (availableVocab.length > 0) {
        for (let i = 0; i < fillQuestions; i++) {
            const vocab = availableVocab[Math.floor(Math.random() * availableVocab.length)];
            const wordChars = vocab.jp.split('');

            if (wordChars.length >= 2) {
                // Remove one character for user to fill in
                const blankIndex = Math.floor(Math.random() * wordChars.length);
                const missingChar = wordChars[blankIndex];
                const missingRomanji = hiraganaData[missingChar] || missingChar;

                const displayWord = wordChars.map((c, idx) => idx === blankIndex ? '_' : c).join('');

                questions.push({
                    type: 'fill_blank',
                    vocab: vocab,
                    answer: missingRomanji,
                    display: displayWord,
                    prompt: `Fill in the missing character (${vocab.translation})`,
                    translation: vocab.translation,
                    fullWord: vocab.jp
                });
            } else {
                // Fallback to character question if word too short
                const char = characters[Math.floor(Math.random() * characters.length)];
                questions.push({
                    type: 'character',
                    char: char,
                    answer: hiraganaData[char],
                    display: char,
                    prompt: `What sound does this character make?`
                });
            }
        }
    } else {
        // If no vocab available, add more character questions
        for (let i = 0; i < fillQuestions; i++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            questions.push({
                type: 'character',
                char: char,
                answer: hiraganaData[char],
                display: char,
                prompt: `What sound does this character make?`
            });
        }
    }

    // Shuffle questions
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions;
}

function showDojoLearning() {
    // Check if learning phase is complete
    if (dojoSession.currentLearningChar >= dojoSession.characters.length) {
        // Transition to questions
        dojoSession.learningPhase = false;
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
            <div class="dialogue-box" style="text-align: center;">
                <div style="font-size: 24px; color: #00ff88; margin-bottom: 15px; font-family: 'Orbitron';">
                    ✅ REVIEW COMPLETE!
                </div>
                <div style="font-size: 14px; line-height: 1.8;">
                    You've reviewed all ${dojoSession.characters.length} characters!<br>
                    Now let's test your knowledge with <strong>20 questions</strong>!
                </div>
            </div>
            <button class="persona-btn btn-attack" onclick="showDojoQuestion()" style="width: 100%; margin-top: 20px;">
                ⚡ BEGIN TRAINING
            </button>
        `;
        return;
    }

    const char = dojoSession.characters[dojoSession.currentLearningChar];
    const romanji = hiraganaData[char];
    const usage = characterUsage[char] || { common: 'Various uses', tip: 'Practice this character!' };
    const progress = dojoSession.currentLearningChar + 1;
    const total = dojoSession.characters.length;

    // Update cheatsheet
    updateBattleCheatsheet([char]);

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 10px; margin-bottom: 15px;">
            <div style="text-align: center;">
                <span style="color: #00ff88; font-family: 'Orbitron'; font-size: 14px;">📚 LEARNING ${progress}/${total}</span>
            </div>
        </div>

        <div class="metaverse-scene">
            <div style="background: #00ff88; color: #000; padding: 8px 15px; font-size: 12px; display: inline-block; margin-bottom: 15px; font-family: Orbitron; font-weight: 700;">
                NEW CHARACTER
            </div>
            <div class="shadow-enemy">
                <div class="shadow-char" style="font-size: 64px;">${char}</div>
                <div class="shadow-name" style="color: #00ff88; font-size: 24px; margin-top: 10px;">${romanji}</div>
            </div>
        </div>

        <div class="dialogue-box" style="margin-bottom: 15px;">
            <div style="font-size: 14px; line-height: 1.8;">
                <div style="color: #00ff88; font-weight: 700; margin-bottom: 8px;">📖 Common Usage:</div>
                <div style="color: #ccc; margin-bottom: 15px;">${usage.common}</div>

                <div style="color: #00ff88; font-weight: 700; margin-bottom: 8px;">💡 Tip:</div>
                <div style="color: #ccc;">${usage.tip}</div>
            </div>
        </div>

        <div class="dialogue-box">
            Type the romanji sound to continue
        </div>

        <input type="text" class="persona-input" id="learningInput" placeholder="Type romanji..." autocomplete="off">

        <div class="action-grid">
            <button class="persona-btn btn-attack" onclick="checkLearningAnswer()">✓ CONFIRM</button>
        </div>

        <div class="battle-message" id="learningMessage"></div>
    `;

    const input = document.getElementById('learningInput');
    input.focus();
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkLearningAnswer();
    }, { once: true });
}

function checkLearningAnswer() {
    const input = document.getElementById('learningInput');
    const userAnswer = input.value.trim().toLowerCase();
    const char = dojoSession.characters[dojoSession.currentLearningChar];
    const correctAnswer = hiraganaData[char].toLowerCase();
    const messageEl = document.getElementById('learningMessage');

    if (!userAnswer) {
        messageEl.innerHTML = `<span class="damage-text">⚠️ Please enter an answer!</span>`;
        return;
    }

    if (userAnswer === correctAnswer) {
        messageEl.innerHTML = `<span class="damage-text">✓ CORRECT! Moving to next character...</span>`;

        // Track in confidant
        if (confidants[char]) {
            confidants[char].attempts++;
            confidants[char].correct++;
            updateStruggleTracking(char, true);
        }

        input.disabled = true;
        dojoSession.currentLearningChar++;

        // Continue to next character after short delay
        setTimeout(() => {
            showDojoLearning();
        }, 1000);
    } else {
        messageEl.innerHTML = `<span class="damage-text">✗ Not quite! The answer is "${correctAnswer}". Try again!</span>`;
        input.value = '';
        input.focus();
    }
}

function showDojoQuestion() {
    if (dojoSession.currentQuestion >= dojoSession.questions.length) {
        endDojoSession();
        return;
    }

    const question = dojoSession.questions[dojoSession.currentQuestion];
    const progress = dojoSession.currentQuestion + 1;
    const total = dojoSession.questions.length;

    // COPIED EXACTLY FROM PALACE BATTLE
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="metaverse-scene" style="padding: 20px; margin: 10px 0;">
            <div class="shadow-enemy">
                <div class="shadow-char" style="font-size: 60px;">${question.display}</div>
                <div class="shadow-name">QUESTION ${progress}/${total}</div>
            </div>
        </div>

        <div class="dialogue-box" style="padding: 10px; margin: 10px 0; font-size: 13px;">
            ${question.prompt}
        </div>

        <div class="custom-answer-display" id="customAnswerDisplay" style="display: block !important; background: #000; border: 2px solid #ff0000; padding: 12px; font-size: 20px; text-align: center; color: #ffff00; margin: 10px 0;">
            (tap keys to type)
        </div>

        <div style="display: block !important; background: #000; border: 2px solid #ff0000; padding: 10px; margin: 10px 0;">
            <div style="display: flex; gap: 5px; margin: 5px 0;">
                <button onclick="addToCustomAnswer('q')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">q</button>
                <button onclick="addToCustomAnswer('w')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">w</button>
                <button onclick="addToCustomAnswer('e')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">e</button>
                <button onclick="addToCustomAnswer('r')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">r</button>
                <button onclick="addToCustomAnswer('t')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">t</button>
                <button onclick="addToCustomAnswer('y')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">y</button>
                <button onclick="addToCustomAnswer('u')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">u</button>
                <button onclick="addToCustomAnswer('i')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">i</button>
                <button onclick="addToCustomAnswer('o')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">o</button>
                <button onclick="addToCustomAnswer('p')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">p</button>
            </div>
            <div style="display: flex; gap: 5px; margin: 5px 0;">
                <button onclick="addToCustomAnswer('a')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">a</button>
                <button onclick="addToCustomAnswer('s')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">s</button>
                <button onclick="addToCustomAnswer('d')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">d</button>
                <button onclick="addToCustomAnswer('f')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">f</button>
                <button onclick="addToCustomAnswer('g')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">g</button>
                <button onclick="addToCustomAnswer('h')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">h</button>
                <button onclick="addToCustomAnswer('j')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">j</button>
                <button onclick="addToCustomAnswer('k')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">k</button>
                <button onclick="addToCustomAnswer('l')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">l</button>
            </div>
            <div style="display: flex; gap: 5px; margin: 5px 0;">
                <button onclick="addToCustomAnswer('z')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">z</button>
                <button onclick="addToCustomAnswer('x')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">x</button>
                <button onclick="addToCustomAnswer('c')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">c</button>
                <button onclick="addToCustomAnswer('v')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">v</button>
                <button onclick="addToCustomAnswer('b')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">b</button>
                <button onclick="addToCustomAnswer('n')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">n</button>
                <button onclick="addToCustomAnswer('m')" style="flex:1; padding:12px; background:#ff0000; color:#fff; border:none; font-size:14px; cursor:pointer;">m</button>
                <button onclick="backspaceCustomAnswer()" style="flex:1; padding:12px; background:#666; color:#fff; border:none; font-size:14px; cursor:pointer;">⌫</button>
                <button onclick="checkDojoAnswer()" style="flex:1; padding:12px; background:#ffff00; color:#000; border:none; font-size:14px; cursor:pointer; font-weight:700;">✓</button>
            </div>
        </div>

        <div class="battle-message" id="dojoMessage" style="min-height: 30px; margin: 8px 0;"></div>
    `;

    if (!isMobile) {
        const input = document.getElementById('dojoInput');
        if (input) {
            input.focus();
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') checkDojoAnswer();
            }, { once: true });
        }
    }
}

function checkDojoAnswer() {
    // ALWAYS use custom keyboard answer in Training Dojo
    const userAnswer = getCustomAnswer();

    const question = dojoSession.questions[dojoSession.currentQuestion];
    const correctAnswer = question.answer.toLowerCase();
    const messageEl = document.getElementById('dojoMessage');

    if (!userAnswer) {
        messageEl.innerHTML = `<span class="damage-text">⚠️ Please enter an answer!</span>`;
        return;
    }

    // Track stats for character
    if (question.type === 'character' && confidants[question.char]) {
        confidants[question.char].attempts++;
        if (userAnswer === correctAnswer) {
            confidants[question.char].correct++;
            updateStruggleTracking(question.char, true);
            addConfidantPoints(question.char, 5);
        } else {
            updateStruggleTracking(question.char, false);
        }
    } else if (question.vocab) {
        // Track for all characters in the word
        const chars = question.vocab.jp.split('').filter(c => hiraganaData[c]);
        chars.forEach(char => {
            if (confidants[char]) {
                confidants[char].attempts++;
                if (userAnswer === correctAnswer) {
                    confidants[char].correct++;
                    updateStruggleTracking(char, true);
                    addConfidantPoints(char, 3);
                } else {
                    updateStruggleTracking(char, false);
                }
            }
        });

        // Track vocabulary
        if (!encounteredVocab.includes(question.vocab.jp)) {
            encounteredVocab.push(question.vocab.jp);
        }
    }

    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
        dojoSession.correct++;
        messageEl.innerHTML = `<span class="damage-text">✓ CORRECT!</span>`;

        // Add XP and money
        addXP(15);
        playerMoney += 50;
        updatePlayerStats();
    } else {
        messageEl.innerHTML = `<span class="damage-text">✗ WRONG! Answer: "${correctAnswer}"</span>`;
    }

    dojoSession.currentQuestion++;

    // Auto-continue after delay
    if (!isMobile) {
        const input = document.getElementById('dojoInput');
        if (input) input.disabled = true;
    }

    setTimeout(() => {
        clearCustomAnswer(); // Clear keyboard for next question
        showDojoQuestion();
    }, 1500);
}

function endDojoSession() {
    const total = dojoSession.questions.length;
    const correct = dojoSession.correct;
    const accuracy = Math.round((correct / total) * 100);
    const reward = correct * 50;

    playerMoney += reward;
    updatePlayerStats();
    saveGame();

    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="dialogue-box" style="text-align: center;">
            <div style="font-size: 28px; color: #00ff88; margin-bottom: 20px; font-family: 'Orbitron';">
                🥋 TRAINING COMPLETE! 🥋
            </div>
            <div style="font-size: 16px; line-height: 2;">
                Questions: ${correct}/${total}<br>
                Accuracy: ${accuracy}%<br>
                <span style="color: #ffff00; font-size: 20px;">Bonus Reward: ¥${reward}</span>
            </div>
        </div>

        <div class="story-box" style="margin: 20px 0;">
            <div style="color: #00ff88; font-size: 14px; margin-bottom: 10px;">
                📊 CHARACTERS TRAINED
            </div>
            <div style="font-size: 24px; letter-spacing: 10px; margin-bottom: 15px;">
                ${dojoSession.characters.join(' ')}
            </div>
            <div style="font-size: 12px; color: #888;">
                ${accuracy >= 80 ? '⭐ Excellent work! Your mastery grows stronger!' :
                  accuracy >= 60 ? '👍 Good effort! Keep training to improve!' :
                  '💪 More practice needed! Review these characters.'}
            </div>
        </div>

        <button class="persona-btn btn-attack" onclick="startTrainingDojo()" style="width: 100%;">
            🔄 NEW TRAINING SESSION
        </button>
        <button class="persona-btn btn-guard" onclick="showPalaceSelect()" style="width: 100%; margin-top: 10px;">
            ← BACK TO THIEVES' DEN
        </button>
    `;

    updateBattleCheatsheet([]);
}

