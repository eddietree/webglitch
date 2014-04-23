//document.body.style.background = 'orange';

/*
$('*').each( function(){
    if ($(this).css("display") === "block")
        $(this).css("background", "red") ;   
});*/

var g_elems = new Array();

function begin()
{
	// grab elements
	$('div,span').each( function(){
	    if ( $(this).is(':visible') 
	    	//&& $(this).css("display") === "block"
	    )
	    {
	    	var obj = 
	    	{
	    		elem:$(this),
	    		rand:Math.random(),
	    		background:$(this).css("background"),
	    		color:$(this).css("color"),
	    		left:$(this).css("left"),
	    	};

	    	g_elems.push( obj );

	    	//$(this).css("position", "relative");
	        //$(this).css("transform", "rotateY(130deg)");
	    }

	});

	tick();
}


function tick() 
{
    requestAnimationFrame(tick);

    var time = Date.now() * 0.001;

    for( var i = 0; i < g_elems.length; i++ )
    {
    	var obj = g_elems[i];
    	var elem = obj.elem;

    	//elem.css("opacity", Math.sin(time) );

    	if ( Math.random() < 0.003 )
    	{
    		elem.css("transform", "skew(5deg,0deg)");

    		elem.css("background", Math.random() < 0.5 ? "black" : "white");
    		elem.css("color", Math.random() < 0.5 ? "black" : "white");
    		//elem.css("left", Math.random() < 0.5 ? -10 : 10);
    	}
    	else
    	{
    		elem.css("transform", "skew(0deg,0deg)");

    		elem.css("background", obj.background );
    		elem.css("color", obj.color );
    		//elem.css("left", obj.left );
    	}

    	//transform:skew(35deg);
    	//obj.elem.css("background", "white") ; 	

    }
    // ticking code goes here
}

begin();