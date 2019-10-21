var chatModule = (function() {
    let _fromSelf = 'Me:',
        _fromComputer = 'PC:',
        _aSaid = ['This is a Cyber Chat'],
        _msgYes = "Yes, that's a great idea.",
        _msgNo = 'No, that must be a mistake.',
        _aSassyStuff = [
            'Like mold on books, grow myths on history.',
            'She moved like a poem and smiled like a sphinx.',
            'As long as we don’t die, this is gonna be one hell of a story.',
            'She laughed, and the desert sang.',
            'You’ve got about as much charm as a dead slug.'
        ];

    function _echo(msg) {
        _aSaid.push(`<div>${msg}</div>`);
        const _aSaidLength = _aSaid.length;
        const start = Math.max(_aSaidLength - 6, 0);
        let out = '';

        for (let index = start; index < _aSaidLength; index++) {
            out += _aSaid[index];
        }

        $('.advert').html(out);

        $('#talk span').text(msg);
    }

    function talk(msg) {
        _echo(_fromSelf + ' ' + msg);
    }

    function replyYesOrNo() {
        const msg = Math.random() > 0.5 ? _msgYes : _msgNo;
        _echo(_fromComputer + ' ' + msg);
    }

    function saySassyStuff() {
        const msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
        _echo(_fromSelf + ' ' + msg);
    }

    return {
        talk,
        replyYesOrNo,
        saySassyStuff
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
    _fromSelf: 'Me: ',
    _fromComputer: 'PC: ',
    _aSaid: ['This is a Cyber Chat'],
    _msgYes: "Yes, that's a great idea.",
    _msgNo: 'No, that must be a mistake.',
    _aSassyStuff: [
        'Like mold on books, grow myths on history.',
        'She moved like a poem and smiled like a sphinx.',
        'As long as we don’t die, this is gonna be one hell of a story.',
        'She laughed, and the desert sang.',
        'You’ve got about as much charm as a dead slug.'
    ],
    talk(msg) {
        this._echo(this._fromSelf + ' ' + msg);
    },

    replayYesNo() {
        const msg = Math.random() > 0.5 ? this._msgYes : this._msgNo;
        this._echo(this._fromComputer + ' ' + msg);
    },

    saySassyStuff() {
        const msg = this._aSassyStuff[Math.floor(Math.random() * this._aSassyStuff.length)];
        this._echo(this._fromSelf + ' ' + msg);
    },

    _echo(msg) {
        this._aSaid.push(`<div>${this._fromSelf} ${msg}</div>`);
        const _aSaidLength = this._aSaid.length;
        const start = Math.max(_aSaidLength - 6, 0);
        let out = '';

        for (let index = start; index < _aSaidLength; index++) {
            out += this._aSaid[index];
        }

        $('.advert').html(out);

        $('#talk span').text(msg);
    }
};
 */
