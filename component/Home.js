import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View,} from 'react-native';
import Constants from 'expo-constants';
import {Actions} from 'react-native-router-flux';


function Separator() {
    return <View style={styles.separator}/>;
}


const goToCamera = () => {
    Actions.camera();
};

class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                       Susu krli? Now wash your hands and click the below button.
                    </Text>
                    <Button
                        title="Press Me"
                        onPress={() => goToCamera()}
                    />
                </View>
                {/*<Separator/>*/}
              {/*  <View>
                    <Text style={styles.title}>
                        Adjust the color in a way that looks standard on each platform. On
                        iOS, the color prop controls the color of the text. On Android, the
                        color adjusts the backgroud color of the button.
                    </Text>
                    <Button
                        title="Press me"
                        color="#f194ff"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View>*/}
                {/*<Separator/>*/}
               {/* <View>
                    <Text style={styles.title}>
                        All interaction for the component are disabled.
                    </Text>
                    <Button
                        title="Press me"
                        disabled
                        onPress={() => Alert.alert('Cannot press this one')}
                    />
                </View>
                <Separator/>
                <View>
                    <Text style={styles.title}>
                        This layout strategy lets the title define the width of the button.
                    </Text>
                    <View style={styles.fixToText}>
                        <Button
                            title="Left button"
                            onPress={() => Alert.alert('Left button pressed')}
                        />
                        <Button
                            title="Right button"
                            onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>*/}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Home

