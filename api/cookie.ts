const getBrowserCookie = (cName: string) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(globalThis.document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res ?? "";
};

export function getCookie(cookie: string, cName: string) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export function setCookie(cName: string, cValue: string, expDays?: number) {
  let date = new Date();
  date.setTime(date.getTime() + (expDays ?? 0 * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  globalThis.document.cookie = cName + "=" + cValue + "; ";
  if (expDays) {
    globalThis.document.cookie += expires + "; path=/";
  }
}
