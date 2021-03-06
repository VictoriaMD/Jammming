import React from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: 'id1'
        },
        {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: 'id2'
        },
        {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: 'id3'
        }
      ],
      playlistName: 'My playlist',
      playlistTracks: [
        {
          name: 'name4',
          artist: 'artist4',
          album: 'album4',
          id: 'id4'
        },
        {
          name: 'name5',
          artist: 'artist5',
          album: 'album5',
          id: 'id5' 
        },
        {
          name: 'name6',
          artist: 'artist6',
          album: 'album6',
          id: 'id6'
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
     if (this.state.playlistTracks.find(savedTrack => 
      savedTrack.id === track.id )) {
        return;
      } else {
         this.setState({ playlistTrack: this.state.playlistTracks.push(track)});
      };
  }

  removeTrack(track) {
     let tracks = this.state.playlistTracks;
     tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
     this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
     this.setState({playlistName: name});
  }
   
  savePlaylist() {
      const trackURIs = this.state.playlistTracks.map(track => track.uri);  
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
         <div>
           <h1>Ja<span className="highlight">mmm</span>ing</h1>
             <div className="App">
                 <SearchBar onSearch={this.search} />
                    <div className="App-playlist">
                      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                      <Playlist playlistName={this.state.playlistName} 
                                playlistTracks={this.state.playlistTracks}
                                onRemove={this.removeTrack}
                                onNameChange={this.updatePlaylistName}
                                onSave={this.savePlaylist} />
                    </div>
               </div>
           </div>
    );
  }
}

export default App;
