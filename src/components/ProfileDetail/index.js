import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';
import get from 'lodash/get';
import {
    NAME_LABEL,
    LAST_NAME_LABEL,
    EMAIL_LABEL,
    DELETE,
    EDIT
} from '@utils/constants';

const ProfileDetail = ({
    form,
    onEdit,
    onDelete
}) => (
    <Row className="mt-0 mb-5">
        <Col
            md={{size: 8, offset: 2}}
            lg={{size: 6, offset: 3}}
            className="p-0"
        >
            <Card className="detail-card">
                <CardBody>
                    <CardTitle tag="h2" className="mb-4">{NAME_LABEL}</CardTitle>
                    <CardText tag="h4" className="mb-4">{get(form, 'firstName')}</CardText>
                    <CardTitle tag="h2" className="mb-4">{LAST_NAME_LABEL}</CardTitle>
                    <CardText tag="h4" className="mb-4">{get(form, 'lastName')}</CardText>
                    <CardTitle tag="h2" className="mb-4">{EMAIL_LABEL}</CardTitle>
                    <CardText tag="h4" className="mb-4">{get(form, 'email')}</CardText>
                    <div className="d-flex justify-content-between mt-4">
                        <Button
                            type="submit"
                            color="primary"
                            className="btn-cancel"
                            onClick={onDelete}
                        >
                            {DELETE}
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            className="btn-submit"
                            onClick={onEdit}
                        >
                            {EDIT}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    </Row>
);

export default ProfileDetail;

ProfileDetail.propTypes = {
    form: PropTypes.shape({}).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};
