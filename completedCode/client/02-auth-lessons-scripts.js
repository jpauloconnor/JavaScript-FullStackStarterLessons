

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
		  'Authorization': accessToken,
		}
	})
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data)
	})   
}