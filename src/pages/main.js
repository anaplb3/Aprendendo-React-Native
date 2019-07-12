import React, {Component} from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import api from '../services/api'


export default class Main extends Component {
    static navigationOptions = {
        title: 'Licitações'
    };

    state = {
        licitacoes: [],
        page: 1,
        response_status : 0
    }

    componentDidMount() {
        this.loadLicitacoes();
    }

    loadLicitacoes = async (page = 1) => {
        let response, licitacoes;

        response = await api.get(`/licitacoes?pagina=${page}`)
        if (response.status > 200) {
            licitacoes = null
            this.setState( {response_status : response.status} )
        } else {
            licitacoes = response.data
            this.setState( {licitacoes: [...this.state.licitacoes, ...licitacoes], page});
        }

    };

    renderItem = ( {item} ) => (


        <View style={styles.licContainer}>

            
            <Text style={styles.licNome}> {item.NomeObg} </Text>
            <Text style={styles.licChave}> {item.CodLicitacao} </Text>

            <TouchableOpacity style={styles.licButton} onPress={ () => this.props.navigation.navigate('Licitacao', props=item) }>
                <Text style={styles.licButtonText}> Acessar </Text>
            </TouchableOpacity> 

        </View>
    );

    loadMore = () => {
        const page  = this.state.page;

        const pageNumber = page + 1;

        this.loadLicitacoes(pageNumber);
    }

    render() {

        const flatlist = <FlatList
        contentContainerStyle={styles.list} 
        data={this.state.licitacoes} 
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.1}
        />;

        const nada = <Text style={styles.errorText}> Err, eu acho que tem algo errado...</Text>;
        
        return(
            <View style={styles.container}>

                {this.state.response_status > 200 ? nada : flatlist}
                
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },

    errorText: {
        fontSize: 22,
        color: "#DA552F",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    list: {
        padding: 20
    },

    licContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    licNome: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    licChave: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    licButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 
    },

    licButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});