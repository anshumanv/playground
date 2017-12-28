import React, { Component } from "react";
import { ReactiveBase, TextField, ResultList, SelectedFilters } from "@appbaseio/reactivesearch";

import { booksList } from "./resultViews";

export default class DataSearchDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-live"
				credentials="sHZWU7AYJ:d1e2922c-035c-429f-bfe4-62aa38b1c395"
			>
				<div className="row">
					<div className="col">
						<TextField
							dataField="original_title.search"
							componentId="BookSensor"
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							onData={booksList}
							className="result-list-container"
							pagination
							react={{
								and: "BookSensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
