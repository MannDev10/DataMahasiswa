import { useNavigation } from '@react-navigation/native'
import { Center, FlatList, Stack, Text, View } from 'native-base'
import React from 'react'
import Spinner from 'react-native-spinkit'
import { Header } from '../../components/Navigation/header'
import { Colors, Constant } from '../../utils/utilities'

const SemesterData = [
    {
        semester: '1',
        studies: '10',
        sks: '24',
        grade: '389',
        temp_ipk: '3.78'
    },
    {
        semester: '2',
        studies: '12',
        sks: '23',
        grade: '359',
        temp_ipk: '3.60'
    },
    {
        semester: '3',
        studies: '11',
        sks: '22',
        grade: '324',
        temp_ipk: '3.70'
    },
    {
        semester: '4',
        studies: '10',
        sks: '20',
        grade: '373',
        temp_ipk: '3.80'
    },
    {
        semester: '5',
        studies: '10',
        sks: '22',
        grade: '365',
        temp_ipk: '3.78'
    },
    {
        semester: '6',
        studies: '8',
        sks: '20',
        grade: '377',
        temp_ipk: '3.75'
    },
]

const SemesterGradeScreen = () => {
    const navigation: any = useNavigation()
    const [init, setInit] = React.useState(false)
    const [isLoading, setLoading] = React.useState(true)
    const [tableData, setTableData] = React.useState<any[]>([])

    React.useEffect(() => {
        setTableData(SemesterData)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [init])

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            {
                isLoading ? null :
                    <View padding={5}>
                        <Header navigation={navigation} text={'Nilai Semester'} />
                    </View>
            }
            {
                isLoading ?
                    <Center width={'100%'} height={'100%'}>
                        <Spinner color={Colors.SECONDARY} size={Constant.WINDOW_WIDTH / 4} isVisible={true} type={'WanderingCubes'} />
                    </Center>
                    :
                    <FlatList
                        data={tableData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }: any) => (
                            <Stack width={'90%'} direction={'column'} marginBottom={3} space={5} alignSelf={'center'}>
                                <Text color={'#fff'} fontSize={'xl'}>Semester {item.semester}</Text>
                                <View width={'100%'} backgroundColor={'#fff'} borderRadius={15}>
                                    <Stack width={'100%'} direction={'column'} space={3} padding={5}>
                                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                            <Text color={'#565656'} fontSize={'md'}>Mata Kuliah</Text>
                                            <Text color={'#000'} fontWeight={'700'} fontSize={'md'}>{item.studies}</Text>
                                        </Stack>
                                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                            <Text color={'#565656'} fontSize={'md'}>Bobot SKS</Text>
                                            <Text color={'#000'} fontWeight={'700'} fontSize={'md'}>{item.sks}</Text>
                                        </Stack>
                                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                            <Text color={'#565656'} fontSize={'md'}>Nilai Mutu</Text>
                                            <Text color={'#000'} fontWeight={'700'} fontSize={'md'}>{item.grade}</Text>
                                        </Stack>
                                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                            <Text color={'#565656'} fontSize={'md'}>Perolehan IPK</Text>
                                            <Text color={'#000'} fontWeight={'700'} fontSize={'md'}>{item.temp_ipk}</Text>
                                        </Stack>
                                    </Stack>
                                </View>
                            </Stack>
                        )}
                    />
            }
        </View>
    )
}

export default SemesterGradeScreen;