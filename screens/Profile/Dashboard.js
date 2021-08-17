import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { List, NativeBaseProvider, Switch, Button, } from "native-base";
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import CartDetail from '../Components/CartDetail';
import { ImageBackground } from 'react-native';
const Dashboard = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_Content}>
                    <View style={styles.header_back}>
                        <AntDesign name="left" size={24} color="#ffffff"
                            onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.header_center}>
                        <Text style={styles.header_textCenter}>Profile</Text>
                    </View>
                    <View style={styles.header_Right}>
                        <Ionicons name="notifications-outline" size={28} color="white" />
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{ flex: 1, width: '100%', height: '100%', padding: 10, paddingLeft: 30 }}>
                        <Image source={{ uri: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F07%2Fjustin-bieber2-1.jpg" }}
                            style={styles.userImg}></Image>
                    </View>
                    <View style={styles.header_Detail}>
                        <Text style={styles.username}>Dunh vidou</Text>
                        <Text style={styles.useremail}>vidou.dunh@khbmedia.asia</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 7, backgroundColor: '#0A8791', alignItems: 'center' }}>
                <View style={{ flex: 1, backgroundColor: '#e6e6e6', width: '100%', borderTopLeftRadius: 300, alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', width: '90%', height: '17%', borderRadius: 20, top: -30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10 }}>
                        <View style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                            {/* <MaterialCommunityIcons name="airplane-takeoff" size={28} color="#26734d" /> */}
                            <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/619/619043.png' }}
                                style={styles.titleCart} />
                            <Text style={{ color: '#4d4d4d' }}>Delivery</Text>
                        </View>

                        <View style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                            {/* <FontAwesome5 name="shopping-cart" size={28} color="#ff8566" />÷ */}
                            <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/3566/3566511.png' }}
                                style={styles.titleCart} />
                            <Text style={{ color: '#4d4d4d' }}>Cart</Text>
                        </View>
                        <View style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                            <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/3799/3799960.png' }}
                                style={styles.titleCart} />
                            <Text style={{ color: '#4d4d4d' }}>History</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: '#fff', width: '90%', height: '85%', borderRadius: 10, top: -20 }}>
                        <NativeBaseProvider>
                            <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
                                <List borderColor='white' >
                                    <Text style={{ fontSize: 17, fontWeight: '700', paddingLeft: 10 }}>My Account</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
                                        <List.Item style={styles.borderitem} >
                                            <FontAwesome5 style={styles.leftIcon} name="user" />
                                            <Text style={styles.textCenter}>Profile</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />
                                        </List.Item>
                                    </TouchableOpacity>
                                    <TouchableOpacity   onPress={() => navigation.navigate("Order")} >
                                        <List.Item style={styles.borderitem} >
                                            <FontAwesome5 style={styles.leftIcon} name="user" />
                                            <Text style={styles.textCenter}>My Product</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />
                                        </List.Item>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate("PaymentHistory")}>
                                        <List.Item style={styles.borderitem}>
                                            <AntDesign name="mail" style={styles.leftIcon} />
                                            <Text style={styles.textCenter} >Payment History</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />

                                        </List.Item>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 17, fontWeight: '700', paddingLeft: 10 }}>Notification</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("PaymentHistory")}>
                                        <List.Item style={styles.borderitem}>
                                            <FontAwesome5 style={styles.leftIcon} name="history" />
                                            <Text style={styles.textCenter} >Notification </Text>
                                            <Switch size="sm" style={styles.rightIcon} isChecked='true' />
                                        </List.Item>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("PaymentHistory")}>
                                        <List.Item style={styles.borderitem}>
                                            <FontAwesome5 style={styles.leftIcon} name="history" />
                                            <Text style={styles.textCenter} >Promote </Text>
                                            <Switch size="sm" style={styles.rightIcon} />
                                        </List.Item>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <List.Item style={styles.borderitem}>
                                            <FontAwesome5 style={styles.leftIcon} name="history" />
                                            <Text style={styles.textLogout}>Log Out </Text>
                                            <AntDesign style={styles.rightIcon} name="right" />
                                        </List.Item>
                                    </TouchableOpacity>

                                </List>
                            </ScrollView>
                        </NativeBaseProvider>
                    </View>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        flexDirection: 'column'
    },
    header: {
        flex: 3,
        backgroundColor: '#0A8791',
        borderBottomRightRadius: 400,
    },
    header_Content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-end",
    },
    header_back: {
        flex: 3,
        backgroundColor: '#0A8791',
        borderBottomRightRadius: 400,
        paddingLeft:10

    },
    header_Detail: {
        flex: 3,
        width: '100%',
        height: '100%',
        paddingTop: 20,
        flexDirection: 'column',
    },
    header_center: {
        flex: 3,
    },
    header_textCenter: {
        fontSize: 19,
        fontWeight: '600',
        color: 'white'
    },
    header_Right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    userImg: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    borderitem: {
        height: 50,
        flex: 1,
        justifyContent: 'space-between',
    },
    titleCart: {
        width: 30,
        height: 30

    },
    username: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    useremail: {
        color: 'white',
        fontSize: 12
    },
    leftIcon:
    {
        fontSize: 17,
        color: '#0A8791',
        marginLeft: 2,
        marginRight: 10
    },
    textCenter: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray'
    },
    textLogout: {
        fontSize: 15,
        color: '#0A8791',
        fontWeight: '500'
    },
    rightIcon: {
        color: '#0A8791',
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 17
    }
});
export default Dashboard;