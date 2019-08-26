import React from 'react';

class View extends React.Component{ 
    constructor(props){
        super(props);
    }

	render(){
        var {className, children, viewName, activeView} = this.props;
        var newClassName = 'view ' + className
            
        return (viewName == activeView)? (
            <div className={newClassName}>
                {children}
            </div>
		): null;
	}
}

export default View;