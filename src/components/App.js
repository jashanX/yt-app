import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
    state = {
        videos : [],
        selectedVideo : null
    }
    componentDidMount = () =>{
        this.handleSubmit('drag race');
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video});
    }
    
    handleSubmit = async (term) => {
        const response = await youtube.get("/search",{
            params:{
                q:term
            }
        })
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }
    
    render() {
        return (
            <div className="dark ui container">
                <SearchBar onFormSubmit={this.handleSubmit}/>
                <div style={{marginTop:"10px"}} className="ui grid">
                    
                    <div className="ui stackable row"> 
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="side-list five wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;