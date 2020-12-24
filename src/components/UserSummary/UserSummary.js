import React from 'react';
import './UserSummary.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Icon } from '../Icon/Icon'
import { SocialBar } from '../SocialBar/SocialBar';
import { Header } from '../Header/Header';
import { Profile } from '../Profile/Profile';
import { Logo } from '../Logo/Logo';

export const UserSummary = ({punk, name, description, imageUrl, ...rest }) => {

    const style = punk ? 'punk' : '';
    const headerType = punk ? 'false' : 'true'
    return (
        <div>
            <Row>
                <Col>
                    <Profile url={imageUrl} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Header punk={punk} primary={punk}>{name}</Header>
                    <SocialBar punk={punk} />
                    <p>{description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Logo punk={punk} />
                </Col>
            </Row>
        </div >
    )
}