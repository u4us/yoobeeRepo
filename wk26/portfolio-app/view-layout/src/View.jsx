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
        var newClassName = (viewName == activeView) ? 'view active ' + className : 'view ' + className

		return(
            //space needed between classes
            <div className={newClassName}>
                {children}
            </div>
		)
	}
}

export default View;