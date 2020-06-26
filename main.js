let coin = {
    state: 0,
    flip: function () {

        this.state = Math.round(Math.random())
        console.log(this.state)
    },
    toString: function () {
        coin.flip()

        if (this.state === 0) {

            document.body.append(' head ')
        } else {
            document.body.append(' tails ')

        }
    },


    toHTML: function () {
        let image = document.createElement('img');
        coin.flip()
        image.style.width = 50 + 'px'
        image.style.height = 50 + 'px'
        if (this.state === 0) {
            image.src = "./head coin.jpg"
            document.body.append(image)

        } else {
            image.src = "./tail coin.jpg"
            document.body.append(image)
        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        // return image;
    }
};


function flips() {
    let flips = 20
    for (let index = 0; index < flips; index += 1) {
        coin.toString()
    }

};
function pic(){
    let flips = 20
for ( let index = 0; index < flips; index +=1){
    coin.toHTML()
}
};

// 2 function 20 times .append
function check() {
    coin.toString()
    coin.toHTML()
};
flips()
pic()