import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff',
    },
    list: {
        marginTop:10,
        padding:10,
      },
      title:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign:'center',
        margin:40
      },
      txt:{
        fontSize:17
      },
      litem:{
        marginLeft:20
      },
      items:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth:2,
        borderTopWidth:2,
        padding:10,
      },
      edit:{
        justifyContent:'flex-end',
        width:'40%',
        alignItems:'flex-end'
      }
})
