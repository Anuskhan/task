import { StyleSheet} from 'react-native';
import Colors from '../../utils/colors'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: responsiveWidth(100),
        backgroundColor: Colors.yellow,

    },
    headerView: {
        flex: 0.2,
        width: responsiveWidth(100),
        alignSelf: 'flex-start',
        backgroundColor: Colors.yellow,


    },
    h: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        fontWeight: '500',
        color: Colors.black
    },
main:{
    justifyContent: "space-between"
    , width: "99%", paddingVertical: 10,
    // borderBottomWidth: 1, borderBottomColor: "#b2b2b2",
    marginHorizontal: 10, paddingBottom: 5
},
top:{ flex: 0.9, marginTop: -10, backgroundColor: "#fff", borderTopRightRadius: 10, borderTopLeftRadius: 10 },
f:{ flex: 1 },
sub:{
    marginBottom: 1, width: "45%", margin: 5,
    borderWidth: 1, borderColor: "#f2f2f2",
    borderRadius: 10, elevation: 4,
    paddingVertical: 20, alignItems: "center", backgroundColor: "#fff",
},


listItemImageUser: {
    width: 25,
    height: 25,
    borderRadius: Platform.OS === 'ios' ? 25 / 2 : 25,
},
listItem: {
    padding: 15,
    backgroundColor:Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
},
listItemDetail: {
    flex: 1,
    justifyContent:"space-between"
},
row:{
    flexDirection:"row"
},
load: {
    padding: 10
},
listItemText: {
    fontWeight: "400",
    fontSize: 18,
    color: '#000'
},
listItemSubText: {
    flex: 1,
    fontSize: 14
},
icon: {
    fontSize: 24
},
listItemDetailIconButton: {

    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    borderRadius: Platform.OS === 'ios' ? 32 / 2 : 32,
    alignItems: 'center',
    justifyContent: 'center',
},

lis:{
    
    borderBottomLeftRadius: 25, paddingVertical: 10, alignItems: "center"
}
})