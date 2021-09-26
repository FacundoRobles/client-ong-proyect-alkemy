const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

module.exports = router => {
    router.get('/', (_, res) => {
        const fileContents = fs.readFileSync(path.resolve(__dirname, '../..', 'i18n.yaml'), 'utf8');
        const data = yaml.load(fileContents);
        res.send(data);
    });

    return router;
};
