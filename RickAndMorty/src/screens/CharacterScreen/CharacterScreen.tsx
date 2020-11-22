import React, { Component } from 'react'
import { View, Text, Image, Share } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Bubble from '../../components/Bubble/Bubble'
import CharacterStatus from '../../components/CharacterStatus/CharacterStatus'
import TitleHeader from '../../components/TitleHeader/TitleHeader'
import style from './styles'

interface CharacterScreenProps { 
    navigation: any
    route: any
}
class CharacterScreen extends Component<CharacterScreenProps, {}> {
    
    constructor(props: CharacterScreenProps) { 
        super(props)
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                'Install this awesome app for Rick and Morty fans.',
            })
        } catch (error) {
            alert(error.message)
        }
    }

    render() {
        const { item } = this.props.route.params
        return (
            <View style={style.container}>
                <View style={style.iconContainer}>
                    <Image source={{ uri: item.image }} style={style.icon} />
                </View>
                <Text style={style.title}>{item.name}</Text>
                <CharacterStatus status={item.status} title={ item.status + ' -  ' + item.species}/>
                <TitleHeader placeholder='Orgin' title={ item.origin.name } />
                <TitleHeader placeholder='Last known location' title={item.location.name} />
                <TouchableWithoutFeedback onPress={this.onShare} style={style.shareContainer}>
                    <View style={style.share}>
                        <Text style={style.shareTitle}>Share this Character</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
  }

export default CharacterScreen