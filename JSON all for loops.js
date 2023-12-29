// for..loop

let title = [{
    name : "Arun", 
    message : "hi",
    from : "some where in world",
},
{
    name : "pandian", 
    message   : "how are you?",
    from : "but,im here",
}];
for(let i = 0; i < title.length; i++) {
    let obj = title[i];

    console.log(obj.name);
}

//for..in..

let title = [{
    name : "Arun", 
    message : "hi",
    from : "some where in world",
},
{
    name : "pandian", 
    message   : "how are you?",
    from : "but,im here",
}];
for (var key in title) {
    if (title.hasOwnProperty(key)) {
      console.log(title[key].name);
    }
}

// for..of

let title = [{
    name : "Arun", 
    message : "hi",
    from : "some where in world",
},
{
    name : "pandian", 
    message   : "how are you?",
    from : "but,im here",
}];
for (const key of title) {
    console.log(key)
}

//forEach()

let title = [{
    name : "Arun", 
    message : "hi",
    from : "some where in world",
},
{
    name : "pandian", 
    message   : "how are you?",
    from : "but,im here",
}];

title.forEach((item) => {
    console.log('name:' + item.name);
    console.log('message: ' + item.message);
    console.log('from: ' + item.from);
    
  });
