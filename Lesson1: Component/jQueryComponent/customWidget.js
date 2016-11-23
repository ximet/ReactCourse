//Check how it work, please use: http://jsfiddle.net/ximet/ymhdq6w4/1/
(function ($) {
   $.widget("ui.colorfigure",
    {
      options:
       {
          color: 'purple'
       },

      _create: function()
       {
          this.element.css(
            {
               height: '130px',
               width: '130px',
               backgroundColor: this.options.color,
               borderRadius: '20% 10%'
            });
       },

      destroy: function()
       {
          $.Widget.prototype.destroy.call( this );
       }

    });
})(jQuery);

$(function()
{
   $('<div></div>').appendTo(document.body)
      .draggable()
      .colorfigure();

   $('<div></div>').appendTo(document.body)
      .draggable()
       .colorfigure({color: 'yellow'});

   $('<div></div>').appendTo(document.body)
      .draggable()
       .colorfigure({color: 'orange'});

   $('<div></div>').appendTo(document.body)
      .draggable()
       .colorfigure({color: 'red'});

   $('<div></div>').appendTo(document.body)
       .draggable({ grid: [50, 20] })
       .colorfigure({color: 'green'});
});
