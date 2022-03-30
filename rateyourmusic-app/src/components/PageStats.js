import React from 'react';

class PageStats extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = { 
  			cantArtists: 0,
  			cantReleases: 0,
  			cantLabels: 0,
  			cantRatings: 0,
  		};
	}

	fetchGetStats(){
		fetch("http://localhost:9000/getStats")
		.then(response => response.json())
		.then(data => {
			this.setState({
				cantReleases: data.cantReleases,
				cantArtists: data.cantArtists,
				cantLabels: data.cantLabels,
				cantRatings: data.cantRatings
			})
		})
	}
	
	componentDidMount() {
		this.fetchGetStats()
	}

	render() {
		return(
			<div class="page-stats">
			  <div class="page-stat">
			    <span class="page-stat-count">{this.state.cantArtists}</span>
			    Artists
			  </div>
			</div>
		)
	}
}

export default PageStats;