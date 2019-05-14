class FindOnPage {
    constructor() {
        this.buttonForSearch = document.querySelector('.button_for_search');
        this.resultSearch = [];
        this.find();
    }

    find() {
        const listOnPage = document.querySelector('.products-list').getElementsByTagName('h2');
        console.log(listOnPage);

        this.buttonForSearch.addEventListener('click', () => {
            this.valueInputForSearch = document.getElementById('input_for_search').value;
            console.log(this.valueInputForSearch);
        });
    }
}

const findOnPage = new FindOnPage();


