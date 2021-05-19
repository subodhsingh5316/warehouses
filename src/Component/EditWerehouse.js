import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import data from './warehouses.json';

class EditWarehouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            live:false
        }
    }
    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        const newData = data.map((item, index) => {
            if (item.id === parseInt(this.props.location.pathname.slice(16))) {
                item['name'] = e.target.name.value;
                item['city'] = e.target.city.value;
                item['cluster'] = e.target.cluster.value;
                item['space_available'] = e.target.space_available.value;
                item['type'] = e.target.type.value;
                item['is_live'] = e.target.is_live.checked

            }
            return item
        })
        this.setState({
            data: newData
        })
        console.log(this.state.data)
        this.props.history.goBack()
        return this.state.data

    }
    render() {
        return (
            <div className='container py-4'>
                <div className='row d-flex justify-content-between my-2'>
                    <h1>Edit Warehouse</h1>
                    <Button onClick={() => this.props.history.goBack()} style={{ width: '100px', height: '40px' }}>Back</Button>
                </div>
                {this.state.data?.filter(item => item.id === parseInt(this.props.location.pathname.slice(16))).map((item, index) =>
                    <Form key={index} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Code</Form.Label>
                            <Form.Control name='code' type="text" defaultValue={item.code} placeholder="Enter code" disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Id</Form.Label>
                            <Form.Control name='id' type="number" defaultValue={item.id} placeholder="Enter id" disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>name</Form.Label>
                            <Form.Control name='name' type="text" defaultValue={item.name} placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>City</Form.Label>
                            <Form.Control name='city' type="text" defaultValue={item.city} placeholder="city" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Cluster</Form.Label>
                            <Form.Control name='cluster' type="text" defaultValue={item.cluster} placeholder="" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>space_available</Form.Label>
                            <Form.Control name='space_available' type="text" defaultValue={item.space_available} placeholder="" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Type</Form.Label>
                            <Form.Control name='type' type="text" defaultValue={item.type} placeholder="" />
                        </Form.Group>
                        <Form.Group className='row'>
                            <Form.Label style={{marginLeft:'1%'}}> Live </Form.Label>
                            <Form.Control name='is_live' type="checkbox" defaultChecked={item.is_live} placeholder="" style={{ width: '30px', height: '30px',marginLeft:'10%' }} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                   </Button>
                    </Form>
                )}
            </div>
        )
    }
}
export default EditWarehouse;
