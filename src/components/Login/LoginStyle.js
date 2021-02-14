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

    },

    footerView: {
        flex: 2,
        backgroundColor: Colors.white,
    },
    cardView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        position: 'absolute',
        zIndex: 2,
        borderRadius: responsiveWidth(2),
        alignSelf: 'center',
        marginTop: responsiveHeight(20),
        backgroundColor: '#fff',
    },
    logintext: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
        fontWeight: '500',
        color: Colors.darkBlue
    },
    h: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        fontWeight: '500',
        color: Colors.white
    },
    inputView: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(2),
        justifyContent: 'space-evenly',
        marginTop: responsiveHeight(4),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: .3,
    },
    input: {
        width: '70%',

    },
    loginButton: {
        alignSelf: 'center',
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(2),
        backgroundColor: Colors.cyanBlue,
        marginTop: responsiveHeight(3.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: responsiveFontSize(2),
        color: Colors.white
    },
    signupView: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
    },
    signupText: {
        color: Colors.fadeBlue,
        fontSize: responsiveFontSize(2)
    },
    pickerView: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveWidth(2),
        marginTop: responsiveHeight(4),
        borderWidth: .3,




    },

    headerView2: {
        marginLeft: responsiveWidth(4),
        flexDirection: 'row',
        width: responsiveWidth(70),
        alignItems: 'center',
        marginTop: responsiveHeight(5),
    },
    headerView: {
        flex: 1,
        width: responsiveWidth(100),
        alignSelf: 'flex-start',
        backgroundColor: Colors.cyanBlue,


    },



})