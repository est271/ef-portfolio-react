import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const text = {
            titleOk: 'Success!!!',
            titleErr: 'Uh-Oh!!! The message could not be sent',
            bodyOk: 'Your message was sent successfully',
            bodyErr1: 'Make sure no special characters are used such as <, >, {, }',
            bodyErr2: 'Also make sure that Javascript is enabled in your browser'
        };

        let headerClass = ['modal-header', this.props.fetchE ? classes.HeaderErr : classes.HeaderOk];
        let modalClass = [classes.Modal, this.props.show ? classes.ModalShow : classes.ModalHide];

        let modalStruct = (
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content">
                    <div className={headerClass.join(' ')}>
                        <h5 className="modal-title">
                            {this.props.fetchE ? text.titleErr : text.titleOk}
                        </h5>
                    </div>
                    <div className="modal-body">
                        <p>{!this.props.fetchE ? text.bodyOk : text.bodyErr1}</p>
                        <p>{!this.props.fetchE ? null : text.bodyErr2}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.props.modalClosed}>Close</button>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={modalClass.join(' ')} >
                    {modalStruct}
                </div>
            </div>
        );
    }
}

export default Modal;