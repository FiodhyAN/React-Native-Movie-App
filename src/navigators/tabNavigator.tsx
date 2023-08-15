import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";
import { COLOR, FONTSIZE, SPACING } from "../theme/theme";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ 
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLOR.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10,
                }
             }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    return <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLOR.Orange} : {}]}>
                        <FontAwesome6 name="film" size={FONTSIZE.size_30} color={COLOR.White} />
                    </View>
                }
             }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    return <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLOR.Orange} : {}]}>
                        <FontAwesome6 name="magnifying-glass" size={FONTSIZE.size_30} color={COLOR.White} />
                    </View>
                }
             }} />
            <Tab.Screen name="Ticket" component={TicketScreen} options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    return <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLOR.Orange} : {}]}>
                        <FontAwesome6 name="ticket" size={FONTSIZE.size_30} color={COLOR.White} />
                    </View>
                }
             }} />
            <Tab.Screen name="User" component={UserAccountScreen} options={{ 
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    return <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLOR.Orange} : {}]}>
                        <FontAwesome6 name="user" size={FONTSIZE.size_30} color={COLOR.White} solid  />
                    </View>
                }
             }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLOR.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10
    },
});

export default TabNavigator;