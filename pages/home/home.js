const travelWords = require('../../data/words')
const businessWords = require('../../data/businessWords')
const customWords = require('../../data/customWords')
const DELETED_WORDS_STORAGE_KEY = 'deletedWordKeys'

Page({
  data: {
    libraries: []
  },

  onLoad() {
    this.refreshLibraries()
  },

  onShow() {
    this.refreshLibraries()
  },

  openLibrary(event) {
    const library = event.currentTarget.dataset.library
    wx.navigateTo({
      url: `/pages/index/index?library=${library}`
    })
  },

  refreshLibraries() {
    const deletedWordKeys = this.loadDeletedWordKeys()

    this.setData({
      libraries: [
        {
          id: 'travel',
          title: '旅行',
          subtitle: '机场、酒店、交通与观光',
          wordCount: this.countActiveWords(travelWords, deletedWordKeys, 'travel'),
          accent: 'travel'
        },
        {
          id: 'business',
          title: '商务',
          subtitle: '职场、交易、财务与办公',
          wordCount: this.countActiveWords(businessWords, deletedWordKeys, 'business'),
          accent: 'business'
        },
        {
          id: 'custom',
          title: '自定义',
          subtitle: '你指定的专属词库',
          wordCount: this.countActiveWords(customWords, deletedWordKeys, 'custom'),
          accent: 'custom'
        }
      ]
    })
  },

  countActiveWords(words, deletedWordKeys, libraryId) {
    return words.filter(word => !this.isDeleted(word, deletedWordKeys, libraryId)).length
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

  isDeleted(word, deletedWordKeys, libraryId) {
    return deletedWordKeys[this.getDeletedWordKey(word, libraryId)] === true || deletedWordKeys[this.getWordKey(word)] === true
  },

  getDeletedWordKey(word, libraryId) {
    return `${libraryId}|${word.japanese}`
  },

  getWordKey(word) {
    return `${word.chinese}|${word.japanese}|${word.kana}`
  }
})
