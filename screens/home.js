import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Top Gun: Maverick', genre: 'Action', rating: 5, key: '1' },
        { title: 'Birds of Prey', genre: 'Action', rating: 2, key: '2' },
        { title: 'Black Widow', genre: 'Science fiction', rating: 1, key: '3' },
        { title: 'No Time to Die', genre: 'Action', rating: 4, key: '4' },
        { title: 'Mulan', genre: 'War', rating: 2, key: '5' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    const removeReview = (key) => {
        setReviews(reviews.filter((review) => review.key !== key));
    }

    return (
        <View style={globalStyles.container}>
            {/* Title */}
            <Text style={globalStyles.titleText}>Home Screen</Text>

            {/* Modal */}
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        <ReviewForm addReview={addReview} />
                        {/* <Text>Hello from the modal :D</Text> */}
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <TouchableOpacity style={globalStyles.addArea} onPress={() => setModalOpen(true)}>
                <MaterialIcons name="add-circle" size={35} color="#ffcb9a" />
                <Text style={globalStyles.addText}>add review</Text>
            </TouchableOpacity>

            {/* Review List */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card direction="row">
                            <Text style={globalStyles.contentText}>{item.title}</Text>
                            <MaterialIcons name="delete" size={28} color="#2c3531" onPress={() => removeReview(item.key)} />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#d1e8e2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#d1e8e2',
    },
});