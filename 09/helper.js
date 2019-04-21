function Helper() {

      this.addClass = function(el, classes) {
        try {
            if (!Array.isArray(classes)) {
                throw new Error('Param should be an array of strings');
            }

            let classList = el.classList;
            classes.forEach(function(item){
                if (classList.contains(String(item))) {
                    return false;
                }

                classList.add(String(item));
            });
        } catch (e) {
            console.log(e.message);
            return false;
        }

    };

    this.removeClass = function(el, classes) {
        try {
            if (!Array.isArray(classes)) {
                throw new Error('Param should be an array of strings');
            }

            let classList = el.classList;
            classes.forEach(function(item){
                if (classList.contains(String(item))) {
                    classList.remove(String(item));
                }

                return true;

            });
        } catch (e) {
            console.log(e.message);
            return false;
        }

    };
}