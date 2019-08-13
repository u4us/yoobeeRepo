import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Article from './Article';
import './App.css';

var keyCode = 'b37ed9c772d940c2ace3d420fa4a72f3';
var key = '?apiKey='+keyCode;

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			politicsArticles: [],
			businessArticles:[],
			sportsArticles: [],
			searchArticles: [],
			activeKey:'politics',
			keyword: 'null'
		}
	}

	handleTabSelect = (key, e) => {
		this.setState({activeKey:key});
	}

	handleSearchSubmitClick = (e) => {
		e.preventDefault();
		this.setState({activeKey:'search'})
		this.loadHeadlinesByTerm(this.state.keyword);
	}

	loadHeadlinesByCategory = (category)=>{
		var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&country=us&category='+category;
		fetch(articlesURL)
			.then( res=>res.json())
			.then((data)=>{
				var articles = data.articles;
				// console.log(articles);

				switch (category) {
					case 'politics':
						this.setState({politicsArticles:articles})
						break;
					case 'business':
						this.setState({businessArticles:articles})
						break;
					case 'sports':
						this.setState({sportsArticles:articles})
						break;
					default:
						break;
				}
			})
	}

	loadHeadlinesByTerm = (term)=>{
		var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
		fetch(articlesURL)
			.then( res=>res.json())
			.then((data)=>{
				var articles = data.articles;
				// console.log(articles);
				this.setState({searchArticles:articles})
			})
	}

	handleInputChange = (e)=>{
		this.setState({
			keyword: e.target.value
		})
	}

	componentDidMount(){
		this.loadHeadlinesByCategory('politics');
		this.loadHeadlinesByCategory('business');
		this.loadHeadlinesByCategory('sports');
		this.loadHeadlinesByTerm(this.state.keyword);
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
					<Nav.Link eventKey="business">Business</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link eventKey="sports">Sports</Nav.Link>
					</Nav.Item>
				</Nav>

				<form className="col-5">
					<div className="form-row align-items-center justify-content-end">
					<div className="col-auto">
						<input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords" onChange={this.handleInputChange}/>
					</div>
					<div className="col-auto">
						<button onClick={this.handleSearchSubmitClick} type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
					</div>
					</div>
				</form>
				</div>

				<Tab.Content>
					<Tab.Pane className="tab-pane" eventKey="politics">
						<h1>Politics</h1>
						<div className="articles">
						{
							this.state.politicsArticles.map((article,index)=>{
								var articleProps = {
									...article,
									key: index,
								}
								return(
									<Article {...articleProps}/>
								)
							})
						}
						</div>
					</Tab.Pane>

					<Tab.Pane className="tab-pane" eventKey="business">
						<h1>Business</h1>
						<div className="articles">
						{
							this.state.businessArticles.map((article,index)=>{
								var articleProps = {
									...article,
									key: index,
								}
								return(
									<Article {...articleProps}/>
								)
							})
						}
						</div>
					</Tab.Pane>

					<Tab.Pane className="tab-pane" eventKey="sports">
						<h1>Sports</h1>
						<div className="articles">
						{
							this.state.sportsArticles.map((article,index)=>{
								var articleProps = {
									...article,
									key: index,
								}
								return(
									<Article {...articleProps}/>
								)
							})
						}
						</div>
					</Tab.Pane>

					<Tab.Pane className="tab-pane" eventKey="search">
						<h1>Search Results</h1>
						{
							this.state.searchArticles.map((article,index)=>{
								var articleProps = {
									...article,
									key: index,
								}
								return(
									<Article {...articleProps}/>
								)
							})
						}
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
			</div>
		);
	}
}

export default App;
