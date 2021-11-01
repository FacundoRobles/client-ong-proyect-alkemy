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

const ShowDetail = ({
    form,
    goList,
    goListBtn
}) => (
    <Row className="mt-0 mb-5">
        <Col
            md={{size: 8, offset: 2}}
            lg={{size: 6, offset: 3}}
            className="p-0"
        >
            <Card className="detail-card">
                <CardImg top width="100%" src={get(form, 'image')} alt={get(form, 'name')}/>
                <CardBody>
                    <CardTitle tag="h2" className="mb-4 text-center">{get(form, 'name')}</CardTitle>
                    <CardText className="description-text" dangerouslySetInnerHTML={{__html: get(form, 'content')}}/>
                    <div className="d-flex justify-content-center mt-4">
                        <Button
                            type="submit"
                            color="primary"
                            className="btn-list text-center"
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

export default ShowDetail;

ShowDetail.propTypes = {
    form: PropTypes.shape({}).isRequired,
    goList: PropTypes.func.isRequired,
    goListBtn: PropTypes.string.isRequired
};
