import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import {set_data ,faceLog} from '../../store/action'

class Home extends React.Component{
   
    static getDerivedStateFromProps(props, state){
        console.log("props===>" , props)
        return{
            
        }
    }
    render(){
        let user = {name: "umair" , email: "sheraz@hotmail.com"}
        console.log("users=>",this.props.users);
        return(
            <div>
                <h1>Home</h1>
                <button onClick={()=>this.props.faceLog()}>Facebook login </button>
                <button  onClick={()=>this.props.set_data(user)}>Set Data</button>

            </div>
        );

    }
}
const mapStateToProps = (state) =>({
    users: state.users
})

const mapDispatchToProps = (dispatch) =>({
    set_data: (data) => dispatch(set_data(data)),
    faceLog: (data) => dispatch(faceLog())

})
export default connect(mapStateToProps, mapDispatchToProps) (Home);
