import React from 'react';
import {Heart} from 'react-feather';

export default function ItemCard(props) {
  let date = new Date(props.item.created_on);
  let today = new Date();
  let day = today.getDay() - date.getDay();

  console.log(day);
  return (
    <div className='item-card'>
      <div className='item-card-header'>
        <div className="item-card-title">
          {props.item.title}
        </div>
        <div className="item-card-time">
         {day} {day === 1 ? 'day' : 'days'} ago
        </div>
      </div>
      
      <div className="item-card-body">
        <p className="item-card-desc">
          {props.item.description}
        </p>
        <img className='item-card-img' src={props.item.img} alt="Item being sold"/>
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
