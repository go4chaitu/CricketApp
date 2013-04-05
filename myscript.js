$(document).ready(function(){
    $("#my_ac").autocomplete({
        source: [
            {
                value: "Tom Hanks",
                label: "Tom Hanks",
                description: "Actor",
                image: "p1.jpg"
            },
            {
                value: "Termionator 2",
                label: "Termionator 2",
                description: "Movie",
                image: "p2.jpg"
            }
        ],
		open: function(){
		  alert( $(this).data("autocomplete").menu.element );
		}
        minLength: 1
    }).data( "autocomplete" )._renderMenu = function( ul, data ) {

    var self = this;
    $(ul).css('width', settings.dropDownWidth);

    $.each( data, function( index, item ) {
        self._renderItem( ul, item );
    });

    $(ul).append("<div class='myFooter'>some footer text</div>");
};
});

