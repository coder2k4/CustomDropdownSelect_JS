class Dropdown {
    constructor(selector, options) {
        this.$el = document.getElementById(selector);
        this.items = options.items;
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open'))
                    this.close();
                else
                    this.open();
            }
            //Перебираем все доступные li в мени и передаем значение в label
            // document.querySelectorAll('.dropdown__menu li').forEach((item, i, arr)=>{
            //     if(event.target === item)
            //     {
            //         this.$el.querySelector('.dropdown__label').textContent = item.textContent;
            //         this.close();
            //     }
            // });

            if(event.target.tagName.toLowerCase() === 'li')
            {
                this.$el.querySelector('.dropdown__label').textContent = event.target.textContent;
                this.close();
            }

        });
        const htmlItems = this.items.map(item => {
            return `<li id="${item.id}">${item.label}</li>`
        }).join('');
        // htmlItems.
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML("afterbegin", htmlItems);
    }

    //Добавляем класс, для отображения выпадающего списка
    open() {
        this.$el.classList.add('open');
    }

    //Удаляем класс для закрытия списка
    close() {
        this.$el.classList.remove('open');
    }
}


const dropdown = new Dropdown('dropdown',
    {
        items: [
            {label: 'Москва', id: 'msk'},
            {label: 'Владимир', id: 'vldmr'},
            {label: 'Орел', id: 'orl'},
            {label: 'Раменское', id: 'rmsk'}
        ]
    }
);