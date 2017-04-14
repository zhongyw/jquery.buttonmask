/**
 * Created by zhongyw on 2017/4/14.
 */

(function($){
    $.fn.buttonmask = function (opt, param) {
        if((typeof opt) === 'string'){
            switch(opt){
                case 'show':
                    this.each(function(){
                        showMask(this, param);
                    });
                    break;
                case 'hide':
                    this.each(function(){
                        hideMask(this, param);
                    });
                    break;
            }
        }
    }
    function showMask(target, param){
        var $el = $(target);
        var text = param ? (param.text || '&nbsp;') : '&nbsp;';
        var borderWidth = $el.css('border-top-width');
        var leftTop = 'left:0px;top:0px;';
        if(borderWidth && borderWidth != 'initial'){
            leftTop = 'left:-' + borderWidth + ';top:-' + borderWidth;
        }
        $el.css({position:'relative'});
        if($('.submit-mask').length  === 0){
            $el.append('<div class="submit-mask" style="position: absolute;z-index: 2;background-color: #888; color:#fff; text-align: center; '+ leftTop + ';display:table;font-size:12px; cursor:wait;" ><div style="display:table-cell; height:100%;vertical-align:middle;text-align:center;"><span style="">' +
//                        '<svg  style="vertical-align:middle;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">'+
//                        '<circle transform="translate(8 0)" cx="0" cy="16" r="0">' +
//                        '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0" '+
//                    'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />'+
//                        '</circle>'+
//                        '<circle transform="translate(16 0)" cx="0" cy="16" r="0">'+
//                        '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3" '+
//                    'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />'+
//                        '</circle>'+
//                        '<circle transform="translate(24 0)" cx="0" cy="16" r="0">'+
//                        '<animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6" '+
//                    'keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />'+
//                        '</circle>'+
//                        '</svg>'+
                '<svg style="vertical-align:center;margin-bottom:-6px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="white">'+
                '<path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>'+
                '<path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">'+
                '<animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />'+
                '</path>'+
                '</svg>'+
                '<span style="display:inline-block;line-height:32px;height:32px;margin-left:3px;">' + text + '</span>' +
                '</div>' +
                '</div></div>');

            $('.submit-mask').css({width:$el.outerWidth(), height: $el.outerHeight()});
            $('.submit-mask').click(function(){
                return false;
            });
        }
        $('.submit-mask').show();
    }
    function hideMask(target){
        $('.submit-mask').hide();
    }
})(jQuery);