import React from 'react';

class Article extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="article">
                <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                <p><span class="badge badge-primary">Phonearena.com</span></p>
            </div>
        )
    }
}

export default Article;