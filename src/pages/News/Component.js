import React, {useEffect} from 'react';
import {
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardText,
    CardImg,
    CardColumns,
    Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';
import {getRoutes} from '@utils';

const Component = ({
    news, fetchNewsRequested,
    history: {push},
    labelButton
}) => {
    useEffect(() => {
        fetchNewsRequested({});
    }, [fetchNewsRequested]);
    const mainRoutes = getRoutes('mainRoutes');
    return (
        <Container>
            <Row>
                <Col>
                    <CardColumns>
                        {map(news, item => (
                            <Card body className="backoffice-card text-center mt-3 mb-1 ml-auto mr-auto w-100">
                                <CardImg top width="100%" src={get(item, 'image')} alt="Card image news"/>
                                <CardTitle tag="h4" className="mt-3">{get(item, 'title')}</CardTitle>
                                <CardText className="mt-2 mb-1"><p style={{lineHeight: '1.3rem'}}>{get(item, 'text')}</p></CardText>
                                <Button className="button m-auto pl-2 pr-2" onClick={() => push(`${mainRoutes.news}/${get(item, 'id')}`)}>
                                    {labelButton}
                                </Button>
                            </Card>
                        ))}
                    </CardColumns>
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    fetchNewsRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    news: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    })),
    labelButton: PropTypes.string
};
Component.defaultProps = {
    news: null,
    labelButton: 'Ver novedad'
};

export default Component;
