import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import songService from '../services/songService';

function EditSongComponent() {
    const { artistName } = useParams();
    const [song, setSong] = useState({
        artistName: '',
        songTitle: '',
        lastUpdate: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the song details for editing
        songService.getSongByArtistName(artistName)
            .then((response) => {
                setSong(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [artistName]);

    const saveSong = (e) => {
        e.preventDefault();
        songService.updateSong(artistName, song)
            .then(() => {
                navigate('/songs');
            })
            .catch((error) => {
                console.error('Error updating song:', error);
            });
    };

    const changeArtistNameHandler = (event) => {
        setSong({ ...song, artistName: event.target.value });
    };

    const changeSongTitleHandler = (event) => {
        setSong({ ...song, songTitle: event.target.value });
    };

    const changeLastUpdateHandler = (event) => {
        setSong({ ...song, lastUpdate: event.target.value });
    };

    const cancel = () => {
        navigate('/songs');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">Edit Song</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Artist Name</label>
                                    <input
                                        placeholder="Artist Name"
                                        name="artistName"
                                        className="form-control"
                                        value={song.artistName}
                                        onChange={changeArtistNameHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Song Title</label>
                                    <input
                                        placeholder="Song Title"
                                        name="songTitle"
                                        className="form-control"
                                        value={song.songTitle}
                                        onChange={changeSongTitleHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Update</label>
                                    <input
                                        placeholder="Last Update"
                                        name="lastUpdate"
                                        className="form-control"
                                        value={song.lastUpdate}
                                        onChange={changeLastUpdateHandler}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={saveSong}>
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
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

export default EditSongComponent;
