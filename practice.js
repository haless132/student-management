/*


Write a function parseUrlString(str) {}
- receive a string with format: key1=value1&key2=value2
- return an object with format: { key1: 'value1', key2: 'value2' }

Eg:
parseUrlString('page=1&size=10')
--> { page: '1', size: '10' }

parseUrlString('')
--> { }
*/

function parseUrlString(str) {
  const params = {};

  // Write your code here ...
  const keyValuePairs = str.split("&");
  // console.log(keyValuePairs);
  keyValuePairs.forEach((pairString) => {
    // const values = pairString.split('=');
    // const key = values[0];
    // const value = values[1];

    // array desctructoring
    const [key, value] = pairString.split("=");
    params[key] = value;

    // key = page
    // params.page = value;
  });

  return params;
}

console.log(parseUrlString("page=1&size=10"));
