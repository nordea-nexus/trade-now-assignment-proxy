// https://angular.io/guide/build#proxying-to-a-backend-server
// follow the guide and specify this file in angular.json e.g. "proxyConfig": "./proxy.conf.js" under serve.options object.
module.exports = {
    '/api': {
        target: 'http://localhost:3000',
        bypass: (req, res) => {
            if (req.method === 'GET' && req.path === '/api/trading/currencies') {
                res.send({
                    currencies: ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD', 'SEK', 'KRW', 'SGD', 'NOK', 'MXN', 'INR', 'RUB', 'ZAR', 'TRY', 'BRL', 'TWD', 'DKK', 'PLN', 'THB', 'IDR', 'HUF', 'CZK', 'ILS', 'CLP', 'PHP', 'AED', 'COP', 'SAR', 'MYR', 'RON']
                });
            } else if (req.method === 'POST' && req.path === '/api/trading/submit') {
                res.send({
                    accepted: true,
                    id: Math.floor(Math.random() * 1000000000),
                    ...(req.body || {}),
                });
            } else {
                res.sendStatus(400);
            }
            return true; // tells dev server that request is handled
        }
    }
};
