(function(win, $) {
    const RedCircle = function() {
        this.item = $(`<div class="circle"></div>`);
    };
    const BlueCircle = function() {
        this.item = $(`<div class="circle" style="background:blue"></div>`);
    };
    const CircleFactory = function() {
        this.create = function(color) {
            if (color === 'blue') return new BlueCircle();
            else return new RedCircle();
        };
    };

    const CircleGeneratorSingleton = (function() {
        let instance;

        function init() {
            const _circle = [];
            const _stage = $('.advert');
            const _cf = new CircleFactory();

            function _position(circle, left, top) {
                circle.css('left', left);
                circle.css('top', top);
            }

            function create(left, top, color) {
                const circle = _cf.create(color).item;
                _position(circle, left, top);
                return circle;
            }

            function add(circle) {
                _stage.append(circle);
                _circle.push(circle);
            }

            function index() {
                return _circle.length;
            }

            return {
                index,
                create,
                add
            };
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = init();
                }

                return instance;
            }
        };
    })();

    $(win.document).ready(() => {
        $('.advert').click(e => {
            const cg = CircleGeneratorSingleton.getInstance();
            const circle = cg.create(e.pageX - 25, e.pageY - 25, 'red');

            cg.add(circle);
        });

        $(document).keypress(e => {
            if (e.key === 'a') {
                const cg = CircleGeneratorSingleton.getInstance();
                const circle = cg.create(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600), 'blue');
                cg.add(circle);
            }
        });
    });
})(window, jQuery);
