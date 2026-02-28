let display = {
    add : function(a,b){
        return a+b;
    },
    mult : function(a,b){
        return a*b;
    },
    blogs : [
        {
        title : 'Why should i die ? ',
        description : 'You got a lot of reason'
        },
        {
        title : 'Python',
        description : 'SUCKS'
        },
        {
        title : 'JAVA',
        description : 'SUCKS'
        }
    ],
    logBlog : function(){
        this.blogs.forEach(blogs => {
            console.log(`Blog Title : ${blogs.title} and description : ${blogs.description}`)
        });
    }
}

let a = 10;
let b = 5;
console.log(display.add(a,b))
console.log(display.mult(a,b))
console.log(display.blogs)
display.logBlog()