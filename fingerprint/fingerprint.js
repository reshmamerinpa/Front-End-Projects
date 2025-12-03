$(function() {
   Sonet.am.scorm.ItemManager.register({
      cls: 'icils2023ms-fingerprint',
      obj: 'ICILS2023MS_Fingerprint',
      type: 'scorm'
   });
});

Sonet.am.scorm.ICILS2023MS_Fingerprint = {
   trueImage: [1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0],  
   testImage1: [0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0],
   testImage2: [1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0],
   testImage3: [1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0],   
   testImage4: [1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0],
   testImage5: [1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0],
   TFValue :[],
   init: function (editMode) {
      var me = this;
      // Pause animation video when help button is clicked.
      $('.content-switch').click(function(){
         if ( !$(this).hasClass('disabled') ) {
            if($("#fingerPrintModal").css('display') != 'none'){
               $(".fingerprint .jp-video-play").filter(".animation .jp-video-play").css("display", "block");
               $.jPlayer.pause();
            }
         }
      });
      $('.image-2').click(function(){
         if ( !$(this).hasClass('disabled') ) {
            if($("#fingerPrintModal").css('display') != 'none'){               
               $('.jp-video-play').css("display", "block");
               $.jPlayer.pause();  
            }
         }
      });
      // Pause animation video in help page when goBackBtn is clicked.
      $("button#goBackBtn").click(function(){
         if($("#fingerPrintModal .helpModal-video .large-video .jp-video-play").length > 0){
            let i = 0;
            do{
               $($("#fingerPrintModal .helpModal-video .large-video .jp-video-play")[i]).css("display", "block");
               i++;
            } while ( i < 2 );
            $.jPlayer.pause();
         }
      });

      if ($('#fingerPrintModal .helpModal-video .large-video .fp').filter('.video').length > 0) {
         me.initHelpTaskIntroAnimationVideo();
      }
      if ($('#fingerPrintModal .helpModal-video .large-video .pixel').filter('.video').length > 0) {
         me.initHelpTaskTwoAnimationVideo();
      }
      
      if ($('.fingerprint.task-05').not('.task-08').length > 0) {
         var securityGrid = '.security-pixel-grid';
         var grid3 = '.grid-3';

         $(grid3 +' td').not('.disabled').click (function () {
            cellId = $(this).attr('id');
            if ($(grid3 + ' #' + cellId).hasClass('true')) {
               $(grid3 + ' #' + cellId).removeClass('true').addClass('false');
               $(grid3 + ' #' + cellId + ' p.true').removeClass('active');
               $(grid3 + ' #' + cellId + ' p.false').addClass('active');
            } else if ($(grid3 + ' #' + cellId).hasClass('false')) {
               $(grid3 + ' #' + cellId).removeClass('false');
               $(grid3 + ' #' + cellId + ' p.false').removeClass('active');
            } else {
               $(grid3 + ' #' + cellId).addClass('true');
               $(grid3 + ' #' + cellId + ' p.true').addClass('active');
            }            
         });

         $(grid3 +' td').not('.disabled, .locked').mouseenter (function () {
            cellId = $(this).attr('id');
            $(securityGrid + ' #' + cellId).addClass('highlight');
         }).mouseleave (function () {
            cellId = $(this).attr('id');
            $(securityGrid + ' #' + cellId).removeClass('highlight');            
         });
      }

      if($('.fingerprint.task-09').length > 0) {
         $('body').addClass('fingerprint-t09').addClass('google-blockly');
      } else if($('.fingerprint.task-010').length > 0) {
         $('body').addClass('fingerprint-t10').addClass('google-blockly');
      }

      if($('.fingerprint.task-011').length > 0) {
         $('body').addClass('fingerprint-t11').addClass('google-blockly');
      }

      if($('.task-ia.animation').length > 0 || $('.task-02ia.animation').length > 0) {
         $('.am-media-clone-wrapper').css("margin","0px");
      }

      if($('body #blocklyApp').length > 0) {
         if($('.fingerprint').hasClass('task-02-only') || $('.fingerprint').hasClass('task-06') || $('.fingerprint').hasClass('task-07')){
            $(document).on( "slidestop", '#slider', function(event, {value}) { 
               // if (value <= 33) {
               //    $(this).slider( "option", "value", 0 );
               //    return
               // }
               // if (value <= 66) {
               //    $(this).slider( "option", "value", 50 );
               //    return
               // }

               // $(this).slider( "option", "value", 100 );
            });
         }
      }

      $('.underline-tooltip').click(function(el,i){
         var position =  $(this).position();
         $(this).closest('.sec-parent').find('.info-text').toggleClass("show-info").css({
            "left":position.left - 80,
            "top":position.top + 25
         });
      });

   },

   initHelpTaskIntroAnimationVideo: function() {
      var me = this;
      timerCallback = setInterval(function(){
         currentTime = $('#fingerPrintModal .helpModal-video .large-video .fp').filter('.video').find('video').get(0).currentTime;
         
         if (currentTime > 1.21 && currentTime < 27.10) {
            compRef = 'helpModal-video .large-video .fp .caption-1';
            $('.' + compRef).not('.active-caption').length && me.resetHelpIntroCaption(compRef);      
         } else if (currentTime > 29.20 && currentTime < 68) {
            compRef = 'helpModal-video .large-video .fp .caption-2';
            $('.' + compRef).not('.active-caption').length && me.resetHelpIntroCaption(compRef);
         } else if (currentTime > 70.05 && currentTime < 98.29) {
            compRef = 'helpModal-video .large-video .fp .caption-3';
            $('.' + compRef).not('.active-caption').length && me.resetHelpIntroCaption(compRef);
         } else {
            me.resetHelpCaption();
         }
      }, 100);
   },

   resetHelpIntroCaption: function (compRef) {
      $('.helpModal-video .large-video .fp .caption').removeClass('active-caption');
      if (compRef) {
         $('.' + compRef).addClass('active-caption');
      }      
   },

   initHelpTaskTwoAnimationVideo: function() {
      var me = this;
      timerCallback = setInterval(function(){
         currentTime = $('#fingerPrintModal .helpModal-video .large-video .pixel').filter('.video').find('video').get(0).currentTime;
         if (currentTime > 2 && currentTime < 13) {
            compRef = 'helpModal-video .large-video .pixel .caption-1';
            $('.' + compRef).not('.active-caption').length && me.resetHelpCaption(compRef);
         } else if (currentTime > 14 && currentTime < 18) {
            compRef = 'helpModal-video .large-video .pixel .caption-2';
            $('.' + compRef).not('.active-caption').length && me.resetHelpCaption(compRef);
         } else if (currentTime > 19 && currentTime < 30) {
            compRef = 'helpModal-video .large-video .pixel .caption-3';
            $('.' + compRef).not('.active-caption').length && me.resetHelpCaption(compRef);
         } else if (currentTime > 38 && currentTime < 43) {
            compRef = 'helpModal-video .large-video .pixel .caption-7';
            $('.' + compRef).not('.active-caption').length && me.resetHelpCaption(compRef);
         } else if (currentTime > 44 && currentTime < 75) {
            compRef = 'helpModal-video .large-video .pixel .caption-8';
            $('.' + compRef).not('.active-caption').length && me.resetHelpCaption(compRef);
         } else {
            me.resetHelpCaption();
         }

         if (currentTime > 31 && currentTime < 75) {
            compRef = 'helpModal-video .large-video .pixel .caption-4';
            $('.' + compRef).not('.active-caption').addClass('active-caption');
            if (currentTime > 36 && currentTime < 75) {
               compRef = 'helpModal-video .large-video .pixel .caption-5';
               $('.' + compRef).not('.active-caption').addClass('active-caption');
               compRef = 'helpModal-video .large-video .pixel .caption-6';
               $('.' + compRef).not('.active-caption').addClass('active-caption');
            }
         } else {
            compRef = 'helpModal-video .large-video .pixel .caption-4';
            $('.' + compRef).removeClass('active-caption');
            compRef = 'helpModal-video .large-video .pixel .caption-5';
            $('.' + compRef).removeClass('active-caption');
            compRef = 'helpModal-video .large-video .pixel .caption-6';
            $('.' + compRef).removeClass('active-caption');
         }

         if (currentTime > 76 && currentTime < 78) {
            compRef = 'helpModal-video .large-video .pixel .caption-9';
            $('.' + compRef).not('.active-caption').addClass('active-caption');
            if (currentTime > 77 && currentTime < 78) {
               compRef = 'helpModal-video .large-video .pixel .caption-10';
               $('.' + compRef).not('.active-caption').addClass('active-caption');
            } 
         } else {
            compRef = 'helpModal-video .large-video .pixel .caption-9';
            $('.' + compRef).removeClass('active-caption');
            compRef = 'helpModal-video .large-video .pixel .caption-10';
            $('.' + compRef).removeClass('active-caption');
         }
      }, 100);
   },

   resetHelpCaption: function (compRef) {
      $('.helpModal-video .large-video .pixel .caption').removeClass('active-caption');
      if (compRef) {
         $('.' + compRef).addClass('active-caption');
      }      
   },

   getContent: function () {
      var me = this
      var data = {};

      if ($('.fingerprint.task-05').length > 0) {
         var grid3 = '.grid-3';
         $(grid3 + ' td.true, td.false').not('.locked').each(function () {
            if ($(this).hasClass('true')) {
               data[$(this).attr('id')] = 'true';
            } else {
               data[$(this).attr('id')] = 'false';
            }     
         });
      }    
      return data;
   },

   loadContent: function (data) {
      var me = this;
      setTimeout(function(){
         Sonet.am.scorm.GOOGLE_BLOCKLY.blocklyFlyoutClick();
         Sonet.am.scorm.GOOGLE_BLOCKLY.moveBlocksToWorkspace();
      },2000);
      if ($('.fingerprint.task-05').length > 0) {
         var grid3 = '.grid-3';
         
         if (data) {
            for (var key in data) {
               $(grid3 + ' td#' + key).addClass(data[key]);
               $(grid3 + ' td#' + key + ' p.' + data[key]).addClass('active');
            }
         }
      }
   },

   getTaskId: function () {
      var me = this;
      id = null;

      if ($('.fingerprint.task-05').not('.task-08').length > 0) {
         id = 'fingerprint-task-05';
      }
      return id;
   },
   getTFValue :function(){
      var saveData= null;
      var grid3 = '.grid-3';
      Sonet.am.scorm.ICILS2023MS_Fingerprint.TFValue = [];
      $(grid3 + ' td ').not('.disabled').each(function () {
         if ($(this).hasClass('true')) {
            saveData = 'true';
         } else if($(this).hasClass('false')){
            saveData = 'false';
         } 
         else{
            saveData = 'null';
         }
         Sonet.am.scorm.ICILS2023MS_Fingerprint.TFValue.push(saveData);       
      });
      return  Sonet.am.scorm.ICILS2023MS_Fingerprint.TFValue;
   },

   saveEventResponses: function (id) {
      var me = this;
      let eventTracker = Sonet.am.widgets.eventTracker
      eventData = {},
      saveEvents = false
      if(id === 'fingerprint-task-05'){
         saveEvents = true
         eventData.table = me.getTFValue();        
      }
      if (saveEvents) eventTracker.saveData(eventData)
      },
   // to load the content on page refresh or reload 
   loadResults: function () {
      var me = this,
         scormApi = Sonet.am.scorm.ScormWrapper;
      id = me.getTaskId();         

      if (id != null) {
         content = scormApi.getInteraction(id, true);

         if (content) {
            me.loadContent(JSON.parse(content));
         }
      }
   },

   // to save the result in the database
   saveResults: function () {
      var me = this,
         scormApi = Sonet.am.scorm.ScormWrapper,
         id = me.getTaskId(),
         content = JSON.stringify(me.getContent());
         me.saveEventResponses(id);   
      
      if (id != null && content.length > 2) {
         pos = scormApi.getInteractionPos(id);
         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', content);
      }      
   }
}