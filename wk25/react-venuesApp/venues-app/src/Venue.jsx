import React from 'react';

class Venue extends React.Component{
    constructor(props){
        super(props);
    }

    //10. create click handler
    handleVenueNameClick = () =>{
        this.props.openModal();
        //15. loadVenue(id)
        this.props.loadVenue(this.props.id);
    }

    render(){
        return(
            <div className="card venue">
				<div className="card-body">
                    {/* 4. pull data from this.props */}
					<h1 className="venue-name" onClick={this.handleVenueNameClick}>
                        {this.props.name}
                    </h1>
					<p>{this.props.address[0]}</p>
					<p>{this.props.address[1]}</p>
					<p>
                        <span className="badge venue-type">{this.props.category}</span>
                    </p>
				</div>
			</div>
        )
    }
}

export default Venue