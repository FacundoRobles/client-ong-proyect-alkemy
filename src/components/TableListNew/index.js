import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import replace from 'lodash/replace';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {swalConfirmAction} from '@utils';

const TableListNew = ({
    props, push, erase, route
}) => (
    <Row className="table-list p-2 mb-4">
        {props && (
            map(props, (current, index) => (
                <Col
                    xs="12"
                    key={index}
                    className={`
                    d-flex
                    p-1
                    border border-ligth
                    rounded
                    `}
                >
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-around w-100">
                        {current.image && (
                            <div className="align-self-center">
                                <img src={current.image} alt="imagen" className="rounded-circle m-2" width={50} height={50}/> 
                            </div>
                        )}
                        <div className="align-self-center">
                            <p className="align-self-center m-0 m-2">{current.name}</p> 
                        </div>
                        <div className="align-self-center">
                            {current.content && (
                                <p // eslint-disable-next-line
                                    dangerouslySetInnerHTML={
                                        {__html: current.content.substr(0, 45)}
                                    }
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    data-bs-placement="top"
                                    title={replace(current.content, /<[^>]*>/g, '')}
                                    className="align-self-center m-0 m-2"
                                />
                            )}
                            {current.description && (
                                <p // eslint-disable-next-line
                                    dangerouslySetInnerHTML={
                                        {__html: current.description.substr(0, 45)}
                                    }
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    data-bs-placement="top"
                                    title={replace(current.description, /<[^>]*>/g, '')}
                                    className="align-self-center m-0 m-2"
                                />
                            )}
                        </div>
                        <div className="align-self-center flex-nowrap">
                            <EditIcon
                                onClick={() => push(`${route}/${current.id}`)}
                                className="icon-testimonial align-self-center pointer m-2"
                                role="button"
                            />
                            <DeleteForeverIcon
                                onClick={() => {
                                    swalConfirmAction(
                                        'warning',
                                        'Seguro que desea eliminar?',
                                        'esta accion es irreversible',
                                        'Si, eliminar',
                                        'No, gracias',
                                        () => erase(current.id)
                                    );
                                }}
                                className="icon-testimonial align-self-center pointer m-2"
                                role="button"
                            />
                        </div>
                    </div>
                </Col>
            ))
        )}
    </Row>
);

TableListNew.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.string
    })),
    erase: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    route: PropTypes.string.isRequired
};

TableListNew.defaultProps = {
    props: null
};
export default TableListNew;
