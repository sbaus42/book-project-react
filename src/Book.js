import React, { Component } from 'react'

class Book extends Component {
  render() {
    // let  title, authors, coverURL  = this.props.info

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.info.previewLink}")` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.info.title}</div>
        <div className="book-authors">{this.props.info.displayedAuthor}</div>
      </div>
    )
  }
}

export default Book
