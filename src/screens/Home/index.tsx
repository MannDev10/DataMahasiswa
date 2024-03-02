import { useNavigation } from '@react-navigation/native'
import { Box, Center, IconButton, ScrollView, Stack, Text, View } from 'native-base'
import React from 'react'
import { Colors, Constant } from '../../utils/utilities'
import { SimpleGrid } from 'react-native-super-grid';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Assets } from '../../assets';
import moment from 'moment'

const HomeList = [
    { icon: 'account', label: 'Profil', link: 'Profile' },
    { icon: 'format-list-checks', label: 'Nilai per Mata Kuliah', link: 'SubjectGrades' },
    { icon: 'clipboard-list-outline', label: 'Nilai per Semester', link: 'SemesterGrades' },
    { icon: 'table-star', label: 'Transkrip Nilai', link: 'Transcripts' },
    { icon: 'form-textbox-password', label: 'Ubah Password', link: 'ChangePassword' },
    { icon: 'location-exit', label: 'Logout', link: '' },
]

const HomeScreen = () => {
    const navigation: any = useNavigation()
    const [init, setInit] = React.useState(false)
    const [HomeData, setHomeData] = React.useState<any[]>([])

    React.useEffect(() => {
        setHomeData(HomeList)
    }, [init])

    const onNavigate = React.useCallback((link: string) => {
        if (link.length !== 0) {
            navigation.navigate(link)
        }
    }, [navigation])

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <ScrollView>
                <ImageBackground
                    source={Assets.Images.homeImg}
                    style={{ width: '100%' }}
                    imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                    resizeMode={"cover"}
                >
                    <Box width={"100%"} backgroundColor={"#00000080"} borderBottomLeftRadius={30} borderBottomRightRadius={30} style={{ aspectRatio: 2.5 }}>
                        <Stack direction={'column'} padding={5} justifyContent={'space-between'} height={'100%'}>
                            <View width={'100%'} alignItems={'flex-end'}>
                                <Text color={"#fff"} fontSize={"sm"}>{moment().format('dddd, DD-MM-YYYY')}</Text>
                            </View>
                            <Text color={'#fff'} fontSize={'xl'}>
                                Selamat Datang,{'\n'}<Text fontWeight={'700'} fontSize={'2xl'}>Firman Maulana!</Text>
                            </Text>
                        </Stack>
                    </Box>
                </ImageBackground>
                <View width={'100%'} padding={5}>
                    <SimpleGrid
                        itemDimension={130}
                        data={HomeData}
                        listKey={(item: any, index: number) => index.toString()}
                        renderItem={({ item }: any) => (
                            <TouchableOpacity onPress={() => onNavigate(item.link)} activeOpacity={0.5}>
                                <Center
                                    width={'100%'}
                                    borderRadius={10}
                                    borderWidth={1}
                                    borderColor={'#fff'}
                                    style={{ aspectRatio: 1 }}
                                >
                                    <Stack direction={'column'} space={1} alignItems={'center'} paddingX={3}>
                                        <Icons name={item.icon} color={Colors.SECONDARY} size={Constant.WINDOW_WIDTH / 8}></Icons>
                                        <Text color={"#fff"} textAlign={'center'} fontSize={'md'}>{item.label}</Text>
                                    </Stack>
                                </Center>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View >
    )
}

export default HomeScreen;