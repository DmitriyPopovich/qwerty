const initialState = {
  auth: {
    user: false,
    status: false,
    error: false,
    isAuth: false
  },
  posts:{
    data: false,
    post:{
      id:false,
      isActivated: false,
      title:"",
      text: "",
      author: false
    }
  }
};
export default initialState;
