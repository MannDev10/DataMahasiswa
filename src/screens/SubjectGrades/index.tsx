import { useNavigation } from '@react-navigation/native'
import { Center, ScrollView, Text, View } from 'native-base'
import React from 'react'
import { Header } from '../../components/navigation/header'
import { Colors, Constant } from '../../utils/utilities'
import { Table, Row } from 'react-native-reanimated-table';
import Spinner from 'react-native-spinkit'

const GradeHeader = ['Kode', 'Nama Mata Kuliah', 'Kehadiran', 'Nilai UTS', 'Nilai UAS', 'Total']

const GradeData = [
    ['KD01', 'Jaringan Komputer', 16, 80, 78, 'B'],
    ['KD02', 'Struktur Data', 20, 88, 79, 'B'],
    ['KD03', 'Sistem Informasi', 22, 90, 90, 'A'],
    ['KD04', 'Pemrograman Web', 22, 89, 88, 'A'],
    ['KD05', 'Sistem Basis Data', 19, 79, 74, 'B'],
]

const GradeWidth = [70, 200, 100, 100, 100, 100]

const SubjectGradeScreen = () => {
    const navigation: any = useNavigation()
    const [init, setInit] = React.useState(false)
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

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            {
                isLoading ? null :
                    <View padding={5}>
                        <Header navigation={navigation} text={'Nilai Mata Kuliah'} />
                    </View>
            }
            {
                isLoading ?
                    <Center width={'100%'} height={'100%'}>
                        <Spinner color={Colors.SECONDARY} size={Constant.WINDOW_WIDTH / 4} isVisible={true} type={'WanderingCubes'} />
                    </Center>
                    :
                    <ScrollView horizontal={true} nestedScrollEnabled margin={3}>
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
        </View>
    )
}

export default SubjectGradeScreen;