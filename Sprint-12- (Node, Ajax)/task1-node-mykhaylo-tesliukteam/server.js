import http from 'http'
import yargs from 'yargs'
import dateFormat from 'dateformat';

const args = yargs(process.argv.slice(2)).argv;
const interval = args.i;
const delay = args.t;

console.log('Staring');
http.createServer((request, response) => {

    const inputtedInterval = setInterval(() => {
        console.log(dateFormat(new Date(), 'UTC: dd.mm.yyyy, HH:MM:ss'))
    }, interval)

    setTimeout(() => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(dateFormat(new Date(), 'UTC: dd.mm.yyyy, HH:MM:ss'))
        response.end()
        clearInterval(inputtedInterval)
    }, delay)

}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');


