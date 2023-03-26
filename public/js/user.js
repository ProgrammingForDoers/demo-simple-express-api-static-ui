
var output = document.querySelector("#output")

async function getUser() {
  var response = await fetch("/api/user/1", { method: "GET" })
  var user = await response.json()

	console.log(user)
	console.log(user["firstName"])
	console.log(user["lastName"])

	output.innerHTML = JSON.stringify(user)
}
