const env = process.env.NODE_ENV;
const urls = {
  "": {
    list: "http://www.brzkgf.com/d/list.php"
  },
  production: {
    list: "http://www.brzkgf.com/d/list.php"
  },
  development: {
    list: "/list"
  }
};
export default urls[env];
