AFRAME.registerComponent("click-evt", {
    init:function(){
        this.reg()
    },

    reg:function(){
        this.el.addEventListener("click", ()=>{
            var sky = document.querySelector("#sky")
            var id = this.el.getAttribute("id")

            var front = document.querySelector("#front").setAttribute("color", "green")
            var room1 = document.querySelector("#room1").setAttribute("color", "green")
            var room2 = document.querySelector("#room2").setAttribute("color", "green")
            var room3 = document.querySelector("#room3").setAttribute("color", "green")
            var room4 = document.querySelector("#room4").setAttribute("color", "green")
            var room5 = document.querySelector("#room5").setAttribute("color", "green")



            this.el.setAttribute("color", "blue")
            sky.setAttribute("src", `./assets/${id}.jpeg`)
        })
    }
})