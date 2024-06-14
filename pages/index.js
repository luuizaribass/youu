import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bem_Vindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../assets/oii.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>
                    Pesquise seu vídeo já!
                </Text>
                <Text style={styles.text}>
                    Escolha: Youtube ou Vimeo, clique e comece!
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('rotaInterna')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
            
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#6E707E',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
        color: "white"
    },
    text: {
        color: 'white'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }
});
