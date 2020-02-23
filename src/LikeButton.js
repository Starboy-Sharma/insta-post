import React from 'react';
import { Icon } from "semantic-ui-react";


class LikeButton extends React.Component {
    
      render() {
        const isClicked = this.props.liked;
    
        return (
        <div className="ui grid post-footer">
            <div className="row">
                <div className="seven wide column">
                <abbr data-title="Try double click on image!">
                    {isClicked ? (
                      <Icon
                        name="heart"
                        className="heart-icon"
                        color="red"
                        size="big"
                        onClick={this.props.onClick}
                      />

                    ) : (
                      <Icon
                        name="heart outline"
                        className="heart-icon"
                        color="black"
                        size="big"
                        onClick={this.props.onClick}
                      />
                    )}
                    &nbsp; <span className="love-text">{this.props.loveCount} Likes</span>
                    </abbr>
                </div>

              {/* <span className="love-text">{this.props.loveCount} Likes</span>
              <span> <b>hacker-cat</b> When you get to know array starts at 0 not 1. 😟</span>
               */}

                    <div className="three wide column">
                        <Icon 
                            name="comment outline"
                            color="black"
                            size="big"
                            className="heart-icon"
                        />
                    </div>
                    
                </div>
              </div>
        );
      }
    }

    export default LikeButton;