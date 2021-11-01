import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardImg
} from 'reactstrap';
import get from 'lodash/get';

const DetailNotFound = ({
    data,
    goList,
    goListBtn
}) => (
    <Row>
        <Col
            md={{size: 8, offset: 2}}
            lg={{size: 6, offset: 3}}
            className="mt-0 mt-md-2 mb-5 p-0"
        >
            <Card className="form-card">
                <CardImg top width="100%" src={get(data, 'image')} alt={get(data, 'title')}/>
                <CardBody>
                    <CardTitle tag="h2" className="mb-4 text-center error">{get(data, 'title')}</CardTitle>
                    <CardText tag="h4" className="text-center">{get(data, 'content')}</CardText>
                    <div className="d-flex justify-content-center mt-4">
                        <Button
                            type="submit"
                            color="primary"
                            className="btn-submit"
                            onClick={goList}
                        >
                            {goListBtn}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default DetailNotFound;

DetailNotFound.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired,
    goList: PropTypes.func.isRequired,
    goListBtn: PropTypes.string.isRequired
};
