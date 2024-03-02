import { useNavigation } from '@react-navigation/native'
import { Center, ScrollView, Stack, Text, View } from 'native-base'
import React from 'react'
import { Header } from '../../components/Navigation/header'
import { Colors, Constant } from '../../utils/utilities'
import { Table, Row } from 'react-native-reanimated-table';
import Spinner from 'react-native-spinkit'
import { TouchableOpacity } from 'react-native'

const GradeHeader = ['Kode', 'Nama Mata Kuliah', 'SKS', 'Nilai', 'Mutu', 'Semester']

const GradeData = [
    ['KD01', 'Jaringan Komputer', 1, 'B', 78, '1'],
    ['KD02', 'Struktur Data', 2, 'B', 79, '2'],
    ['KD03', 'Sistem Informasi', 2, 'A', 90, '3'],
    ['KD04', 'Pemrograman Web', 1, 'A', 88, '4'],
    ['KD05', 'Sistem Basis Data', 3, 'B', 74, '5'],
]

const GradeWidth = [70, 200, 100, 100, 100, 100]

const TranscriptScreen = () => {
    const navigation: any = useNavigation()
    const [init, setInit] = React.useState(false)
    const [bottomHeight, setBottomHeight] = React.useState(0)
    const [isLoading, setLoading] = React.useState(true)
    const [tableHead, setTableHead] = React.useState<any[]>([])
    const [tableData, setTableData] = React.useState<any[]>([])
    const [tableWidth, setTableWidth] = React.useState<any[]>([])

    React.useEffect(() => {
        setTableWidth(GradeWidth)
        setTableHead(GradeHeader)
        setTableData([...GradeData, ...GradeData, ...GradeData, ...GradeData, ...GradeData])
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [init])

    const bottomLayout = (e: any) => {
        const { x, y, height, width } = e.nativeEvent.layout
        setBottomHeight(height)
    }

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            {
                isLoading ? null :
                    <View padding={5}>
                        <Header navigation={navigation} text={'Transkrip Nilai'} />
                    </View>
            }
            {
                isLoading ?
                    <Center width={'100%'} height={'100%'}>
                        <Spinner color={Colors.SECONDARY} size={Constant.WINDOW_WIDTH / 4} isVisible={true} type={'WanderingCubes'} />
                    </Center>
                    :
                    <ScrollView horizontal={true} nestedScrollEnabled margin={3} style={{ marginBottom: bottomHeight }}>
                        <View>
                            <Table
                                borderStyle={{ borderWidth: 0.5, borderColor: '#000' }}
                                style={{ backgroundColor: Colors.SECONDARY, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            >
                                <Row
                                    data={tableHead}
                                    widthArr={tableWidth}
                                    textStyle={{ color: '#fff', margin: 10, fontWeight: '700' }}
                                />
                            </Table>
                            <ScrollView>
                                <Table
                                    borderStyle={{ borderWidth: 0.5, borderColor: '#000' }}
                                    style={{ backgroundColor: '#fff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                                >
                                    {
                                        tableData.map((item, index) => (
                                            <Row
                                                key={index}
                                                data={item}
                                                widthArr={tableWidth}
                                                textStyle={{ color: '#000', margin: 10 }}
                                                style={{ backgroundColor: index % 2 === 0 ? '#f1f1f1' : '#fff' }}
                                            />
                                        ))
                                    }
                                </Table>
                            </ScrollView>
                        </View>
                    </ScrollView>
            }
            <Center onLayout={bottomLayout} width={'100%'} position={'absolute'} bottom={0} left={0} right={0} backgroundColor={Colors.PRIMARY} paddingY={3}>
                <Stack direction={'row'} alignItems={'center'} width={"90%"} justifyContent={'space-between'}>
                    <Stack direction={'column'} space={0}>
                        <Text fontSize={'sm'} color={"#fff"}>Total SKS: <Text fontWeight={'700'}>150</Text></Text>
                        <Text fontSize={'sm'} color={"#fff"}>Total Mutu: <Text fontWeight={'700'}>380</Text></Text>
                        <Text fontSize={'sm'} color={"#fff"}>IPK: <Text fontWeight={'700'}>3.79</Text></Text>
                    </Stack>
                    <TouchableOpacity activeOpacity={0.5} style={{ width: '50%' }}>
                        <Center backgroundColor={Colors.SECONDARY} width={'100%'} paddingY={3} borderRadius={'full'}>
                            <Text color={'#fff'} fontSize={"md"}>Download Transkrip</Text>
                        </Center>
                    </TouchableOpacity>
                </Stack>
            </Center>
        </View>
    )
}

export default TranscriptScreen;