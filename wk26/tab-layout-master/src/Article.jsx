import React from 'react';

class Article extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="article">
                <h5>{this.props.title}</h5>
                <p>{this.props.description}</p>
                <p><span className="badge badge-primary">{this.props.author}</span></p>
            </div>
        )
    }
}

export default Article;