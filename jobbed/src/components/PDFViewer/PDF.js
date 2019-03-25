import React, {Component} from 'react';
import classes from './PDF.css';
import SmartButton from '../SmartButton/SmartButton';
import {Document , Page} from 'react-pdf';

class PDF extends Component {

    state = {
        buttonSettings : {
            nLength : "90px",
            sLength : "90px",
            fLength : "140px",
            wait : 5,
            nMessage : "View CV",
            sMessage : "Loaded",
            fMessage : "Loading Failed",
        },
        numPages: null,
        pageNumber: 1,
        show: false,
        noData: false,
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }


    onDocumentLoad = ({numPages}) => {
        this.child.changeStatus('success');
        this.setState({numPages});
    }

    onLoadFail = () => {
        this.child.changeStatus('failed');
    }

    onNoData = () => {
        this.child.changeStatus('failed');
        this.setState({showPDF: false});
    }

    notifyNoData = () => {

    }

    showPDF = (value) => {
        if(value) {
            this.child.showLoading('loading');
            this.child.changeStatus('success');
            setTimeout(() => {
                this.setState({show: value});
            }, 500);
        } else {
            this.setState({show: value});
        }
    }

    onKeyDown = () => {
        
    }

    incrementPage = () => {
        let pageNumber = this.state.pageNumber;
        if(pageNumber < this.state.numPages) {
            pageNumber = pageNumber + 1;
        }
        this.setState({pageNumber});
    }

    decrementPage = () => {
        let pageNumber = this.state.pageNumber;
        if(pageNumber > 1) {
            pageNumber = pageNumber - 1;
        }
        this.setState({pageNumber});
    }

    render() {
        let view = null;
        const pageNumber = this.state.pageNumber;
        const numPages = this.state.numPages;
        let pdf = null;
        // let URL = "http://05930367.ngrok.io/images/myfile";
        let URL = "http://172.20.10.3:8080/files/cv_"+this.props.ID;
        if(this.state.show) {
            if(this.state.noData) {
                
            } else {
                pdf = (
                    <div className = {classes.viewer}>
                        <div className = {classes.exit} onClick = {() => this.showPDF(false)}></div>
                        <div className = {classes.blockPDF}>
                            <br/>
                            <div className = {classes.page}>
                                Page {pageNumber} of {numPages}
                            </div>
                        </div>
                        <div className = {classes.pdf}>
                            <Document file = {URL} onLoadSuccess = {this.onDocumentLoad} onLoadError = {this.onLoadFail} onRenderError = {this.onNoData}>
                                <Page pageNumber = {pageNumber}/>
                            </Document>
                            <div className = {classes.blockPDF}>
                                <div className = {classes.controls}>
                                    <br/><br/>
                                    <button className = {classes.button} onClick = {this.decrementPage}>Pervious</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className = {classes.button} onClick = {this.incrementPage}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div>
                {pdf}
                <SmartButton ref = {instance => {this.child = instance}} settings = {this.state.buttonSettings} onClick = {() => this.showPDF(true)}/>
            </div>
        )
    }
}

export default PDF;