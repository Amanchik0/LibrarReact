import React from 'react';
import { Container } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BookBar from '../components/BookBar';
import BookList from '../components/BookList';

const Library = () => {
    
    return (
        <Container> 
            <div class="container">
                <div class="main">
                    <TypeBar/>
                    <BookBar/>
                    <BookList />
                </div>  
            </div>    
        </Container>
    );
};

export default Library;