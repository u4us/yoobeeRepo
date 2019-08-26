import React from 'react';

class View extends React.Component{ 
    constructor(props){
        super(props);
    }

	render(){
        //2. destructure class assigning
        //3. add viewName to destructor
        var {className, children, viewName, activeView} = this.props;
        // var className = this.props.className;
        // var children = this.props.children;

        //when same, active, else not active; assign to div
        //; can also reassign back to className
        // space needed between classes
        // var newClassName = (viewName == activeView) ? 'view active ' + className : 'view ' + className

        var newClassName = 'view ' + className

        // ## if active? insert view: dont insert view
            
        return (viewName == activeView)? (
            
            <div className={newClassName}>
                {children}
            </div>
		): null;
	}
}

export default View;