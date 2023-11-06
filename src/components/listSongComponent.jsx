import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import songService from '../services/songService';
import { Link } from 'react-router-dom';

function AddSongButton() {
    const navigate = useNavigate();

    const addSong = () => {
        navigate('/add-song');
    };

    return (
        <button className="btn btn-primary" onClick={addSong}>
            Add Song
        </button>
    );
}

class ListSongComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
        };
    }

    componentDidMount() {
        const fetchSongs = async () => {
            try {
                const response = await songService.getSongs();
                this.setState({ songs: response.data });
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }

    render() {
        return (
            <div className="table-container">
                <h2 className="text-center">Songs List</h2>
                <div className="row">
                    <AddSongButton />
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Artist Name</th>
                                <th>Song Title</th>
                                <th>Last Update</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.songs.map((song) => (
                                <tr key={song.songId}>
                                    <td>{song.artistName}</td>
                                    <td>{song.songTitle}</td>
                                    <td>{song.lastUpdate}</td>
                                    <td>
                                        <Link
                                            className="btn btn-info"
                                            to={`/edit-song/${song.artistName}`}
                                        >
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListSongComponent;
