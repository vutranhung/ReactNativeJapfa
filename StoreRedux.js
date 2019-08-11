import {createStore} from 'redux'

const rootReducer=(state,action)=>{
    switch(action.type){
        case "AddUser":
        //call API de day du lieu len server
        // gia tri tra ve id cua ban ghi duoc them

    fetch('http://10.0.2.2:50555/api/User/AddUser',{
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
          userName:action.itemUser.username,
          password:action.itemUser.password,
          fullName:action.itemUser.fullname,
          gender:action.itemUser.gender==0?'M':'F'
      })
    })
    .then((response) => response.json())
      .then((responseJson) => {   
      action.itemUser.id=responseJson 
    }) 
    .catch((error) =>{
      console.error(error);
    });
        data=[...state.arrUser, action.itemUser]       
        return{
            ...state,
            arrUser:data    
        }

        case "EditUser":       
             console.log("edit user" + JSON.stringify(action.payload))
             const index= state.arrUser.findIndex(item => item.id == action.payload.id)
             newData=[...state.arrUser]
             newData.splice(index,1,action.payload)
             return{
                 ...state,
                 arrUser:newData
             }
        

        case "DeleteUser":
         data=state.arrUnit.filter(item=>item.id!=action.itemUser.id)
         return{
             ...state,
             arrUser:data
         }
         case "Initial":
         return{
             ...state,
             arrUser:JSON.parse(action.payload)
         }
         default:
          return {...state}
    }
}


const initialUserState = {

    arrUnit:[],
    arrUser:[]
}
export default storeRedux=createStore(rootReducer,initialUserState)