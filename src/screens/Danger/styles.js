import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff',
    },
      title:{
        fontSize:22,
        fontWeight: 'bold',
        textAlign:'center',
        margin:45,
        color:'#D73E2E'
      },
      alertIcon:{
        width:150,
        height:150,
        resizeMode:'cover'
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
        fontSize:17,
        marginBottom:20,
        textAlign:'center'
      },
      mapV:{
        //borderRadius:100,
        borderWidth:5,
        borderColor:'#D73E2E',
        height:360,
        width:360,
        alignSelf:'center'
      },
      helpImage:{
        width:50,
        height:50,
        resizeMode:'cover'
      }
      
})
