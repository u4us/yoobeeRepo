import React from 'react';
import Venue from './Venue'
// 8. npm install --save react-bootstrap bootstrap, import modal
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './App.css';



// 5. id, secret, key
var clientId = '1LVYHNHHAZJHDA2LNCOF1MBG31HDWFFNW2OJN2S2KIGFBBOC';
var clientSecret = 'E300I3CDFPTAXKC3J3F1RAEJOLHPRV4USRIZQ1KY5WKKRFDZ';
var key = '?client_id='+clientId+'&client_secret='+clientSecret+'&v=20190801';

class App extends React.Component{
	constructor(props){
		super(props);
		
		// 1. sample data
		this.state = {
			venues: [
				{
					id: "4bc992e7b6c49c7401a28e91", 
					name: "Ken Yakitori", 
					address: [
						"89 Karangahape Rd.",
						"Auckland 1010",
						"New Zealand"
					], 
					category: "Japanese"
				},{
					id: "4b4d4133f964a52070cf26e3", 
					name: "Real Groovy", 
					address: [
						"369 Queen Street", 
						"Auckland 1010", 
						"New Zealand"], 
					category: "Record Shop"
				},{
					id: "4b53a56bf964a52013a627e3",
					name: "Revel! Cafe", 
					address: [
						"146 Karangahape Rd (btwn Queen St & Mercury Ln)", 
						"Auckland 1010", 
						"New Zealand"], 
					category: "Café"
				}
			],
			show: false,
			selectedVenue: null,
		}
	}

	// 6. copy loadVenues as a method, change func to =>
	// https://reactjs.org/docs/faq-ajax.html
	loadVenues = () => {
		var yoobee = '-36.856992,174.764437';
		var venuesUrl = 'https://api.foursquare.com/v2/venues/explore' + key + '&ll=' + yoobee
		
		fetch(venuesUrl)
		.then(resp=>resp.json())
		.then((data)=>{
			return data.response.groups[0].items
		})
		.then((data)=>{
			return data.map(function(item){
				var venue = {
					id: item.venue.id,
					name: item.venue.name,
					address: item.venue.location.formattedAddress,
					category: item.venue.categories[0].shortName,
				};
				return venue;
			});
		})
		.then((data)=>{
			// 7. setState the output data, test $r.loadVenues
			// react lifecycles, componentWillMount; componentDidMount
			// do not load the data into the constructor
			// load during componentDidMount, not during constructing, but after constructed
			this.setState(
				{
					venues: data
				}
			)
		})
		//.catch(error code)
	}

	componentDidMount(){
		// try catch ajax
		this.loadVenues();
	}

	// 9.modal create methods
	openModal = () =>{
		this.setState(
			{
				show: true
			}
		);
	};

	closeModal = () =>{
		this.setState(
			{
				show: false
			}
		);
	}

	//12. function to find info of chosen venue
	loadVenue = (venueId)=>{
		//17. set to null to load every time
		this.setState({selectedVenue: null});

		var venueUrl = 'https://api.foursquare.com/v2/venues/'+venueId+key;
		fetch(venueUrl)
			.then(resp=>resp.json())
			.then((data)=>{
				var item = data.response.venue;
				var venue = {
					name: item.name,
					description: item.description,
					category: item.categories[0].shortName,
					address: item.location.formattedAddress,
					photo: item.bestPhoto.prefix+'300x300'+item.bestPhoto.suffix
				};
				//13. pass selectedVenue to state, test $r.loadVenue('4b5a5f48f964a520ccc028e3')
				this.setState({selectedVenue: venue});
			});
	}

	render(){
		return(
			<div className="app">
				<div className="container">
					<div className="venues">
						{
							// 2.create venue component
							// 3. map state and pass data as props to Venue
							this.state.venues.map((venue)=>{
								var venueProps = {
									...venue,
									key: venue.id,
									//11. pass to Venue component
									openModal: this.openModal,
									//14. pass loadMenu function
									loadVenue: this.loadVenue
								}
								return (<Venue {...venueProps}/>)
							})
						}
					</div> 
			
					<div className="venue-filters">
						<div className="btn-group btn-group-toggle" data-toggle="buttons">
						<div role="group" className="btn-group btn-group-toggle">
							<label className="venue-filter btn active btn-primary">
							<input name="venue-filter" type="radio" autoComplete="off" value="all" />All
							</label>
							<label className="venue-filter btn btn-primary">
							<input name="venue-filter" type="radio" autoComplete="off" value="food"/>Food
							</label>
							<label className="venue-filter btn btn-primary">
							<input name="venue-filter" type="radio" autoComplete="off" value="drinks"/>Drinks
							</label>
							<label className="venue-filter btn btn-primary">
							<input name="venue-filter" type="radio" autoComplete="off" value="others"/>Others
							</label>
						</div>
						</div>
					</div>
				</div>
				
				{/* react bootstrap modal */}
				{/* add show to states, create handles for open/close */}
				{/* onHide =>func to incorporate e.preventDefault */}
				<Modal show={this.state.show} onHide={()=>this.closeModal()}>
					<Modal.Body>
						{
							// 16. condition to load 
							this.state.selectedVenue !== null ?(
							<div className="venue-popup-body row">
								<div className="col-6">
									<h1 className="venue-name">{this.state.selectedVenue.name}</h1>
									<p>{this.state.selectedVenue.address[0]}</p>
									<p>{this.state.selectedVenue.address[1]}</p>
									<p><span className="badge venue-type">Café</span></p>
								</div>
								<div className="col-6">
									<img src={this.state.selectedVenue.photo} className="img-fluid" alt="Responsive"/>
								</div>
							</div>
							): 'Loading...'
						}
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default App;

//newsapi