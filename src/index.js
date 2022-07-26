
import { createInterface } from 'readline';
import CommandInterface from './CommandInterface.js';

function run() {
    let pauseInput = false;
    const io = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    function performAction(fn) {
        pauseInput = true;
        io.pause();
        try {
            fn();
        } catch (err) {
            io.write(err.message);
            io.write('\n');
        }
        io.resume();
        pauseInput = false;
    }

    io.on('line', (input) => {
        if (pauseInput) return 0;
        performAction(() => {
            CommandInterface.execute(input);
        });
    });

    performAction(() => {
        io.write('\n You may start your drawing now.\n');
        io.write('Plese enter your command:\n');
    });
}

run();
