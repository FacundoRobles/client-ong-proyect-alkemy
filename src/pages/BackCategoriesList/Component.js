/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    Row
} from 'reactstrap';
import TableListNew from '@components/TableListNew';
import {getRoutes} from '@utils';

const backOfficeRoutes = getRoutes('backOffice');
const backCategoryRoute = backOfficeRoutes.category.list;

const Component = ({
    history: {push},
    categories,
    fetchCategoriesRequested,
    title,
    buttonText
}) => {
    useEffect(() => {
        fetchCategoriesRequested();
    }, [fetchCategoriesRequested]);

    return (
        <div className="text-center">
            <h1>{title}</h1>
            <Row className="p-0 m-0">
                <Col sm="12" md="12" className="m-auto">
                    <TableListNew
                        props={categories}
                        push={push}
                        route={backCategoryRoute}
                    />
                </Col>
                <Col>
                    <Button onClick={() => push(backOfficeRoutes.category.form)}>
                        {buttonText}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

Component.propTypes = {
    fetchCategoriesRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    categories: PropTypes.arrayOf().isRequired,
    title: PropTypes.string,
    buttonText: PropTypes.string
};

Component.defaultProps = {
    title: 'Listado de categorias',
    buttonText: 'crear uno nuevo'
};

export default Component;