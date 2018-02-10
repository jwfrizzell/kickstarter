import React, { Component } from "react";
import { Table, Button, Message } from "semantic-ui-react";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";

export default class RequestRow extends Component {
	state = {
		loadingApprove: false,
		finalizeApprove: false,
		errorMessage: ""
	};

	onApprove = async () => {
		const campaign = Campaign(this.props.address);
		const accounts = await web3.eth.getAccounts();

		this.setState({ loadingApprove: true, errorMessage: "" });

		try {
			await campaign.methods
				.approveRequest(this.props.id)
				.send({ from: accounts[0] });
			Router.pushRoute(`/campaigns/${this.props.address}/requests`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
			console.log(err.message);
		}
		this.setState({ loadingApprove: false });
	};

	onFinalize = async () => {
		const campaign = Campaign(this.props.address);
		const accounts = await web3.eth.getAccounts();

		this.setState({ finalizeApprove: true, errorMessage: "" });

		try {
			await campaign.methods
				.finalizeRequest(this.props.id)
				.send({ from: accounts[0] });
			Router.pushRoute(`/campaigns/${this.props.address}/requests`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
			console.log(err.message);
		}
		this.setState({ finalizeApprove: false });
	};

	render() {
		const { Row, Cell } = Table;
		const { id, request, approversCount } = this.props;
		const readyToFinalize = request.approvalCount > approversCount / 2;

		return (
			<Row
				disabled={request.complete}
				positive={readyToFinalize && !request.complete}
			>
				<Cell>{id + 1}</Cell>
				<Cell>{request.description}</Cell>
				<Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
				<Cell>{request.recipient}</Cell>
				<Cell>
					{request.approvalCount} / {approversCount}
				</Cell>
				<Cell>
					{request.complete ? null : (
						<Button
							loading={this.state.loadingApprove}
							color="green"
							basic
							onClick={this.onApprove}
						>
							Approve
						</Button>
					)}
				</Cell>
				<Cell>
					{request.complete ? null : (
						<Button
							loading={this.state.finalizeApprove}
							color="teal"
							basic
							onClick={this.onFinalize}
						>
							Finalize
						</Button>
					)}
				</Cell>
			</Row>
		);
	}
}
