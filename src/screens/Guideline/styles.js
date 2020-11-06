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
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        backgroundColor:'#FAEBE9',
        elevation:5,
        margin:10
      },
      edit:{
        justifyContent:'flex-end',
      }
})
