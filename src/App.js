import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import ThemeContext from './context/NxtwatchContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {savedVideosList: [], isDark: false, isSidebarVisible: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarVisible: !prevState.isSidebarVisible,
    }))
  }

  addSavedVideo = data => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, data],
    }))
  }

  removeSavedVideo = data => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(
        eachItem => eachItem.id !== data.id,
      ),
    }))
  }

  render() {
    const {isDark, savedVideosList, isSidebarVisible} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
          isSidebarVisible,
          toggleSidebar: this.toggleSidebar,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
