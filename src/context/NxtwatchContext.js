import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedVideosList: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  isSidebarVisible: false,
  toggleSidebar: () => {},
})
export default ThemeContext
