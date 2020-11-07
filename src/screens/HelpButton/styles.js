import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
      title:{
        fontSize:22,
        fontWeight: 'bold',
        textAlign:'center',
        margin:45,
        color:'#D73E2E'
      },
      alertIcon:{
        width:200,
        height:200
      },
      btn:{
        backgroundColor:'#D73E2E',
        margin:10,
        paddingLeft:20,paddingRight:20,padding:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
      },
      btnText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
      },
      btn2:{
        backgroundColor:'#D73E2E',
        margin:40,
        padding:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
      },
      ht:{
        fontSize:19,
        fontStyle:'italic',
        marginBottom:20
      },input: {
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
      
})
