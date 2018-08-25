import React from 'react';
import ListItem from './ListItem';
import uuid from 'uuid';

class Dashboard extends React.Component {

    state = { 
        list: []
    }

    input = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        let uuid = this.getUUID();
        this.setState({
            list: this.state.list.concat([{
                id: uuid,
                desc: this.input.current.value
            }])
        })
        console.log(this.state.list);
        this.input.current.value = "";
    }

    deleteItem = (id) => {
        this.setState(({ list }) => ({
            list: list.filter((item, index) => index !== id)        
        }));
    }

    getUUID() {
        return uuid();
    }

    render() { 

        return (  

            <div>
                <form onSubmit={this.onSubmit}>
                    <input className="input-box" 
                            type="text" 
                            placeholder="Add Shopping Item Here"
                            ref={this.input} 
                            onChange={this.onChange}/>
                </form>
                <ul>
                    {
                        this.state.list.map((item) => 
                            <ListItem 
                                key={item.id}
                                item={item.desc} 
                                deleteItem={() => this.deleteItem.bind(item.id)}
                            />)    
                    }
                </ul>
            </div>    
        );
    }
}
export default Dashboard;

