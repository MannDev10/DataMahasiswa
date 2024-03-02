import { Actionsheet, Center, Stack, Text } from 'native-base';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Constant } from '../../utils/utilities';

export const Logout = (props: { isOpen: boolean; onClose: any; navigation: any }) => {
    return (
        <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
            <Actionsheet.Content backgroundColor={Colors.PRIMARY}>
                <Stack direction={'column'} width={'100%'} alignItems={'center'} space={10} padding={3}>
                    <Icons name={"help-circle-outline"} color={"#fff"} size={Constant.WINDOW_WIDTH / 6}></Icons>
                    <Text textAlign={'center'} color={"#fff"} fontSize={'lg'}>Apakah anda yakin ingin keluar?</Text>
                    <Stack direction={'row'} width={"100%"} alignItems={'center'} justifyContent={'space-around'}>
                        <TouchableOpacity onPress={props.onClose} activeOpacity={0.5} style={{ width: '40%' }}>
                            <Center backgroundColor={Colors.PRIMARY} width={'100%'} paddingY={3} borderRadius={'full'} borderWidth={1} borderColor={Colors.SECONDARY}>
                                <Text color={'#fff'} fontSize={"md"}>Batal</Text>
                            </Center>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.onClose} activeOpacity={0.5} style={{ width: '40%' }}>
                            <Center backgroundColor={Colors.SECONDARY} width={'100%'} paddingY={3} borderRadius={'full'}>
                                <Text color={'#fff'} fontSize={"md"}>Keluar</Text>
                            </Center>
                        </TouchableOpacity>
                    </Stack>
                </Stack>
            </Actionsheet.Content>
        </Actionsheet>
    )
}