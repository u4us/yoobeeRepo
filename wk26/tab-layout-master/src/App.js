import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Article from './Article';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			articles: [
				{
					source: {
						id: 0,
						name: "Etonline.com"
					},
					author: "Emily Krauser‍",
					title: "2019 Teen Choice Awards: Red Carpet Arrivals - Entertainment Tonight",
					description: "Check out all the bold and fabulous looks from the awards show, which took place in Hermosa Beach, California, on Aug. 11",
					url: "https://www.etonline.com/gallery/2019-teen-choice-awards-red-carpet-arrivals-130251",
					urlToImage: "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2019-08/1280tca_1.jpg?itok=WjbA9T0y",
					publishedAt: "2019-08-11T22:39:07Z",
					content: "Get your surfboards out! The 2019 Teen Choice Awards took place in Hermosa Beach, California, on Aug. 11, and your fave celebs from music, film, television, sports, fashion, comedy and YouTube hit the red carpet in full force! Click through the gallery to see… [+38 chars]"
				},

			],
			activeKey:'politics'
		}
	}

	handleTabSelect = (key, e) => {
		this.setState({activeKey:key})
	}

	handleSearchSubmitClick = (e) => {
		e.preventDefault();
		this.setState({activeKey:'search'})
	}
	render(){
		return (
			<div className="container">
			<Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
		
				<div className="row tab-top">
				
				<Nav variant="pills" className="col-7">
					<Nav.Item>
					<Nav.Link eventKey="politics">Politics</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link eventKey="business">Businsess</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link eventKey="sports">Sports</Nav.Link>
					</Nav.Item>
				</Nav>

				<form className="col-5">
					<div class="form-row align-items-center justify-content-end">
					<div class="col-auto">
						<input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords"/>
					</div>
					
					<div class="col-auto">
						<button onClick={this.handleSearchSubmitClick} type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
					</div>
					</div>
				</form>
				</div>

				
				<Tab.Content>
				<Tab.Pane className="tab-pane" eventKey="politics">
					<h1>Politics</h1>

					<div className="articles">
				
					<Article {...articles}/>

					<Article />

					<Article />

					</div>
				</Tab.Pane>

				<Tab.Pane className="tab-pane" eventKey="business">
					<h1>Business</h1>
					<div className="articles">

					<Article />

					<Article />

					</div>
				</Tab.Pane>

				<Tab.Pane className="tab-pane" eventKey="sports">
					<h1>Sports</h1>
				</Tab.Pane>

				<Tab.Pane className="tab-pane" eventKey="search">
					<h1>Search Results</h1>

					<div className="article">
					<h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
					<p><span class="badge badge-primary">Phonearena.com</span></p>
					</div>
					
				</Tab.Pane>

				</Tab.Content>
			
			</Tab.Container>
			</div>
		);
	}
}

export default App;
