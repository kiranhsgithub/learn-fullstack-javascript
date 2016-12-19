import https from 'https';

https.get('https://www.lynda.com', res => {
    console.log('Response status code', res.statusCode);
    
    res.on('data', chunk => {
       console.log(chunk.toString()); 
    });
});