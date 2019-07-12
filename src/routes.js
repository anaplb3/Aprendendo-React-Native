import { createStackNavigator } from 'react-navigation'
import Main from './pages/main'
import Licitacao from './pages/licitacao'

export default createStackNavigator( {
    Home: Main,
    Licitacao: Licitacao,
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },
});