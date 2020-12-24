import React from 'react';
import './Teaser.css';
import { Header } from '../Header/Header'

export const Teaser = ({ article, punk, ...rest }) => {

    const style = punk ? 'preview punk' : 'preview';

    return (
        <div className={style} {...rest}>
            <a href={article.slug}>
                <img alt={article.metaImage.description} title={article.metaImage.title} src={article.metaImage.url} />
                <Header punk={punk}>
                    {article.title}
                </Header>
                <small>{article.publishDate}</small>
                <p>
                    {article.description}
                </p>
            </a>
            {article.tags &&
                article.tags.map(tag => (
                    <p className="tag" key={tag}>
                        {tag}
                    </p>
                ))}
        </div>
    )
}