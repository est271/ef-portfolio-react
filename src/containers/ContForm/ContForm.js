import React, {Component} from 'react';

import Modal from '../../components/Modal/Modal';
import classes from './ContForm.module.css';

class AboutForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            fetchErr: false,
            formData: {
                name: '',
                email: '',
                text: ''
            }
        }
    }

    onSubmitHandler = (ev) => {
        ev.preventDefault();

        const data = {
            date: Date(),
            ...this.state.formData
        };

        fetch('ENTER YOUR DATABASE API KEY HERE', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            if (response.ok) {
                this.setState({showModal: true});
            } else {
                this.setState({fetchErr: true, showModal: true});
            }
        }).catch( error => {
            console.log(error) 
            this.setState({showModal: true, fetchErr: true});
        });
    }

    updateFormHandler = (event) => {
        if (event.target.id === 'nameInput'){
            this.setState({formData: {...this.state.formData, name: event.target.value}});
        } else if (event.target.id === 'emailInput'){
            this.setState({formData: {...this.state.formData, email: event.target.value}});
        } else if (event.target.id === 'textArea'){
            // regex to remove newline
            let reg = /\n/g;
            this.setState({formData: {...this.state.formData, text: event.target.value.replace(reg, ' ')}});
        }
        return;
    }

    closeModal = () => {
        this.setState({ formData: {name: '', email: '', text: ''} });
        this.setState({ showModal: false, fetchErr: false });
        document.querySelector('form').reset();
    }

    render() {
        return (
            <div className="container col-md-8 col-lg-6 col-xl-6" >
                <div className={classes.Topmrgn}></div>
                <h4>My name is Esteban, I enjoy building things and solving problems.</h4>
                <h4>Questions, comments or maybe you would like to collaborate on a project?</h4>
                <h4>Get in contact by email: <a href="mailto:est271ca@gmail.com">est271ca@gmail.com</a> or by using the form below:</h4>
                <form className={classes.Myform} onSubmit={ (ev) => this.onSubmitHandler(ev) } autoComplete="off">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nameInput" 
                            placeholder="John Doh" 
                            value={this.state.formName}
                            onChange={ (event) => this.updateFormHandler(event)}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailInput" 
                            placeholder="name@example.com" 
                            value={this.state.formEmail}
                            onChange={ (event) => this.updateFormHandler(event)}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Message (250 characters max)</label>
                        <textarea 
                            className="form-control" 
                            id="textArea" 
                            rows="3" 
                            maxLength="250"
                            value={this.state.text}
                            onChange={ (event) => this.updateFormHandler(event)}
                            required>
                            </textarea>
                    </div>
                    <button type="submit" className="btn btn-info" >Submit</button>
                </form>
                <Modal 
                    show={this.state.showModal} 
                    modalClosed={this.closeModal} 
                    fetchE={this.state.fetchErr} />
            </div>
        );
    }
}

export default AboutForm;
