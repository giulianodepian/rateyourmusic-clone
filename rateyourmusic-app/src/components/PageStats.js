import React from 'react';
import './../static/styles/PageStats.css';

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
				<hr />
			  <div class="page-stat">
			    <span class="page-stat-count">{this.state.cantArtists}&nbsp;</span>
			    Artists&nbsp;
			  </div>
				<div class="page-stat">
					<span class="page-stat-count">{this.state.cantReleases}&nbsp;</span>
					Releases&nbsp;
				</div>
				<div class="page-stat">
					<span class="page-stat-count">{this.state.cantLabels}&nbsp;</span>
					Labels&nbsp;
				</div>
				<div class="page-stat">
					<span class="page-stat-count">{this.state.cantRatings}&nbsp;</span>
					Ratings&nbsp;
				</div>
				<hr />
			</div>
		)
	}
}

export default PageStats;
