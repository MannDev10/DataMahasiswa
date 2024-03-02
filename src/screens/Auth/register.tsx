import * as React from 'react';
import { View, Text, Input, Stack, ScrollView, Center, Radio, Select } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Colors } from '../../utils/utilities';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Navigation/header';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const Programs = [
    'Teknik Informatika',
    'Sistem Informasi',
    'Akuntansi',
    'Ilmu Komunikasi',
    'Psikologi',
    'Agroteknologi',
    'Kedokteran',
    'Sastra Inggris',
    'Manajemen',
    'Teknik Industri',
    'Teknik Elektro',
    'Arsitektur'
]

const RegisterScreen = () => {
    const navigation: any = useNavigation()
    const [init, setInit] = React.useState(false)
    const [major, setMajor] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [isPassword, setPassword] = React.useState(true)
    const [isConfirmPassword, setConfirmPassword] = React.useState(true)
    const [isDatePicker, setDatePicker] = React.useState(false)
    const [birthDate, setBirthDate] = React.useState<any>('')
    const [programs, setPrograms] = React.useState<any[]>([])

    const onDatePicker = () => setDatePicker(!isDatePicker)
    const handleDate = (date: any) => {
        setBirthDate(date)
        onDatePicker()
    }

    React.useEffect(() => {
        setPrograms(Programs)
    }, [init])

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stack direction={'column'} space={10} width={'100%'} padding={5}>
                    <Header navigation={navigation} text={'Daftar Akun'} />
                    <Stack direction={'column'} space={5} width={'100%'}>
                        <Input
                            variant={'rounded'}
                            placeholder={'Nama Lengkap'}
                            size={'lg'}
                            color={"#fff"}
                        ></Input>
                        <Select
                            variant='rounded'
                            selectedValue={major}
                            width={'100%'}
                            placeholder="Jurusan"
                            onValueChange={(value) => setMajor(value)}
                            size={'lg'}
                            color={'#fff'}
                            _selectedItem={{
                                backgroundColor: Colors.SECONDARY,
                                borderRadius: 'full',
                            }}
                        >
                            {
                                programs.map((item, index) => (
                                    <Select.Item key={index} label={item} value={item} />
                                ))
                            }
                        </Select>
                        <View width={'100%'}>
                            <TouchableOpacity onPress={onDatePicker} activeOpacity={0.5} style={{ width: '100%' }}>
                                <Input
                                    placeholder={'Tanggal Lahir'}
                                    variant={'rounded'}
                                    size={'lg'}
                                    color={'#fff'}
                                    editable={false}
                                    value={birthDate.length === 0 ? birthDate : moment(birthDate).format('DD - MMMM - YYYY')}
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
                            keyboardType='email-address'
                            variant={'rounded'}
                            placeholder={'Email'}
                            size={'lg'}
                            color={"#fff"}
                        ></Input>
                        <Input
                            keyboardType='phone-pad'
                            variant={'rounded'}
                            placeholder={'Nomor Telepon'}
                            size={'lg'}
                            color={"#fff"}
                        ></Input>
                        <View>
                            <Text color={'#fff'} fontSize={'sm'} fontWeight={'700'}>Jenis Kelamin</Text>
                            <Radio.Group name='Gender' value={gender} onChange={(value) => setGender(value)}>
                                <Radio value="man" colorScheme={'red'}>
                                    <Text color={'#fff'} fontSize={'lg'}>Laki - Laki</Text>
                                </Radio>
                                <Radio value="women" colorScheme={'red'} marginTop={3}>
                                    <Text color={'#fff'} fontSize={'lg'} marginTop={3}>Perempuan</Text>
                                </Radio>
                            </Radio.Group>
                        </View>
                        <Input
                            type={isPassword ? 'password' : 'text'}
                            variant={'rounded'}
                            colorScheme={"red"}
                            placeholder={'Password'}
                            size={'lg'}
                            color={"#fff"}
                            InputRightElement={
                                <Icons
                                    style={{ marginHorizontal: 10 }}
                                    onPress={() => setPassword(!isPassword)}
                                    name={isPassword ? "eye" : "eye-off"}
                                    color={'#fff'}
                                    size={25}
                                ></Icons>
                            }
                        ></Input>
                        <Input
                            type={isConfirmPassword ? 'password' : 'text'}
                            variant={'rounded'}
                            colorScheme={"red"}
                            placeholder={'Konfimasi Password'}
                            size={'lg'}
                            color={"#fff"}
                            InputRightElement={
                                <Icons
                                    style={{ marginHorizontal: 10 }}
                                    onPress={() => setConfirmPassword(!isConfirmPassword)}
                                    name={isConfirmPassword ? "eye" : "eye-off"}
                                    color={'#fff'}
                                    size={25}
                                ></Icons>
                            }
                        ></Input>
                    </Stack>
                    <View width={'100%'}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={{ width: '100%' }}>
                            <Center backgroundColor={Colors.SECONDARY} width={'100%'} paddingY={3} borderRadius={'full'}>
                                <Text color={'#fff'} fontSize={"md"}>SUBMIT</Text>
                            </Center>
                        </TouchableOpacity>
                    </View>
                </Stack>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen;