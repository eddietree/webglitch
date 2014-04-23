//document.body.style.background = 'orange';


$('*').each( function(){

	
	
	//$(this).css("-webkit-filter","invert(100%)")
	//$(this).css("-webkit-filter","grayscale(1.0)")

    //if ($(this).css("display") === "block")
      //  $(this).css("background", "red") ;   
});

var g_elems = new Array();
var g_paragraphs = new Array();

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
	    		elem : $(this),
	    		rand : Math.random(),
	    		background : $(this).css("background"),
	    		color : $(this).css("color"),
	    		left : $(this).css("left"),
	    		font_family : $(this).css("font-family")
	    	};

	    	//$(this).css("filter","invert(100%)")

	    	g_elems.push( obj );

	    	//$(this).css("position", "relative");
	        //$(this).css("transform", "rotateY(130deg)");
	    }

	});

	tick();
}

function chance( a_val )
{
	return Math.random() < a_val;
}


function tick() 
{
    requestAnimationFrame(tick);

    var time = Date.now() * 0.001;
    var docWidthThreshold = $(document).width()*0.8;

    for( var i = 0; i < g_elems.length; i++ )
    {
    	var obj = g_elems[i];
    	var elem = obj.elem;

    	//elem.css("opacity", Math.sin(time) );

    	if ( chance(0.005) )
    	{
    		elem.css("font-family",'"Courier New", Courier, monospace');
    	}
    	else
    	{
    		elem.css("font-family", obj.font_family );
    	}

    	if ( chance(0.003) && elem.width() < docWidthThreshold )
    	{
    		elem.css("transform", "skew(5deg,0deg)");

    		elem.css("background", chance(0.5) ? "black" : (chance(0.5)?"white":"blue") );
    		elem.css("color", chance(0.5) ? "black" : "white");

    		
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
/*
    for( var i = 0; i < g_paragraphs.length; i++ )
    {
    	var obj = g_paragraphs[i];
    	var elem = obj.p;

    	if ( Math.random() < 0.001)
    	{
    		elem.text("...");
    	}
    	else
    	{
    		elem.text( obj.text );
    	}

    }*/
    // ticking code goes here
}

begin();