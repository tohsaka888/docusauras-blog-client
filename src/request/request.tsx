const url: string = "http://tohsaka888.xyz:8085";

const getArticles = async () => {
  try {
    const res: Response = await fetch(`${url}/getArticles`);
    const data: any = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (username: string, password: string) => {
  try {
    const res: Response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    });
    const data: any = await res.json();
    sessionStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLoginStatus = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token)
  try {
    const res: Response = await fetch(`${url}/login/status`, {
      body: JSON.stringify({ token: token }),
      method: "POST"
    });
    const data: any = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

export { getArticles, login, getLoginStatus };
