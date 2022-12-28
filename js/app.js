(!function(){
    "use strict"

    const EQUAL = `equal`;
    const CLEAR = `cls`;
    const DEL = `del`;
    const DATE = `date`;

    let $_g = document.querySelectorAll('.operate-item');
    let $_s = document.querySelector('#_y');

    const setScreen = function(newValue, concat = false) {
        let _s = $_s.value;

        if (newValue === EQUAL) {
            return $_s.value = eval(_s);
        }

        if (newValue === DEL) {
            return $_s.value = _s.slice(0, -1);
        }

        $_s.value = concat ? _s + newValue: newValue;
    }

    $_g.forEach($elt => {
        $elt.addEventListener('click', function() {
            let _v = this.getAttribute('data-calc-value');

            if (_v === CLEAR){
                return setScreen(null);
            }

            if ($_s.value.length > 10){
                return setScreen(`Depassement !`);
            }

            if(_v === DATE) {
                return setScreen(new Date().toLocaleString());
            }
    
            setScreen(_v, true);
        })
    });

}())