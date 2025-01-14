const url = "http://localhost:3000"

async function main() {
  const data = await fetch(url+"/mahasiswa", {
  })
  const json = await data.json()
  console.log(json)
}

async function login(username, password) {
    const data = await fetch(url+"/Login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    const json = await data.json()
    if(data.status >= 400) return alert(json.message)
    console.log(json)
    alert("Berhasil Login")
    return json
}

async function register(username, password) {
    const data = await fetch(url+"/register", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    const json = await data.json()
    if(data.status >= 400) return alert(json.message)
    alert("Berhasil Register")
    console.log(json)
    return json
}