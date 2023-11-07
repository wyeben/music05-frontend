import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import songService from '../services/songService';

function UploadSongComponent() {
  const { artistName } = useParams();
  const [state, setState] = useState({
    artistName: '',
    songTitle: '',
    lastUpdate: '',
  });

  const navigate = useNavigate();

  const fetchSongData = () => {
    if (artistName) {
        songService.getSongByArtistName(artistName)
            .then((response) => {
                const song = response.data;
                setState({
                    artistName: song.artistName,
                    songTitle: song.songTitle,
                    lastUpdate: song.lastUpdate,
                });
            })
            .catch((error) => {
                console.error('Error fetching song data:', error);
            });
    }
};

  useEffect(() => {
    fetchSongData(); 
  }, [artistName]);

  const saveSong = (e) => {
    e.preventDefault();
    const song = {
      artistName: state.artistName,
      songTitle: state.songTitle,
      lastUpdate: state.lastUpdate,
    };

    if (artistName) {
      songService.updateSong(artistName, song)
        .then((res) => {
          navigate('/songs'); 
        })
        .catch((error) => {
          console.error('Error updating song:', error);
        });
    } else {
    
      songService.registerArtist(song)
        .then((res) => {
          navigate('/songs'); 
        })
        .catch((error) => {
          console.error('Error adding song:', error);
        });
    }
  }

  const changeArtistNameHandler = (event) => {
    setState({ ...state, artistName: event.target.value });
  };

  const changeSongTitleHandler = (event) => {
    setState({ ...state, songTitle: event.target.value });
  };

  const changeLastUpdateHandler = (event) => {
    setState({ ...state, lastUpdate: event.target.value });
  };

  const cancel = () => {
    navigate('/songs');
  };

  const title = () => {
    if (artistName) {
      return <h2 className='text-center'>Update Song</h2>;
    } else {
      return <h2 className='text-center'>Add Song</h2>;
    }
  };

  return (
    <div>
      <div className='songList-container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            {title()}
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>Artist Name</label>
                  <input
                    placeholder='Artist Name'
                    name='artistName'
                    className='form-control'
                    value={state.artistName}
                    onChange={changeArtistNameHandler}
                  />
                </div>
                <div className='form-group'>
                  <label>Song Title</label>
                  <input
                    placeholder='Song Title'
                    name='songTitle'
                    className='form-control'
                    value={state.songTitle}
                    onChange={changeSongTitleHandler}
                  />
                </div>
                <div className='form-group'>
                  <label>Last Update</label>
                  <input
                    placeholder='Last Update'
                    name='lastUpdate'
                    className='form-control'
                    value={state.lastUpdate}
                    onChange={changeLastUpdateHandler}
                  />
                </div>
                <button className='btn btn-success' onClick={saveSong}>
                  Save
                </button>
                <button
                  className='btn btn-danger'
                  onClick={cancel}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadSongComponent;
