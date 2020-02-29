import React from 'react';
import { Form, TextArea } from "semantic-ui-react";

class Comment extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      characterCount: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.persist();

    // Update State here
    this.setState(state => ({
      characterCount: event.target.value.length
    }));
  }

  render() {

    let remaining_words = this.props.limit - this.state.characterCount;

    return (
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  control={TextArea}
                  label="Write something cool"
                  placeholder="Tell us what are you thinking..."
                  onChange={this.handleChange}
                  className="comment-box"  
                />
              </Form.Group>
            <span className={"badge " + (remaining_words < 0 ? "color-red" : "")}> {remaining_words}</span>
            </Form>
    );
  }
}

// Export Comment
export default Comment;