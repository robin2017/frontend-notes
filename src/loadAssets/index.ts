// 加载js文件
export const loadJsFile = (url) => {
  if (!url) return;
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

// 加载css文件
export const loadCssFile = (url) => {
  if (!url) return;
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  document.getElementsByTagName("head")[0].appendChild(link);
};

// 加载css片段
// 适用场景：css文件没有cdn地址
export const loadCssCode = (code) => {
  if (!code) return;
  const style = document.createElement("style");
  style.type = "text/css";
  style.rel = "stylesheet";
  style.appendChild(document.createTextNode(code));
  document.getElementsByTagName("head")[0].appendChild(style);
};
export default {
  loadJsFile,
  loadCssCode,
  loadCssFile,
};
