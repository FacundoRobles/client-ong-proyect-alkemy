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
    <Row className="p-0 m-0">
        {props && (
            map(props, (current, index) => (
                <Col
                    xs="12"
                    key={index}
                    className={`
                    d-flex
                    flex-column
                    flex-sm-row
                    align-items-center
                    justify-content-sm-start
                    m-2
                    p-2
                    border border-ligth
                    rounded
                    `}
                >
                    <img src={current.image} alt="imagen" className="rounded-circle m-2" width={50} height={50}/>
                    <p className="align-self-center m-0 p-0 w-50">{current.name}</p>
                    <div className="content-testimonial align-self-center m-0 p-0 w-50">
                        {current.content && (
                            <p // eslint-disable-next-line
                                dangerouslySetInnerHTML={
                                    {__html: current.content.substr(0, 45)}
                                }
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                data-bs-placement="top"
                                title={replace(current.content, /<[^>]*>/g, '')}
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
