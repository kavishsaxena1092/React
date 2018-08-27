import _ from "lodash";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyBh5_zKlqtvSqrgQF3bt-TBLeLQL-DFKUM';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo : null
        };
        this.videoSearch('Manchester United');
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term: term}, (data) => {
            this.setState({videos : data, selectedVideo : data[0]});
            console.log(data);
        });
    }


    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term),300);

        return (
            <div>
                <Searchbar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));