/* eslint-disable no-console */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    Container,
    Row
} from 'reactstrap';
import TableListNew from '@components/TableListNew';
import {getRoutes} from '@utils';

const backOfficeRoutes = getRoutes('backOffice');
const backCategoryRoute = backOfficeRoutes.category.list;

const Component = ({
    history: {push},
    categories,
    deleteCategoryRequested,
    fetchCategoriesRequested,
    title,
    buttonText
}) => {
    useEffect(() => {
        fetchCategoriesRequested();
    }, [fetchCategoriesRequested]);

    return (
        <Container>
            <Row className="p-0 m-0 text-center">
                <Col sm="12" md="12" className="m-auto">
                    <h1>{title}</h1>
                    <TableListNew
                        props={categories}
                        erase={deleteCategoryRequested}
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
        </Container>
    );
};

Component.propTypes = {
    fetchCategoriesRequested: PropTypes.func.isRequired,
    deleteCategoryRequested: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    title: PropTypes.string,
    buttonText: PropTypes.string
};

Component.defaultProps = {
    title: 'Listado de categorias',
    buttonText: 'crear uno nuevo'
};

export default Component;
