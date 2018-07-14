//elements of html become nodes in the DOM, or the Document Object Model

var aMessage = new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue!'
    }
});

//this is how you can change the message in a console
//also, clearly you don't have to call your DOMs an 'app'; it could be anything like aMessage in this case
//but, I think it's standard to call it that
aMessage.message = 'I changed the message using the console';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

//again, you can change the value of an attribute out in the console
app3.seen = false;
app3.seen = true;

var app4 = new Vue({
    el: '#app-4',
    data: {
        //note that the 'todos' and the 'text' need to match with what it says in the html file
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

//this is how you can add an item to a list in the console
app4.todos.push({ text: 'Added another Item' })

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },

    //this is how you can add a function to a DOM
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }

    },
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: ''
    }
})

//using a child component may seem a little contrived, or unecessarily complex but
//it allows you to make the child more complex without affecting the parent app
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

//this app is very similar to app4 but this time we use a component
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

app7.groceryList.push({ id: 1, text: 'Test' })

const app8 = new Vue({
    el: '#app-8',
    data: {
        onOff: false
    },

    methods: {
        OnOff() {
            //you need the this. syntax when you're talking manipulating a variable in a method
            this.onOff = !this.onOff;
        }
    }
});

const app9 = new Vue({
    el: '#app-9',
    data: {
        onOff: false
    },

    methods: {
        OnOff() {
            this.onOff = !this.onOff;
        },

        //app8:onOff = !app8.onOff, 
    }
});

const app10 = new Vue({
    el: '#app-10',
    data: {

        //here is where the styleObject's attributes are set (note you could do an inline style
        //by literally coping and pasting this into the line, but that looks messy)
        //the attributes look very similar to CSS, but they don't have -'s, and it uses 
        //camel-hump syntax
        //this stuff can also be done in the css file if you prefer

        styleObject: {
            backgroundColor: 'blue',
            color: 'white',
            textAlign: 'center',
            lineHeight: 4,
            fontSize: '13px',
            width: 500,
            height: 50,
            border: 1, 
        }
        
    },

});

const app11 = new Vue({
    el: '#app-11',
    data: {
        onOff: true,
        styleObject: {
            color: 'black',
            textAlign: 'center',
            lineHeight: 7,
            fontSize: '15px',
        }
    },

    methods: {
        toggleOnOff() {
            this.onOff = !this.onOff;
        },
    }
});

const app12 = new Vue({
    el: '#app-12',
    data: {
        //this is just a default keyword/color that I chose; you don't really need this
        //however, you need to initialize the keyword value to something; even keyword: '', for example
        keyword: 'Delete me',
    },

});

//creating the Post class here, which we can reuse
class Post {
    constructor(title, link, author, img) {
        this.title = title;
        this.link = link;
        this.author = author;
        this.img = img;
    }
}

const app13 = new Vue({
    el: '#app-13',
    data: {
        onOff: true,

        //this data came from a tutorial I followed
        postList: [
            new Post(
                'Vue.js',
                'https://vuejs.org/',
                'Chris',
                'https://vuejs.org//images/logo.png'
            ),
            new Post(
                'React.js',
                'https://facebook.github.io/react/',
                'Tim',
                'http://daynin.github.io/clojurescript-presentation/img/react-logo.png'
            ),
            new Post(
                'Angular.js',
                'https://angularjs.org/',
                'Sam',
                'https://angularjs.org/img/ng-logo.png'
            ),
            new Post(
                'Ember.js',
                'http://emberjs.com/',
                'Rachel',
                'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
            ),
            new Post(
                'Meteor.js',
                'https://www.meteor.com/',
                'Chris',
                'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
            ),
            new Post(
                'Aurelia',
                'http://aurelia.io/',
                'Tim',
                'https://cdn.auth0.com/blog/aurelia-logo.png'
            ),
            new Post(
                'Node.js',
                'https://nodejs.org/en/',
                'A. A. Ron',
                'https://code-maven.com/img/node.png'
            ),
            new Post(
                'Pusher',
                'https://pusher.com/',
                'Alex',
                'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
            ),
            new Post(
                'Feathers.js',
                'http://feathersjs.com/',
                'Chuck',
                'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
            ),
        ],
        keyword: '',
    },

    methods: {
        toggleOnOff() {
            this.onOff = !this.onOff;
        },
    },

    //computed is like a method, but it allows the function to run anytime a variable in the computed method changes
    //in this example, the user can type the keyword and the method will see if in there's a post with that keyword
    computed: {
        //here we are defining the filteredList(), which will contain posts that contain that keyword
        //and this same filteredList will be used in the html file
        filteredList() {
            //this is written in a long-hand method
            //the postList can use the filter method to filter out posts that meet a certain condition
            //make sure to include post as a parameter of the filter method
            return this.postList.filter((post) => {
                //the filter method goes through the list and returns all posts that contain the keyword by using the .includes method
                //the toLowerCase() method is included so that it compares lowercase substrings, making it more user-friendly
                return post.title.toLowerCase().includes(this.keyword.toLowerCase());
            });
        }
    }
});





