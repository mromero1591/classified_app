import React, {Component} from 'react'
import {connect} from 'react-redux';
import Axios from 'axios';

//custom imports
import ItemCard from '../ItemComponents/ItemCard/ItemCard';
import {updateItems} from '../../ducks/itemsReducer/itemsReducer';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Axios.get('/api/items')
    .then(res => {
      this.props.updateItems(res.data);
    }).catch(err => {
      console.log('Error in getting the data', err);
    });
  }

  render(){
    const displayCards = this.props.items.map( item => {
      return (
        <ItemCard item={item} key={item.id} />
      )
    });
    return (
      <div>
        <section className="container featuer section">
          <div className='section-title'>Feature</div>
          <div className="item-card-container">
            {displayCards}
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = {updateItems}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
