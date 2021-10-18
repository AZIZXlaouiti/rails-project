export const createUserAccount = async (user,handleCurrentUser)=>{
    const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user),
        withCredentials: true
      }
    const resp = await fetch('/signup',option)
    const data =  await resp.json()
    if (resp.ok){
        handleCurrentUser(data)
        return resp
    }else {
        console.log(data.errors)
        alert(`${data.errors} `)
        return resp
    }
} 
export const login = async (user,handleCurrentUser)=>{
    const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user),
        withCredentials: true
      }
      const resp = await fetch('/login',option)
      const data =  await resp.json()
      if (resp.ok){
        handleCurrentUser(data)
        return resp
      }else {
        console.log(data.errors)
        alert(`${data.errors}`)
        return resp
    }
}
export const getCurrentUser = async (handleCurrentUser)=>{
    const option = {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    const resp = await fetch('/me',option)
    const data =  await resp.json()
    if (resp.ok){
        handleCurrentUser(data)
      }else {
        console.log(data.errors)
        alert(`${data.errors}`)
    }
}
export const logout = async (e,logoutCurrentUser) =>{
    e.preventDefault()
    const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
    }    
    const resp = await fetch('/logout',option)
    const data =  await resp.json()
    if (resp.ok){
        logoutCurrentUser(data)
      }else {
        console.log(data.errors)
        alert(`${data.errors}`)
       
    }
}