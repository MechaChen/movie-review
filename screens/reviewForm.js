import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title:
        yup.string()
            .required()
            .min(4),
    genre:
        yup.string()
            .required()
            .min(4),
    rating:
        yup.string()
            .required()
            .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
                return parseInt(val) > 0 && parseInt(val) < 6
            })
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Formik
                initialValues={{ title: '', genre: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput
                            multiline
                            minHeight={60}
                            style={styles.input}
                            placeholder="Review genre"
                            onChangeText={props.handleChange('genre')}
                            value={props.values.genre}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.genre && props.errors.genre }</Text>

                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            placeholder="Review rating"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>

                        <FlatButton
                            text="submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#666',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    inputGroup: {
        marginHorizontal: 40,
    }
});