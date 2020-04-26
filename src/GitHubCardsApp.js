import React from 'react';
import './App.css';
import axios from 'axios';

//https://app.pluralsight.com/course-player?clipId=8f583202-ceab-46d0-bba8-482f0401e6a1 continue here

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} className="github-profile" />)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;

        return (
            <div className="github-profile" style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} alt="profile avatar"/>
                <div className="info" style={{ margin: '10px', display: 'inline-block' }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    state = { userName: '' }

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
       this.props.onSubmit(resp.data);
       this.setState({ userName: ''});
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-profile-form">
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="Enter a Github Username"
                    required
                />
                <button>Add card</button>
            </form>
        )
    }
}

class GitHubCardsApp extends React.Component {
    state = {
        profiles: []
    }

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
                profiles : [...prevState.profiles, profileData],
            })
        )
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}
export default GitHubCardsApp;
