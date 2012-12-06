$(document).ready(function(){
    $.widget( "custom.menu", {
        options: {},
        _create: function() {
            var el = this.element;
            el.prepend('<li>&nbsp;</li>');
            el.append('<li>&nbsp;</li>');
            el.find('li ul ul').each(function(i, ul) {
                ul = $(ul);
                ul.css('left', ul.parent().parent().width());
            });
        },
        _refresh: function() {},
        _destroy: function() {},
        _setOptions: function() {},
        _setOption: function( key, value ) {}
    });
});