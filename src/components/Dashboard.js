import React from 'react';

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

        console.log("event", this);


        // this.state.list.push(this.input.current.value);



        this.setState({
            list: [...this.state.list, this.input.current.value]
        })
        // this.state.;

    }

    render() { 

        console.log("Form render", this.state.list);
        const shopping = this.state.list.map((item, key) => {
            return <li key={key}>{item}</li>    
        });

        return (  

            <div>Shopping List
                <form onSubmit={this.onSubmit}>

                    <div>List:
                    </div>
                    <ul>{shopping}</ul>
                        
                    <input ref={this.input} type="text" onChange={this.onChange}/>
                </form>
            </div>    

        );
    }
}
 
export default Dashboard;

