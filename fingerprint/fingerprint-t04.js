$(function() {
   Sonet.am.scorm.ItemManager.register({
      cls: 'fingerprint-t04',
      obj: 'FINGERPRINT_T04',
      type: 'scorm'
   });

   if ($(".fingerprint").is('.task-04')) {     
      //Loading files blockly and interpreter
      Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.blockly.js, 'js', 'blocklyjs');
      Sonet.am.App.loadjscssfile(Sonet.am.App.filePath.interpreter.js, 'js', 'interpreterjs');
   }
});

// Fingerprint Task 04, 05 and 06
Sonet.am.scorm.FINGERPRINT_T04 = {
   id: 'fingerprint-task4',
   defaultPlayer: 1,
   securityBlackCount: 0,
   securityWhiteCount: 0,
   testBlackCount: 0,
   testWhiteCount: 0,
   conditionVal: null,
   testGridPixelCount: "false",
   securityGridPixelCount: "false",
   t3ActiveGrid:null,
   matchNomatchG1:['null'],
   matchNomatchG2:['null'],
   textBlockforwhiteCountT03Security:'',
   textBlockforwhiteCountT03Test:'',
   textBlockforwhiteCountT04Security: '',
   textBlockforwhiteCountT04Test: '',
   textBlockforblackCountSecurity:'',
   textBlockforblackCountTest:'',
   SGBlackCount:'null',
   SGWhiteCount:'null',

   isWorkspaceChanged: false,
   currentWorkSpace: null,

   init: function (editMode) {
      console.log("t04")
      var me = this;
      var self = this;
      var $blocklyAppDiv = $('#blocklyApp');
      var $qtiBuilderWindow = $('.edit-mode:not(.translation-mode)');

      $('.ls-text-1 u').on('click', function () {
         $('.tooltip-1').toggleClass( "hover" )
      });

     

      //Removing the extra space added 
      $blocklyAppDiv.html(function (i, h) {
         return h.replace(/&nbsp;/g, '');
      });

      if ($blocklyAppDiv.length && !($qtiBuilderWindow.length)) {

         if ($(".fingerprint").hasClass('task-04')) {
            me.textBlockforwhiteCountT03Security = $('[data-am-translate="fm.task03.workspace.text.20"]').length > 0 ? $('[data-am-translate="fm.task03.workspace.text.20"]').text() : 'count of white pixels in security grid'; 
            me.textBlockforwhiteCountT03Test = $('[data-am-translate="fm.task03.workspace.text.21"]').length > 0 ? $('[data-am-translate="fm.task03.workspace.text.21"]').text() : 'count of white pixels in test grid';
            me.textBlockforblackCountSecurity = $('[data-am-translate="fpm.task03.workspace.text.9"]').length > 0 ? $('[data-am-translate="fpm.task03.workspace.text.9"]').text() : 'count of black pixels in security grid';
            me.textBlockforwhiteCountT04Security = $('[data-am-translate="fm.task03.workspace.text.17"]').length > 0 ? $('[data-am-translate="fm.task03.workspace.text.17"]').text() : 'count of white pixels in security grid'; 
            me.textBlockforblackCountTest = $('[data-am-translate="fpm.task03.workspace.text.10"]').length > 0 ? $('[data-am-translate="fpm.task03.workspace.text.10"]').text() : 'count of black pixels in test grid';
            me.textBlockforwhiteCountT04Test = $('[data-am-translate="fm.task03.workspace.text.18"]').length > 0 ? $('[data-am-translate="fm.task03.workspace.text.18"]').text() : 'count of white pixels in security grid'; 

            if($(".fingerprint.task-02").length > 0) {
               this.toolboxXML = '<xml></xml>';

               this.initialWorkspaceXML = this.workspaceXML = 
               `
                  <xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
                     <block type="t02_for_each_block" id="t02_for_each_block" movable="false" deletable="false">
                        <statement name="INPUT">
                           <block type="t02_if_do_else" id="t02_if_do_else">
                              <value name="IF_CONDITION">
                                 <block type="t02_security_grid_comparison" id="t02_security_grid_comparison">
                                    <value name="LEFT_INPUT">
                                       <block type="t02_security_grid_count_type" id="t02_security_grid_count_type" movable="false" deletable="false" editable="false">
                                       <field name="TYPE">pixel</field>
                                       </block>
                                    </value>
                                    <value name="RIGHT_INPUT">
                                       <block type="t02_security_grid_color_type" id="t02_security_grid_color_type" movable="false" deletable="false" editable="true">
                                          <field name="TYPE">#000000</field>
                                       </block>
                                    </value>
                                 </block>
                              </value>
                              <statement name="IF_STATEMENT">
                                 <block type="t02_change_block" id="t02_change_block">
                                    <field name="LEFT_INPUT">SECURITY_GRID_BLACK_COUNT</field>
                                    <value name="RIGHT_INPUT">
                                       <block type="t02_security_grid_count" id="t02_security_grid_count" movable="false" deletable="false">
                                          <field name="COUNT">1</field>
                                       </block>
                                    </value>
                                    <next>
                                       <block type="t02_change_block" id="t02_change_block">
                                          <field name="LEFT_INPUT">SECURITY_GRID_WHITE_COUNT</field>
                                          <value name="RIGHT_INPUT">
                                             <block type="t02_security_grid_count" id="t02_security_grid_count" movable="false" deletable="false">
                                                <field name="COUNT">1</field>
                                             </block>
                                          </value>
                                       </block>
                                    </next>
                                 </block>
                              </statement>
                           </block>
                        </statement>
                        <next>
                           <block type="t02_print_text" id="t02_print_text">
                              <value name="INPUT1">
                                 <block type="t02_text_owner_name" id="t02_text_owner_name"></block>
                              </value>
                              <next>
                                 <block type="t02_print_text" id="t02_print_text">
                                    <value name="INPUT1">
                                       <block type="t02_text_count_black" id="t02_text_count_black"></block>
                                    </value>
                                    <next>
                                       <block type="t02_print_text" id="t02_print_text">
                                          <value name="INPUT1">
                                             <block type="t02_security_grid_variable" movable="false" deletable="false" id="t02_text_variable_black">
                                                <field name="SECURITY_GRID_VARIABLE">SECURITY_GRID_BLACK_COUNT</field>
                                             </block>
                                          </value>
                                          <next>
                                             <block type="t02_print_text" id="t02_print_text">
                                                <value name="INPUT1">
                                                   <block type="t02_text_count_white" id="t02_text_count_white"></block>
                                                </value>
                                                <next>
                                                   <block type="t02_print_text" id="t02_print_text">
                                                      <value name="INPUT1">
                                                         <block id="t02_text_variable_white" type="t02_security_grid_variable" movable="false" deletable="false">
                                                            <field name="SECURITY_GRID_VARIABLE">SECURITY_GRID_WHITE_COUNT</field>
                                                         </block>
                                                      </value>
                                                   </block>
                                                </next>
                                             </block>
                                          </next>
                                       </block>
                                    </next>
                                 </block>
                              </next>
                           </block>
                        </next>
                     </block>
                  </xml>
               `;
               
               blockArray = [
                  "t02_for_each_block",
                  "t02_if_do_else",
                  "t02_security_grid_pixel_count", 
                  "t02_security_grid_comparison", 
                  "t02_security_grid_count",
                  "t02_security_grid_count_type", 
                  "t02_security_grid_color_type", 
                  "t02_change_block", 
                  "t02_security_grid_variable",
                  "t02_print_text",
                  "t02_text_owner_name",
                  "t02_text_count_black",
                  "t02_text_variable_black",
                  "t02_text_count_white",
                  "t02_text_variable_white"
               ];
            } else if ($(".fingerprint.archived-task-03").length > 0) {                                                        
               
               this.toolboxXML =
               `
               <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">               
                  <block type="archived_t03_if_do_else"></block>
                  <block type="archived_t03_security_grid_comparison">
                     <value name="LEFT_INPUT">
                        <block type="archived_t03_security_grid_count_type" movable="false" deletable="false" editable="false">
                        <field name="TYPE">pixel</field>
                        </block>
                     </value>
                     <value name="RIGHT_INPUT">
                        <block type="archived_t03_security_grid_color_type" movable="false" deletable="false">
                        <field name="TYPE">black</field>
                        </block>
                     </value>
                  </block>
                  <block type="archived_t03_change_block">
                     <field name="LEFT_INPUT">SECURITY_GRID_BLACK_COUNT</field>
                     <value name="RIGHT_INPUT">
                        <block type="archived_t03_security_grid_count" movable="false" deletable="false">
                        <field name="COUNT">1</field>
                        </block>
                     </value>
                  </block>
                  <block type="archived_t03_change_block">
                     <field name="LEFT_INPUT">SECURITY_GRID_WHITE_COUNT</field>
                     <value name="RIGHT_INPUT">
                        <block type="archived_t03_security_grid_count" movable="false" deletable="false">
                        <field name="COUNT">1</field>
                        </block>
                     </value>
                  </block>
                  <block type="archived_t03_print_text"></block>
                  <block type="archived_t03_text_owner_name"></block>
                  <block type="archived_t03_text_count_black"></block>
                  <block type="archived_t03_security_grid_variable" movable="false" deletable="false">
                     <field name="SECURITY_GRID_VARIABLE">SECURITY_GRID_BLACK_COUNT</field>
                  </block>
                  <block type="archived_t03_text_count_white"></block>
                  <block type="archived_t03_security_grid_variable" movable="false" deletable="false">
                     <field name="SECURITY_GRID_VARIABLE">SECURITY_GRID_WHITE_COUNT</field>
                  </block>
               </xml>
               `;

               this.initialWorkspaceXML = this.workspaceXML = 
               `
               <xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
                  <block type="archived_t03_define_block" id="31" x="38" y="63" movable="false" deletable="false">
                     <statement name="NAME">
                        <block type="archived_t03_for_each_block" id="archived_t03_for_each_block" movable="false" deletable="false">
                        <statement name="INPUT">
                           <block type="archived_t03_if_do_else" id="archived_t03_if_do_else">
                              <value name="IF_CONDITION">
                                 <block type="archived_t03_security_grid_comparison" id="archived_t03_security_grid_comparison">
                                    <value name="LEFT_INPUT">
                                       <block type="archived_t03_security_grid_count_type" id="archived_t03_security_grid_count_type" movable="false" deletable="false" editable="false">
                                       <field name="TYPE">pixel</field>
                                       </block>
                                    </value>
                                    <value name="RIGHT_INPUT">
                                       <block type="archived_t03_security_grid_color_type" id="archived_t03_security_grid_color_type" movable="false" deletable="false">
                                       <field name="TYPE">black</field>
                                       </block>
                                    </value>
                                 </block>
                              </value>
                              <statement name="IF_STATEMENT">
                              <block type="archived_t03_change_block" id="archived_t03_change_block">
                                 <field name="LEFT_INPUT">SECURITY_GRID_BLACK_COUNT</field>
                                 <value name="RIGHT_INPUT">
                                    <block type="archived_t03_security_grid_count" id="archived_t03_security_grid_count" movable="false" deletable="false">
                                    <field name="COUNT">1</field>
                                    </block>
                                 </value>
                                 <next>
                                    <block type="archived_t03_change_block" id="archived_t03_change_block">
                                    <field name="LEFT_INPUT">SECURITY_GRID_WHITE_COUNT</field>
                                    <value name="RIGHT_INPUT">
                                       <block type="archived_t03_security_grid_count" id="archived_t03_security_grid_count" movable="false" deletable="false">
                                          <field name="COUNT">1</field>
                                       </block>
                                    </value>
                                    </block>
                                 </next>
                              </block>
                              </statement>
                           </block>
                        </statement>
                        <next>
                           <block type="archived_t03_print_text" id="archived_t03_print_text">
                              <value name="INPUT1">
                              <block type="archived_t03_text_owner_name" id="archived_t03_text_owner_name"></block>
                              </value>
                              <next>
                              <block type="archived_t03_print_text" id="archived_t03_print_text">
                                 <value name="INPUT1">
                                    <block type="archived_t03_text_count_black" id="archived_t03_text_count_black"></block>
                                 </value>
                                 <value name="INPUT2">
                                    <block type="archived_t03_security_grid_variable" movable="false" deletable="false" id="archived_t03_text_variable_black">
                                       <field name="SECURITY_GRID_VARIABLE">SECURITY_GRID_BLACK_COUNT</field>
                                    </block>
                                 </value>
                                 <next>
                                    <block type="archived_t03_print_text" id="archived_t03_print_text">
                                    <value name="INPUT1">
                                       <block type="archived_t03_text_count_white" id="archived_t03_text_count_white"></block>
                                    </value>
                                    <value name="INPUT2">
                                       <block id="archived_t03_text_variable_white" type="archived_t03_security_grid_variable" movable="false" deletable="false">
                                       <field name="SECURITY_GRID_VARIABLE">SECURITY_GRID_WHITE_COUNT</field>
                                       </block>
                                    </value>
                                    </block>
                                 </next>
                              </block>
                              </next>
                           </block>
                        </next>
                        </block>
                     </statement>
                     <next>
                        <block type="archived_t03_security_grid_pixel_count" id="archived_t03_security_grid_pixel_count" movable="false" deletable="false"></block>
                     </next>
                  </block>
               </xml>
               `;
               
               blockArray = [
                  "archived_t03_define_block",
                  "archived_t03_for_each_block",
                  "archived_t03_if_do_else",
                  "archived_t03_security_grid_pixel_count", 
                  "archived_t03_security_grid_comparison", 
                  "archived_t03_security_grid_count",
                  "archived_t03_security_grid_count_type", 
                  "archived_t03_security_grid_color_type", 
                  "archived_t03_change_block", 
                  "archived_t03_security_grid_variable",
                  "archived_t03_print_text",
                  "archived_t03_text_owner_name",
                  "archived_t03_text_count_black",
                  "archived_t03_text_variable_black",
                  "archived_t03_text_count_white",
                  "archived_t03_text_variable_white"
               ];

            } else if ($(".fingerprint.task-04-only").length > 0) {  
               this.toolboxXML = '<xml></xml>';

               this.initialWorkspaceXML = this.workspaceXML = 
               `<xml xmlns="http://www.w3.org/1999/xhtml">
                  <variables>&#160;</variables>
                  <block type="t03_security_grid_black_count" id="t03_security_grid_black_count" x="37" y="37" movable="false" deletable="false" editable="false">
                     <field name="security_grid_black_count">security_grid_black_count</field>
                     <value name="NAME">
                        <block type="t03_security_grid_black_text" id="t03_security_grid_black_text" movable="false"></block>
                     </value>
                     <next>
                        <block type="t03_security_grid_white_count" id="t03_security_grid_white_count" movable="false" deletable="false" editable="false">
                           <field name="security_grid_white_count">security_grid_white_count</field> 
                           <value name="NAME">
                              <block type="t03_security_grid_white_text" id="t03_security_grid_white_text" movable="false"></block>
                           </value>
                           <next>
                              <block type="t03_test_grid_black_count" id="t03_test_grid_black_count" movable="false" deletable="false" editable="false">
                                 <field name="test_grid_black_count">test_grid_black_count</field> 
                                 <value name="NAME">
                                    <block type="t03_test_grid_black_text" id="t03_test_grid_black_text" movable="false"></block>
                                 </value>
                                 <next>
                                    <block type="t03_test_grid_white_count" id="t03_test_grid_white_count" movable="false" deletable="false" editable="false">
                                       <field name="test_grid_white_count">test_grid_white_count</field> 
                                       <value name="NAME">
                                          <block type="t03_test_grid_white_text" id="t03_test_grid_white_text" movable="false"></block>
                                       </value>
                                       <next>
                                          <block type="t03_if_if_do_else" id="t03_if_if_do_else" movable="false" deletable="false" editable="false">
                                             <value name="IF_CONDITION_1">
                                                <block type="t03_black_comparison" id="t03_black_comparison" movable="false" deletable="false" editable="false">
                                                   <value name="LEFT_INPUT">
                                                      <block type="t03_variable_grid_count_left_option" id="t03_variable_grid_count_left_option" movable="false" deletable="false" editable="false">
                                                         <field name="left_option">security_grid_black_count</field>
                                                      </block>
                                                   </value>
                                                   <value name="RIGHT_INPUT">
                                                      <block type="t03_variable_grid_count_right_option" id="t03_variable_grid_count_right_option" movable="false" deletable="false" editable="false">
                                                         <field name="right_option">test_grid_black_count</field>
                                                      </block>
                                                   </value>
                                                </block>
                                             </value>
                                             <value name="AND_IF">
                                                <block type="t03_and_if" id="t03_and_if" movable="false" deletable="false" editable="false">
                                                   <field name="and_or_condition">and</field>
                                                </block>
                                             </value>
                                             <value name="IF_CONDITION_2">
                                                <block type="t03_white_comparison" id="t03_white_comparison" movable="false" deletable="false" editable="false">
                                                   <value name="LEFT_INPUT">
                                                      <block type="t03_variable_grid_count_left_option" id="t03_variable_grid_count_left_option" movable="false" deletable="false" editable="false">
                                                         <field name="left_option">security_grid_white_count</field>
                                                      </block>
                                                   </value>
                                                   <value name="RIGHT_INPUT">
                                                      <block type="t03_variable_grid_count_right_option" id="t03_variable_grid_count_right_option" movable="false" deletable="false" editable="false">
                                                         <field name="right_option">test_grid_white_count</field>
                                                      </block>
                                                   </value>
                                                </block>
                                             </value>
                                             <statement name="DO_1">
                                                <block type="t06_print_text" id="t06_print_text" movable="false" deletable="false">
                                                   <value name="NAME">
                                                      <block type="t06_match" id="t06_match" movable="false" deletable="false"></block>
                                                   </value>
                                                </block>
                                             </statement>
                                             <statement name="DO_2">
                                                <block type="t06_print_text" id="t06_print_text" movable="false" deletable="false">
                                                   <value name="NAME">
                                                      <block type="t06_no_match" id="t06_no_match" movable="false" deletable="false"></block>
                                                   </value>
                                                </block>
                                             </statement>
                                          </block>
                                       </next>            
                                    </block>               
                                 </next>
                              </block>   
                           </next>
                        </block>
                     </next>
                  </block>
               </xml>`;

               blockArray = [
                  't03_security_grid_black_count', 
                  't03_security_grid_black_text' ,
                  't03_security_grid_white_count', 
                  't03_security_grid_white_text' ,
                  't03_test_grid_black_count', 
                  't03_test_grid_black_text', 
                  't03_test_grid_white_count', 
                  't03_test_grid_white_text', 
                  't03_variable_grid_count_left_option', 
                  't03_variable_grid_count_right_option', 
                  't03_black_comparison', 
                  't03_white_comparison',
                  't03_if_if_do_else',
                  't03_and_if',
                  't06_print_text', 't06_match', 
                  't06_no_match'
               ];

            } else if ($(".fingerprint.task-03").length > 0) {  
               this.toolboxXML = '<xml></xml>';

               this.initialWorkspaceXML = this.workspaceXML = 
               `<xml xmlns="http://www.w3.org/1999/xhtml">
                  <variables>&#160;</variables>
                  <block type="t03_security_grid_black_count" id="t03_security_grid_black_count" x="37" y="37" movable="false" deletable="false" editable="false">
                     <field name="security_grid_black_count">security_grid_black_count</field>
                     <value name="NAME">
                        <block type="t03_security_grid_black_text" id="t03_security_grid_black_text" movable="false"></block>
                     </value>
                     <next>
                        <block type="t03_security_grid_white_count" id="t03_security_grid_white_count" movable="false" deletable="false" editable="false">
                           <field name="security_grid_white_count">security_grid_white_count</field> 
                           <value name="NAME">
                              <block type="t03_security_grid_white_text" id="t03_security_grid_white_text" movable="false"></block>
                           </value>
                           <next>
                              <block type="t03_test_grid_black_count" id="t03_test_grid_black_count" movable="false" deletable="false" editable="false">
                                 <field name="test_grid_black_count">test_grid_black_count</field> 
                                 <value name="NAME">
                                    <block type="t03_test_grid_black_text" id="t03_test_grid_black_text" movable="false"></block>
                                 </value>
                                 <next>
                                    <block type="t03_test_grid_white_count" id="t03_test_grid_white_count" movable="false" deletable="false" editable="false">
                                       <field name="test_grid_white_count">test_grid_white_count</field> 
                                       <value name="NAME">
                                          <block type="t03_test_grid_white_text" id="t03_test_grid_white_text" movable="false"></block>
                                       </value>
                                       <next>
                                          <block type="t03_if_if_do_else" id="t03_if_if_do_else">
                                             <value name="IF_CONDITION_1">
                                                <block type="t03_black_comparison" id="t03_black_comparison" movable="false" deletable="false">
                                                   <value name="LEFT_INPUT">
                                                      <block type="t03_variable_grid_count_left_option" id="t03_variable_grid_count_left_option" movable="false" deletable="false">
                                                         <field name="left_option">test_grid_black_count</field>
                                                      </block>
                                                   </value>
                                                   <value name="RIGHT_INPUT">
                                                      <block type="t03_variable_grid_count_right_option" id="t03_variable_grid_count_right_option" movable="false" deletable="false">
                                                         <field name="right_option">test_grid_black_count</field>
                                                      </block>
                                                   </value>
                                                </block>
                                             </value>
                                             <value name="AND_IF">
                                                <block type="t03_and_if" id="t03_and_if" movable="false" deletable="false">
                                                   <field name="and_or_condition">and</field>
                                                </block>
                                             </value>
                                             <value name="IF_CONDITION_2">
                                                <block type="t03_white_comparison" id="t03_white_comparison" movable="false" deletable="false">
                                                   <value name="LEFT_INPUT">
                                                      <block type="t03_variable_grid_count_left_option" id="t03_variable_grid_count_left_option" movable="false" deletable="false">
                                                         <field name="left_option">test_grid_white_count</field>
                                                      </block>
                                                   </value>
                                                   <value name="RIGHT_INPUT">
                                                      <block type="t03_variable_grid_count_right_option" id="t03_variable_grid_count_right_option" movable="false" deletable="false">
                                                         <field name="right_option">test_grid_white_count</field>
                                                      </block>
                                                   </value>
                                                </block>
                                             </value>
                                             <statement name="DO_1">
                                                <block type="t06_print_text" id="t06_print_text">
                                                   <value name="NAME">
                                                      <block type="t06_match" id="t06_match"></block>
                                                   </value>
                                                </block>
                                             </statement>
                                             <statement name="DO_2">
                                                <block type="t06_print_text" id="t06_print_text">
                                                   <value name="NAME">
                                                      <block type="t06_no_match" id="t06_no_match"></block>
                                                   </value>
                                                </block>
                                             </statement>
                                          </block>
                                       </next>            
                                    </block>               
                                 </next>
                              </block>   
                           </next>
                        </block>
                     </next>
                  </block>
               </xml>`;

               blockArray = [
                  't03_security_grid_black_count', 
                  't03_security_grid_black_text' ,
                  't03_security_grid_white_count', 
                  't03_security_grid_white_text' ,
                  't03_test_grid_black_count', 
                  't03_test_grid_black_text', 
                  't03_test_grid_white_count', 
                  't03_test_grid_white_text', 
                  't03_variable_grid_count_left_option', 
                  't03_variable_grid_count_right_option', 
                  't03_black_comparison',
                  't03_and_if',
                  't03_white_comparison',
                  't03_if_if_do_else',
                  't06_print_text', 't06_match', 
                  't06_no_match'
               ];

            } else {

               /*
               * Creating the XML for toolbox and adding them to blockly.
               * Implementation for each custom block are defined in the defCustomBlocks. 
               */
                  this.toolboxXML = 
                  `<xml xmlns="http://www.w3.org/1999/xhtml">
                     <block type="if_if_do_else"></block>
                     <block type="t06_4_choices_options">
                        <field name="left_option">null</field>
                        <field name="right_option">null</field>
                        <field name="and_or_condition">and</field>
                     </block>
                     <block type="t06_3_choices_options">
                        <field name="left_option">null</field>
                        <field name="right_option">null</field>
                     </block>
                     <block type="t06_print_text"></block>
                     <block type="t06_match"></block>
                     <block type="t06_no_match"></block>
                  </xml>`;

               /*
                  * Creating the workspace and adding it to blockly.
                  */

               if ($(".fingerprint.task-04:not(.task-05)").length > 0) {
                  this.initialWorkspaceXML = this.workspaceXML = 
                     `<xml xmlns="http://www.w3.org/1999/xhtml">
                        <variables>&#160;</variables>
                        <block type="t06_security_grid_pixel_count" id="t06_security_grid_pixel_count" x="37" y="37">
                           <next>
                              <block type="t06_test_grid_pixel_count" id="t06_test_grid_pixel_count">
                              <next>
                                 <block type="if_if_do_else" id="if_if_do_else">
                                    <statement name="DO_1">
                                    <block type="t06_print_text" id="t06_print_text">
                                       <value name="NAME">
                                          <block type="t06_match" id="t06_match"></block>
                                       </value>
                                    </block>
                                    </statement>
                                    <statement name="DO_2">
                                    <block type="t06_print_text" id="t06_print_text">
                                       <value name="NAME">
                                          <block type="t06_no_match" id="t06_no_match"></block>
                                       </value>
                                    </block>
                                    </statement>
                                 </block>
                              </next>
                              </block>
                           </next>
                        </block>
                     </xml>`;
               } else if ($(".fingerprint").hasClass('task-05')) {
                  this.initialWorkspaceXML = this.workspaceXML = 
                  `<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
                     <block type="t06_security_grid_pixel_count" id="t06_security_grid_pixel_count" x="88" y="88" movable="false" deletable="false">
                        <next>
                           <block type="t06_test_grid_pixel_count" id="t06_test_grid_pixel_count" movable="false" deletable="false">
                           <next>
                              <block type="if_if_do_else" id="if_if_do_else" movable="false" deletable="false">
                                 <value name="IF_CONDITION_1">
                                 <block type="t06_4_choices_options" id="t06_4_choices_options" movable="false" deletable="false">
                                    <field name="left_option">test_grid_black_count</field>
                                    <field name="right_option">security_grid_black_count</field>
                                    <field name="and_or_condition">and</field>
                                 </block>
                                 </value>
                                 <value name="IF_CONDITION_2">
                                 <block type="t06_3_choices_options" id="t06_3_choices_options" movable="false" deletable="false">
                                    <field name="left_option">test_grid_white_count</field>
                                    <field name="right_option">security_grid_white_count</field>
                                 </block>
                                 </value>
                                 <statement name="DO_1">
                                 <block type="t06_print_text" id="t06_print_text" movable="false" deletable="false">
                                    <value name="NAME">
                                       <block type="t06_match" id="t06_match" movable="false" deletable="false"></block>
                                    </value>
                                    <next>
                                       <block type="t06_print_text" id="t06_print_text" movable="false" deletable="false">
                                       <value name="NAME">
                                          <block type="t05_computer_unlocked" id="t05_computer_unlocked" movable="false" deletable="false"></block>
                                       </value>
                                       </block>
                                    </next>
                                 </block>
                                 </statement>
                                 <statement name="DO_2">
                                 <block type="t06_print_text" id="t06_print_text" movable="false" deletable="false">
                                    <value name="NAME">
                                       <block type="t06_no_match" id="t06_no_match" movable="false" deletable="false"></block>
                                    </value>
                                    <next>
                                       <block type="t06_print_text" id="t06_print_text" movable="false" deletable="false">
                                       <value name="NAME">
                                          <block type="t05_rescan" id="t05_rescan" movable="false" deletable="false"></block>
                                       </value>
                                       </block>
                                    </next>
                                 </block>
                                 </statement>
                              </block>
                           </next>
                           </block>
                        </next>
                     </block>
                  </xml>`;
               }
               blockArray = ['t06_security_grid_pixel_count', 't06_test_grid_pixel_count', 't06_print_text', 't06_match', 't06_no_match', 't06_3_choices_options', 't06_4_choices_options', 'if_if_do_else', 't05_computer_unlocked', 't05_rescan']
            } 

            $.each(blockArray, function( index, value ) {
               Sonet.am.scorm.GOOGLE_BLOCKLY.defineCustomBlock(value);
            });

            // Initializing Blockly.
            Sonet.am.scorm.GOOGLE_BLOCKLY.resetOutput = me.resetOutput;
            Sonet.am.scorm.GOOGLE_BLOCKLY.initBlockly(this.toolboxXML, this.workspaceXML, this.initialWorkspaceXML);
            /* Commenting, since have done the global fix in google-blockly.js file
            // For Task )3 
            if($('.fingerprint.task-03:not(.task-04-only)').length > 0) {
               var dir = $('#view-mode').attr('dir') =='rtl' ? true :false;
               setTimeout(function() {

                  if(dir == false) {
                     $('g[data-id="t03_security_grid_black_text"] path.blocklyPathDark,g[data-id="t03_security_grid_black_text"] path.blocklyPath,g[data-id="t03_security_grid_black_text"] path.blocklyPathLight').css({'transform':'scaleX(1.15)'});
                     
                     $('g[data-id="t03_security_grid_white_text"] path.blocklyPathDark,g[data-id="t03_security_grid_white_text"] path.blocklyPath,g[data-id="t03_security_grid_white_text"] path.blocklyPathLight').css({'transform':'scaleX(1.15)'});

                     $('g[data-id="t03_test_grid_white_text"] path.blocklyPathDark,g[data-id="t03_test_grid_white_text"] path.blocklyPath,g[data-id="t03_test_grid_white_text"] path.blocklyPathLight').css({'transform':'scaleX(1.15)'});
                  }
                  
                  $("g[data-id='t03_security_grid_black_text'] text").text(''+me.textBlockforblackCountSecurity+'');
                  $("g[data-id='t03_security_grid_white_text'] text").text(''+me.textBlockforwhiteCountT03Security+'');
                  $("g[data-id='t03_test_grid_white_text'] text").text(''+me.textBlockforwhiteCountT03Test+'');
               }, 500);
            }
            // For Task 04
            if($('.fingerprint.task-04.task-04-only').length > 0) {
               var dir = $('#view-mode').attr('dir') =='rtl' ? true :false;
               setTimeout(function() {

                  if(dir == false) {
                     $('g[data-id="t03_security_grid_black_text"] path.blocklyPathDark,g[data-id="t03_security_grid_black_text"] path.blocklyPath,g[data-id="t03_security_grid_black_text"] path.blocklyPathLight').css({'transform':'scaleX(1.15)'});

                     $('g[data-id="t03_security_grid_white_text"] path.blocklyPathDark,g[data-id="t03_security_grid_white_text"] path.blocklyPath,g[data-id="t03_security_grid_white_text"] path.blocklyPathLight').css({'transform':'scaleX(1.15)'});
                  }
                  
                  $("g[data-id='t03_security_grid_black_text'] text").text(''+me.textBlockforblackCountSecurity+'');
                  $("g[data-id='t03_security_grid_white_text'] text").text(''+me.textBlockforwhiteCountT04Security+'');
               }, 500);
            }*/
         }
         
      }

      $('#btn-reset').click(function () {
         Sonet.am.scorm.FINGERPRINT_T04.testBlackCount = 0;
         Sonet.am.scorm.FINGERPRINT_T04.testWhiteCount = 0;
      });

      $('.task-03:not(.task-04-only) #fm-grid-02').click(function () {
         if (!$(this).hasClass('disabled')) {
            me.resetSelection();
            $(this).addClass('selected');
            $('table#fm-grid-02').addClass('active-table');
         }
      });

      $('.task-03:not(.task-04-only) #fm-grid-05').click(function () {
         if (!$(this).hasClass('disabled')) {
            me.resetSelection();
            $(this).addClass('selected');
            $('table#fm-grid-05').addClass('active-table');
         }
      });

      $('.row-1').click(function () {
         if (!$(this).hasClass('disabled')) {
            me.resetSelection();
            $(this).addClass('selected');
            $('table#fm-grid-02').addClass('active-table');
            $('#output-text-img-1.img-name').addClass('active-block');
            $('#output-text-grid-1.grid-name').addClass('active-block');
         }
      });

      $('.row-2').click(function () {
         if (!$(this).hasClass('disabled')) {
            me.resetSelection();
            $(this).addClass('selected');
            $('table#fm-grid-03').addClass('active-table');
            $('#output-text-img-2.img-name').addClass('active-block');
            $('#output-text-grid-2.grid-name').addClass('active-block');
         }
      });

      $('.row-3').click(function () {
         if (!$(this).hasClass('disabled')) {
            me.resetSelection();
            $(this).addClass('selected');
            $('table#fm-grid-04').addClass('active-table');
            $('#output-text-img-3.img-name').addClass('active-block');
            $('#output-text-grid-3.grid-name').addClass('active-block');
         }
      });

      $('.row-4').click(function () {
         if (!$(this).hasClass('disabled')) {
            me.resetSelection();
            $(this).addClass('selected');
            $('table#fm-grid-05').addClass('active-table');
            $('#output-text-img-4.img-name').addClass('active-block');
            $('#output-text-grid-4.grid-name').addClass('active-block');
         }
      });

      if ($(".fingerprint").hasClass('task-05')) {
         this.resetInitialPosition(180, -70);
      }


      if($(".fingerprint.task-04").hasClass('task-02-only') || $('#task').attr('data-itemid') == 'fpm03'){
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
      }

      // Sonet.am.scorm.GOOGLE_BLOCKLY.quickRunCode($('.g-blockly-target').data("object"),null);

   },

   resetTask3ScrollBar: function () {
      if ($(".fingerprint.archived-task-03").length > 0) {
         $(Sonet).on('am-load-complete', function () {
            $('.blocklyScrollbarVertical.blocklyFlyoutScrollbar').css('transform', 'translate(240px,2.5px)');
         });
      }
   },

   identifyBlockPixelColor: function (nbr) {
      $('.security-pixel-grid td').removeClass('highlight');
      $('.security-pixel-grid td#cell-' + nbr).addClass('highlight');
      if ($('.security-pixel-grid td#cell-' + nbr).hasClass('black')) {
         return 'black';
      } else {
         return 'white';
      }
   },

   resetCellHighlight: function() {
      $('.security-pixel-grid td').removeClass('highlight');
   },

   blocklyConsole: function(text = 'default text') {
      var self = Sonet.am.scorm.FINGERPRINT_T04;
      console.log("Blockly Print -->> ", text, ' | ', self.securityGridPixelCount)
   },

   resetInitialPosition: function (x, y) {
      if ($(".fingerprint").hasClass('task-05')) {
         $( ".fingerprint .blocklyTrash" ).next().attr('transform', 'translate(' + x + ',' + y +')');
         $('.blocklyNonEditableText').next().next().next().next().attr('transform', 'translate(180,30)');
      }
   },

   resetSelection: function () {
      $('.cmp-r').removeClass('selected')
      $('table.test-pixel-grid').removeClass('active-table');
      $('.img-name').removeClass('active-block');
      $('.grid-name').removeClass('active-block');
      $('td').removeClass('highlight');
   },

    countColourPixel: function (i,currentCount,currentColour) {
      var me = this;
      var self = Sonet.am.scorm.FINGERPRINT_T04;
      if(self.securityGridPixelCount == true){
         var currentTableId = "fm-grid-01";
      }else{
         var currentTableId = $('.active-table').attr('id');
      }
      
      $('#'+currentTableId+' tr td').removeClass('highlight');
      $('#'+currentTableId+' tr td#cell-' + i).addClass('highlight');

      //only black squre has class "black", white square don't have class "white"
      if ((currentColour=='black' && $('#' + currentTableId + ' tr td#cell-' + i).hasClass('black')) || 
          (currentColour=='white' && !$('#' + currentTableId + ' tr td#cell-' + i).hasClass('black'))) {
            currentCount += 1;
      }
      

      if (i == 64) {                  
         $('#' + currentTableId + ' tr td').removeClass('highlight');
      }
      return currentCount;
    },

    countGridPixel: function (i) {
      var me = this;
      var self = Sonet.am.scorm.FINGERPRINT_T04;
      // self.testBlackCount = 0;
      // self.testWhiteCount = 0;
      self.noMatch = null;
      self.match = null;
      self.securityBlackCount = parseInt($('#output-text-7').text());
      self.securityWhiteCount = parseInt($('#output-text-8').text());
      activeTableId = $('.active-table').attr('id');

      function printPixelCount () {
         if (self.securityGridPixelCount == true) {
            $('#fm-grid-01 tr td').removeClass('highlight');
            self.printVal($('#output-text-1').text() + ' ' + $('#output-text-2').text())
            self.printVal($('#output-text-5').text() + ' = ' + self.securityBlackCount)
            self.printVal($('#output-text-6').text() + ' = ' + self.securityWhiteCount)
         }
         if (self.testGridPixelCount == true) {
            $('#' + activeTableId + ' tr td').removeClass('highlight');
            self.printVal($('.grid-name.active-block').text() + ' ' + $('.img-name.active-block').text())
            self.printVal($('#output-text-5').text() + ' = ' + self.testBlackCount)
            self.printVal($('#output-text-6').text() + ' = ' + self.testWhiteCount)
         }
      }

      if (self.securityGridPixelCount == true) {
         $('#fm-grid-01 tr td').removeClass('highlight');
         $('#fm-grid-01 tr td#cell-' + i).addClass('highlight');
         if (i == 64 && $(".fingerprint.archived-task-03").length == 0) {                  
            printPixelCount ();
         }
      }

      if (self.testGridPixelCount == true) {
         if ($('#' + activeTableId + ' tr td#cell-' + i).hasClass('black')) {
            self.testBlackCount += 1;
         } else {
            self.testWhiteCount += 1;
         }

         $('#' + activeTableId + ' tr td').removeClass('highlight');
         $('#' + activeTableId + ' tr td#cell-' + i).addClass('highlight');

         if (i == 64) {
            printPixelCount ();
            self.testBlackCount = 0;
            self.testWhiteCount = 0;
         }
      }
   },
   
   getPixelCount: function () {
      data = {}
      data['testBlackCount'] = {};
      data['testWhiteCount'] = {};
      data['securityBlackCount'] = {};
      data['securityWhiteCount'] = {};

      testBlackCount = $('table.active-table tr td.black').length;
      testWhiteCount = 64 - testBlackCount;
      data['testBlackCount'] = testBlackCount;
      data['testWhiteCount'] = testWhiteCount;
      data['securityBlackCount'] = parseInt($('#output-text-7').text());
      data['securityWhiteCount'] = parseInt($('#output-text-8').text());
      return data;
   },

   setTestGridPixelCount: function (data) {
      var self = Sonet.am.scorm.FINGERPRINT_T04;
      self.testGridPixelCount = data;
   },

   setSecurityGridPixelCount: function (data) {
      var self = Sonet.am.scorm.FINGERPRINT_T04;
      self.securityGridPixelCount = data;  
   }, 

   outputResult: function (data) {
      if ($(".fingerprint.task-03").length > 0) {  
      var textMatch = $('[data-am-translate="fpm.task03.workspace.text.7"]').length > 0 ? $('[data-am-translate="fpm.task03.workspace.text.7"]').text() : 'Match';
      var textNomatch = $('[data-am-translate="fpm.task03.workspace.text.8"]').length > 0 ? $('[data-am-translate="fpm.task03.workspace.text.8"]').text() : 'No Match';
      }
      var me = this;
      var self = Sonet.am.scorm.FINGERPRINT_T04;  
      self.printVal(data);
      
      var G1index = Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1[0] == 'null' ? true:false;
      var G2index = Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2[0] == 'null' ? true:false;
      
      if(data == textMatch){

         if(Sonet.am.scorm.FINGERPRINT_T04.t3ActiveGrid == "Test Pixel Grid 1"){
            if(G1index){
               Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1.pop();
            }
            Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1.push('true');
         } 

         if(Sonet.am.scorm.FINGERPRINT_T04.t3ActiveGrid == "Test Pixel Grid 2"){
            if(G2index){
               Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2.pop();
            }
            Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2.push('true');
         }
      }
      if(data == textNomatch){
         if(Sonet.am.scorm.FINGERPRINT_T04.t3ActiveGrid == "Test Pixel Grid 1"){
            if(G1index){
               Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1.pop();
            }
            Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1.push('false');
         } 
         if(Sonet.am.scorm.FINGERPRINT_T04.t3ActiveGrid == "Test Pixel Grid 2"){
            if(G2index){
               Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2.pop();
            }
            Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2.push('false');
         } 
      }
   },

   getInitialCode: function () {
      var me = this;
      var initCode = '';
      
      initCode = '\n';
      return initCode;
   },

   setInterpreterProperty: function (interpreter, scope) {
      var me = this;
   },

   printVal: function (data, reset) { 
      if(data == "Test Pixel Grid 1"){
         Sonet.am.scorm.FINGERPRINT_T04.t3ActiveGrid = "Test Pixel Grid 1";
      }
      if(data == "Test Pixel Grid 2"){
        Sonet.am.scorm.FINGERPRINT_T04.t3ActiveGrid =  "Test Pixel Grid 2";
      }
      if (reset) {
         $('.blockly-output').text('').append('<p>' + data + '</p>');
      }
      else {
         $('.blockly-output').append('<p>' + data + '</p>');
      }
      Sonet.am.scorm.FINGERPRINT_T04.SGBlackCount = $('.blockly-output p:nth-child(3)').text();
      Sonet.am.scorm.FINGERPRINT_T04.SGWhiteCount = $('.blockly-output p:nth-child(5)').text();
   },

   resetPrintArea: function () {
      $('.blockly-output').text('');
   },

   resetOutput: function () {
      Sonet.am.scorm.FINGERPRINT_T04.SGBlackCount = $('.blockly-output p:nth-child(3)').text();
      Sonet.am.scorm.FINGERPRINT_T04.SGWhiteCount = $('.blockly-output p:nth-child(5)').text();
      $('.blockly-output').text('');
      Sonet.am.scorm.FINGERPRINT_T04.resetSelection();
      $('.cmp-r#fingerprint-ico-1').addClass('selected');
      $('.test-pixel-grid[data-id="fingerprint-1"]').addClass('active-table');
      $('.img-name[data-id="fingerprint-owner-1"]').addClass('active-block');
      $('.grid-name[data-id="fingerprint-grid-1"]').addClass('active-block');
   },

   // to get current content of task
   getContent: function (el) {

      var me = this
      var data = {};
      data['taskId'] = $('#task').attr('data-itemid');
      data['output'] = {};
      data['output']['text'] = {};
      data['output']['fingerprintIconSelected'] = null;
      data['output']['fingerprintTableSelected'] = null;
      data['output']['fingerprintOwnerName'] = null;
      data['output']['fingerprintGridName'] = null;

      $('.blockly-output p').each(function (i) {
         data['output']['text'][i] = $(this).text();
      });
      data['output']['fingerprintIconSelected'] = $('.cmp-r.selected').attr('id');
      data['output']['fingerprintTableSelected'] = $('.test-pixel-grid.active-table').attr('data-id');
      data['output']['fingerprintOwnerName'] = $('.img-name.active-block').attr('data-id');
      data['output']['fingerprintGridName'] = $('.grid-name.active-block').attr('data-id');   
      return data;
   },

   loadContent: function (data) {

      var me = this;

      if (data && typeof data['output'] != 'undefined') {
         if (data['taskId'] == $('#task').attr('data-itemid')) {
            me.resetSelection();
            $('.cmp-r#' + data['output']['fingerprintIconSelected']).addClass('selected');
            $('.test-pixel-grid[data-id="' + data['output']['fingerprintTableSelected'] + '"]').addClass('active-table');
            $('.img-name[data-id="' + data['output']['fingerprintOwnerName'] + '"]').addClass('active-block');
            $('.grid-name[data-id="' + data['output']['fingerprintGridName'] + '"]').addClass('active-block');

            outputText = data['output']['text'];
            $('.blockly-output').text('');
            for (var key in outputText) {
               $('.blockly-output').append('<p>' + outputText[key] + '</p>');            
            }
         }
      }
   },
   getBlackWhiteCount: function(){
      var me=this;
      let output = {
         SGBC : me.SGBlackCount,
         SGWC : me.SGWhiteCount
      }
      return output;
   },
   matchNomatchGrid : function(){
      let matchNomatch = {
         TPG1:Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1,
         TPG2:Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2
      }
   return matchNomatch;
   },
   getBLocklyXML: function (){
      let workspace = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
      return Blockly.Xml.domToText(workspace)
     },

   saveEventResponses: function (id) {
      var me = this;

      var GBlockly = Sonet.am.scorm.GOOGLE_BLOCKLY;
      let eventTracker = Sonet.am.widgets.eventTracker
      // eventData = {},
      dataResultToSave = {},
      saveEvents = false
      if($(".fingerprint.task-04").hasClass('task-02-only')){         
         saveEvents = true
      /* commenting this code to revert the gnext code as per the requirment in ticket AM-40873 */  
      /*    isGNextClicked = Sonet.am.App.isgNextClicked;                  
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
               
               // eventData.SGBC = $('.blockly-output p:nth-child(3)').text()
               // eventData.SGWC = $('.blockly-output p:nth-child(5)').text()
               dataResultToSave= {
                  Workspace:me.currentWorkSpace,
                  commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
                  output:me.getBlackWhiteCount()     
               }
               Sonet.am.scorm.ICILS2023MS.eventDataRecording("NextTaskButton", null,dataResultToSave); 
            }
            if( dataResultToSave ){
               GBlockly.quickRun = Sonet.am.App.isgNextClicked = me.isWorkspaceChanged = false;
            }
         }
         // eventData.SGBC = $('.blockly-output p:nth-child(3)').text()
         // eventData.SGWC = $('.blockly-output p:nth-child(5)').text()
      else{ */
         dataResultToSave= {
            Workspace:me.getBLocklyXML(),
            commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
            output:me.getBlackWhiteCount()          
         }
         Sonet.am.scorm.ICILS2023MS.eventDataRecording("RunProgram", null,dataResultToSave); 
      // }
      }
      if(id === 'fpm03'){ 
         saveEvents = true
        /* commenting this code to revert the gnext code as per the requirment in ticket AM-40873 */  
        /*  isGNextClicked = Sonet.am.App.isgNextClicked;                  
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
               // eventData.TPG1 =  Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1;
               // eventData.TPG2 =  Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2;
               
               dataResultToSave= {
                  Workspace:me.currentWorkSpace,
                  commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,
                  output : me.matchNomatchGrid()     
               }
               Sonet.am.scorm.ICILS2023MS.eventDataRecording("NextTaskButton", null,dataResultToSave); 
            }
            if(dataResultToSave){
               GBlockly.quickRun = Sonet.am.App.isgNextClicked = me.isWorkspaceChanged = false;
            }
         }
         // eventData.TPG1 =  Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG1;
         // eventData.TPG2 =  Sonet.am.scorm.FINGERPRINT_T04.matchNomatchG2;
         else{ */
            dataResultToSave= {
               Workspace:me.getBLocklyXML(),
               commands: Sonet.am.scorm.GOOGLE_BLOCKLY.workspaceBlockCount,             
               output : me.matchNomatchGrid()          
            }
            Sonet.am.scorm.ICILS2023MS.eventDataRecording("RunProgram", null,dataResultToSave); 
      //   }
      }
      // if (saveEvents)
      //  eventTracker.saveData(eventData)
      },

   // to load the content on page refresh or reload 
   loadResults: function () {
      var me = this;
      var id = $('#task').attr('data-itemid');
      var dataSave = $('#task').attr('data-save');
      scormApi = Sonet.am.scorm.ScormWrapper;

      if (dataSave) {
         content = scormApi.getInteraction(id, true);

         if (content) {
            me.loadContent(JSON.parse(content));
         }
         me.resetTask3ScrollBar();
      }      
   },

   // to save the result in the database
   saveResults: function () {
      var me = this;
      var id = $('#task').attr('data-itemid');
      var dataSave = $('#task').attr('data-save');
      me.saveEventResponses(id);

      if (dataSave != 'false') {
         content = JSON.stringify(me.getContent());
         scormApi = Sonet.am.scorm.ScormWrapper;
         pos = scormApi.getInteractionPos(id);

         scormApi.setValue('cmi.interactions.' + pos + '.id', id);
         scormApi.setValue('cmi.interactions.' + pos + '.type', 'other');
         scormApi.setValue('cmi.interactions.' + pos + '.learner_response', content);
      }
   }
}