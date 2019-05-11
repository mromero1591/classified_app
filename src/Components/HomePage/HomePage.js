import React from 'react'
import {connect} from 'react-redux';

//custom imports
import ItemCard from '../ItemComponents/ItemCard/ItemCard';


function HomePage(props) {
  const displayCards = props.items.map( item => {
    return (
      <ItemCard key={item.id} item={item} />
    )
  })

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

function mapStateToProps(state) {
  return {
    items: state.items.items
  }
}

export default connect(mapStateToProps)(HomePage);
