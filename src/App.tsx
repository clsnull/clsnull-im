import { FC } from 'react'
import {
  TabBar,
  NavBar
} from 'antd-mobile'
import {
  AppOutline,
  UserOutline
} from 'antd-mobile-icons'
import './App.css'

const Bottom: FC = () => {
  const tabs = [{
    key: '/group',
    title: 'group',
    icon: <AppOutline />
  }, {
    key: '/my',
    title: 'My',
    icon: <UserOutline />
  }]
  const setRouteActive = (value: String) => {
    console.log(value)
  }
  return (
    <TabBar onChange={value => setRouteActive(value)}>
      {tabs.map(item =>
        <TabBar.Item key={item.key} title={item.title} icon={item.icon}></TabBar.Item>
      )}
    </TabBar>
  )
}

function App() {
  return (
    <div className="app">
      <div className='top'>
        <NavBar children="Title"></NavBar>
      </div>
      <div className="body">
      </div>
      <div className="bottom">
        <Bottom />
      </div>
    </div>
  )
}

export default App
