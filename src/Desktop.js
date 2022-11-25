import { useState } from 'react'

import MenuBar from './components/MenuBar'
import Dock from './components/Dock'
import Window from './components/Window'
import AppLauncher from './components/AppLauncher/AppLauncher'

const Desktop = () => {
    const [apps, setApps] = useState(['welcome'])
    
    const openApp = (app) => setApps(apps.concat(app))
    const closeApp = (capp) => setApps(apps.filter(app => app !== capp))

    return (
        <div>
            <MenuBar />
            {apps.map((app, index) => 
                <Window key={index} onClose={() => {closeApp(app)}}>
                    <AppLauncher name={app} />
                </Window>
            )}
            <Dock openApp={openApp} />
        </div>
    )
}

export default Desktop