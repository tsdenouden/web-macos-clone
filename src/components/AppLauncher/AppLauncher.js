import IFrame from '../IFrame'
import Welcome from './Welcome'

const AppLauncher = ({ name }) => {
    switch (name) {
        case 'chrome':
            return <IFrame url="https://www.google.com/search?igu=1" title="google" />
        default:
            return <Welcome />
    }
}

export default AppLauncher