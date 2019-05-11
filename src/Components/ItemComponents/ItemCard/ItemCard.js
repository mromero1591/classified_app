import React from 'react';
import {Heart} from 'react-feather';
import {Link} from 'react-router-dom';

export default function ItemCard(props) {
  let date = new Date(props.item.created_on);
  let today = new Date();
  let day = today.getDay() - date.getDay();

  return (
    <div className='item-card'>
      <div className='item-card-header'>
        <Link className="item-card-title" to={`/item/${props.item.id}`}>
          <div>
            {props.item.title}
          </div>
        </Link>
        <div className="item-card-time">
         {day} {day === 1 ? 'day' : 'days'} ago
        </div>
      </div>
      
      <div className="item-card-body">
        <p className="item-card-desc">
          {props.item.description}
        </p>
        <Link to={`/item/${props.item.id}`}>
          <img className='item-card-img' src={props.item.img} alt="Item being sold"/>
        </Link>
      </div>

      <div className="item-card-footer">
        <div className="item-card-count">
          <Heart fill="#D95F4F" className='item-card-count-logo'/>
          <span>{props.item.view_count}</span>
        </div>
      </div>
    </div>
  )
}
