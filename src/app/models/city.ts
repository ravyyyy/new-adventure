export interface City {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const CITIES: City[] = [
    {name: 'Buzau', id: '1', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/buzau.jpg'},
    {name: 'Bucuresti', id: '2', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/bucharest.jpg'},
    {name: 'Brasov', id: '3', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/brasov.jpg'},
    {name: 'Timisoara', id: '4', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/timisoara.jpg'},
    {name: 'Cluj-Napoca', id: '5', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/cluj-napoca.jpg'},
    {name: 'Iasi', id: '6', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/iasi.jpg'},
    {name: 'Constanta', id: '7', description: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...', image: './assets/images/constanta.jpg'}
];