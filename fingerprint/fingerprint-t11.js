$(function() {
   Sonet.am.scorm.ItemManager.register({
      cls: 'fingerprint-t11',
      obj: 'FINGERPRINT_T11',
      type: 'scorm'
   });
      
   //Loading files blockly and interpreter
   Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.blockly.js, 'js', 'blocklyjs');
   Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.interpreter.js, 'js', 'interpreterjs');
 
});

Sonet.am.scorm.FINGERPRINT_T11 = {
   id: 'fingerprint-task11',
   toolboxXML: '',
   workspaceXML: '',
   initialWorkspaceXML:'',
   selectedImage: [1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0],
   trueImage:Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage,
   pixelComparisonGrid:[],
   t_count : 0,
   f_count : 0,
   text_true: 'T',
   text_false: 'F',
   fp11_TcountValue: 64,
   totalBlockCount:64,
   tmpGrid:[],
   T7PG1TCount:['null'],
   T7PG1FCount:['null'],
   T7PG1Output:['null'],
   T7PG1Tcompare:['null'],

   T7PG2TCount:['null'],
   T7PG2FCount:['null'],
   T7PG2Output:['null'],
   T7PG2Tcompare:['null'],
   PixelGrid1:false,
   PixelGrid2:false,
   textBlockforEachPixel:'',
   
   init: function (editMode) {
      console.log("t11");
      var me = this;      
      var gridName1 = $('[data-am-translate="fm.task11.workspace.text.11"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.11"]').text() : 'Test pixel grid 1';
      var gridName2 = $('[data-am-translate="fm.task11.workspace.text.12"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.12"]').text() : 'Test pixel grid 2';
      var gridName3 = $('[data-am-translate="fm.task11.workspace.text.19"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.19"]').text() : 'Test pixel grid 3';
      var gridName4 = $('[data-am-translate="fm.task11.workspace.text.20"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.20"]').text() : 'Test pixel grid 4';
      var sam = $('[data-am-translate="fm.task09.workspace.text.sam"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.sam"]').text() : '([Sam])';
      var alice = $('[data-am-translate="fm.task09.workspace.text.alice"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.alice"]').text() : '([Alice])';
      var nick = $('[data-am-translate="fm.task09.workspace.text.nick"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.nick"]').text() : '([Nick])';

      if ($(".fingerprint.task-07").length > 0 ) {
         var text8 = $('[data-am-translate="fm.task07.workspace.text.8"]').length > 0 ? $('[data-am-translate="fm.task07.workspace.text.8"]').text() : 'T';
         var text9 = $('[data-am-translate="fm.task07.workspace.text.9"]').length > 0 ? $('[data-am-translate="fm.task07.workspace.text.9"]').text() : 'F';
         var text10 = '0';

      } else {
         var text8 = $('[data-am-translate="fm.task11.workspace.text.8"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.8"]').text() : 'T';
         var text9 = $('[data-am-translate="fm.task11.workspace.text.9"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.9"]').text() : 'F';
         var text10 = $('[data-am-translate="fm.task11.workspace.text.10"]').length > 0 ? $('[data-am-translate="fm.task11.workspace.text.10"]').text() : '0';
      }

      Sonet.am.scorm.FINGERPRINT_T11.text_true = text8;
      Sonet.am.scorm.FINGERPRINT_T11.text_false = text9;
      if($(".fingerprint.task-07").length > 0){
         me.drawGrid(this.trueImage,'true-grid');
         me.selectedImage =me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage3;
         me.drawGrid(me.selectedImage,'test-grid-2');
         me.selectedImage =me.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;
         me.drawGrid(me.selectedImage,'test-grid-1');
      }else{
         me.drawGrid(Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage,'true-grid');
         me.drawGrid(me.selectedImage);
         $('#grid-name').text(gridName2);
         $('#grid-user').text(sam);
      }
      
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
         if (!$(this).hasClass('disabled')) {
            $('.cmp-r img').removeClass('highlight');
            $(this).find('img').addClass('highlight');

            if($(this).hasClass('row-1')) {
               me.selectedImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;
               $('#grid-name').text(gridName1);
               $('#grid-user').text(sam);
            } else if($(this).hasClass('row-2')) {
               me.selectedImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage2;
               $('#grid-name').text(gridName2);
               $('#grid-user').text(sam);
            } if($(this).hasClass('row-3')) {
               me.selectedImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage3;
               $('#grid-name').text(gridName3);
               $('#grid-user').text(alice);
            } if($(this).hasClass('row-4')) {
               me.selectedImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage4;
               $('#grid-name').text(gridName4);
               $('#grid-user').text(nick);
            }

            me.drawGrid(me.selectedImage);
         }
      });
      this.loadXML = function () {
         /*
         * Creating the XML for toolbox and adding them to blockly.
         * Implementation for each custom block are defined in the defCustomBlocks. 
         */
        if ($(".fingerprint.task-07").length > 0 ) {
           var text8 = $('[data-am-translate="fm.task07.workspace.text.8"]').length > 0 ? $('[data-am-translate="fm.task07.workspace.text.8"]').text() : 'T';
           var text9 = $('[data-am-translate="fm.task07.workspace.text.9"]').length > 0 ? $('[data-am-translate="fm.task07.workspace.text.9"]').text() : 'F';
           var task = 'task07';
           var textMatch = $('[data-am-translate="fm.'+task+'.workspace.text.15"]').length > 0 ? $('[data-am-translate="fm.'+task+'.workspace.text.15"]').text() : 'Match';
           var textNoMatch = $('[data-am-translate="fm.'+task+'.workspace.text.16"]').length > 0 ? $('[data-am-translate="fm.'+task+'.workspace.text.16"]').text() : 'No Match';
           me.textBlockforEachPixel = $('[data-am-translate="fm.'+task+'.workspace.text.1"]').length > 0 ? $('[data-am-translate="fm.'+task+'.workspace.text.1"]').text() : 'for each pixel in grid and cell in table';
           this.toolboxXML = '<xml></xml>';
            this.initialWorkspaceXML = this.workspaceXML = '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">'+
               '<block type="block_for_each_pixel" id="block_for_each_pixel" x="63" y="38" movable="false" editable="false">'+
               '<statement name="EACH_PIXEL_STATEMENT">'+
                  '<block type="block_if_else" movable="false" editable="false">'+
                  '<value name="IF_CONDITION">'+
                     ' <block type="block_pixel_in" movable="false">'+
                     '<field name="TYPE_1">PIXEL</field>'+
                        '<field name="GRID_1">SECURITY_PIXEL_GRID</field>'+
                        '<field name="OPERATOR">=</field>'+
                        '<field name="TYPE_2">PIXEL</field>'+
                        ' <field name="GRID_2">TEST_PIXEL_GRID</field>'+
                        '</block>'+
                     ' </value>'+
                     ' <statement name="IF_STATEMENT">'+
                     '<block type="block_add_to" movable="false" editable="false">'+
                     '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
                        '<value name="INP_1">'+
                        ' <block type="block_T_F" movable="false">'+
                           '<field name="TURN_OPTIONS">T</field>'+
                           '</block>'+
                           '</value>'+
                        '</block>'+
                     '</statement>'+
                     '<statement name="ELSE_STATEMENT">'+
                     '<block type="block_add_to" movable="false" editable="false">'+
                     '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
                        '<value name="INP_1">'+
                        '<block type="block_T_F" movable="false">'+
                           '<field name="TURN_OPTIONS">F</field>'+
                           '</block>'+
                           '</value>'+
                        '</block>'+
                     '</statement>'+
                     '</block>'+
                  '</statement>'+
                  '<next>'+
                  '<block type="block_if_else" movable="false" editable="false">'+
                  '<value name="IF_CONDITION">'+
                     '<block type="block_count" movable="false" editable="false">'+
                        '<value name="COUNT">'+
                           '<block type="block_t_count" movable="false" editable="false"></block>'+
                        '</value>'+
                        '<value name="OPERATOR">'+
                           '<block type="block_operator_option" movable="false">'+
                              '<field name="DROPDOWN_OPTIONS">>=</field>'+
                           '</block>'+
                        '</value>'+
                        '<value name="COUNT_VALUE">'+
                           '<block type="block_count_number" movable="false" id="fp11_Tcount" editable="true">'+
                              '<field name="COUNT_NUMBER">'+this.fp11_TcountValue+'</field>'+
                           '</block>'+
                        '</value>'+
                     '</block>'+
                  '</value>'+
                  '<statement name="IF_STATEMENT">'+
                        '<block type="t07_block_print" movable="false">'+
                           '<field name="MATCH_OPTION">'+textMatch+'</field>'+
                        '</block>'+
                  '</statement>'+
                  '<statement name="ELSE_STATEMENT">'+
                        '<block type="t07_block_print" movable="false">'+
                           '<field name="MATCH_OPTION">'+textNoMatch+'</field>'+
                        '</block>'+
                     '</statement>'+
                  '</block>'+
                     '</next>'+
               '</block>'+         
            '</xml>';
            blockArray= ['block_for_each_pixel','block_if_else','block_pixel_in','block_add_to','block_T_F','block_count','block_t_count','block_operator_option','block_count_number','t07_block_print'];
         } else {
            this.toolboxXML = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
            this.initialWorkspaceXML = this.workspaceXML = '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">'+
               '<block type="block_for_each_pixel" x="63" y="38" movable="false" editable="false">'+
               '<statement name="EACH_PIXEL_STATEMENT">'+
               '<block type="block_if_else" movable="false" editable="false">'+
               '<value name="IF_CONDITION">'+
                  ' <block type="block_pixel_in" movable="false" editable="false">'+
                     '<field name="TYPE_1">PIXEL</field>'+
                     '<field name="GRID_1">SECURITY_PIXEL_GRID</field>'+
                     '<field name="OPERATOR">=</field>'+
                     '<field name="TYPE_2">PIXEL</field>'+
                     ' <field name="GRID_2">TEST_PIXEL_GRID</field>'+
                     '</block>'+
                     ' </value>'+
                  ' <statement name="IF_STATEMENT">'+
                  '<block type="block_add_to" movable="false" editable="false">'+
                     '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
                     '<value name="INP_1">'+
                     ' <block type="block_T" movable="false" editable="false">'+
                        '<field name="TURN_OPTIONS">' + text8 + '</field>'+
                           '</block>'+
                        '</value>'+
                     '</block>'+
                     '</statement>'+
                  '<statement name="ELSE_STATEMENT">'+
                  '<block type="block_add_to" movable="false" editable="false">'+
                     '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
                     '<value name="INP_1">'+
                     '<block type="block_F" movable="false" editable="false">'+
                        '<field name="TURN_OPTIONS">' + text9 + '</field>'+
                           '</block>'+
                        '</value>'+
                     '</block>'+
                     '</statement>'+
                  '</block>'+
               '</statement>'+
                  '<next>'+
                  '<block type="block_if_else" movable="false" editable="false">'+
                  '<value name="IF_CONDITION">'+
                  '<block type="block_count" movable="false" editable="false">'+
                        '<value name="COUNT">'+
                           '<block type="block_t_count" movable="false" editable="false"></block>'+
                        '</value>'+
                        '<value name="OPERATOR">'+
                           '<block type="block_operator" movable="false" editable="false"></block>'+
                        '</value>'+
                        '<value name="COUNT_VALUE">'+
                           `${$('#task').attr('data-itemid') == 'fp12' ?
                           '<block type="block_count_number" movable="false" id="fp11_Tcount" editable="false">'
                           :
                           '<block type="block_count_number" movable="false" id="fp11_Tcount" editable="true">'
                           }`+
                              '<field name="COUNT_NUMBER">'+this.fp11_TcountValue+'</field>'+
                           '</block>'+
                        '</value>'+
                     '</block>'+
                  '</value>'+
                  '<statement name="IF_STATEMENT">'+
                     '<block type="block_print" movable="false" editable="false">'+
                        '<value name="MATCH">'+
                           '<block type="block_match" movable="false" editable="false"></block>'+
                        '</value>'+
                        '<value name="LOCK">'+
                           '<block type="block_unlock" movable="false" editable="false"></block>'+
                        '</value>'+
                     '</block>'+
                  '</statement>'+
                  '<statement name="ELSE_STATEMENT">'+
                  '<block type="block_print" movable="false" editable="false">'+
                     '<value name="MATCH">'+
                     '<block type="block_no_match" movable="false" editable="false"></block>'+
                  '</value>'+
                  '<value name="LOCK">'+
                     '<block type="block_scan" movable="false" editable="false"></block>'+
                  '</value>'+
                     '</block>'+
                  '</statement>'+
                  '</block>'+
                  '</next>'+
            '</block>'+         
            '</xml>';
            blockArray= ['block_for_each_pixel','block_if_else','block_pixel_in','block_add_to','block_T','block_F','block_0','block_count','block_t_count','block_operator','block_count_number','block_print','block_match','block_no_match','block_unlock','block_scan'];
         }
         this.loadBlockly = function(){
            $.each(blockArray, function( index, value ) {
               Sonet.am.scorm.GOOGLE_BLOCKLY.defineCustomBlock(value);
            });
            Sonet.am.scorm.GOOGLE_BLOCKLY.resetOutput = me.resetOutput;
            Sonet.am.scorm.GOOGLE_BLOCKLY.initBlockly(this.toolboxXML, this.workspaceXML, this.initialWorkspaceXML); 
         }
         me.loadBlockly();
      }

      me.loadXML();
   },   

   getInitialCode: function () {
      var me = this;
      var initCode = '';     
      initCode = 'var trueImage = [' + Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage + '];';
      initCode += 'var selectedImage = [' + Sonet.am.scorm.FINGERPRINT_T11.selectedImage + '];';
      initCode += 'var pixelComparisonGrid = [];';
      initCode += 'var t_count = 0,i = 0, total_pixel = '+ me.totalBlockCount +';\n';
      return initCode;
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
      var text8 = Sonet.am.scorm.FINGERPRINT_T11.text_true;
      var text9 = Sonet.am.scorm.FINGERPRINT_T11.text_false;
      var className,id = 0 ;

      if(index == 0) {
         Sonet.am.scorm.FINGERPRINT_T11.t_count = 0;
         Sonet.am.scorm.FINGERPRINT_T11.f_count = 0;
         Sonet.am.scorm.FINGERPRINT_T11.drawComparisonGrid();      
      }
      if($(".fingerprint.task-07").length > 0){
         Sonet.am.scorm.FINGERPRINT_T11.text_true = text8;
         Sonet.am.scorm.FINGERPRINT_T11.text_false = text9;
         }
      if(printArr[index] == Sonet.am.scorm.FINGERPRINT_T11.text_true) {
         Sonet.am.scorm.FINGERPRINT_T11.t_count++;
         className = 'true';
      } else if(printArr[index] == Sonet.am.scorm.FINGERPRINT_T11.text_false) {
         Sonet.am.scorm.FINGERPRINT_T11.f_count++;
         className = 'false';
      }
      Sonet.am.scorm.FINGERPRINT_T11.tmpGrid = printArr;
      $('#t_count').text(Sonet.am.scorm.FINGERPRINT_T11.t_count);
      $('#f_count').text(Sonet.am.scorm.FINGERPRINT_T11.f_count);
      $('.comparison-grid-block-wrapper td#'+(index)).html(printArr[index]).removeClass('true false').addClass(className);
      Sonet.am.scorm.FINGERPRINT_T11.highlightCell(index);
   },

   highlightCell:function(index) {
      $('#fm-true-grid td').removeClass('highlight');
      $('#fm-true-grid #cell-'+(index+1)).addClass('highlight');

      $('#fm-selected-grid td').removeClass('highlight');
      $('#fm-selected-grid #cell-'+(index+1)).addClass('highlight');      

      $('.fm-selected-grid td').removeClass('highlight');
      $('.fm-selected-grid #cell-'+(index+1)).addClass('highlight');     
   },

   printOutput:function (text1,text2) {
      var textMatch = $('[data-am-translate="fm.task07.workspace.text.15"]').length > 0 ? $('[data-am-translate="fm.task07.workspace.text.15"]').text() : 'Match';
      var textNomatch = $('[data-am-translate="fm.task07.workspace.text.16"]').length > 0 ? $('[data-am-translate="fm.task07.workspace.text.16"]').text() : 'No Match';
      var me =this;
      var html ='<span>'+ text1 +'</span>';
      
      if(text2!=''){
         html +='<br/>';
         html +='<span>'+ text2 +'</span><br/>';
      }

      $('.output-wrapper').append(html);
      if($('.body_output_wrapper.security-grid.test-grid-1 .security-pixel-grid.highlight.disabled').length > 0){
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid1 = true;
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid2 = false;
      }
      if($('.body_output_wrapper.security-grid.test-grid-2 .security-pixel-grid.highlight.disabled').length >  0){
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid2 = true;
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid1 = false;
      }
         
      if(Sonet.am.scorm.FINGERPRINT_T11.PixelGrid1){
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid2 = false;
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid1 = false;

         let tCount = $('#t_count').text();
         let fCount = $('#f_count').text();
         let output = $('.output-wrapper').text();
         if(text1 == textMatch){
            output ='true'
         }    
         if(text1 == textNomatch){
            output ='false'
         } 
         Sonet.am.scorm.FINGERPRINT_T11.saveDataArrayGrid1(tCount,fCount,output);
      }
      if(Sonet.am.scorm.FINGERPRINT_T11.PixelGrid2){
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid1 = false;
         Sonet.am.scorm.FINGERPRINT_T11.PixelGrid2 = false;
         
         let tCount = $('#t_count').text();
         let fCount = $('#f_count').text();
         let output = $('.output-wrapper').text();
         if(text1 == textMatch){
            output ='true'
         }    
         if(text1 == textNomatch){
            output ='false'
         } 
        
         Sonet.am.scorm.FINGERPRINT_T11.saveDataArrayGrid2(tCount,fCount,output);
      }
   },
   saveDataArrayGrid1:function(tCount,fCount,output){

      var tCountIndex1 = Sonet.am.scorm.FINGERPRINT_T11.T7PG1TCount[0] == 'null' ? true:false;
      var fCountIndex1 = Sonet.am.scorm.FINGERPRINT_T11.T7PG1FCount[0] == 'null' ? true:false;
      var outputIndex1 = Sonet.am.scorm.FINGERPRINT_T11.T7PG1Output[0] == 'null' ? true:false;
      var tCompareIndex1 = Sonet.am.scorm.FINGERPRINT_T11.T7PG1Tcompare[0] == 'null' ? true:false;

      if(tCountIndex1){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG1TCount.pop();
      }
      if(fCountIndex1){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG1FCount.pop();
      }
      if(outputIndex1){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG1Output.pop();
      }
      if(tCompareIndex1){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG1Tcompare.pop();
      }

      Sonet.am.scorm.FINGERPRINT_T11.T7PG1TCount.push(tCount);
      Sonet.am.scorm.FINGERPRINT_T11.T7PG1FCount.push(fCount);
      Sonet.am.scorm.FINGERPRINT_T11.T7PG1Output.push(output);
      Sonet.am.scorm.FINGERPRINT_T11.T7PG1Tcompare.push(Sonet.am.scorm.FINGERPRINT_T11.fp11_TcountValue);
   },
   saveDataArrayGrid2:function(tCount,fCount,output){
      var tCountIndex2 = Sonet.am.scorm.FINGERPRINT_T11.T7PG2TCount[0] == 'null' ? true:false;
      var fCountIndex2 = Sonet.am.scorm.FINGERPRINT_T11.T7PG2FCount[0] == 'null' ? true:false;
      var outputIndex2 = Sonet.am.scorm.FINGERPRINT_T11.T7PG2Output[0] == 'null' ? true:false;
      var tCompareIndex2 = Sonet.am.scorm.FINGERPRINT_T11.T7PG2Tcompare[0] == 'null' ? true:false;

      if(tCountIndex2){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG2TCount.pop();
      }
      if(fCountIndex2){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG2FCount.pop();
      }
      if(outputIndex2){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG2Output.pop();
      }
      if(tCompareIndex2){
         Sonet.am.scorm.FINGERPRINT_T11.T7PG2Tcompare.pop();
      }

      Sonet.am.scorm.FINGERPRINT_T11.T7PG2TCount.push(tCount);
      Sonet.am.scorm.FINGERPRINT_T11.T7PG2FCount.push(fCount);
      Sonet.am.scorm.FINGERPRINT_T11.T7PG2Output.push(output);
      Sonet.am.scorm.FINGERPRINT_T11.T7PG2Tcompare.push(Sonet.am.scorm.FINGERPRINT_T11.fp11_TcountValue);
   },
   highlightCell:function(index) {
      $('#fm-true-grid td').removeClass('highlight');
      $('#fm-true-grid #cell-'+(index+1)).addClass('highlight');

      $('#fm-selected-grid td').removeClass('highlight');
      $('#fm-selected-grid #cell-'+(index+1)).addClass('highlight');   
   },

   resetOutput: function () {
      $(".comparison-grid-block-wrapper").empty();
      $('#t_count').empty();
      $('#f_count').empty();

      if($(".fingerprint.task-07").length > 0){
         $('td').removeClass('highlight');
         if ($('#fm-test-grid-2').hasClass('fm-selected-grid')) {
            $( "#fm-test-grid-2" ).click();
         }else{         
            $( "#fm-test-grid-1" ).click();
         }
         $('.output-wrapper').empty();
         $('#fm-test-grid-2').removeClass('highlight').removeClass('fm-selected-grid');
         $('#fm-test-grid-1').addClass('highlight').addClass('fm-selected-grid');
         Sonet.am.scorm.FINGERPRINT_T11.selectedImage = Sonet.am.scorm.FINGERPRINT_T11.lastSelectedTestImage = Sonet.am.scorm.ICILS2023MS_Fingerprint.testImage1;
      }
   },
   updateInstruction : function(data){
      $('#fp11val').text(data)
   },
   getContent: function (params) {
      var me = this;
      var data = {output : {}}
      data['taskId'] = $('#task').attr('data-itemid');
      data['output']['print'] = $('.output-wrapper').html();
      data['output']['grid'] = $('.comparison-grid-block-wrapper').html();
      data['output']['count'] = $('.result_count').html();

      return data
   },

   loadContent: function (data) {
      var me = this;
         me.loadXML();
         // me.loadBlockly();
         me.updateInstruction(this.fp11_TcountValue);

         if (!!data && !!data['output']) {
            if(data.taskId == $('#task').attr('data-itemid')){
               $('.output-wrapper').html(data.output.print);
               $('.comparison-grid-block-wrapper').html(data.output.grid)
               $('.result_count').html(data.output.count);
            }
         }
   },

   // to load the content on page refresh or reload 
   loadResults: function () {
      var me = this,
         id = $('#task').attr('data-itemid');
         scormApi = Sonet.am.scorm.ScormWrapper,
         content = scormApi.getInteraction(id, true);

      if(id == 'fp07'){
         store = scormApi.getDataStore('data', true) || {};
         try {
            content = store.fp07_data
            if(!!content){
               // this.fp11_TcountValue = content
               me.loadContent(content)
            }
         } catch (e){
            var pass = e;
         }
      }
      // if (content) {
         // me.loadContent(JSON.parse(content));
      // }
   },
   getPixelTPG1Count:function(){      
      let TPG1 = {};
      TPG1["T_count"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG1TCount;
      TPG1["F_count"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG1FCount;
      TPG1["T_count_Comparison"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG1Tcompare;
      TPG1["Output"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG1Output;

      return TPG1;
   },
   getPixelTPG2Count:function(){      
      let TPG2 = {};
      TPG2["T_count"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG2TCount;
      TPG2["F_count"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG2FCount;
      TPG2["T_count_Comparison"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG2Tcompare;
      TPG2["Output"]=Sonet.am.scorm.FINGERPRINT_T11.T7PG2Output;

      return TPG2;
   },
    getGridPixelCount : function(){
       var me = this;
      let output = {
         TPG1 :me.getPixelTPG1Count(),
         TPG2 :me.getPixelTPG2Count()
      }
         return output;
    },
    getBLocklyXML: function (){
      let workspace = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
      return Blockly.Xml.domToText(workspace)
   },
   saveEventResponses: function (id) {
      var me = this;
      let eventTracker = Sonet.am.widgets.eventTracker
      // eventData = {},
      saveEvents = false
      if(id === 'fp07'){
         saveEvents = true         
         // eventData.TPG1 = me.getPixelTPG1Count();
         // eventData.TPG2 = me.getPixelTPG2Count();
         dataResultToSave= {
            Workspace:me.getBLocklyXML(),
            commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
            output: me.getGridPixelCount()
        } 
        Sonet.am.scorm.ICILS2023MS.eventDataRecording("RunProgram", null,dataResultToSave); 
      }
      // if (saveEvents) eventTracker.saveData(eventData)
      },
   // to save the result in the database
   saveResults: function () {
      var me = this,
         id = $('#task').attr('data-itemid'),
         content = JSON.stringify(me.getContent()),
         scormApi = Sonet.am.scorm.ScormWrapper,
         pos = scormApi.getInteractionPos(me.id);
         me.saveEventResponses(id);
      
      if (id == 'fp07' ) {
         store = scormApi.getDataStore('data', true) || {};
         store['fp07_data'] = me.getContent();
         scormApi.setDataStore('data', store);
      }
   }
}