import React, { Component, Fragment } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import {
	addDataToApi, getDataFromApi, updateDataAPI, deleteDataAPI,
} from '../../../config/redux/action';

class Dashboard extends Component {
	constructor(props){
		super(props);
		state = {
			title: '',
			content: '',
			date: '',
			noteId: '',
			textButton: 'Simpan',
		};
	}

	componentDidMount() {
		const userData = JSON.parse(localStorage.getItem('userData'));
		console.log(userData.uid);
		this.props.getNote(userData.uid);
	}

    onInputChange = (e) => {
    	this.setState({
    		[e.target.id]: e.target.value,
    	});
    }

    handleSaveNotes =() => {
    	const {
    		title, content, textButton, noteId,
    	} = this.state;
    	const { saveNote, updateNote } = this.props;
    	const userData = JSON.parse(localStorage.getItem('userData'));
    	const data = {
    		title,
    		content,
    		date: new Date().getTime(),
    		userId: userData.uid,
    	};
    	if (textButton === 'Update') {
    		data.noteId = noteId;
    		updateNote(data);
    		console.log(data);
    		this.cancelUpdate();
    	} else {
    		saveNote(data);
    		console.log(data);
    		this.cancelUpdate();
    	}
    }

    updateNotes =(e) => {
    	this.setState({
    		title: e.data.title,
    		content: e.data.content,
    		textButton: 'Update',
    		noteId: e.id,
    	});
    }

    cancelUpdate=() => {
    	this.setState({
    		title: '',
    		content: '',
    		date: '',
    		noteId: '',
    		textButton: 'Simpan',
    	});
    }

    deleteNote=(e, note) => {
    	e.stopPropagation();
    	const { deleteNote } = this.props;
    	const userData = JSON.parse(localStorage.getItem('userData'));
    	const data = {
    		userId: userData.uid,
    		noteId: note.id,
    	};
    	deleteNote(data);
    	alert('hai');
    }

    render() {
    	const { title, content, textButton } = this.state;
    	const { notes } = this.props;
    	console.log('notes', notes);
    	return (
    		<div className="container">
    			<div className="input-form">
    				<input className="input-title" id="title" onChange={this.onInputChange} type="text" placeholder="title" value={title} />
    				<textarea className="input-content" id="content" onChange={this.onInputChange} cols="30" rows="10" placeholder="content" value={content} />
    				<div className="action-wrapper">
    					{
    						textButton === 'Update' ? (
    							<button className="save-btn cancel" onClick={this.cancelUpdate}>Cancel</button>
    						) : <div />
    					}

    					<button className="save-btn" onClick={this.handleSaveNotes}>{textButton}</button>

    				</div>
    			</div>
    			<hr />
    			{
    				notes.length > 0 ? (
    					<Fragment>
    						{
    							notes.map((note) => {
    								return (
    									<div className="card-content" key={note.id} onClick={() => { return this.updateNotes(note); }}>
    										<p className="title">{note.data.title}</p>
    										<p className="date">{note.data.date}</p>
    										<p className="content">{note.data.content}</p>
    										<div className="delete-btn" onClick={(e) => { return this.deleteNote(e, note); }}>x</div>
    									</div>
    								);
    							})
    						}
    					</Fragment>

    				) : null
    			}

    		</div>
    	);
    }
}
const reduxState = (state) => {
	return {
		userData: state.user,
		notes: state.notes,
	};
};
const reduxDispatch = (dispatch) => {
	return {
		saveNote: (data) => { return dispatch(addDataToApi(data)); },
		getNote: (data) => { return dispatch(getDataFromApi(data)); },
		updateNote: (data) => { return dispatch(updateDataAPI(data)); },
		deleteNote: (data) => { return dispatch(deleteDataAPI(data)); },

	};
};
export default connect(reduxState, reduxDispatch)(Dashboard);
