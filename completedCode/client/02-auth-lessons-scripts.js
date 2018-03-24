

/***************************************
 * FETCH/GET from Auth Route
*************************************/

function fetchFromAuthRouteOne () {
	const fetch_url = `http://localhost:3000/authtest/one`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
		  'Authorization': accessToken
		}
	})
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data)
	})   
}


/***************************************
 * FETCH/POST to Auth/Create
*************************************/

function postToAuthRouteCreate() {
	const fetch_url = `http://localhost:3000/authtest/create`
	const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;

	let authInputData = {authtestdata : { item: authTestDataInput}};
	const response = fetch(fetch_url, {
		method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
		  'Authorization': accessToken
		},
		body: JSON.stringify(authInputData)
	})
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data)
	})   
}


/***************************************
 * FETCH/GET ITEM BY USER
*************************************/

function getOneByUser() {
	const fetch_url = `http://localhost:3000/authtest/10`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
		  'Authorization': accessToken
		}
	})
	.then(response => {
		return response.json();
	})
	.then(data => {
		var inputs = Array.prototype.slice.call(document.querySelectorAll('form input'));

		Object.keys(data).map(function (dataItem){
			console.log(data);
			inputs.map(function (inputItem) {
				return (inputItem.name === dataItem) ? (inputItem.value = data[dataItem]) : false;
			  });
		})
	})   
}