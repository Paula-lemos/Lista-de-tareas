import "./App.css";
import Formu from "./components/formu";
import HeadList from "./components/HeadList";
import TituloLista from "./components/TituloLista";

function App() {
  let cosasPorHacer = [
    {
      id: 1,
      Tarea: "Arreglar habitación",
      imgUrl:
        "https://png.pngtree.com/png-vector/20190826/ourmid/pngtree-bed-png-image_1697749.jpg",
      imgAlt: "Tarea 1",
    },
    {
      id: 2,
      Tarea: "Limpiar el baño",
      imgUrl:
        "https://w1.pngwing.com/pngs/556/674/png-transparent-toilet-furo-baths-bathroom-cleaning-limescale-mold-tile.png",
      imgAlt: "Tarea 2",
    },
    {
      d: 3,
      Tarea: "Hacer mis tareas",
      imgUrl:
        "https://png.pngtree.com/element_origin_min_pic/17/09/07/862f102cbf831be7724c65c257fcd03f.jpg",
      imgAlt: "Tarea 3",
    },
    {
      id: 4,
      Tarea: " Ada School",
      imgUrl:
        "https://media-exp2.licdn.com/dms/image/C4D0BAQG5biJdV6kJ4Q/company-logo_200_200/0/1612374342807?e=2147483647&v=beta&t=TJ_iL4rrS-EqnvpLXMMK9XgdlRq7ihfb6vKs5X6ZIxU",
      imgAlt: "Tarea 4",
    },
    {
      id: 5,
      Tarea: "Pagar recibo",
      imgUrl:
        "https://e7.pngegg.com/pngimages/335/565/png-clipart-receipt-graphy-receipt-text-material.png",
      imgAlt: "Tarea 5",
    },
    {
      id: 6,
      Tarea: "Hacer ejercicio",
      imgUrl:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-pilates_114360-1111.jpg?w=2000",
      imgAlt: "Tarea 6",
    },
    {
      id: 7,
      Tarea: "Estudiar Ingles",
      imgUrl:
        "https://i0.wp.com/formaciononline.eu/wp-content/uploads/2017/10/aprender-ingles-basico.png?fit=640%2C296&ssl=1",
      imgAlt: "Tarea 7",
    },
    {
      id: 8,
      Tarea: "Comida a mis perros",
      imgUrl:
        "https://recetasbarf.com/wp-content/uploads/2020/02/recetas-de-comida-casera-para-cachorros.png",
      imgAlt: "Tarea 8",
    },
    {
      id: 9,
      Tarea: "Sacar perros",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/91/91505.png",
      imgAlt: "Tarea 9",
    },
    {
      id: 10,
      Tarea: "Dormir",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/1422/1422872.png",
      imgAlt: "Tarea 10",
    },
  ];

  return (
    <div>
      <HeadList encabezado={"Lista de tareas"} />
      {cosasPorHacer.map((cosasPorHacer) => (
        <TituloLista
          key={cosasPorHacer.id}
          Tarea={cosasPorHacer.Tarea}
          imgUrl={cosasPorHacer.imgUrl}
          imgAlt={cosasPorHacer.imgAlt}
        />
      ))}
      <Formu
        Tarea={"Añade una nueva tarea"}
        imgUrl={
          "http://assets.stickpng.com/thumbs/5aa78e267603fc558cffbf1a.png"
        }
        imgAlt={""}
      />
    </div>
  );
}

export default App;
