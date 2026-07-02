export interface Pokemon{
    id:number,
    Nombre:string,
    Imagen:string,
    Precio:number,
    Descripcion:string,
}
import img1 from '../assets/Productos/1.png'
import img2 from '../assets/Productos/2.png'
import img3 from '../assets/Productos/3.png'
import img4 from '../assets/Productos/4.png'
import img5 from '../assets/Productos/5.png'

const ListarPokemon:Pokemon[]=[
    {
        id:1,
        Nombre:"holaaa",
        Imagen:img1,
        Precio:1111,
        Descripcion:"asddd"
    },
    {
        id:2,
        Nombre:"hol",
        Imagen:img2,
        Precio:2222,
        Descripcion:"asddd"
    },
    {
        id: 3,
        Nombre:"hoolaaa",
        Imagen:img3,
        Precio:3333,
        Descripcion:"asddd"
    },
    {
        id:4,
        Nombre:"holaa",
        Imagen:img4,
        Precio:4444,
        Descripcion:"asddd"
    },
    {
        id:5,
        Nombre:"hola",
        Imagen:img5,
        Precio:5555,
        Descripcion:"asddd"
    }
];
export{ListarPokemon};