import axios from "axios";

const SONG_API_BASE_URL = "http://localhost:9003/23vibes/songs"
const SONG_API_BASE_URL2 = "http://localhost:9003/23vibes/add-song"
const SONG_API_BASE_URL3 = "http://localhost:9003/23vibes/edit-song"
const SONG_API_BASE_URL4 = "http://localhost:9003/23vibes/download"

class SongService{

     getSongs(){
        return axios.get(SONG_API_BASE_URL);
    }
    registerArtist(song){
        return axios.post(SONG_API_BASE_URL2, song);
    }
    // getSongByArtistName(artisName){
    //     return axios.get(SONG_API_BASE_URL4 + '/'+ artisName)
    // }
    updateSong(artistName, songData) {
        return axios.put(`${SONG_API_BASE_URL3}/songs/${artistName}`, songData);
      }
    getSongByArtistName(artistName) {
        return axios.get(`${SONG_API_BASE_URL4}/${artistName}`);
    }

}


export default new SongService()