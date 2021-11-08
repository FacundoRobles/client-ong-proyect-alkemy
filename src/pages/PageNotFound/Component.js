import React from 'react';
import {PropTypes} from 'prop-types';
import {Row, Col, Container} from 'reactstrap';
import DetailNotFound from '@components/DetailNotFound';
import {
    PAGE404CONTENT,
    NOT_FOUND_TITLE,
    NOT_FOUND_IMG,
    BTN_BACK
} from '@utils/constants';

const Component = ({
    history: {goBack}
}) => {
    const detailNotFoundData = {
        title: NOT_FOUND_TITLE,
        content: PAGE404CONTENT,
        image: NOT_FOUND_IMG
    };
    return (
        <Container>
            <Row >
                <Col xs="12">
                    <DetailNotFound
                        key="PageDetailNotFound"
                        data={detailNotFoundData}
                        goList={goBack}
                        goListBtn={BTN_BACK}
                    />
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired
};

export default Component;
