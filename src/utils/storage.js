import config from './../config'

export default {
  setItem (key, value) {
    const storage = this.getStorage()
    storage[key] = value
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  getItem (key) {
    return this.getStorage()[key]
  },
  clearItem (key) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  clearAll () {
    // 清除数据
    window.localStorage.clear()
  },
  getStorage () {
    // 从localStorage中获取数据
    return JSON.parse(window.localStorage.getItem(config.namespcae) || '{}')
  }

}
