class clickEvents {
    constructor() {

    }

    static judgeTabBox(tabBox, ele) {
        let tab = tabBox.children
        let tabEvent = Array.prototype.forEach.call(tab, function(r) {
            if (r.classList.contains('tab')) {
                r.classList.remove('tab')
            }
            ele.classList.add('tab')
        })
        return tabEvent
    }

    static judgeTitleBox(tabBox, ele) {
        let tab = tabBox.children
        let tabEvent = Array.prototype.forEach.call(tab, function(r) {
            if (r.dataset.name == ele) {
                r.classList.remove('none')
            } else {
                if (!r.classList.contains('none')) {
                    r.classList.add('none')
                }
            }
        })
        return tabEvent
    }

    // static judgeTitleBox(tabBox, ele) {
    //     let tab = tabBox.children
    //     let tabEvent = tab.forEach(function(r) {
    //         if (!r.classList.contains('none')) {
    //             r.classList.add('none')
    //             ele.classList.remove('none')
    //             return
    //         }
    //     })
    //     ele.classList.remove('none')
    // }

    clickTabBox() {
        let tabBox = e('.tabBox'),
            titleCover = e('.titleCover'),
            titleBox = e('.titleBox'),
            title2 = e('.title2');
        tabBox.addEventListener('click', function(event) {
            let self = event.target,
                name = self.dataset.name;

            if (self != event.currentTarget) {
                if (!titleCover.classList.contains('none')) {
                    titleCover.classList.add('none')
                }

                clickEvents.judgeTabBox(tabBox, self)

                if (name == '1') {
                    clickEvents.judgeTitleBox(titleBox, name)

                } else if (name == '2') {
                    clickEvents.judgeTitleBox(titleBox, name)

                } else if (name == '3') {
                    clickEvents.judgeTitleBox(titleBox, name)

                } else if (name == '4') {
                    clickEvents.judgeTitleBox(titleBox, name)

                } else if (name == '5') {
                    clickEvents.judgeTitleBox(titleBox, name)

                } else if (name == '6') {
                    clickEvents.judgeTitleBox(titleBox, name)

                }
            }
        })
    }
}


const _main = () => {
    let clickEvent = new clickEvents()
    clickEvent.clickTabBox()
    // clickEvents.clickExample()
    // clickEvent.clickSideslip()
    // clickEvent.clickItem()

}

_main()
