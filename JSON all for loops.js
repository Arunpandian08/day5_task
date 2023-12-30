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

let text = [{
    name : "Arun", 
    message : "hi",
    from : "some where in world",
},
{
    name : "pandian", 
    message   : "how are you?",
    from : "but,im here",
}];
for (var key in text) {
    if (text.hasOwnProperty(key)) {
      console.log(text[key].name);
    }
}

// for..of

let result = [{
    name : "Arun", 
    message : "hi",
    from : "some where in world",
},
{
    name : "pandian", 
    message   : "how are you?",
    from : "but,im here",
}];
for (const key of result) {
    console.log(key)
}

//forEach()

let answer = [{
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
