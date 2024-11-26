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
          // password = prompt ("Введите верный пароль")
          // fetchTodosAndRender()
          throw new Error("Нет авторизации")
        }
        return response.json();
      })
}

export function deleteTodo(token) {
    return fetch(host + id, {
        method: "DELETE",
        headers: {
          Authorization: token
        }
      })
        .then((response) => {
          return response.json();
        })
}

export function addTodo(text, token) {
    return fetch(host, {
        method: "POST",
        headers: {
          Authorization: token
        },
        body: JSON.stringify({
          text
        }),
      })
        .then((response) => {
          return response.json();
        })
}