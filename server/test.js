// import {setAuth, setUser} from "../client_2/src/store/store/reducers/auth-reducer/auth-reducer";
//
// const jwt = require("jsonwebtoken");

// const secret = 'randen-jwt-key-adsjbfnjadkbgjds'
// const token_acc = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2NjZGZmYzc2OTAzZmJjZTE2NWM1MSIsImVtYWlsIjoiZGltYUBtYWlsY29yLm1kZGxhIiwiaXNBY3RpdmF0ZWQiOmZhbHNlLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1MjM0NjM2NywiZXhwIjoxNjUyMzQ3MjY3fQ.hjLz4wFMst1_ItByy1YiKtgxzrQO_g4h2Isz6_QrDDE'
// const res = jwt.verify(token_acc, secret)
//
// console.log(res)


// const secret_refresh = 'randen-jwt-key-adsjbfndsafnfgalknlsn'
// const token_refresh = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2NkMTU2ZGExMGRhN2Q4ZTU1OTVmMyIsImVtYWlsIjoiZGltYUBtYWlsLnVhYSIsImlzQWN0aXZhdGVkIjp0cnVlLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1MjM1MzU1OCwiZXhwIjoxNjU0OTQ1NTU4fQ.ghyPAsBk6SbhpFvqq2hITpzuQ2f0HXz81f4fSRTmxC8'
// const res = jwt.verify(token_refresh, secret_refresh)
// console.log(res)

var axios = require('axios');
var data = JSON.stringify({
    "email": "dima@mail.uaa",
    "password": "1234"
});

var config = {
    method: 'post',
    url: 'http://localhost:5000/auth/login',
    headers: {
        'Content-Type': 'application/json',
        'Cookie': 'refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2NmMTU5MTdmMGFlNTM2MDIwOTc2MSIsImVtYWlsIjoiZGltYUBtYWlsLnVhYSIsImlzQWN0aXZhdGVkIjpmYWxzZSwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NTIzODQyMjQsImV4cCI6MTY1NDk3NjIyNH0.n1BsaaBfqMIpM1GgfiqFRzi5BxtTjPHMvy0iEGoOi-E'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });