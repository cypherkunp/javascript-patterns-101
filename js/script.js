let fromSelf = 'Me: ';
let fromComputer = 'PC: ';
let aSaid = ['This is a Cyber Chat'];
let msgYes = "Yes, that's a great idea.";
let msgNo = 'No, that must be a mistake.';
let aSassyStuff = [
    'Like mold on books, grow myths on history.',
    'She moved like a poem and smiled like a sphinx.',
    'As long as we don’t die, this is gonna be one hell of a story.',
    'She laughed, and the desert sang.',
    'You’ve got about as much charm as a dead slug.'
];

function talk(msg) {
    echo(fromSelf + ' ' + msg);
}

function replayYesNo() {
    const msg = Math.random() > 0.5 ? msgYes : msgNo;
    echo(fromComputer + ' ' + msg);
}

function saySassyStuff() {
    const msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
    echo(fromSelf + ' ' + msg);
}

function echo(msg) {
    aSaid.push(`<div>${msg}</div>`);
    const aSaidLength = aSaid.length;
    const start = Math.max(aSaidLength - 6, 0);
    let out = '';

    for (let index = start; index < aSaidLength; index++) {
        out += aSaid[index];
    }

    $('.advert').html(out);

    $('#talk span').text(msg);
}
