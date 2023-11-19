const { spawn } = require('node:child_process');

const builder = {};

builder.run =  () => {
    builder._compileCss();
};

builder._compileCss = () => {

    console.log('Building CSS.');

    const compileCss = spawn('npm', ['run', 'build'], {
        cwd: 'src/tachyons',
        env: process.env
    });

    compileCss.stderr.on('error', err => {
        console.log('CSS built failed.', err);
    });

    compileCss.on('close', code => {

        if (code !== 0) {
            console.log('CSS built ended with code: ', code);
            return;
        }

        const copyCss = spawn('cp', ['src/tachyons/css/tachyons.min.css', '.']);

        copyCss.stderr.on('error', err => {
            console.log('CSS built failed.', err);
        });

        copyCss.on('close', code => {
            if (code !== 0) {
                console.log('CSS built ended with code: ', code);
                return;
            }
            console.log('CSS built done.');
        });

    });

};

builder.run();
