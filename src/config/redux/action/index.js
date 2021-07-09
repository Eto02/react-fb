import firebase, { database } from '../../firebase/index';

export const actionUserName = () => {
	return (dispatch) => {
		setTimeout(() => { return dispatch({ type: 'CHANGE_USER', value: 'TeTe' }); }, 2000);
	};
};
export const registerUserAPI = (data) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			dispatch({ type: 'CHANGE_LOADING', value: true });
			return firebase.auth()
				.createUserWithEmailAndPassword(data.email, data.password)
				.then((res) => {
					// console.log(res);
					dispatch({ type: 'CHANGE_LOADING', value: false });
					resolve(res);
				})
				.catch((error) => {
					const errorData = {
						code: error.code,
						message: error.message,
					};
					dispatch({ type: 'CHANGE_LOADING', value: false });
					reject(errorData);
				});
		});
	};
};

export const loginUserAPI = (data) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			dispatch({ type: 'CHANGE_LOADING', value: true });
			return firebase
				.auth()
				.signInWithEmailAndPassword(data.email, data.password)
				.then((res) => {
					// console.log(res);
					const dataUser = {
						email: res.user.email,
						uid: res.user.uid,
						emailVerified: res.user.emailVerified,
						refreshToken: res.user.refreshToken,
					};
					dispatch({ type: 'CHANGE_LOADING', value: false });
					dispatch({ type: 'CHANGE_ISLOADING', value: true });
					dispatch({ type: 'CHANGE_USER', value: res.dataUser });
					resolve(dataUser);
				})
				.catch((error) => {
					const errorData = {
						code: error.code,
						message: error.message,
					};
					// console.log(errorCode, errorMessage);
					dispatch({ type: 'CHANGE_LOADING', value: false });
					dispatch({ type: 'CHANGE_ISLOADING', value: false });
					reject(errorData);
				});
		});
	};
};
export const addDataToApi = (data) => {
	database.ref(`notes/${data.userId}`).push({
		title: data.title,
		content: data.content,
		date: data.date,
	});
};

export const getDataFromApi = (data) => {
	return (dispatch) => {
		return new Promise((resolve) => {
			const urlNotes = database.ref(`notes/${data}`);
			urlNotes.on('value', (snapshot) => {
				// console.log('getData', snapshot.val());
				const datas = [];
				Object.keys(snapshot.val()).map((key) => {
					return data.push({
						id: key,
						data: snapshot.val()[key],
					});
				});
				dispatch({ type: 'SET_NOTES', value: datas });
				resolve(snapshot.val());
			});
		});
	};
};
export const updateDataAPI = (data) => {
	return new Promise((resolve, reject) => {
		const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
		urlNotes.set(
			{
				title: data.title,
				content: data.content,
				date: data.date,
			},
			(err) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			},
		);
	});
};
export const deleteDataAPI = (data) => {
	const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
	urlNotes.remove();
};
