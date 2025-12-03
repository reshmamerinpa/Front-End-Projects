$(function() {
   Sonet.am.scorm.ItemManager.register({
      cls: 'fingerprint-t10',
      obj: 'FINGERPRINT_T10',
      type: 'scorm'
   });
      
   //Loading files blockly and interpreter
   Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.blockly.js, 'js', 'blocklyjs');
   Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.interpreter.js, 'js', 'interpreterjs');
 
});

Sonet.am.scorm.FINGERPRINT_T10 = {
   id: 'fingerprint-task10',
   blockArray:['block_for_each_pixel','block_if_else','block_pixel_in','block_add_to','block_T','block_F','block_0','block_count','block_t_count','block_operator','block_count_number','block_print','block_match','block_no_match','block_unlock','block_scan'],
   toolboxXML: '',
   workspaceXML: '',
   initialWorkspaceXML:'',
   selectedImage: [1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0],
   pixelComparisonGrid:[],
   t_count : 0,
   f_count : 0,
   totalBlockCount:64,
   tmpGrid:[],
   
   init: function (editMode) {
      console.log("t10");
      var me = this;      
      var gridName1 = $('[data-am-translate="fm.task10.workspace.text.11"]').length > 0 ? $('[data-am-translate="fm.task10.workspace.text.11"]').text() : 'Test pixel grid 1 ([Sam])';
      var gridName2 = $('[data-am-translate="fm.task10.workspace.text.12"]').length > 0 ? $('[data-am-translate="fm.task10.workspace.text.12"]').text() : 'Test pixel grid 2 ([Sam])';
      var gridName3 = $('[data-am-translate="fm.task10.workspace.text.13"]').length > 0 ? $('[data-am-translate="fm.task10.workspace.text.13"]').text() : 'Test pixel grid 3 ([Alice])';
      var gridName4 = $('[data-am-translate="fm.task10.workspace.text.14"]').length > 0 ? $('[data-am-translate="fm.task10.workspace.text.14"]').text() : 'Test pixel grid 4 ([Nick])';
      var sam = $('[data-am-translate="fm.task09.workspace.text.sam"]').length > 0 ? $('[data-am-translate="fm.task09.workspace.text.sam"]').text() : '([Sam])'
      
      me.drawGrid(Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage,'true-grid');
      me.drawGrid(me.selectedImage);
      $('#grid-name').text(gridName2);
      $('#grid-user').text(sam);
      /*
      * Creating the XML for toolbox and adding them to blockly.
      * Implementation for each custom block are defined in the defCustomBlocks. 
      */
      this.toolboxXML = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';

      /*
      * Creating the workspace and adding it to blockly.
      */
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
                      '<field name="TURN_OPTIONS">T</field>'+
                        '</block>'+
                      '</value>'+
                    '</block>'+
                  '</statement>'+
                '<statement name="ELSE_STATEMENT">'+
                '<block type="block_add_to" movable="false" editable="false">'+
                  '<field name="TABLE">PIXEL_COMPARISON_TABLE</field>'+
                    '<value name="INP_1">'+
                    '<block type="block_F" movable="false" editable="false">'+
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
                        '<block type="block_operator" movable="false" editable="false"></block>'+
                     '</value>'+
                     '<value name="COUNT_VALUE">'+
                        '<block type="block_count_number" movable="false" editable="false"></block>'+
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

         $.each(me.blockArray, function( index, value ) {
            Sonet.am.scorm.GOOGLE_BLOCKLY.defineCustomBlock(value);
         });
         Sonet.am.scorm.GOOGLE_BLOCKLY.resetOutput = me.resetOutput;
         Sonet.am.scorm.GOOGLE_BLOCKLY.initBlockly(this.toolboxXML, this.workspaceXML, this.initialWorkspaceXML);     
   },   

   getInitialCode: function () {
      var me = this;
      var initCode = '';     
      initCode = 'var trueImage = [' + Sonet.am.scorm.ICILS2023MS_Fingerprint.trueImage + '];';
      initCode += 'var selectedImage = [' + Sonet.am.scorm.FINGERPRINT_T10.selectedImage + '];';
      initCode += 'var pixelComparisonGrid = [];';
      initCode += 'var t_count = 0,i = 0, total_pixel = '+ me.totalBlockCount +';\n';

      return initCode;
   },

   drawGrid: function (selectedGrid,grid = null) {
      var index = 0, html;

      if(grid == 'true-grid') {
         html = '<table id="fm-'+grid+'" class="security-pixel-grid grid-1">';
      } else {
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

      if(grid == 'true-grid') {
         $('.'+grid).append(html);
      } else {
         $(".selected-grid").empty();
         $(".selected-grid").append(html);
      }

   },

   printOutput:function (text1,text2) {
      var html ='<span>'+ text1 +'</span>';
         html +='<br/>';
         html +='<span>'+ text2 +'</span><br/>';

      $('.output-wrapper').append(html);
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
      var className,id = 0 ;

      if(index == 0) {
         Sonet.am.scorm.FINGERPRINT_T10.t_count = 0;
         Sonet.am.scorm.FINGERPRINT_T10.f_count = 0;
         Sonet.am.scorm.FINGERPRINT_T10.drawComparisonGrid();      
      }

      if (index == (Sonet.am.scorm.FINGERPRINT_T10.totalBlockCount - 1) && Sonet.am.scorm.FINGERPRINT_T10.tmpGrid[index] !== undefined) {
         if (Sonet.am.scorm.FINGERPRINT_T10.tmpGrid[index] == 'T') {
            Sonet.am.scorm.FINGERPRINT_T10.t_count--;
         } else if (Sonet.am.scorm.FINGERPRINT_T10.tmpGrid[index] == 'F') {
            Sonet.am.scorm.FINGERPRINT_T10.f_count--;
         }
      }
      
      if(printArr[index] == 'T') {
         Sonet.am.scorm.FINGERPRINT_T10.t_count++;
         className = 'true';
      } else if(printArr[index]== 'F') {
         Sonet.am.scorm.FINGERPRINT_T10.f_count++;
         className = 'false';
      }
      
      Sonet.am.scorm.FINGERPRINT_T09.tmpGrid = printArr;
      $('#t_count').text(Sonet.am.scorm.FINGERPRINT_T10.t_count);
      $('#f_count').text(Sonet.am.scorm.FINGERPRINT_T10.f_count);
      
      
      $('.comparison-grid-block-wrapper td#'+(index)).html(printArr[index]).removeClass('true false').addClass(className);
      Sonet.am.scorm.FINGERPRINT_T10.highlightCell(index);
   },

   highlightCell:function(index) {
      $('#fm-true-grid td').removeClass('highlight');
      $('#fm-true-grid #cell-'+(index+1)).addClass('highlight');

      $('#fm-selected-grid td').removeClass('highlight');
      $('#fm-selected-grid #cell-'+(index+1)).addClass('highlight');      

      $('.fm-selected-grid td').removeClass('highlight');
      $('.fm-selected-grid #cell-'+(index+1)).addClass('highlight');     
   },

   resetOutput: function () {
      $(".comparison-grid-block-wrapper").empty();
      $('#t_count').empty();
      $('#f_count').empty();
   },

   loadContent: function (data) {
      var me = this;

      if (data) {
         
      }
   },

   // to load the content on page refresh or reload 
   loadResults: function () {
      var me = this,
         scormApi = Sonet.am.scorm.ScormWrapper,
         content = scormApi.getInteraction(me.id, true);

      if (content) {
         me.loadContent(JSON.parse(content));
      }
},

   // to save the result in the database
   saveResults: function () {
      var me = this,
         content = JSON.stringify(Sonet.am.scorm.GOOGLE_BLOCKLY.getContent()),
         scormApi = Sonet.am.scorm.ScormWrapper,
         pos = scormApi.getInteractionPos(me.id);

      scormApi.setValue('cmi.interactions.' + pos + '.id', me.id);
      scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
      scormApi.setValue('cmi.interactions.' + pos + '.learner_response', content);
   }
}