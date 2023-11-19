const { spawn } = require('node:child_process');

const bundler = {};

bundler.run =  () => {
    bundler._compileCss();
};

bundler._compileCss = () => {
    console.log('Minifying the CSS.');

    const npmBuild = spawn('npm', ['run', 'build'], {
        cwd: 'lib/tachyons',
        env: process.env
    });

    npmBuild.stderr.on('error', err => {
        console.log('CSS minification failed.', err);
    });

    npmBuild.on('close', code => {

        if (code !== 0) {
            console.log('CSS : ', code);
            return;
        }

        const copyCss = spawn('cp', ['lib/tachyons/css/tachyons.min.css', '.']);
        copyCss.stderr.on('error', err => {
            console.log('CSS minification failed.', err);
        });

        copyCss.on('close', code => {
            if (code !== 0) {
                console.log('CSS minification exited with code: ', code);
                return;
            }
            console.log('CSS minification done.');
        });

    });
};

bundler.run();
