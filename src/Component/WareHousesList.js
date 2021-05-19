import React from "react";
import { Button, Table } from 'react-bootstrap'
import data from './warehouses.json'

class SearchName extends React.Component {

    render() {
        return (
            <div className='search'>
                <input type="text" className="form-control" onChange={(event) => this.props.searchinfo(event.target.value)} placeholder="Search for names.." ></input>
            </div>
        )
    }
}

class WareHousesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warehouses: [],
            searchname:''
        }
    }
   
    searchItem=(text)=>{
        this.setState({
            searchname: text
        })
    }
    
    render() {
        console.log('data',data[0].is_live)
        return (
            <React.Fragment>
                <div className='container'>
                    
                    <div className='float-right py-4'>
                    <SearchName searchinfo={this.searchItem} style={{width:150}} />
                   
                    </div>
                    <h1 className='py-4'>Warehouse List</h1>
                

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Cluster</th>
                            <th>Space_available</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.filter(name => {
                                return name?.name.toLowerCase().includes(this.state.searchname.toLowerCase()) ||
                                    name?.city.toLowerCase().includes(this.state.searchname.toLowerCase())||
                                    name?.cluster.includes(this.state.searchname)
                                    // name?.space_available.includes(this.state.searchname)
                            }).map((item,index)=>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item?.city}</td>
                            <td>{item?.cluster}</td>
                            <td>{item?.space_available}</td>
                            <td>{item?.is_live.toString()}</td>
                            <td> <Button onClick = {()=>this.props.history.push('/edit-warehouse/'+item.id)}>Edit</Button> </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
                </div>
            </React.Fragment>
        )
    }
}
export default WareHousesList;