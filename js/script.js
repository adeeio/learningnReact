


var movies = [
    {   id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'images/potter.jpg'
    },
    {   id: 2,
        title: 'Matrix',
        desc: 'film o symulacji',
        image: 'images/matrix.jpg'
    },
    {   id: 3,
        title: 'Snow piercer',
        desc: 'film o ukladzie zycia',
        image: 'images/snow.jpg'
    },
    {   id: 4,
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


// var movies = {
//     id: 1,
//     title: 'Harry Potter',
//     desc: 'film o czarodzieju',
//     image: 'images/potter.jpg'
// };

var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {key: movies.id},
                React.createElement('img', {src: this.props.movies.image})
            )
        )
    },
});


var element = React.createElement(Movie, {key: movies.id, movies: movies});
ReactDOM.render(element, document.getElementById('app'));