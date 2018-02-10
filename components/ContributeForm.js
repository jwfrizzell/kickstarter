import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

export default class ContributeForm extends Component {
	state = {
		value: "",
		loading: false,
		errorMessage: ""
	};

	onSubmit = async event => {
		event.preventDefault();
		this.setState({ loading: true, errorMessage: "" });
		const campaign = Campaign(this.props.address);
		try {
			const accounts = await web3.eth.getAccounts();

			await campaign.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, "ether")
			});
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
		this.setState({ loading: false });
		Router.replaceRoute(`/campaigns/${this.props.address}`);
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to Contribute</label>
					<Input
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
						label="ether"
						labelPosition="right"
					/>
					<Message
						error
						compact
						header="Something went wrong"
						content={this.state.errorMessage}
					/>
					<Button
						primary
						loading={this.state.loading}
						style={{ marginTop: "10px" }}
					>
						Contribute
					</Button>
				</Form.Field>
			</Form>
		);
	}
}
