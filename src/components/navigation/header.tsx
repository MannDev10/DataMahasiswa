import { Stack, Text } from 'native-base';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Header = (props: { text: string; navigation: any }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.goBack()}>
            <Stack direction={'row'} alignItems={'center'} space={3}>
                <Icons name={"chevron-left"} color={"#fff"} size={30}></Icons>
                <Text color={'#fff'} fontSize={'lg'}>{props.text}</Text>
            </Stack>
        </TouchableOpacity>
    )
}