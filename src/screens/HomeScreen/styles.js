import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop:80,
        backgroundColor:'#ffffff',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight:'bold'
    },
    subt: {
        fontSize: 16,
        color: '#8E8E8E',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontWeight:'bold'
    },
    tx:{
        textAlign:'center',
        color: '#8E8E8E',
    },
    inputT: {
        height: 35,
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#1F4150',
        padding: 5,
        textAlign: 'center',
        color:'white',
        alignSelf:'center'
    },
    inputD: {
        height: '30%',
        width: '90%',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#1F4150',
        marginTop: 20,
        marginBottom: 20,
        padding: 5,
        textAlign: 'center',
        color:'white',
        alignSelf:'center'
    },
    img: {
        alignSelf:'center'
    },
    imageUpIcon: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    btn:{
        backgroundColor:'#E9967A',
        padding:10,
        borderRadius:10,
        marginTop:35,marginLeft:60,marginRight:60,
        justifyContent:'center',
        alignItems:'center'
    },
    bText:{
        fontWeight:'bold',
        textAlign:'center',
        marginLeft:10
    },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        alignSelf:'center'
    },
    plus:{
        height:50,
        width:50,
        resizeMode:'cover',
        margin:20
    },
    btns:{
        flexDirection:'row',
        margin:10,
        padding:20,
        justifyContent:'space-between',
        width:'100%',
        height:200,
        
    },
    buttonU:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:20,
        marginLeft:40,marginRight:40,marginTop:10,marginBottom:10,
        elevation:5,
        padding:10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
    }

})
