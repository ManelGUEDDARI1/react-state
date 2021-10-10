//rcc //rfce
import React, { Component } from 'react'

 class AppClass extends Component {
    //  constructor (props){
    //      super (props)
         state ={
             Person : { fullName: "Manel Gueddari", bio:"futur developer", imgSrc:" https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg", profession: "full stack developer"  } ,
             shows : false, 
             count :0
             
         }
     show = () => { 
         this.setState({shows : !this.state.shows})
         }

         componentDidMount() {
            setInterval(() => {
              this.setState({count:this.state.count+1})
            }, 1000)
          
            
          }

    render() {
        return (
            <div style ={{ background : "#999"}} >
                {this.state.shows ? 
                <div>
                    <h1 style ={{color:"#ddf" }} > {this.state.Person.fullName}</h1>
                    <img src= {this.state.Person.imgSrc} style ={{display: "block" , marginleft:"auto", marginright: "auto" , width: "50%" }} alt =""  /> 
 
    
                    <h2 style={{color : "RGB(222, 221, 250)"}} > {this.state.Person.bio} </h2> 
                    <h2 style={{color : "RGB(240, 221, 250)"}}> {this.state.Person.profession} </h2>
                 
                     </div> : null }

                <h1> The component has been rendered for {this.state.count} seconds </h1>    
                <button onClick= {this.show}>show me</button>
  
            </div>
        )
    }
}

export default AppClass