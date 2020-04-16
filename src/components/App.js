import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends Component {
    state = {
        vedios: [],
        selectedVideo: null
    }
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState(
            { vedios: response.data.items, selectedVideo: null }
        )
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList vedios={this.state.vedios} onVideoSelect={this.onVideoSelect} />
            </div>
        )
    }
}

export default App;
