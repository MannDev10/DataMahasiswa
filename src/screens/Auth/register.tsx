import * as React from 'react';
import { View, Text, Input, Stack, IconButton, ScrollView, Center } from 'native-base'
import { Image, TouchableOpacity } from 'react-native'
import { Assets } from '../../assets';
import { Colors } from '../../utils/utilities';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation: any = useNavigation()
    const [isPassword, setPassword] = React.useState(true)
    const [isConfirmPassword, setConfirmPassword] = React.useState(true)

    return (
        <View flex={1} backgroundColor={Colors.PRIMARY}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={Assets.Images.loginImg} style={{ width: '100%', height: 'auto', aspectRatio: 16 / 9, objectFit: 'contain' }} />
                <Stack direction={'column'} space={10} width={'100%'} padding={5}>
                    <Text color={'#fff'} fontSize={'3xl'} textAlign={'center'} width={'100%'}>Login</Text>
                    <View width={'100%'}>
                        <Input
                            keyboardType='email-address'
                            variant={'rounded'}
                            placeholder={'Email'}
                            size={'lg'}
                            color={"#fff"}
                            marginBottom={5}
                        ></Input>
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
                    </View>
                    <View width={'100%'}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={{ width: '100%' }}>
                            <Center backgroundColor={Colors.SECONDARY} width={'100%'} paddingY={3} borderRadius={'full'}>
                                <Text color={'#fff'} fontSize={"md"}>SUBMIT</Text>
                            </Center>
                        </TouchableOpacity>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} space={1} marginTop={5}>
                            <Text color={"#fff"} fontSize={"md"}>Belum punya akun?</Text>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Text color={Colors.SECONDARY} fontSize={"md"}>Daftar disini!</Text>
                            </TouchableOpacity>
                        </Stack>
                    </View>
                </Stack>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen;