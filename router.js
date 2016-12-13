Router.route('/', {
    name: 'home',
    template: 'viewIdea'
});

Router.route('/login', {
    name: 'login',
    template: 'login'
});

Router.route('/register', {
    name: 'register',
    template: 'register'
});
