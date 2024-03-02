import { useNavigation } from '@react-navigation/native'
import { View } from 'native-base'
import React from 'react'
import { Header } from '../../components/navigation/header'
import { Colors } from '../../utils/utilities'

const TranscriptScreen = () => {
    const navigation: any = useNavigation()

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <View padding={5}>
                <Header navigation={navigation} text={'Transkrip Nilai'} />
            </View>
        </View>
    )
}

export default TranscriptScreen;