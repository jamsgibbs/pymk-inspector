const state = {
  dbPath: '',
  hasCredentials: false,
  username: '',
  allPeople: [],
  allSessions: [],
  filteredPeople: [],
  filteredSessions: [],
  serviceName: 'pymkinspector',
  summary: {},
  scrapeFrequency: 2,
  mostRecent: {}
}

const getters = {
  dbPath: state => state.dbPath,
  allPeople: state => state.allPeople,
  allSessions: state => state.allSessions,
  filteredPeople: state => state.filteredPeople,
  hasCredentials: state => state.hasCredentials,
  filteredSessions: state => state.filteredSessions,
  username: state => state.username,
  serviceName: state => state.serviceName,
  summary: state => state.summary,
  mostRecent: state => state.mostRecent,
  scrapeFrequency: state => state.scrapeFrequency
}

const mutations = {
  SET_DB_PATH (state, dbPath) {
    state.dbPath = dbPath
  },
  SET_ALL_PEOPLE (state, allPeople) {
    state.allPeople = allPeople
  },
  SET_ALL_SESSIONS (state, allSessions) {
    state.allSessions = allSessions
  },
  SET_SESSION_IDS (state, sessionIds) {
    state.sessionIds = sessionIds
  },
  CLEAR_SESSIONS (state) {
    state.allSessions = []
    state.filteredSessions = []
  },
  SET_FILTERED_PEOPLE (state, filteredPeople) {
    state.filteredPeople = filteredPeople
  },
  SET_FILTERED_SESSION (state, filteredSessions) {
    state.filteredSessions = filteredSessions
  },
  CLEAR_PEOPLE (state) {
    state.allPeople = []
    state.filteredPeople = []
  },
  SET_CREDENTIALS (state, username) {
    state.username = username
    state.hasCredentials = true
  },
  DELETE_CREDENTIALS (state) {
    state.username = ''
    state.hasCredentials = false
    state.scrapeFrequency = 2
  },
  SET_SUMMARY (state, summary) {
    state.summary = summary
  },
  SET_MOST_RECENT (state, mostRecent) {
    state.mostRecent = mostRecent
  },
  SET_FREQUENCY (state, freq) {
    state.scrapeFrequency = freq
  }
}

const actions = {
  setDbPath ({ commit }, dbPath) {
    commit('SET_DB_PATH', dbPath)
  },
  setCredentials ({ commit }, username) {
    commit('SET_CREDENTIALS', username)
  },
  deleteCredentials ({ commit }) {
    commit('DELETE_CREDENTIALS')
  },
  setMostRecent ({ commit }, mostRecent) {
    commit('SET_MOST_RECENT', mostRecent)
  },
  setSummary ({ commit }, summary) {
    commit('SET_SUMMARY', summary)
  },
  setFrequency ({ commit }, freq) {
    commit('SET_FREQUENCY', freq)
  },
  setAllPeople ({ commit }, allPeople) {
    commit('SET_ALL_PEOPLE', allPeople)
  },
  setAllSessions ({ commit }, allSessions) {
    commit('SET_ALL_SESSIONS', allSessions)
  },
  setFilteredPeople ({ commit }, filteredPeople) {
    commit('SET_FILTERED_PEOPLE', filteredPeople)
  },
  setFilteredSessions ({ commit }, filteredSessions) {
    commit('SET_FILTERED_SESSION', filteredSessions)
  },
  clearSessions ({ commit }) {
    commit('CLEAR_SESSIONS')
  },
  clearPeople ({ commit }) {
    commit('CLEAR_PEOPLE')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
