import React, {Component} from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import api from '../services/api'
import DropdownMenu from 'react-native-dropdown-menu'

export default class Main extends Component {
    static navigationOptions = {
        title: 'Licitações'
    };

    state = {
        licitacoes: [],
        page: 1,
    }

    componentDidMount() {
        this.loadLicitacoes();
    }

    loadLicitacoes = async (page = 1) => {
        
        const response = await api.get(`/licitacoes?pagina=${page}`);
        const licitacoes = response.data;
        
        this.setState( {
            licitacoes: [...this.state.licitacoes, ...licitacoes], page});
        
    };

    renderItem = ( {item} ) => (
        <View style={styles.partContainer}>
            <Text style={styles.partNome}> {item.NomeObg} </Text>
            <Text style={styles.partChave}> {item.CodLicitacao} </Text>

            <TouchableOpacity style={styles.partButton} onPress={ () => {} }>
                <Text style={styles.partButtonText}> Acessar </Text>
            </TouchableOpacity>
        </View>
    );

    loadMore = () => {
        const page  = this.state.page;

        const pageNumber = page + 1;

        this.loadLicitacoes(pageNumber);
    }

    render() {
        return(
            <View style={styles.container}>

                <FlatList
                    contentContainerStyle={styles.list} 
                    data={this.state.licitacoes} 
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                    />
                
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },

    list: {
        padding: 20
    },

    partContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    partNome: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    partChave: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    partButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 
    },

    partButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});