const figlet = require('figlet');
const colors = require('colors');
const fire = require('js-fire');
const inquirer = require('inquirer')

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
    
var makeWord = {
    auto: () => { 
        figlet.text('word', {
            font: '3-d',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
        
            // console.log(data.length);
            console.log(colors.silly(data));
        });
    },
    create: () => {
        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    type: "input",
                    message: "Text to ASCII:",
                    name: "text"
                },
                {
                    type: "input",
                    message: "Font?",
                    name: "font"
                }
            ])
            .then(answers => {
                // Use user feedback for... whatever!!
                figlet.text(answers.text, {
                    font: answers.font,
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }, function (err, data) {
                    if (err) {
                        console.log('Something went wrong...');
                        console.dir(err);
                        return;
                    }
        
                    // console.log(data.length);
                    console.log(colors.verbose(data));
                });
            });
    }
}

fire(makeWord);