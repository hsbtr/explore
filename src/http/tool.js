/**
 * 获取cookie 上的csrfToken
 * @name 要获取的参数名
 * */
export const getCookie = name => {
  const str = document.cookie.split("; ");
  for (let i = 0; i < str.length; i++) {
    const temp = str[i].split("=");
    if (temp[0] === name) return unescape(temp[1]);
  }
};
