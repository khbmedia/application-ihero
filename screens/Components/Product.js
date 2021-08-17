
import * as React from "react";
import { Entypo } from '@expo/vector-icons';
import Star from 'react-native-star-view';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
const ProductList = props => {
    const navigation = useNavigation();
    const ProductDetailScreen = (ele) => {
        navigation.navigate("ShopProfile"); 
    }
    return props.Pro_List.map
        (ele =>
            <TouchableOpacity style={props.Pro_List, styles.boxItem} key={ele.id} onPress={() => ProductDetailScreen(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ url: ele.product_image[0].path }} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>

                        <Text style={{ color: 'gray', fontSize: 12 }}>
                            <Ionicons name="md-fast-food-outline" size={15} color="orange" />
                            burger / The United State
                        </Text>
                        <View style={styles.aboutshop}>
                            <Ionicons name="star" size={12} color="orange" />
                            <Text style={{color:'#8c8c8c',fontSize:12}}>10mn</Text>
                            <Text style={{color:'#8c8c8c',fontSize:12}}>contact</Text>

                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: {
        height: 90,
        width: '98%',
        borderRadius: 7,
        padding: 3,

        marginVertical: 2,
        marginHorizontal: 5,
        backgroundColor: '#fafafa',


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imagestyle: {
        width: '100%',
        height: '95%',
        borderRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    Pro_image: {
        flex: 1,
        width: '100%',

    },
    Pro_detail: {
        flex: 3,
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold',
        padding:6
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 80,
        height: 20,
        marginBottom: 20,
        bottom: 1,
        position: 'absolute'
    },
    aboutshop:{ 
        color: '#bfbfbf', 
        fontSize: 12, 
        justifyContent:'space-between',
        flexDirection:'row',
        padding:6
    }
});
export default ProductList;