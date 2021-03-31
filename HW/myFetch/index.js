function myFetch(url,options){
    return new Promise((resolve, reject) => {
    let method = options && options.method ? options.method : 'GET';
    const xmr = new XMLHttpRequest();
    
    xmr.open(method, url, true);
    if (options && options.headers)
        Object.keys(options.headers).forEach(key => {
            xmr.setRequestHeader(key, options.headers[key]);
        });
    xmr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status >= 200 && this.status < 300){
            resolve({ 
                json: () => JSON.parse(xmr.response) 
            });
        }
        else if (this.status < 200 || this.status >= 300){
            reject({ 
                error: this.readyState, error: this.status 
            });
        }
    };
    options && options.body ? xmr.send(options.body) : xmr.send();
    });
}



//Post Request
myFetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        userId: 3,
        title: 'Hangout',
        completed: false,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.log(error.error))


//Get request
myFetch('https://jsonplaceholder.typicode.com/posts/4')
.then((response) => response.json())
.then((json) => console.log(json))
.catch(error=>console.log(error.error))


//Put Request
myFetch('https://jsonplaceholder.typicode.com/posts/4', {
    method: 'PUT',
    body: JSON.stringify({
        id: 4,
        title: 'WORKOUT!',
        body: 'I need to workout tonight',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch(error=>console.log(error));


//Delete Rquest
myFetch('https://jsonplaceholder.typicode.com/posts/4', {
    method: 'DELETE',
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))


//Patch Request
myFetch('https://jsonplaceholder.typicode.com/posts/4', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'Learn React',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json))
.catch(error=>console.log(error));

