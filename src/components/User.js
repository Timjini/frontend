// import React from "react";
// import axios from "axios";


// export default class User extends React.Component {

//   state = {
//     user: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:3001/users`)
//       .then(res => {
//         const users = res.data;
//         this.setState({ users });
//       })
//   };


//     render(){
//         return (
//             <>
//                 {
//           this.state.users
//             .map(user =>
//                 <li> 
//                     {user.email}
//                 </li>
//                     )
//         }  
//         </>
            
//         )
//     }
// }