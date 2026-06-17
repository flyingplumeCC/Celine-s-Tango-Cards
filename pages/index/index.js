const travelWords = require('../../data/words')
const businessWords = require('../../data/businessWords')
const customWords = require('../../data/customWords')
const UNKNOWN_COUNTS_STORAGE_KEY = 'wordUnknownCounts'
const DELETED_WORDS_STORAGE_KEY = 'deletedWordKeys'
const REVIEW_THRESHOLD = 3
const LIBRARIES = {
  travel: {
    title: '旅行',
    words: travelWords
  },
  business: {
    title: '商务',
    words: businessWords
  },
  custom: {
    title: '自定义',
    words: customWords
  }
}

Page({
  data: {
    libraryTitle: '旅行',
    currentWord: travelWords[0],
    currentIndex: -1,
    showAnswer: false,
    questionNumber: 0,
    knownCount: 0,
    answeredCount: 0,
    accuracy: 0,
    remainingCount: travelWords.length,
    completed: false,
    reviewMode: false,
    reviewWords: [],
    reviewWordCount: 0
  },

  onLoad(options = {}) {
    this.libraryId = LIBRARIES[options.library] ? options.library : 'travel'
    const library = LIBRARIES[this.libraryId]
    this.words = library.words
    this.unknownCounts = this.loadUnknownCounts()
    this.deletedWordKeys = this.loadDeletedWordKeys()
    this.resetProgress()
    this.setData({
      libraryTitle: library.title,
      currentWord: this.words[0],
      remainingCount: this.activeIndices.length
    })
    this.refreshReviewWords()
    this.pickRandomWord()
  },

  onShow() {
    if (this.unknownCounts) {
      this.refreshReviewWords()
    }
  },

  showAnswer() {
    this.setData({
      showAnswer: true
    })
  },

  markAnswer(event) {
    const isKnown = event.currentTarget.dataset.known === true
    const currentIndex = this.data.currentIndex
    const progress = this.wordProgress[currentIndex]

    if (isKnown) {
      progress.knownStreak += 1

      if (!progress.hasBeenUnknown || progress.knownStreak >= 2) {
        this.activeIndices = this.activeIndices.filter(index => index !== currentIndex)
      }
    } else {
      progress.hasBeenUnknown = true
      progress.knownStreak = 0
      this.recordUnknown(currentIndex)
    }

    const knownCount = this.data.knownCount + (isKnown ? 1 : 0)
    const answeredCount = this.data.answeredCount + 1
    const accuracy = Math.round((knownCount / answeredCount) * 100)

    this.setData({
      knownCount,
      answeredCount,
      accuracy,
      remainingCount: this.activeIndices.length
    }, () => {
      this.pickRandomWord()
    })
  },

  deleteCurrentWord() {
    const currentIndex = this.data.currentIndex
    const word = this.words[currentIndex]
    const wordKey = this.getDeletedWordKey(word)
    const legacyWordKey = this.getWordKey(word)

    this.deletedWordKeys[wordKey] = true
    this.deletedWordKeys[legacyWordKey] = true
    delete this.unknownCounts[legacyWordKey]
    this.activeIndices = this.activeIndices.filter(index => index !== currentIndex)

    try {
      wx.setStorageSync(DELETED_WORDS_STORAGE_KEY, this.deletedWordKeys)
      wx.setStorageSync(UNKNOWN_COUNTS_STORAGE_KEY, this.unknownCounts)
    } catch (error) {
      console.warn('无法保存删除记录', error)
    }

    this.refreshReviewWords()
    this.setData({
      remainingCount: this.activeIndices.length
    }, () => {
      this.pickRandomWord()
    })
  },

  pickRandomWord() {
    if (this.activeIndices.length === 0) {
      this.setData({
        showAnswer: false,
        completed: true,
        remainingCount: 0
      })
      return
    }

    const currentIndex = this.data.currentIndex
    let nextIndex = this.activeIndices[Math.floor(Math.random() * this.activeIndices.length)]

    if (this.activeIndices.length > 1) {
      while (nextIndex === currentIndex) {
        nextIndex = this.activeIndices[Math.floor(Math.random() * this.activeIndices.length)]
      }
    }

    this.setData({
      currentWord: this.words[nextIndex],
      currentIndex: nextIndex,
      showAnswer: false,
      questionNumber: this.data.questionNumber + 1,
      completed: false
    })
  },

  restartQuiz() {
    this.resetProgress()
    this.setData({
      currentIndex: -1,
      questionNumber: 0,
      knownCount: 0,
      answeredCount: 0,
      accuracy: 0,
      remainingCount: this.activeIndices.length,
      completed: false
    }, () => {
      this.pickRandomWord()
    })
  },

  resetProgress() {
    this.activeIndices = this.words
      .map((word, index) => index)
      .filter(index => !this.isDeleted(this.words[index]))
    this.wordProgress = this.words.map(() => ({
      hasBeenUnknown: false,
      knownStreak: 0
    }))
  },

  openReview() {
    this.refreshReviewWords()
    this.setData({
      reviewMode: true
    })
  },

  closeReview() {
    this.setData({
      reviewMode: false
    })
  },

  recordUnknown(index) {
    const wordKey = this.getWordKey(this.words[index])
    this.unknownCounts[wordKey] = (this.unknownCounts[wordKey] || 0) + 1

    try {
      wx.setStorageSync(UNKNOWN_COUNTS_STORAGE_KEY, this.unknownCounts)
    } catch (error) {
      console.warn('无法保存不认识次数', error)
    }

    this.refreshReviewWords()
  },

  refreshReviewWords() {
    const reviewWords = this.words
      .map((word, index) => ({
        ...word,
        unknownCount: this.unknownCounts[this.getWordKey(word)] || 0
      }))
      .filter(word => !this.isDeleted(word) && word.unknownCount >= REVIEW_THRESHOLD)
      .sort((a, b) => b.unknownCount - a.unknownCount)

    this.setData({
      reviewWords,
      reviewWordCount: reviewWords.length
    })
  },

  loadUnknownCounts() {
    try {
      const savedCounts = wx.getStorageSync(UNKNOWN_COUNTS_STORAGE_KEY)
      return savedCounts && typeof savedCounts === 'object' ? savedCounts : {}
    } catch (error) {
      console.warn('无法读取不认识次数', error)
      return {}
    }
  },

  loadDeletedWordKeys() {
    try {
      const savedKeys = wx.getStorageSync(DELETED_WORDS_STORAGE_KEY)
      return savedKeys && typeof savedKeys === 'object' ? savedKeys : {}
    } catch (error) {
      console.warn('无法读取删除记录', error)
      return {}
    }
  },

  isDeleted(word) {
    return this.deletedWordKeys[this.getDeletedWordKey(word)] === true || this.deletedWordKeys[this.getWordKey(word)] === true
  },

  getDeletedWordKey(word) {
    return `${this.libraryId}|${word.japanese}`
  },

  getWordKey(word) {
    return `${word.chinese}|${word.japanese}|${word.kana}`
  }
})
