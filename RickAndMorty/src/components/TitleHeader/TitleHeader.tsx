import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Bubble from '../Bubble/Bubble'
import style from './styles'

interface TitleHeader { 
    placeholder: string
    title: string
}

export default function TitleHeader(props: TitleHeader) {

    return (
        <View style={style.container}>
            <Text style={style.placeholder}>{ props.placeholder }</Text>
            <Text style={style.title}>{ props.title }</Text>
        </View>
    )
}
