import React from "react";
import "./style.css";
import { PostsData } from "../../content_option";
import {
    FaGithub,
    FaExternalLinkAlt
  } from "react-icons/fa";

// Start App

class Main extends React.Component { 
constructor() {
    super();
    
    this.state = {
    posts: PostsData
    }
}

render() {
    return <div>
    <div className="app-card-list" id="app-card-list">
        {
        Object
        .keys(this.state.posts)
        .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
    </div>
}
}


/* class Title extends React.Component {
render() {
    return <section className="app-title">
    <div className="app-title-content">
        <h1>Latest News</h1>
        <p>Covering March & April 2015</p>
        <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank" rel="noreferrer">Design from <i className="fa fa-dribbble"></i></a>
    </div>
    </section>
}
} */


class GithubButton extends React.Component {
render() {
    return (
    <a href={this.props.github} target="_blank" rel="noreferrer">
        <button className="button button-primary">
            <FaGithub />
        </button>
    </a>
    )
}
}

class LinkButton extends React.Component {
    render() {
        return (
        <a href={this.props.link} target="_blank" rel="noreferrer">
            <button className="button button-primary">
                <FaExternalLinkAlt />
            </button>
        </a>
        )
    }
    }

class CardHeader extends React.Component {
render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
    <header style={style} className="card-header">
    </header>
    )
}
}


class CardBody extends React.Component {
render() {
    return (
    <div className="card-body">        
        <h4>{this.props.title}</h4>
        <p className="body-content">{this.props.text}</p>
        <GithubButton github={this.props.github}/>
        <LinkButton link={this.props.link}/>
    </div>
    )
}
}


class Card extends React.Component {
render() {
    return (
    <article className="card">
        <CardHeader image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text} github={this.props.details.github} link={this.props.details.link} />
    </article>
    )
}
}

export default Main;