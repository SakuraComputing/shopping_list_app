import React from 'react';
import ListItem from './ListItem';

class Dashboard extends React.Component {

    state = { 
        list: []
    }

    input = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            list: [...this.state.list, this.input.current.value]
        })
        this.input.current.value = "";
    }

    deleteItem = (id) => {
        console.log('On Delete');
        this.setState(({ list }) => ({
            list: list.filter((item, index) => index !== id)        
        }));
    }

    render() { 

        return (  

            <div>
                <form onSubmit={this.onSubmit}>
                    <input className="input-box" 
                            placeholder="Add Shopping Item Here"
                            ref={this.input} 
                            type="text" 
                            onChange={this.onChange}/>
                </form>
                <ul>
                    {
                        this.state.list.map((item, key) => 
                            <ListItem 
                                key={key}
                                item={item} 
                                deleteItem={this.deleteItem.bind(this, key)}
                            />)    
                    }
                </ul>
            </div>    
        );
    }
}
export default Dashboard;

