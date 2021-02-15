import React from 'react';
import { asset, StyleSheet, View, Text, Image } from 'react-360';
import { ImageBackground } from "react-native";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={[styles.container, styles.containerColor]}>
                    <Image style={[styles.image]} source={asset("VR-dame.png")}></Image>
                    <View style={[styles.innerContainer]}>
                        <Text style={styles.text}>Bij jou? Of bij ons?</Text>
                        <Text style={styles.text}>Maak een virtuele reis. Op je eigen locatie. Of bij ons.</Text>
                    </View>
                </View>

                <ImageBackground source={asset("home.jpg")} 
                style={[styles.image]}>
                    <View style={[styles.innerContainer]}>
                        <Text style={styles.text}>virtuele reis</Text>
                        <Text style={styles.text}>door de geschiedenis van de islam</Text>
                        <Text style={styles.text}>Islam Experience Centre</Text>
                        <Text style={styles.text}>Bezoek ons centrum of nodig onze bus op jouw locatie uit om een Virtuele Reis af te</Text>
                        <Text style={styles.text}>leggen door de rijke geschiedenis van de Islam</Text>
                    </View>
                </ImageBackground>

                <View style={[styles.container, styles.containerColor]}>
                    <Image style={[styles.image]} source={asset("landkaart-1.png")}></Image>
                    <View style={[styles.innerContainer]}>
                        <Text style={styles.text}>Waar we binnenkort zijn?</Text>
                        <Text style={styles.text}>Dat bepaal jij!</Text>
                        <Text style={styles.text}>Geef ons door dat je interesse hebt, dan bespreken we samen de meest gepaste opties.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 600,
        flexDirection: "row"
    },
    containerColor: {
        backgroundColor: "#8624E1",
        marginRight:10,
    },
    innerContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",  
        // textAlignVertical: 'center',
        // backgroundColor: "red",
    },
    image: {
        flex: 1,
        // resizeMode: "cover",
        justifyContent: "center",
        marginRight: 20,
        opacity: 0.7
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",        
    }
});
