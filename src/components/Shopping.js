import React from 'react';
import ListItem from './ListItem';

class Dashboard extends React.Component {

    state = { 
        list: [

        ]
     }

     input = React.createRef();


    onChange = () => {
        console.log('On Chnage');
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            list: [...this.state.list, this.input.current.value]
        })
    }

    render() { 

        console.log("Form render", this.state.list);

        return (  

            <div>Shopping List
                <form onSubmit={this.onSubmit}>
                    <input ref={this.input} type="text" onChange={this.onChange}/>
                </form>
                <ListItem items={this.state.list} />
            </div>    

        );
    }
}
 
export default Dashboard;

