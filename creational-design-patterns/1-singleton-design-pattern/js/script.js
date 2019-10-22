(function(win, $) {
    const CircleGeneratorSingleton = (function() {
        let instance;

        function init() {
            const _circle = [];
            const _stage = $('.advert');

            function _position(circle, left, top) {
                circle.css('left', left);
                circle.css('top', top);
            }

            function create(left, top) {
                const circle = $(`<div class="circle"></div>`);
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
            const circle = cg.create(e.pageX - 25, e.pageY - 25);

            cg.add(circle);
        });

        $(document).keypress(e => {
            if (e.key === 'a') {
                const cg = CircleGeneratorSingleton.getInstance();
                const circle = cg.create(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600));
                cg.add(circle);
            }
        });
    });
})(window, jQuery);
