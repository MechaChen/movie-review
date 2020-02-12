import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { images } from '../shared/imageSources';

export default function reviewDetails({ route, navigation }) {

    const { title, genre, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={styles.title}>{title}</Text>
                <Text style={globalStyles.contentText}>Genre : {genre}</Text>
                <Text style={globalStyles.contentText}>Rating : {<Image source={images.ratings[rating]} />}</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#2c3531',
        fontFamily: 'Pridi-Bold',
        fontSize: 24,
    }
});