import React, {Component} from 'react'
import Axios from 'axios';
import {Mail, Smartphone} from 'react-feather';

export default class ItemPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: -1,
            title: '',
            description: '',
            price: 0,
            view_count: 0,
            created_on: '',
            img: '',
            contactInfo: {
                name_first: '',
                name_last: '',
                phone_number: 0,
                email_address: '',
                city: '',
                state: ''
            }
        }
    }
    componentDidMount() {
        var id = parseInt(this.props.match.params.id);
        Axios.get(`/api/item/${id}`)
        .then(res => {
            console.log(res.data);
            var {id, title, description, price, view_count, created_on, img, name_first, name_last, email_address, phone_number, city, state} = res.data[0];
            let date = new Date(created_on);
            let today = new Date();
            let day = today.getDay() - date.getDay();
            this.setState({
                id, 
                title, 
                description, 
                price, 
                view_count, 
                created_on: day, 
                img,
                contactInfo: {
                    name_first, 
                    name_last, 
                    email_address, 
                    phone_number, 
                    city, 
                    state
                }
            });
        });
    }

    render(){
        return (
            <div>
                <img className='item-page-img' src={this.state.img} alt=""/>

                <div className='item-page-info'>
                    <div className='item-page-header'>
                        <div className="item-page-title section-title"> 
                            {this.state.title}
                        </div>
                        <div className="item-page-time item-card-time">
                            {this.state.created_on} {this.state.created_on === 1 ? 'day' : 'days'} ago
                        </div>
                    </div>
                    <div className="item-page-description">
                        {this.state.description}
                    </div>
                    <div className="item-page-contact-info">
                        <div className='contact-card-title'>
                            Conact Info
                        </div>
                        <div className="line"></div>

                        <div className="item-page-container">
                            <div className="item-page-subtitle">
                                Location
                            </div>
                            <div className="location-info">
                                {this.state.contactInfo.city} - {this.state.contactInfo.state}
                            </div>
                        </div>
                        <div className="item-page-container item-page-spacer">
                            <div className="item-page-subtitle">
                                Contact Buyer
                            </div>
                            <div className="location-info">
                                {this.state.contactInfo.name_first}
                            </div>
                            <a href={`mailto:${this.state.contactInfo.email_address}`}><Mail color='#D95F4F'  /></a>
                            <a href={`tel:${this.state.contactInfo.phone_number}`}><Smartphone  color='#D95F4F'/></a>
                        </div>
                    </div>

                </div>
            </div>)
    }
}
