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
        localStorage.setItem(uuid, this.input.current.value);
        this.input.current.value = "";
    }

    deleteItem = (id) => {
        console.log('Is it getting in here', id);
        this.setState({
            list: this.state.list.filter((item) => item.id !== id)        
        });
        localStorage.removeItem(id);
    }

    getUUID() {
        return uuid();
    }

    componentDidMount() {

        let newList = [];
        let storageCount = localStorage.length;

        while ( storageCount-- ) {
            let lsKey = localStorage.key(storageCount);
            let lsItem = localStorage.getItem(lsKey);
            newList.push({ id: lsKey, desc: lsItem });
        }

        this.setState({
            list: newList
        })
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
                                deleteItem={() => this.deleteItem(item.id)}
                            />)    
                    }
                </ul>
            </div>    
        );
    }
}
export default Dashboard;

