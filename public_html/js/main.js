/* 
 * to change this license header, choose license headers in project properties.
 * to change this template file, choose tools | templates
 * and open the template in the editor.
 */
 var videoStep = 0;
 var step_3_option = 0;
 var  myMovie = {
	 
	init: function(){
 		var videoSteps = {
 			"step_0" : ["media/plano0.mp4"],
 			"step_1" : ["media/plano1sa.mp4","media/plano2.mp4"],	
 			"step_2" : ["media/plano3.mp4_op1"],
 			"step_3" : ["media/plano4a.mp4_0","media/plano4b.mp4_0"],
 			"step_4" : ["media/generico.mp4"],
 			"step_5" : ["media/plano6.mp4", "media/plano5.mp4"],
 			"step_6" : ["media/plano7.mp4"],
 			"step_7" : ["media/plano8.mp4"],
 			"step_8" : ["media/plano9.mp4"],
 			"step_9" : ["media/plano10.mp4"],
 			"step_10" : ["media/plano11.mp4"],
			"step_11" : ["media/plano 12.mp4"],
			"step_12" : ["media/plano 13.mp4"],
			"step_13" : ["media/plano 14.mp4"],
			"step_14" : ["media/plano 14 B.mp4"],
			"step_15" : ["media/15 A.mp4"],
			"step_16" : ["media/15 A2.mp4"],
			"step_17" : ["media/15 A3.mp4"],
			"step_18" : ["media/15 B.mp4"],
			"step_19" : ["media/15 B2B.mp4"],
			"step_20" : ["media/plano 16.mp4"],
			"step_21" : ["media/plano 17.mp4"],
			"step_22" : ["media/plano 18.mp4"],
			"step_23" : ["media/plano 19.mp4"],
			"step_24" : ["media/plano 20.mp4"],
			"step_25" : ["media/plano .21mp4"]
 			
 		};
		return videoSteps;
 	},                                                                          
 	buildVideo: function(video){
 		$.each(video, function(index, val) {
 			$.each(video[index], function(i, source) {
 				var toAppend = myMovie.buildHTML(index + "_"+i, source);
 				$("#mainContainer").append(toAppend);
 			});
 		});		
 	},
 	numberOfSteps : function(video){
 		return Object.keys(video).length;
 	},
 	buildHTML : function(id , so){
		console.log(id);
 		var source = myMovie.splitSource(so);
		console.log(source);
 		var frame  = '<div class = "videoPlaceholder hidden" style ="z-index:1;" id ="'+id+'">'+ 
 		'<video class="controller">'+
 		'<source src="'+source+'"></source>'+
 		'</video>'+
 		'</div>';
 		return frame;
 	},
 	splitSource : function(json){
 		return json.split('_').shift();
 	},
 	splitOption : function(json){
 		return json.split('_').pop();
 	},
 	drawBlueBagCanvas : function(){
 		var canvasBlue = document.getElementById('blueBagSelect');
 		var contextBlue = canvasBlue.getContext('2d');
 		contextBlue.globalAlpha=0;
 		contextBlue.beginPath();
 		contextBlue.rect(10, 0, 200, 100);
 		contextBlue.fillStyle = "rgb(255, 255, 255)";
 		contextBlue.fill();
 	},
 	drawRedBagCanvas : function(){
 		var canvasRed = document.getElementById('redBagSelect');
 		var contextRed = canvasRed.getContext('2d');
 		contextRed.globalAlpha=0;
 		contextRed.beginPath();
 		contextRed.rect(10, 0, 200, 100);
 		contextRed.fillStyle = "rgb(255, 255, 255)";
 		contextRed.fill();
 	},
 	drawTextCanvas : function(id,text,x,y){
 		var canvasText = document.getElementById(id);
 		var ctx=canvasText.getContext('2d');
 		ctx.font='2em Arial';
 		ctx.fillStyle = "#555555";
 		ctx.fillText(text,x,y);
 	},

 	checkVideoStep : function(step){
 		$("div[id^=step_"+step + "]").find('video').on("timeupdate",function (event) {
 			var steps = myMovie.init();
 			
 			if (videoStep === 10){
 			{
 				console.log("sou o 10")
 			}

 			}
 			if($(this).parent().find('video')[0].ended && step+1 <= myMovie.numberOfSteps(steps)){
 				myMovie.checkVideoStep(myMovie.setCurrentStep(step));
 				switch(videoStep){
 					case 1:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					$("#step_"+videoStep+"_1").hide().find('video')[0].play();
 					break;
 					case 2:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					$("#step_2_0").append("<canvas id='blueBagSelect' class ='choosenOption'></canvas>");	
 					$("#step_2_0").append("<canvas id='redBagSelect' class ='choosenOption'></canvas>");	
 					myMovie.drawBlueBagCanvas();
 					myMovie.drawRedBagCanvas();
 					break;
 					case 3:
 					$("#step_"+videoStep+"_"+step_3_option).show().find('video')[0].play();
 					break;
 					case 4:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
 					case 5:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					$("#step_"+videoStep+"_1").hide().find('video')[0].play();
 					break;
 					case 6:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
 					case 7:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 8:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
 					case 9:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
 					case 10:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 11:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 12:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 13:
 					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 14:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 15:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 16:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 17:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 18:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 19:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 20:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 21:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 22:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 23:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 24:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					case 25:
					$("#step_"+videoStep+"_0").show().find('video')[0].play();
 					break;
					
 					default:					
 					$("div[id^=step_]").remove();
 					videoStep = 0;
 					myMovie.buildVideo(myMovie.init());
 					break;

 				}

 			}
 		});
},
setCurrentStep : function(step){ 
	videoStep = step +1;
	return videoStep;
},
	startMovie: function(){
		videoStep =0;
		$("#step_0_0").show().find('video')[0].play();
		$("#step_0_0").append("<div  id='languageInfo' class ='inputText'></div>");
		$("#languageInfo").append("<span style='color:white'>Click no video para interagir <br/> Click Movie to Interact</span>")
		myMovie.checkVideoStep(0);
	}
};

$(document).ready(function() {
	myMovie.buildVideo(myMovie.init());
	$("#rightContainer img").hide();
	$("#leftContainer img").hide();
	$("#play").on('click',function(){
		myMovie.startMovie();
	});


// INTERAÇÂO FEITA AQUI //
$("video").click(function(event) {

	switch(videoStep){
		case 0 :
		$("#step_"+videoStep+"_0").hide().find('video')[0].pause();
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_0").show().find('video')[0].play();	

		break;
		case 1 :
		case 5 :
		if ($("#step_"+videoStep+"_1").is(':visible')){
			$("#step_"+videoStep+"_0").show().find('video')[0].play();
			$("#step_"+videoStep+"_1").hide().find('video')[0].play();
		}else{
			$("#step_"+videoStep+"_1").show().find('video')[0].play();
			$("#step_"+videoStep+"_0").hide().find('video')[0].play();
		}		
		break;
		case 7 :
		$("#step_"+videoStep+"_0").hide().find('video')[0].pause();
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_0").show().find('video')[0].play();
		break;
		case 9 :
		$("#step_"+videoStep+"_0").hide().find('video')[0].play();
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_0").show().find('video')[0].play();
		break;
		case 11 :
		$("#step_"+videoStep+"_0").hide().find('video')[0].pause();
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_0").show().find('video')[0].play();
		break;
		case 12 :
		$("#step_"+videoStep+"_0").hide().find('video')[0].pause();
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_0").show().find('video')[0].play();
		break;
		case 13 :
		$("#step_"+videoStep+"_0").hide().find('video')[0].pause();
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_0").show().find('video')[0].play();
		break;
		default:

		break;
		
	}
	myMovie.checkVideoStep(videoStep);
	console.log($(this).parent().attr('id'))
});
$(document).delegate('.choosenOption', 'click', function(event) {
	$("#step_"+videoStep+"_0").hide().find('video')[0].pause();
	switch($(this).attr("id")){		
		case "blueBagSelect" :
		step_3_option = 1;
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_"+step_3_option).show().find('video')[0].play();
		
		break;
		case "redBagSelect": 
		step_3_option = 0;
		$("#step_"+myMovie.setCurrentStep(videoStep)+"_"+step_3_option).show().find('video')[0].play();
		
		break;

	}
	myMovie.checkVideoStep(videoStep);
});

});