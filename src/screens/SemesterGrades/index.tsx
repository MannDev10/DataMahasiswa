import { useNavigation } from '@react-navigation/native'
import { View } from 'native-base'
import React from 'react'
import { Header } from '../../components/navigation/header'
import { Colors } from '../../utils/utilities'

const SemesterGradeScreen = () => {
    const navigation: any = useNavigation()

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <Header navigation={navigation} text={'Nilai Semester'} />
        </View>
    )
}

export default SemesterGradeScreen;