import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Colors } from '../../style'
import Bubble from '../Bubble/Bubble'
import style from './styles'

interface CharacterStatusProps { 
    status: string
    title: string
    titleColor?: string
}

export default function CharacterStatus(props: CharacterStatusProps) {

    let statusColor

    switch (props.status) { 
        case 'Alive':
            statusColor = Colors.COLOR_56CD44
            break
        case 'Dead':
            statusColor = Colors.COLOR_D63C2E
            break
        default:
            statusColor = Colors.COLOR_9E9E9E
    }

    let titleStyle = props.titleColor ? { color: props.titleColor } : {}

    return (
        <View style={style.container}>
            <Bubble color={statusColor}/>
            <Text style={titleStyle}>{props.title}</Text>
        </View>
    )
}
