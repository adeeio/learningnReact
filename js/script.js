


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
            React.createElement('ul', {},
                React.createElement('li', { key: this.props.movie.id })
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
        return React.createElement('img', {src: this.props.image.image})
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


var element = React.createElement(Movie, { movie: movie[0]}); 
var element2 = React.createElement(MovieTitle, {title: movie[0]})
ReactDOM.render(element, document.getElementById('app'));