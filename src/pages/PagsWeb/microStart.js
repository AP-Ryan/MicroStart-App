import * as React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function Headset({ navigation }) {
    
    <StatusBar barStyle="light-content" backgroundColor="#000000" />
    const webheadset = 'https://microstart.azurewebsites.net'

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '100%' }}>
                <WebView
                    source={{ uri: webheadset }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
    }


}); 