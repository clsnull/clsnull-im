import { FC } from 'react'
import {
    TabBar,
    NavBar,
    Button
} from 'antd-mobile'

import {
    AppOutline,
    UserOutline
} from 'antd-mobile-icons'
import './Root.css'
import {
    Outlet,
    useNavigate
} from 'react-router-dom'

const Bottom: FC = () => {
    const navigate = useNavigate()
    const tabs = [{
        key: '/',
        title: 'group',
        icon: <AppOutline />
    }, {
        key: '/my',
        title: 'My',
        icon: <UserOutline />
    }]
    const setRouteActive = (value: string) => {
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

export default function Root() { 
    return (
        <div className="app">
            <div className='top'>
                <NavBar children="Title"></NavBar>
            </div>
            <div className="body">
                <Outlet/>
            </div>
            <div className="bottom">
                <Bottom />
            </div>
        </div>
    )
}