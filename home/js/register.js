class layuiEvents {
    constructor() {

    }

    layuiEvent() {
        layui.use('form', function(){
          var form = layui.form;

          //各种基于事件的操作，下面会有进一步介绍
          form.on('submit(form)', function(data){
            var jsonData = data.field
            // jsonData的格式 {
            //     name: "B",
            //     title: "88hahaha"
            // }
            console.log(data.field)     //当前容器的全部表单字段，名值对形式：{name: value}


            //window.location.href = 'rater.html'

            return false;   //阻止表单跳转。如果需要表单跳转，去掉这段即可。
          });

          form.verify({
              username: function(value, item){  //value：表单的值、item：表单的DOM对象
                if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                      return '用户名不能有特殊字符';
                }
                if(/(^\_)|(\__)|(\_+$)/.test(value)){
                      return '用户名首尾不能出现下划线\'_\'';
                }
                if(/^\d+\d+\d$/.test(value)){
                      return '用户名不能全为数字';
                }
              }
            });
        });
    }
}


const _main = () => {
    let layuiEvent = new layuiEvents()
    layuiEvent.layuiEvent()

}

_main()
