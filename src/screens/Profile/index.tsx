import { useNavigation } from '@react-navigation/native'
import { Center, Input, ScrollView, Stack, Text, View } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Header } from '../../components/Navigation/header'
import { Colors } from '../../utils/utilities'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileScreen = () => {
    const navigation: any = useNavigation()
    const [isDatePicker, setDatePicker] = React.useState(false)
    const [birthDate, setBirthDate] = React.useState<any>('')

    const onDatePicker = () => setDatePicker(!isDatePicker)
    const handleDate = (date: any) => {
        setBirthDate(date)
        onDatePicker()
    }

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View padding={5}>
                    <Header navigation={navigation} text={'Profil'} />
                    <View backgroundColor={'#fff'} borderRadius={20} padding={5} width={'100%'} marginTop={10}>
                        <Stack direction={'column'} space={5} width={'100%'}>
                            <Input
                                variant={'rounded'}
                                InputLeftElement={<Icons name="card-account-details-outline" color={Colors.PRIMARY} size={25} style={{ marginLeft: 10 }} />}
                                placeholder={'NIM'}
                                size={'lg'}
                                color={'#000'}
                                isDisabled={true}
                            ></Input>
                            <Input
                                variant={'rounded'}
                                InputLeftElement={<Icons name="account" color={Colors.PRIMARY} size={25} style={{ marginLeft: 10 }} />}
                                placeholder={'Nama Mahasiswa'}
                                size={'lg'}
                                color={'#000'}
                                isDisabled={true}
                            ></Input>
                            <Input
                                variant={'rounded'}
                                InputLeftElement={<Icons name="school" color={Colors.PRIMARY} size={25} style={{ marginLeft: 10 }} />}
                                placeholder={'Jurusan'}
                                size={'lg'}
                                color={'#000'}
                                isDisabled={true}
                            ></Input>
                            <View width={'100%'}>
                                <TouchableOpacity onPress={onDatePicker} activeOpacity={0.5} style={{ width: '100%' }}>
                                    <Input
                                        placeholder={'Tanggal Lahir'}
                                        variant={'rounded'}
                                        size={'lg'}
                                        color={'#000'}
                                        editable={false}
                                        value={birthDate.length === 0 ? birthDate : moment(birthDate).format('DD/MM/YYYY')}
                                        InputLeftElement={<Icons name="calendar" color={Colors.PRIMARY} size={25} style={{ marginLeft: 10 }} />}
                                    ></Input>
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePicker}
                                    mode="date"
                                    onConfirm={handleDate}
                                    onCancel={onDatePicker}
                                />
                            </View>
                            <Input
                                keyboardType={'email-address'}
                                variant={'rounded'}
                                InputLeftElement={<Icons name="email-outline" color={Colors.PRIMARY} size={25} style={{ marginLeft: 10 }} />}
                                placeholder={'Email'}
                                size={'lg'}
                                color={'#000'}
                                ></Input>
                            <Input
                                keyboardType={'phone-pad'}
                                variant={'rounded'}
                                InputLeftElement={<Icons name="phone" color={Colors.PRIMARY} size={25} style={{ marginLeft: 10 }} />}
                                placeholder={'Nomor Telepon'}
                                size={'lg'}
                                color={'#000'}
                                ></Input>
                            <Input
                                variant={'outline'}
                                borderRadius={20}
                                placeholder={'Alamat Lengkap'}
                                size={'lg'}
                                color={'#000'}
                                multiline
                                height={200}
                                textAlignVertical={'top'}
                            ></Input>
                        </Stack>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={{ width: '100%', marginTop: 20 }}>
                        <Center backgroundColor={Colors.SECONDARY} width={'100%'} paddingY={3} borderRadius={'full'}>
                            <Text color={'#fff'} fontSize={"md"}>SIMPAN</Text>
                        </Center>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen;