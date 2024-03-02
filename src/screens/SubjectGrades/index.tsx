import { useNavigation } from '@react-navigation/native'
import { View } from 'native-base'
import React from 'react'
import { Header } from '../../components/navigation/header'
import { Colors } from '../../utils/utilities'

const SubjectGradeScreen = () => {
    const navigation: any = useNavigation()

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <Header navigation={navigation} text={'Nilai Mata Kuliah'} />
        </View>
    )
}

export default SubjectGradeScreen;