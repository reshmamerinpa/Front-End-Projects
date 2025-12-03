$(function() {
   Sonet.am.scorm.ItemManager.register({
      cls: 'fingerprint-t09',
      obj: 'FINGERPRINT_T09',
      type: 'scorm'
   });
      
   //Loading files blockly and interpreter
   Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.blockly.js, 'js', 'blocklyjs');
   Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.interpreter.js, 'js', 'interpreterjs');
 
});

Sonet.am.scorm.FINGERPRINT_T09 = {
   id: 'fingerprint-task9',
   toolboxXML: '',
   workspaceXML: '',
   initialWorkspaceXML:'',
   selectedImage: [],
   trueImage:Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage,
   lastSelectedTestImage:[],
   pixelComparisonGrid:[],
   t_count : 0,
   f_count : 0,
   DP1:'',
   DP2:'',
   gridSelectable: true,
   isblockPixelOrphan: false,
   totalBlockCount:64,
   tmpGrid:[],
   textT:'T',
   textF:'F',
   textpixelgridcell:'',
   initialGridDisplay:false,
   securityPG:null,
   spg:null,
   
   init: function (editMode) {
      console.log("t09");
      var me = this; 
      var gridName1 = $('[data-am-translate="fm.task09.workspace.text.11"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.11"]').text() : 'Test pixel grid 1';
      var gridName2 = $('[data-am-translate="fm.task09.workspace.text.12"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.12"]').text() : 'Test pixel grid 2';
      var gridName3 = $('[data-am-translate="fm.task09.workspace.text.13"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.13"]').text() : 'Test pixel grid 3';
      var gridName4 = $('[data-am-translate="fm.task09.workspace.text.14"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.14"]').text() : 'Test pixel grid 4';
      var sam = $('[data-am-translate="fm.task09.workspace.text.sam"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.sam"]').text() : '([Sam])'
      var alice = $('[data-am-translate="fm.task09.workspace.text.alice"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.alice"]').text() : '([Alice])'
      var nick = $('[data-am-translate="fm.task09.workspace.text.nick"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.nick"]').text() : '([Nick])'


      me.textT = $('[data-am-translate="fm.task09.workspace.text.8"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.8"]').text() : 'T';
      me.textF = $('[data-am-translate="fm.task09.workspace.text.9"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.9"]').text() : 'F';

      me.textpixelgridcell = $('[data-am-translate="fm.task09.workspace.text.1"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.1"]').text() : 'for each pixel in grid and cell in table';
      
      if($(".fingerprint.task-06").length > 0){

         me.drawGrid(this.trueImage,'true-grid');
         me.selectedImage =me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage3;
         me.drawGrid(me.selectedImage,'test-grid-2');
         me.selectedImage =me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;
         me.drawGrid(me.selectedImage,'test-grid-1');
         me.drawComparisonGrid();


         this.toolboxXML = '<xml xmlns="https://developers.google.com/blockly/xml">'+
         '<block type="block_for_each_pixel" id="textpixelgridcell"></block>'+
         '<block type="block_if_else" id="fp09_if_else"></block>'+
         '<block type="block_pixel_in" id="fp09_pixel_in">'+
         '<field name="TYPE_1">PIXEL</field>'+
         '<field name="GRID_1"></field>'+
         '<field name="OPERATOR">=</field>'+
         '<field name="TYPE_2">PIXEL</field>'+
         '<field name="GRID_2"></field>'+
         '</block>'+
         '<block type="block_set_to">'+
            '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
         '</block>'+
         '<block type="block_T">T</block>'+
         '<block type="block_F">F</block>'+
         '<block type="block_0">0</block>'+    
         '</xml>';

         this.initialWorkspaceXML = this.workspaceXML = '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none"></xml>';

         blockArray = ['block_for_each_pixel','block_if_else','block_pixel_in','block_set_to','block_T','block_F','block_0'];

      } else {

         me.selectedImage =me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage2;
         me.drawGrid(this.trueImage,'true-grid');
         me.drawGrid(me.selectedImage);
         
         $('#grid-name').text(gridName2);
         $('#grid-user').text(sam);
         //old task 9
         this.toolboxXML = '<xml xmlns="https://developers.google.com/blockly/xml">'+
         '<block type="block_for_each_pixel"></block>'+
         '<block type="block_if_else" id="fp09_if_else"></block>'+
         '<block type="block_pixel_in" id="fp09_pixel_in">'+
         '<field name="TYPE_1">PIXEL</field>'+
         '<field name="GRID_1"></field>'+
         '<field name="OPERATOR">=</field>'+
         '<field name="TYPE_2">PIXEL</field>'+
         '<field name="GRID_2"></field>'+
         '</block>'+
         '<block type="block_add_to">'+
            '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
         '</block>'+
         '<block type="block_T">T</block>'+
         '<block type="block_F">F</block>'+
         '<block type="block_0">0</block>'+    
         '</xml>';
         
         this.initialWorkspaceXML = this.workspaceXML = '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">'+
         '<block type="block_for_each_pixel" x="10" y="10"></block>'+
         '</xml>';

         blockArray = ['block_for_each_pixel','block_if_else','block_pixel_in','block_set_to','block_T','block_F','block_0'];

      }


      $.each(blockArray, function( index, value ) {
         Sonet.am.scorm.GOOGLE_BLOCKLY.defineCustomBlock(value);
      });
      Sonet.am.scorm.GOOGLE_BLOCKLY.resetOutput = me.resetOutput;
      Sonet.am.scorm.GOOGLE_BLOCKLY.initBlockly(this.toolboxXML, this.workspaceXML, this.initialWorkspaceXML);
      Blockly.Field.prototype.maxDisplayLength = 150;
      setTimeout(() => {
         var isRTL = $('#view-mode').attr('dir') =='rtl' ? true :false;
         if(isRTL)
            Blockly.mainWorkspace.scroll(400, 0);
         else 
            Blockly.mainWorkspace.scroll(0, 0);
      }, 500);
      if($(".fingerprint.task-06").length > 0){
         var dir = $('#view-mode').attr('dir') =='rtl' ? true :false;
         setTimeout(function() {

            if(dir == false) {
               $('g[data-id="textpixelgridcell"] > path.blocklyPath,g[data-id="textpixelgridcell"] > path.blocklyPathDark,g[data-id="textpixelgridcell"] > path.blocklyPathLight').css({'transform':'scaleX(1.15)'});
            }

            $("g[data-id='textpixelgridcell'] > text").text('"'+me.textpixelgridcell+'"');
         }, 100);
      }

      this.initRowClicks = function(){

         $('#fm-test-grid-1').on('click', function () {
            if (!$(this).hasClass('disabled')) {
               $(this).addClass('highlight');
               $(this).addClass('fm-selected-grid');
               $('#fm-test-grid-2').removeClass('highlight');
               $('#fm-test-grid-2').removeClass('fm-selected-grid');
               me.selectedImage = me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;
            }
         });

         $('#fm-test-grid-2').on('click', function () {
            if (!$(this).hasClass('disabled')) {
               $(this).addClass('highlight');
               $(this).addClass('fm-selected-grid');
               $('#fm-test-grid-1').removeClass('highlight');
               $('#fm-test-grid-1').removeClass('fm-selected-grid');
               me.selectedImage = me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage3;
            }
         });

         $('.cmp-r').on('click', function () {
            if (!$(this).hasClass('disabled') && me.gridSelectable) {
               $('.cmp-r img').removeClass('highlight');
               $(this).find('img').addClass('highlight');

               if($(this).hasClass('row-1')) {
                  me.selectedImage = me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;   
                  $('#grid-name').text(gridName1);
                  $('#grid-user').text(sam);
               } else if($(this).hasClass('row-2')) {
                  me.selectedImage = me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage2;  
                  $('#grid-name').text(gridName2);
                  $('#grid-user').text(sam);
               } if($(this).hasClass('row-3')) {
                  me.selectedImage = me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage3; 
                  $('#grid-name').text(gridName3);
                  $('#grid-user').text(alice); 
               } if($(this).hasClass('row-4')) {
                  me.selectedImage = me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage4;  
                  $('#grid-name').text(gridName4);
                  $('#grid-user').text(nick);
               }

               me.drawGrid(me.selectedImage);
               me.validateDropDown(true);
            }
         });

      }
      this.initRowClicks();
   }, 

   getBlockPixelInCode: function (eq) {
      var me = this
      var condition = me.validateDropDown();
      var code = '';
      if(condition[0] == 'SP' && condition[1]=='TP'){
         code = 'trueImage[i]'+eq+ 'selectedImage[i]'
      }
      if(condition[0] == 'TP' && condition[1]=='SP'){
         code = 'trueImage[i]'+eq+ 'selectedImage[i]'
      }
      if(condition[0] == 'TP' && condition[1]=='TP'){
         code = 'trueImage[i]'+eq+ 'selectedImage[i]'
      }
      if(condition[0] == 'SP' && condition[1]=='SP'){
         code = 'trueImage[i]'+eq+ 'selectedImage[i]'
      }
      if(condition[0] && condition[1] == 'NULL'){
         code = ''
      }
      return code;
   },

   validateDropDown: function (reinit = false) {
      var me = this;
      var opt1 = me.DP1,opt2=me.DP2;
      var combPattern = [];
      if(opt1 == opt2){
         this.loadGridCode = true
         this.gridSelectable = true;
         if(opt1 == 'SECURITY_PIXEL_GRID'){
            this.selectedImage = me.trueImage;
            combPattern = ['SP', 'SP']
         }
         else if(opt1.length == 0 && opt2.length == 0){
            this.loadGridCode = false
            combPattern =['NULL', 'NULL']
         }
         else {
            this.trueImage = me.selectedImage = me.lastSelectedTestImage;
            combPattern = ['TP' , 'TP']
         }
      } else{
         this.loadGridCode = true;
         this.gridSelectable = true;
         if(opt2.length < 1){
            // option 2 empty
            if(opt1 == 'SECURITY_PIXEL_GRID'){
               combPattern = ['SP', 'NULL']
            }
            if(opt1 == 'TEST_PIXEL_GRID'){
               combPattern = ['TP', 'NULL']
            }
         }
         if(opt1.length < 1){
            // option 1 empty
            if(opt2 == 'SECURITY_PIXEL_GRID'){
               combPattern = ['NULL', 'SP']
            }
            if(opt2 == 'TEST_PIXEL_GRID'){
               combPattern = ['NULL', 'TP']
            }
         }
         if(opt1 == 'SECURITY_PIXEL_GRID' && opt2 == 'TEST_PIXEL_GRID'){
            me.trueImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage
            me.selectedImage = me.lastSelectedTestImage;
            combPattern = ['SP', 'TP']
         }
         if(opt2 == 'SECURITY_PIXEL_GRID' && opt1 == 'TEST_PIXEL_GRID'){
            me.trueImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage
            me.selectedImage = me.lastSelectedTestImage;
            combPattern = ['TP', 'SP']
         }
      }
      if(!reinit){
         me.initRowClicks();
      }
      this.toogleGridHighlights(combPattern)

      return combPattern;
   },
   toogleGridHighlights: function (pattern) {
      var me = this;
      var sp = 'SECURITY_PIXEL_GRID',tp = 'TEST_PIXEL_GRID',$trueGrid=$('#fm-true-grid')
      if($(".fingerprint.task-06").length > 0){
         $selGrid=$('.fm-selected-grid');
      }else{
         $selGrid=$('#fm-selected-grid');
      }
      if(this.DP1 == sp && this.DP2 == sp){
         $selGrid.addClass('hide-highlight')
      }else if(this.DP1 == tp && this.DP2 == tp){
         $trueGrid.addClass('hide-highlight')
      } else if((this.DP1 == sp && this.DP2 == '') || (this.DP1 == '' && this.DP2 == sp)){
         $selGrid.addClass('hide-highlight')
      } else if((this.DP1 == tp && this.DP2 == '') || (this.DP1 == '' && this.DP2 == tp)){
         $trueGrid.addClass('hide-highlight')
      } else{
         $selGrid.removeClass('hide-highlight')
         $trueGrid.removeClass('hide-highlight')
      }
   },

   getInitialCode: function () {
      var me = this;
      var initCode = '';
      initCode += this.loadPartInitCodes();
      initCode += 'var pixelComparisonGrid = [];\n';
      initCode += 'var t_count = 0,i = 0, j = 0, total_pixel = '+ me.totalBlockCount +';\n';

      return initCode;
   },   
   
   loadPartInitCodes: function() {
      var trueImage = 'var trueImage = [' + this.trueImage + '];\n',
      selectedImage = 'var selectedImage = [' + Sonet.am.scorm.FINGERPRINT_T09.selectedImage + '];\n';
      return trueImage.concat(selectedImage)
   },
   arraysEqual : function (a1,a2) {
      return JSON.stringify(a1)==JSON.stringify(a2);
   },
   drawGrid: function (selectedGrid,grid = null) {
      var index = 0, html;

      if(grid == 'true-grid') {
         html = '<table id="fm-'+grid+'" class="security-pixel-grid grid-1 highlight" >';
      } else if (grid == 'test-grid-1'){
         html = '<table id="fm-'+grid+'" class="security-pixel-grid grid-2 highlight fm-selected-grid">';
      } else if (grid == 'test-grid-2'){
         html = '<table id="fm-'+grid+'" class="security-pixel-grid grid-2">';
      }else {
         html = '<table id="fm-selected-grid" class="security-pixel-grid grid-1">';
      }
      
      //loop through rows
      for(var i = 0;i < 8; i++) {
         html += '<tr class="row">';
         //loop through cols
         for(var j =0;j <8; j++) {
            if(selectedGrid[index] !== 1) {
               html += '<td id= "cell-' + index+'" class="cell white"></td>';
            } else {
               html += '<td id= "cell-' + index+'" class="cell black"></td>';
            }           
            index++;
         }
         html += '</tr>';
      }

      html += '</table>';

      if(grid == 'true-grid' || grid == 'test-grid-1' || grid == 'test-grid-2') {
         $('.'+grid).append(html);
      } else {
         $(".selected-grid").empty();
         $(".selected-grid").append(html);
      }

   },

   drawComparisonGrid() {
      var id = 0;
      //draw table
      html = '<table>';
      //loop through rows
      for(var i = 0;i < 8; i++) {
         html += '<tr>';
         //loop through cols
         for(var j = 0;j <8; j++) {
            html += '<td id="'+id+'"></td>';
            id++;
         }
         html += '</tr>';
      }
      html += '</table>';
      $(".comparison-grid-block-wrapper").empty();  
      $(".comparison-grid-block-wrapper").append(html);
   },

   printValue: function (printArr,index) {
      var textT = Sonet.am.scorm.FINGERPRINT_T09.textT;
      var textF = Sonet.am.scorm.FINGERPRINT_T09.textF;
      var className,id = 0 ;

      if(Sonet.am.scorm.FINGERPRINT_T09.initialGridDisplay == false) {
         Sonet.am.scorm.FINGERPRINT_T09.drawComparisonGrid();  
         Sonet.am.scorm.FINGERPRINT_T09.initialGridDisplay = true;  
      }

      if (index == (Sonet.am.scorm.FINGERPRINT_T09.totalBlockCount-1) && Sonet.am.scorm.FINGERPRINT_T09.tmpGrid[index] !== undefined) {
         if (Sonet.am.scorm.FINGERPRINT_T09.tmpGrid[index] == textT) {
            Sonet.am.scorm.FINGERPRINT_T09.t_count--;
         } else if (Sonet.am.scorm.FINGERPRINT_T09.tmpGrid[index] == textF) {
            Sonet.am.scorm.FINGERPRINT_T09.f_count--;
         }
      }
      if(printArr[index] == textT) {
         Sonet.am.scorm.FINGERPRINT_T09.t_count++;
         className = 'true';         
      } else if(printArr[index]== textF) {         
         Sonet.am.scorm.FINGERPRINT_T09.f_count++;
         className = 'false';
      }

      Sonet.am.scorm.FINGERPRINT_T09.tmpGrid = printArr;
      $('#t_count').text(Sonet.am.scorm.FINGERPRINT_T09.t_count);
      $('#f_count').text(Sonet.am.scorm.FINGERPRINT_T09.f_count);
      $('.comparison-grid-block-wrapper td#'+(index)).html(printArr[index]).removeClass('true false').addClass(className);
      Sonet.am.scorm.FINGERPRINT_T09.highlightCell(index);
      if(Sonet.am.scorm.FINGERPRINT_T09.selectedImage == Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1){
         Sonet.am.scorm.FINGERPRINT_T09.spg = 'pixeGrid1';
      }
      else if(Sonet.am.scorm.FINGERPRINT_T09.selectedImage == Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage3){
         Sonet.am.scorm.FINGERPRINT_T09.spg = 'pixeGrid2';
      }
   },

   highlightCell:function(index) {
      if(Sonet.am.scorm.FINGERPRINT_T09.securityPG != null){
         $('#fm-true-grid:not(.hide-highlight) td').removeClass('highlight');
         $('#fm-true-grid:not(.hide-highlight) #cell-'+(index+1)).addClass('highlight');
      }
      $('#fm-selected-grid:not(.hide-highlight) td').removeClass('highlight');
      $('#fm-selected-grid:not(.hide-highlight) #cell-'+(index+1)).addClass('highlight');    
      
      if(Sonet.am.scorm.FINGERPRINT_T09.securityPG == false){
         $('.fm-selected-grid:not(.hide-highlight) td').removeClass('highlight');
         $('.fm-selected-grid:not(.hide-highlight) #cell-'+(index+1)).addClass('highlight'); 
      }
   },

   resetOutput: function () {
      $(".comparison-grid-block-wrapper").empty();
      $('#t_count').empty();
      $('#f_count').empty();
      $('.cmp-r, .grid-block').removeClass('disabled');
      Sonet.am.scorm.FINGERPRINT_T04.resetSelection();
      $('#fm-test-grid-2').removeClass('highlight').removeClass('fm-selected-grid');
      $('#fm-test-grid-1').addClass('highlight').addClass('fm-selected-grid');
      Sonet.am.scorm.FINGERPRINT_T09.selectedImage = Sonet.am.scorm.FINGERPRINT_T09.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;
   },

   getContent: function () {
      var me = this
      var data = {}
      data['taskId'] = $('#task').attr('data-itemid');
      data['output'] = $('.comparison-grid-block').html();

      return data

   },

   loadContent: function (data) {
      var me = this;
      setTimeout(function(){
         Sonet.am.scorm.GOOGLE_BLOCKLY.blocklyFlyoutClick();
         Sonet.am.scorm.GOOGLE_BLOCKLY.moveBlocksToWorkspace();
      },2000);

      if (!!data && !!data['output']) {
         if(data.taskId == $('#task').attr('data-itemid')){
            $('.comparison-grid-block').html(data.output)
         }
      }
   },
   getPixelTPG1Count: function()
   {
      let TPG1 = {};
      TPG1["T_count"] = $('#t_count').text()
      TPG1["F_count"] = $('#f_count').text()
      
      return TPG1       
   },
   getPixelTPG2Count: function()
   {
      let TPG2= {};
      TPG2["T_count"] = $('#t_count').text()
      TPG2["F_count"] = $('#f_count').text()
      
      return TPG2
       
   },
   getBLocklyXML: function (){
      let workspace = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
      return Blockly.Xml.domToText(workspace)
   },
   saveEventResponses: function (id) {
      var me = this;
      var GBlockly = Sonet.am.scorm.GOOGLE_BLOCKLY;
      let dataResultToSave={}
      let eventTracker = Sonet.am.widgets.eventTracker
      eventData = {},
      saveEvents = false
      if(id === 'fp06'){
         saveEvents = true
      /* commenting this code to revert the gnext code as per the requirment in ticket AM-40873 */  
      /* isGNextClicked = Sonet.am.App.isgNextClicked;                  
         if(me.currentWorkSpace == null ){
            me.currentWorkSpace = me.getBLocklyXML();
         }
         else{
            tempWorkspace = me.getBLocklyXML();
            if(tempWorkspace != me.currentWorkSpace){
               me.isWorkspaceChanged = true;
               me.currentWorkSpace = tempWorkspace;               
            }
         }
         if(Sonet.am.App.isgNextClicked== true && me.isWorkspaceChanged == true){
            quickRun = GBlockly.quickRunCode($('.g-blockly-target').data("object"),null);           
            if(quickRun) {
               saveEvents = true
               if($('#fm-test-grid-1').hasClass('fm-selected-grid')){
                  // eventData.TPG1 = me.getPixelTPG1Count();
                  dataResultToSave= {
                     Workspace:me.currentWorkSpace,
                     commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
                     output: me.getPixelTPG1Count()
                 } 
                 Sonet.am.scorm.ICILS2023MS.eventDataRecording("NextTaskButton", null,dataResultToSave); 
               }
               else if($('#fm-test-grid-2').hasClass('fm-selected-grid')){
                  // eventData.TPG2 = me.getPixelTPG2Count();
                  dataResultToSave= {
                     Workspace:me.currentWorkSpace,
                     commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
                     output: me.getPixelTPG2Count()
                 } 
                 Sonet.am.scorm.ICILS2023MS.eventDataRecording("NextTaskButton", null,dataResultToSave); 
               }
            }
            if(dataResultToSave){
               GBlockly.quickRun = Sonet.am.App.isgNextClicked = me.isWorkspaceChanged = false;
            }
         }
         else{ */
            if(Sonet.am.scorm.FINGERPRINT_T09.spg == 'pixeGrid1'){
               // eventData.TPG1 = me.getPixelTPG1Count();
               dataResultToSave= {
                  Workspace:me.getBLocklyXML(),
                  commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
                  output:{
                     TGP1: me.getPixelTPG1Count()
                  }
               } 
               Sonet.am.scorm.ICILS2023MS.eventDataRecording("RunProgram", null,dataResultToSave); 
            }
            else if(Sonet.am.scorm.FINGERPRINT_T09.spg == 'pixeGrid2'){
               // eventData.TPG2 = me.getPixelTPG2Count();
               dataResultToSave= {
                  Workspace:me.getBLocklyXML(),
                  commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
                  output: {
                     TGP2:me.getPixelTPG2Count()
                  }
               } 
               Sonet.am.scorm.ICILS2023MS.eventDataRecording("RunProgram", null,dataResultToSave); 
            }
         // }
      }
      // if (saveEvents) eventTracker.saveData(eventData)
      },
   // to load the content on page refresh or reload 
   loadResults: function () {
      var me = this,
         scormApi = Sonet.am.scorm.ScormWrapper,
         content = scormApi.getInteraction(me.id, true);

      if (content) {
         me.loadContent(JSON.parse(content));
      }
      if(id == 'fp07'){
         store = scormApi.getDataStore('data', true) || {};
         try {
            content = store.fp06_data
            if(!!content){
               me.loadContent(content)
            }
         } catch (e){
            var pass = e;
         }
      }
},

   // to save the result in the database
   saveResults: function () {
       id = $('#task').attr('data-itemid');
      var me = this,
         content = JSON.stringify(me.getContent()),
         scormApi = Sonet.am.scorm.ScormWrapper,
         pos = scormApi.getInteractionPos(me.id);
         me.saveEventResponses(id); 

         if (id == 'fp06' ) {
            store = scormApi.getDataStore('data', true) || {};
            store['fp06_data'] = me.getContent();
            scormApi.setDataStore('data', store);
         }

      scormApi.setValue('cmi.interactions.' + pos + '.id', me.id);
      scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
      scormApi.setValue('cmi.interactions.' + pos + '.learner_response', content);
   }
}