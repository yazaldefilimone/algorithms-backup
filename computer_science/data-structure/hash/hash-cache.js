function getServerPage(url) {
  const storePage = {
    "http/about": "about page",
    "http/terms": "terms page",
    "http/services": "services page",
    "http/home": "home page",
  };
  console.log("called");
  return storePage[url];
}

const cache = {};
function getClientPage(url) {
  const isExist = cache[url];
  if (isExist) {
    return isExist;
  } else {
    const serverPage = getServerPage(url);
    cache[url] = serverPage;
    return serverPage;
  }
}
