import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import style from './styles'

interface BubbleProps { 
    color: string
}

export default function Bubble(props: BubbleProps) {
    return (
        <View style={[style.container, {backgroundColor: props.color}]} />
    )
}
