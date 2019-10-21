var chatModule = (function() {
    let fromSelf = 'Me:',
        fromComputer = 'PC:',
        aSaid = ['This is a Cyber Chat'],
        msgYes = "Yes, that's a great idea.",
        msgNo = 'No, that must be a mistake.',
        aSassyStuff = [
            'Like mold on books, grow myths on history.',
            'She moved like a poem and smiled like a sphinx.',
            'As long as we don’t die, this is gonna be one hell of a story.',
            'She laughed, and the desert sang.',
            'You’ve got about as much charm as a dead slug.'
        ];

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

    return {
        talk(msg) {
            echo(fromSelf + ' ' + msg);
        },

        replyYesOrNo() {
            const msg = Math.random() > 0.5 ? msgYes : msgNo;
            echo(fromComputer + ' ' + msg);
        },

        saySassyStuff() {
            const msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
            echo(fromSelf + ' ' + msg);
        }
    };
})();

$(document).ready(() => {
    chatModule.talk('This is great');
    chatModule.replyYesOrNo();
    chatModule.saySassyStuff('Hey...');
});

/* var io = io || {};
io.github = io.github || {};
io.github.devvratshukla = io.github.devvratshukla || {};
io.github.devvratshukla.jsdp = io.github.devvratshukla.jsdp || {};

// namespace
io.github.devvratshukla.jsdp.chat = {
    fromSelf: 'Me: ',
    fromComputer: 'PC: ',
    aSaid: ['This is a Cyber Chat'],
    msgYes: "Yes, that's a great idea.",
    msgNo: 'No, that must be a mistake.',
    aSassyStuff: [
        'Like mold on books, grow myths on history.',
        'She moved like a poem and smiled like a sphinx.',
        'As long as we don’t die, this is gonna be one hell of a story.',
        'She laughed, and the desert sang.',
        'You’ve got about as much charm as a dead slug.'
    ],
    talk(msg) {
        this.echo(this.fromSelf + ' ' + msg);
    },

    replayYesNo() {
        const msg = Math.random() > 0.5 ? this.msgYes : this.msgNo;
        this.echo(this.fromComputer + ' ' + msg);
    },

    saySassyStuff() {
        const msg = this.aSassyStuff[Math.floor(Math.random() * this.aSassyStuff.length)];
        this.echo(this.fromSelf + ' ' + msg);
    },

    echo(msg) {
        this.aSaid.push(`<div>${this.fromSelf} ${msg}</div>`);
        const aSaidLength = this.aSaid.length;
        const start = Math.max(aSaidLength - 6, 0);
        let out = '';

        for (let index = start; index < aSaidLength; index++) {
            out += this.aSaid[index];
        }

        $('.advert').html(out);

        $('#talk span').text(msg);
    }
};
 */
