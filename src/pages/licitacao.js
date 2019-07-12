import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

const Page = () => (
    <View>
        <Text style={styles.titulo}>
            Código da licitação:
            <Text style={styles.text}> {this.props.CodLicitacao} </Text>
        </Text>

        <Text style={styles.titulo}> Data: 
             <Text style={styles.text}> {this.props.Data} </Text>  
        </Text>

        <Text style={styles.titulo}> Nome Obg: 
            <Text style={styles.text}> {this.props.NomeObg} </Text>  
        </Text>

        <Text style={styles.titulo}> Observação: 
            <Text style={styles.text}> {this.props.Obs} </Text>  
        </Text>

        <Text style={styles.titulo}> Tipo da licitação: 
            <Text style={styles.text}> {this.props.TipoLicitacao} </Text>  
        </Text>

        <Text style={styles.titulo}> Valor: 
            <Text style={styles.text}> {this.props.Valor} </Text>  
        </Text>

    </View>
);

renderItem = ( {item} ) => (


    <View style={styles.licContainer}>

        
        <Text style={styles.licNome}> {item.NomeObg} </Text>
        <Text style={styles.licChave}> {item.CodLicitacao} </Text>

        <TouchableOpacity style={styles.licButton} onPress={ () => this.props.navigation.navigate('Licitacao', props=item) }>
            <Text style={styles.licButtonText}> Acessar </Text>
        </TouchableOpacity> 

    </View>
);

const styles = StyleSheet.create({
    text : {
        color: '#DA552F',
        fontSize: 18
    },
    titulo: {
        color: 'blue',
        fontSize: 20
    }
});

export default Page;