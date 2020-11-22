import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native'
import CharacterStatus from '../../components/CharacterStatus/CharacterStatus'
import { Colors } from '../../style'
import style from './styles'
const axios = require('axios').default

interface HomeScreenProps { 
    navigation: any
}

interface HomeScreenState { 
    data: Character[]
    lastPage: number
    filterOptions: FilterItem[]
    filteredCharacters: Character[]
    errorInLoading: boolean
    isInitialLoading: boolean
}

interface FilterItem { 
    id: number
    label: string
    isSelected?: boolean
}

interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: [any]
    created: string
}

interface Origin { 
    name: string
    url: string
}

interface Location { 
    name: string
    url: string
}

class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {

    options: FilterItem[] = [{ id: 1, label: 'Alive'},{ id: 2, label: 'Dead'}, { id: 3, label: 'Unknown' }, { id: 4, label: 'Clear' }]
    
    constructor(props: HomeScreenProps) { 
        super(props)
        this.state = { 
            data: [],
            lastPage: 0,
            filterOptions: [...this.options],
            filteredCharacters: [],
            errorInLoading: false,
            isInitialLoading: true
        }
        this.callAPI('https://rickandmortyapi.com/api/character/?page=0')
    }
    
    public async callAPI(url: string) {
        axios.get(url)
            .then( (response: any) => {
                let characters: Character[] = response.data.results
                this.setState({
                    data: [...this.state.data, ...characters],
                    lastPage: this.state.lastPage + 1,
                    isInitialLoading: false
                })
            })
            .catch((error: any) => {
                console.log(error)
                this.setState({
                    errorInLoading: true
                })
            })
    }

    renderCharacters = ({ item, index }: { item: Character, index: number }) => {
        return (
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.push('DETAIL', { item })}}>
                <View style={ style.itemContainer }>
                    <Image source={{ uri: item.image }} style={style.itemIcon} />
                    <View style={style.itemDetail}>
                        <Text style={style.itemContent}>{item.name}</Text>
                        <CharacterStatus status={item.status} title={item.status + ' - ' + item.species} titleColor={ Colors.COLOR_FFFFFF }/>
                        <Text style={style.itemContent}>{item.origin.name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    handleFilterSelection = (item: FilterItem) => { 

        let updatedFilterOptions = this.state.filterOptions.map((option: FilterItem) => { 
            return (item.id === option.id) ? { ...option, isSelected: true } : {...option, isSelected: false}
        })

        this.setState({
            filterOptions : updatedFilterOptions
        })

        this.filterCharactersBy(item.label)
    }

    filterCharactersBy = (label: string) => { 

        let filteredCharacters = this.state.data.filter((item: Character) => {
            return item.status.toLowerCase() === label.toLowerCase()
        })
        
        this.setState({
            filteredCharacters: filteredCharacters
        })
    }

    renderFilter = ({ item, index }: { item: FilterItem, index: number }) => {
        return (
            <TouchableWithoutFeedback onPress={ () => this.handleFilterSelection(item) }>
                <View style={[ style.filterItem, ( item.isSelected ? { backgroundColor: 'grey' } : {})]}>
                    <Text>{ item.label }</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    retrieveMore = async () => {

        if (this.state.lastPage < 4) {
            try {
                this.callAPI('https://rickandmortyapi.com/api/character/?page=' + this.state.lastPage + 1)
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    render() {
        return (
            <View style={style.container}>
                {
                    this.state.isInitialLoading
                        ?
                        <View style={style.loading}>
                            <Text>Fetching Data...</Text>
                        </View>
                        :
                        <>
                            {
                                this.state.errorInLoading
                                    ?
                                    <View style={style.loading}>
                                        <Text>Something went wrong. Please Reload the app.</Text>
                                    </View>
                                    :
                                    <>
                                        <View style={style.filterContainer}>
                                            <Text style={style.filtetTitle}>Filter By</Text>
                                            <FlatList
                                                horizontal={true}
                                                data={this.state.filterOptions}
                                                renderItem={this.renderFilter}
                                                keyExtractor={(item, index) => item.id + index + ''}
                                            />
                                        </View>
                                        <FlatList
                                            horizontal={false}
                                            showsVerticalScrollIndicator={false}
                                            data={this.state.filteredCharacters.length > 0 ? this.state.filteredCharacters : this.state.data}
                                            renderItem={this.renderCharacters}
                                            keyExtractor={(item: Character, index: number) => item.id + item.name}
                                            contentContainerStyle={{ paddingVertical: 10 }}
                                            onEndReached={this.retrieveMore}
                                            onEndReachedThreshold={0.6}
                                        />
                                    </>
                            }
                        </>
                }
            </View>
        )
    }
}

export default HomeScreen