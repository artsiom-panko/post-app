import React from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends React.Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
            ]
        }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const activeButton = this.props.filter === name;
            const activeClass = activeButton ? 'btn-info' : ' btn-outline-secondary';

            return (
                <button
                    key={name} 
                    type="button" 
                    className={`btn ${activeClass}`}
                    onClick={() => {
                        this.props.onFilterSelectSecond(name)
                        }}>
                        {label}
                    </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}