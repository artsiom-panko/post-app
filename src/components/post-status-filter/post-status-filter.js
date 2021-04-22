import React from 'react';
import {Button} from 'reactstrap';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color="danger">Все</Button>
            <button type="button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;