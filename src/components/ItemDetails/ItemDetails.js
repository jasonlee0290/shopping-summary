import React, { Component } from 'react';
import { Button, Collapse, Card, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({open: !this.state.open })}
                >
                    { this.state.open === false ? `See` : `Hide`} item details
                    { this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Media>
                                <Media-Left>
                                    <img
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://i5.walmartimages.com/asr/4104a16d-4ebb-4387-ae36-2619f3d2f232_1.
                                    466980d10b5491837b6578303f1c4967.jpeg?odnWidth=undefined&odnHeight=undefined&
                                    odnBg=ffffff">
                                    </img>
                                </Media-Left>
                                <Media-Body>
                                    <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> {`$${this.props.price}`} </strong>
                                            <strong> className="price-strike" {`$${this.props.price}`} </strong>
                                        </Col>
                                        <Col md={6}> Qty: 1 </Col>
                                    </Row>
                                </Media-Body>
                            </Media>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}