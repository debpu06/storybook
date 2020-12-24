import React from 'react';
import './Listing.css';
import { Teaser } from "../Teaser/Teaser";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Listing = ({ articles, punk, ...rest }) => {
    console.log("ARTICLES", articles)
    return (
        <Row className="justify-content-around">
            {articles.map((article) => {
                return (
                    <Col md={10} key={article.slug}>
                        <Teaser punk={punk} article={article} />
                    </Col>
                )
            })}
        </Row>
    )
}