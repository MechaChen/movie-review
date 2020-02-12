import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#116466',
        height: '100%',
    },
    titleText: {
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 40,
        fontFamily: 'Pridi-Bold',
        color: '#ffcb9a',
    },
    contentText: {
        fontFamily: 'Pridi',
        fontSize: 20,
        color: '#2c3531',
    },
    addArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
    },
    addText: {
        color: '#ffcb9a',
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Pridi',
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
});
