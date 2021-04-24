import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
 
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Goint to learn React.js', important: true, like: false, id: '1'},
                {label: 'Hello world!', important: false, like: false, id: '2'},
                {label: 'azazazazazazazazazazazazazazazazazazazazazazazazazazaz', important: false, like: false, id: '3'}
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearchSecond = this.onUpdateSearchSecond.bind(this);
        this.onFilterSelectSecond = this.onFilterSelectSecond.bind(this);

        this.maxID = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            import: false,
            id: this.maxID++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldPost = data[index];
            const newPost = {...oldPost, important: !oldPost.important};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newPost, ...after];

            return{
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldPost = data[index];
            const newPost = {...oldPost, like: !oldPost.like};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newPost, ...after];

            return {
                data: newArr
            }
        })
    }

    filterPost(posts, filter) {
        if (filter === 'like') {
            return posts.filter(post => post.like === true);
        } else {
            return posts;
        }
    }

    searchPost(posts, term) {
        if (term.length === 0) {
            return posts;
        }

        return posts.filter(post => {
            return post.label.indexOf(term) > -1
        });
    }

    onUpdateSearchSecond(term) {
        this.setState({term});
    }

    onFilterSelectSecond(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;

        const likedCount = data.filter(item => item.liked === true).length;
        const postsCount = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                likedCount={likedCount}
                postsCount={postsCount}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearchSecond={this.onUpdateSearchSecond}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelectSecond} />
                </div>
                <PostList 
                    posts={visiblePosts} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem} />
            </AppBlock>
        )
    }
}
