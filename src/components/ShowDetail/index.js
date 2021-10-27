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
import {GO_NEWS_LIST} from '@utils/constants';

const ShowDetail = ({
    form,
    goList
}) => (
    <Row className="my-0">
        <Col
            md={{size: 8, offset: 2}}
            lg={{size: 6, offset: 3}}
            className="p-0"
        >
            <Card className="form-card">
                <CardImg top width="100%" src={get(form, 'image')} alt={get(form, 'name')}/>
                <CardBody>
                    <CardTitle tag="h5" className="mb-4 text-center">{get(form, 'name')}</CardTitle>
                    <CardText dangerouslySetInnerHTML={{__html: get(form, 'content')}}/>
                    <div className="d-flex justify-content-center mt-4">
                        <Button
                            type="submit"
                            color="primary"
                            className="btn-submit"
                            onClick={goList}
                        >
                            {GO_NEWS_LIST}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default ShowDetail;

ShowDetail.propTypes = {
    form: PropTypes.shape({}).isRequired,
    goList: PropTypes.func.isRequired
};
