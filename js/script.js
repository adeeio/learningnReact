
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

    var moviesElements = movies.map(function(movie){
        return React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {}, movie.desc),
            React.createElement('img', {src: movie.image, style:{width:300, height:300}})
            );
    });

    var element = 
        React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmow'),
            React.createElement('ul', {}, moviesElements)
            );

ReactDOM.render(element, document.getElementById('app'));