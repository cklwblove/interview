const relpaceApi = (url, params) => {
  return url.replace(/\{.+?\}/g, (match) => {
    return params[match.replace(/[\{|\}]/g, "")] || "";
  });
};

const url = relpaceApi("/aaa/{bbb}/{ccc}", {
  bbb: 1,
  ccc: 2,
});
console.log(url); // /aaa/1/2
