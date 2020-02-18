import React from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class App extends React.Component{
    constructor() {
        super();

        this.state = {
            person:{
                    name : '',
                    age : 16
            },
            list:[]
        }
    };


    handleChange = event => {
        this.setState({
            person:{
                ...this.state.person,
                [event.target.name]: event.target.value
            }
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            list:
            [...this.state.list, this.state.person]
        });
        console.log(this.state.list);
    };

   render() {
       const {list} = this.state; // constructor
     return (
         <div>
         <form onSubmit={this.handleSubmit}>
             <TextField name="name" label="Name" onChange = {this.handleChange} /><br/>
             <TextField name="age" label="Age" onChange = {this.handleChange} /><br/><br/>
             <Button type="submit" variant="outlined" color="primary">
                 Submit
             </Button>
             {/*<input name = 'name' onChange = {this.handleChange} />*/}
             {/*<input name = 'age' onChange = {this.handleChange} />*/}
             {/*<button type="submit" >submit</button>*/}
         </form>
             {list.map((item, idx)=>{
                 return <div key={idx}>{item.name}{item.age}</div>
             })}

             <List>
                 <ListItem>
                     <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                 </ListItem>
                 <ListItem>
                     <ListItemText primary="Work" secondary="Jan 7, 2014" />
                 </ListItem>
                 <ListItem>
                     <ListItemText primary="Vacation" secondary="July 20, 2014" />
                 </ListItem>
             </List>
         </div>
  )
};
};
export default App;
