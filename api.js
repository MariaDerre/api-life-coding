const host = 'https://wedev-api.sky.pro/api/v2/todos'

export function getTodos({token}) {
    return fetch(host, {
        method: "GET",
        headers: {
          Authorization: token
        }
      })
      .then((response) =>{
        if (response.status === 401) {
          throw new Error("Нет авторизации")
        }
        return response.json();
      })
}

export function deleteTodo({token, id}) {
    return fetch("https://wedev-api.sky.pro/api/v2/todos/:id" + id, {
        method: "DELETE",
        headers: {
          Authorization: token
        }
      })
        .then((response) => {
          return response.json();
        })
}

export function addTodo({text, token}) {
    return fetch(host, {
        method: "POST",
        headers: {
          Authorization: token
        },
        body: JSON.stringify({
          text,
        }),
      })
        .then((response) => {
          return response.json();
        })
}

export function login({login, password}) {
    return fetch('https://webdev-hw-api.vercel.app/api/user/login', {
        method: "POST",
        body: JSON.stringify({
          login,
          password
        }),
      })
        .then((response) => {
          return response.json();
        })
}