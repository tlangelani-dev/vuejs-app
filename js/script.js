new Vue({
    el: '#example1',
    data: {
        'message': 'Welcome to Vuejs',
        'languages': ['HTML', 'CSS', 'jQuery', 'PHP']
    },
    methods: {
        btnClick: function() {
            alert('You clicked me dude!!!');
        }
    }
});

// example 2
new Vue({
    el: '#example2',
    data: {
        'message': ''
    }
});

// example 3
