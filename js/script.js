


var movie = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'images/potter.jpg'
    },
    {
        id: 2,
        title: 'Matrix',
        desc: 'film o symulacji',
        image: 'images/matrix.jpg'
    },
    {
        id: 3,
        title: 'Snow piercer',
        desc: 'film o ukladzie zycia',
        image: 'images/snow.jpg'
    },
    {
        id: 4,
        title: 'Mortal Kombat',
        desc: 'film o ratowaniu swiata',
        image: 'images/mortal.jpg'
    },
    {
        id: 5,
        title: 'Pulp Fiction',
        desc: 'klasyk',
        image: 'images/pulp.jpg'
    }
];




var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
                React.createElement('li', { key: this.props.movie.id},
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieImage, {image: this.props.movie.image, style: {widht: 300, hegith: 300}}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc})
                
            )
        )

    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc)
    },

});
var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('img', {src: this.props.image})
    },

});
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title)
    },

});

var MoviesList = React.createClass({
    propTypes: {
        moviesList: React.PropTypes.array.isRequired,
    },
    render: function () {
        return moviesList.map(function (movie) {
            return React.createElement(Movie, {movie: movie})
        })
    },
});

var element = React.createElement('div', {},
React.createElement('ul',{},MoviesList)); 
ReactDOM.render(element, document.getElementById('app'));