/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

 /*
const xhrSendAnswer = new XMLHttpRequest();
xhrSendAnswer.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhrSendAnswer.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhrSendAnswer.addEventListener('readystatechange', () => {
    if (xhrSendAnswer.readyState === XMLHttpRequest.DONE && xhrSendAnswer.status === 200) {
        showResult(xhrSendAnswer.responseText)
    }
});

xhrSendAnswer.send(`vote=${questionID}&answer=${answerId}`);

*/


// options = {}

const createRequest = (options) => {
    try {
        const xhr = new XMLHttpRequest();
        const url = options.url;
        const formData = new FormData; 
    
        if (options.method === 'GET') {
            for (attribute in options.data) {
                url += `&${attribute}=${options.data[attribute]}`
            }
            url = url.replace('&', '?');
        } else {
            formData.append(attribute, data[attribute]);
        }
    
        if (options.headers) {
            for (header in options.headers) {
                xhr.setRequestHeader(header, options.headers[header]);
            }
        }
    
        xhr.open(options.method, url);
        xhr.withCredentials = true;
        
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                options.callback(null, xhr.responseText);
            }
    
        });
    
        return xhr;
    } catch (e) {
        options.callback(e, null);
    }
};
