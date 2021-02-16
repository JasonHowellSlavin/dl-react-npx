import React, {Component} from 'react'; 
import './App.scss';
import cards from './data/cards';
import Card from './components/Cards/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hell World',
      cards: [],
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleDelete(index) {
    let newCards = this.state.cards.slice();

    newCards.splice(index, 1);

    this.setState({cards: newCards});
  }

  handleFilter(text) {
    console.log(text);
    let newCards = this.state.cards.slice();

    let filteredCards = newCards.filter((card) => {
      return card.tags.includes(text);
    })

    this.setState({cards: filteredCards});
  }

  componentDidMount() {
    // API calls go here 
    let myCards = cards.slice();

    this.setState({cards: myCards});
  }

  render() {
    return (
      <div className="App">
        {this.state.title}
        <section>
          <input id={'filter'} type={'text'}></input>
          <button onClick={() => {this.handleFilter(document.querySelector('#filter').value)}}>Filter by Tag</button>
        </section>
        <section className={'three-card'}>
          {this.state.cards.map((card, index) => {
            return (
              <Card title={card.title} 
                    img={card.img} 
                    link={card.link} 
                    tags={card.tags} 
                    index={index} 
                    handleDelete={this.handleDelete}/>
            )
          })}
        </section>
      </div>
    );
  }
}

export default App;
