import {  StyleSheet, Text, View } from 'react-native'

const Heading = ({ title, description }) => {

    return (
        <View style={styles.cont}>
            <View style={styles?.secondView}>
                <Text style={styles.txt1}>{title}</Text>
                <View style={{ width: 350 }}>
                    <Text style={styles.txt2}>{description}</Text>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    cont: {
        width: '100%'
    },
    txt1: {
        color: '#000',
        fontWeight: '500',
        fontSize: 17
    },
    txt2: {
        color: '#67686E',
        fontWeight: '400',
        fontSize: 15,
    },
    secondView: {
        gap: 10,
        paddingTop: 10
    },
  
})

export { Heading }
