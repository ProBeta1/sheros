import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#ffffff'
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    lbutton: {
        backgroundColor: '#E9967A',
        marginLeft: 15,
        marginTop: 20,
        height: 42,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center'
    },

    rbutton: {
        backgroundColor: '#FF033E',
        marginRight: 15,
        marginTop: 20,
        height: 42,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',

    },
    logo: {
        flex: 1,
        height: 200,
        width: 200,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 42,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#E2E2E2',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#E9967A',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        height: 44,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})
