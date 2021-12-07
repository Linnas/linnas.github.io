class clickEvents {
    constructor() {

    }

    clickTextarea() {
        let remarkText = e('.remarkText'),
            textarea = e('#textarea');

        remarkText.onclick = function() {
            textarea.focus()
            remarkText.classList.add('none')
        }

        textarea.onfocus = function() {
            remarkText.classList.add('none')
        }

        textarea.onblur = function() {
            if (textarea.value == '') {
                remarkText.classList.remove('none')
            }
        }
    }
}

class layuiEvents {
    constructor() {

    }

    layuiEvent() {
        layui.use('form', function(){
            var form = layui.form;

          //各种基于事件的操作，下面会有进一步介绍
            form.on('submit(form)', function(data) {
                var jsonData = data.field
            // jsonData的格式 {
            //     name: "B",
            //     title: "88hahaha"
            // }

                console.log(data.field)     //当前容器的全部表单字段，名值对形式：{name: value}

                window.location.href = 'AScore.html'

                return false;   //阻止表单跳转。如果需要表单跳转，去掉这段即可。
            });

            form.verify({
                username: function(value, item) {
                    if (value == '') {
                        return '请填写分数';
                    }

                    if (Number(value) > 100) {
                        return '最大分数为100';
                    }

                    if (!(/^\+?[1-9][0-9]*$/.test(value))) {
                        return '请填写整数分数';
                    }

                    // if(!(/^\d+\d+\d$/.test(value))) {
                    //     return '请填写数字';
                    // }
                }
            });
        });
    }
}

const _main = () => {
    let clickEvent = new clickEvents()
    clickEvent.clickTextarea()

    let layuiEvent = new layuiEvents()
    layuiEvent.layuiEvent()
}

_main()
