import { useNavigation } from '@react-navigation/native'
import { Center, Input, ScrollView, Stack, Text, View } from 'native-base'
import React from 'react'
import { Header } from '../../components/Navigation/header'
import { Colors } from '../../utils/utilities'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'

const ChangePasswordScreen = () => {
    const navigation: any = useNavigation()
    const [isOldPassword, setOldPassword] = React.useState(true)
    const [isNewPassword, setNewPassword] = React.useState(true)
    const [isConfirmPassword, setConfirmPassword] = React.useState(true)

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View padding={5}>
                    <Header navigation={navigation} text={'Ubah Password'} />
                    <View backgroundColor={'#fff'} borderRadius={20} padding={5} width={'100%'} marginTop={10}>
                        <Stack direction={'column'} space={5} width={'100%'}>
                            <Input
                                type={isOldPassword ? 'password' : 'text'}
                                variant={'rounded'}
                                InputRightElement={
                                    <Icons
                                        onPress={() => setOldPassword(!isOldPassword)}
                                        name={isOldPassword ? "eye" : "eye-off"}
                                        color={Colors.PRIMARY}
                                        size={25}
                                        style={{ marginRight: 10 }}
                                    />
                                }
                                placeholder={'Password Lama'}
                                size={'lg'}
                                color={'#000'}
                            ></Input>
                            <Input
                                type={isNewPassword ? 'password' : 'text'}
                                variant={'rounded'}
                                InputRightElement={
                                    <Icons
                                        onPress={() => setNewPassword(!isNewPassword)}
                                        name={isNewPassword ? "eye" : "eye-off"}
                                        color={Colors.PRIMARY}
                                        size={25}
                                        style={{ marginRight: 10 }}
                                    />
                                }
                                placeholder={'Password Baru'}
                                size={'lg'}
                                color={'#000'}
                            ></Input>
                            <Input
                                type={isConfirmPassword ? 'password' : 'text'}
                                variant={'rounded'}
                                InputRightElement={
                                    <Icons
                                        onPress={() => setConfirmPassword(!isConfirmPassword)}
                                        name={isConfirmPassword ? "eye" : "eye-off"}
                                        color={Colors.PRIMARY}
                                        size={25}
                                        style={{ marginRight: 10 }}
                                    />
                                }
                                placeholder={'Konfirmasi Password Baru'}
                                size={'lg'}
                                color={'#000'}
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

export default ChangePasswordScreen;