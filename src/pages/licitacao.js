import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Page = () => (
    <View>
        <Text style={styles.text}> {this.props.NomeObg} </Text>
    </View>
);

const styles = StyleSheet.create({
    text : {
        color: 'blue',
        fontSize: 20
    }
});

export default Page;