import React from 'react';
import LikeButton from './LikeButton';
import Comment from './Comment';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          isClicked: false,
          count: 21
        };

        this.handleLoveClick = this.handleLoveClick.bind(this);
        this.handleLoveCount = this.handleLoveCount.bind(this);
      }

      handleLoveClick() {

        this.setState({
          isClicked: !this.state.isClicked
        }, () => this.handleLoveCount());  

      }

      handleLoveCount() {
          let counts = this.state.count;

          (this.state.isClicked) ? counts++ : counts--;

          this.setState({
              count: counts
          });
      }

      render() {
          return (
            <div className="App">
                <div className="container">
                    <div className="post-container shadow">

                        <div className="profile">
                            <a href="https://github.com/Starboy-Sharma/" title="Github Page" 
                             target="_blank"
                             rel="noopener noreferrer"
                            >
                                <img src={'/assets/images/cat-profile.jpg'} alt="Cat Spy" />
                            </a>    
                            <div className="user-info">
                                <p className="username">hacker-cat</p>
                                <p className="time">10 Min Ago. </p>
                            </div>
                        </div>

                        <div className="main">
                            <img 
                                src="./assets/images/cat-post.PNG"
                                alt=""
                                data-content="Add users to your feed"
                                onDoubleClick={this.handleLoveClick}
                            />
                        </div>

                        <div className="post-footer">
                            <LikeButton 
                               onClick={this.handleLoveClick} 
                               liked={this.state.isClicked} 
                               loveCount={this.state.count}
                               />
                        </div>

                        <Comment limit = {130} />
                        
                    </div>
                </div>
                

                <div className="ui one column stackable center aligned page grid">
                    <div className="column twelve wide">
                        &copy; Design & Developed By - <b>Pankaj Sharma</b>
                    </div>
                </div>
            </div>
          );
      }
}

export default App;