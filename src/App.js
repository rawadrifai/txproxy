import React, { Component } from 'react';
import { Button, Input, Container, Image, Segment, Grid, Divider, Header, TextArea, Dropdown, Form, Radio, Tab, Menu } from 'semantic-ui-react';

import './App.css';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
const TxProxy = require('txproxy').TxProxy;

Amplify.configure(awsmobile);

class App extends Component {

  INITIAL_STATE = {
    tx: '',
    txhash: '',
    blockchain: 'bitcoin',
    network: 'testnet',
  };
  state = this.INITIAL_STATE;



  handleNetworkChange = (event, { name }) => this.setState({ network: name })
  handleBlockChainChainge = (event, { value }) => this.setState({ blockchain: value })

  handleTxInput = e => {
    this.setState({
      tx: e.target.value
    });
  }

  handleTxHashInput = e => {
    this.setState({
      txhash: e.target.value
    });
  }

  getTx = async () => {
    console.log(this.state.blockchain)
    const result = await TxProxy.getTx(this.state.txhash, this.state.blockchain, this.state.network);
    console.log(result)
  }

  broadcastTx = async () => {

  }



  blockchains = [
    {
      text: 'Bitcoin',
      value: 'bitcoin',
      image: { avatar: true, src: '/images/bitcoin.png' },
    },
    {
      text: 'Ethereum',
      value: 'ethereum',
      image: { avatar: true, src: '/images/ethereum.png' },
    },
    {
      text: 'Ripple',
      value: 'ripple',
      image: { avatar: true, src: '/images/ripple.png' },
    }
  ]


  panes = [
    { menuItem: 'testnet' },
    { menuItem: 'mainnet' }
  ]



  render() {

    return (

      <Container className="container">

        <h2 size='huge' className='App-header'>txproxy.io</h2>
        <HeaderSubHeader className="subheader">Broadcast and retrieve transactions.</HeaderSubHeader>




        <Container className="center">
          <Grid divided='vertically' className="network">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Dropdown placeholder='Select Blockchain' fluid clearable selection options={this.blockchains} onChange={this.handleBlockChainChainge} />
              </Grid.Column>
              <Grid.Column>
                <Menu secondary>
                  <Menu.Menu position='right'>
                    <Menu.Item className="network"
                      name='testnet'
                      active={this.state.network === 'testnet'}
                      onClick={this.handleNetworkChange} />

                    <Menu.Item className="network"
                      name='mainnet'
                      active={this.state.network === 'mainnet'}
                      onClick={this.handleNetworkChange}
                    />
                  </Menu.Menu>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>


          <Container className="seg">
            <Segment>
              <Grid columns={2} relaxed='very'>
                <Grid.Column>
                  <h3 className="label">Enter transaction hash:</h3>
                  <Divider />
                  <TextArea onChange={this.handleTxHashInput} className='textarea' />
                  <Button secondary size="large" className="button" onClick={this.getTx}>get tx</Button>
                </Grid.Column>
                <Grid.Column>
                  <h3 className="label">Enter signed transaction:</h3>
                  <Divider />
                  <TextArea onChange={this.handleTxInput} className='textarea' />
                  <Button secondary size="large" className="button" onClick={this.broadcastTx}>broadcast tx</Button>
                </Grid.Column>
              </Grid>

              <Divider vertical>/</Divider>
            </Segment>
          </Container>
        </Container>
      </Container >
    );
  }
}

export default App;
