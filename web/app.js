const REVIEW_THRESHOLD = 3
const UNKNOWN_COUNTS_STORAGE_KEY = 'wordUnknownCounts'
const DELETED_WORDS_STORAGE_KEY = 'deletedWordKeys'

const state = {
  libraries: [],
  library: null,
  words: [],
  activeIndices: [],
  wordProgress: [],
  currentIndex: -1,
  questionNumber: 0,
  knownCount: 0,
  answeredCount: 0,
  showAnswer: false,
  completed: false,
  reviewMode: false,
  japaneseVoices: [],
  unknownCounts: loadObject(UNKNOWN_COUNTS_STORAGE_KEY),
  deletedWordKeys: loadObject(DELETED_WORDS_STORAGE_KEY)
}

const elements = {}

document.addEventListener('DOMContentLoaded', async () => {
  bindElements()
  await loadLibraries()
  bindEvents()
  renderHome()
})

function bindElements() {
  const ids = [
    'home-view',
    'quiz-view',
    'library-list',
    'back-button',
    'review-button',
    'quiz-title',
    'quiz-subtitle',
    'quiz-panel',
    'review-panel',
    'quiz-card',
    'word-category',
    'question-number',
    'chinese-word',
    'answer-box',
    'answer-placeholder',
    'japanese-word',
    'accent-mark',
    'speak-button',
    'kana-word',
    'example-japanese',
    'example-chinese',
    'show-answer-button',
    'answer-actions',
    'delete-button',
    'unknown-button',
    'known-button',
    'complete-card',
    'complete-text',
    'restart-button',
    'accuracy',
    'remaining-count'
  ]

  ids.forEach(id => {
    elements[id] = document.getElementById(id)
  })
}

async function loadLibraries() {
  const travelWords = window.travelWords || await loadCommonJsData('./words.js')
  const businessWords = window.businessWords || await loadCommonJsData('./businessWords.js')
  const customWords = window.customWords || await loadCommonJsData('./customWords.js')

  state.libraries = [
    {
      id: 'travel',
      title: '旅行',
      subtitle: '机场、酒店、交通与观光',
      accent: 'travel',
      words: travelWords
    },
    {
      id: 'business',
      title: '商务',
      subtitle: '职场、交易、财务与办公',
      accent: 'business',
      words: businessWords
    },
    {
      id: 'custom',
      title: '自定义',
      subtitle: '你指定的专属词库',
      accent: 'custom',
      words: customWords
    }
  ]
}

async function loadCommonJsData(path) {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`无法加载词库：${path}`)
  }

  const source = await response.text()
  const module = { exports: [] }
  const exports = module.exports
  Function('module', 'exports', source)(module, exports)
  return module.exports
}

function bindEvents() {
  elements['back-button'].addEventListener('click', showHome)
  elements['review-button'].addEventListener('click', toggleReview)
  elements['show-answer-button'].addEventListener('click', () => {
    state.showAnswer = true
    renderQuiz()
  })
  elements['known-button'].addEventListener('click', () => markAnswer(true))
  elements['unknown-button'].addEventListener('click', () => markAnswer(false))
  elements['delete-button'].addEventListener('click', deleteCurrentWord)
  elements['restart-button'].addEventListener('click', restartQuiz)
  elements['speak-button'].addEventListener('click', () => speakJapanese(state.words[state.currentIndex]?.kana))
  elements['review-panel'].addEventListener('click', event => {
    const button = event.target.closest('.speak-button')

    if (button) {
      speakJapanese(button.dataset.text)
    }
  })

  setupVoices()
}

function renderHome() {
  elements['library-list'].innerHTML = state.libraries
    .map(library => {
      const activeCount = countActiveWords(library)

      return `
        <button class="library-card ${library.accent}" data-library="${library.id}">
          <span>
            <span class="library-title">${library.title}</span>
            <span class="library-subtitle">${library.subtitle}</span>
            <span class="library-count">共 ${activeCount} 个单词</span>
          </span>
          <span class="library-arrow">›</span>
        </button>
      `
    })
    .join('')

  elements['library-list'].querySelectorAll('.library-card').forEach(card => {
    card.addEventListener('click', () => openLibrary(card.dataset.library))
  })
}

function openLibrary(id) {
  state.library = state.libraries.find(library => library.id === id) || state.libraries[0]
  state.words = state.library.words
  state.questionNumber = 0
  state.knownCount = 0
  state.answeredCount = 0
  state.currentIndex = -1
  state.showAnswer = false
  state.completed = false
  state.reviewMode = false
  resetProgress()
  pickRandomWord()
  showQuiz()
}

function showHome() {
  state.library = null
  renderHome()
  elements['home-view'].classList.remove('hidden')
  elements['quiz-view'].classList.add('hidden')
}

function showQuiz() {
  elements['home-view'].classList.add('hidden')
  elements['quiz-view'].classList.remove('hidden')
  renderQuiz()
}

function resetProgress() {
  state.activeIndices = state.words
    .map((word, index) => index)
    .filter(index => !isDeleted(state.words[index]))

  state.wordProgress = state.words.map(() => ({
    hasBeenUnknown: false,
    knownStreak: 0
  }))
}

function pickRandomWord() {
  if (state.activeIndices.length === 0) {
    state.showAnswer = false
    state.completed = true
    renderQuiz()
    return
  }

  const previousIndex = state.currentIndex
  let nextIndex = state.activeIndices[Math.floor(Math.random() * state.activeIndices.length)]

  if (state.activeIndices.length > 1) {
    while (nextIndex === previousIndex) {
      nextIndex = state.activeIndices[Math.floor(Math.random() * state.activeIndices.length)]
    }
  }

  state.currentIndex = nextIndex
  state.questionNumber += 1
  state.showAnswer = false
  state.completed = false
  renderQuiz()
}

function renderQuiz() {
  const reviewWords = getReviewWords()
  const accuracy = state.answeredCount === 0 ? 0 : Math.round((state.knownCount / state.answeredCount) * 100)

  elements['quiz-title'].textContent = state.library.title
  elements['quiz-subtitle'].textContent = state.reviewMode ? '集中复习多次不熟的单词' : '看到中文后，想一想对应的日语表达'
  elements['review-button'].innerHTML = state.reviewMode
    ? '返回测验'
    : `复习${reviewWords.length > 0 ? `<span class="review-badge">${reviewWords.length}</span>` : ''}`

  elements['quiz-panel'].classList.toggle('hidden', state.reviewMode)
  elements['review-panel'].classList.toggle('hidden', !state.reviewMode)

  if (state.reviewMode) {
    renderReview(reviewWords)
    return
  }

  elements['accuracy'].textContent = `${accuracy}%`
  elements['remaining-count'].textContent = `待掌握 ${state.activeIndices.length} 个`

  elements['complete-card'].classList.toggle('hidden', !state.completed)
  elements['quiz-card'].classList.toggle('hidden', state.completed)
  elements['show-answer-button'].classList.toggle('hidden', state.completed || state.showAnswer)
  elements['answer-actions'].classList.toggle('hidden', state.completed || !state.showAnswer)

  if (state.completed) {
    elements['complete-text'].textContent = `本轮的 ${state.answeredCount} 次作答已经完成。`
    return
  }

  const word = state.words[state.currentIndex]

  if (!word) {
    elements['complete-card'].classList.remove('hidden')
    elements['quiz-card'].classList.add('hidden')
    elements['show-answer-button'].classList.add('hidden')
    elements['answer-actions'].classList.add('hidden')
    elements['complete-text'].textContent = '这个词库暂时没有可练习的单词。'
    return
  }

  elements['word-category'].textContent = word.category
  elements['question-number'].textContent = `第 ${state.questionNumber} 题`
  elements['chinese-word'].textContent = word.chinese
  elements['japanese-word'].textContent = word.japanese
  elements['accent-mark'].textContent = formatAccent(word.accent)
  elements['accent-mark'].classList.toggle('hidden', !word.accent)
  elements['kana-word'].textContent = word.kana
  elements['example-japanese'].textContent = word.example
  elements['example-chinese'].textContent = word.exampleChinese
  elements['answer-box'].classList.toggle('hidden', !state.showAnswer)
  elements['answer-placeholder'].classList.toggle('hidden', state.showAnswer)
}

function renderReview(reviewWords) {
  if (reviewWords.length === 0) {
    elements['review-panel'].innerHTML = `
      <article class="review-empty">
        <strong class="review-empty-title">暂时没有需要复习的单词</strong>
        <span class="review-empty-text">累计按过 3 次“我不熟”的单词会显示在这里。</span>
      </article>
    `
    return
  }

  elements['review-panel'].innerHTML = reviewWords
    .map(word => `
      <article class="review-card">
        <div class="review-card-top">
          <span class="category">${word.category}</span>
          <span class="unknown-count">不熟 ${word.unknownCount} 次</span>
        </div>
        <strong class="review-chinese">${word.chinese}</strong>
        <div class="review-pronunciation-row">
          <span class="review-japanese">${word.japanese}</span>
          ${word.accent ? `<span class="accent-mark">${formatAccent(word.accent)}</span>` : ''}
          <button class="speak-button" type="button" data-text="${escapeAttribute(word.kana)}" aria-label="播放${escapeAttribute(word.japanese)}的读音">读音</button>
        </div>
        <span class="review-kana">${word.kana}</span>
        <div class="divider"></div>
        <span class="example-japanese">${word.example}</span>
        <span class="example-chinese">${word.exampleChinese}</span>
      </article>
    `)
    .join('')
}

function markAnswer(isKnown) {
  const progress = state.wordProgress[state.currentIndex]

  if (isKnown) {
    progress.knownStreak += 1

    if (!progress.hasBeenUnknown || progress.knownStreak >= 2) {
      state.activeIndices = state.activeIndices.filter(index => index !== state.currentIndex)
    }
  } else {
    progress.hasBeenUnknown = true
    progress.knownStreak = 0
    recordUnknown(state.currentIndex)
  }

  state.knownCount += isKnown ? 1 : 0
  state.answeredCount += 1
  pickRandomWord()
}

function speakJapanese(text) {
  if (!text || !window.speechSynthesis) {
    return
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  const voices = state.japaneseVoices.length > 0 ? state.japaneseVoices : getJapaneseVoices()
  const japaneseVoice = getPreferredJapaneseVoice(voices)

  utterance.lang = 'ja-JP'
  utterance.rate = 0.82
  utterance.pitch = 1

  if (japaneseVoice) {
    utterance.voice = japaneseVoice
  }

  window.speechSynthesis.speak(utterance)
}

function setupVoices() {
  if (!window.speechSynthesis) {
    return
  }

  refreshVoiceOptions()
  window.speechSynthesis.onvoiceschanged = refreshVoiceOptions
}

function refreshVoiceOptions() {
  if (!window.speechSynthesis) {
    return
  }

  state.japaneseVoices = getJapaneseVoices()
}

function getJapaneseVoices() {
  return window.speechSynthesis
    .getVoices()
    .filter(voice => voice.lang && voice.lang.toLowerCase().startsWith('ja'))
}

function getPreferredJapaneseVoice(voices) {
  const betterNames = ['Kyoko', 'Otoya', 'Hattori', 'Haruka', 'Ichiro', 'Siri']

  return betterNames
    .map(name => voices.find(voice => voice.name.toLowerCase().includes(name.toLowerCase())))
    .find(Boolean) || voices[0]
}

function formatAccent(accent) {
  return `[${accent}]`
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function deleteCurrentWord() {
  const word = state.words[state.currentIndex]
  const wordKey = getDeletedWordKey(word)
  const legacyWordKey = getWordKey(word)

  state.deletedWordKeys[wordKey] = true
  state.deletedWordKeys[legacyWordKey] = true
  delete state.unknownCounts[legacyWordKey]
  state.activeIndices = state.activeIndices.filter(index => index !== state.currentIndex)
  saveObject(DELETED_WORDS_STORAGE_KEY, state.deletedWordKeys)
  saveObject(UNKNOWN_COUNTS_STORAGE_KEY, state.unknownCounts)
  pickRandomWord()
}

function restartQuiz() {
  state.questionNumber = 0
  state.knownCount = 0
  state.answeredCount = 0
  state.currentIndex = -1
  state.showAnswer = false
  state.completed = false
  resetProgress()
  pickRandomWord()
}

function toggleReview() {
  state.reviewMode = !state.reviewMode
  renderQuiz()
}

function recordUnknown(index) {
  const wordKey = getWordKey(state.words[index])
  state.unknownCounts[wordKey] = (state.unknownCounts[wordKey] || 0) + 1
  saveObject(UNKNOWN_COUNTS_STORAGE_KEY, state.unknownCounts)
}

function getReviewWords() {
  return state.words
    .map(word => ({
      ...word,
      unknownCount: state.unknownCounts[getWordKey(word)] || 0
    }))
    .filter(word => !isDeleted(word) && word.unknownCount >= REVIEW_THRESHOLD)
    .sort((a, b) => b.unknownCount - a.unknownCount)
}

function countActiveWords(library) {
  return library.words.filter(word => !isDeleted(word, library.id)).length
}

function isDeleted(word, libraryId = state.library?.id) {
  return state.deletedWordKeys[getDeletedWordKey(word, libraryId)] === true || state.deletedWordKeys[getWordKey(word)] === true
}

function getDeletedWordKey(word, libraryId = state.library?.id) {
  return `${libraryId}|${word.japanese}`
}

function getWordKey(word) {
  return `${word.chinese}|${word.japanese}|${word.kana}`
}

function loadObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {}
  } catch (error) {
    return {}
  }
}

function saveObject(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
