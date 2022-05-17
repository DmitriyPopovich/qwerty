const initialState = {
  auth: {
    user: false,
    status: false,
    error: false,
    isAuth: false
  },
  posts:{
    data: [],
    post:{
      id:false,
      isActivated: false,
      title:"",
      text: "",
      author: false,
      createdAt: ''
    }
  }
};
export default initialState;
